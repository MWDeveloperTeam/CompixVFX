import React from "react";
import { Menu, ImageSlider, Courses, About, Placements, ImageGallery, SuccessReport, Testimonial, Contact, Footer} from "../index";

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
      <Testimonial/>
      <Contact/>
      <Footer/>
    </>
  );
};

export default Main;
