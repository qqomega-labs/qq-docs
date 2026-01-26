import React, {type ReactNode} from 'react';
import {useThemeConfig} from '@docusaurus/theme-common';
import {useNavbarMobileSidebar} from '@docusaurus/theme-common/internal';
import NavbarItem, {type Props as NavbarItemConfig} from '@theme/NavbarItem';

function useNavbarItems() {
  // TODO temporary casting until ThemeConfig type is improved
  return useThemeConfig().navbar.items as NavbarItemConfig[];
}

/**
 * Custom mobile sidebar primary menu component.
 *
 * @swizzled Docusaurus theme component (full ejection)
 * @component NavbarMobilePrimaryMenu
 * @pattern Filters navbar items for mobile display
 *
 * @customizations
 * - Filters out GitHub link from mobile menu (displayed separately)
 * - Maintains original Docusaurus menu functionality
 *
 * @see src/css/custom.css for additional mobile navbar hiding via CSS
 */
export default function NavbarMobilePrimaryMenu(): ReactNode {
  const mobileSidebar = useNavbarMobileSidebar();

  // TODO how can the order be defined for mobile?
  // Should we allow providing a different list of items?
  const items = useNavbarItems();

  // Filter out GitHub link and locale dropdown from mobile menu
  // Both are displayed separately in the mobile sidebar header
  const filteredItems = items.filter(item => {
    // Remove GitHub link (check both className and href)
    if ('className' in item && item.className === 'header-github-link') {
      return false;
    }
    if ('href' in item && typeof item.href === 'string' && item.href.includes('github.com')) {
      return false;
    }
    // Remove locale dropdown (displayed in mobile header instead)
    if ('type' in item && item.type === 'localeDropdown') {
      return false;
    }
    return true;
  });

  return (
    <ul className="menu__list">
      {filteredItems.map((item, i) => (
        <NavbarItem
          mobile
          {...item}
          onClick={() => mobileSidebar.toggle()}
          key={i}
        />
      ))}
    </ul>
  );
}
