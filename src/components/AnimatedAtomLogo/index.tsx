import React, { useState } from "react";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";

/**
 * Props for the AnimatedAtomLogo component.
 */
interface AnimatedAtomLogoProps {
  /** Logo size in pixels (default: 200) */
  size?: number;
  /** Animation speed (default: "normal") */
  speed?: "slow" | "normal" | "fast";
  /** Additional CSS classes */
  className?: string;
}

/**
 * Animated atom logo component for QQ Omega branding.
 * Displays the QQ logo with rotating electron animation on hover.
 *
 * @component Custom component (not swizzled)
 * @usage Used in: src/theme/Logo/index.tsx (navbar logo)
 *
 * @example
 * ```tsx
 * <AnimatedAtomLogo size={40} speed="normal" />
 * ```
 */
export default function AnimatedAtomLogo({
  size = 200,
  speed = "normal",
  className = "",
}: AnimatedAtomLogoProps): React.JSX.Element {
  const [isHovered, setIsHovered] = useState(false);
  const logoSrc = useBaseUrl("/img/QQlogo.png");

  const speedMap = {
    slow: 4000,
    normal: 3000,
    fast: 2000,
  };

  const duration = speedMap[speed];
  const primaryColor = "#ff1d64"; // Hot pink from original logo

  return (
    <div
      className={`${styles.atomLogo} ${className}`}
      style={{ width: size, height: size, position: "relative" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Original static logo */}
      <img
        src={logoSrc}
        alt="QQ Omega Logo"
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          top: 0,
          left: 0,
        }}
      />

      {/* Animated electron dots - positioned to overlay the original static dots */}
      {isHovered && (
        <svg
          viewBox="0 0 1024 1024"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            top: 0,
            left: 0,
            pointerEvents: "none",
          }}
        >
          <g>
            {/* Animated electron dot 1 */}
            <circle cx="315" cy="315" r="52" fill={primaryColor} />

            {/* Animated electron dot 2 */}
            <circle cx="715" cy="715" r="52" fill={primaryColor} />

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
