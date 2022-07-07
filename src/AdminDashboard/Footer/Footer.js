import React, { useContext } from 'react'
import styled from "styled-components";
import { Constant } from "../../constant/index";
import { Store } from '../../StateStore';

const Footer = () => {
  const { sideBarState } = useContext(Store);
  return (
    <AdminFooter width={!sideBarState ? "calc(100% - 25rem)" : "100%"}>
      &copy; CompixVFX {new Date().getFullYear()}
    </AdminFooter>
  )
}

export default Footer

const AdminFooter = styled.div`
font-family: ${Constant.Fonts.primaryFont};
width: ${(props) => props.width};
height: 4rem;
background-color: ${Constant.AdminColors.seconderyColor};
position: fixed;
right: 0;
bottom: 0;
box-shadow: rgba(0, 0, 0, 0.06) 0px 1px 0px 0px inset;
transition: width ease-in-out .3s;
display: grid;
place-items: center;
font-size: 1.2rem;
letter-spacing: .1rem;
color: ${Constant.AdminColors.lightColor};
z-index: 1;

@media only screen and (max-width: 768px) {
    width: 100%;
  }
`