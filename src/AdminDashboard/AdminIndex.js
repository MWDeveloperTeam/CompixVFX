import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { Constant } from "../constant/index";
import { SideMenu, Header, Footer } from "./index";
import { Store } from "../StateStore";
const AdminIndex = () => {
  const { sideBarState } = useContext(Store);
  return (
    <div>
      <SideMenu />
      <Header />
      <Footer />
      <Body width={!sideBarState ? "calc(100% - 25rem)" : "100%"}>
        <Outlet />
      </Body>
    </div>
  );
};

export default AdminIndex;

const Body = styled.div`
  width: ${(props) => props.width};
  min-height: calc(100vh - 10rem);
  height: auto;
  background-color: ${Constant.AdminColors.mainColor};
  position: absolute;
  padding: 1rem 2rem;
  top: 6rem;
  right: 0;
  transition: width ease-in-out 0.3s;
  padding: 1rem 2rem;
  overflow: auto;

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;
