interface CustomIconProps {
  color?: string;
  strokeWidth?: number;
  path: string[] | string;
  width?: number;
  height?: number;
  [key: string]: any;
}

const CustomIcon: React.FC<CustomIconProps> = ({
  color = "currentColor",
  strokeWidth = 2,
  path,
  width = 22,
  height = 22,
  ...props
}) => (
  <div style={{ marginRight: "5px" }}>
    <svg
      {...props}
      fill="none"
      viewBox="0 0 24 24"
      width={width}
      height={height}
    >
      {Array.isArray(path) ? (
        path.map((path, index) => (
          <path
            key={index}
            stroke={color}
            strokeLinecap="round"
            strokeWidth={strokeWidth}
            d={path}
          />
        ))
      ) : (
        <path
          stroke={color}
          strokeLinecap="round"
          strokeWidth={strokeWidth}
          d={path}
        />
      )}
    </svg>
  </div>
);

export default CustomIcon;
