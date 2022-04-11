import React from "react";
import styled from "styled-components";
import logo from "../../Media/logo.png";
import { Link } from "react-router-dom";
import { Constant } from "../../constant/index";

const Menu = () => {
  const items = [
    "home",
    "courses",
    "about",
    "placements",
    "gallery",
    "contact",
  ];
  return (
    <MenuSection>
      <div className="logo_container">
        <img src={logo} alt="logo" />
      </div>
      <div className="menu_container">
        <ul>
          {items.map((curItem) => (
            <li>
              <Link to="">{curItem}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="login_container">
        <Link to="">Login</Link>
      </div>
    </MenuSection>
  );
};

export default Menu;

const MenuSection = styled.section`
  height: 7rem;
  background-color: ${Constant.Colors.mainColor};
  opacity: 0.9;
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-size: 1.5rem;
  font-family: ${Constant.Fonts.primaryFont};

  /* logo Style */
  .logo_container {
    img {
      width: 17rem;
    }
  }

  /* menu style */
  .menu_container {
    ul {
      display: flex;
      gap: 2rem;
      list-style: none;
      li {
        text-transform: uppercase;
        letter-spacing: 0.1rem;
        a {
          color: #fff;
        }
      }
    }
  }
`;
