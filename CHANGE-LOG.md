# Change Log

## [Unreleased] - 2026-01-06

### Changed

- Updated `build:cf` script in `package.json`.

## [Unreleased] - 2026-01-06

### Added

- **Animated logo with rotating electrons** (`src/components/AnimatedAtomLogo/`, `src/theme/Logo/index.tsx`)
  - Interactive logo animation on hover
  - 2 electron dots rotate around the O ring when hovering over the logo
  - SVG-based animation using `animateTransform` with rotation around center point (512, 512)
  - Electron dots positioned at (315, 315) and (715, 715) to overlay original static dots
  - Animation speed: 3000ms (normal), configurable with slow/fast options
  - Conditionally renders animated SVG on hover for reliable animation start
  - Preserves original QQ logo appearance with perfect overlay technique
  - Swizzled Logo component to integrate AnimatedAtomLogo into navbar
  - Logo size: 40px in navbar for optimal visibility

### Fixed

- **TokenomicsPieChart labels and theming**
  - Responsive label sizing: 10px mobile, 14px desktop
  - Labels match segment colors with `fill={fill}`
  - Theme-aware borders: `rgba(255,255,255,0.1)` dark, `rgba(0,0,0,0.1)` light
  - MutationObserver for dynamic theme detection
  - Labels no longer cut off on mobile

- **GitHub button in mobile sidebar header**
  - Repositioned next to theme toggle and close button
  - Matches theme toggle style: same background, padding, border-radius
  - Inline SVG with `fill="currentColor"` for theme adaptation
  - Pink hover: background `rgba(255,29,100,0.2)`, icon turns #ff1d64
  - Improved spacing: `gap: 1rem`, logo `margin-right: auto`
  - Ejected `Navbar/MobileSidebar/Header` for full control

- **Desktop GitHub button hover effect**
  - Consistent pink hover matching mobile
  - CSS filter converts icon to #ff1d64 on hover
  - Background changes to pink tint (`rgba(255,29,100,0.2/0.15)`)

## [Unreleased] - 2026-01-05

### Fixed

- **Mobile navbar layout and alignment** (`src/css/custom.css`, `docusaurus.config.ts`, `src/theme/Navbar/MobileSidebar/PrimaryMenu/index.tsx`)
  - Fixed overlapping header elements on mobile viewport (< 996px)
  - Completely resolved search bar and "Docs" link collision issues
  - **GitHub button**:
    - Visible on desktop navbar (icon only)
    - Hidden from mobile top navbar to save space
    - Appears in mobile sidebar menu next to theme toggle button
    - **Fixed external link arrow icon** (complete solution):
      - Removed `label` property from GitHub navbar item in `docusaurus.config.ts`
      - Replaced `<a>` tag with `<div role="button">` element to bypass Docusaurus's link processing
      - Added filter in component to exclude GitHub link from navbar items list (checks both `className` and `href`)
      - Completely hides original navbar GitHub link in mobile sidebar with CSS
      - Now renders cleanly with GitHub icon + text only, no external link icons
    - **Pink hover effect**:
      - Background changes to `rgba(255, 29, 100, 0.25)` on hover
      - Border color changes to hot pink `#f472b6`
      - Adds pink glow with `box-shadow: 0 0 12px rgba(244, 114, 182, 0.4)`
      - Uses `@media (hover: hover)` to prevent sticky states on touch devices
  - Aggressive size reductions for mobile navbar:
    - Logo: Reduced from 2.5rem to 2rem height
    - Logo title: Reduced from 0.85rem to 0.75rem font size
    - Search bar: Very compact (60px-80px width) with smaller font (0.65rem)
    - Search bar padding: 0.3rem 0.4rem (ultra compact)
    - Navbar item padding: Reduced to 0.35rem 0.5rem
    - Navbar gaps: Minimized to 0.25rem between items
  - "Docs" link: Hidden completely on all mobile viewports (< 996px)
    - Accessible via hamburger menu instead
    - Prevents all overlap issues with search box
  - Search bar optimizations:
    - Set to `flex: 0 1 auto` to prevent expansion
    - Input padding reduced to 0.35rem 0.5rem
    - Font size reduced to 0.7rem for compact display
  - Enhanced mobile sidebar (hamburger menu):
    - GitHub button with icon + "GitHub" text label (added `label: "GitHub"` to config)
    - Desktop navbar: Icon only (text hidden with `font-size: 0`)
    - Mobile sidebar: Icon + visible "GitHub" text with proper font-size
    - Full SVG icon inline (white in dark mode, dark in light mode)
    - Glassmorphism styling with pink accent and rounded corners
    - Proper visibility with `opacity: 1` and `visibility: visible` forced
    - Icon size: 20px with 0.625rem margin
    - Min-height: 40px for proper touch target
    - Hover effects matching theme (pink glow)
    - Full light/dark mode support

