import { BgText } from "../AppStyles";
import Gallery from "../GalleryImages/Gallery";
import { Flex, GalleryImg } from "../Styles/PictureStyles";

const PicturePage = () => {
  return (
    <>
      <BgText>
        {/* <Flex> */}
        <GalleryImg src={Gallery.a} />
        <GalleryImg src={Gallery.b} />
        <GalleryImg src={Gallery.c} />
        <GalleryImg src={Gallery.d} />
        <GalleryImg src={Gallery.e} />
        <GalleryImg src={Gallery.f} />
        <GalleryImg src={Gallery.g} />
        <GalleryImg src={Gallery.h} />
        <GalleryImg src={Gallery.i} />
        <GalleryImg src={Gallery.j} />
        <GalleryImg src={Gallery.k} />
        <GalleryImg src={Gallery.l} />
        <GalleryImg src={Gallery.m} />
        <GalleryImg src={Gallery.n} />
        {/* </Flex> */}
      </BgText>
    </>
  );
};

export default PicturePage;
