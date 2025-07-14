export interface CalendarEvent {
  id: string;
  title: string;
  description?: string;
  start: string;
  end: string;
  location?: string;
  image?: string;
}

export async function fetchCalendarEvents(): Promise<CalendarEvent[]> {
  try {
    const response = await fetch('/api/events', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch events');
    }

    const events: CalendarEvent[] = await response.json();
    return events;

  } catch (error) {
    console.error('Error fetching calendar events:', error);
    return [];
  }
}