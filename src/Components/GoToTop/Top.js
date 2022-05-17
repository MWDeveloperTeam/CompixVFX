import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Constant } from "../../constant";
import { IoIosArrowUp } from "react-icons/io";
import { animateScroll as scroll } from "react-scroll/modules";

const Top = () => {
  const [topButton, setTopButton] = useState(0);
  useEffect(() => {
    const topfunc = () => {
      setTopButton(window.pageYOffset);
    };
    window.addEventListener("scroll", topfunc);
  }, []);
  return (
    <>
      {topButton > 800 && (
        <Section onClick={() => scroll.scrollToTop()}>
          <IoIosArrowUp />
        </Section>
      )}
    </>
  );
};

export default Top;

const Section = styled.span`
  padding: 1rem;
  background-color: ${Constant.Colors.seconderyColor};
  position: fixed;
  bottom: 5rem;
  right: 4rem;
  border-radius: 50%;
  z-index: 9622656564;
  box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px,
    rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px,
    rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;
  cursor: pointer;

  svg {
    font-size: 2.5rem;
    color: #fff;
  }
`;
