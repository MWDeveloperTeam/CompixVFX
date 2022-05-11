import React from "react";
import styled from "styled-components";
import { Constant } from "../../constant/index";
import UseAxios from "../CustomHooks/UseAxios";
import Slider from "react-slick";
import ReusableHeader from "../Reusable/ReusableHeader";
import SliderCard from "./SliderCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.css";

const Testimonial = () => {
  const TestimonialApi = UseAxios(
    "https://compix-api.herokuapp.com/testmonial",
    []
  );

  const SliderSetting = {
    dots: true,
    autoplay: true,
    autoplaySpeed: 3500,
    pauseOnFocus: true,
    pauseOnHover: true,
    centerMode: true,
    centerPadding: "50px",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          centerMode: false,
          centerPadding: "0",
        },
      },
    ],
  };
  return (
    <Section>
      <ReusableHeader
        hText="Testimonial"
        pText="People say we are the best in the market. And we are always looking forward to maintain this decorem of ours."
      />
      <div className="testimonial_container">
        <Slider className="testimonial_slider" {...SliderSetting}>
          {TestimonialApi?.map((elem) => (
            <SliderCard
              username={elem.username}
              qualification={elem.qualification}
              Image={elem.Image}
              comment={elem.comment}
              name={elem.username.slice(0, 5)}
            />
          ))}
        </Slider>
      </div>
    </Section>
  );
};

export default Testimonial;

const Section = styled.section`
  font-family: ${Constant.Fonts.primaryFont};
  padding: 7rem 10rem;
  background-color: ${Constant.Colors.primaryColor};

  .testimonial_container {
    margin-top: 3rem;
  }

  @media only screen and (max-width: 768px) {
    font-family: ${Constant.Fonts.primaryFont};
    padding: 3rem;
    background-color: ${Constant.Colors.primaryColor};

    .testimonial_container {
      margin-top: 3rem;
    }
  }
`;
