import styles from "./styles.module.scss";
import { SetStateAction } from "react";
import { useCloseDropdown } from "@/hooks/useCloseDropdown";

interface PopupConfirmProps {
	onConfirm: () => void;
	onCancel: () => void;
	setShowConfirmation: (value: SetStateAction<boolean>) => void;
	title: string;
	textCancel: string;
	textAccept: string;
}

const PopupConfirm = ({
	onConfirm,
	onCancel,
	setShowConfirmation,
	title,
	textCancel,
	textAccept,
}: PopupConfirmProps) => {
	const { dropdownRef } = useCloseDropdown(setShowConfirmation);

	return (
		<section className={styles.popup_container}>
			<div className={styles.container} ref={dropdownRef}>
				<p>{title}</p>
				<div className={styles.button_container}>
					<button className={styles.no} onClick={onCancel}>
						{textCancel}
					</button>
					<button className={styles.yes} onClick={onConfirm}>
						{textAccept}
					</button>
				</div>
			</div>
		</section>
	);
};

export default PopupConfirm;
