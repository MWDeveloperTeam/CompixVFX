import React from "react";
import StudentHeader from "./StudentHeader";
import styled from "styled-components";
import Attendence from "./Attendence";
import Payment from "./Payment";
import Course from "./Course";
import Certificate from "./Certificate";
import StuFooter from "./StuFooter";

const Home = () => {
  return (
    <Section>
      <StudentHeader />
      <Attendence />
      <div className="att_pay_cou_container">
        <Payment />
        <Course />
        <Certificate />
      </div>
      <StuFooter />
    </Section>
  );
};

export default Home;

const Section = styled.section`
  .att_pay_cou_container {
    /* background-color: red; */
    /* height: 400px; */
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    padding: 2rem;
    height: 26rem;
  }

  @media only screen and (max-width: 1150px) {
    .att_pay_cou_container {
      height: auto;
      margin-bottom: 6rem;
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media only screen and (max-width: 768px) {
    .att_pay_cou_container {
      height: auto;
      /* margin-bottom: 5rem; */
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;
