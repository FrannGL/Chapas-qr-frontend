import styles from "./styles.module.scss";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/utils/firebase";
import { useRouter } from "next/navigation";
import { login } from "@/store/features/authSlice";
import { useAppDispatch } from "@/store/hooks";

const PopupAuth = () => {
	const [user, setUser] = useState({
		email: "",
		password: "",
	});
	const [error, setError] = useState<null | string>(null);
	const router = useRouter();
	const dispatch = useAppDispatch();

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setUser({ ...user, [name]: value });
	};

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		try {
			const res = await signInWithEmailAndPassword(auth, user.email, user.password);
			if (res.user) {
				setError(null);
				dispatch(login({ email: user.email, password: user.password }));
			}
			router.push("/");
		} catch (error: unknown) {
			if (error instanceof Error) {
				setError("Credenciales incorrectas");
			} else {
				setError("Ocurrió un error desconocido");
			}
		}
	};

	return (
		<section className={styles.popup_container}>
			<form className={styles.container} onSubmit={handleSubmit}>
				<p className={styles.error}>{error && error}</p>
				<div className={styles.form_control}>
					<label htmlFor='email'>Email</label>
					<input
						type='email'
						name='email'
						value={user.email}
						placeholder='yourmail@mail.com ....'
						onChange={handleChange}
					/>
				</div>
				<div className={styles.form_control}>
					<label htmlFor='password'>Password</label>
					<input type='password' name='password' value={user.password} placeholder='********' onChange={handleChange} />
				</div>
				<div className={styles.button_container}>
					<button className={styles.yes}>Login</button>
				</div>
			</form>
		</section>
	);
};

export default PopupAuth;
