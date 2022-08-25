import React, { useContext, useEffect, useState } from "react";
import { ReducerText, AdminRouterText } from "../Utils/HelperText";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import { MdDashboard, MdPayments } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { BiChevronDown } from "react-icons/bi";
import { RiCalendarTodoFill } from "react-icons/ri";
import { CgWebsite } from "react-icons/cg";
import { Constant } from "../../constant/index";
import { BsFillArrowRightSquareFill } from "react-icons/bs";
import { Store } from "../../StateStore";

const SideMenu = () => {
  const { state, dispatch, sideBarDispatch, sideBarState } = useContext(Store);
  const [resize, setResize] = useState(window.screen.width);

  const sideBarFunc = () => {
    setResize(window.innerWidth);
    if (resize <= 768) {
      sideBarDispatch({ type: "SIDE_OPEN", payload: true });
    } else {
      sideBarDispatch({ type: "SIDE_OPEN", payload: false });
    }
  };

  useEffect(() => {
    window.addEventListener("resize", sideBarFunc);
    sideBarFunc();
  }, [resize]);

  const SideBarClickHandler = () => {
    if (resize <= 768) {
      sideBarDispatch({ type: "SIDE_OPEN", payload: true });
    } else {
      sideBarDispatch({ type: "SIDE_OPEN", payload: false });
    }
  };

  return (
    <SideBar translate={!sideBarState ? null : "translateX(-25rem)"}>
      <div className="logo">
        <Link to="/admin">
          <img src="https://compix.in/images/logo.png" alt="admin" />
        </Link>
        <div className="side_bar_icon">
          <BsFillArrowRightSquareFill
            onClick={() => {
              sideBarDispatch({ type: "SIDE_OPEN", payload: !sideBarState });
            }}
          />
        </div>
      </div>
      <div className="nav_container">
        <ul>
          <li>
            <NavLink
              to={AdminRouterText.Dashboard}
              onClick={() => SideBarClickHandler()}
            >
              <MdDashboard /> Dashboard <BiChevronDown />
            </NavLink>
          </li>
          <li>
            <NavLink
              to="#"
              onClick={() => {
                if (state === ReducerText.ReduStudent) {
                  dispatch({ type: ReducerText.ReduStudent, payload: "" });
                } else {
                  dispatch({
                    type: ReducerText.ReduStudent,
                    payload: ReducerText.ReduStudent,
                  });
                }
              }}
            >
              <FaUsers /> Student <BiChevronDown />
            </NavLink>
          </li>
          {/* Student DropDown */}
          <ul
            className="dropDown"
            style={
              state === ReducerText.ReduStudent
                ? { height: "50px", overflow: "hidden" }
                : { height: "0", overflow: "hidden" }
            }
          >
            <li>
              <NavLink
                to={AdminRouterText.ViewStudent}
                onClick={() => SideBarClickHandler()}
              >
                View Students
              </NavLink>
            </li>
            <li>
              <NavLink to={AdminRouterText.RegisterStudent}>
                Register Student
              </NavLink>
            </li>
          </ul>

          <li>
            <NavLink
              to="#"
              onClick={() => {
                if (state === ReducerText.ReduAttendence) {
                  dispatch({ type: ReducerText.ReduAttendence, payload: "" });
                } else {
                  dispatch({
                    type: ReducerText.ReduAttendence,
                    payload: ReducerText.ReduAttendence,
                  });
                }
              }}
            >
              <RiCalendarTodoFill /> Attendence <BiChevronDown />
            </NavLink>
          </li>

          {/* Attendence DropDown */}

          <ul
            className="dropDown"
            style={
              state === ReducerText.ReduAttendence
                ? { height: "50px", overflow: "hidden" }
                : { height: "0", overflow: "hidden" }
            }
          >
            <li>
              <NavLink
                to={AdminRouterText.ViewAttendence}
                onClick={() => SideBarClickHandler()}
              >
                View Attendence
              </NavLink>
            </li>
            <li>
              <NavLink
                to={AdminRouterText.CreateAttendence}
                onClick={() => SideBarClickHandler()}
              >
                Create Attendence
              </NavLink>
            </li>
          </ul>
          <li>
            <NavLink
              to="#"
              onClick={() => {
                if (state === ReducerText.ReduPayment) {
                  dispatch({ type: ReducerText.ReduPayment, payload: "" });
                } else {
                  dispatch({
                    type: ReducerText.ReduPayment,
                    payload: ReducerText.ReduPayment,
                  });
                }
              }}
            >
              <MdPayments /> Payment <BiChevronDown />
            </NavLink>
          </li>

          {/* Payment DropDown */}

          <ul
            className="dropDown"
            style={
              state === ReducerText.ReduPayment
                ? { height: "50px", overflow: "hidden" }
                : { height: "0", overflow: "hidden" }
            }
          >
            <li>
              <NavLink
                to={AdminRouterText.ViewPayment}
                onClick={() => SideBarClickHandler()}
              >
                View Payment
              </NavLink>
            </li>
            <li>
              <NavLink
                to={AdminRouterText.CreatePayment}
                onClick={() => SideBarClickHandler()}
              >
                Create Payment
              </NavLink>
            </li>
          </ul>
          <li>
            <NavLink
              to={AdminRouterText.ManageWeb}
              onClick={() => SideBarClickHandler()}
            >
              <CgWebsite /> Manage Web <BiChevronDown />
            </NavLink>
          </li>
        </ul>
      </div>
    </SideBar>
  );
};

