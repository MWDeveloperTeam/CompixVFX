import React from "react";
import styled from "styled-components";
import { Constant } from "../../constant/index";
import ReusableHeader from "../Reusable/ReusableHeader";
import {FaChalkboardTeacher, FaUsers, FaBook, FaUniversity} from 'react-icons/fa'
import CountUp from "react-countup";
import UseAxios from "../CustomHooks/UseAxios";

const SuccessReport = () => {
  const SuccessApi = UseAxios("https://compix-api.herokuapp.com/success", []);

  // console.log(
  //   SuccessApi.map((elem) => {
  //     const { students, trainer, programs, placements } = elem;
  //     return Object.keys(elem);
  //   })
  // );

  return (
    <Section>
      <ReusableHeader
        hText="Success Report"
        pText="Without continual growth and progress, such words as improvement, achievement and success have no meaning. "
        pColor="#222"
        hColor={Constant.Colors.seconderyColorLight}
      />
      <div className="counter_container">
        {SuccessApi?.map((elem, i) => (
          <div key={i} className={`success_card_container ${elem.title} `}>
            <div className="number">
              <i className={elem.icon}></i><CountUp end={elem.num} duration={2} />
            </div>
            <div className="title">{elem.title}</div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default SuccessReport;

const Section = styled.section`
  font-family: ${Constant.Fonts.primaryFont};
  padding: 7rem 10rem;

  .counter_container {
    padding-top: 3rem;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;
    grid-template-areas: " students Trainer Programs Placements";

    .success_card_container {
      height: 15rem;
      background-color: ${Constant.Colors.primaryColor};
      border-radius: 0.9rem;
      box-shadow: rgba(17, 17, 26, 0.1) 0px 0px 16px;
      color: #fff;
      font-size: 2.2rem;
      text-transform: capitalize;
      letter-spacing: 0.1rem;
      border-left: .5rem solid ${Constant.Colors.seconderyColor};

      .number {
        background-color: ${Constant.Colors.primaryColor};
        height: 60%;
        border-radius: 0.6rem 0.6rem 0 0;
        display: flex;
        align-items: center;
        justify-content: center;

        i {
          color: ${Constant.Colors.seconderyColor};
          margin-right: 3rem;
          font-size: 4.5rem;
        }
      }

      .title {
        background-color: ${Constant.Colors.primaryColorLight};
        height: 40%;
        border-radius: 0 0 0.6rem 0.6rem;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }

    .students {
      grid-area: students;
    }

    .Trainer {
      grid-area: Trainer;
    }

    .Programs {
      grid-area: Programs;
    }

    .Placements {
      grid-area: Placements;
    }
  }

  @media only screen and (max-width: 995px){

  .counter_container {
    grid-template-areas: "students students Trainer Trainer" "Programs Programs Placements Placements";

    }
  }

  @media only screen and (max-width: 768px){
    padding: 2rem;
  }

  @media only screen and (max-width: 500px){

.counter_container {
  grid-template-areas: "students students students students"

   "Trainer Trainer Trainer Trainer"
    "Programs Programs Programs Programs" 
    "Placements Placements Placements Placements";
  }
}
`;
