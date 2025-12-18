import React, { ReactNode } from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

export interface CryptoCardProps {
  title?: string;
  description?: string | ReactNode;
  icon?: ReactNode;
  variant?: 'default' | 'pink' | 'cyan' | 'purple';
  glow?: boolean;
  animated?: boolean;
  className?: string;
  children?: ReactNode;
}

/**
 * CryptoCard - A glassmorphism card component with crypto-themed styling
 *
 * @param title - Card title (optional)
 * @param description - Card description text or custom React node (optional)
 * @param icon - Icon or image to display at top of card (optional)
 * @param variant - Color variant: 'default' | 'pink' | 'cyan' | 'purple' (default: 'default')
 * @param glow - Enable glow effect on hover (default: false)
 * @param animated - Enable float animation for icon (default: false)
 * @param className - Additional CSS classes
 * @param children - Custom content (if provided, title/description/icon are ignored)
 */
export default function CryptoCard({
  title,
  description,
  icon,
  variant = 'default',
  glow = false,
  animated = false,
  className,
  children,
}: CryptoCardProps): JSX.Element {
  // If children are provided, use custom content layout
  if (children) {
    return (
      <div
        className={clsx(
          styles.cryptoCard,
          variant === 'pink' && styles.variantPink,
          variant === 'cyan' && styles.variantCyan,
          variant === 'purple' && styles.variantPurple,
          glow && styles.cryptoGlow,
          className
        )}
      >
        {children}
      </div>
    );
  }

  // Default layout with title/description/icon
  return (
    <div
      className={clsx(
        styles.cryptoCard,
        variant === 'pink' && styles.variantPink,
        variant === 'cyan' && styles.variantCyan,
        variant === 'purple' && styles.variantPurple,
        glow && styles.cryptoGlow,
        className
      )}
    >
      {icon && (
        <div className={clsx(styles.iconContainer, animated && styles.iconAnimated)}>
          {icon}
        </div>
      )}

      {title && (
        <h3 className={styles.title}>
          {title}
        </h3>
      )}

      {description && (
        <div className={styles.description}>
          {typeof description === 'string' ? <p>{description}</p> : description}
        </div>
      )}
    </div>
  );
}
