import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { Link as Links } from "react-scroll";
import { Link } from "react-router-dom";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { Constant } from "../../constant/index";
import SideMenu from "../SideMenu/SideMenu";
import Login from "../Login/Login";
import { Store } from "../../StateStore";

const Menu = () => {
  const { api } = useContext(Store);

  const [dialogToggle, setDialogToggle] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [classAdd, setClassAdd] = useState("home");
  const [windowWidth, setWindowWidth] = useState(0);

  const dialogToggleFunc = () => setDialogToggle(!dialogToggle);

  useEffect(() => {
    const sliderfunc = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", sliderfunc);
  }, []);

  const toggleHandler = () => {
    setToggle(!toggle);
  };

  const hideMenu = () => setToggle(false);
  return (
    <MenuSection>
      <div className={`sideBar_container ${classAdd}`}>
        <HiOutlineMenuAlt2
          onClick={toggleHandler}
          style={
            toggle && {
              transform: "rotateZ(180deg)",
              color: Constant.Colors.seconderyColor,
            }
          }
        />
      </div>
      <div className="logo_container">
        <Link to="/">
          <img src={api[0]?.logo} alt="logo" />
        </Link>
      </div>
      <div className="menu_container">
        <ul>
          {!api[0]
            ? "loading"
            : api[0]?.menu.map((curItem) => (
                <li name={curItem.list} key={curItem._id}>
                  <Links
                    to={curItem.list}
                    href={`#${curItem.list}`}
                    smooth={true}
                    duration={1300}
                    name={curItem.list}
                    onClick={(e) => {
                      setClassAdd(e.target.name);
                    }}
                    className={curItem === classAdd ? "active" : null}
                  >
                    {curItem.list}
                  </Links>
                </li>
              ))}
        </ul>
      </div>
      <div className="login_container">
        <Link to="" onClick={dialogToggleFunc}>
          Login
        </Link>
        <Link to="">Verify Student</Link>
      </div>
      {windowWidth < 768 ? (
        <SideMenu listItems={api} toggle={toggle} hideMenu={hideMenu} />
      ) : null}
      <Login dialogToggle={dialogToggle} dialogToggleFunc={dialogToggleFunc} />
    </MenuSection>
  );
};

export default Menu;

const MenuSection = styled.section`
  width: 100%;
  height: 7rem;
  background-color: ${Constant.Colors.mainColor};
  /* opacity: 0.87; */
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-size: 1.4rem;
  font-family: ${Constant.Fonts.primaryFont};
  position: fixed;
  top: 0;
  z-index: 9622656564;

  /* sideBar Style */
  .sideBar_container {
    display: none;
    svg {
      color: #fff;
      font-size: 2.5rem;
      cursor: pointer;
      transition: ease-in-out 0.3s;
    }
  }

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
      gap: 0.2rem;
      list-style: none;
      li {
        text-transform: uppercase;
        letter-spacing: 0.1rem;

        a {
          color: #fff;
          padding: 1rem 1rem;
          border-radius: 50rem;
          cursor: pointer;
          position: relative;
          :hover {
            color: #000;
          }
          ::before {
            content: "";
            inset: 0;
            width: 0;
            background: linear-gradient(
              90deg,
              rgba(204, 163, 0, 1) 0%,
              rgba(230, 131, 0, 1) 100%
            );
            position: absolute;
            transition: cubic-bezier(0.44, -0.12, 0.34, 1.34) 0.6s;
            z-index: -1;
          }
          :hover::before {
            width: 100%;
          }
        }
        .scroll {
          color: #fff;
        }

        .active {
          background: linear-gradient(
            90deg,
            rgba(204, 163, 0, 1) 0%,
            rgba(230, 131, 0, 1) 100%
          );
          border-radius: 0;
        }
      }
    }
  }

  /* login style */
  .login_container {
    display: flex;
    gap: 1.5rem;
    font-size: 1.4rem;
    a {
      color: #fff;
      transition: ease-in-out 0.3s;
      letter-spacing: 0.1rem;
      :hover {
        color: ${Constant.Colors.seconderyColor};
      }
    }
  }

  @media only screen and (max-width: 1024px) {
    height: 6rem;
    /* sideBar Style */
    .sideBar_container {
      display: none;
      svg {
        color: #fff;
        font-size: 3.5rem;
        cursor: pointer;
      }
    }

    /* logo Style */
    .logo_container {
      img {
        width: 14rem;
      }
    }

    /* menu style */
    .menu_container {
      ul {
        gap: 0.1rem;
        li {
          a {
            padding: 0.5rem;
            font-size: 1.2rem;
          }
        }
      }
    }

    /* login style */
    .login_container {
      gap: 1em;
      font-size: 1.1rem;
    }
  }

  @media only screen and (max-width: 768px) {
    padding: 0 1.5rem;
    justify-content: space-between;
    .menu_container {
      display: none;
    }

    .sideBar_container {
      display: inherit;
    }

    .login_container {
      a {
        :last-child {
          display: none;
        }
      }
    }
  }
`;

const array = ["dssds", 500, "ghghg"];
