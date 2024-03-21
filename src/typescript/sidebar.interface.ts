export interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

export interface MenuItemProps {
  id?: number;
  icon?: JSX.Element;
  title?: string;
  color?: string;
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}
