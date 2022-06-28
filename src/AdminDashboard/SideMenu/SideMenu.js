import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import { MdDashboard, MdPayments } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { BiChevronDown } from "react-icons/bi";
import { RiCalendarTodoFill } from "react-icons/ri";
import { CgWebsite } from "react-icons/cg";
import { Constant } from "../../constant/index";
import { Store } from "../../StateStore";

const SideMenu = () => {
  // const [studentDrop, setStudentDrop] = useState(false);
  // const [attendDrop, setAttendDrop] = useState(false);
  // const [paymentDrop, setpaymentDrop] = useState(false);
  const { state, dispatch } = useContext(Store);
  console.log(state);

  return (
    <SideBar>
      <div className="logo">
        <Link to="/admin">
          <img src="https://compix.in/images/logo.png" />
        </Link>
      </div>
      <div className="nav_container">
        <ul>
          <li>
            <NavLink to="">
              <MdDashboard /> Dashboard <BiChevronDown />
            </NavLink>
          </li>
          <li>
            <NavLink
              to=""
              // onClick={() => {
              //   setStudentDrop(!studentDrop);
              //   setAttendDrop(false);
              // }}
              onClick={() => {
                dispatch({type:"STUDENT", payload: !state})
              }}
            >
              <FaUsers /> Student <BiChevronDown />
            </NavLink>
          </li>
          {/* Student DropDown */}
          <ul
            className="dropDown"
            // style={
            //   studentDrop
            //     ? { height: "50px", overflow: "hidden" }
            //     : { height: "0", overflow: "hidden" }
            // }
            style={state ? { height: "50px", overflow: "hidden" } : { height: "0", overflow: "hidden" }}
          >
            <li>
              <NavLink to="">View Students</NavLink>
            </li>
            <li>
              <NavLink to="">Register Student</NavLink>
            </li>
          </ul>

          <li>
            <NavLink
              to=""
              // onClick={() => {
              //   setAttendDrop(!attendDrop)
              //   setStudentDrop(false);
              // }}
              onClick={() => {
                dispatch({type:"STUDENT", payload: !state})
              }}
            >
              <RiCalendarTodoFill /> Attendence <BiChevronDown />
            </NavLink>
          </li>
          {/* Attendence DropDown */}
          <ul
            className="dropDown"
            // style={
            //   attendDrop
            //     ? { height: "50px", overflow: "hidden" }
            //     : { height: "0", overflow: "hidden" }
            // }
            style={state ? { height: "50px", overflow: "hidden" } : { height: "0", overflow: "hidden" }}
          >
            <li>
              <NavLink to="">View Students</NavLink>
            </li>
            <li>
              <NavLink to="">Register Student</NavLink>
            </li>
          </ul>
          <li>
            <NavLink
              to=""
              // onClick={() => {
              //     setStudentDrop(false);
              //     setAttendDrop(false);
              //     setpaymentDrop(!paymentDrop)
              //   }}
            >
              <MdPayments /> Payment <BiChevronDown />
            </NavLink>
          </li>
          {/* Payment DropDown */}
          <ul
            className="dropDown"
            // style={
            //   paymentDrop
            //     ? { height: "50px", overflow: "hidden" }
            //     : { height: "0", overflow: "hidden" }
            // }
          >
            <li>
              <NavLink to="">View Students</NavLink>
            </li>
            <li>
              <NavLink to="">Register Student</NavLink>
            </li>
          </ul>
          <li>
            <NavLink to="">
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
      border-bottom: 0.1rem solid ${Constant.AdminColors.seconderyColor};
      img {
        width: 80%;
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
