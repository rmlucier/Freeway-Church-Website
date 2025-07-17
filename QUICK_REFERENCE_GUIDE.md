# Freeway Church Website - Quick Reference Guide

## 🚀 **START HERE FOR NEW DEVELOPMENT SESSIONS**

This guide helps you quickly understand the current state and continue development.

---

## 📋 **CURRENT STATUS (January 17, 2025)**

### **✅ COMPLETED & DEPLOYED**
- **Brand Identity**: Inter typography, new color system, 18 logo variations
- **Visual Design**: Alternating section backgrounds (no pure black)
- **UI Updates**: White Watch Online button, board section removed
- **Technical**: All builds successful, deployed to Vercel

### **🎯 NEXT PRIORITIES (If Needed)**
1. **Optional**: Apply color scheme to remaining page components
2. **Optional**: Update favicon with new icon logo
3. **Maintenance**: Monitor and optimize as needed

---

## 📋 **KEY DECISIONS TO REMEMBER**

### **Typography (MUST FOLLOW)**
- **Headers**: Inter Extra Bold (800) + ALL CAPS
- **Subheaders**: Inter Light (300) + ALL CAPS  
- **Body**: Inter Regular (400)
- **NO MORE PT Serif** - completely replaced

### **Colors (80/15/5 RULE)**
- **Primary (80%)**: #333333, #CCCCCC, #000000, #FFFFFF
- **Secondary (15%)**: #003333, #006666  
- **Tertiary (5%)**: #996600

### **Backgrounds (CRITICAL PATTERN)**
- **NO pure black (#000000)** - use off-black (#1a1617)
- **Alternating pattern**: off-black → light gray → dark gray → light gray → dark gray
- **Text contrast**: Dark text on light backgrounds, light text on dark backgrounds

### **Storage Strategy**
- **✅ GitHub**: Logos, optimized images, code
- **❌ Not GitHub**: Videos (YouTube), large galleries, raw files
- **Current usage**: 255MB / 1GB (safe)

---

## 📋 **IMPORTANT FILE LOCATIONS**

### **Brand Configuration**
```
/src/styles/branding.ts          # Central brand settings
/tailwind.config.ts              # Typography & colors
/src/app/globals.css             # Global typography classes
```

### **Key Components**
```
/src/components/layout/Header.tsx     # Navigation with new branding
/src/components/layout/Footer.tsx     # Contact info
/src/components/sections/Leadership.tsx   # Team (board removed)
/src/app/page.tsx                     # Homepage with alternating backgrounds
```

### **Logo Assets**
```
/public/images/logos/horizontal/outline/freeway-church-horizontal-outline-light.png
# ^ Currently used in header
# All 18 variations available in organized folders
```

---

## 📋 **COMMON TASKS & COMMANDS**

### **Development Workflow**
```bash
npm run dev         # Start development
npm run build       # ALWAYS test before committing
npm run lint        # Check code quality
git status          # Check changes
git add [files]     # Stage changes  
git commit -m "..."  # Commit with message
git push            # Deploy to production
```

### **Quick Updates**
- **Service times**: Update `Location.tsx` and `Footer.tsx`
- **Contact info**: Search and replace across components
- **New images**: Optimize first (keep under 1MB)
- **Leadership changes**: Update `Leadership.tsx`

---

## 📋 **CRITICAL REMINDERS**

### **❌ NEVER DO**
- Use pure black backgrounds (#000000)
- Commit API keys or .env.local files
- Add large videos to GitHub
- Use PT Serif font
- Include board members section

### **✅ ALWAYS DO**
- Test with `npm run build` before pushing
- Optimize images before adding
- Follow Inter typography hierarchy
- Maintain alternating background pattern
- Preserve Roy's authentic voice in content

### **🔧 TECHNICAL NOTES**
- **Hosting**: GitHub (free) + Vercel (free) = $0/month
- **Domain**: Ready for custom domain setup
- **Integrations**: Church Center (primary), YouTube, Google Calendar
- **Performance**: Fast global CDN via Vercel

---

## 📋 **ROY'S VOICE & MESSAGING**

### **Key Phrases** (Use in content)
- "I am so excited about..."
- "absolutely dynamic"
- "One More" initiative
- "warmest community you'll ever meet"

### **Three Pillars** (Core framework)
- **Connect**: People to God and each other
- **Cultivate**: Spiritual growth through discipleship
- **Contribute**: To community transformation

### **Personal Approach**
- First-person messaging throughout
- Enthusiastic and passionate tone
- Vision-focused with "One More" emphasis
- Clear connection to family (Roy, Elissa, three kids)

---

## 📋 **FOR FUTURE DEVELOPMENT SESSIONS**

### **Read These Files First**
1. `PROJECT_STATUS_AND_DECISIONS.md` - Complete current status
2. `CLAUDE.md` - Original project documentation  
3. This file - Quick orientation

### **Check Current Status**
```bash
git status           # See any uncommitted changes
npm run build        # Verify everything still works
du -sh public/images # Check image storage usage
```

### **Typical Session Flow**
1. Read documentation to understand current state
2. Identify specific task or request
3. Make changes following brand guidelines
4. Test with `npm run build`
5. Commit and push to deploy

**This guide ensures you can pick up development efficiently from any terminal or session.**