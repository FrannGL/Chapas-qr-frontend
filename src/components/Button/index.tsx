import styles from "./styles.module.scss";

export interface ButtonProps {
  title?: string;
  icon?: JSX.Element;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
  disabled?: boolean;
  value?: string;
  id?: number;
}

const Button = ({
  title,
  onClick,
  className,
  disabled = false,
  icon,
}: ButtonProps) => {
  const handleClick = () => {
    if (onClick) {
      onClick;
    }
  };

  const classes = className ? `${styles[className]}` : styles.btn;

  return (
    <button className={classes} onClick={handleClick} disabled={disabled}>
      {/* {className === "reset" && <Image src={refreshIcon} alt='Refresh' width={22} height={22} />} */}
      {title && title}
      {icon && icon}
    </button>
  );
};

export default Button;
