import React from "react";
import styled from "styled-components";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { Constant } from "../../constant/index";

export const LeftButton = ({sliderFunc}) => {
  return (
    <ButtonLeft>
      <FiChevronLeft onClick={() => sliderFunc.current.slickPrev()}/>
      <FiChevronRight onClick={() => sliderFunc.current.slickNext()}/>
    </ButtonLeft>
  );
};

const ButtonLeft = styled.section`
  position: absolute;
  right:2rem;
  bottom: 0;
  z-index: 999999999999999;
  svg {
    font-size: 4rem;
    color: ${Constant.Colors.seconderyColor};
    cursor: pointer;
    z-index: 999999999999;
    pointer-events: visible;
  }

  @media only screen and (max-width: 768px){
   display: none;
  }
`;

