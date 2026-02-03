import React, { useState, useEffect, useCallback } from "react";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";

/**
 * @dev Props for the AnimatedAtomLogo component.
 */
interface AnimatedAtomLogoProps {
  /** Logo size in pixels (default: 200) */
  size?: number;
  /** Animation speed (default: "normal") */
  speed?: "slow" | "normal" | "fast";
  /** Additional CSS classes */
  className?: string;
}

const SPEED_MAP: Record<AnimatedAtomLogoProps["speed"], number> = {
  slow: 4000,
  normal: 3000,
  fast: 2000,
};

const PRIMARY_COLOR = "#ff1d64";

/**
 * @dev Animated atom logo component for QQ Omega branding.
 * Shows `icon1.png` by default. On hover swaps to `icon2.png` and
 * overlays the original rotating electron dots + stick animation.
 * `icon2.png` is preloaded so the swap is instant.
 *
 * On mobile / touch devices the logo stays static (`icon1.png`).
 *
 * @component Custom component (not swizzled)
 * @usage Used in: src/theme/Logo/index.tsx (navbar logo)
 */
export default function AnimatedAtomLogo({
  size = 200,
  speed = "normal",
  className = "",
}: AnimatedAtomLogoProps): React.JSX.Element {
  const [isHovered, setIsHovered] = useState(false);
  const [icon2Ready, setIcon2Ready] = useState(false);

  const iconWithDots = useBaseUrl("/img/QQlogo.png");
  const iconWithoutDots = useBaseUrl("/img/QQlogo_nodots.png");

  const duration = SPEED_MAP[speed];

  // Preload icon2.png once on mount so the swap is instant
  useEffect(() => {
    const img = new Image();
    img.src = iconWithoutDots;

    const handleLoad = () => setIcon2Ready(true);

    if (img.complete) {
      setIcon2Ready(true);
    } else {
      img.addEventListener("load", handleLoad);
    }

    return () => {
      img.removeEventListener("load", handleLoad);
    };
  }, [iconWithoutDots]);

  const handleMouseEnter = useCallback(() => setIsHovered(true), []);
  const handleMouseLeave = useCallback(() => setIsHovered(false), []);

  const showHoverState = isHovered && icon2Ready;

  return (
    <div
      className={`${styles.atomLogo} ${className}`}
      style={{ width: size, height: size }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Default logo (icon1) */}
      <img
        className={`${styles.logoImage} ${showHoverState ? styles.logoHidden : ""}`}
        src={iconWithDots}
        alt="QQ Omega Logo"
        width={size}
        height={size}
      />

      {/* Hover logo (icon2) - fades in on hover */}
      {icon2Ready && (
        <img
          className={`${styles.logoImage} ${styles.logoHover} ${showHoverState ? styles.logoVisible : ""}`}
          src={iconWithoutDots}
          alt=""
          aria-hidden="true"
          width={size}
          height={size}
        />
      )}

      {/* Original animation overlay: two rotating electron dots + stick on one */}
      {showHoverState && (
        <svg
          className={styles.svgOverlay}
          viewBox="0 0 1024 1024"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <g>
            {/* Electron dot 1 */}
            <circle cx="320" cy="320" r="68" fill={PRIMARY_COLOR} />

            {/* Electron dot 2 + stick toward center */}
            <circle cx="715" cy="715" r="68" fill={PRIMARY_COLOR} />
            <line
              x1="628"
              y1="628"
              x2="667"
              y2="667"
              stroke={PRIMARY_COLOR}
              strokeWidth="38"
              strokeLinecap="round"
            />

            <animateTransform
              attributeName="transform"
              attributeType="XML"
              type="rotate"
              from="0 512 512"
              to="360 512 512"
              dur={`${duration}ms`}
              repeatCount="indefinite"
            />
          </g>
        </svg>
      )}
    </div>
  );
}
