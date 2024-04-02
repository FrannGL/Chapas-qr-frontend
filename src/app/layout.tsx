import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { Providers } from "@/store/provider";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import "@/styles/global.scss";

const roboto = Roboto({ weight: ["100", "300", "500"], subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
	title: "Chapas QR",
	description: "Chapas QR CRM",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<Providers>
			<UserProvider>
				<html lang='es'>
					<body className={roboto.className}>{children}</body>
				</html>
			</UserProvider>
		</Providers>
	);
}
