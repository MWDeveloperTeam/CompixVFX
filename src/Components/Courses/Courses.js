import React, { useState } from "react";
import UseAxios from "../CustomHooks/UseAxios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './style.css'
import Card from "./Card";
import { Course } from "./Style";

const Courses = () => {
  const coursesApi = UseAxios("https://compix-api.herokuapp.com/courses", []);

  const SliderSetting= {
    centerPadding: "300px",
    slidesToShow: 4,
    infinite: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 880,
        settings: {
          slidesToShow: 2,
        }
      },

      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        }
      },
    ]
  }
  return (
    <Course>
      <div className="content_container">
        <div className="courses_title_container">
          <h1>What's Best For You</h1>
          <p>
            We offer a variety of relevent and comprehensive programs to make a
            student ready for a successful future.
          </p>
        </div>
        <div className="courses_slider_arrows_container"></div>
      </div>
      <div className="card_container" style={{ paddingTop: "3rem" }}>
        <Slider {...SliderSetting} >
          {coursesApi?.map(({ _id, title, label, icon }) => (
            <div style={{ padding: "1rem", backgroundColor: "red" }} key={_id}>
              <Card title={title} label={label} icon={icon} />
            </div>
          ))}
        </Slider>
      </div>
    </Course>
  );
};

export default Courses;
