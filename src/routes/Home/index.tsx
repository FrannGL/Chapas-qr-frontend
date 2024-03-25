"use client";
import styles from "./styles.module.scss";
import TableList from "@/components/TableList";
import useFetchUsers from "@/hooks/useFetchUsers";
import Search from "@/components/Search";
import { useState } from "react";

const HomePage = () => {
	const [searchTerm, setSearchTerm] = useState("");
	const { loading, fetchData } = useFetchUsers();

	return (
		<section className={styles.container}>
			<div className={styles.users}>
				<Search setSearchTerm={setSearchTerm} />
				<TableList loading={loading} fetchData={fetchData} searchTerm={searchTerm} />
			</div>
		</section>
	);
};

export default HomePage;
