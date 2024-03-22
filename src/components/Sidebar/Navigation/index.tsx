import { motion } from "framer-motion";
import { MenuItem } from "../MenuItem";
import { useState } from "react";
import Popup from "@/components/Popup";
import FormAdd from "@/components/FormAdd";
import { ButtonProps } from "@/components/Button";
import Addition from "../../../../public/icons/addition";
import Delete from "../../../../public/icons/delete";
import Pencil from "../../../../public/icons/pencil";
import FormEdit from "@/components/FormEdit";

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
		{
			id: 1,
			title: "Editar usuario",
			icon: <Pencil />,
			onClick: () => {
				handleEdit();
			},
		},
		{
			id: 2,
			title: "Eliminar usuario",
			icon: <Delete />,
			onClick: () => {
				handleDelete();
			},
		},
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
			{addPopup && (
				<Popup
					onConfirm={handleCreate}
					onCancel={handleCloseModal}
					setShowConfirmation={setAddPopup}
					title={"Agregar usuario"}
				>
					<FormAdd setAddPopup={setAddPopup} />
				</Popup>
			)}
			{editPopup && (
				<Popup
					onConfirm={handleCreate}
					onCancel={handleCloseModal}
					setShowConfirmation={setEditPopup}
					title={"Editar usuario"}
				>
					<FormEdit setEditPopup={setEditPopup} />
				</Popup>
			)}
		</motion.ul>
	);
};
