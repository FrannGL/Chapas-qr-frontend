import styles from "./styles.module.scss";
import ItemList from "./ItemList";
import LoadingMsg from "@/components/Loading";
import HeaderAgent from "./HeaderList/HeaderAgent";
import PopupConfirm from "../PopupConfirm";
import { useState } from "react";
import { useAppSelector } from "@/store/hooks";
import { useMessageToast } from "@/hooks/useMessageToast";
import { remove } from "@/app/api/route";

interface TableProps {
	loading: Boolean;
	fetchData: () => void;
}

const TableList = ({ loading, fetchData }: TableProps) => {
	const [userId, setUserId] = useState<string | null>(null);
	const [showPopup, setShowPopup] = useState(false);
	const { notify, notifyError } = useMessageToast();
	const userData = useAppSelector(state => state.userData);

	const handleEditUser = (id: string) => {
		setUserId(id);
		console.log(userId);
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
			setShowPopup(false);
			notify("Usuario eliminado correctamente");
		} else {
			notifyError("Error al eliminar el usuario");
		}
	};

	const handleCancel = () => {
		setShowPopup(false);
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
				) : userData.length > 0 ? (
					userData.map(user => (
						<ItemList
							key={user._id}
							item={user}
							onEdit={handleEditUser}
							onDelete={() => {
								setShowPopup(true);
								setUserId(user._id);
							}}
						/>
					))
				) : (
					<p className={styles.text}>Aún no hay usuarios</p>
				)}
			</div>
			{showPopup && (
				<PopupConfirm
					onConfirm={handleConfirmDelete}
					onCancel={handleCancel}
					setShowConfirmation={setShowPopup}
					title={"¿Estás seguro que querés eliminar al usuario?"}
					textCancel={"Cancelar"}
					textAccept={"Confirmar"}
				/>
			)}
		</section>
	);
};

export default TableList;
