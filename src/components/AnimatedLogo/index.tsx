import React from "react";
import styles from "./styles.module.css";

interface AnimatedLogoProps {
  size?: number;
  speed?: "slow" | "normal" | "fast";
  className?: string;
}

export default function AnimatedLogo({
  size = 100,
  speed = "normal",
  className = "",
}: AnimatedLogoProps): React.JSX.Element {
  return (
    <div
      className={`${styles.animatedLogo} ${styles[speed]} ${className}`}
      style={{ width: size, height: size }}
    >
      <img
        src="/img/QQlogo.svg"
        alt="QQ Omega Logo"
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
}
