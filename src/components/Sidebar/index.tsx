import { Bar } from "./Bar";
import { SidebarProps } from "@/typescript/sidebar.interface";
import "./styles.scss";

const Sidebar = ({ isOpen, toggleSidebar }: SidebarProps) => {
  return <Bar isOpen={isOpen} toggleSidebar={toggleSidebar} />;
};

export default Sidebar;
