import { Suspense } from "react";
import { BgText } from "../AppStyles";
import Loading from "../Components/Loading";
import Gallery from "../GalleryImages/Gallery";
import { Flex, GalleryImg, ImageContainer } from "../Styles/PictureStyles";

const PicturePage = () => {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <BgText>
          <Flex>
            <ImageContainer>
              <GalleryImg src={Gallery.a} />
            </ImageContainer>
            <ImageContainer>
              <GalleryImg src={Gallery.b} />
            </ImageContainer>
            <ImageContainer>
              <GalleryImg src={Gallery.c} />
            </ImageContainer>
            <ImageContainer>
              <GalleryImg src={Gallery.d} />
            </ImageContainer>
            <ImageContainer>
              <GalleryImg src={Gallery.e} />
            </ImageContainer>
            <ImageContainer>
              <GalleryImg src={Gallery.f} />
            </ImageContainer>
            <ImageContainer>
              <GalleryImg src={Gallery.g} />
            </ImageContainer>
            <ImageContainer>
              <GalleryImg src={Gallery.h} />
            </ImageContainer>
            <ImageContainer>
              <GalleryImg src={Gallery.i} />
            </ImageContainer>
            <ImageContainer>
              <GalleryImg src={Gallery.j} />
            </ImageContainer>
            <ImageContainer>
              <GalleryImg src={Gallery.k} />
            </ImageContainer>
            <ImageContainer>
              <GalleryImg src={Gallery.l} />
            </ImageContainer>
            <ImageContainer>
              <GalleryImg src={Gallery.m} />
            </ImageContainer>
            <ImageContainer>
              <GalleryImg src={Gallery.n} />
            </ImageContainer>
          </Flex>
        </BgText>
      </Suspense>
    </>
  );
};

export default PicturePage;
