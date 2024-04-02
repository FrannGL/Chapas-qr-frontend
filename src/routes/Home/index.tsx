"use client";
import styles from "./styles.module.scss";
import TableList from "@/components/TableList";
import useFetchUsers from "@/hooks/useFetchUsers";
import Search from "@/components/Search";
import { useState } from "react";
import { useAppSelector } from "@/store/hooks";
import { UserProps } from "@/typescript/users.interface";

const HomePage = () => {
	const users = useAppSelector(state => state.userData);
	const [filteredUsers, setFilteredUsers] = useState<UserProps[]>(users);
	const { loading, fetchData } = useFetchUsers();

	return (
		<section className={styles.container}>
			<div className={styles.users}>
				<Search data={users} setFilteredUsers={setFilteredUsers} />
				<TableList data={filteredUsers} loading={loading} fetchData={fetchData} />
				<a href="/api/auth/logout">Logout</a>
			</div>
		</section>
	);
};

export default HomePage;