- **TokenomicsPieChart tooltip animations** (`src/components/TokenomicsPieChart/styles.module.css`)
  - **Fixed "swarm" animation issue**:
    - Replaced animation-based tooltip with CSS transitions for smooth, stable behavior
    - Changed from re-triggering animations to smooth opacity/transform transitions (0.15s)
    - Added `will-change: opacity, transform` for better rendering performance
  - **Enhanced glassmorphism effect**:
    - Reduced background opacity from 0.95 to 0.6 for true glass transparency
    - Increased backdrop-filter blur from 16px to 24px for better frosted glass effect
    - Added inset shadows for depth: `inset 0 1px 0 rgba(255, 255, 255, 0.15)`
    - Maintained pink accent glow and border
  - **Subtler animations**:
    - Center label pulse: Reduced scale from 1.05 to 1.02, slowed from 2s to 3s
    - Legend icon pulse: Slowed from 1.5s to 2.5s
    - Opacity changes: From 0.9 to 0.95 for gentler effect
  - **Natural chart appearance**:
    - Removed `brightness(1.2)` and `drop-shadow` filters from pie slices on hover
    - Now uses subtle opacity change (0.9) for minimal visual feedback
    - Chart colors remain natural and undistorted
    - Glassy tooltip provides all necessary information without altering chart

### Technical Details

**Navbar Fixes:**

- **Desktop**: `.header-github-link` - Visible with icon only (`font-size: 0` to hide text label)
- **Mobile** (< 996px):
  - `.navbar` - Padding reduced to 0.5rem for compact layout
  - `.navbar .header-github-link` - Hidden with `display: none !important` (appears in mobile sidebar)
  - `.navbar__inner` - Gap minimized to 0.25rem
  - `.navbar__items` - Gap set to 0.25rem for tight spacing
  - `.navbar__items--left` - Gap 0.25rem, `flex: 0 1 auto`, max-width 50%
  - `.navbar__items--left .navbar__link` - Hidden with `display: none !important` (Docs link)
  - `.navbar__items--right` - Gap 0.35rem, auto margin-left, `flex-shrink: 0`
  - `.navbar__brand` - Fixed width (`flex: 0 0 auto`) with no margin
  - `.navbar__logo` - Height reduced to 2rem (from 2.5rem)
  - `.navbar__title` - Font size reduced to 0.75rem (from 0.85rem)
  - `.navbar__search` - Ultra compact: 60px-80px width, `flex: 0 1 auto`
  - `.navbar__search-input` - Font 0.65rem, padding 0.3rem 0.4rem

**GitHub Button Configuration:**

- `docusaurus.config.ts` - Removed `label` property from navbar item
  - Prevents automatic rendering in mobile sidebar menu
  - Desktop navbar renders icon-only button
  - Mobile sidebar uses custom button component instead

**Mobile Sidebar GitHub Button:**

- Custom component in `src/theme/Navbar/MobileSidebar/PrimaryMenu/index.tsx`
  - Uses `<div role="button">` element instead of `<a>` tag
  - Filters out original GitHub link from navbar items (checks `className` and `href`)
  - Inline GitHub icon as background SVG (data URI)
  - Custom styling:
    - Background: `rgba(255, 29, 100, 0.08)` with glassmorphism
    - Border: `1px solid rgba(255, 29, 100, 0.2)` with 6px border-radius
    - Icon (20px) + "GitHub" text label
    - Font size: 0.8rem, min-height: 40px for touch targets
    - Padding: 0.5rem 0.875rem
