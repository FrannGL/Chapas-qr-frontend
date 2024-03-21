import { motion } from "framer-motion";
import { MenuItemProps } from "@/typescript/sidebar.interface";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

export const MenuItem = ({ icon, title, onClick }: MenuItemProps) => {
  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      {icon}
      <motion.div className="link" variants={variants} onClick={onClick}>
        {title}
      </motion.div>
    </motion.li>
  );
};
