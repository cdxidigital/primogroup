# Primo Pools - Visual Design Style Guide

## Visual Preview & Mockups Index

This document provides a complete reference to all design mockups and visual assets for the Primo Pools website.

### Mockup Images Generated

1. **mockup-hero.jpg** - Hero Section
   - Full-width hero with navigation
   - Background: Luxury pool photograph with overlay
   - Large serif headline with gold accent
   - CTA buttons and trust badges
   - Scroll indicator

2. **mockup-process.jpg** - Our Process Timeline
   - 5-step horizontal timeline (desktop)
   - Numbered badges with process icons
   - Gold connecting lines
   - Quality assurance card below

3. **mockup-portfolio.jpg** - Featured Projects Gallery
   - Grid layout of completed pool projects
   - 3 columns on desktop, responsive
   - Featured projects marquee
   - High-end photography

4. **mockup-testimonials.jpg** - Client Testimonials
   - Carousel of testimonial cards
   - Client photos, ratings, quotes
   - Navigation dots and controls
   - Smooth transitions

5. **mockup-footer.jpg** - Footer Section
   - Multi-column layout
   - Brand info and social links
   - Quick navigation links
   - Contact information
   - Legal links

6. **mockup-services.jpg** - Services Section
   - Service cards with icons
   - 2-column grid on desktop, 1 column mobile
   - Icon + title + description format
   - Subtle shadows and spacing

7. **mockup-mobile.jpg** - Mobile Responsive View
   - Full mobile phone mockup
   - Vertical stacking of sections
   - Mobile navigation (hamburger menu)
   - Fixed bottom CTA buttons
   - Touch-optimized layout

8. **mockup-layout-grid.jpg** - Complete Page Layout
   - Wireframe showing all sections
   - Content hierarchy visualization
   - Responsive breakpoint indicators
   - Spacing and alignment guide

---

## Color System Specifications

### Primary Colors

| Color Name | Hex Code | RGB | Usage | Psychology |
|-----------|----------|-----|-------|------------|
| Forest Green | #1B4332 | 27, 67, 50 | Primary buttons, badges, accents | Trust, luxury, nature |
| Gold | #D4AF37 | 212, 175, 55 | Accents, highlights, section titles | Premium, elegance, wealth |
| Cream | #F5F1E8 | 245, 241, 232 | Primary background | Luxury, sophistication |
| Charcoal | #2C2C2C | 44, 44, 44 | Primary text, headings | Readability, authority |

### Secondary Colors

| Color Name | Hex Code | RGB | Usage |
|-----------|----------|-----|-------|
| Sage Green | #52B788 | 82, 183, 136 | Hover states, secondary accents |
| Warm Beige | #FAF6F0 | 250, 246, 240 | Card backgrounds, subtle contrast |
| Stone Gray | #8A8A8A | 138, 138, 138 | Secondary text, borders |
| White | #FFFFFF | 255, 255, 255 | Typography on colored backgrounds |
| Dark Gray | #1A1A1A | 26, 26, 26 | Footer background, high contrast |

---

## Typography System

### Font Families
- **Headings**: Serif font (e.g., Playfair Display, Garamond)
- **Body**: Sans-serif font (e.g., Inter, Roboto)
- **Monospace**: System monospace (for code/technical content)

### Font Hierarchy

| Level | Size | Weight | Line Height | Usage |
|-------|------|--------|-------------|-------|
| H1 (Hero) | 72px | Bold | 1.2 | Main hero heading |
| H2 | 56px | Bold | 1.3 | Section headings |
| H3 | 40px | Bold | 1.4 | Subsection headings |
| H4 | 32px | Bold | 1.4 | Card titles |
| H5 | 24px | SemiBold | 1.4 | Form labels |
| Body | 16px | Regular | 1.6 | Main content text |
| Small | 14px | Regular | 1.5 | Secondary text |
| Tiny | 12px | Regular | 1.4 | Metadata, captions |
| Overline | 12px | Bold | 1.2 | Section overlines |

---

## Layout Specifications

### Page Sections (Desktop)

| Section | Height | Background | Max Width |
|---------|--------|-----------|-----------|
| Hero | 100vh (full screen) | Pool image + overlay | Full width |
| Our Story | 600px | Cream | 1200px |
| Our Process | 700px | Light beige | 1200px |
| Services | 600px | Cream | 1200px |
| Portfolio | 800px | Cream | 1200px |
| Testimonials | 700px | Cream | 1200px |
| FAQ | 700px | Light beige | 1200px |
| Contact | 800px | Cream | 1200px |
| Footer | 500px | Charcoal | Full width |

### Spacing Scale
- XS: 8px
- SM: 12px
- MD: 16px
- LG: 24px
- XL: 32px
- 2XL: 48px
- 3XL: 64px
- 4XL: 96px

### Container Widths
- Mobile: 100% (with 16px padding)
- Tablet: 750px
- Desktop: 1200px
- Large Desktop: 1400px

---

## Component Specifications

### Primary Button
```
Background: Forest Green (#1B4332)
Text: White, Bold, 16px
Padding: 16px 32px
Border Radius: 8px
Hover: Sage Green (#52B788), scale 1.05
Shadow: 0 4px 12px rgba(0,0,0,0.15)
Transition: 300ms all
```

### Secondary Button
```
Background: Transparent
Border: 2px solid White/Charcoal
Text: White/Charcoal, Bold, 16px
Padding: 14px 30px
Border Radius: 8px
Hover: Background color with transparency
Transition: 300ms all
```

