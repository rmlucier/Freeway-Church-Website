# Freeway Church Website - Development Notes

## Project Overview
Next.js website for Freeway Church with the following structure:
- Home page with Hero, ServiceTimes, Programs, NextSteps sections
- About page
- Connect page  
- Give page
- Messages page
- Watch Online page

## Development Commands
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run linting

## Todo List
### Around Freeway Church Events Feature
- [x] Research rivervalley.org website to understand the 'around freeway church' carousel/slider design
- [x] Set up Google Calendar API integration to pull upcoming events (basic structure)
- [x] Create events page structure and routing
- [x] Design and implement the carousel/slider component for events
- [x] Create event card components with image and information display
- [x] Implement responsive design for mobile and desktop

### Next Steps
- [ ] Add event images to public folder
- [ ] Test and refine responsive design

## Completed Tasks
### Around Freeway Church Events Feature (Completed)
- [x] Research rivervalley.org website design
- [x] Set up Google Calendar API integration
- [x] Create events page structure and routing
- [x] Design and implement Swiper carousel component
- [x] Create event card components with image mapping
- [x] Implement responsive design for all screen sizes
- [x] Install googleapis and swiper packages
- [x] Configure environment variables and API credentials
- [x] Test with real calendar data
- [x] Commit to git and push to GitHub
- [x] Add events carousel to homepage after Hero section
- [x] Add Events link to Header and Footer navigation

**Files created:**
- `src/app/events/page.tsx` - Events page
- `src/app/api/events/route.ts` - API endpoint
- `src/components/sections/EventsCarousel.tsx` - Carousel component
- `src/components/ui/EventCard.tsx` - Event card component
- `src/lib/google-calendar.ts` - Client-side API integration
- `CLAUDE.md` - Development tracking document

## Technical Implementation Details

### Google Calendar Integration
- **Calendar ID**: `c_md09veggphlh418qgt0vrr0420@group.calendar.google.com`
- **API Key**: Configured in `.env.local` (not committed to git)
- **Calendar Status**: Public with "See all event details" permissions
- **API Route**: `/api/events` handles server-side Google Calendar API calls
- **Packages**: googleapis, swiper for carousel functionality

### Event Carousel Features
- **Design**: Based on rivervalley.org "Around River Valley" section
- **Responsive**: 1.1 slides on mobile → 4.25 slides on desktop
- **Navigation**: Touch/swipe, keyboard, and arrow button support
- **Smart Images**: Auto-assigns default images based on event type
- **Location**: Homepage after Hero section + dedicated `/events` page

### Navigation Integration
- **Header**: Events link between "About Us" and "Messages"
- **Footer**: Events link in "Freeway Media" section
- **Mobile**: Responsive mobile menu includes Events link

## Notes
- Uses Next.js 15.3.5 with React 19
- Styling with Tailwind CSS
- Animations with Framer Motion
- Analytics with Vercel Analytics
- TypeScript enabled
- Real-time calendar data with fallback to mock events