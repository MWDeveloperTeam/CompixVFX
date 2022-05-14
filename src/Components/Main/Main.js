import React from "react";
import { Menu, ImageSlider, Courses, About, Placements, ImageGallery, SuccessReport, Testimonial, Contact, Footer, Helper} from "../index";

const Main = () => {
  return (
    <>
      <Menu />
      <Helper/>
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
