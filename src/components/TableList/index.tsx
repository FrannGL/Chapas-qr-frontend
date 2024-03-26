import styles from "./styles.module.scss";
import ItemList from "./ItemList";
import LoadingMsg from "@/components/Loading";
import HeaderAgent from "./HeaderList/HeaderAgent";
import PopupConfirm from "../PopupConfirm";
import { useState } from "react";
import { useMessageToast } from "@/hooks/useMessageToast";
import { remove } from "@/app/api/route";
import { UserProps } from "@/typescript/users.interface";
import FormActions from "../FormActions";

interface TableProps {
	data: UserProps[];
	loading: Boolean;
	fetchData: () => void;
}

const TableList = ({ data, loading, fetchData }: TableProps) => {
	const [userId, setUserId] = useState<string | undefined>(undefined);
	const [showPopupDelete, setShowPopupDelete] = useState(false);
	const [showPopupEdit, setShowPopupEdit] = useState(false);
	const { notify, notifyError } = useMessageToast();

	const handleEditUser = (id: string) => {
		setUserId(id);
		setShowPopupEdit(true);
	};

	const handleDeleteUser = async (id: string) => {
		try {
			const response = await remove("users", id);
			if (response.statusCode === 200) {
				fetchData();
			} else {
				console.error("Error deleting user:", response);
			}
		} catch (error) {
			console.error("Error deleting user:", error);
		}
	};

	const handleConfirmDelete = () => {
		if (userId) {
			handleDeleteUser(userId);
			setShowPopupDelete(false);
			notify("Usuario eliminado correctamente");
		} else {
			notifyError("Error al eliminar el usuario");
		}
	};

	const handleCancel = () => {
		setShowPopupDelete(false);
	};

	return (
		<section className={styles.container}>
			<div className={styles.head}>
				<h3 className={styles.title}>Listado de usuarios</h3>
			</div>
			<div className={styles.header_container}>
				<HeaderAgent />
			</div>
			<div className={styles.content}>
				{loading ? (
					<LoadingMsg />
				) : data.length > 0 ? (
					data.map(user => (
						<ItemList
							key={user._id}
							item={user}
							onEdit={handleEditUser}
							onDelete={() => {
								setShowPopupDelete(true);
								setUserId(user._id);
							}}
						/>
					))
				) : (
					<p className={styles.text}>No se encontraron usuarios</p>
				)}
			</div>
			{showPopupDelete && (
				<PopupConfirm
					onConfirm={handleConfirmDelete}
					onCancel={handleCancel}
					setShowConfirmation={setShowPopupDelete}
					title={"¿Estás seguro que querés eliminar al usuario?"}
					textCancel={"Cancelar"}
					textAccept={"Confirmar"}
				/>
			)}
			{showPopupEdit && <FormActions setShowPopup={setShowPopupEdit} userId={userId} requestType='PUT' />}
		</section>
	);
};

export default TableList;
