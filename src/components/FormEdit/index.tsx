import styles from "./styles.module.scss";
import { useFormik } from "formik";
import { useState } from "react";
import { useAppSelector, useAppDispatch } from "@/store/hooks";

interface UserFormEdit {
	name: string;
	image: FileList | null;
	weight: string;
	birthday: string;
	owner: string;
	whatsappNumber: string;
}

interface FormHandlerProps {
	setEditPopup: React.Dispatch<React.SetStateAction<boolean>>;
}

const FormEdit = ({ setEditPopup }: FormHandlerProps) => {
	const [image, setImage] = useState<File | null>(null);
	const userData = useAppSelector(state => state.userData);

	console.log("UserData:", userData);

	// const initialValues: UserFormEdit = {
	// 	name: userData.name,
	// 	image: null,
	// 	weight: "",
	// 	birthday: "",
	// 	owner: "",
	// 	whatsappNumber: "",
	// };

	// const { values, handleBlur, handleChange, handleSubmit, setFieldValue, errors } = useFormik({
	// 	initialValues: initialValues,
	// 	onSubmit: async (formValues, { resetForm }) => {
	// 		try {
	// 			const formData = new FormData();
	// 			formData.append("name", formValues.name);
	// 			if (formValues.image?.length) {
	// 				formData.append("image", formValues.image[0]);
	// 			}
	// 			formData.append("weight", formValues.weight);
	// 			formData.append("birthday", formValues.birthday);
	// 			formData.append("owner", formValues.owner);
	// 			formData.append("whatsappNumber", formValues.whatsappNumber);

	// 			const response = await post("users", formData);
	// 			console.log("Response:", response);
	// 		} catch (error) {
	// 			console.error("Error:", error);
	// 		}
	// 	},
	// });

	// const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
	// 	const files: FileList | null = e.target.files;
	// 	setFieldValue("image", files);
	// };

	return (
		<div className={styles.container}>
			{/* <form className={styles.form}>
				<h1>Form Edit</h1>
			</form> */}
		</div>
	);
};

export default FormEdit;
