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

## Current Status
**Design Theme**: River Valley-inspired dark theme with PT Serif typography and gold accent colors
**Last Updated**: 2025-01-15 - Header and hero sections redesigned
**Repository**: https://github.com/rmlucier/Freeway-Church-Website.git

## Design System

### Color Palette (River Valley Inspired)
- **Primary Gold**: `#d3b975` - Main accent color
- **Primary Dark**: `#b8a160` - Darker gold variant
- **Primary Light**: `#e0c688` - Lighter gold variant
- **Background**: `#231f20` - Main dark background
- **Near Black**: `#1a1617` - Secondary dark background
- **Light Gray**: `#aba7a5` - Text and UI elements
- **Medium Gray**: `#808080` - Secondary text
- **Dark Gray**: `#4a4a4a` - Borders and dividers

### Typography
- **Font Family**: PT Serif (serif font for sophisticated look)
- **Weights**: 400 (normal), 700 (bold)
- **Usage**: Both headings and body text use PT Serif

### Component Styles
- **Buttons**: Clean, minimal design with gold primary color
- **Cards**: Dark backgrounds with subtle borders
- **Navigation**: Elegant hover animations with underline effects
- **Headers**: Backdrop blur with dark background

## Completed Tasks

### River Valley Design Implementation (January 2025)
- [x] Analyze River Valley website design and extract color palette
- [x] Update color system to match River Valley's gold theme (#d3b975)
- [x] Implement PT Serif typography throughout the site
- [x] Redesign header with backdrop blur and elegant animations
- [x] Update hero section with refined typography and gold accents
- [x] Redesign About page with consistent dark theme
- [x] Add smooth hover animations to navigation links
- [x] Update button styles to match River Valley's aesthetic
- [x] Implement mouse scroll indicator design
- [x] Commit and push all changes to GitHub

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
- [x] Add events carousel to homepage after Hero section
- [x] Add Events link to Header and Footer navigation

## Technical Implementation Details

### Google Calendar Integration
- **Calendar ID**: `c_md09veggphlh418qgt0vrr0420@group.calendar.google.com`
- **API Key**: Configured in `.env.local` (not committed to git)
- **Calendar Status**: Public with "See all event details" permissions
- **API Route**: `/api/events` handles server-side Google Calendar API calls
- **Packages**: googleapis, swiper for carousel functionality
- **Timezone**: America/Detroit

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

### Event Images
Located in `/public/images/`:
- `sunday-service.jpeg` - Sunday worship services
- `youth-ministry.jpg` - Youth group activities
- `womens-ministry.jpeg` - Women's ministry events
- `freewaychurchkidsway.jpeg` - Children's programs
- `teaching.jpeg` - Bible studies and teaching
- `fellowship.jpeg` - Fellowship events
- `volunteer.jpeg` - Volunteer opportunities

## File Structure

### Key Files Modified
- `src/app/globals.css` - Global styles and PT Serif font import
- `tailwind.config.ts` - Color palette and typography configuration
- `src/components/layout/Header.tsx` - Navigation header component
- `src/components/sections/Hero.tsx` - Homepage hero section
- `src/app/about/page.tsx` - About page with dark theme
- `src/app/api/events/route.ts` - Google Calendar API integration

### Original Files Created
- `src/app/events/page.tsx` - Events page
- `src/components/sections/EventsCarousel.tsx` - Carousel component
- `src/components/ui/EventCard.tsx` - Event card component
- `src/lib/google-calendar.ts` - Client-side API integration

## Recent Changes (January 15, 2025)

### Header Redesign
- Added backdrop blur effect (`bg-neutral-black/95 backdrop-blur-sm`)
- Increased header height and logo size
- Implemented elegant hover animations with underline effects
- Updated mobile menu with better spacing and typography
- Changed navigation links to use PT Serif font

### Hero Section Updates
- Enhanced typography with larger, more elegant text
- Added gold accent color to "FREEWAY" text
- Improved button styling to match River Valley aesthetic
- Updated mouse scroll indicator with modern design
- Better spacing and refined animations

### About Page Redesign
- Converted all sections to dark theme
- Implemented consistent typography scaling
- Added gold accent colors to section headings
- Updated mission section with larger, more prominent design
- Improved spacing and visual hierarchy

## Next Steps
- [ ] Update remaining pages (messages, events, connect, give, watch-online) hero sections
- [ ] Test responsive design across all devices
- [ ] Optimize images for better performance
- [ ] Add more interactive elements to match River Valley's sophistication

## Notes
- Uses Next.js 15.3.5 with React 19
- Styling with Tailwind CSS
- Animations with Framer Motion
- Analytics with Vercel Analytics
- TypeScript enabled
- Real-time calendar data with fallback to mock events
- Design inspired by rivervalley.org aesthetic