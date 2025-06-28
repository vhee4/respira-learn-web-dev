import { Link } from 'react-router-dom';

import SidebarTab from './SidebarTab';
import { ISidebarLink } from './SidebarLink.types';

const SidebarLink = ({
  title,
  pathname,
  icon,
  activeIcon,
  activeLink,
  isNew,
  subTabs,
  linkTo,
  isSubTab,
  handleToggleSubTabs,
  handleHideSubTabs,
  handleShowLogOutModal,
  isCollapsed
}: ISidebarLink) => {
  const handleSubTabsOrLogOut = () => {
    if (subTabs) {
      return handleToggleSubTabs?.();
    }
    return handleShowLogOutModal?.();
  };

  const handleSelectSideTabState = () => {
    if (linkTo === '') {
      return (
        <SidebarTab
          isSubTab={isSubTab}
          activeLink={activeLink}
          activeIcon={activeIcon}
          linkTo={linkTo}
          icon={icon}
          title={title}
          subTabs={subTabs}
          pathname={pathname}
          isNew={isNew}
          onClick={handleSubTabsOrLogOut}
          isCollapsed={isCollapsed}
        />
      );
    }

    return (
      <Link to={linkTo as string} style={{ textDecoration: 'none' }}>
        <SidebarTab
          isSubTab={isSubTab}
          activeLink={activeLink}
          activeIcon={activeIcon}
          linkTo={linkTo}
          icon={icon}
          title={title}
          subTabs={subTabs}
          pathname={pathname}
          isNew={isNew}
          onClick={handleHideSubTabs}
          isCollapsed={isCollapsed}
        />
      </Link>
    );
  };

  return <div>{handleSelectSideTabState()}</div>;
};
export default SidebarLink;
