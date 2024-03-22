import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
	name: Yup.string().required("Name is required"),
	image: Yup.mixed<FileList>().required("Image is required"),
	weight: Yup.number()
	  .typeError("Weight must be a number")
	  .required("Weight is required"),
	birthday: Yup.string().required("Date of birth is required"),
	owner: Yup.string().required("Owner is required"),
	whatsappNumber: Yup.string()
	  .matches(/^\d+$/, "WhatsApp number must contain only digits")
	  .required("WhatsApp number is required"),
  });
