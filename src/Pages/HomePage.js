import { useTranslation } from "react-i18next";
import { BgText, Box } from "../AppStyles";
import { HomeImg, HomeLink, HomePageP } from "../Styles/HomeStyles";
import Header from "../Images/GGBergenlog.png";

const HomePage = () => {
  const { t } = useTranslation();

  return (
    <>
      <BgText>
        <Box>
          <HomeImg src={Header} alt="Logoen til GGBergen" />
          <HomePageP>{t("intro")}</HomePageP>
          <HomePageP>{t("intro2")}</HomePageP>
          <HomePageP>{t("intro3")}</HomePageP>
          <HomeLink to="/eventer">{t("click here")}</HomeLink>
        </Box>
      </BgText>
    </>
  );
};

export default HomePage;
