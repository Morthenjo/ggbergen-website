import styled from "styled-components";

export const FooterBox = styled.div`
  width: 100%;
  display: flex;
  background-color: #ed3232;
  margin-top: 1.5rem;
  border-top: 5px solid blue;
  @media (max-width: 1000px) {
    margin-top: 0;
  }
`;

export const FooterLogo = styled.img`
  width: 5rem;
`;

export const FooterFlex = styled.div`
  display: flex;
  width: 80%;
  margin: auto;
  justify-content: space-around;
  flex-wrap: wrap;
  @media (max-width: 765px) {
    width: 100%;
  }
`;

export const FooterDiv = styled.div`
  margin-top: 1rem;
  text-align: center;
`;

export const FooterSocialDiv = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 1rem;
  justify-content: space-around;
  gap: 2rem;
  @media (max-width: 765px) {
    width: 100%;
    gap: 0;
  }
`;

export const FooterPartnerDiv = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 1rem;
  margin-right: 5rem;
  justify-content: space-around;
  gap: 2rem;
  @media (max-width: 765px) {
    width: 100%;
    margin-right: 0;
    gap: 0;
  }
`;

export const FooterGGBergenDiv = styled.div`
  justify-content: center;
  @media (max-width: 765px) {
    width: 100%;
  }
`;

export const GGH1 = styled.h1`
  font-size: 5rem;
  text-align: center;
  color: white;
`;

export const Copy = styled.p`
  font-size: 1rem;
  text-align: center;
  color: white;
`;

export const CopySpan = styled.span`
  font-size: 1.5rem;
  font-weight: bold;
`;
