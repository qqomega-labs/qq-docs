import React, { useState } from "react";
import {
  RadialBarChart,
  RadialBar,
  ResponsiveContainer,
  Tooltip,
  PolarAngleAxis,
  Cell,
} from "recharts";
import styles from "./styles.module.css";

/**
 * Data structure for radial score chart segments.
 */
export interface ScoreData {
  /** Category name */
  name: string;
  /** Score value (0-100) */
  score: number;
  /** Segment color (CSS color or variable) */
  fill: string;
  /** Description for tooltip */
  description?: string;
  /** Additional custom properties */
  [key: string]: string | number | undefined;
}

/**
 * Props for the RadialScoreChart component.
 */
export interface RadialScoreChartProps {
  /** Array of score data (default: QQ Omega scoring categories) */
  data?: ScoreData[];
  /** Chart title (optional) */
  title?: string;
  /** Chart height in pixels (default: 400) */
  height?: number;
  /** Show legend (default: true) */
  showLegend?: boolean;
  /** Show center score indicator (default: true) */
  showCenterScore?: boolean;
  /** Custom center label text (default: "QQ Score") */
  centerLabel?: string;
  /** Inner radius percentage (default: "30%" desktop, "25%" mobile) */
  innerRadius?: string;
  /** Outer radius percentage (default: "85%" desktop, "90%" mobile) */
  outerRadius?: string;
}

/**
 * Default scoring categories for QQ Omega platform.
 * Each category represents a dimension analyzed by AI agent swarms.
 * Colors match TokenomicsPieChart palette for visual consistency.
 */
const defaultData: ScoreData[] = [
  {
    name: "Fundamentals",
    score: 85,
    fill: "var(--qq-color-pink-hot)",
    description: "Team, vision, technology, and execution capability",
  },
  {
    name: "Tokenomics",
    score: 72,
    fill: "var(--qq-color-cyan-bright)",
    description: "Token distribution, utility, and economic model",
  },
  {
    name: "On-Chain",
    score: 68,
    fill: "var(--qq-color-purple-light)",
    description:
      "Transaction activity, holder distribution, and network health",
  },
  {
    name: "Technical Analysis",
    score: 78,
    fill: "var(--qq-color-pink-magenta)",
    description: "Liquidity depth, DEX presence, and yield opportunities",
  },
  {
    name: "Macro & Market regime",
    score: 65,
    fill: "var(--qq-color-cyan-teal)",
    description: "Social engagement, market sentiment, and trend alignment",
  },
];

/**
 * Interactive radial bar chart displaying QQ Omega scoring categories.
 * Uses recharts library with glassmorphism styling.
 *
 * @dev Custom component for visualizing multi-dimensional crypto scores
 * @component
 * @usage Used in: docs/about/why.mdx
 * @dependencies recharts (external library)
 *
 * @example
 * ```tsx
 * <RadialScoreChart
 *   title="Project Analysis"
 *   data={[
 *     { name: "Fundamentals", score: 85, fill: "#ff1d64" },
 *     { name: "Tokenomics", score: 72, fill: "#00d4ff" }
 *   ]}
 *   height={500}
 * />
 * ```
 */
