import { useState, useEffect, useCallback } from "react";
import { GET } from "@/app/api/route";
import { setUserData } from "@/store/features/userSlice";
import { useAppDispatch } from "@/store/hooks";

const useFetchUsers = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const dispatch = useAppDispatch();

    const fetchData = useCallback(async () => {
        setLoading(true);
        try {
            const data = await GET("users");
            if (data.statusCode === 200) {
                dispatch(setUserData(data.payload));
            }
        } catch (error) {
            console.error("Error fetching data:", error);
        } finally {
            setLoading(false);
        }
    }, [dispatch]);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    return { loading, fetchData };
};

export default useFetchUsers;