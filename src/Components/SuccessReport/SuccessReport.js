import React from "react";
import styled from "styled-components";
import { Constant } from "../../constant/index";
import ReusableHeader from "../Reusable/ReusableHeader";
import CountUp from "react-countup";
import UseAxios from "../CustomHooks/UseAxios";

const SuccessReport = () => {
    // [{students},{trainer},{programs},{placements}]
  const SuccessApi = UseAxios("https://compix-api.herokuapp.com/success", []);

  console.log(SuccessApi.map(elem => {
      const {students,trainer,programs,placements}=elem
      return Object.keys(elem)
  }));


  return (
    <Section>
      <ReusableHeader
        hText="Success Report"
        pText="Without continual growth and progress, such words as improvement, achievement and success have no meaning. "
        pColor="#222"
        hColor={Constant.Colors.seconderyColorLight}
      />
      <div className="counter_container">
        <CountUp end={300} duration={5} />
        {SuccessApi?.map((elem, i) => (
            <>
            <div>{elem.students}</div>
            </>
            
        ))}
      </div>
    </Section>
  );
};

export default SuccessReport;

const Section = styled.section`
  font-family: ${Constant.Fonts.primaryFont};
  padding: 7rem 10rem;
`;
