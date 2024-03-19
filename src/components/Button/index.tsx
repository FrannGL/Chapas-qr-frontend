import styles from "./styles.module.scss";
import Image from "next/image";
import { StaticImageData } from "next/image";

export interface ButtonProps {
	title?: string;
	icon?: StaticImageData;
	type: "submit" | "reset" | undefined;
	className?: string;
	onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
	disabled?: boolean;
	value?: string;
}

const Button = ({ title, onClick, type, className, disabled = false, icon }: ButtonProps) => {
	const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		if (onClick) {
			onClick(e);
		}
	};

	const classes = className ? `${styles[className]}` : styles.btn;

	return (
		<button className={classes} onClick={handleClick} type={type} disabled={disabled}>
			{/* {className === "reset" && <Image src={refreshIcon} alt='Refresh' width={22} height={22} />} */}
			{title && title}
			{icon && <Image src={icon} alt='Icon' className={styles.icon} />}
		</button>
	);
};

export default Button;
