import styles from "./styles.module.scss";
import logo from "@/../public/assets/logo.png";
import Image from "next/image";
import { Poppins } from "next/font/google";
import Link from "next/link";

const poppins = Poppins({
	subsets: ["latin"],
	display: "swap",
	weight: ["100", "200", "300", "400", "500", "600", "700"],
});

const NavTop = () => {
	return (
		<nav className={styles.nav}>
			<h2>Navbar</h2>
		</nav>
	);
};

export default NavTop;
