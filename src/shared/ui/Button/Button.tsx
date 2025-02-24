import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Button.module.scss";
import { FC } from "react";

export enum ThemeButton {
  CLEAR = "clear",
  OUTLINE = "outline",
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ThemeButton;
}

export const Button: FC<ButtonProps> = (props) => {
  const { className, children, theme, ...rest } = props;

  return (
    <button className={classNames(cls.Button, { [cls[theme]]: true }, [className])} {...rest}>
      {children}
    </button>
  );
};
