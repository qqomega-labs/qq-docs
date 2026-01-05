import React, { ReactNode } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import styles from "./styles.module.css";

export interface GlassButtonProps {
  children: ReactNode;
  href?: string;
  to?: string;
  variant?: "primary" | "secondary" | "outline";
  size?: "small" | "medium" | "large";
  glow?: boolean;
  className?: string;
  onClick?: () => void;
}

/**
 * GlassButton - A glassmorphism button component with crypto-themed styling
 *
 * @param children - Button content
 * @param href - External link URL (opens in new tab)
 * @param to - Internal Docusaurus link path
 * @param variant - Button style: 'primary' | 'secondary' | 'outline' (default: 'primary')
 * @param size - Button size: 'small' | 'medium' | 'large' (default: 'medium')
 * @param glow - Enable glow effect (default: false)
 * @param className - Additional CSS classes
 * @param onClick - Click handler
 */
export default function GlassButton({
  children,
  href,
  to,
  variant = "primary",
  size = "medium",
  glow = false,
  className,
  onClick,
}: GlassButtonProps): React.JSX.Element {
  const buttonClasses = clsx(
    styles.glassButton,
    variant === "primary" && styles.variantPrimary,
    variant === "secondary" && styles.variantSecondary,
    variant === "outline" && styles.variantOutline,
    size === "small" && styles.sizeSmall,
    size === "medium" && styles.sizeMedium,
    size === "large" && styles.sizeLarge,
    glow && styles.glowEffect,
    className,
  );

  // External link
  if (href) {
    return (
      <a
        href={href}
        className={buttonClasses}
        target="_blank"
        rel="noopener noreferrer"
        onClick={onClick}
      >
        {children}
      </a>
    );
  }

  // Internal Docusaurus link
  if (to) {
    return (
      <Link to={to} className={buttonClasses} onClick={onClick}>
        {children}
      </Link>
    );
  }

  // Regular button
  return (
    <button type="button" className={buttonClasses} onClick={onClick}>
      {children}
    </button>
  );
}
