# Freeway Church Website - Complete Development Documentation

## 🚀 PROJECT STATUS: COMPLETE & DEPLOYED

### Website Structure (All Pages Complete)
**✅ PRIORITY 1 - LIVE PAGES:**
- **Homepage** - Hero, Events Carousel, About Us, Location, Leadership, Next Steps
- **About Page** - Church story, beliefs, Assemblies of God partnership, "Why Church" section
- **Messages Page** - Embedded YouTube livestream, links to all past messages
- **Watch Online Page** - Same as Messages (embedded livestream, service times)
- **Give Page** - Church Center giving integration, explanation of giving
- **Connect Page** - Church Center forms, contact info, social media

## 🔧 Development Commands
- `npm run dev` - Start development server
- `npm run build` - Build for production  
- `npm run lint` - Run linting
- `npm run start` - Production server

## 👥 PRIORITY 1 - CHURCH LEADERSHIP & CONTACT

### Leadership Team
- **Lead Pastor**: Roy Lucier (roy@freeway.church)
- **Associate Pastor**: Elissa Lucier (elissa@freeway.church) - Worship, Volunteer Management, Administration
- **Freeway Youth Leaders**: Jamie & Nate
- **Leadership Photo**: `/images/RoyandElissa.jpg`

### Church Contact Information
- **Address**: 28900 B Drive North, Albion, MI 49224
- **Phone**: (517) 798-0571
- **General Email**: info@freeway.church
- **Website**: Live and deployed via Vercel

### Service Schedule (All Sundays)
- **9:15 AM** - Pre-Service Prayer
- **10:00 AM** - Main Worship Service (LIVE STREAMED)
- **11:30 AM** - Fellowship
- **6:00 PM** - Freeway Youth
- **7:00 PM** - Young Adults
- **NO Wednesday Services**

## 🎯 PRIORITY 1 - PASTOR ROY'S VOICE & MESSAGING

### Key Phrases & Tone
- **Signature Expression**: "I am so excited about..."
- **Signature Phrase**: "absolutely dynamic"
- **Core Vision**: "One More" initiative (reaching one more person, baptizing one more believer)
- **Three Pillars**: Connect, Cultivate, Contribute
- **Community Description**: "warmest community you'll ever meet"
- **Personal Approach**: First-person messaging throughout website

### Speaking Style Analysis (From Sermon Transcript)
- Enthusiastic and passionate tone
- Repeated use of "so excited" and "absolutely dynamic"
- Vision-focused with "One More" emphasis
- Personal and relational approach
- Clear three-pillar framework (Connect, Cultivate, Contribute)

## 🏛️ PRIORITY 1 - CHURCH IDENTITY & BELIEFS

### Denominational Affiliation
- **Partnership**: Assemblies of God (independent church with A/G support)
- **Theological Alignment**: A/G Statement of Fundamental Truths
- **Status**: Independent church with accountability and support from A/G

### Church Story (From Roy & Elissa)
- **Background**: Met at North Central University, Minneapolis, MN
- **Ministry History**: Minnesota → Massachusetts → Michigan
- **Call to Albion**: Waited and prayed for God's direction to beautiful church off I-94
- **Vision**: Heart for the region, passion for authentic relationships with Jesus

### Core Mission
- **Connect**: People to God and each other
- **Cultivate**: Spiritual growth through authentic discipleship  
- **Contribute**: To community transformation and "One More" vision

## 🔗 PRIORITY 1 - INTEGRATIONS & PLATFORMS

### Church Center Integration (Primary Platform)
- **Giving**: https://freewaychurch.churchcenter.com/giving
- **Prayer Requests**: https://freewaychurch.churchcenter.com/people/forms/585698
- **Follow Jesus**: https://freewaychurch.churchcenter.com/people/forms/585705
- **Connect Form**: https://freewaychurch.churchcenter.com/people/forms/274372
- **Core Team**: https://freewaychurch.churchcenter.com/people/forms/585690

### YouTube & Media Integration
- **Channel**: https://www.youtube.com/channel/UCRrCQnXSguf6UYfNQORCN3Q
- **Livestreams**: https://www.youtube.com/@freewaymedia/streams
- **Embedded**: Live stream embedded on Messages and Watch Online pages
- **Podcast**: https://open.spotify.com/show/1ClBK7hZzOSyfFhQYjpjMo

### Social Media
- **Instagram**: https://instagram.com/freeway.church
- **Facebook**: https://www.facebook.com/www.freeway.church

## 🗓️ PRIORITY 1 - GOOGLE CALENDAR EVENTS

### Calendar Integration
- **Calendar ID**: `c_md09veggphlh418qgt0vrr0420@group.calendar.google.com`
- **API Key**: Configured in Vercel environment variables
- **Status**: Public calendar with "See all event details" permissions
- **API Route**: `/api/events` handles server-side Google Calendar API calls
- **Display**: Swiper carousel on homepage with automatic image mapping

### Vercel Environment Variables (CRITICAL)
1. **Key**: `GOOGLE_CALENDAR_API_KEY` | **Value**: Google Calendar API key
2. **Key**: `GOOGLE_CALENDAR_ID` | **Value**: `c_md09veggphlh418qgt0vrr0420@group.calendar.google.com`

## 🎨 PRIORITY 2 - DESIGN SYSTEM (River Valley Inspired)

### Color Palette
- **Primary Gold**: #d3b975 (River Valley inspired)
- **Primary Dark**: #b8a160
- **Primary Light**: #e0c688
- **Background**: #231f20 (Dark theme)
- **Near Black**: Various neutral shades for sections

### Typography
- **Font Family**: PT Serif (Google Fonts)
- **Headings**: PT Serif, serif
- **Body**: PT Serif, serif
- **Style**: Professional, readable, matches River Valley aesthetic

