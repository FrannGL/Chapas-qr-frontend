import styles from "./styles.module.scss";
import ItemList from "./ItemList";
import LoadingMsg from "@/components/Loading";
import HeaderAgent from "./HeaderList/HeaderAgent";
import { useState, useEffect } from "react";
import { UserProps } from "@/typescript/users.interface";

interface TableProps {
	loading: Boolean;
	users: UserProps[];
}

const TableList = ({ loading, users }: TableProps) => {
	const [userId, setUserId] = useState<string | null>(null);

	const handleEditUser = (id: string) => {
		setUserId(id);

		console.log(userId);
	};

	const handleDeleteUser = (id: string) => {
		setUserId(id);
		console.log(userId);
	};

	return (
		<section className={styles.container}>
			<div className={styles.head}>
				<h3 className={styles.title}>Listado de usuarios</h3>
			</div>
			<div className={styles.header_container}>
				<HeaderAgent />
			</div>
			<div className={styles.content}>
				{loading ? (
					<LoadingMsg />
				) : users.length >= 1 ? (
					users.map(user => <ItemList key={user._id} item={user} onEdit={handleEditUser} onDelete={handleDeleteUser} />)
				) : (
					<p className={styles.text}>Aún no hay usuarios</p>
				)}
			</div>
		</section>
	);
};

export default TableList;
