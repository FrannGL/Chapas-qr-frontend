"use client";
import styles from "./styles.module.scss";
import TableList from "@/components/TableList";
import useFetchUsers from "@/hooks/useFetchUsers";

const HomePage = () => {
	const { loading, fetchData } = useFetchUsers();

	return (
		<section className={styles.container}>
			<div className={styles.users}>
				<TableList loading={loading} fetchData={fetchData} />
			</div>
		</section>
	);
};

export default HomePage;
