import { motion } from "framer-motion";
import { MenuItem } from "../MenuItem";
import CustomIcon from "@/components/CustomIcon";
import icons from "@/utils/SVGicons";
import { MenuItemProps } from "@/typescript/sidebar.interface";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Popup from "@/components/Popup";
import FormHandler from "@/components/FormHandler";
import { ButtonProps } from "@/components/Button";

export const Navigation = ({ isOpen }: any) => {
  const [addPopup, setAddPopup] = useState(false);
  const pathname = usePathname();

  let onlyPathname = pathname.slice(4, pathname.length);

  const variants = {
    open: {
      transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    },
    closed: {
      transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
  };

  const Buttons: ButtonProps[] = [
    // Cambia el nombre de itemRoutes a Buttons
    {
      id: 0,
      title: "Agregar usuario",
      icon: (
        <CustomIcon
          path={icons.HomeIcon}
          color={onlyPathname === "" ? "#5551f3" : undefined}
        />
      ),
      onClick: () => {
        handleClickAdd();
      },
    },
  ];

  const handleClickAdd = () => {
    setAddPopup(true);
  };

  const handleCloseModal = () => {
    setAddPopup(false);
  };

  const handleCreate = () => {
    console.log("create");
  };

  return (
    <motion.ul variants={variants}>
      <motion.div className="items_container">
        <motion.p
          animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : 50 }}
          className="list_title"
        >
          Dashboard
        </motion.p>
        {Buttons.map((button) => (
          <MenuItem
            key={button.id}
            title={button.title}
            icon={button.icon}
            onClick={button.onClick}
          />
        ))}
      </motion.div>
      {addPopup && (
        <Popup
          onConfirm={handleCreate}
          onCancel={handleCloseModal}
          setShowConfirmation={setAddPopup}
          title={"Agregar usuario"}
        >
          <FormHandler setAddPopup={setAddPopup} />
        </Popup>
      )}
    </motion.ul>
  );
};
