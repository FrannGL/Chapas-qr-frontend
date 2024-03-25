import { useFormik } from "formik";
import styles from "./styles.module.scss";
import { post } from "@/app/api/route";
import { useMessageToast } from "@/hooks/useMessageToast";
import { validationSchema } from "./validationSchema";
import useFetchUsers from "@/hooks/useFetchUsers";
import FileDragDrop from "./FileDragDrop";

interface UserFormData {
	name: string;
	image: File | null;
	weight: string;
	birthday: string;
	owner: string;
	whatsappNumber: string;
}

interface FormHandlerProps {
	setAddPopup: React.Dispatch<React.SetStateAction<boolean>>;
}

const initialValues: UserFormData = {
	name: "",
	image: null,
	weight: "",
	birthday: "",
	owner: "",
	whatsappNumber: "",
};

const FormAdd = ({ setAddPopup }: FormHandlerProps) => {
	const { notify, notifyError } = useMessageToast();
	const { fetchData } = useFetchUsers();
	const { values, handleBlur, handleChange, handleSubmit, setFieldValue, errors } = useFormik({
		initialValues: initialValues,
		validationSchema: validationSchema,
		onSubmit: async (formValues, { resetForm }) => {
			try {
				const formData = new FormData();
				formData.append("name", formValues.name);
				if (formValues.image) {
					formData.append("image", formValues.image);
				}
				formData.append("weight", formValues.weight);
				formData.append("birthday", formValues.birthday);
				formData.append("owner", formValues.owner);
				formData.append("whatsappNumber", formValues.whatsappNumber);

				const response = await post("users", formData);
				if (response.statusCode === 201) {
					setAddPopup(false);
					resetForm();
					notify("Usuario creado correctamente");
					fetchData();
				} else {
					notifyError("Error al crear al usuario");
				}
			} catch (error) {
				console.error("Error:", error);
			}
		},
	});

	return (
		<form className={styles.form} onSubmit={handleSubmit}>
			<div className={styles.avatar_container}>
				<p className={styles.avatar_text}>Avatar</p>
				<FileDragDrop setFieldValue={setFieldValue} />
			</div>
			<div className={styles.inputs_text}>
				<div className={styles.label_container}>
					<label htmlFor='name'>Name</label>
					<input type='text' id='name' name='name' onBlur={handleBlur} onChange={handleChange} value={values.name} />
					{errors.name && <p className={styles.error}>{errors.name}</p>}
				</div>
				<div className={styles.label_container}>
					<label htmlFor='weight'>Weight</label>
					<input
						type='text'
						id='weight'
						name='weight'
						onBlur={handleBlur}
						onChange={handleChange}
						value={values.weight}
					/>
					{errors.weight && <p className={styles.error}>{errors.weight}</p>}
				</div>
				<div className={styles.label_container}>
					<label htmlFor='birthday'>Date of Birth</label>
					<input
						type='text'
						id='birthday'
						name='birthday'
						onBlur={handleBlur}
						onChange={handleChange}
						value={values.birthday}
					/>
					{errors.birthday && <p className={styles.error}>{errors.birthday}</p>}
				</div>
				<div className={styles.label_container}>
					<label htmlFor='owner'>Owner</label>
					<input type='text' id='owner' name='owner' onBlur={handleBlur} onChange={handleChange} value={values.owner} />
					{errors.owner && <p className={styles.error}>{errors.owner}</p>}
				</div>
				<div className={styles.label_container}>
					<label htmlFor='whatsappNumber'>WhatsApp Number</label>
					<input
						type='text'
						id='whatsappNumber'
						name='whatsappNumber'
						onBlur={handleBlur}
						onChange={handleChange}
						value={values.whatsappNumber}
					/>
					{errors.whatsappNumber && <p className={styles.error}>{errors.whatsappNumber}</p>}
				</div>
			</div>
			<div className={styles.btn_container}>
				<button className={styles.btn} onClick={() => setAddPopup(false)}>
					CANCEL
				</button>
				<button type='submit' className={styles.btn}>
					CREATE USER
				</button>
			</div>
		</form>
	);
};

export default FormAdd;
