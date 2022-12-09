import styled from "styled-components";

export const GalleryImg = styled.img`
  width: 100%;
  height: 100%;
`;

export const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
`;

export const ImageContainer = styled.div`
  width: 50%;
  overflow: hidden;
  @media (max-width: 765px) {
    width: 100%;
  }
`;

export const PictureBgText = styled.div`
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
    padding: 0;
    margin: 0;
    width: 100%;
    border: 1px solid rgb(0, 0, 0, 0);
  }
`;
