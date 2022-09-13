import { useTranslation } from "react-i18next";
import { BgText } from "../AppStyles";

const HomePage = () => {
  const { t } = useTranslation();

  return (
    <>
      <BgText>
        <h1>{t("welcome")}</h1>
        <p>{t("choose")}</p>
      </BgText>
    </>
  );
};

export default HomePage;
