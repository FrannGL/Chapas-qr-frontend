"use client";
import MainLayout from "./layout";
import HomePage from "@/routes/Home";
import PopupAuth from "@/components/PopupAuth";
import { useAppSelector } from "@/store/hooks";

export default function Home() {
	const auth = useAppSelector(state => state.auth);

	if (!auth.email && !auth.password) {
		return <PopupAuth />;
	} else return <HomePage />;
}
