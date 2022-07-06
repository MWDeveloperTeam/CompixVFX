import React, { useContext } from 'react'
import styled from "styled-components";
import { Constant } from "../../constant/index";
import { Store } from '../../StateStore';

const Footer = () => {
  const { sideBarState } = useContext(Store);
  return (
    <AdminHeader width={!sideBarState ? "calc(100% - 25rem)" : "100%"}>Footer</AdminHeader>
  )
}

export default Footer

const AdminHeader = styled.div`
width: ${(props) => props.width};
height: 4rem;
background-color: ${Constant.AdminColors.seconderyColor};
position: fixed;
right: 0;
bottom: 0;
box-shadow: rgba(0, 0, 0, 0.06) 0px 1px 0px 0px inset;
transition: width ease-in-out .3s;

@media only screen and (max-width: 768px) {
    width: 100%;
  }
`