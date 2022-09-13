import styled from "styled-components";

export const Box = styled.div`
  max-width: 100%;
  height: 100vh;
  padding: 0;
  margin: 0;
  overflow: hidden;
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
  padding: 20px;
  text-align: center;
  animation-duration: 0.3s;
  @media (max-width: 600px) {
    margin: 0 auto;
    width: 90%;
  }
`;