- CSS hover effects (`.mobile-github-button:hover`):
  - Background: `rgba(255, 29, 100, 0.25)`
  - Border: `#f472b6` (hot pink)
  - Glow: `box-shadow: 0 0 12px rgba(244, 114, 182, 0.4)`
- Original navbar GitHub link completely hidden in sidebar with CSS

**TokenomicsPieChart Improvements:**

- Tooltip styling (`.tooltip`):
  - Background: `rgba(20, 21, 26, 0.6)` for transparency
  - Backdrop filter: `blur(24px) saturate(180%)` for glassmorphism
  - Border: `1px solid rgba(255, 255, 255, 0.2)`
  - Inset shadows for depth and glass effect
  - Transitions: `opacity 0.15s, transform 0.15s` (smooth, no re-triggering animations)
  - Performance optimization: `will-change: opacity, transform`
- Animation adjustments:
  - `.centerLabel`: `animation: centerPulse 3s` (was 2s)
  - `@keyframes centerPulse`: scale(1.02) (was 1.05), opacity 0.95 (was 0.9)
  - `.legendItemActive .legendIcon`: `animation: centerPulse 2.5s` (was 1.5s)
- Chart slice hover (`.pieCell:hover`):
  - Removed: `filter: brightness(1.2) drop-shadow(...)`
  - Added: `opacity: 0.9` (subtle feedback only)
  - Preserves natural colors

## [Unreleased] - 2026-01-05

### Added

- **GitHub icon in navbar** (`docusaurus.config.ts`, `src/css/custom.css`)
  - Replaced "GitHub" text label with GitHub logo SVG icon
  - Icon matches theme toggle button styling (same size, padding, background, hover effects)
  - Button background: `rgba(0, 0, 0, 0.3)` in dark mode, `rgba(255, 255, 255, 0.5)` in light mode
  - Icon size: 20px on desktop, 18px on mobile
  - Pink hover effect: Background changes to `rgba(255, 29, 100, 0.2)` on hover
  - Accessible: Added `aria-label="GitHub repository"` for screen readers
  - Responsive: Matches mobile navbar sizing (0.35rem padding, 18px icon)

- **Environment configuration** (`.env`)
  - Added `.env` file with `BROWSER=none` to prevent browser auto-opening
  - Added `.env` to `.gitignore` for proper version control exclusion

### Changed

- **Development server configuration** (`package.json`)
  - Updated `start` script with `--no-open` flag to prevent automatic browser opening
  - Fixes AppleScript error when using "Google Chrome Dev" as system browser
  - Users now manually open browser to `http://localhost:3000/`

- **Markdown references** (`docs/ai-agents/what-is-an-ai-agent.md`)
  - Fixed broken Markdown links to agent files (case sensitivity issue)
  - Updated file references to use lowercase filenames:
    - `Carbon.md` in `carbon.md`
    - `Hydrogen.md` in `hydrogen.md`
    - `Silicon.md` in `silicon.md`
    - `Oxygen.md` in `oxygen.md`
    - `Phosphorus.md` in `phosphorus.md`
  - Resolves Docusaurus build warnings about unresolved Markdown links

### Fixed

- **Browser opening error**
  - Fixed AppleScript error when Docusaurus tries to open "Google Chrome Dev"
  - Error was: `openChrome.applescript:848:858: script error: Un proprietà non può andare dopo questo identificativo. (-2740)`
  - Solution: Used Docusaurus built-in `--no-open` CLI flag instead of environment variable workarounds

### Technical Details

**GitHub Icon Implementation:**

- CSS class: `.header-github-link`
- Icon technique: SVG embedded as data URL in CSS `::before` pseudo-element
- Two SVG variants:
  - Dark mode: White fill (`fill='white'`)
  - Light mode: Dark gray fill (`fill='%231a1a1a'`)
- Hover behavior: Entire button background changes to pink (not just icon)
- Positioning: Flexbox centering with `align-items: center` and `justify-content: center`