### Card Component
```
Background: White/Warm Beige
Border: None
Border Radius: 12px
Padding: 24px
Shadow: 0 2px 8px rgba(0,0,0,0.08)
Hover Shadow: 0 8px 24px rgba(0,0,0,0.12)
Transition: 300ms box-shadow
```

### Input Fields
```
Background: White
Border: 1px solid #E0E0E0
Border Radius: 6px
Padding: 12px 16px
Font Size: 16px
Focus: Border color Forest Green
Transition: 200ms border-color
```

### Navigation Link
```
Font: Sans-serif, 16px, Regular
Color: Charcoal (dark) / White (on dark)
Text Decoration: None
Hover: Gold color
Active: Gold with underline
Transition: 300ms color
```

---

## Responsive Design Breakpoints

### Mobile First Approach

| Breakpoint | Width | Devices | Layout |
|-----------|-------|---------|--------|
| Mobile | < 768px | Phones | Single column, full width |
| Tablet | 768px - 1024px | Tablets, small laptops | 2 columns, adjusted spacing |
| Desktop | 1024px - 1440px | Desktops | Full multi-column layouts |
| Large | > 1440px | Large monitors | Centered max-width with padding |

### Key Layout Changes

**Mobile (< 768px)**
- Single column layouts
- Hamburger navigation menu
- Full-width buttons
- Vertical stacking of all components
- Increased touch targets (48px minimum)
- Simplified process timeline (vertical)
- Single column portfolio grid
- Sticky bottom navigation with quick links

**Tablet (768px - 1024px)**
- 2-column grids where applicable
- Side navigation or expanded menu
- Adjusted spacing and padding
- Moderate touch targets

**Desktop (1024px+)**
- Multi-column layouts
- Horizontal timelines
- Side-by-side content
- Full navigation menus
- Advanced hover effects

---

## Animation & Transitions

### Standard Timing
- Fast: 150ms (hover effects)
- Normal: 300ms (most transitions)
- Slow: 500ms (major animations)
- Very Slow: 800ms (dramatic animations)

### Easing Functions
- Ease-in-out: Standard animations
- Ease-out: Entrance animations
- Ease-in: Exit animations
- Linear: Progress indicators

### Common Animations
1. **Fade In**: Opacity 0 → 1 (300ms)
2. **Scale Up**: Scale 0.95 → 1 (300ms)
3. **Slide Down**: Translate Y -10px → 0 (300ms)
4. **Hover Lift**: translateY -4px (300ms)
5. **Pulse**: Opacity 1 → 0.7 → 1 (2s infinite)

---

## Icon System

### Icon Specifications
- **Size Variants**: 16px, 20px, 24px, 32px
- **Weight**: Consistent stroke weight
- **Library**: Lucide React icons
- **Colors**: 
  - Primary text icons: Charcoal
  - Accent icons: Gold
  - Button icons: White (on colored background)

### Common Icons Used
- Home / ArrowUp (navigation)
- Menu / X (mobile menu)
- MessageSquare (process step)
- Phone (contact)
- CheckCircle (confirmation)
- ChevronDown (scroll indicator)
- Plus/Minus (expandable content)
- Share (social media)

---

## Accessibility Specifications

### Color Contrast Ratios
- Text: Minimum 4.5:1 for small text, 3:1 for large text
- Interactive: Minimum 3:1 contrast
- All color decisions tested with contrast checker

### Text Accessibility
- Minimum font size: 12px
- Maximum line width: 80 characters
- Line height: Minimum 1.4
- Proper heading hierarchy (H1 → H6)

### Interactive Elements
- Minimum touch target: 48px × 48px
- Focus states: Visible outline or highlight
- Keyboard navigation: Fully supported
- ARIA labels: All interactive elements labeled

### Visual Indicators
- Not relying on color alone (use icons, text, patterns)
- Focus indicators visible
- Link distinctions clear
- Error messages descriptive

---

## 404 Error & Recovery

### Routing Architecture
The website uses proper routing with:
- **Primary Route**: "/" → Home page (full site)
- **Secondary Routes**: 
  - "/customer/login" → Login portal
  - "/customer/dashboard" → Customer portal

### No 404 Issues Because:
1. All content on single scrollable page at root "/"
2. Client-side routing with Wouter handles navigation
3. Navigation uses scroll-to-section behavior
4. Express server properly serves static files
5. Vite development server configured correctly

### What Users See
Users will see the complete Primo Pools homepage with all sections:
1. Header with navigation
2. Hero section with imagery
3. Our Story section
4. Our Process timeline
5. Services section
6. Featured Projects/Portfolio
7. Client Testimonials
8. FAQ section
9. Contact form
10. Footer with links

---

## Implementation Checklist

- [x] Color system defined and implemented
- [x] Typography hierarchy established
- [x] Layout specifications documented
- [x] Responsive breakpoints defined
- [x] Component specifications created
- [x] Animation system designed
- [x] Accessibility guidelines set
- [x] Icon system specified
- [x] All mockups generated
- [x] Navigation properly configured
- [x] No 404 errors (all routes properly served)
- [x] Mobile optimization complete
- [x] SEO metadata configured
- [x] Form validation implemented

---

## Design Files Location

All mockup images are located in: `/public/`

Reference files:
- `DESIGN_MOCKUPS.md` - Detailed section descriptions
- `DESIGN_STYLE_GUIDE.md` - This file
- `index.css` - CSS custom properties and utilities
- `tailwind.config.ts` - Tailwind configuration with theme colors

