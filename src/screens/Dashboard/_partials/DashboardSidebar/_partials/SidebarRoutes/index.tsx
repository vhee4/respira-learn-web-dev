import { ISidebarLinkItem } from '../../Sidebar.types';
import SidebarHomeIcon from '../../../../../../assets/svg_component/SidebarHomeIcon';
import SidebarLeaderBoardIcon from '../../../../../../assets/svg_component/SidebarLeaderBoard';
import SidebarLearningIcon from '../../../../../../assets/svg_component/SidebarLearningIcon';
import SidebarLogoutIcon from '../../../../../../assets/svg_component/SidebarLogoutIcon';

export const topSidebarLinks: ISidebarLinkItem[] = [
  {
    title: 'Learning',
    linkTo: '/learning',
    activeLink: ['/learning'],
    icon: <SidebarLearningIcon />,
    activeIcon: <SidebarLearningIcon />,
    key: 'HOME_ICON'
  },
  {
    title: 'Leaderboard',
    linkTo: '/learning/leaderboard',
    activeLink: ['/learning/leaderboard'],
    icon: <SidebarLeaderBoardIcon />,
    activeIcon: <SidebarLeaderBoardIcon />,
    key: 'LEADER_BOARD'
  },
  {
    title: 'Diagnosis',
    linkTo: '/learning/diagnosis',
    activeLink: ['/learning/diagnosis'],
    icon: <SidebarHomeIcon />,
    activeIcon: <SidebarHomeIcon />,
    key: 'DIAGNOSIS'
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
