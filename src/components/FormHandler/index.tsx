import { Formik, Form, Field, FormikHelpers } from "formik";
import styles from "./styles.module.scss";

interface FormData {
  name: string;
  imageUrl: File | string;
  weight: number;
  dateOfBirth: string;
  owner: string;
  whatsapp: string;
}

interface FormHandlerProps {
  setAddPopup: React.Dispatch<React.SetStateAction<boolean>>;
}

const initialValues: FormData = {
  name: "",
  imageUrl: "",
  weight: 0,
  dateOfBirth: "",
  owner: "",
  whatsapp: "",
};

const FormHandler = ({ setAddPopup }: FormHandlerProps) => {
  const handleSubmit = (
    values: FormData,
    { resetForm }: FormikHelpers<FormData>
  ) => {
    console.log(values);
    resetForm({ values: initialValues });
  };

  const validateForm = (values: FormData) => {
    const errors: Partial<FormData> = {};

    if (!values.name) {
      errors.name = "Name is required";
    }

    if (!values.dateOfBirth) {
      errors.dateOfBirth = "Date of birth is required";
    }

    if (!values.owner) {
      errors.owner = "Owner's name is required";
    }

    if (values.whatsapp.toString().length !== 10) {
      errors.whatsapp = "WhatsApp number must have 10 digits";
    }

    return errors;
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validate={validateForm}
    >
      <Form>
        <div className={styles.container}>
          <div className={styles.form}>
            <div className={styles.label_container}>
              <label htmlFor="name">Name:</label>
              <Field type="text" id="name" name="name" />
            </div>
            <div className={styles.file_container}>
              <label htmlFor="imageUrl">Imagen:</label>
              <Field type="file" id="imageUrl" name="imageUrl" />
            </div>
            <div className={styles.label_container}>
              <label htmlFor="weight">Weight:</label>
              <Field type="number" id="weight" name="weight" />
            </div>
            <div className={styles.label_container}>
              <label htmlFor="dateOfBirth">Date of Birth:</label>
              <Field type="text" id="dateOfBirth" name="dateOfBirth" />
            </div>
            <div className={styles.label_container}>
              <label htmlFor="owner">Owner:</label>
              <Field type="text" id="owner" name="owner" />
            </div>
            <div className={styles.label_container}>
              <label htmlFor="whatsapp">WhatsApp Number:</label>
              <Field type="text" id="whatsapp" name="whatsapp" />
            </div>
          </div>
          <div className={styles.btn_container}>
            <button className={styles.btn} onClick={() => setAddPopup(false)}>
              CANCEL
            </button>
            <button type="submit" className={styles.btn}>
              CREATE USER
            </button>
          </div>
        </div>
      </Form>
    </Formik>
  );
};

export default FormHandler;
