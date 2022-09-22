import {
  Copy,
  CopySpan,
  FooterBox,
  FooterDiv,
  FooterFlex,
  FooterGGBergenDiv,
  FooterLogo,
  FooterPartnerDiv,
  FooterSocialDiv,
  GGH1,
} from "../Styles/FooterStyles";
import Youtube from "../Images/youtube.png";
import Twitch from "../Images/twitch.png";
import Discord from "../Images/discord.png";
import Facebook from "../Images/facebook.png";
import Bergen from "../Images/bergenkommune.png";
import Hyperion from "../Images/hyperion.png";
import BWdesign from "../Images/bwdesign.png";

const Footer = () => {
  return (
    <>
      <FooterBox>
        <FooterFlex>
          <FooterSocialDiv>
            <FooterDiv>
              <a
                href="https://www.twitch.tv/ggbergentv"
                target="_blank"
                rel="noreferrer noopener"
              >
                <FooterLogo src={Twitch} alt="Twitch" />
              </a>
            </FooterDiv>
            <FooterDiv>
              <a
                href="https://discord.gg/UwUwsFa"
                target="_blank"
                rel="noreferrer noopener"
              >
                <FooterLogo src={Discord} alt="Discord" />
              </a>
            </FooterDiv>

            <FooterDiv>
              <a
                href="https://www.youtube.com/channel/UClmhGFeQGnNYkG833jn3ssg"
                target="_blank"
                rel="noreferrer noopener"
              >
                <FooterLogo src={Youtube} alt="Youtube" />
              </a>
            </FooterDiv>
            <FooterDiv>
              <a
                href="https://www.facebook.com/ggbergen/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <FooterLogo src={Facebook} alt="Facebook" />
              </a>
            </FooterDiv>
          </FooterSocialDiv>
          <FooterGGBergenDiv>
            <GGH1>GG BERGEN</GGH1>
            <Copy>
              <CopySpan>©</CopySpan> - GGBergen
            </Copy>
          </FooterGGBergenDiv>
          <FooterPartnerDiv>
            <FooterDiv>
              <a
                href="https://www.bergen.kommune.no/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <FooterLogo src={Bergen} alt="Bergen Våpenskjold" />
              </a>
            </FooterDiv>
            <FooterDiv>
              <a
                href="http://bwdesign.no/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <FooterLogo src={BWdesign} alt="Black and white design AS" />
              </a>
            </FooterDiv>

            <FooterDiv>
              <a
                href="https://n4f.no/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <FooterLogo src={Hyperion} alt="Hyperion" />
              </a>
            </FooterDiv>
          </FooterPartnerDiv>
        </FooterFlex>
      </FooterBox>
    </>
  );
};

export default Footer;
