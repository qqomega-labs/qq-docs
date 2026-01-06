import React, { useState } from "react";
import styles from "./styles.module.css";

/**
 * Props for the TokenAddressCard component.
 */
interface TokenAddressCardProps {
  /** Icon/emoji to display (optional) */
  icon?: string;
  /** Label text (default: "Token Address") */
  label?: string;
  /** Token address to display and copy */
  address: string;
  /** Color variant (default: "purple") */
  variant?: "pink" | "cyan" | "purple";
  /** Additional CSS classes */
  className?: string;
}

/**
 * Token address card with copy-to-clipboard functionality.
 * Displays a token address in a glassmorphism card with a copy button.
 *
 * @component Custom component (not swizzled)
 * @usage Used in: docs/tokenomics/qq-tokenomics.mdx
 *
 * @features
 * - Click to copy address to clipboard
 * - Visual feedback on copy (checkmark animation)
 * - Truncated address display on mobile
 * - Glassmorphism styling
 *
 * @example
 * ```tsx
 * <TokenAddressCard
 *   icon="📟"
 *   address="0x07150e919B4De5fD6a63DE1F9384828396f25fDC"
 *   variant="purple"
 * />
 * ```
 */
export default function TokenAddressCard({
  icon = "📟",
  label = "Token Address",
  address,
  variant = "purple",
  className = "",
}: TokenAddressCardProps) {
  const [copied, setCopied] = useState(false);
  const variantClass =
    styles[`variant${variant.charAt(0).toUpperCase() + variant.slice(1)}`];

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(address);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  // Truncate address for mobile display
  const truncateAddress = (addr: string) => {
    if (addr.length <= 20) return addr;
    return `${addr.slice(0, 10)}...${addr.slice(-8)}`;
  };

  return (
    <div className={`${styles.card} ${variantClass} ${className}`}>
      {icon && (
        <div className={styles.iconContainer}>
          <span className={styles.icon}>{icon}</span>
        </div>
      )}
      <div className={styles.content}>
        <div className={styles.label}>{label}</div>
        <div className={styles.addressContainer}>
          <div className={styles.addressWrapper}>
            <code className={styles.addressFull}>{address}</code>
            <code className={styles.addressMobile}>
              {truncateAddress(address)}
            </code>
          </div>
          <button
            className={`${styles.copyButton} ${copied ? styles.copied : ""}`}
            onClick={handleCopy}
            aria-label="Copy address to clipboard"
            title="Copy to clipboard"
          >
            {copied ? (
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
            ) : (
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
