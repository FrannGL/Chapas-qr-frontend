"use client";
import Button from "@/components/Button";
import styles from "./styles.module.scss";
import { useEffect, useState } from "react";
import Popup from "@/components/Popup";
import FormHandler from "@/components/FormHandler";
import { get } from "@/app/api/route";

const HomePage = () => {
  const [addPopup, setAddPopup] = useState(false);
  const [users, setUsers] = useState([]);

  const handleClickAdd = () => {
    setAddPopup(true);
  };

  const handleCloseModal = () => {
    setAddPopup(false);
  };

  const handleCreate = () => {
    console.log("create");
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await get("users");
        if (data.statusCode === 200) {
          console.log(data);
          setUsers(data.payload);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <section className={styles.container}>
      <div className={styles.users}>
        {/* {users.map((user: any) => (
					<div key={user.id} className={styles.user}>
						<p>{user.name}</p>
						<p>{user.owner}</p>
					</div>
				))} */}
      </div>
    </section>
  );
};

export default HomePage;
