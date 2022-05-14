import React from "react";
import styled from "styled-components";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { Constant } from "../../constant/index";

export const Button = ({ coursesSliderProp }) => {
  return (
    <Buttons>
      <FiChevronLeft onClick={() => coursesSliderProp.current.slickPrev()} />
      <FiChevronRight onClick={() => coursesSliderProp.current.slickNext()} />
    </Buttons>
  );
};

const Buttons = styled.section`
  display: flex;
  gap: 1rem;
  svg {
    font-size: 4rem;
    color: #fff;
    cursor: pointer;
    background-color: ${Constant.Colors.seconderyColor};
    border-radius: 0.4rem;
    transition: ease-in-out .3s;

    &:hover {
        background-color: ${Constant.Colors.seconderyColorLight}; 
    }
  }
`;
