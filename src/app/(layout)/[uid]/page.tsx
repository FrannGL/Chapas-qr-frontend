"use client";
import { UserProps } from "@/typescript/users.interface";
import Image from "next/image";
import { useAppSelector } from "@/store/hooks";
import { useEffect, useState } from "react";
import useFetchUsers from "@/hooks/useFetchUsers";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import LoadingMsg from "@/components/Loading";

export default function UserPage({ params }: { params: { uid: string } }) {
	const users = useAppSelector(state => state.userData);
	const [user, setUser] = useState<UserProps | null>(null);
	const { loading, fetchData } = useFetchUsers();

	useEffect(() => {
		fetchData();
	}, [fetchData]);

	useEffect(() => {
		const foundClient = users.filter(client => client._id === params.uid)[0];
		if (foundClient) {
			setUser(foundClient);
		}
	}, [users, params.uid, fetchData]);

	return (
		<>
			{loading ? (
				<LoadingMsg />
			) : (
				<div>
					<div>
						<Image src={user?.image as unknown as StaticImport} alt='User' width={100} height={100} />
						<p>Name: {user?.name}</p>
						<p>Weight: {user?.weight}</p>
						<p>Birthday: {user?.birthday}</p>
						<p>Owner: {user?.owner}</p>
						<p>Whatsapp Number: {user?.whatsappNumber}</p>
					</div>
				</div>
			)}
		</>
	);
}
