import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { Constant } from "../../constant/index";
import UseAxios from "../CustomHooks/UseAxios";
import Slider from "react-slick";
import ReusableHeader from "../Reusable/ReusableHeader";
import SliderCard from "./SliderCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.css";
import { Button } from "./TestimonialButtons";
import backImg from '../../Media/p1.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Testimonial = () => {
  const [sliderHandle, setSliderHandle] = useState(window.screen.width);
  const TestimonialApi = UseAxios(
    "https://compix-api.herokuapp.com/testmonial",
    []
  );

  useEffect(() => {
    AOS.init({duration: 1500});
    const sliderfunc = () => {
      setSliderHandle(window.innerWidth);
    };
    window.addEventListener("resize", sliderfunc);
  }, []);

  const testSliderRef = useRef(null);

  const SliderSetting = {
    dots: true,
    autoplay: true,
    autoplaySpeed: 3500,
    pauseOnFocus: true,
    pauseOnHover: true,
    centerMode: true,
    centerPadding: "50px",
    pauseOnHover: true,
    pauseOnFocus: true,
    ref: testSliderRef,
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
    <Section data-aos='fade-down'>
      <div className="header_main">
        <ReusableHeader
          hText="Testimonial"
          pText="People say we are the best in the market. And we are always looking forward to maintain this decorem of ours."
        />
        <div className="slider_main">
          <div className="button_container">
            {sliderHandle > 768 && <Button testSliderProp={testSliderRef} />}
          </div>
        </div>
      </div>
      <div className="testimonial_container">
        <Slider className="testimonial_slider" {...SliderSetting}>
          {TestimonialApi?.map((elem) => (
            <SliderCard
              key={elem._id}
              username={elem.username}
              qualification={elem.qualification}
              Image={elem.Image}
              comment={elem.comment}
              name={elem.username.slice(0, 5)}
            />
          ))}
        </Slider>
      </div>
      <div className="footer_test_button">
        {sliderHandle < 768 && <Button testSliderProp={testSliderRef} />}
      </div>
    </Section>
  );
};

export default Testimonial;

const Section = styled.section`
  font-family: ${Constant.Fonts.primaryFont};
  padding: 7rem 10rem;
  background-color: ${Constant.Colors.primaryColor};
  background-image: url(${backImg});
  background-blend-mode: saturation;

  .header_main {
    .slider_main {
      position: relative;
      .button_container {
        position: absolute;
        right: 0;
        bottom: 0;
      }
    }
  }

  .testimonial_container {
    margin-top: 3rem;
  }

  .footer_test_button {
    display: flex;
    justify-content: center;
    padding-top: 4rem;
  }

  @media only screen and (max-width: 768px) {
    padding: 2rem;
    .testimonial_container {
      margin-top: 3rem;
    }
  }
`;
