"use client";
import "../../styles/global.scss";
import styles from "./styles.module.scss";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Slide } from "react-toastify";
import Navbar from "@/components/Navbar";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className={styles.container}>
			<ToastContainer
				position='bottom-right'
				limit={2}
				autoClose={2000}
				hideProgressBar
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				transition={Slide}
			/>
			<Navbar />
			<div className={styles.inner_container}>
				<div className={styles.bottom_container}>
					<div className={styles.children_container}>{children}</div>
				</div>
			</div>
		</div>
	);
};

export default MainLayout;
