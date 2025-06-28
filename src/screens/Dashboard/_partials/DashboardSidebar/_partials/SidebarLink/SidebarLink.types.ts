export interface ISidebarLink {
  title: string;
  pathname: string | never;
  icon: React.ReactNode;
  activeIcon: React.ReactNode;
  activeLink: string[] | string;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  isNew: boolean;
  subTabs?: Array<{
    id: string;
    title: string;
    linkTo: string;
    isNew?: boolean;
    activeLink: string[];
  }>;
  linkTo?: string | null;
  handleToggleSubTabs?: () => void;
  isSubTab?: boolean;
  handleHideSubTabs?: () => void;
  handleShowLogOutModal?: () => void;
  handleSubTabsOrLogOut?: () => void;
  isCollapsed?: boolean;
}
