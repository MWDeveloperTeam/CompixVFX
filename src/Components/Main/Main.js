import React from "react";
import { Menu, ImageSlider, Courses, About, Placements, ImageGallery, SuccessReport, Testimonial, Contact, Footer, Helper, Top} from "../index";

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
      <Top/>
      <Footer/>
    </>
  );
};

export default Main;
