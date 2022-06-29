import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { Constant } from "../constant/index";
import { SideMenu, Header, Footer } from "./index";

const AdminIndex = () => {
  return (
    <div>
      <SideMenu />
      <Header />
      <Footer />
      <Body>
        <Outlet />
      </Body>
    </div>
  );
};

export default AdminIndex;

const Body = styled.div`
  width: calc(100% - 25rem);
  height: calc(100vh - 10rem);
  background-color: ${Constant.AdminColors.mainColor};
  position: absolute;
  padding: 3rem 2rem;
  top: 6rem;
  right: 0;
`;
