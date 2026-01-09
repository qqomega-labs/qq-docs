# TokenomicsInfoCard Component

Beautiful glassmorphism card component for displaying tokenomics information with QQ Omega crypto-themed styling.

## Features

- 🎨 **Three color variants**: Pink, Cyan, and Purple matching QQ theme
- 🎯 **Glassmorphism styling** with blur effects and subtle backgrounds
- 📱 **Mobile-first responsive design**
- 🌓 **Light/dark mode support**
- ✨ **Smooth hover animations** with lift effect
- 🎭 **Icon support** with glassmorphism containers
- 📊 **Flexible grid system** (1, 2, or 3 columns)

## Usage

### Single Card

```mdx
import TokenomicsInfoCard from '@site/src/components/TokenomicsInfoCard';

<TokenomicsInfoCard
  icon="⛓️"
  label="Chain"
  value="Base"
  variant="cyan"
/>
```

### Card with Subtext

```mdx
<TokenomicsInfoCard
  icon="💎"
  label="Max Supply"
  value="1,000,000,000"
  subtext="Fixed and hard-capped"
  variant="pink"
/>
```

### Grid of Cards

```mdx
import TokenomicsInfoCard, { TokenomicsInfoGrid } from '@site/src/components/TokenomicsInfoCard';

<TokenomicsInfoGrid columns={3}>
  <TokenomicsInfoCard
    icon="⛓️"
    label="Chain"
    value="Base"
    variant="cyan"
  />
  <TokenomicsInfoCard
    icon="📍"
    label="Token Address"
    value="0x1234...5678"
    variant="purple"
  />
  <TokenomicsInfoCard
    icon="💎"
    label="Max Supply"
    value="1,000,000,000"
    subtext="Fixed and hard-capped"
    variant="pink"
  />
</TokenomicsInfoGrid>
```

## Props

### TokenomicsInfoCard

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `icon` | `string` | - | Emoji or icon to display (optional) |
| `label` | `string` | **required** | Card label text (uppercase) |
| `value` | `string` | **required** | Main value to display |
| `subtext` | `string` | - | Additional info text below value (optional) |
| `variant` | `'pink' \| 'cyan' \| 'purple'` | `'pink'` | Color theme variant |
| `className` | `string` | `''` | Additional CSS classes |

### TokenomicsInfoGrid

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | **required** | TokenomicsInfoCard components |
| `columns` | `1 \| 2 \| 3` | `3` | Number of columns on desktop |
| `className` | `string` | `''` | Additional CSS classes |

## Color Variants

### Pink (`variant="pink"`)
- Uses `--qq-gradient-crypto-pink`
- Best for: Supply, allocation percentages, financial data
- Hover: Pink glow effect

### Cyan (`variant="cyan"`)
- Uses `--qq-gradient-crypto-cyan`
- Best for: Technical info, blockchain data, addresses
- Hover: Cyan glow effect

### Purple (`variant="purple"`)
- Uses `--qq-gradient-crypto-purple`
- Best for: Metadata, dates, general information
- Hover: Purple glow effect

## Responsive Behavior

**Mobile (< 768px):**
- All grids display as 1 column
- Compact padding (1.5rem)
- Smaller font sizes

**Tablet (768px - 1024px):**
- 2-column and 3-column grids display as 2 columns
- Medium padding (1.75rem)
- Medium font sizes

**Desktop (> 1024px):**
- 3-column grids display as 3 columns
- Full padding (2rem)
- Large font sizes
- Larger icons (56px)

## Examples

### Launch Information

```mdx
<TokenomicsInfoGrid columns={1}>
  <TokenomicsInfoCard
    icon="🚀"
    label="Virtuals Pegasus Launchpad"
    value="Fair Launch Model"
    subtext="No private sale, no preferential allocations"
    variant="pink"
  />
</TokenomicsInfoGrid>
```

### Token Details

```mdx
<TokenomicsInfoGrid columns={2}>
  <TokenomicsInfoCard
    icon="🪙"
    label="Token Name"
    value="QQ Token"
    variant="pink"
  />
  <TokenomicsInfoCard
    icon="🔤"
    label="Token Symbol"
    value="$QQ"
    variant="cyan"
  />
</TokenomicsInfoGrid>
```

### Distribution Info

```mdx
<TokenomicsInfoCard
  icon="📊"
  label="Liquidity Pool"
  value="75%"
  subtext="750,000,000 $QQ"
  variant="purple"
/>
```

## Accessibility

- Proper semantic HTML structure
- High contrast text
- Reduced motion support (`prefers-reduced-motion`)
- Touch-friendly sizes (minimum 44x44px)
- Keyboard navigable

## Styling Customization

Override styles using CSS modules or global CSS:

```css
/* Custom styling */
.myCustomCard {
  max-width: 500px;
  margin: 0 auto;
}
```

```mdx
<TokenomicsInfoCard
  label="Custom Card"
  value="Styled"
  className="myCustomCard"
/>
```

## Browser Support

Works in all modern browsers that support:
- CSS backdrop-filter
- CSS custom properties
- CSS Grid
- Flexbox
