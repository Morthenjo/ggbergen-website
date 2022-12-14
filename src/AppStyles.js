import styled from "styled-components";
import Background from "./Images/bakgrunn.jfif";

export const Box = styled.div`
  width: 80%;
  margin: 4rem auto;
  @media (max-width: 1000px) {
    width: 90%;
  }
`;

export const Flex = styled.div`
  display: flex;
  margin-bottom: 4rem;
  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

export const FlexReverse = styled.div`
  display: flex;
  flex-direction: row-reverse;
  margin-bottom: 4rem;
  @media (max-width: 1000px) {
    flex-direction: column;
    border-bottom: 2px solid white;
    border-top: 2px solid white;
    padding: 2rem 0;
  }
`;

export const BgText = styled.div`
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.6);
  color: white;
  font-weight: bold;
  border: 3px solid #f1f1f1;
  z-index: 2;
  width: 80%;
  margin: 1% auto 0;
  text-align: center;
  animation-duration: 0.3s;
  @media (max-width: 1000px) {
    padding: 5% 0 0;
    margin: 0;
    width: 100%;
    border: 1px solid rgb(0, 0, 0, 0);
  }
`;

export const BgImg = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)),
    url(${Background});
  height: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  @media (min-width: 1000px) {
    background-position: center;
    background-attachment: fixed;
  }
`;

export const LoadingBg = styled.div`
  background-color: black;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoadingH1 = styled.h1`
  color: white;
  font-size: 3rem;
  font-weight: bold;
`;

export const LoadingBall = styled.div`
  :empty {
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;
    margin: auto;
  }
  ::after {
    content: " ";
    display: block;
    border-radius: 50%;
    width: 0;
    height: 0;
    margin: 8px;
    box-sizing: border-box;
    border: 32px solid #fff;
    border-color: #fff transparent #fff transparent;
    animation: lds-hourglass 1.2s infinite;
  }
  @keyframes lds-hourglass {
    0% {
      transform: rotate(0);
      animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    }
    50% {
      transform: rotate(900deg);
      animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    }
    100% {
      transform: rotate(1800deg);
    }
  }
`;
