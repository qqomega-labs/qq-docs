import React from "react";
import Navbar from "@theme-original/Navbar";
import type NavbarType from "@theme/Navbar";
import type { WrapperProps } from "@docusaurus/types";

type Props = WrapperProps<typeof NavbarType>;

/**
 * Custom navbar wrapper component.
 *
 * @swizzled Docusaurus theme component (wrapper pattern - safe)
 * @component Navbar
 * @pattern Simple passthrough wrapper for potential future customization
 *
 * @customizations
 * - Currently passes through to original Navbar without modifications
 * - Navbar styling customized via src/css/custom.css
 * - Mobile menu items filtered in MobileSidebar/PrimaryMenu component
 *
 * @see src/css/custom.css for navbar glassmorphism styles
 * @see src/theme/Navbar/MobileSidebar/PrimaryMenu for mobile menu filtering
 */
export default function NavbarWrapper(props: Props): React.JSX.Element {
  return <Navbar {...props} />;
}
