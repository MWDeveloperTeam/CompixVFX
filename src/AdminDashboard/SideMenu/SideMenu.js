import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Constant } from "../../constant/index";

const SideMenu = () => {
  return (
    <SideBar>
      <div className="logo">
        <Link to="/admin">
          <img src="https://compix.in/images/logo.png" />
        </Link>
      </div>
      <div className="nav_container">

      </div>
    </SideBar>
  );
};

export default SideMenu;

const SideBar = styled.div`
  width: 25rem;
  height: 100vh;
  background-color: ${Constant.AdminColors.primaryColor};
  position: fixed;
  top: 0;
  left: 0;

  .logo {
    height: 6rem;
    display: flex;
    justify-content: center;
    a {
      width: 90%;
      height: inherit;
      display: flex;
      align-items: center;
      justify-content: center;
      border-bottom: 0.1rem solid #fff;
      img {
        width: 80%;
      }
    }
  }

  .nav_container {
    height: 80%;
    background-color: maroon;
  }
`;
