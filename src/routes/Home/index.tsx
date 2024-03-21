"use client";
import styles from "./styles.module.scss";
import { useEffect, useState } from "react";
import { get } from "@/app/api/route";
import TableList from "@/components/TableList";

const HomePage = () => {
	const [loading, setLoading] = useState<boolean>(false);
	const [users, setUsers] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const data = await get("users");
				if (data.statusCode === 200) {
					console.log(data);
					setUsers(data.payload);
				}
			} catch (error) {
				console.error("Error fetching data:", error);
			}
		};

		fetchData();
	}, []);

	return (
		<section className={styles.container}>
			<div className={styles.users}>
				{/* {users.map((user: any) => (
					<div key={user.id} className={styles.user}>
						<p>{user.name}</p>
						<p>{user.owner}</p>
					</div>
				))} */}
				<TableList loading={loading} users={users} />
			</div>
		</section>
	);
};

export default HomePage;
