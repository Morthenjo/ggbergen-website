import { BgText, Box, Flex, FlexReverse } from "../AppStyles";
import {
  FindUsIframe,
  FindUsImg,
  FindUsP,
  FlexRow,
  PlayStoreImg,
} from "../Styles/FindUsStyles";
import Ungdomshus from "../Images/ungdommenshus2.jpg";
import Gaten from "../Images/gaten.png";
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
            <FindUsIframe
              src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d985.9196595146634!2d5.300466308405295!3d60.38181417110575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e2!4m5!1s0x463cfbf83ceb2dd9%3A0x77e25ec625ac182c!2sKIWI%20Hamrehj%C3%B8rnet%2C%20Gabriel%20Tischendorfs%20vei%2C%20Laksev%C3%A5g!3m2!1d60.3820668!2d5.304401899999999!4m5!1s0x463cfbf7b4fe5fb9%3A0xe38bd311a1c617d6!2sGg%20Bergen%2C%20Herman%20Grans%20vei%206%2C%205162%20Laksev%C3%A5g!3m2!1d60.3823003!2d5.2987918!5e0!3m2!1sno!2sno!4v1663832350252!5m2!1sno!2sno"
              title="GGBergen"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></FindUsIframe>
            <FindUsP>{t("findus3")}</FindUsP>
          </Flex>
        </Box>
      </BgText>
    </>
  );
};

export default FindUsPage;
