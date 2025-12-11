# Change Log

## [Unreleased] - 2025-12-11

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
