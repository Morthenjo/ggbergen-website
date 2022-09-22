import { Link } from "react-router-dom";
import styled from "styled-components";

export const HomePageH1 = styled.h1`
  font-size: 4rem;
  margin-top: 2rem;
`;

export const HomePageP = styled.p`
  font-size: 2rem;
  margin-top: 3rem;
`;

export const HomeImg = styled.img`
  margin: 0;
  width: 30%;
  @media (max-width: 765px) {
    width: 50%;
  }
`;

export const HomeLink = styled(Link)`
  color: red;
  font-size: 1.5rem;
`;

export const HomePageIframe = styled.iframe`
  width: 50%;
`;
