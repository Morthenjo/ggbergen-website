import { useTranslation } from "react-i18next";
import { BgText, Box } from "../AppStyles";
import { HomeImg, HomeLink, HomePageP } from "../Styles/HomeStyles";
import Header from "../Images/GGBergenlog.png";
import { Suspense } from "react";
import Loading from "../Components/Loading";

const HomePage = () => {
  const { t } = useTranslation();

  return (
    <>
      <BgText>
        <Box>
          <HomeImg src={Header} alt="Logoen til GGBergen" />
          <Suspense fallback={<Loading />}>
            <iframe
              src="https://calendar.google.com/calendar/embed?height=400&wkst=2&bgcolor=%23ffffff&ctz=Europe%2FBerlin&showTitle=0&showDate=0&showPrint=0&showTabs=0&showCalendars=0&showTz=0&showNav=0&mode=AGENDA&src=MzA4NWUxZDQzYjU5ODVjOGU4ZDEzZTcyNTdiOGIxMTMwMzRmOGY0MDNiNzg3ZDYzYzRkMzc0MTRhOWJmYTZlMkBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%23616161"
              title="GGBergen Calendar"
              width="400"
              height="200"
              frameborder="0"
              scrolling="no"
            ></iframe>
          </Suspense>
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
