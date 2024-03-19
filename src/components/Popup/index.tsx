import styles from "./styles.module.scss";
import { FormEvent, SetStateAction } from "react";
import { useCloseDropdown } from "@/hooks/useCloseDropdown";

interface PopupProps {
	onConfirm: (e: FormEvent<HTMLFormElement>) => void;
	onCancel: () => void;
	setShowConfirmation: (value: SetStateAction<boolean>) => void;
	title: string;
	textCancel?: string;
	textAccept?: string;
	children: React.ReactNode;
}

const Popup = ({ onConfirm, onCancel, setShowConfirmation, title, textCancel, textAccept, children }: PopupProps) => {
	const { dropdownRef } = useCloseDropdown(setShowConfirmation);

	return (
		<section className={styles.popup_container}>
			<div className={styles.container} ref={dropdownRef}>
				<p>{title}</p>
				{children}
				{textAccept && textCancel && (
					<form className={styles.button_container} onSubmit={onConfirm}>
						<button className={styles.no} onClick={onCancel}>
							{textCancel}
						</button>
						<button className={styles.yes} type='submit'>
							{textAccept}
						</button>
					</form>
				)}
			</div>
		</section>
	);
};

export default Popup;
