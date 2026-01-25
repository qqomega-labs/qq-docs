import React, { useState } from "react";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Legend,
  Tooltip,
} from "recharts";
import styles from "./styles.module.css";

/**
 * Data structure for tokenomics pie chart segments.
 */
interface TokenomicsData {
  /** Segment name/label */
  name: string;
  /** Percentage value (0-100) */
  value: number;
  /** Segment color (CSS color or variable) */
  color: string;
  /** Optional amount in tokens */
  amount?: string;
  /** Additional custom properties */
  [key: string]: string | number | undefined;
}

/**
 * Props for the TokenomicsPieChart component.
 */
interface TokenomicsPieChartProps {
  /** Array of tokenomics data (default: example data) */
  data?: TokenomicsData[];
  /** Chart title (optional) */
  title?: string;
  /** Chart height in pixels (default: 400) */
  height?: number;
}

/**
 * Default tokenomics data for demonstration purposes.
 */
const defaultData: TokenomicsData[] = [
  { name: "Liquidity Pool", value: 30, color: "var(--qq-color-pink-hot)" },
  { name: "Staking Rewards", value: 25, color: "var(--qq-color-cyan-bright)" },
  { name: "Team & Advisors", value: 20, color: "var(--qq-color-purple-light)" },
  {
    name: "Marketing & Partnerships",
    value: 15,
    color: "var(--qq-color-pink-magenta)",
  },
  { name: "Treasury Reserve", value: 10, color: "var(--qq-color-cyan-teal)" },
];

/**
 * Interactive tokenomics pie chart with custom styling and hover effects.
 * Uses recharts library for rendering, with mobile-first responsive design.
 *
 * @component Custom component (not swizzled)
 * @usage Used in: docs/tokenomics/qq-tokenomics.mdx
 * @dependencies recharts (external library)
 *
 * @example
 * ```tsx
 * <TokenomicsPieChart
 *   title="Token Distribution"
 *   data={[
 *     { name: "Liquidity", value: 30, color: "#ff1d64", amount: "300M" },
 *     { name: "Staking", value: 25, color: "#00d4ff", amount: "250M" }
 *   ]}
 *   height={500}
 * />
 * ```
 */
export default function TokenomicsPieChart({
  data = defaultData,
  title = "", // default no title
  height = 400,
}: TokenomicsPieChartProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(
    typeof document !== 'undefined'
      ? document.documentElement.getAttribute('data-theme') !== 'light'
      : true
  );

  // Detect mobile screen size and theme
  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    const checkTheme = () => {
      setIsDarkTheme(document.documentElement.getAttribute('data-theme') === 'dark');
    };

    checkMobile();
    checkTheme();

    window.addEventListener('resize', checkMobile);

    // Watch for theme changes
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme'],
    });

    return () => {
      window.removeEventListener('resize', checkMobile);
      observer.disconnect();
    };
  }, []);

  // Responsive radii - optimized for mobile readability
  const innerRadius = isMobile ? 65 : 95;
  const outerRadius = isMobile ? 110 : 160;

  // Custom label renderer for donut slices - positioned outside
  const renderLabel = (props: any) => {
    const { cx, cy, midAngle, outerRadius, fill, percent, name, value } = props;
    const RADIAN = Math.PI / 180;
    const radius = outerRadius + 25;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    const percentText = (percent * 100).toFixed(1) + '%';
    const fontSize = isMobile ? 10 : 14;

    // On mobile, show only percentage. On desktop, show name for larger segments
    if (isMobile) {
      return (
        <text
          x={x}
          y={y}
          fill={fill}
          textAnchor={x > cx ? 'start' : 'end'}
          dominantBaseline="central"
          fontSize={fontSize}
          fontWeight={600}
        >
          {percentText}
        </text>
      );
    }

    if (value >= 5) {
      return (
        <text
          x={x}
          y={y}
          fill={fill}
          textAnchor={x > cx ? 'start' : 'end'}
          dominantBaseline="central"
          fontSize={fontSize}
          fontWeight={600}
        >
          <tspan x={x} dy={0}>{name}</tspan>
          <tspan x={x} dy={16}>{percentText}</tspan>
        </text>
      );
    }

    return (
      <text
        x={x}
        y={y}
        fill={fill}
        textAnchor={x > cx ? 'start' : 'end'}
        dominantBaseline="central"
        fontSize={fontSize}
        fontWeight={600}
      >
        {percentText}
      </text>
    );
  };

  // Handle segment hover
  const onPieEnter = (_: any, index: number) => {
    setActiveIndex(index);
  };

  const onPieLeave = () => {
    setActiveIndex(null);
  };

  // Custom legend renderer
  const renderCustomLegend = () => {
    return (
      <div className={styles.customLegend}>
        {data.map((entry, index) => (
          <div
            key={`legend-${index}`}
            className={`${styles.legendItem} ${activeIndex === index ? styles.legendItemActive : ""}`}
            onMouseEnter={() => setActiveIndex(index)}
            onMouseLeave={() => setActiveIndex(null)}
          >
            <div
              className={styles.legendIcon}
              style={{
                backgroundColor: entry.color,
                boxShadow:
                  activeIndex === index ? `0 0 12px ${entry.color}` : "none",
              }}
            />
            <div className={styles.legendText}>
              <div className={styles.legendName}>{entry.name}</div>
              <div className={styles.legendValue}>{entry.value}%</div>
              {entry.amount && (
                <div className={styles.legendAmount}>{entry.amount}</div>
              )}
            </div>
          </div>
        ))}
      </div>
    );
  };

  // Custom tooltip content
  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const sliceColor = payload[0].payload.color;
      return (
        <div className={styles.tooltip}>
          <p className={styles.tooltipLabel}>{payload[0].name}</p>
          <p className={styles.tooltipValue} style={{ color: sliceColor }}>
            {payload[0].value}% of total supply
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className={styles.chartContainer}>
      {title && <h3 className={styles.chartTitle}>{title}</h3>}
      <div className={styles.chartWrapper}>
        <ResponsiveContainer width="100%" height={height}>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={innerRadius}
              outerRadius={outerRadius}
              paddingAngle={2}
              cornerRadius={3}
              labelLine={{
                stroke: isDarkTheme ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)",
                strokeWidth: 2,
              }}
              label={renderLabel}
              fill="#8884d8"
              dataKey="value"
              animationBegin={0}
              animationDuration={1200}
              animationEasing="ease-out"
              onMouseEnter={onPieEnter}
              onMouseLeave={onPieLeave}
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={entry.color}
                  stroke={isDarkTheme ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)"}
                  strokeWidth={activeIndex === index ? 4 : 2}
                  opacity={
                    activeIndex === null || activeIndex === index ? 1 : 0.6
                  }
                  className={styles.pieCell}
                  style={{
                    filter:
                      activeIndex === index
                        ? "drop-shadow(0 0 12px currentColor)"
                        : "none",
                    transition: "all 0.3s ease",
                  }}
                />
              ))}
            </Pie>
            <Tooltip content={<CustomTooltip />} />
          </PieChart>
        </ResponsiveContainer>
      </div>
      {renderCustomLegend()}
    </div>
  );
}
