import React, {type ReactNode, useState, useRef, useEffect} from 'react';
import {useNavbarMobileSidebar} from '@docusaurus/theme-common/internal';
import {translate} from '@docusaurus/Translate';
import NavbarColorModeToggle from '@theme/Navbar/ColorModeToggle';
import IconClose from '@theme/Icon/Close';
import NavbarLogo from '@theme/Navbar/Logo';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {useAlternatePageUtils} from '@docusaurus/theme-common/internal';
import {useLocation} from '@docusaurus/router';

function GitHubButton() {
  return (
    <button
      type="button"
      aria-label="GitHub repository"
      className="clean-btn navbar-sidebar__close navbar-sidebar__github"
      onClick={() => window.open('https://github.com/qqomega-labs', '_blank', 'noopener,noreferrer')}>
      <svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path
          fill="currentColor"
          d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
        />
      </svg>
    </button>
  );
}

function LanguageButton() {
  const {i18n: {currentLocale, locales, localeConfigs, defaultLocale}} = useDocusaurusContext();
  const alternatePageUtils = useAlternatePageUtils();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const localeItems = locales.map((locale) => {
    const url = alternatePageUtils.createUrl({locale, fullyQualified: false});
    return {
      locale,
      label: localeConfigs[locale]?.label ?? locale,
      to: url,
      isActive: locale === currentLocale,
    };
  });

  const handleLocaleChange = (url: string) => {
    setIsOpen(false);
    window.location.href = url;
  };

  return (
    <div className="navbar-sidebar__lang-wrapper" ref={dropdownRef}>
      <button
        type="button"
        aria-label={translate({
          id: 'theme.navbar.language',
          message: 'Change language',
          description: 'The ARIA label for language button',
        })}
        className="clean-btn navbar-sidebar__close navbar-sidebar__lang"
        onClick={() => setIsOpen(!isOpen)}>
        <svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="currentColor"
            d="M12.87 15.07l-2.54-2.51.03-.03A17.52 17.52 0 0014.07 6H17V4h-7V2H8v2H1v2h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z"
          />
        </svg>
      </button>
      {isOpen && (
        <div className="navbar-sidebar__lang-dropdown">
          {localeItems.map((item) => (
            <button
              key={item.locale}
              type="button"
              className={`navbar-sidebar__lang-item ${item.isActive ? 'navbar-sidebar__lang-item--active' : ''}`}
              onClick={() => handleLocaleChange(item.to)}>
              {item.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

function CloseButton() {
  const mobileSidebar = useNavbarMobileSidebar();
  return (
    <button
      type="button"
      aria-label={translate({
        id: 'theme.docs.sidebar.closeSidebarButtonAriaLabel',
        message: 'Close navigation bar',
        description: 'The ARIA label for close button of mobile sidebar',
      })}
      className="clean-btn navbar-sidebar__close"
      onClick={() => mobileSidebar.toggle()}>
      <IconClose color="var(--ifm-color-emphasis-600)" />
    </button>
  );
}

export default function NavbarMobileSidebarHeader(): ReactNode {
  return (
    <div className="navbar-sidebar__brand">
      <NavbarLogo />
      <NavbarColorModeToggle />
      <GitHubButton />
      <LanguageButton />
      <CloseButton />
    </div>
  );
}
