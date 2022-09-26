import styled from "styled-components";

export const EventImg = styled.img`
  width: 40%;
  height: 40%;
  margin: auto;
  @media (max-width: 765px) {
    margin: 1rem auto 3rem;
    width: 80%;
  }
`;

export const EventP = styled.p`
  margin: auto 2rem;
  font-size: 1.5rem;
  @media (max-width: 765px) {
    font-size: 1.3rem;
  }
  @media (max-width: 425px) {
    font-size: 1rem;
  }
`;

export const EventH1 = styled.h1`
  font-size: 4rem;
  margin: 2rem auto;
  border-bottom: 0.2rem solid white;
  width: 50%;
  @media (max-width: 765px) {
    width: 100%;
  }
  @media (max-width: 425px) {
    font-size: 1rem;
  }
`;
