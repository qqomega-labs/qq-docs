import React from 'react';
import MDXComponents from '@theme-original/MDXComponents';
import MdxImageContainer from '@site/src/components/MdxImageContainer';

/**
 * Custom MDX component overrides for Docusaurus.
 *
 * @swizzled Docusaurus theme component (safe wrapper pattern)
 * @component MDXComponents
 * @pattern Extends default MDX components with custom overrides
 *
 * @customizations
 * - All `<img>` elements are automatically wrapped with MdxImageContainer
 * - Provides consistent glassmorphism styling for images
 * - Responsive sizing and centered layout
 *
 * @see MdxImageContainer for image wrapper implementation
 * @see https://docusaurus.io/docs/markdown-features/react#mdx-component-scope
 */
export default {
  ...MDXComponents,
  img: (props: React.ImgHTMLAttributes<HTMLImageElement>) => (
    <MdxImageContainer>
      <img
        {...props}
        style={{
          width: '100%',
          height: 'auto',
          display: 'block',
          borderRadius: '12px',
          boxShadow: '0 4px 24px rgba(0, 0, 0, 0.2), 0 0 0 1px rgba(255, 255, 255, 0.05)',
          ...props.style,
        }}
      />
    </MdxImageContainer>
  ),
};
