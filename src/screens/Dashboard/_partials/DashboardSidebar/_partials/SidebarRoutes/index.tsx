import { ISidebarLinkItem } from '../../Sidebar.types';
import SidebarHomeIcon from '../../../../../../assets/svg_component/SidebarHomeIcon';
import SidebarLeaderBoardIcon from '../../../../../../assets/svg_component/SidebarLeaderBoard';
import SidebarLearningIcon from '../../../../../../assets/svg_component/SidebarLearningIcon';
import SidebarLogoutIcon from '../../../../../../assets/svg_component/SidebarLogoutIcon';

export const topSidebarLinks: ISidebarLinkItem[] = [
  {
    title: 'Dashboard',
    linkTo: '/dashboard',
    activeLink: ['/dashboard'],
    icon: <SidebarHomeIcon />,
    activeIcon: <SidebarHomeIcon />,
    key: 'HOME_ICON'
  },
  {
    title: 'Leaderboard',
    linkTo: '/dashboard/leaderboard',
    activeLink: ['/dashboard/leaderboard'],
    icon: <SidebarLeaderBoardIcon />,
    activeIcon: <SidebarLeaderBoardIcon />,
    key: 'LEADER_BOARD'
  },
  {
    title: 'Learning',
    linkTo: '/dashboard/learning',
    activeLink: ['/dashboard/learning'],
    icon: <SidebarLearningIcon />,
    activeIcon: <SidebarLearningIcon />,
    key: 'LEARNING'
  }
];

export const bottomSidebarLinks: ISidebarLinkItem[] = [
  {
    title: 'Logout',
    linkTo: '',
    activeLink: '',
    icon: <SidebarLogoutIcon />,
    activeIcon: <SidebarLogoutIcon />,
    key: 'LOGOUT_ICON'
  }
];
