import React, { Suspense, lazy, useReducer } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  Dashboard,
  CreateAttendence,
  CreatePayment,
  ManageWeb,
  ViewAttendence,
  ViewPayment,
  RegisterStudent,
} from "./AdminDashboard/index";
import { AdminRouterText } from "./AdminDashboard/Utils/HelperText";
import Main from "./Components/Main/Main";
import "./Style/style.css";
import Top from "./Components/GoToTop/Top";
import Loader from "./Components/Loader/Loader";
import Home from "./StudentDashboard/Home";
import AdminIndex from "./AdminDashboard/AdminIndex";
import { Store } from "./StateStore";
import ViewStudents from "./AdminDashboard/students/ViewStudents";
import { reducer, initialState, SidebarReducer, open } from "./reducer";

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
  const [state, dispatch] = useReducer(reducer, initialState);
  const [sideBarState, sideBarDispatch] = useReducer(SidebarReducer, open);
  return (
    <>
      <Router>
        <Store.Provider
          value={{ state, dispatch, sideBarDispatch, sideBarState }}
        >
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
                <Route
                  path={AdminRouterText.Dashboard}
                  element={<Dashboard />}
                />
                <Route
                  path={AdminRouterText.ViewStudent}
                  element={<ViewStudents />}
                />
                <Route
                  path={AdminRouterText.RegisterStudent}
                  element={<RegisterStudent />}
                />
                <Route
                  path={AdminRouterText.ViewAttendence}
                  element={<ViewAttendence />}
                />
                <Route
                  path={AdminRouterText.CreateAttendence}
                  element={<CreateAttendence />}
                />
                <Route
                  path={AdminRouterText.ViewPayment}
                  element={<ViewPayment />}
                />
                <Route
                  path={AdminRouterText.CreatePayment}
                  element={<CreatePayment />}
                />
                <Route
                  path={AdminRouterText.ManageWeb}
                  element={<ManageWeb />}
                />
              </Route>
            </Routes>
          </Suspense>
        </Store.Provider>
      </Router>
    </>
  );
};

export default App;
