"use client";
import styles from "./styles.module.scss";
import TableList from "@/components/TableList";
import useFetchUsers from "@/hooks/useFetchUsers";
import Search from "@/components/Search";
import { useState } from "react";
import { UserProps } from "@/typescript/users.interface";

const HomePage = () => {
	const [searchTerm, setSearchTerm] = useState("");
	const { loading, fetchData } = useFetchUsers();

	const filteredUsers = (users: UserProps[], searchTerm: string): UserProps[] => {
		return users.filter((user: UserProps) => {
			return (
				user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
				user.owner.toLowerCase().includes(searchTerm.toLowerCase())
			);
		});
	};

	return (
		<section className={styles.container}>
			<div className={styles.users}>
				<Search setSearchTerm={setSearchTerm} />
				<TableList loading={loading} fetchData={fetchData} filteredUsers={filteredUsers} searchTerm={searchTerm} />
			</div>
		</section>
	);
};

export default HomePage;
