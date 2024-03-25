import { ChangeEvent } from "react";
import styles from "./styles.module.scss";

interface SearchProps {
	setSearchTerm: (term: string) => void;
}

const Search = ({ setSearchTerm }: SearchProps) => {
	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		const searchTerm = e.target.value;
		setSearchTerm(searchTerm);
	};

	return (
		<section className={styles.container}>
			<input
				type='text'
				placeholder='Buscar por nombre o por dueño ...'
				onChange={handleChange}
				className={styles.input}
			/>
		</section>
	);
};
export default Search;
