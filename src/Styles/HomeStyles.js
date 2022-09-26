import { Link } from "react-router-dom";
import styled from "styled-components";

export const HomePageH1 = styled.h1`
  font-size: 4rem;
  margin-top: 2rem;
  @media (max-width: 425px) {
    font-size: 2rem;
  }
`;

export const HomePageP = styled.p`
  font-size: 2rem;
  margin-top: 3rem;
  @media (max-width: 425px) {
    font-size: 1rem;
  }
`;

export const HomeImg = styled.img`
  margin: 0;
  width: 40%;
  @media (max-width: 765px) {
    width: 50%;
    margin: 0 auto;
  }
  @media (max-width: 425px) {
    width: 80%;
  }
`;

export const HomeLink = styled(Link)`
  color: red;
  font-size: 1.5rem;
`;

export const HomePageIframe = styled.iframe`
  width: 50%;
  margin-top: 4rem;
  @media (max-width: 765px) {
    width: 100%;
  }
`;

export const HomeFlex = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (min-width: 765px) {
    flex-direction: row;
  }
`;
