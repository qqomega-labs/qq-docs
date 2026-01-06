import React, {type ReactNode} from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {useThemeConfig} from '@docusaurus/theme-common';
import type {Props} from '@theme/Logo';
import AnimatedAtomLogo from '@site/src/components/AnimatedAtomLogo';

/**
 * Custom navbar logo component with animated atom logo.
 *
 * @swizzled Docusaurus theme component (full ejection)
 * @component Logo
 * @pattern Replaces default Docusaurus logo with custom AnimatedAtomLogo
 *
 * @customizations
 * - Uses AnimatedAtomLogo component instead of static image
 * - Maintains Docusaurus logo configuration and accessibility
 * - Preserves navbar title and link functionality
 * - Logo animates on hover (rotating electrons)
 *
 * @note The logo in docusaurus.config.ts is overridden by this component
 * @see AnimatedAtomLogo for the animated logo implementation
 */
export default function Logo(props: Props): ReactNode {
  const {
    siteConfig: {title},
  } = useDocusaurusContext();
  const {
    navbar: {title: navbarTitle, logo},
  } = useThemeConfig();

  const {imageClassName, titleClassName, ...propsRest} = props;
  const logoLink = useBaseUrl(logo?.href || '/');

  // If visible title is shown, fallback alt text should be
  // an empty string to mark the logo as decorative.
  const fallbackAlt = navbarTitle ? '' : title;

  // Use logo alt text if provided (including empty string),
  // and provide a sensible fallback otherwise.
  const alt = logo?.alt ?? fallbackAlt;

  return (
    <Link
      to={logoLink}
      {...propsRest}
      {...(logo?.target && {target: logo.target})}
      aria-label={alt || title}
    >
      {logo && (
        <div className={imageClassName}>
          <AnimatedAtomLogo size={40} speed="normal" />
        </div>
      )}
      {navbarTitle != null && <b className={titleClassName}>{navbarTitle}</b>}
    </Link>
  );
}
