"use client";
import MainLayout from "./layout";
import HomePage from "@/routes/Home";
import { useUser } from "@auth0/nextjs-auth0/client";
import { useRouter } from "next/navigation";

export default function Home() {
	const { user, isLoading } = useUser();
	const router = useRouter();

	return !isLoading ? (
		user ? (
			<MainLayout>
				<HomePage />
			</MainLayout>
		) : (
			<a href='/api/auth/login'>Login</a>
		)
	) : null;
}
