import styles from "./styles.module.scss";
import { post, update } from "@/app/api/route";
import { useMessageToast } from "@/hooks/useMessageToast";
import useFetchUsers from "@/hooks/useFetchUsers";
import FileDragDrop from "./FileDragDrop";
import { ChangeEvent, SetStateAction, useEffect, useState } from "react";
import { UserProps } from "@/typescript/users.interface";
import { useAppSelector } from "@/store/hooks";
import { useCloseDropdown } from "@/hooks/useCloseDropdown";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

interface FormActionsProps {
	setShowPopup: (value: SetStateAction<boolean>) => void;
	requestType: "POST" | "PUT";
	userId?: string;
}
const FormActions = ({ setShowPopup, requestType, userId }: FormActionsProps) => {
	const { dropdownRef } = useCloseDropdown(setShowPopup);
	const users = useAppSelector(state => state.userData);
	const [image, setImage] = useState<string | StaticImport>("");
	const { notify, notifyError } = useMessageToast();
	const { fetchData } = useFetchUsers();
	const [formData, setFormData] = useState<UserProps>({
		_id: "",
		name: "",
		image: null,
		weight: "",
		birthday: "",
		owner: "",
		whatsappNumber: "",
	});

	useEffect(() => {
		if (requestType === "PUT") {
			const foundClient = users.filter(client => client._id === userId)[0];
			setFormData({
				_id: foundClient._id,
				name: foundClient.name,
				image: foundClient.image,
				weight: foundClient.weight,
				birthday: foundClient.birthday,
				owner: foundClient.owner,
				whatsappNumber: foundClient.whatsappNumber,
			});
		} else {
			// if (formData.image) {
			// 	const imageUrl = URL.createObjectURL(formData.image);
			// 	setImage(imageUrl);
			// }
		}
	}, [users, requestType, userId]);

	const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const fieldName = e.target.name as keyof FormData;
		setFormData({
			...formData,
			[fieldName]: e.target.value,
		});
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
		e.preventDefault();
		if (requestType === "POST") {
			postClient();
		} else {
			editClient();
		}
	};

	const postClient = async () => {
		try {
			const response = await post("users", formData);
			if (response.statusCode === 201) {
				notify("Usuario creado correctamente");
				setShowPopup(false);
				setFormData({
					_id: "",
					name: "",
					image: null,
					weight: "",
					birthday: "",
					owner: "",
					whatsappNumber: "",
				});
				fetchData();
			} else {
				notifyError("Error al crear el usuario");
			}
		} catch (e) {
			console.log(e);
		}
	};

	const editClient = async () => {
		try {
			if (userId) {
				const data = await update("users", formData, userId);
				if (data.statusCode === 200) {
					notify("Usuario editado correctamente");
					setShowPopup(false);
					setFormData({
						_id: userId,
						name: "",
						image: null,
						weight: "",
						birthday: "",
						owner: "",
						whatsappNumber: "",
					});
					fetchData();
				} else {
				}
			}
		} catch (e) {
			console.log(e);
		}
	};

	const handleSetFile = (file: string, value: any) => {
		setFormData({ ...formData, [file]: value });
	};

	return (
		<section className={styles.popup_container}>
			<div className={styles.container} ref={dropdownRef}>
				<form className={styles.form} onSubmit={handleSubmit}>
					<div className={styles.avatar_container}>
						<p className={styles.avatar_text}>Avatar</p>
						<p className={styles.avatar_name}>{formData.image ? formData.image.name : ""}</p>
						{image && <Image src={image} className={styles.avatar} alt='avatar' width={100} height={100} />}
						{formData.image && !image && (
							<Image
								src={formData.image instanceof File ? URL.createObjectURL(formData.image) : formData.image}
								className={styles.avatar}
								alt='avatar'
								width={100}
								height={100}
							/>
						)}
						<FileDragDrop setFile={handleSetFile} />
					</div>
					<div className={styles.inputs_text}>
						<div className={styles.label_container}>
							<label htmlFor='name'>Name</label>
							<input type='text' id='name' name='name' onChange={handleChange} value={formData.name} />
						</div>
						<div className={styles.label_container}>
							<label htmlFor='weight'>Weight</label>
							<input type='text' id='weight' name='weight' onChange={handleChange} value={formData.weight} />
						</div>
						<div className={styles.label_container}>
							<label htmlFor='birthday'>Date of Birth</label>
							<input type='text' id='birthday' name='birthday' onChange={handleChange} value={formData.birthday} />
						</div>
						<div className={styles.label_container}>
							<label htmlFor='owner'>Owner</label>
							<input type='text' id='owner' name='owner' onChange={handleChange} value={formData.owner} />
						</div>
						<div className={styles.label_container}>
							<label htmlFor='whatsappNumber'>WhatsApp Number</label>
							<input
								type='text'
								id='whatsappNumber'
								name='whatsappNumber'
								onChange={handleChange}
								value={formData.whatsappNumber}
							/>
						</div>
					</div>
					<div className={styles.btn_container}>
						<button className={styles.btn} onClick={() => setShowPopup(false)}>
							CANCEL
						</button>
						<button type='submit' className={styles.btn}>
							CREATE USER
						</button>
					</div>
				</form>
			</div>
		</section>
	);
};

export default FormActions;
