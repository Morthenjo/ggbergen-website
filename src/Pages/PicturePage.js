import { BgText } from "../AppStyles";
import Gallery from "../GalleryImages/Gallery";
import { Flex, GalleryImg, ImageContainer } from "../Styles/PictureStyles";

const PicturePage = () => {
  return (
    <>
      <BgText>
        <Flex>
          {Gallery.map((item, key) => {
            return (
              <ImageContainer key={key}>
                <GalleryImg src={item.img} alt="GG bilder" />
              </ImageContainer>
            );
          })}
        </Flex>
      </BgText>
    </>
  );
};

export default PicturePage;
