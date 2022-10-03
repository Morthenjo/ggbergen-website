import styled from "styled-components";

export const FindUsImg = styled.img`
  width: 50%;
  margin: auto;
  @media (max-width: 765px) {
    width: 70%;
  }
`;

export const FindUsP = styled.p`
  margin: auto 2rem;
  font-size: 2rem;
  @media (max-width: 765px) {
    margin: 2rem 4rem;
    font-size: 1rem;
  }
  @media (max-width: 425px) {
    font-size: 1rem;
  }
`;

export const PlayStoreImg = styled.img`
  width: 30%;
`;

export const FlexRow = styled.div`
  flex-direction: row;
  margin: 2rem auto 0;
`;

export const FindUsIframe = styled.iframe`
  min-width: 50%;
  @media (max-width: 765px) {
    max-width: 100%;
    margin: auto;
  }
`;

export const FindUsFlexReverse = styled.div`
  display: flex;
  flex-direction: row-reverse;
  margin-bottom: 4rem;
  @media (max-width: 1000px) {
    flex-direction: column;
    padding: 2rem 0;
  }
`;