export default function RadialScoreChart({
  data = defaultData,
  title,
  height = 400,
  showLegend = true,
  showCenterScore = true,
  centerLabel = "QQ Score",
  innerRadius: customInnerRadius,
  outerRadius: customOuterRadius,
}: RadialScoreChartProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(
    typeof document !== "undefined"
      ? document.documentElement.getAttribute("data-theme") !== "light"
      : true,
  );

  // Detect mobile screen size and theme changes
  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    const checkTheme = () => {
      setIsDarkTheme(
        document.documentElement.getAttribute("data-theme") === "dark",
      );
    };

    checkMobile();
    checkTheme();

    window.addEventListener("resize", checkMobile);

    // Watch for theme changes
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    return () => {
      window.removeEventListener("resize", checkMobile);
      observer.disconnect();
    };
  }, []);

  // Transform data for RadialBarChart (needs value field)
  const chartData = data.map((item, index) => ({
    ...item,
    value: item.score,
    // Add index for unique identification
    dataIndex: index,
  }));

  // Responsive sizing - use custom values or defaults
  const innerRadius = customInnerRadius ?? (isMobile ? "25%" : "30%");
  const outerRadius = customOuterRadius ?? (isMobile ? "90%" : "85%");
  const barSize = isMobile ? 14 : 18;

  // Custom tooltip content
  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const item = payload[0].payload;
      return (
        <div className={styles.tooltip}>
          <p className={styles.tooltipLabel}>{item.name}</p>
          <p className={styles.tooltipScore} style={{ color: item.fill }}>
            {item.score}/100
          </p>
          {item.description && (
            <p className={styles.tooltipDescription}>{item.description}</p>
          )}
        </div>
      );
    }
    return null;
  };

  // Custom legend renderer
  const renderCustomLegend = () => {
    return (
      <div className={styles.legendContainer}>
        {data.map((entry, index) => (
          <div
            key={`legend-${index}`}
            className={`${styles.legendItem} ${
              activeIndex === index ? styles.legendItemActive : ""
            }`}
            onMouseEnter={() => setActiveIndex(index)}
            onMouseLeave={() => setActiveIndex(null)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                setActiveIndex(activeIndex === index ? null : index);
              }
            }}
            aria-label={`${entry.name}: ${entry.score} out of 100`}
          >
            <div
              className={styles.legendDot}
              style={{
                backgroundColor: entry.fill,
                boxShadow:
                  activeIndex === index ? `0 0 12px ${entry.fill}` : "none",
              }}
            />
            <div className={styles.legendContent}>
              <div className={styles.legendName}>{entry.name}</div>
              <div className={styles.legendScore}>{entry.score}/100</div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  // Calculate average score for center display
  const averageScore = Math.round(
    data.reduce((sum, item) => sum + item.score, 0) / data.length,
  );

  return (
    <div className={styles.chartContainer}>
      {title && <h3 className={styles.chartTitle}>{title}</h3>}
      <div className={styles.chartWrapper}>
        <ResponsiveContainer width="100%" height={height}>
          <RadialBarChart
            cx="50%"
            cy="50%"
            innerRadius={innerRadius}
            outerRadius={outerRadius}
            barSize={barSize}
            data={chartData}
            startAngle={90}
            endAngle={-270}
          >
            <PolarAngleAxis
              type="number"
              domain={[0, 100]}
              angleAxisId={0}
              tick={false}
            />
            <RadialBar
              background={{
                fill: isDarkTheme
                  ? "rgba(255, 255, 255, 0.05)"
                  : "rgba(0, 0, 0, 0.05)",
              }}
              dataKey="value"
              cornerRadius={10}
              onMouseEnter={(_, index) => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
            >
              {chartData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={entry.fill}
                  stroke={
                    isDarkTheme
                      ? "rgba(255, 255, 255, 0.1)"
                      : "rgba(0, 0, 0, 0.1)"
                  }
                  strokeWidth={activeIndex === index ? 3 : 1}
                  opacity={
                    activeIndex === null || activeIndex === index ? 1 : 0.6
                  }
                  style={{
                    filter:
                      activeIndex === index
                        ? `drop-shadow(0 0 8px ${entry.fill})`
                        : "none",
                    transition:
                      "filter 0.2s ease-out, opacity 0.2s ease-out, stroke-width 0.2s ease-out",
                    cursor: "pointer",
                  }}
                />
              ))}
            </RadialBar>
            <Tooltip
              content={<CustomTooltip />}
              cursor={false}
              wrapperStyle={{ outline: "none" }}
            />
          </RadialBarChart>
        </ResponsiveContainer>

        {/* Center label showing average score */}
        {showCenterScore && (
          <div className={styles.centerLabel}>
            <div className={styles.centerScore}>{averageScore}</div>
            <div className={styles.centerText}>{centerLabel}</div>
          </div>
        )}
      </div>

      {showLegend && renderCustomLegend()}
    </div>
  );
}
