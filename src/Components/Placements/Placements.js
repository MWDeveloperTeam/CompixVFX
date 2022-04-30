import React from "react";
import { Section } from "./PlacementStyle";
import UseAxios from "../CustomHooks/UseAxios";
import { BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs";
import { Constant } from "../../constant";
import ReusableHeader from "../Reusable/ReusableHeader";

const Placements = () => {
  const placementsApi = UseAxios(
    "https://compix-api.herokuapp.com/placement",
    []
  );
  return (
    <Section>
      <ReusableHeader hColor={Constant.Colors.seconderyColor} pColor={"#222"} />
      <div className="card_container">
        {placementsApi?.map((elem) => (
          <div className="card" key={elem.id}>
            <div className="img_container">
              <img src={elem.image} alt="image" />
            </div>
            <div className="label_container">
              <h2>{elem.title}</h2>
              <p>{elem.location}</p>
            </div>
            <div className="media_container">
              <BsFacebook /> 
              <BsInstagram/>
              <BsLinkedin/>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Placements;
