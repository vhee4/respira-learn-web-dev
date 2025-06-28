import React, { PropsWithChildren, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import DashboardSidebar from '../DashboardSidebar';
import SidebarModal from '../DashboardSidebar/_partials/SidebarModal';

import DashboardLayoutStyles from './DashboardLayout.module.scss';
import DashboardHeader from '../DashboardHeader';

const DashboardLayout = ({ children }: PropsWithChildren) => {
  const { pathname } = useLocation();
  const [isShowSidebar, setIsShowSidebar] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleCollapse = () => {
    setIsCollapsed((prev) => !prev);
  };

  useEffect(() => {
    setIsShowSidebar(false);
  }, [pathname]);

  const renderSidebarModal = () => {
    return (
      <SidebarModal
        isShowSidebarModal={isShowSidebar}
        onClickAwaySidebarModal={() => {
          setIsShowSidebar(false);
        }}
      />
    );
  };

  return (
    <div className={DashboardLayoutStyles.dashboardLayout}>
      {renderSidebarModal()}

      <div
        className={`${
          !isCollapsed
            ? DashboardLayoutStyles.dashboardLayout__sidebar
            : DashboardLayoutStyles['dashboardLayout__sidebar--collapsed']
        }`}>
        <DashboardSidebar isCollapsed={isCollapsed} />
      </div>

      <div className={DashboardLayoutStyles.dashboardLayout__body}>
        <DashboardHeader
          handleToggleHamburger={() => {
            setIsShowSidebar(!isShowSidebar);
          }}
          handleCollapse={handleCollapse}
          isCollapsed={isCollapsed}
        />
        <div className={`${DashboardLayoutStyles.dashboardLayout__children} `}>{children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
