"use client";
import Button from "@/components/Button";
import styles from "./styles.module.scss";
import { useEffect, useState } from "react";
import Popup from "@/components/Popup";
import FormHandler from "@/components/FormHandler";
import { get } from "@/services/fetch";

const HomePage = () => {
	const [addPopup, setAddPopup] = useState(false);

	const handleClickAdd = () => {
		setAddPopup(true);
	};

	const handleCloseModal = () => {
		setAddPopup(false);
	};

	const handleCreate = () => {
		console.log("create");
	};

	useEffect(() => {
		const fetchData = async () => {
			try {
				const data = await get("");
				console.log(data);
			} catch (error) {
				console.error("Error fetching data:", error);
			}
		};

		fetchData();
	}, []);

	return (
		<section className={styles.container}>
			<Button title='Agregar Usuario' type='submit' onClick={handleClickAdd} />
			{addPopup && (
				<Popup
					onConfirm={handleCreate}
					onCancel={handleCloseModal}
					setShowConfirmation={setAddPopup}
					title={"Agregar usuario"}
				>
					<FormHandler setAddPopup={setAddPopup} />
				</Popup>
			)}
		</section>
	);
};

export default HomePage;
