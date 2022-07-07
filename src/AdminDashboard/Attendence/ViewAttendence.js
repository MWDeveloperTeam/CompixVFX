import React from "react";
import { Constant } from "../../constant";
import styled from "styled-components";
import Button from "../Common/Button";
import FilterButton from "../Common/FilterButton";
import {BsFilter} from 'react-icons/bs'
import {RiSearch2Line} from 'react-icons/ri'
import Search from "../Common/Search";

const ViewAttendence = () => {
  return (
    <Section>
      <div className="view_attend_header">
        <Button text="Add" action={() => alert("this is Add button ")}/>
        <FilterButton text="filter" icon={<BsFilter/>}/>
        <Search icon={<RiSearch2Line/>}/>
      </div>
      <div className="view_table_container"></div>
    </Section>
  );
};

export default ViewAttendence;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 3rem;

  .view_attend_header{
    display: flex;
    justify-content: flex-end;
    gap: 2rem;
  }

  .view_table_container {
    
  }
`;
