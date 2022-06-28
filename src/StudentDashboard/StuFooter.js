import React from "react";
import styled from "styled-components";
import { Constant } from "../constant";

const StuFooter = () => {
  return <Footer>&copy; CompixVFX {new Date().getFullYear()}</Footer>;
};

export default StuFooter;

const Footer = styled.div`
  font-family: ${Constant.Fonts.primaryFont};
  padding: 2rem;
  position: fixed;
  bottom: 0;
  background-color: #333;
  width: 100%;
  text-align: center;
  color: #fff;
  font-size: 1.6rem;
  letter-spacing: 0.1rem;
`;
