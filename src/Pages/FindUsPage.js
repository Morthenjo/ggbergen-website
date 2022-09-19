import { BgText, Box, Flex, FlexReverse } from "../AppStyles";
import {
  FindUsImg,
  FindUsP,
  FlexRow,
  PlayStoreImg,
} from "../Styles/FindUsStyles";
import Ungdomshus from "../Images/ungdommenshus2.jpg";
import Gaten from "../Images/gaten.png";
import Kart from "../Images/kart.png";
import Google from "../Images/googleplay.png";
import Apple from "../Images/applestore.webp";
import { useTranslation } from "react-i18next";

const FindUsPage = () => {
  const { t } = useTranslation();
  return (
    <>
      <BgText>
        <Box>
          <Flex>
            <FindUsImg src={Ungdomshus} alt="Ungdommens hus sett fra veien" />
            <FindUsP>{t("findus1")}</FindUsP>
          </Flex>
          <FlexReverse>
            <FindUsImg src={Gaten} alt="Gaten i Herman Grans vei" />
            <div>
              <FindUsP>{t("findus2")}</FindUsP>
              <FlexRow>
                <a
                  href="https://play.google.com/store/apps/details?id=no.bergen.kommune.parko&hl=no&gl=US"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <PlayStoreImg src={Google} alt="Google playstore" />
                </a>
                <a
                  href="https://apps.apple.com/no/app/parkering-i-bergen/id882659332"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <PlayStoreImg src={Apple} alt="Apple store" />
                </a>
              </FlexRow>
            </div>
          </FlexReverse>
          <Flex>
            <FindUsImg src={Kart} alt="Kart for å vise veien til GGBergen" />
            <FindUsP>{t("findus3")}</FindUsP>
          </Flex>
        </Box>
      </BgText>
    </>
  );
};

export default FindUsPage;
