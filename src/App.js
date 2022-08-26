import React, { Suspense, useReducer } from "react";
import UseAxios from "./Components/CustomHooks/UseAxios";
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
// import Top from "./Components/GoToTop/Top";
import Loader from "./Components/Loader/Loader";
import Home from "./StudentDashboard/Home";
import AdminIndex from "./AdminDashboard/AdminIndex";
import { Store } from "./StateStore";
import ViewStudents from "./AdminDashboard/students/ViewStudents";
import { reducer, initialState, SidebarReducer, open } from "./reducer";

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [sideBarState, sideBarDispatch] = useReducer(SidebarReducer, open);
  const api = UseAxios("https://compix-api.herokuapp.com/api", []);

  console.log(api, "app.js/line no 28");

  // provider data
  const providerData = { state, dispatch, sideBarDispatch, sideBarState, api };

  return (
    <>
      <Router>
        <Store.Provider value={providerData}>
          <Suspense fallback={<Loader />}>
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
