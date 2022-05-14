import React, { useEffect, useRef, useState } from "react";
import UseAxios from "../CustomHooks/UseAxios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.css";
import Card from "./Card";
import { Course } from "./Style";
import ReusableHeader from "../Reusable/ReusableHeader";
import { Constant } from "../../constant";
import { Button } from "./CoursesButtons";

const Courses = () => {
  const [sliderHandle, setSliderHandle] = useState(window.screen.width);
  const coursesApi = UseAxios("https://compix-api.herokuapp.com/courses", []);

  useEffect(() => {
    const sliderfunc = () => {
      setSliderHandle(window.innerWidth);
    };
    window.addEventListener("resize", sliderfunc)
  }, []);

  const coursesSliderRef = useRef(null);

  const SliderSetting = {
    centerPadding: "300px",
    slidesToShow: 4,
    infinite: false,
    ref: coursesSliderRef,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 880,
        settings: {
          slidesToShow: 2,
        },
      },

      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <Course>
      <div className="content_container">
        <ReusableHeader
          hText="What's Best For You"
          pText="We offer a variety of relevent and comprehensive programs to make a
            student ready for a successful future."
          hColor={Constant.Colors.seconderyColor}
          pColor="#222"
        />
        <div className="button_container">
          {sliderHandle > 768 && (
            <Button coursesSliderProp={coursesSliderRef} />
          )}
        </div>
      </div>
      <div className="card_container" style={{ paddingTop: "3rem" }}>
        <Slider {...SliderSetting}>
          {coursesApi?.map(({ _id, title, label, icon }) => (
            <div style={{ padding: "1rem", backgroundColor: "red" }} key={_id}>
              <Card title={title} label={label} icon={icon} />
            </div>
          ))}
        </Slider>
      </div>
      <div className="botton_course_slider_handle">
        {sliderHandle < 768 && <Button coursesSliderProp={coursesSliderRef} />}
      </div>
    </Course>
  );
};

export default Courses;
