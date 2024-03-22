import styles from "./styles.module.scss";
import ItemList from "./ItemList";
import LoadingMsg from "@/components/Loading";
import HeaderAgent from "./HeaderList/HeaderAgent";
import { useState, useEffect } from "react";
import { useAppSelector } from "@/store/hooks";

interface TableProps {
	loading: Boolean;
	fetchData: () => void;
}

const TableList = ({ loading, fetchData }: TableProps) => {
	const [userId, setUserId] = useState<string | null>(null);
	const userData = useAppSelector(state => state.userData);

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
				) : userData.length > 0 ? (
					userData.map(user => (
						<>
							<ItemList key={user._id} item={user} onEdit={handleEditUser} onDelete={handleDeleteUser} />
						</>
					))
				) : (
					<p className={styles.text}>Aún no hay usuarios</p>
				)}
			</div>
		</section>
	);
};

export default TableList;
