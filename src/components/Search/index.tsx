import { ChangeEvent, useEffect, useState } from "react";
import { UserProps } from "@/typescript/users.interface";
import styles from "./styles.module.scss";

interface SearchInputProps {
	data: UserProps[];
	setFilteredUsers: (data: UserProps[]) => void;
}

const Search = ({ data, setFilteredUsers }: SearchInputProps) => {
	const [searchValue, setSearchValue] = useState("");

	useEffect(() => {
		const filteredClients = data.filter(
			client =>
				client.name.toLowerCase().includes(searchValue.toLowerCase()) ||
				client.owner.toLowerCase().includes(searchValue.toLowerCase())
		);
		setFilteredUsers(filteredClients);
	}, [searchValue, data, setFilteredUsers]);

	const handleSearchChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
		setSearchValue(e.target.value);
	};

	return (
		<section className={styles.container}>
			<input
				type='text'
				placeholder='Buscar por nombre o por dueño ...'
				value={searchValue}
				onChange={handleSearchChange}
				className={styles.input}
			/>
		</section>
	);
};
export default Search;
