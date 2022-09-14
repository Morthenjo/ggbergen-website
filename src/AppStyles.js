import styled from "styled-components";

export const Box = styled.div`
  width: 80%;
  margin: 4rem auto;
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
  @media (max-width: 765px) {
    padding: 0;
    margin: 0;
    width: 100%;
  }
`;

export const Hidden = styled.div`
  width: 90%;
`;
