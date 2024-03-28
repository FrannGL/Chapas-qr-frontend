import styles from "./styles.module.scss";
import Pencil from "../../../../public/icons/pencil";
import Delete from "../../../../public/icons/delete";
import wpLogo from "../../../../public/icons/WA_Logo.svg";
import { UserProps } from "@/typescript/users.interface";
import Image from "next/image";
import Link from "next/link";
import QRCode from "react-qr-code";
import useFormattedDate from "@/hooks/useFormattedDate";
import { useState } from "react";
import { useRouter } from "next/navigation";

interface ItemListProps {
	item: UserProps;
	onEdit: (id: string) => void;
	onDelete: (id: string) => void;
}

const ItemList = ({ item, onEdit, onDelete }: ItemListProps) => {
	const [qrClicked, setQrClicked] = useState(false);
	const router = useRouter();

	const handleEditClick = () => {
		onEdit(item._id);
	};

	const handleDeleteClick = () => {
		onDelete(item._id);
	};

	const handleQrClick = () => {
		setQrClicked(!qrClicked);
	};

	const userObjetc = JSON.stringify(item);
	const formattedDate = useFormattedDate(item.birthday);

	return (
		<div className={styles.body}>
			<Image src={item.image && item.image} alt={item.name} priority width={80} height={80} className={styles.image} />
			<p className={`${styles.data} ${styles.name}`} onClick={() => router.push(`${item._id}`)}>
				{item.name}
			</p>
			<p className={styles.data}>{item.weight}</p>
			<p className={styles.data}>{formattedDate}</p>
			<p className={styles.data}>{item.owner}</p>
			<Link href={`https://wa.me/${item.whatsappNumber}`} target='_blank' className={styles.data}>
				<Image src={wpLogo} alt='Whatsapp Logo' className={styles.wp} /> {item.whatsappNumber}
			</Link>
			<QRCode
				value={userObjetc}
				className={`${styles.qr} ${qrClicked ? styles.clicked : ""}`}
				onClick={handleQrClick}
			/>
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
