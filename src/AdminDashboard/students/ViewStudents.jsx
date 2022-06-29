import {
  TableContainer,
  Table,
  TableRow,
  TableCell,
  TableBody,
  TableHead,
  TablePagination,
} from "@mui/material";
import React, { useState } from "react";
import styled from "styled-components";
import { Constant } from "../../constant/index";
import { BsFilter, BsSearch } from "react-icons/bs";
import { GrView } from "react-icons/gr";
import { FiEdit } from "react-icons/fi";
import { MdOutlineDeleteOutline } from "react-icons/md";
// import UseAxios from "../../Components/CustomHooks/UseAxios";
import { data as usersData } from "./exampledata.js";

const {
  primaryColor,
  seconderyColor,
  seconderyColorLight,
  mainColor,
} = Constant.AdminColors;

const ViewStudents = () => {
  const [DropdownText, setDropdownText] = useState("all");
  const [showHideDropdown, setshowHideDropdown] = useState(false);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const drodownMenu = () => {
    setshowHideDropdown(!showHideDropdown);
  };
  const drodowntext = (e) => {
    setshowHideDropdown(false);
    setDropdownText(e.target.id);
  };
  const pageChange = (e, nextPage) => {
    setPage(nextPage);
  };
  const onRowsPerPageChange = (event) => {
    setRowsPerPage(event.target.value);
  };
  // getting all users
  // const usersData = UseAxios("https://jsonplaceholder.typicode.com/users",[])
  // const GalleryApi = UseAxios("https://compix-api.herokuapp.com/gallery", []);
  // console.log(GalleryApi);

  return (
    <Section>
      <div className="StudentHeader">
        <button className="add">add</button>
        <div className="dropdownDiv">
          <button onClick={drodownMenu}>
            <BsFilter />
            {DropdownText}
          </button>
          {showHideDropdown && (
            <div className="options">
              <div
                className="option"
                id="all"
                onClick={(e) => {
                  drodowntext(e);
                }}
              >
                all
              </div>
              <div
                className="option"
                id="web design"
                onClick={(e) => {
                  drodowntext(e);
                }}
              >
                web design
              </div>
              <div
                className="option"
                id="graphic design"
                onClick={(e) => {
                  drodowntext(e);
                }}
              >
                graphic design
              </div>
            </div>
          )}
        </div>
        <label htmlFor="search">
          <div className="searchDiv">
            <BsSearch />
            <input type="text" name="search" id="search" placeholder="search" />
          </div>
        </label>
      </div>
      <TableContainer className="tableContainer">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell>name</TableCell>
              <TableCell>parentage</TableCell>
              <TableCell>contact</TableCell>
              <TableCell>course</TableCell>
              <TableCell>action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {usersData
              ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((elem) => {
                return (
                  <TableRow>
                    <TableCell>{elem.id}</TableCell>
                    <TableCell>{elem.name}</TableCell>
                    <TableCell>{elem.email}</TableCell>
                    <TableCell>{elem.phone}</TableCell>
                    <TableCell>{elem.website}</TableCell>
                    <TableCell>
                      <GrView />
                      <FiEdit />
                      <MdOutlineDeleteOutline />
                    </TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[5, 10, 15,20, 25]}
              count={usersData.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={pageChange}
              onRowsPerPageChange={onRowsPerPageChange}
            />
          </TableRow>
        </Table>
      </TableContainer>
    </Section>
  );
};

export default ViewStudents;

const Section = styled.section`
  background-color: ${mainColor};
  min-height: 100%;
  text-transform: capitalize;
  padding-top: 2rem;

  .StudentHeader {
    display: flex;
    align-items: center;
    padding-bottom: 1rem;
    justify-content: flex-end;
    height: 10%;
    gap: 2rem;
    .add {
      background-color: ${seconderyColor};
      ${Constant.ButtonStyle}
    }
    .dropdownDiv {
      position: relative;
      isolation: isolate;
      button {
        background-color: ${seconderyColor};
        ${Constant.ButtonStyle}
        display: flex;
        align-items: center;
        cursor: pointer;

        svg {
          pointer-events: none;
          font-size: 2rem;
          margin-right: 1rem;
        }
      }
      .options {
        width: max-content;
        padding: 1rem;
        background-color: ${mainColor};
        position: absolute;
        left: 50%;
        top: 4rem;
        transform: translate(-50%, 0);
        box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
          rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
        border-radius: 5px;

        .option {
          padding: 1rem;
          font-size: 1.6rem;
          text-align: center;
          cursor: pointer;
          font-family: ${Constant.Fonts.primaryFont};
        }
      }
    }
    label {
      .searchDiv {
        ${Constant.ButtonStyle}
        background-color: ${seconderyColor};
        display: flex;
        align-items: center;
        gap: 1rem;

        input {
          font-size: 1.6rem;
          border: none;
          outline: none;
        }
      }
    }
  }
  .tableContainer {
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
    overflow: auto;
    height: 48rem;
    table {
      font-family: ${Constant.Fonts.primaryFont};

      th {
        background-color: ${primaryColor};
        color: ${mainColor};
        font-size: 1.5rem;
      }
      tbody {
        tr {
          background-color: ${seconderyColorLight};
          font-size: 1.6rem;
          &:nth-child(odd) {
            background-color: ${seconderyColor};
          }
          td {
            font-size: 1.2rem;
            &:last-child {
              font-size: 1.6rem;
              svg {
                margin-right: 1rem;
              }
            }
          }
        }
      }
      td {
        border: none;
        
      }
      tr:last-child td div * {
        font-size: 1.4rem;
      }
    }
  }
`;
