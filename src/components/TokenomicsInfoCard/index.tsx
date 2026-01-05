import React from 'react';
import styles from './styles.module.css';

interface TokenomicsInfoCardProps {
  icon?: string;
  label: string;
  value: string;
  subtext?: string;
  variant?: 'pink' | 'cyan' | 'purple';
  className?: string;
}

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

// Grid container component for multiple cards
interface TokenomicsInfoGridProps {
  children: React.ReactNode;
  columns?: 1 | 2 | 3;
  className?: string;
}

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
