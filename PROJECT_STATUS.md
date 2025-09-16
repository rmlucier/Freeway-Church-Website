# Freeway Church Website - Project Status & Quick Reference

## Project Overview
**Name:** Freeway Church Website  
**Type:** Next.js Church Website with Brand Implementation  
**Status:** 🟢 Production Ready & Deployed  
**Local Path:** `/Users/fc-office/Development/Freeway-Church-Website/`  
**Repository:** https://github.com/rmlucier/Freeway-Church-Website  

## Leadership & Contact
**Lead Pastor:** Roy Lucier (roy@freeway.church)  
**Associate Pastor:** Elissa Lucier (elissa@freeway.church)  
**Address:** 28900 B Drive North, Albion, MI 49224  
**Phone:** (517) 798-0571  
**Website:** Live via Vercel (production ready)  

## Technology Stack
- **Framework:** Next.js 15.3.5 with React 19
- **Styling:** Tailwind CSS with River Valley inspired design
- **Language:** TypeScript
- **Animations:** Framer Motion
- **Calendar:** Google Calendar API integration
- **Deployment:** Vercel (auto-deploy from GitHub)

## Service Schedule
- **9:15 AM** - Pre-Service Prayer
- **10:00 AM** - Main Worship Service (LIVE STREAMED)
- **11:30 AM** - Fellowship
- **6:00 PM** - Freeway Youth
- **7:00 PM** - Young Adults

## Quick Commands
```bash
# Navigate to project
cd /Users/fc-office/Development/Freeway-Church-Website/

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Lint code
npm run lint

# Deploy
vercel --prod
```

## Website Pages (All Complete)
✅ **Homepage** - Hero, Events, About, Leadership, Next Steps  
✅ **About Page** - Church story, beliefs, Assemblies of God partnership  
✅ **Messages/Watch Online** - YouTube livestream embedded  
✅ **Give Page** - Church Center giving integration  
✅ **Connect Page** - Church Center forms, contact info  
✅ **Visit Page** - Service times and location info  

## Key Integrations
- **Church Center:** https://freewaychurch.churchcenter.com/ (giving, forms)
- **YouTube:** https://www.youtube.com/@freewaymedia/streams (livestream)
- **Google Calendar:** Live events integration
- **Spotify Podcast:** https://open.spotify.com/show/1ClBK7hZzOSyfFhQYjpjMo

## Design System
- **Primary Gold:** #d3b975 (River Valley inspired)
- **Background:** #231f20 (Dark theme)
- **Font:** PT Serif (Google Fonts)
- **Style:** Modern, professional, welcoming

## Pastor Roy's Key Messaging
- **Signature Expression:** "I am so excited about..."
- **Core Vision:** "One More" initiative
- **Three Pillars:** Connect, Cultivate, Contribute
- **Community:** "warmest community you'll ever meet"

## Project Structure
```
Freeway-Church-Website/
├── src/
│   ├── app/           # Next.js pages
│   ├── components/    # Reusable components
│   ├── lib/          # Utilities
│   └── styles/       # Branding tokens
├── public/
│   └── images/       # Photos and logos
├── CLAUDE.md         # Complete documentation
└── PROJECT_STATUS_AND_DECISIONS.md
```

## Environment Variables (Vercel)
- `GOOGLE_CALENDAR_API_KEY` - Google Calendar API key
- `GOOGLE_CALENDAR_ID` - `c_md09veggphlh418qgt0vrr0420@group.calendar.google.com`

## Current Status
🟢 **PRODUCTION READY** - All pages complete and functional  
🟢 **DEPLOYED** - Live on Vercel with auto-deployment  
🟢 **BRAND IMPLEMENTED** - Complete visual identity system  
🟢 **INTEGRATIONS WORKING** - Calendar, forms, livestream all functional  

## Recent Accomplishments
- ✅ Complete brand implementation with logo variations
- ✅ All 6 pages built and deployed
- ✅ Google Calendar API integration
- ✅ Church Center forms integration
- ✅ YouTube livestream embedding
- ✅ Mobile responsive design
- ✅ SEO optimization

## Future Enhancements (Low Priority)
- [ ] Updated hero background image
- [ ] Additional event photos
- [ ] Online small group registration
- [ ] Sermon notes download

## Quick Updates Guide
**Service Times:** Update `src/components/sections/Location.tsx`  
**Contact Info:** Update Location component and Footer  
**Leadership:** Update `src/components/sections/Leadership.tsx`  
**Hero Image:** Replace `/public/images/youtube-preview.png`  

## Important Files
- `CLAUDE.md` - Complete development documentation
- `PROJECT_STATUS_AND_DECISIONS.md` - Current status and decisions
- `QUICK_REFERENCE_GUIDE.md` - Quick reference for common tasks

---
*Last Updated: August 22, 2025*  
*Status: Production Ready & Deployed* 🚀