export default SideMenu;

const SideBar = styled.div`
  font-family: ${Constant.Fonts.primaryFont};
  width: 25rem;
  height: 100vh;
  background-color: ${Constant.AdminColors.primaryColor};
  position: fixed;
  top: 0;
  left: 0;
  transform: ${(props) => props.translate};
  transition: ease-in-out 0.3s;
  z-index: 96226565655;

  .logo {
    position: relative;
    height: 6rem;
    display: flex;
    justify-content: center;
    a {
      width: 90%;
      height: inherit;
      display: flex;
      align-items: center;
      justify-content: center;
      border-bottom: 0.1rem solid ${Constant.AdminColors.seconderyColor};
      img {
        width: 80%;
      }
    }

    .side_bar_icon {
      width: 3rem;
      aspect-ratio: 1/1;
      position: absolute;
      right: 0;
      border-radius: 50%;
      top: 50%;
      transform: translate(50%, -50%);
      display: flex;
      justify-content: flex-end;
      align-items: center;
      /* z-index: 96226565656565; */

      svg {
        font-size: 4rem;
        transform: translate(0.6rem);
        color: ${Constant.AdminColors.primaryColor};
        cursor: pointer;
      }
    }
  }

  .nav_container {
    /* height: 80%; */
    /* background-color: maroon; */
    padding-top: 3rem;

    > ul {
      list-style: none;
      display: flex;
      flex-direction: column;
      > li {
        transition: ease-in-out 0.3s;
        :hover {
          background-color: ${Constant.AdminColors.primaryColorDark};
          border-left: 0.4rem solid ${Constant.AdminColors.seconderyColorLight};
        }

        > a {
          color: ${Constant.AdminColors.seconderyColor};
          font-size: 1.6rem;
          display: block;
          padding: 1.5rem;

          > svg {
            &:first-child {
              margin-right: 1.5rem;
            }
            &:last-child {
              float: right;
            }
          }
        }
      }

      .dropDown {
        list-style: none;
        /* background-color: red; */
        transition: ease-in-out 0.3s;
        li {
          padding-left: 6rem;
          transition: ease-in-out 0.3s;
          &:hover {
            border-left: 0.4rem solid
              ${Constant.AdminColors.seconderyColorLight};
          }
          a {
            display: block;
            color: ${Constant.AdminColors.seconderyColor};
            font-size: 1.4rem;
            padding: 0.4rem 0;
          }
        }
      }
    }
  }
`;
