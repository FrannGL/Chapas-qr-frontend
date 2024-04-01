import { motion } from "framer-motion";
import { MenuItem } from "../MenuItem";
import { useState } from "react";
import FormActions from "@/components/FormActions";
import { ButtonProps } from "@/components/Button";
import Addition from "../../../../public/icons/addition";
import Delete from "../../../../public/icons/delete";
import Pencil from "../../../../public/icons/pencil";

export const Navigation = ({ isOpen }: any) => {
	const [addPopup, setAddPopup] = useState(false);
	const [editPopup, setEditPopup] = useState(false);

	const variants = {
		open: {
			transition: { staggerChildren: 0.07, delayChildren: 0.2 },
		},
		closed: {
			transition: { staggerChildren: 0.05, staggerDirection: -1 },
		},
	};

	const Buttons: ButtonProps[] = [
		{
			id: 0,
			title: "Agregar usuario",
			icon: <Addition />,
			onClick: () => {
				handleAdd();
			},
		},
		// {
		// 	id: 1,
		// 	title: "Editar usuario",
		// 	icon: <Pencil />,
		// 	onClick: () => {
		// 		handleEdit();
		// 	},
		// },
		// {
		// 	id: 2,
		// 	title: "Eliminar usuario",
		// 	icon: <Delete />,
		// 	onClick: () => {
		// 		handleDelete();
		// 	},
		// },
	];

	const handleAdd = () => {
		setAddPopup(true);
	};

	const handleEdit = () => {
		setEditPopup(true);
	};

	const handleDelete = async () => {
		console.log("delete");
	};

	const handleCloseModal = () => {
		setAddPopup(false);
	};

	const handleCreate = () => {
		console.log("create");
	};

	return (
		<motion.ul variants={variants}>
			<motion.div className='items_container'>
				<motion.p animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : 50 }} className='list_title'>
					Dashboard
				</motion.p>
				{Buttons.map(button => (
					<MenuItem key={button.id} title={button.title} icon={button.icon} onClick={button.onClick} />
				))}
			</motion.div>
			{addPopup && <FormActions setShowPopup={setAddPopup} requestType='POST' />}
		</motion.ul>
	);
};
