import React from 'react'
import styled from "styled-components";
import { Constant } from "../../constant/index";

const Header = () => {
  return (
    <AdminHeader>Header</AdminHeader>
  )
}

export default Header

const AdminHeader = styled.div`
width: calc(100% - 25rem);
height: 6rem;
background-color: ${Constant.AdminColors.seconderyColor};
position: fixed;
right: 0;
box-shadow: rgba(27, 31, 35, 0.04) 0px 1px 0px, rgba(255, 255, 255, 0.25) 0px 1px 0px inset;
`