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
- [ ] Implement actual Google Calendar API integration (replace mock data)
- [ ] Add navigation link to events page in header
- [ ] Add event images to public folder
- [ ] Test and refine responsive design

## Completed Tasks
*This section will track completed work*

## Notes
- Uses Next.js 15.3.5 with React 19
- Styling with Tailwind CSS
- Animations with Framer Motion
- Analytics with Vercel Analytics
- TypeScript enabled