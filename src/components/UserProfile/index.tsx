import { useAppSelector } from "@/store/hooks";
import styles from "./styles.module.scss";
import { useEffect, useState } from "react";
import useFetchUsers from "@/hooks/useFetchUsers";
import LoadingMsg from "../Loading";
import { UserProps } from "@/typescript/users.interface";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import wpLogo from "../../../public/icons/WA_Logo.svg";
import { formatBirthday } from "@/utils/formatBirtday";
import Link from "next/link";

const UserProfile = ({ uid }: { uid: string }) => {
  const users = useAppSelector((state) => state.userData);
  const [user, setUser] = useState<UserProps | null>(null);
  const { loading, fetchData } = useFetchUsers();

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  useEffect(() => {
    const foundClient = users.filter((client) => client._id === uid)[0];
    if (foundClient) {
      setUser(foundClient);
    }
  }, [users, uid, fetchData]);

  return (
    <>
      {loading ? (
        <LoadingMsg />
      ) : (
        <div className={styles.container}>
          <div className={styles.header}>
            <Image
              src={user?.image as unknown as StaticImport}
              className={styles.img}
              alt="User"
              width={300}
              height={300}
            />
          </div>
          <div className={styles.contact}>
            <p className={styles.name}>
              Hola! Soy <span>{user?.name}</span>
            </p>
            <Link
              href={`https://wa.me/+549${user?.whatsappNumber}`}
              target="_blank"
              className={styles.btn}
            >
              <Image src={wpLogo} alt="Whatsapp Logo" className={styles.wp} />
              Enviar Whatsapp
            </Link>
          </div>
          <div className={styles.info}>
            <p>
              Mi dueño es: <span>{user?.owner}</span>
            </p>
            <p className={styles.name}>
              Mi raza es: <span>{user?.race}</span>
            </p>
            <p>
              Mi peso es: <span>{user?.weight}Kg</span>
            </p>
            <p>
              Mi cumpleaños es el:{" "}
              <span>{user && formatBirthday(user.birthday)}</span>
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default UserProfile;
