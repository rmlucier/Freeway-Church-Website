import { NextResponse } from 'next/server';
import { google } from 'googleapis';

export interface CalendarEvent {
  id: string;
  title: string;
  description?: string;
  start: string;
  end: string;
  location?: string;
  image?: string;
}

const CALENDAR_ID = process.env.GOOGLE_CALENDAR_ID || 'c_md09veggphlh418qgt0vrr0420@group.calendar.google.com';
const API_KEY = process.env.GOOGLE_CALENDAR_API_KEY;

function extractImageFromDescription(description?: string): string | undefined {
  if (!description) return undefined;
  
  // Look for image URLs in the description
  const imageRegex = /https?:\/\/[^\s]+\.(?:jpg|jpeg|png|gif|webp)/gi;
  const match = description.match(imageRegex);
  return match ? match[0] : undefined;
}

function generateDefaultImage(title: string): string {
  // Generate a default image based on event type
  const lowerTitle = title.toLowerCase();
  
  if (lowerTitle.includes('sunday service') || lowerTitle.includes('worship service') || lowerTitle.includes('service') || lowerTitle.includes('worship')) {
    return '/images/FreewayBuilding.jpg';
  } else if (lowerTitle.includes('youth') || lowerTitle.includes('teen')) {
    return '/images/youth-ministry.jpg';
  } else if (lowerTitle.includes('women') || lowerTitle.includes("women's") || lowerTitle.includes('ladies')) {
    return '/images/womens-ministry.jpeg';
  } else if (lowerTitle.includes('kidsway') || lowerTitle.includes('kids') || lowerTitle.includes('children')) {
    return '/images/freewaychurchkidsway.jpeg';
  } else if (lowerTitle.includes('bible') || lowerTitle.includes('study')) {
    return '/images/bible-study.jpeg';
  } else if (lowerTitle.includes('prayer')) {
    return '/images/prayer.jpeg';
  } else if (lowerTitle.includes('music') || lowerTitle.includes('choir')) {
    return '/images/music.jpeg';
  } else if (lowerTitle.includes('teaching') || lowerTitle.includes('sermon') || lowerTitle.includes('message')) {
    return '/images/teaching.jpeg';
  } else if (lowerTitle.includes('fellowship') || lowerTitle.includes('meal') || lowerTitle.includes('dinner')) {
    return '/images/fellowship.jpeg';
  } else if (lowerTitle.includes('family') || lowerTitle.includes('picnic')) {
    return '/images/family-event.jpeg';
  } else if (lowerTitle.includes('volunteer') || lowerTitle.includes('serve')) {
    return '/images/volunteer.jpeg';
  } else {
    return '/images/church-event.jpeg';
  }
}

function getMockEvents(): CalendarEvent[] {
  return [
    {
      id: '1',
      title: 'Sunday Service',
      description: 'Join us for worship and fellowship',
      start: '2024-07-21T10:00:00',
      end: '2024-07-21T11:30:00',
      location: 'Main Sanctuary',
      image: '/images/FreewayBuilding.jpg'
    },
    {
      id: '2',
      title: 'Youth Group',
      description: 'Fun and fellowship for teens',
      start: '2024-07-24T19:00:00',
      end: '2024-07-24T21:00:00',
      location: 'Youth Center',
      image: '/images/youth-group.jpg'
    },
    {
      id: '3',
      title: 'Bible Study',
      description: 'Weekly Bible study and discussion',
      start: '2024-07-25T19:00:00',
      end: '2024-07-25T20:30:00',
      location: 'Fellowship Hall',
      image: '/images/bible-study.jpg'
    }
  ];
}

export async function GET(request: Request) {
  try {
    if (!API_KEY) {
      console.warn('Google Calendar API key not configured, using mock data');
      return NextResponse.json(getMockEvents());
    }

    const calendar = google.calendar({ version: 'v3', auth: API_KEY });
    
    const now = new Date();
    const timeMin = now.toISOString();
    const timeMax = new Date(now.getTime() + 90 * 24 * 60 * 60 * 1000).toISOString(); // 90 days from now

    const response = await calendar.events.list({
      calendarId: CALENDAR_ID,
      timeMin,
      timeMax,
      singleEvents: true,
      orderBy: 'startTime',
      maxResults: 10,
      timeZone: 'America/Detroit',
      key: API_KEY,
    });

    const events = response.data.items || [];

    const formattedEvents: CalendarEvent[] = events.map((event) => ({
      id: event.id || Math.random().toString(36),
      title: event.summary || 'Untitled Event',
      description: event.description || '',
      start: event.start?.dateTime || event.start?.date || now.toISOString(),
      end: event.end?.dateTime || event.end?.date || now.toISOString(),
      location: event.location || '',
      image: extractImageFromDescription(event.description || '') || generateDefaultImage(event.summary || 'Event')
    }));

    return NextResponse.json(formattedEvents);

  } catch (error) {
    console.error('Error fetching calendar events:', error);
    return NextResponse.json(getMockEvents());
  }
}