## [Unreleased] - 2026-01-05

### Changed

- **Markdown references**
  - Update Markdown references with exact case to avoid docusaurus warnings.

## [Unreleased] - 2026-01-05

### Added

- **TokenomicsPieChart Component** (`src/components/TokenomicsPieChart/`)
  - Interactive donut chart using Recharts (v3.6.0) library
  - Glassmorphism styling with crypto-themed colors matching QQ Omega palette
  - Donut configuration: innerRadius={110}, outerRadius={180}, paddingAngle={3}
  - Rounded corners on segments (cornerRadius={8})
  - Custom legend with glassmorphism cards showing token amounts
  - Interactive hover states with segment highlighting
  - Dynamic tooltip colors matching slice colors
  - Smooth fade-in entrance animation (0.8s) for landing page visibility
  - Label positioning: shows name + percentage for segments ≥5%, percentage only for smaller segments
  - Mobile-first responsive design with optimized spacing
  - Height: 550px for prominent display
  - Color-coded by allocation category:
    - LP: Pink Hot (#f472b6)
    - Airdrops (3): Cyan variations (Bright, Teal, Dark)
    - Core Contributors (3): Purple variations + Pink Soft for Strategic Partnerships

- **TokenomicsInfoCard Component** (`src/components/TokenomicsInfoCard/`)
  - Reusable glassmorphism card for displaying token information
  - Three color variants: pink, cyan, purple
  - Optional icon, label, value, and subtext fields
  - Hover effects with lift animation and glow
  - Mobile-first responsive layout
  - Grid container component (TokenomicsInfoGrid) for 1/2/3 column layouts
  - Compact padding and spacing optimized for tablet/desktop viewing

### Changed

- **Tokenomics Documentation** (`docs/tokenomics/qq-tokenomics.mdx`)
  - Converted from .md to .mdx for component integration
  - Integrated TokenomicsPieChart with distribution data
  - Added TokenomicsInfoCard grid with two rows
  - Removed chart title for cleaner presentation

### Technical Details

**TokenomicsPieChart Implementation:**

- **Location**: `src/components/TokenomicsPieChart/`
- **Dependencies**: recharts@3.6.0
- **Key Features**:
  - TypeScript with proper type definitions (TokenomicsData interface with index signature)
  - Custom label renderer showing names for larger segments
  - Custom tooltip with fade-in animation (0.2s)
  - Enhanced glassmorphism with blur(32px) saturate(180%)
  - Custom legend grid with glassmorphism cards
  - Interactive state management using React useState hook
  - onMouseEnter/onMouseLeave handlers for hover effects
  - Responsive legend grid: 1 column (mobile), 2 columns (tablet), 3 columns (desktop)

**Animations:**

- `@keyframes chartFadeIn`: Fade-in entrance (opacity + translateY + scale)
- `@keyframes tooltipFadeIn`: Smooth tooltip appearance
- `@keyframes centerPulse`: Pulsing effect for legend icons on hover
- Respects `prefers-reduced-motion` for accessibility

**TokenomicsInfoCard Implementation:**

- **Location**: `src/components/TokenomicsInfoCard/`
- **Grid System**: CSS Grid with responsive columns
- **Variant System**: Dynamic className mapping for color variants
- **Layout**: Flexbox with icon container + content column
- **Hover Effects**: translateY(-2px) lift with enhanced shadows
- **Light/Dark Mode**: Full support with adjusted colors and backgrounds

**Color Palette Organization:**

- LP allocation: `var(--qq-color-pink-hot)` - Hot pink for main liquidity
- Airdrop allocations: Cyan family (`--qq-color-cyan-bright`, `--qq-color-cyan-teal`, `--qq-color-cyan-dark`)
- Core contributors: Purple family (`--qq-color-purple-light`, `--qq-color-purple-dark`)
- Strategic partnerships: `var(--qq-color-pink-soft)` - Part of core/purple color family

## [Unreleased] - 2026-01-05

### Added

- **Automatic MDX Image Wrapping System**
  - Created `src/theme/MDXComponents.tsx` to override default MDX components
  - All `<img>` elements in MDX files now automatically wrapped with `MdxImageContainer`
  - Provides consistent styling without manual imports or wrapping
  - Glassmorphism effects (rounded corners, shadow) applied automatically
  - Responsive layout (centered, max-width 800px, mobile-optimized padding)

- **Comprehensive MDX Documentation in CLAUDE.md**
  - Added "MDX Support" section (lines 123-190) with:
    - When to use MDX vs regular Markdown
    - Automatic image wrapping explanation
    - Conversion guide for .md to .mdx files
    - Example usage with standard markdown syntax
    - Custom component usage examples
  - Updated "MdxImageContainer Component" section (lines 320-358) with automatic usage documentation
  - Updated "Swizzled Components" section (lines 379-401) to include MDXComponents.tsx

### Changed

- **Converted Markdown to MDX for Enhanced Functionality**
  - Renamed `docs/about-qq-omega/team.md` → `team.mdx`
  - Renamed `docs/about-qq-omega/what-is-qq-omega.md` → `what-is-qq-omega.mdx`
  - Simplified image syntax from manual JSX wrapping to standard markdown: `![Alt](path)`
  - Removed manual component imports (no longer needed with automatic wrapping)

### Fixed

- **Component naming typo**
  - Fixed typo in `src/components/MdxImageContainer.tsx:6`
  - Changed function name from `MdxImagContainer` to `MdxImageContainer`

### Technical Details

**Automatic Image Wrapping Implementation:**

- Location: `src/theme/MDXComponents.tsx`
- Extends `@theme-original/MDXComponents`
- Overrides `img` component with custom wrapper
- Preserves all image props and allows style overrides
- Default styling applied:
  - Width: 100%, Height: auto
  - Border-radius: 12px
  - Box-shadow: `0 4px 24px rgba(0, 0, 0, 0.2), 0 0 0 1px rgba(255, 255, 255, 0.05)`
  - Container max-width: 800px with centered alignment
  - Bottom margin: 2rem for vertical spacing

**Developer Experience Improvements:**

- No manual imports needed for image styling
- Standard markdown syntax `![Alt](path)` works automatically
- Consistent image presentation across all MDX documentation
- Backward compatible with existing markdown files (.md)

## Style Changes

Links inside cards (lines 1702-1720):

- Dark mode: Links use cyan (#00a6e1) for better contrast against dark backgrounds
- Light mode: Links use pink (#ff1d64) for better contrast against light backgrounds
- Hover effect: Subtle underline appears on hover
- Font weight: 500 to make links more prominent

Links inside admonitions/alerts (lines 1274-1292):

- Same color scheme as cards for consistency
- Applied to .admonition-content a, .alert a, and .theme-admonition a
- Same hover and visual treatment

How It Works

The CSS now uses var(--ifm-link-color) which automatically adapts:

- Dark theme: #00a6e1 (cyan) - great contrast on dark backgrounds
- Light theme: #ff1d64 (pink) - great contrast on light backgrounds

This ensures links inside cards and admonitions are clearly visible and accessible in both themes, matching the "What is QQ" article style.

## [Unreleased] - 2025-12-20

### SEO Implementation & Optimization

- **Created custom Open Graph image for social sharing**
  - Created OG image: `static/img/qq-og-image.svg` (source SVG)
  - Converted to PNG format: `static/img/qq-og-image.png` (64KB, 1200x630px)
  - **Fixed WhatsApp preview**: WhatsApp doesn't support SVG, now using PNG format

- **Comprehensive SEO metadata in docusaurus.config.ts**
  - Updated tagline: "AI-Powered Crypto Scoring Platform - Quantitative + Qualitative Analysis"
  - Added extensive keywords covering all aspects: crypto scoring, AI agents, quantitative/qualitative analysis, tokenomics, on-chain analysis, DeFi
  - Meta description highlighting core value proposition
  - Author metadata: "QQ Omega Labs"
  - Full Twitter Card implementation:
    - Card type: `summary_large_image`
    - Twitter handle: `@qqomega`
    - Custom title and description for Twitter
    - OG image URL for Twitter
  - Complete Open Graph protocol implementation:
    - Type: `website`
    - Title, description, URL, locale (`en_US`)
    - Image with dimensions (1200x630) and alt text
    - Site name: "QQ Omega Labs"
  - Updated social card reference from default Docusaurus to custom QQ image

- **SEO best practices implemented**
  - **Dual-title approach**: Clean, short titles for sidebar/navigation UX + rich SEO metadata for search engines
  - Descriptive, keyword-rich meta descriptions (120-160 characters)
  - Relevant keywords without stuffing (8 keywords per page)
  - Unique descriptions for each page tailored to content
  - Proper image tags with element icons for each agent
  - Mobile-friendly design (already mobile-first)
  - Fast loading (static site generation via Docusaurus)
  - Clean URLs with meaningful slugs
  - Semantic HTML structure (Docusaurus default)
  - Separation of concerns: UX titles vs SEO metadata for optimal user and search engine experience

- **Updated favicons with RealFaviconGenerator (v2)**
  - Downloaded and installed updated favicon set from RealFaviconGenerator
  - Files installed in `static/` folder:
    - `icon1.png` (5.0KB - 32x32 PNG icon, updated)
    - `icon0.svg` (3.5MB - SVG icon for modern browsers)
    - `favicon.ico` (15KB - ICO file for legacy support)
    - `apple-icon.png` (16KB - 180x180 Apple touch icon, updated)
    - `manifest.json` (435B - PWA manifest with app name "QQ docs")
    - `web-app-manifest-192x192.png` (18KB - 192x192 maskable icon, updated)
    - `web-app-manifest-512x512.png` (100KB - 512x512 maskable icon, updated)
  - Meta tags already configured in `docusaurus.config.ts` headTags
  - PWA-ready with proper manifest configuration
  - Build verified and passing

- Updated logo without padding

### Content Organization

- **Backed up original Docusaurus tutorial content**
  - Moved `tutorial-basics/` and `tutorial-extras/` to `docs/_backup/`
  - Moved `blog/` to `_blog-backup/` at project root
  - Created `docs/_backup/README.md` with restoration instructions
  - Folders starting with `_` are automatically ignored by Docusaurus
  - Content remains in repository for future reference
  - Active docs now only show QQ Omega-specific content

### Custom Pink Text Emphasis Styles

- **Added 5 new CSS utility classes for markdown text emphasis**
  - `.pink-text` - Simple pink colored text (color: `#ff1d64`)
  - `.pink-glow-text` - Pink text with layered glow effect (8px + 16px blur)
  - `.pink-highlight` - Background-highlighted text with pink tint and border
  - `.pink-badge` - Badge-style emphasis with gradient background, rounded corners, and shadow
  - `.pink-underline` - Pink underlined text with 2px thickness and 3px offset

- **Light/dark mode support**
  - Automatic color adjustments for optimal visibility
  - Dark mode uses `--qq-color-pink-hot` (#ff1d64)
  - Light mode uses `--qq-color-pink-dark` (#e01858)
  - Glow effects optimized for each theme

- **Usage in markdown**
  - Wrap any text with `<span className="class-name">text</span>`
  - Works in both `.md` and `.mdx` files
  ```html
  <span className="pink-text">Your pink text here</span>
  <span className="pink-glow-text">Glowing text</span>
  <span className="pink-highlight">Highlighted text</span>
  <span className="pink-badge">Badge</span>
  <span className="pink-underline">Underlined text</span>
  <span className="gradient-text">Animated gradient</span>
  ```

### UI Refinements

- Removed footer text animation
- Fixed breadcrumb separator: Changed from background image (showing as ">>>") to single ">" character by overriding Infima's default background-based separator with text content
- Reduced the size of content texts and its margins
- Patched navbar items sizes and margins on mobile

## [Unreleased] - 2025-12-18

- Web icons setup
- Updated website url
- Updated scripts
- Add `wrangler.toml` to configure Cloudflare Pages deployment with correct build output directory for Docusaurus static site.
- Removed `wrangler.toml` because we are on pages
- Added `package-lock.json` for Cloudflare Pages compatibility

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
