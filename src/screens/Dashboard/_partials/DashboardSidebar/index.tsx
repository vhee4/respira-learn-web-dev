import { useLocation, useNavigate } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '../../../../redux/hooks';
import SidebarLink from './_partials/SidebarLink';
import {
  resetIsSideBarSubTab,
  setIsSideBarSubTab
} from '../../../../redux/slices/dashboard/dashboardSlice';
import { ISidebar } from './Sidebar.types';
import { bottomSidebarLinks, topSidebarLinks } from './_partials/SidebarRoutes';
import { signOut } from '../../../../redux/slices/auth';

import PrimaryLogo from '../../../../assets/svg_component/PrimaryLogo';
import PrimaryLogoHead from '../../../../assets/svg_component/PrimaryLogoHead';

import SidebarStyles from './Sidebar.module.scss';

const DashboardSidebar = ({ onCloseSidebar, isCollapsed }: ISidebar) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const isSideBarSubTab = useAppSelector((state) => state?.dashboard?.isSideBarSubTab);

  const handleToggleSubTabs = (tabTitle: string) => {
    dispatch(setIsSideBarSubTab({ key: tabTitle, value: !isSideBarSubTab[tabTitle] }));
  };

  const handleHideSubTabs = () => {
    dispatch(resetIsSideBarSubTab());
  };

  const showLogoutModal = () => {
    dispatch(signOut());
    navigate('/');
  };

  return (
    <div className={SidebarStyles.sidebar}>
      <div
        className={`${
          !isCollapsed ? SidebarStyles.sidebar__logo : SidebarStyles['sidebar__logo--collapsed']
        }`}>
        {isCollapsed ? <PrimaryLogoHead /> : <PrimaryLogo />}
      </div>

      <div
        className={`${
          !isCollapsed ? SidebarStyles.sidebar__group : SidebarStyles['sidebar__group--collapsed']
        }`}>
        <div className={SidebarStyles.sidebar__top}>
          {topSidebarLinks?.map((list) => (
            <div className={SidebarStyles.sidebar__link} key={list?.title}>
              <SidebarLink
                title={isCollapsed ? '' : list?.title}
                pathname={pathname}
                icon={list?.icon}
                linkTo={list?.linkTo}
                activeIcon={list?.activeIcon}
                onClick={onCloseSidebar}
                activeLink={list?.activeLink}
                subTabs={list?.subTabs}
                isNew={list?.isNew as boolean}
                handleToggleSubTabs={() => handleToggleSubTabs(list?.title)}
                handleHideSubTabs={handleHideSubTabs}
                isSubTab={isSideBarSubTab[list?.title]}
                handleShowLogOutModal={showLogoutModal}
                isCollapsed={isCollapsed}
              />
              {list?.hasLinkSeparator && <div className={SidebarStyles.sidebar__linkSeparator} />}
            </div>
          ))}
        </div>

        <div className={SidebarStyles.sidebar__bottom}>
          {bottomSidebarLinks?.map((list) => (
            <div key={list?.title} className={SidebarStyles.sidebar__link}>
              <SidebarLink
                title={isCollapsed ? '' : list?.title}
                pathname={pathname}
                icon={list?.icon}
                linkTo={list?.linkTo}
                activeIcon={list?.activeIcon}
                onClick={onCloseSidebar}
                activeLink={list?.activeLink}
                subTabs={list?.subTabs}
                isNew={list?.isNew as boolean}
                handleToggleSubTabs={() => handleToggleSubTabs(list?.title)}
                handleHideSubTabs={handleHideSubTabs}
                isSubTab={isSideBarSubTab[list?.title]}
                handleShowLogOutModal={showLogoutModal}
                isCollapsed={isCollapsed}
              />
              {list?.hasLinkSeparator && <div className={SidebarStyles.sidebar__linkSeparator} />}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default DashboardSidebar;
