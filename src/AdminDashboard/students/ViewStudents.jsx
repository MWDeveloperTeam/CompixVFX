import { Button, Menu, MenuItem } from "@mui/material";
import React, { useState } from "react";
import styled from "styled-components";
import { Constant } from "../../constant/index";
import {BsFilter} from "react-icons/bs"

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
const [DropdownText, setDropdownText] = useState("all")
const [showHideDropdown,setshowHideDropdown] = useState(false)


const drodownMenu = ()=>{
    setshowHideDropdown(!showHideDropdown)
}
const drodowntext = (e)=>{
    setshowHideDropdown(false)
    setDropdownText(e.target.id)
}

  return (
    <Section>
      <div className="StudentHeader">
        <button className="add">add</button>
        <div className="dropdownDiv">
            <button onClick={drodownMenu}>
           <BsFilter/> {DropdownText}
            </button>
            {showHideDropdown ? <div className="options">
                <div className="option" id="all" onClick={(e)=>{drodowntext(e)}}>all</div>
                <div className="option"id="web design" onClick={(e)=>{drodowntext(e)}}> web design</div>
                <div className="option"id="graphic design" onClick={(e)=>{drodowntext(e)}}>graphic design</div>
            </div>:null}
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
    padding: 2rem 0;
    justify-content: flex-end;
    gap: 2rem;
    .add {
      background-color: ${seconderyColor};
      ${Constant.ButtonStyle}
    }
    .dropdownDiv{
        position: relative;
        isolation: isolate;
        button{
      background-color: ${seconderyColor};
            ${Constant.ButtonStyle}
            display: flex;
            align-items: center;
         cursor: pointer;

            svg{
           
           pointer-events: none;
           font-size: 2rem;
       }
    }
    .options{
     width: max-content;
     padding: 1rem;
     background-color: ${seconderyColor};
     position: absolute;
     left: 50%;
     top: 6rem;
     transform: translate(-50%,0);

     .option{
         padding: 1rem;
         font-size: 1.6rem;
         border-bottom: .1rem solid #ccc;
         text-align: center;
         cursor: pointer;
     }
    }
               
      
          

            
        
    }
  }
`;
