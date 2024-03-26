import styles from "./styles.module.scss";
import { useDropzone } from "react-dropzone";
import { useMessageToast } from "@/hooks/useMessageToast";
import Image from "next/image";
import fileImage from "/public/icons/cloud.svg";

interface FileDragDropProps {
	setFile: (field: string, value: any) => void;
}

const FileDragDrop = ({ setFile }: FileDragDropProps) => {
	const { notifyError } = useMessageToast();

	const onDrop = (acceptedFiles: File[], fileRejections: any) => {
		console.log(acceptedFiles[0]);
		if (fileRejections.length) {
			const errorCode = fileRejections[0].errors[0].code;
			if (errorCode === "file-invalid-type") {
				notifyError("Solo se permiten imágenes PNG, JPEG, JPG, WEBP");
			}
		} else {
			setFile("image", acceptedFiles[0]);
		}
	};

	const { getRootProps, getInputProps, isDragActive } = useDropzone({
		onDrop,
		accept: {
			"image/*": [".png", ".jpeg", ".jpg", ".webp"],
		},
		maxFiles: 1,
	});

	return (
		<div {...getRootProps()} className={isDragActive ? `${styles.container} ${styles.isActive}` : styles.container}>
			<input {...getInputProps()} id='image' />
			<Image className={styles.icon} src={fileImage} alt='cloud-icon' />
		</div>
	);
};

export default FileDragDrop;
