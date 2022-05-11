import React from "react";
import styled from "styled-components";
import UseAxios from "../CustomHooks/UseAxios";
import { Constant } from "../../constant";
import Gallery from "react-grid-gallery";
import ReusableHeader from "../Reusable/ReusableHeader";

const ImageGallery = () => {
  const GalleryApi = UseAxios("https://compix-api.herokuapp.com/gallery", []);

  const finalImagesGallery = GalleryApi?.map((elem) => {
    return {
      src: elem.galleryimage,
      thumbnail: elem.galleryimage,
    //   thumbnailWidth: Math.floor(Math.random() * (300, 250) + 250),
    //   thumbnailWidth: 800,
    //   thumbnailHeight: 512,
    };
  });

  return (
    <Section>
      <ReusableHeader
        hText="Gallery"
        pText={
          "With clean enviornment and expert faculty, we create professionals for tomorrow."
        }
        hColor={"#fff"}
        pColor="#fff"
      />
      <div className="gallery_container">
        <Gallery images={finalImagesGallery} margin={4} showImageCount={false}/>
      </div>
    </Section>
  );
};

export default ImageGallery;

const Section = styled.section`
clip-path: polygon(0 6%, 100% 0, 100% 94%, 0 100%);
font-family: ${Constant.Fonts.primaryFont};
  height: auto;
  padding: 7rem 10rem;
  /* overflow: auto; */
  background-color: ${Constant.Colors.primaryColor};

  .gallery_container {
    padding-top: 3rem;
    padding-right: 0;
    overflow: hidden;
    /* background-color: red; */
  }

  @media only screen and (max-width: 768px) {
  padding: 3rem;
  }
`;
