import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Menu } from "./SideMenuStyle";
import { BsFacebook, BsYoutube, BsTwitter, BsInstagram } from "react-icons/bs";

const SideMenu = ({ listItems, toggle}) => { 
  return (
    <Menu translate={!toggle ? "-100%" : "0%"}>
      <div className="main_container">
        <ul>
          {listItems.map((elem, index) => (
            <li key={index}>
              <Link to="">{elem}</Link>
            </li>
          ))}
        </ul>
        <div className="social_media_container">
          <div className="take_test">
            <Link to="">Verify Student</Link>
          </div>
          <div className="social_meida">
            <ul>
              <li>
                <Link to="">
                  <BsFacebook />
                </Link>
              </li>
              <li>
                <Link to="">
                  <BsYoutube />
                </Link>
              </li>
              <li>
                <Link to="">
                  <BsTwitter />
                </Link>
              </li>
              <li>
                <Link to="">
                  <BsInstagram />
                </Link>
              </li>
            </ul>
          </div>
          <div className="copy_right">
            <p>&copy; CompixVFX {new Date().getFullYear()}</p>
          </div>
        </div>
      </div>
    </Menu>
  );
};
export default SideMenu;
