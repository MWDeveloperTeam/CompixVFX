import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Demo from "./Components/Demo";
import Main from "./Components/Main/Main";
import "./Style/style.css";

const Menu = lazy(() => import("./Components/Menu/Menu"));
const ImageSlider = lazy(() => import("./Components/ImageSlider/ImageSlider"));
const Courses = lazy(() => import("./Components/Courses/Courses"));
const About = lazy(() => import("./Components/About/About"));
const Placements = lazy(() => import("./Components/Placements/Placements"));
const ImageGallery = lazy(() => import("./Components/Gallery/Gallery"));
const SuccessReport = lazy(() =>
  import("./Components/SuccessReport/SuccessReport")
);
const Testimonial = lazy(() => import("./Components/Testimonial/Testimonial"));
const Contact = lazy(() => import("./Components/Contact/Contact"));
const Footer = lazy(() => import("./Components/Footer/Footer"));

const App = () => {
  return (
    <>
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Menu/>
          <ImageSlider/>
          <Courses/>
          <About/>
          <Placements/>
          <ImageGallery/>
          <SuccessReport/>
          <Testimonial/>
          <Contact/>
          <Footer/>
          {/* <Routes>
            <Route path="/" element={<Main />} />
          </Routes> */}
        </Suspense>
      </Router>
    </>
  );
};

export default App;
