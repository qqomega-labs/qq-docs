import React, {type ReactNode} from 'react';
import {useThemeConfig} from '@docusaurus/theme-common';
import {useNavbarMobileSidebar} from '@docusaurus/theme-common/internal';
import NavbarItem, {type Props as NavbarItemConfig} from '@theme/NavbarItem';

function useNavbarItems() {
  // TODO temporary casting until ThemeConfig type is improved
  return useThemeConfig().navbar.items as NavbarItemConfig[];
}

// The primary menu displays the navbar items
export default function NavbarMobilePrimaryMenu(): ReactNode {
  const mobileSidebar = useNavbarMobileSidebar();

  // TODO how can the order be defined for mobile?
  // Should we allow providing a different list of items?
  const items = useNavbarItems();

  // Filter out the GitHub link since we render it as a custom button above
  const filteredItems = items.filter(item => {
    // Remove GitHub link from the list (check both className and href)
    if ('className' in item && item.className === 'header-github-link') {
      return false;
    }
    if ('href' in item && typeof item.href === 'string' && item.href.includes('github.com')) {
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
