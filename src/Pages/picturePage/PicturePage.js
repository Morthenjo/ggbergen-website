import Gallery from "../../GalleryImages/Gallery";
import {
  Flex,
  GalleryImg,
  ImageContainer,
  PictureBgText,
} from "./PictureStyles";

const PicturePage = () => {
  return (
    <>
      <PictureBgText>
        <Flex>
          {Gallery.map((item, key) => {
            return (
              <ImageContainer key={key}>
                <GalleryImg src={item.img} alt="GG bilder" />
              </ImageContainer>
            );
          })}
        </Flex>
      </PictureBgText>
    </>
  );
};

export default PicturePage;
