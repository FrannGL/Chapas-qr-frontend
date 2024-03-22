"use client";
import styles from "./styles.module.scss";
import { useEffect, useState } from "react";
import { get } from "@/app/api/route";
import TableList from "@/components/TableList";
import { setUserData } from "@/store/features/userSlice";
import { useAppDispatch, useAppSelector } from "@/store/hooks";

const HomePage = () => {
	const [loading, setLoading] = useState<boolean>(false);
	const dispatch = useAppDispatch();

	const fetchData = async () => {
		setLoading(true);
		try {
			const data = await get("users");
			if (data.statusCode === 200) {
				dispatch(setUserData(data.payload));
				setLoading(false);
			}
		} catch (error) {
			console.error("Error fetching data:", error);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		fetchData();
	}, [dispatch]);

	return (
		<section className={styles.container}>
			<div className={styles.users}>
				<TableList loading={loading} fetchData={fetchData} />
			</div>
		</section>
	);
};

export default HomePage;
