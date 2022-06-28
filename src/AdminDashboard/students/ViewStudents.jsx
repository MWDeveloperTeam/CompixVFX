import { Button, Menu, MenuItem } from "@mui/material";
import React from "react";
import styled from "styled-components";
import { Constant } from "../../constant/index";
const {
  primaryColor,
  seconderyColor,
  primaryColorDark,
  seconderyColorLight,
  mainColor,
  boldColor,
  lightColor,
} = Constant.AdminColors;

const ViewStudents = () => {
  return (
    <Section>
      <div className="StudentHeader">
        <button className="add">add</button>
        <div className="dropdownDiv">
          <select>
            <option value="all">all</option>
            <option value="web development">web development</option>
            <option value="graphics Design">graphics Design</option>
          </select>
        </div>
        <div className="searchDiv">
          <input type="text" name="search" id="search" placeholder="search" />
        </div>
      </div>
    </Section>
  );
};

export default ViewStudents;

const Section = styled.section`
  background-color: ${mainColor};
  min-height: 60vh;
  text-transform: capitalize;
  .StudentHeader {
    display: flex;
    align-items: center;
    padding: 2rem;
    justify-content: flex-end;
    gap: 2rem;
    .add {
      background-color: ${seconderyColor};
      ${Constant.ButtonStyle}
    }
    .dropdownDiv{
        ${Constant.ButtonStyle}
      background-color: ${seconderyColor};
        
        select{
            appearance: none;
            outline: none;
            &::before{
                content: "";
            }
            
        }
    }
  }
`;
