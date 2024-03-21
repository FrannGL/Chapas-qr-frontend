import { SVGProps } from "react";

const Addition = (props: SVGProps<SVGSVGElement>) => (
	<svg xmlns='http://www.w3.org/2000/svg' width={18} height={18} fill='none' {...props}>
		<path fill='#000' fillRule='evenodd' d='M7.5 10.5V18h3v-7.5H18v-3h-7.5V0h-3v7.5H0v3h7.5Z' clipRule='evenodd' />
	</svg>
);
export default Addition;
