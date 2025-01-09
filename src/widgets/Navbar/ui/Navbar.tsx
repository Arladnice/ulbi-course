import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Navbar.module.scss";
import { AppLink } from "shared/ui/AppLink/AppLink";
import { useTranslation } from "react-i18next";

interface INavbar {
  className?: string;
}

const Navbar = ({ className }: INavbar) => {
  const { t } = useTranslation("main");
  return (
    <div className={classNames(cls.navbar, {}, [className])}>
      <div className={cls.links}>
        <AppLink to={"/"}>{t("Главная")}</AppLink>
        <AppLink to={"/about"}>{t("О сайте")}</AppLink>
      </div>
    </div>
  );
};

export default Navbar;
