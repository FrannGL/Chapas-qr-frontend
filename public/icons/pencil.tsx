import { SVGProps } from "react";

const Pencil = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width='32px'
		height='32px'
		viewBox='0 0 64 64'
		xmlns='http://www.w3.org/2000/svg'
		strokeWidth='3'
		stroke='#000000'
		fill='none'
		{...props}
	>
		<polyline points='45.56 46.83 45.56 56.26 7.94 56.26 7.94 20.6 19.9 7.74 45.56 7.74 45.56 21.29' />
		<polyline points='19.92 7.74 19.9 20.6 7.94 20.6' />
		<line x1='13.09' y1='47.67' x2='31.1' y2='47.67' />
		<line x1='13.09' y1='41.14' x2='29.1' y2='41.14' />
		<line x1='13.09' y1='35.04' x2='33.1' y2='35.04' />
		<line x1='13.09' y1='28.94' x2='39.1' y2='28.94' />
		<path d='M34.45,43.23l.15,4.3a.49.49,0,0,0,.62.46l4.13-1.11a.54.54,0,0,0,.34-.23L57.76,22.21a1.23,1.23,0,0,0-.26-1.72l-3.14-2.34a1.22,1.22,0,0,0-1.72.26L34.57,42.84A.67.67,0,0,0,34.45,43.23Z' />
		<line x1='50.2' y1='21.7' x2='55.27' y2='25.57' />
	</svg>
);

export default Pencil;
