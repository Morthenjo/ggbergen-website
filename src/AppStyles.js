import styled from "styled-components";

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
  background-color: rgba(0, 0, 0, 0.4);
  color: white;
  font-weight: bold;
  border: 3px solid #f1f1f1;
  z-index: 2;
  width: 80%;
  margin: 1% auto 0;
  text-align: center;
  animation-duration: 0.3s;
  @media (max-width: 1000px) {
    padding: 0;
    margin: 0;
    width: 100%;
  }
`;

export const Hidden = styled.div`
  width: 90%;
`;