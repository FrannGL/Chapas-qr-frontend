import styles from "./styles.module.scss";
import Pencil from "../../../../public/icons/pencil";
import Delete from "../../../../public/icons/delete";
import { UserProps } from "@/typescript/users.interface";

interface ItemListProps {
	item: UserProps;
	onEdit: (id: string) => void;
	onDelete: (id: string) => void;
}

const ItemList = ({ item, onEdit, onDelete }: ItemListProps) => {
	const handleEditClick = () => {
		onEdit(item._id);
	};

	const handleDeleteClick = () => {
		onDelete(item._id);
	};

	return (
		<div className={styles.body}>
			<p className={styles.data}>{item._id}</p>
			<p className={styles.data}>{item.name}</p>
			<p className={styles.data}>{item.weight}</p>
			<p className={styles.data}>{item.birthday}</p>
			<p className={styles.data}>{item.owner}</p>
			<p className={styles.data}>{item.whatsappNumber}</p>
			<div className={styles.actions}>
				<button className={styles.btn} onClick={handleEditClick}>
					<Pencil />
				</button>
				<button className={styles.btn} onClick={handleDeleteClick}>
					<Delete />
				</button>
			</div>
		</div>
	);
};

export default ItemList;
