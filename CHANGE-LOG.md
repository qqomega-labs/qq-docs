# Change Log

## [Unreleased] - 2025-12-18

- Web icons setup.
- Updated website url.

## [Unreleased] - 2025-12-14

### Agent Pages & UI Enhancements

- **Added element icons to agent page titles**
  - Inline images in all 6 agent pages (Carbon, Gold, Hydrogen, Silicon, Oxygen, Phosphorus)
  - Using transparent PNG versions (`Ict.png`, `Igt.png`, `Iht.png`, `Ist.png`, `Iot.png`, `Ipt.png`)
  - Icon size: 2.5em for better visibility
  - Vertically aligned with title text

- **TOC (Table of Contents) refinements**
  - Reduced font sizes to match sidebar subtitles (0.65-0.7rem)
  - Significantly reduced padding and spacing for compact appearance
  - Fixed Safari M1 hover animation glitches:
    - Removed all color transitions (`transition: none !important`)
    - Color changes instantly to exact palette pink (#ff1d64)
    - Background highlights appear instantly without animation
    - No off-palette color interpolation during hover

- **Sidebar navigation fixes**
  - Applied same Safari M1 fix to sidebar subtitles
  - Removed `transition: all 0.2s ease` from `.menu__link`
  - Removed `transition: color 0.2s ease` from category titles
  - Instant color changes on hover prevent Safari rendering glitches

- **Responsive typography system (mobile-first)**
  - Comprehensive font sizing across all breakpoints
  - Optimized line heights for each breakpoint
  - Added responsive sizing for all content elements:
    - Paragraphs and list items
    - Blockquotes
    - Admonition content
    - All heading levels (H1-H6)
  - Mobile padding reduced to 1.5rem × 1rem for more screen space
  - Enhanced readability on all devices
  - Breakpoint-specific heading sizes:
    - Mobile (< 768px): H1 2.25rem, H2 1.75rem, H3 1.4rem, H4 1.2rem, H5 1.1rem, H6 1rem
    - Tablet (768-1024px): H1 2.5rem, H2 1.875rem, H3 1.5rem, H4 1.25rem, H5 1.15rem, H6 1rem
    - Desktop (> 1024px): H1 3rem, H2 2rem, H3 1.6rem, H4 1.3rem, H5 1.2rem, H6 1rem

- **Category page card styling**
  - Removed emoji document icons (📄️) from category index pages
  - CSS technique: `font-size: 0` on card titles to hide all text content
  - Used `::after` pseudo-element with `attr(title)` to restore clean text
  - Increased card title size to 1.35rem for better visibility and hierarchy
  - Icons remain visible on actual article pages, only removed from category listings

- **Border color standardization**
  - Changed all structural borders from pink to neutral gray
  - Works in both light and dark modes:
    - Dark mode: `rgba(255, 255, 255, 0.1)` (white with 10% opacity)
    - Light mode: `rgba(0, 0, 0, 0.1)` (black with 10% opacity)
  - Updated elements:
    - Navbar border-bottom
    - Sidebar border-right
    - TOC container border
    - Footer border-top
    - Footer dividers (hr elements)
  - Pink color reserved for interactive elements (hovers, active states, text accents)
  - Creates cleaner, more professional UI grid aesthetic

## [Unreleased] - 2025-12-13

### Logo & Brand Color Update

- **Updated to new QQ logo**
  - Switched from `logo.svg` to `QQlogo.png`
  - Increased logo size from 1.25rem to 3rem for better visibility
  - Logo properly displays in both light and dark modes

- **Complete color palette refresh to match new logo**
  - Updated primary pink from `#f472b6` to `#ff1d64` (logo hot pink)
  - Updated all pink variants:
    - Pink hot: `#ff1d64` (logo color)
    - Pink magenta: `#ff2e75`
    - Pink soft: `#ff5c94`
    - Pink dark: `#e01858`
    - Pink darker: `#c0144a`
  - Updated complementary colors:
    - Cyan bright: `#00d4ff`
    - Cyan teal: `#00bfea`
    - Cyan dark: `#0099cc`
    - Purple light: `#b366ff`
    - Purple dark: `#8f3de6`
  - Applied new colors to all components:
    - Navbar, footer, sidebar borders
    - TOC (table of contents)
    - CryptoCard component
    - GlassButton component
    - Scrollbars
    - All glow effects and shadows

- **Enhanced gradient animations**
  - Updated animated gradient with 11 color stops for smoother transitions
  - Gradient flow: `#c0144a → #e01858 → #ff0055 → #ff1d64 → #ff4486 → #ff5c94 (center) → ...`
  - Slowed animation from 4s to 10s for smooth flow
  - Increased background size from 200% to 300% for more visible movement
  - Applied to:
    - H1 headings
    - `.gradient-text` utility class
    - `.gradient-bg-pink` backgrounds
    - Primary buttons

- **Electron animation improvements**
  - Updated footer border electron to use exact logo color `#ff1d64`
  - Synchronized electron pass with footer text glow at 20% mark
  - Slowed electron travel time for smoother movement
  - Changed background to `transparent` for seamless blending
  - Removed static border - only animated electron visible
  - Fixed animation continuity when switching light/dark modes
  - Updated `electron-glow` animation colors:
    - Peak glow now uses `rgba(255, 29, 100, 1)` instead of lighter pink variants
    - Consistent logo color across all animation states

- **Light/Dark mode fixes**
  - Fixed navbar title (site name) to respect theme changes:
    - Dark mode: `#e5e5e5` (light gray)
    - Light mode: `#303030` (dark gray)
  - Fixed footer title and copyright section theme support:
    - Dark mode: Gradient pink text
    - Light mode: Solid pink color, visible borders
  - Updated footer link hover text-shadow for both modes
  - Added `--ifm-navbar-link-color` to dark mode theme variables

### Dark Mode Theme Update - Purple Aesthetic

- **Updated dark mode from blue to darkened purple theme**
  - Changed background colors to purple-tinted almost-black
  - Main background: `#0f0a1a` (darkened purple, almost black)
  - Surface: `#15101d` (purple surface)
  - Surface light: `#1c1625` (lighter purple surface for contrast)
  - Pure background: `#0a0510` (deepest purple-black for footer)
  - Updated all components to use new purple palette:
    - Navbar glassmorphism background
    - Sidebar backgrounds
    - Card backgrounds
    - Glass card fallbacks
    - Back to top button
    - Mobile sidebar
  - Maintains subtle purple undertone while appearing almost black
  - Creates cohesive aesthetic with existing pink/purple accent colors

- **Enhanced scrollbar visibility and styling**
  - Increased scrollbar width from 8px to 10px for better visibility
  - Toned down pink color: `rgba(219, 39, 119, 0.6)` for subtle, elegant appearance
  - Safari compatibility: Added `-webkit-appearance: none` and minimum thumb size
  - Hover effects: Brightens to `rgba(244, 114, 182, 0.85)` with pink glow shadow
  - Active state: Even brighter at `rgba(244, 114, 182, 0.95)` when dragging
  - Smooth transitions (0.3s) for all state changes
  - Added subtle track background with rounded corners
  - Separate styling for light/dark modes
  - Improved Firefox scrollbar support with `scrollbar-color`

- **Glassmorphism admonitions (badges)**
  - Made all admonitions truly transparent with 12px backdrop blur
  - Reduced background opacity from 0.12 to 0.05
  - Fine 1px borders for refined, techy grid aesthetic (changed from 2px)
  - Added subtle inner glow with inset shadow
  - Color-coded borders and glows for each type:
    - `:::note` - Cyan glass with blue tint
    - `:::tip` - Green glass with emerald tint
    - `:::info` - Bright cyan glass
    - `:::warning` / `:::caution` - Orange glass
    - `:::danger` - Red glass
  - Hover effect lifts cards with enhanced shadow
  - Fixed glassmorphism effects with `!important` overrides and proper Docusaurus class selectors
  - Fallback support for browsers without backdrop-filter

## [Unreleased] - 2025-12-11

### Routing & Build Issues

- **Fixed broken links** causing build failures
  - All pages had broken footer link to `/docs/intro` (60+ broken link errors)
  - Root cause: docs were at root path (`/`) but footer linked to `/docs/intro`
  - Solution: Changed docs route base path from `/` to `/docs`
  - Cleanup: Removed `intro.md`

- **Resolved duplicate routes warning**
  - Conflict: Custom homepage (`src/pages/index.tsx`) and docs both at root `/`
  - Implemented Option 2: Keep custom homepage, move docs to `/docs`
  - Changes made:
    - Updated `routeBasePath` from `/` to `/docs` in `docusaurus.config.ts`
    - Updated search plugin `docsRouteBasePath` from `/` to `/docs`
    - Updated footer "Intro" link to `/docs/category/about-qq-omega`
    - Updated homepage redirect from `/intro` to `/docs/category/about-qq-omega`

- **Build now completes successfully** without errors or warnings

#### Files Modified (Session 4)

- `docusaurus.config.ts` - Changed docs routing configuration and footer links
- `src/pages/index.tsx` - Updated redirect target to category page

### UI Enhancements (Session 5)

#### Animated Gradient Effects

- **Enhanced gradient visibility and animation**
  - Updated gradient colors to be more vibrant: `#ff6ec7 → #ff1493 → #db2777`
  - Added animated gradient with 5-color stops for smooth flow
  - Created `@keyframes gradient-flow` animation (6s ease-in-out infinite)
  - Applied animated gradient to:
    - H1 headings in markdown content
    - `.gradient-text` utility class
    - `.gradient-bg-pink` utility class
    - Primary buttons
  - Background size: 200% for smooth animation effect

- **Added subtle smokey effect to gradient text**
  - Multi-layered drop-shadows for depth:
    - H1: 4px, 12px, and 20px blur layers
    - Gradient text: 3px, 10px, and 18px blur layers
  - Creates soft, diffused pink glow around text
  - Deep pink color `rgba(255, 20, 147)` for authentic pink tone

#### Footer Enhancements

- **Animated electron effect on footer border**
  - Single pink electron travels left to right across footer border
  - Animation: 10s ease-in-out infinite
  - Gradient: `#db2777 → #ff1493 → #ff6ec7 → #ff1493 → #db2777`
  - Enhanced with drop-shadow glow: `0 0 4px rgba(244, 114, 182, 0.8)`
  - Delay between passes for single electron visibility

- **Footer credits synchronized animation**
  - Copyright text glows when electron passes through
  - Rapid flash animation (0.6s duration at ~20% of cycle)
  - Color transition: white → subtle pastel pink → white
  - Minimal scale pulse: 1 → 1.008 → 1
  - Pink text-shadow glow synced with electron position
  - Uses `@keyframes electron-glow` animation

- **Minimalistic footer cleanup**
  - Removed all link sections (Docs, Community, More)
  - Simplified copyright: `Copyright © 2025 QQ Omega Labs`
  - Future-ready: All link sections commented out for easy re-activation
  - Kept electron animation border for visual interest

#### Content Styling Improvements

- **Removed backgrounds and borders from markdown content**
  - Main content area: transparent background, no border
  - H2 headings: removed bottom border
  - Links: removed underline borders
  - Code blocks: transparent background, no borders
  - Inline code: transparent background, no borders
  - Blockquotes: transparent background, no left border
  - Admonitions: transparent backgrounds, no borders
  - Pagination: kept glassmorphism effects (navigation elements)

- **Elegant link hover effects**
  - Replaced "cheap" darker pink hover with subtle opacity change (85%)
  - Animated underline on markdown links: slides in left to right on hover
  - Removed color changes for "Edit this page" and hash links
  - All links maintain consistent pink color on hover
  - Global link hover: opacity reduction instead of darker pink

#### Breadcrumb Styling

- **Refined breadcrumb colors**
  - Non-active items (Home, intermediate pages): normal text color
  - Active/current page only: pink `var(--ifm-color-primary)`
  - Separators: normal color with 50% opacity
  - Hover: subtle opacity change, no color shift

#### Site Branding

- **Removed gradient from navbar title**
  - Site name "QQ Omega" now uses default navbar color
  - Light mode: dark gray `#303030`
  - Dark mode: white/light gray

#### Files Modified (Session 5)

- `src/css/custom.css` - Major animation and styling updates
- `src/theme/Footer/styles.module.css` - Electron animation implementation
- `docusaurus.config.ts` - Footer cleanup and simplification

### UI Refinements (Session 3)

#### Mobile Menu Light Mode Fixes

- Fixed "Back to main menu" button text color in light mode
  - Changed from white to dark gray (#1a1a1a) to match menu section texts
  - Added `opacity: 1` and `filter: none` to ensure full visibility
  - Applied to all button states (default, hover, and child elements)
  - Targeted both `.menu__link--back` and `.navbar-sidebar__back` classes
- Fixed arrow indicator colors in light mode
  - Corrected pseudo-element from `::after` to `::before` for `.menu__caret`
  - Set `border-left-color: #000000` for dark visibility
  - Added `opacity: 1` and `filter: none` to prevent transparency issues
- Consolidated all light mode mobile menu styling for better maintainability
- Removed redundant CSS rules that were causing style conflicts

### UI Refinements (Session 2)

#### Navbar & Navigation

- Reduced navbar glassmorphism blur from 16px to 8px for clearer glass effect
- Decreased navbar and menu font sizes for refined, tech-elegant appearance (0.75-0.8rem)
- Changed menu font-weight from bold (700) to semibold (500) for elegant look
- Added vertical border-left indicators for nested menu items
- Fixed mobile sidebar z-index issues by converting swizzled components to passthrough pattern
- Made pink accent color appear only on hover/active states (default state uses neutral colors)

#### Light Mode Improvements

- Darkened light mode backgrounds using neutral grays (#d8d8d8, #c8c8c8, #e0e0e0)
- Improved contrast for theme toggle button and search box in light mode
- Fixed search box keyboard shortcut visibility (CMD+K keys) with enhanced contrast
- Ensured all navbar icons and elements are visible in light mode

#### Typography & Content

- Changed h2/h3 headings from pink to default heading color for better readability
- Updated inline code background from pink tint to neutral gray (rgba(255, 255, 255, 0.08))
- Changed markdown links from cyan to pink for color consistency
- Reduced sidebar vertical border from 2px to 1px for elegant grid style

#### Interactive Elements

- Styled back-to-top button with glassmorphism matching navbar (transparent background, 8px blur)
- Added pink icon color and hover effects to back-to-top button
- Updated breadcrumbs, pagination, and "Edit page" links to use pink on hover only
- Enhanced theme switcher hover states with pink accent and background tint

#### Footer

- Set footer divider to static gray (removed animated shimmer)
- Matched footer background to main content background color
- Kept footer section titles pink, all other text neutral

### Added

#### Theme & Styling

- **Crypto-themed UI**: Bun-inspired pink/cyan color scheme with glassmorphism effects
- **CSS Custom Properties**: Comprehensive theme system using CSS variables
  - Pink accents: `--qq-color-pink-hot`, `--qq-color-pink-magenta`, `--qq-color-pink-soft`
  - Cyan highlights: `--qq-color-cyan-bright`, `--qq-color-cyan-teal`
  - Purple accents: `--qq-color-purple-light`, `--qq-color-purple-dark`
  - Gradient definitions: `--qq-gradient-crypto-pink`, `--qq-gradient-crypto-purple`, `--qq-gradient-crypto-cyan`
- **Glassmorphism Utilities**: Reusable CSS classes
  - `.glass-card`: Standard glass effect card
  - `.glass-card-pink`, `.glass-card-cyan`: Colored variants
  - `.gradient-text`: Gradient text effects
  - `.crypto-glow`: Glow effects on hover
- **Animations**: CSS keyframe animations
  - `@keyframes float`: Floating animation for icons
  - `@keyframes pulse-glow`: Pulsing glow effect
  - `@keyframes gradient-shift`: Animated gradient backgrounds
  - `@keyframes fade-in`: Fade-in animations
- **Custom scrollbar**: Pink-themed scrollbar for WebKit browsers and Firefox

#### Components

- **CryptoCard Component** (`src/components/CryptoCard/`)
  - Reusable glassmorphism card with title, description, and icon support
  - Variants: default, pink, cyan, purple
  - Optional glow effect and float animation
  - Mobile-first responsive design
- **GlassButton Component** (`src/components/GlassButton/`)
  - Glassmorphism button with crypto-themed styling
  - Variants: primary (gradient), secondary (glass), outline
  - Sizes: small, medium, large
  - Support for internal links, external links, and click handlers

#### Search Functionality

- **Local search**: Integrated `@easyops-cn/docusaurus-search-local`
  - Indexes docs, blog posts, and pages
  - Search bar positioned on right side of navbar
  - Highlights search terms on target pages
  - Works offline, no external dependencies

#### Docusaurus Customizations

- **Swizzled components** using wrap strategy (safer for upgrades):
  - Navbar: Custom glassmorphism navbar
  - Footer: Dark-themed footer with crypto styling
  - DocItem/Layout: Custom documentation layout
  - TOC: Custom table of contents styling

### Changed

#### Theme Configuration

- **Dark mode**: Now defaults to dark mode with #282828 background
- **Navbar**: Changed to dark style with glassmorphism backdrop blur
- **Footer**: Changed to dark style
- **Color palette**: Updated from green/teal to pink/cyan crypto theme
- **Code blocks**: Pink-tinted inline code blocks with custom borders
- **Buttons**: Gradient backgrounds with glow effects on hover
- **Cards**: Enhanced hover effects with transform animations

#### Configuration

- **docusaurus.config.ts**:
  - Added local search theme configuration
  - Set `colorMode.defaultMode` to "dark"
  - Set `navbar.style` and `footer.style` to "dark"
  - Updated `editUrl` to correct repository
  - Added additional Prism languages: bash, typescript, javascript, json, jsx, tsx, python, solidity
  - Added blog link to navbar

### Technical Details

#### CSS Architecture

- **Pure CSS approach**: No Tailwind CSS, uses native Docusaurus patterns
- **CSS Modules**: Component-scoped styles prevent global conflicts
- **Infima integration**: Seamlessly overrides Docusaurus framework variables
- **Mobile-first**: Responsive breakpoints at 768px, 1024px, 1440px
- **Performance optimizations**:
  - Reduced blur effects on mobile (12px vs 16px on desktop)
  - Touch-friendly tap targets (minimum 44x44px)
  - Conditional hover effects using `@media (hover: hover)`

#### Accessibility

- **Focus states**: Visible outline for keyboard navigation
- **Reduced motion**: Respects `prefers-reduced-motion` preference
- **High contrast**: Support for high contrast mode
- **Touch devices**: No sticky hover states on touch devices

#### Browser Compatibility

- **Backdrop-filter fallback**: Solid backgrounds for browsers without backdrop-filter support
- **Cross-browser scrollbar**: Styled scrollbars for WebKit and Firefox
- **Print styles**: Optimized for printing documentation

### Dependencies

- Added `@easyops-cn/docusaurus-search-local@0.52.2`

### Files Created

- `src/css/custom.css` - Complete rewrite with crypto theme
- `src/components/CryptoCard/index.tsx` - CryptoCard component
- `src/components/CryptoCard/styles.module.css` - CryptoCard styles
- `src/components/GlassButton/index.tsx` - GlassButton component
- `src/components/GlassButton/styles.module.css` - GlassButton styles
- `src/theme/Navbar/index.tsx` - Swizzled Navbar wrapper
- `src/theme/Footer/index.tsx` - Swizzled Footer wrapper
- `src/theme/DocItem/Layout/index.tsx` - Swizzled DocItem/Layout wrapper
- `src/theme/TOC/index.tsx` - Swizzled TOC wrapper
- `CHANGE-LOG.md` - This file

### Files Modified

- `package.json` - Added search dependency
- `docusaurus.config.ts` - Added search theme, updated theme settings
- `CLAUDE.md` - Added CSS architecture documentation

### Notes

- Homepage remains as redirect to `/intro` (docs-only approach)
- All swizzled components use wrap strategy for easier Docusaurus upgrades
- Color scheme inspired by Bun's documentation design
- Mobile-first approach ensures excellent mobile experience

---

## Version History

### [0.0.0] - Initial Setup

- Docusaurus 3.9.2 with classic theme
- Basic green/teal color scheme (Infima defaults)
- Standard documentation structure
