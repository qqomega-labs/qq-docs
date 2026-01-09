import React from 'react';
import styles from './styles.module.css';

/**
 * Props for the TokenomicsInfoCard component.
 */
interface TokenomicsInfoCardProps {
  /** Icon/emoji to display (optional) */
  icon?: string;
  /** Label text (e.g., "Chain", "Tax", "Max Tx") */
  label: string;
  /** Value text (e.g., "Base", "0%") */
  value: string;
  /** Additional subtext (optional) */
  subtext?: string;
  /** Color variant (default: "pink") */
  variant?: 'pink' | 'cyan' | 'purple';
  /** Additional CSS classes */
  className?: string;
}

/**
 * Tokenomics information card component with glassmorphism styling.
 * Displays tokenomics details in an info card format.
 *
 * @component Custom component (not swizzled)
 * @usage Used in: docs/tokenomics/qq-tokenomics.mdx
 *
 * @example
 * ```tsx
 * <TokenomicsInfoCard
 *   icon="⛓️"
 *   label="Chain"
 *   value="Base"
 *   variant="cyan"
 * />
 * ```
 */
export default function TokenomicsInfoCard({
  icon,
  label,
  value,
  subtext,
  variant = 'pink',
  className = '',
}: TokenomicsInfoCardProps) {
  const variantClass = styles[`variant${variant.charAt(0).toUpperCase() + variant.slice(1)}`];

  return (
    <div className={`${styles.card} ${variantClass} ${className}`}>
      {icon && (
        <div className={styles.iconContainer}>
          <span className={styles.icon}>{icon}</span>
        </div>
      )}
      <div className={styles.content}>
        <div className={styles.label}>{label}</div>
        <div className={styles.value}>{value}</div>
        {subtext && <div className={styles.subtext}>{subtext}</div>}
      </div>
    </div>
  );
}

/**
 * Props for the TokenomicsInfoGrid component.
 */
interface TokenomicsInfoGridProps {
  /** Child TokenomicsInfoCard components */
  children: React.ReactNode;
  /** Number of columns in grid (default: 3) */
  columns?: 1 | 2 | 3;
  /** Additional CSS classes */
  className?: string;
}

/**
 * Grid container component for displaying multiple TokenomicsInfoCard components.
 * Provides responsive grid layout for organizing tokenomics cards.
 *
 * @component Custom component (not swizzled)
 * @usage Used in: docs/tokenomics/qq-tokenomics.mdx
 *
 * @example
 * ```tsx
 * <TokenomicsInfoGrid columns={2}>
 *   <TokenomicsInfoCard label="Chain" value="Base" />
 *   <TokenomicsInfoCard label="Tax" value="0%" />
 * </TokenomicsInfoGrid>
 * ```
 */
export function TokenomicsInfoGrid({
  children,
  columns = 3,
  className = '',
}: TokenomicsInfoGridProps) {
  const columnsClass = styles[`grid${columns}Cols`];

  return (
    <div className={`${styles.grid} ${columnsClass} ${className}`}>
      {children}
    </div>
  );
}
