import React, { useContext, useEffect, useTransition } from "react";
import styled from "styled-components";
import { Constant } from "../../constant";
import Gallery from "react-grid-gallery";
import ReusableHeader from "../Reusable/ReusableHeader";
import backImg from "../../Media/p1.jpg";
import { Store } from "../../StateStore";
import { useState } from "react";
import { gallery as gallerydata } from "./Demo";
// import Loader from "../Loader/Loader";

const ImageGallery = () => {
  const { api } = useContext(Store);

  const finalImagesGallery =
    api[0]?.gallery?.map((elem) => {
      return {
        src: elem.galleryimage,
        thumbnail: elem.galleryimage,
        thumbnailWidth: Math.floor(Math.random() * (300, 250) + 250),
        // thumbnailWidth: 312,
        thumbnailHeight: 212,
      };
    }) || gallerydata;

  return (
    <Section id="gallery">
      <ReusableHeader
        hText="Gallery"
        pText={
          "With clean enviornment and expert faculty, we create professionals for tomorrow."
        }
        hColor={"#fff"}
        pColor="#fff"
      />
      <div className="gallery_container">
        <Gallery
          images={finalImagesGallery}
          margin={4}
          showImageCount={false}
          lightboxWidth={730}
        />
      </div>
    </Section>
  );
};

export default ImageGallery;

const Section = styled.section`
  font-family: ${Constant.Fonts.primaryFont};
  height: auto;
  padding: 7rem 10rem;
  background-color: ${Constant.Colors.primaryColor};
  background-image: url(${backImg});
  background-blend-mode: saturation;

  .gallery_container {
    padding-top: 3rem;
    padding-right: 0;
    overflow: hidden;
  }

  @media only screen and (max-width: 768px) {
    padding: 2rem;
  }
`;
