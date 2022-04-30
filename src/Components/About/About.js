import React from "react";
import { Section } from "./AboutStyle";
import { IoArrowRedoCircle } from "react-icons/io5";
import UseAxios from "../CustomHooks/UseAxios";
import { isDisabled } from "@testing-library/user-event/dist/utils";

const About = () => {
  const aboutApi = UseAxios("https://compix-api.herokuapp.com/about", []);

  console.log(aboutApi);
  return (
    <Section>
      <div className="about_heading_container">
        <h1>Who we are</h1>
        <p>
          COMPIX trains students in industry relevent, employment-oriented
          skills through most advanced tools and technologies with the help of
          expert faculty.
        </p>
      </div>
      <div className="content_container">
        <div className="content">
          <h1>We Are Expert In</h1>
          <p>
            We are Kashmir's first premier media and entertainment tranning
            institution offers power-packed courses that help shape a student's
            creative career with tailor-made programs catering to specific
            domains.
          </p>
          <p>
            COMPIX offers a variety of relevent and comprehensive programs to
            make students ready for a successful future.
          </p>
          <ul>
            {aboutApi?.map((item, i) => (
              <li key={i}>
                <IoArrowRedoCircle /> {item.courseDuration}
              </li>
            ))}
          </ul>
        </div>
        <div className="img_container">
            <figure>
                <img src="https://compix.in/images/about.png" alt="Image" />
            </figure>
        </div>
      </div>
    </Section>
  );
};

export default About;
