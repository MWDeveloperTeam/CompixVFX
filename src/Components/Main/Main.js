import React from "react";
import { Menu, ImageSlider, Courses, About, Placements, ImageGallery, SuccessReport} from "../index";

const Main = () => {
  return (
    <>
      <Menu />
      <ImageSlider />
      <Courses />
      <About />
      <Placements/>
      <ImageGallery/>
      <SuccessReport/>
    </>
  );
};

export default Main;