### Design Philosophy
- **Inspiration**: River Valley Church (rivervalley.org)
- **Theme**: Dark background with gold accents
- **Style**: Modern, professional, welcoming
- **Layout**: Section-based with consistent spacing

## 📁 PRIORITY 2 - FILE STRUCTURE & ASSETS

### Key Components
- `src/components/sections/Hero.tsx` - Homepage hero with Roy's messaging
- `src/components/sections/EventsCarousel.tsx` - Google Calendar events display
- `src/components/sections/AboutUs.tsx` - Roy's story and three pillars
- `src/components/sections/Location.tsx` - Address, times, contact, embedded map
- `src/components/sections/Leadership.tsx` - Roy, Elissa, Jamie & Nate
- `src/components/layout/Header.tsx` - Navigation with all pages
- `src/components/layout/Footer.tsx` - Contact info and Church Center links

### Image Assets (/public/images/)
- **Leadership**: `RoyandElissa.jpg` (main leadership photo)
- **Event Images**: Complete set including sunday-service.jpeg, youth-ministry.jpg, etc.
- **Logos**: White horizontal, white stack, black versions
- **Hero Background**: youtube-preview.png (placeholder, ready for future update)

### Page Files
- `src/app/page.tsx` - Homepage
- `src/app/about/page.tsx` - Complete church story and beliefs
- `src/app/messages/page.tsx` - YouTube livestream embedded
- `src/app/watch-online/page.tsx` - Identical to messages page
- `src/app/give/page.tsx` - Church Center giving integration
- `src/app/connect/page.tsx` - Church Center forms and contact
- `src/app/events/page.tsx` - Dedicated events page

## 🔧 PRIORITY 3 - TECHNICAL IMPLEMENTATION

### Technology Stack
- **Framework**: Next.js 15.3.5 with React 19
- **Styling**: Tailwind CSS with custom color palette
- **Animations**: Framer Motion for smooth interactions
- **Carousel**: Swiper.js with autoplay and navigation
- **Analytics**: Vercel Analytics integrated
- **TypeScript**: Enabled throughout
- **Deployment**: Vercel (automatic from GitHub)

### API Integration
- **Google Calendar**: googleapis package for event fetching
- **Image Mapping**: Automatic assignment based on event titles/descriptions
- **Error Handling**: Fallback to mock events if API fails
- **Caching**: Built-in Next.js caching for performance

### Security & Best Practices
- **Environment Variables**: Properly configured in Vercel (not in repository)
- **Email Protection**: mailto: links with hover effects
- **External Links**: Proper target="_blank" and rel="noopener noreferrer"
- **Image Optimization**: Next.js Image component throughout
- **SEO**: Proper metadata for all pages

## 📊 PRIORITY 3 - DEPLOYMENT & MAINTENANCE

### GitHub Repository
- **Status**: All code pushed and up to date
- **Branch**: main (production ready)
- **gitignore**: Properly excludes .env.local, .next, node_modules
- **Commits**: Detailed commit history with feature descriptions

### Vercel Deployment
- **Status**: Live and accessible
- **Domain**: Custom domain ready for configuration
- **Build**: Automatic deployment from GitHub main branch
- **Environment**: Production environment variables configured

### Future Maintenance Notes
- **Image Updates**: Easy to replace hero image and event images
- **Content Updates**: Roy's voice and messaging implemented throughout
- **Contact Updates**: Centralized in components for easy updates
- **New Events**: Automatically pulled from Google Calendar
- **Form Updates**: Church Center forms easily updatable

## ✅ COMPLETED MAJOR MILESTONES

### Phase 1: Foundation (Completed)
- [x] Next.js setup with River Valley-inspired design
- [x] Google Calendar API integration
- [x] Church Center forms integration
- [x] YouTube livestream embedding

### Phase 2: Content & Voice (Completed)
- [x] Pastor Roy's authentic voice throughout all content
- [x] "One More" initiative messaging
- [x] Connect-Cultivate-Contribute framework
- [x] Complete church story and beliefs
- [x] Real contact information and service times

### Phase 3: Polish & Launch (Completed)
- [x] All 6 pages complete and functional
- [x] Mobile responsive design
- [x] Professional photography integrated
- [x] Social media and external platform links
- [x] SEO optimization and metadata
- [x] Production deployment via Vercel

## 🔮 FUTURE ENHANCEMENTS (Low Priority)

### Visual Improvements
- [ ] Updated hero background image (when Roy provides new photos)
- [ ] Additional event photos from Google Drive
- [ ] Professional headshots for individual leadership cards

### Feature Additions
- [ ] Online small group registration
- [ ] Event registration system
- [ ] Prayer wall or testimonies section
- [ ] Sermon notes download functionality

### Technical Enhancements
- [ ] Advanced analytics integration
- [ ] Performance optimizations
- [ ] Additional accessibility improvements
- [ ] Multi-language support (if needed)

---

## 📋 QUICK REFERENCE FOR UPDATES

**Most Common Updates:**
1. **Service Times**: Update in `src/components/sections/Location.tsx` and Footer
2. **Contact Info**: Update in Location component and Footer
3. **Leadership Changes**: Update `src/components/sections/Leadership.tsx`
4. **Events**: Automatically handled via Google Calendar
5. **Hero Image**: Replace `/public/images/youtube-preview.png`

**Emergency Contact Changes:**
- Phone: Search and replace "(517) 798-0571"
- Email: Search and replace "info@freeway.church"  
- Address: Search and replace "28900 B Drive North, Albion, MI 49224"

**Key External Dependencies:**
- Church Center (giving and forms)
- Google Calendar (events)
- YouTube (livestream)
- Vercel (hosting)
- GitHub (code repository)