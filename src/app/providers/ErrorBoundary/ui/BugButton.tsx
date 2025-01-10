import { Button } from "shared/ui/Button/Button";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

interface IBugButton {
  className?: string;
}

export const BugButton: React.FC<IBugButton> = () => {
  const [error, setError] = useState(false);
  const { t } = useTranslation();

  const onThrow = () => {
    setError(true);
  };

  useEffect(() => {
    if (error) {
      throw new Error();
    }
  }, [error]);

  return <Button onClick={onThrow}>{t("Вызвать ошибку")}</Button>;
};
