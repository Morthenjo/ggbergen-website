import styled from "styled-components";

export const ContactP = styled.p`
  font-size: 2rem;
  margin: 8rem 0;
  @media (max-width: 765px) {
    font-size: 1rem;
  }
  @media (max-width: 425px) {
    font-size: 1rem;
  }
`;

export const ContactFlex = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 5rem;
  width: 100%;
`;

export const ContactFlexColumn = styled.div`
  flex-direction: column;
  width: 50%;
  margin: auto;

  @media (max-width: 425px) {
    width: 70%;
  }
`;

export const ContactImgDiv = styled.div`
  width: 10%;
`;

export const ContactImg = styled.img`
  width: 50%;
`;

export const ContactH1 = styled.h1`
  font-size: 2rem;
  margin: 1rem;
  padding: 0;
  @media (max-width: 425px) {
    font-size: 1.5rem;
  }
`;
