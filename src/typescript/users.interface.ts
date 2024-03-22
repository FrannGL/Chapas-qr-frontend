import { StaticImageData } from "next/image";

export interface UserProps {
	_id: string;
	image: StaticImageData;
	name: string;
	weight: string;
	birthday: string;
	owner: string;
	whatsappNumber: string;
}