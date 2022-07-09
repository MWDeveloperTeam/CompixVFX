import React from "react";
import { Constant } from "../../constant";
import styled from "styled-components";

const Button = ({ text, action }) => {
  return <ActionButton onClick={action}>{text}</ActionButton>;
};

export default Button;

const ActionButton = styled.button`
  padding: 1rem 3rem;
  border: none;
  cursor: pointer;
  color: ${Constant.AdminColors.lightColor};
  background-color: ${Constant.AdminColors.seconderyColor};
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
    rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
  font-family: ${Constant.Fonts.primaryFont};
  font-size: 1.4rem;
  border-radius: 100vmax;
  text-transform: capitalize;
  transition: background-color ease-in-out 0.3s;
  display: flex;
  align-items: center;
  gap: 1rem;

  svg {
    font-size: 1.8rem;
  }

  &:hover {
    background-color: ${Constant.AdminColors.mainColor};
  }
`;
