import { SVGProps } from "react";

const Close = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={14}
    height={15}
    fill="none"
    {...props}
  >
    <path
      fill="#505050"
      fillRule="evenodd"
      d="m4.879 7.5-3.89 3.89 2.122 2.12L7 9.622l3.889 3.89 2.121-2.122L9.121 7.5l3.89-3.889-2.122-2.121-3.89 3.889-3.888-3.89L.99 3.612l3.889 3.89Z"
      clipRule="evenodd"
    />
  </svg>
);
export default Close;
