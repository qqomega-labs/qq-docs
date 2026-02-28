# TokenomicsPieChart Component

A beautiful, responsive pie chart component for displaying tokenomics distribution data with glassmorphism styling and crypto-themed colors.

## Features

- 📊 Built with Recharts (no Tailwind CSS required)
- 🎨 Glassmorphism design matching QQ Omega theme
- 📱 Mobile-first responsive design
- 🌓 Light/dark mode support
- ✨ Smooth animations
- 🎯 Custom tooltips and labels
- 🎨 Uses QQ Omega color palette (pink/cyan/purple gradients)

## Usage

### Basic Usage (MDX)

```mdx
---
title: Tokenomics
---

import TokenomicsPieChart from "@site/src/components/TokenomicsPieChart";

## Token Distribution

<TokenomicsPieChart />
```

### With Custom Title

```mdx
<TokenomicsPieChart title="QQ Token Allocation" />
```

### With Custom Height

```mdx
<TokenomicsPieChart title="Token Distribution" height={500} />
```

### With Custom Data

```mdx
import TokenomicsPieChart from "@site/src/components/TokenomicsPieChart";

<TokenomicsPieChart
  title="Custom Token Distribution"
  data={[
    { name: "Public Sale", value: 40, color: "var(--qq-color-pink-hot)" },
    { name: "Liquidity", value: 30, color: "var(--qq-color-cyan-bright)" },
    { name: "Team", value: 20, color: "var(--qq-color-purple-light)" },
    { name: "Reserve", value: 10, color: "var(--qq-color-cyan-teal)" },
  ]}
  height={450}
/>
```

## Props

| Prop     | Type               | Default                 | Description                 |
| -------- | ------------------ | ----------------------- | --------------------------- |
| `data`   | `TokenomicsData[]` | Default tokenomics data | Array of chart data objects |
| `title`  | `string`           | `"Token Distribution"`  | Chart title (optional)      |
| `height` | `number`           | `400`                   | Chart height in pixels      |

### TokenomicsData Type

```typescript
interface TokenomicsData {
  name: string; // Segment name (e.g., "Liquidity Pool")
  value: number; // Percentage value (e.g., 30)
  color: string; // CSS color (use CSS custom properties from theme)
}
```

## Default Data

The component comes with default tokenomics data:

- **Liquidity Pool** - 30% (pink-hot)
- **Staking Rewards** - 25% (cyan-bright)
- **Team & Advisors** - 20% (purple-light)
- **Marketing & Partnerships** - 15% (pink-magenta)
- **Treasury Reserve** - 10% (cyan-teal)

## Available Colors from Theme

Use these CSS custom properties for consistent theming:

- `var(--qq-color-pink-hot)` - #f472b6
- `var(--qq-color-pink-magenta)` - #EE81C3
- `var(--qq-color-pink-soft)` - #f4b6de
- `var(--qq-color-pink-dark)` - #db2777
- `var(--qq-color-cyan-bright)` - #00a6e1
- `var(--qq-color-cyan-teal)` - #06b6d4
- `var(--qq-color-cyan-dark)` - #0891b2
- `var(--qq-color-purple-light)` - #a855f7
- `var(--qq-color-purple-dark)` - #7e22ce

## Styling

The component uses CSS Modules with mobile-first responsive design:

- **Mobile** (< 768px): Compact layout with 1.5rem padding
- **Tablet** (768px - 1024px): Medium layout with 2rem padding
- **Desktop** (> 1024px): Full layout with 2.5rem padding

The glassmorphism effect adapts based on device capabilities to ensure optimal performance.

## Accessibility

- Labels show percentages for easy reading
- Custom tooltips provide detailed information on hover
- Legend with color-coded entries
- Smooth animations (800ms duration)
- High contrast colors for visibility

## Browser Support

Works in all modern browsers that support CSS backdrop-filter and CSS custom properties.
