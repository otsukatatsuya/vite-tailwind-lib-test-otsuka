import { FC, ButtonHTMLAttributes } from "react";
import cn from "clsx";
import styles from "./index.module.css";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "tertiary";
}

const Button: FC<ButtonProps> = ({
  variant = "primary",
  children,
  className,
  ...props
}) => {
  const rootClassName = cn(styles.root, styles[variant], className);
  return (
    <button className={rootClassName} {...props}>
      {children}
    </button>
  );
};

export default Button;
