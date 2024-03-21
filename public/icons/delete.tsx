import { SVGProps } from "react";

const Delete = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width='32px'
		height='32px'
		viewBox='0 0 24 24'
		xmlns='http://www.w3.org/2000/svg'
		stroke='#000000'
		fill='none'
		{...props}
	>
		<path d='M5 7.5H19L18 21H6L5 7.5Z' stroke='#000000' strokeLinejoin='round' />
		<path d='M15.5 9.5L15 19' stroke='#000000' strokeLinecap='round' strokeLinejoin='round' />
		<path d='M12 9.5V19' stroke='#000000' strokeLinecap='round' strokeLinejoin='round' />
		<path d='M8.5 9.5L9 19' stroke='#000000' strokeLinecap='round' strokeLinejoin='round' />
		<path
			d='M16 5H19C20.1046 5 21 5.89543 21 7V7.5H3V7C3 5.89543 3.89543 5 5 5H8M16 5L15 3H9L8 5M16 5H8'
			stroke='#000000'
			strokeLinejoin='round'
		/>
	</svg>
);

export default Delete;
