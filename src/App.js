import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Demo from "./Components/Demo";
import Main from "./Components/Main/Main";
import "./Style/style.css";
import Top from "./Components/GoToTop/Top";
import Loader from "./Components/Loader/Loader";
import Home from "./StudentDashboard/Home";
import AdminIndex from "./AdminDashboard/AdminIndex";
import ViewStudents from "./AdminDashboard/students/ViewStudents";

const Menu = lazy(() => import("./Components/Menu/Menu"));
const Helper = lazy(() => import("./Components/Helper/Helper"));
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
        <Suspense fallback={<Loader />}>
          {/* <Menu />
            <Helper />
            <ImageSlider />
            <Courses />
            <About />
            <Placements />
            <ImageGallery />
            <SuccessReport />
            <Testimonial />
            <Contact />
            <Top />
            <Footer /> */}

          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/login" element={<Home />} />

            <Route path="/admin" element={<AdminIndex />}>
              <Route path="students" element={<ViewStudents />} />

              
            </Route>
          </Routes>
        </Suspense>
      </Router>
    </>
  );
};

export default App;
