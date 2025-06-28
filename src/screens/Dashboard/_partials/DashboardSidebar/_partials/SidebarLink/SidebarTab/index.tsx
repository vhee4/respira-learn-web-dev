import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
// import DownArrowHead from '../../../../../../../../assets/svg_components/DownArrowHead';
import { setActivePage } from '../../../../../../../redux/slices/dashboard/dashboardSlice';
import { useAppDispatch } from '../../../../../../../redux/hooks';
import { ISidebarLink } from '../SidebarLink.types';

import SidebarTabStyles from './SidebarTab.module.scss';

const SidebarTab = ({
  title,
  activeIcon,
  icon,
  pathname,
  activeLink,
  isNew,
  subTabs,
  isSubTab,
  onClick
}: ISidebarLink) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (activeLink.includes(pathname)) {
      dispatch(setActivePage(title));
    }
  }, [pathname]);

  return (
    <div className={SidebarTabStyles.sideBarLink}>
      <div
        className={
          activeLink.includes(pathname) && !isSubTab
            ? SidebarTabStyles?.sidebarLink__mainLink
            : SidebarTabStyles['sidebarLink__mainLink--inactive']
        }
        onClick={onClick}>
        <span className={SidebarTabStyles.sidebarLink__mainLinkIcon}>
          {activeLink.includes(pathname) ? activeIcon : icon}
        </span>
        <div className={SidebarTabStyles.sidebarLink__mainLinkTitle}>
          <div className={SidebarTabStyles.sidebarLink__mainLinkTitleContent}>{title}</div>
          {subTabs && (
            <span
              className={
                isSubTab
                  ? SidebarTabStyles.sidebarLink__mainLinkArrowHead
                  : SidebarTabStyles['sidebarLink__mainLinkArrowHead--inactive']
              }>
              {/* <DownArrowHead strokeColor="rgba(255, 255, 255, 1)" /> */}
            </span>
          )}
        </div>
        {isNew && <span className={SidebarTabStyles.sidebarLink__mainLinkTag}>New</span>}
      </div>
      {subTabs && isSubTab && (
        <div className={SidebarTabStyles.sidebarLink__subLink}>
          <div className={SidebarTabStyles.sidebarLink__subLinkContent}>
            {subTabs?.map((subTab) => {
              return (
                <Link
                  key={subTab?.id}
                  to={subTab?.linkTo}
                  className={
                    subTab?.activeLink.includes(pathname)
                      ? SidebarTabStyles.sidebarLink__subLinkTitle
                      : SidebarTabStyles['sidebarLink__subLinkTitle--inactive']
                  }>
                  {subTab?.title}
                  {subTab?.isNew && (
                    <span className={SidebarTabStyles.sidebarLink__subLinkTag}>New</span>
                  )}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default SidebarTab;
