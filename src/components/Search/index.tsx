import styles from "./styles.module.scss";
import { ChangeEvent } from "react";

interface SearchProps {
	setSearchTerm: (term: string) => void;
}

const Search = ({ setSearchTerm }: SearchProps) => {
	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(e.target.value);
	};

	return (
		<section className={styles.container}>
			<input type='text' placeholder='Buscar por nombre o por dueño ...' onChange={handleChange} className={styles.input} />
		</section>
	);
};

export default Search;
