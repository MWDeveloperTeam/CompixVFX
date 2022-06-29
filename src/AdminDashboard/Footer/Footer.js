import React from 'react'
import styled from "styled-components";
import { Constant } from "../../constant/index";

const Footer = () => {
  return (
    <AdminHeader>Header</AdminHeader>
  )
}

export default Footer

const AdminHeader = styled.div`
width: calc(100% - 25rem);
height: 4rem;
background-color: ${Constant.AdminColors.seconderyColor};
position: fixed;
right: 0;
bottom: 0;
box-shadow: rgba(0, 0, 0, 0.06) 0px 1px 0px 0px inset;
`