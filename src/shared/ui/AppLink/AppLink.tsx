import { Link, LinkProps } from "react-router-dom";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./AppLink.module.scss";

export enum AppLinkTheme {
  PRIMARY = "primary",
  SECONDARY = "secondary",
}

interface IAppLink extends LinkProps {
  className?: string;
  theme?: AppLinkTheme;
}

export const AppLink: React.FC<IAppLink> = (props) => {
  const { to, className, children, theme = AppLinkTheme.PRIMARY, ...rest } = props;

  return (
    <Link {...rest} to={to} className={classNames(cls.AppLink, { theme }, [className])}>
      {children}
    </Link>
  );
};
