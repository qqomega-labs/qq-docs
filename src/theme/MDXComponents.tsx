import React from 'react';
import MDXComponents from '@theme-original/MDXComponents';
import MdxImageContainer from '@site/src/components/MdxImageContainer';

/**
 * Custom MDX component overrides.
 * This wraps all <img> elements with MdxImageContainer for consistent styling.
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
