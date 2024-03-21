"use client";
import "../../styles/global.scss";
import styles from "./styles.module.scss";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Slide } from "react-toastify";
import Sidebar from "@/components/Sidebar";
import { useState } from "react";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className={styles.container}>
      <ToastContainer
        position="bottom-right"
        limit={2}
        autoClose={2000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        transition={Slide}
      />
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <div
        className={
          isSidebarOpen
            ? `${styles.inner_container} ${styles.isOpen}`
            : styles.inner_container
        }
      >
        <div className={styles.children_container}>{children}</div>
      </div>
    </div>
  );
};

export default MainLayout;
