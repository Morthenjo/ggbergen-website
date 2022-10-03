import { useTranslation } from "react-i18next";
import { BgText, Box, Flex } from "../../AppStyles";
import Friday from "../../Images/fredagsevent.png";
import Saturday from "../../Images/supersmashbros.jfif";
import { EventH1, EventImg, EventP } from "./EventStyles";
import { FindUsFlexReverse } from "../findUsPage/FindUsStyles";

const EventPage = () => {
  const { t } = useTranslation();

  return (
    <BgText>
      <Box>
        <EventP>{t("event1")}</EventP>
        <EventH1>{t("friday")}</EventH1>
        <Flex>
          <EventImg src={Friday} alt="A mash up of different Fighting Games" />
          <EventP>{t("friday2")}</EventP>
        </Flex>
        <EventH1>{t("saturday")}</EventH1>
        <FindUsFlexReverse>
          <EventImg src={Saturday} alt="Super Smash Bros Ultimate" />
          <EventP>{t("saturday2")}</EventP>
        </FindUsFlexReverse>
      </Box>
    </BgText>
  );
};

export default EventPage;
