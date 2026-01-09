import { type ReactNode } from "react";

/**
 * Props for the MdxImageContainer component.
 */
interface MdxImageContainerProps {
  /** Image element(s) to wrap */
  children: ReactNode;
}

/**
 * Container wrapper for images in MDX files with consistent styling.
 * Provides centered layout with max-width, responsive padding, and glassmorphism styling.
 *
 * @component Custom component (not swizzled)
 * @usage Automatically applied to all `<img>` elements in MDX files via src/theme/MDXComponents.tsx
 *
 * @features
 * - Max width: 800px
 * - Centered with auto margins
 * - Responsive horizontal padding
 * - Glassmorphism styling (rounded corners, shadow)
 * - Mobile-first responsive design
 *
 * @example
 * In MDX files, images are automatically wrapped:
 * ```md
 * ![Alt text](/img/example.jpg)
 * ```
 *
 * Manual usage (if needed):
 * ```tsx
 * <MdxImageContainer>
 *   <img src="/img/example.jpg" alt="Example" />
 * </MdxImageContainer>
 * ```
 */
export default function MdxImageContainer({
  children,
}: MdxImageContainerProps): React.JSX.Element {
  return (
    <div
      style={{
        width: "100%",
        maxWidth: "800px",
        margin: "0 auto 2rem auto",
        padding: "0 1rem",
      }}
    >
      {children}
    </div>
  );
}
