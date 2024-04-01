import styles from "./styles.module.scss";
import Pencil from "../../../../public/icons/pencil";
import Delete from "../../../../public/icons/delete";
import wpLogo from "../../../../public/icons/WA_Logo.svg";
import QRIcon from "../../../../public/icons/qr";
import { UserProps } from "@/typescript/users.interface";
import Image from "next/image";
import Link from "next/link";
import QRCode from "react-qr-code";
import { formatBirthday } from "@/utils/formatBirtday";
import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";

interface ItemListProps {
	item: UserProps;
	onEdit: (id: string) => void;
	onDelete: (id: string) => void;
}

const ItemList = ({ item, onEdit, onDelete }: ItemListProps) => {
	const [userId, setUserId] = useState("");
	const [qrClicked, setQrClicked] = useState(false);
	const [qrValue, setQrValue] = useState("");
	const qrRef = useRef<HTMLDivElement>(null);
	const router = useRouter();

	useEffect(() => {
		setQrValue(`https://localhost:3000/${item._id}`);
	}, [item._id]);

	const handleEditClick = () => {
		onEdit(item._id);
	};

	const handleDeleteClick = () => {
		onDelete(item._id);
	};

	const handleQrClick = () => {
		setQrClicked(!qrClicked);
		setUserId(item._id);
	};

	const handleDownloadQR = () => {
		const svg = document.getElementById(userId);
		if (svg) {
			const svgData = new XMLSerializer().serializeToString(svg);
			const canvas = document.createElement("canvas");
			const ctx = canvas.getContext("2d");
			if (ctx) {
				const img = new window.Image();
				img.onload = () => {
					canvas.width = img.width;
					canvas.height = img.height;
					ctx.drawImage(img, 0, 0);
					const pngFile = canvas.toDataURL("image/png");
					const downloadLink = document.createElement("a");
					downloadLink.download = "qrCode";
					downloadLink.href = `${pngFile}`;
					downloadLink.click();
				};
				img.src = `data:image/svg+xml;base64,${btoa(svgData)}`;
			}
		}
	};

	return (
		<div className={styles.body}>
			<Image
				src={(item.image ?? "") as string}
				alt={item.name}
				priority
				width={80}
				height={80}
				className={styles.image}
			/>
			<p className={`${styles.data} ${styles.name}`} onClick={() => router.push(`${item._id}`)}>
				{item.name}
			</p>
			<p className={styles.data}>{item.race}</p>
			<p className={styles.data}>{item.weight}</p>
			<p className={styles.data}>{formatBirthday(item.birthday)}</p>
			<p className={styles.data}>{item.owner}</p>
			<Link href={`https://wa.me/${item.whatsappNumber}`} target='_blank' className={styles.data}>
				<Image src={wpLogo} alt='Whatsapp Logo' className={styles.wp} /> {item.whatsappNumber}
			</Link>
			<div ref={qrRef} className={`${qrClicked ? styles.qr_container : ""}`}>
				<QRCode
					id={userId}
					value={qrValue}
					className={`${styles.qr} ${qrClicked ? styles.clicked : ""}`}
					onClick={handleQrClick}
				/>
				{qrClicked && (
					<button className={styles.btn_donwload} onClick={handleDownloadQR}>
						Descargar QR <QRIcon />
					</button>
				)}
			</div>
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
