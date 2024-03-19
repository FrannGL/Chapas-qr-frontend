"use client";
import { useEffect } from "react";
import styles from "./styles.module.scss";

const ErrorMessage = ({ error, reset }: { error: Error; reset: () => void }) => {
	useEffect(() => {
		console.log(error);
	}, [error]);

	return (
		<div className={styles.container}>
			<p>Error</p>
			<button onClick={() => reset()}>buton</button>
		</div>
	);
};

export default ErrorMessage;
