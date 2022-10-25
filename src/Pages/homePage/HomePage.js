import { useTranslation } from "react-i18next";
import { BgText, Box } from "../../AppStyles";
import {
  HomeFlex,
  HomeImg,
  HomeLink,
  HomePageIframe,
  HomePageP,
} from "./HomeStyles";
import Header from "../../Images/GGBergenlog.png";

const HomePage = () => {
  const { t } = useTranslation();

  return (
    <>
      <BgText>
        <Box>
          <HomeFlex>
            <HomeImg src={Header} alt="Logoen til GGBergen" />

            <HomePageIframe
              src="https://calendar.google.com/calendar/embed?height=400&wkst=2&bgcolor=%23ffffff&ctz=Europe%2FBerlin&showTitle=0&showDate=0&showPrint=0&showTabs=0&showCalendars=0&showTz=0&showNav=0&mode=AGENDA&src=MzA4NWUxZDQzYjU5ODVjOGU4ZDEzZTcyNTdiOGIxMTMwMzRmOGY0MDNiNzg3ZDYzYzRkMzc0MTRhOWJmYTZlMkBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%23616161"
              title="GGBergen Calendar"
              height="250"
              scrolling="no"
              dates=""
            ></HomePageIframe>
          </HomeFlex>
          <HomePageP>{t("intro")}</HomePageP>
          <HomePageP>{t("intro2")}</HomePageP>
          <HomePageP>{t("intro3")}</HomePageP>
          <HomeLink
            to="/eventer"
            onClick={() => {
              window.scrollTo(0, 0);
            }}
          >
            {t("click here")}
          </HomeLink>
        </Box>
      </BgText>
    </>
  );
};

export default HomePage;
