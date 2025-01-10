import { Loader } from "../Loader/Loader";
import cls from "./PageLoader.module.scss";

interface IPageLoader {
  className?: string;
}

export const PageLoader: React.FC<IPageLoader> = () => {
  return (
    <div className={cls.PageLoader}>
      <Loader />
    </div>
  );
};
