import { useState, useEffect } from "react";

const formatDate = (timestamp: string): string => {
  const date = new Date(timestamp);
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');
  return `${day}/${month}/${year}`;
};

const useFormattedDate = (timestamp: string): string => {
  const [formattedDate, setFormattedDate] = useState("");

  useEffect(() => {
    setFormattedDate(formatDate(timestamp));
  }, [timestamp]);

  return formattedDate;
};

export default useFormattedDate;
