import styles from "./styles.module.scss";
import Pencil from "../../../../public/icons/pencil";
import Delete from "../../../../public/icons/delete";
import wpLogo from "../../../../public/icons/WA_Logo.svg";
import { UserProps } from "@/typescript/users.interface";
import Image from "next/image";
import Link from "next/link";

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
			<Image src={item.image && item.image} alt={item.name} priority width={80} height={80} className={styles.image} />
			<p className={styles.data}>{item.name}</p>
			<p className={styles.data}>{item.weight}</p>
			<p className={styles.data}>{item.birthday}</p>
			<p className={styles.data}>{item.owner}</p>
			<Link href={`https://wa.me/${item.whatsappNumber}`} target='_blank' className={styles.data}>
				<Image src={wpLogo} alt='Whatsapp Logo' className={styles.wp} /> {item.whatsappNumber}
			</Link>
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
