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
  gap: 3rem;
  margin-bottom: 5rem;
  width: 100%;
`;

export const ContactFlexColumn = styled.div`
  flex-direction: column;
  flex-wrap: wrap;
  width: 200px;
  margin: auto;

  @media (max-width: 425px) {
    width: 110px;
  }
`;

export const ContactImgDiv = styled.div`
  width: 10%;
`;

export const ContactImg = styled.img`
  width: 5rem;
  object-fit: contain;
`;

export const ContactH1 = styled.h1`
  font-size: 2rem;
  margin: 1rem;
  padding: 0;
  @media (max-width: 425px) {
    font-size: 1rem;
  }
`;
