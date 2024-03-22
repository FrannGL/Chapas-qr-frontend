import { useState, useEffect } from "react";
import { get } from "@/app/api/route";
import { setUserData } from "@/store/features/userSlice";
import { useAppDispatch } from "@/store/hooks";

const useFetchUsers = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const dispatch = useAppDispatch();

    const fetchData = async () => {
        setLoading(true);
        try {
            const data = await get("users");
            if (data.statusCode === 200) {
                dispatch(setUserData(data.payload));
            }
        } catch (error) {
            console.error("Error fetching data:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, [dispatch]);

    return { loading, fetchData };
};

export default useFetchUsers;