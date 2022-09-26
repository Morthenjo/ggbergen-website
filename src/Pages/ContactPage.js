import { useTranslation } from "react-i18next";
import { BgText, Box } from "../AppStyles";
import {
  ContactFlex,
  ContactFlexColumn,
  ContactH1,
  ContactImg,
  ContactP,
} from "../Styles/ContactStyles";
import Discord from "../Images/discordlogo.png";
import Facebook from "../Images/facebook.png";
import Twitch from "../Images/twitch.png";
import Youtube from "../Images/youtube.png";

const ContactPage = () => {
  const { t } = useTranslation();
  return (
    <>
      <BgText>
        <Box>
          <ContactFlex>
            <ContactFlexColumn>
              <a
                href="https://discord.gg/UwUwsFa"
                target="_blank"
                rel="noreferrer noopener"
              >
                <ContactImg src={Discord} alt="Discord" />
              </a>
              <ContactH1>Discord</ContactH1>
            </ContactFlexColumn>
            <ContactFlexColumn>
              <a
                href="https://www.facebook.com/ggbergen/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <ContactImg src={Facebook} alt="Facebook" />
              </a>

              <ContactH1>Facebook</ContactH1>
            </ContactFlexColumn>
            <ContactFlexColumn>
              <a
                href="https://www.twitch.tv/ggbergentv"
                target="_blank"
                rel="noreferrer noopener"
              >
                <ContactImg src={Twitch} alt="Twitch" />
              </a>

              <ContactH1>Twitch</ContactH1>
            </ContactFlexColumn>
            <ContactFlexColumn>
              <a
                href="https://www.youtube.com/channel/UClmhGFeQGnNYkG833jn3ssg"
                target="_blank"
                rel="noreferrer noopener"
              >
                <ContactImg src={Youtube} alt="Youtube" />
              </a>

              <ContactH1>Youtube</ContactH1>
            </ContactFlexColumn>
          </ContactFlex>
          <ContactP>{t("contact1")}</ContactP>
          <ContactP>{t("contact2")}</ContactP>
        </Box>
      </BgText>
    </>
  );
};

export default ContactPage;
