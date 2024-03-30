"use client";
import UserProfile from "@/components/UserProfile";

export default function UserPage({ params }: { params: { uid: string } }) {
	return <UserProfile uid={params.uid} />;
}
