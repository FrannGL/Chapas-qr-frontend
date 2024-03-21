import { useRef } from "react";
import { motion } from "framer-motion";
import { useDimensions } from "@/hooks/useDimensions";
import { MenuToggle } from "../MenuToogle";
import { Navigation } from "../Navigation";
import { SidebarProps } from "@/typescript/sidebar.interface";

const config = {
  open: (width = 250) => ({
    width: width,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    width: 0,
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

export const Bar = ({ isOpen, toggleSidebar }: SidebarProps) => {
  const containerRef = useRef(null);
  const { width } = useDimensions(containerRef);

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      custom={width}
      ref={containerRef}
    >
      <motion.div className="background" variants={config} />
      <Navigation isOpen={isOpen} />
      <MenuToggle toggle={toggleSidebar} />
    </motion.nav>
  );
};
