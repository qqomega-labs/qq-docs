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

interface TokenomicsData {
  name: string;
  value: number;
  color: string;
  amount?: string;
  [key: string]: string | number | undefined;
}

interface TokenomicsPieChartProps {
  data?: TokenomicsData[];
  title?: string;
  height?: number;
}

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

export default function TokenomicsPieChart({
  data = defaultData,
  title = "", // default no title
  height = 400,
}: TokenomicsPieChartProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  // Custom label renderer for donut slices - positioned outside
  const renderLabel = (entry: any) => {
    const percent = (entry.percent * 100).toFixed(1);
    // Show name and percentage for larger segments, just percentage for small ones
    if (entry.value >= 5) {
      return `${entry.name}\n${percent}%`;
    }
    return `${percent}%`;
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
                <div className={styles.legendAmount}>{entry.amount} $QQ</div>
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
              innerRadius={110}
              outerRadius={180}
              paddingAngle={3}
              cornerRadius={8}
              labelLine={{
                stroke: "rgba(255, 255, 255, 0.4)",
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
                  stroke="rgba(255, 255, 255, 0.15)"
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
