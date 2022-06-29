import React, { useState } from "react";
import styled from "styled-components";
import { Constant } from "../constant/index";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { BsFillCaretDownFill } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";

const StudentHeader = () => {
  
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Section>
      <div className="std_profile_container">
        <h1>
          <FaUserAlt /> Sawar Nabi
        </h1>
      </div>
      <div className="std_action_container">
        <Button
          //   id="demo-positioned-button"
          //   aria-controls={open ? "demo-positioned-menu" : undefined}
          //   aria-haspopup="true"
          //   aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
          className="action_button"
        >
          <BsFillCaretDownFill />
        </Button>
        <Menu
          //   id="demo-positioned-menu"
          //   aria-labelledby="demo-positioned-button"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
        >
          <MenuItem
            className="menu_items"
            style={{ fontSize: "1.6rem" }}
            onClick={handleClose}
          >
            Change Password
          </MenuItem>
          <MenuItem
            className="menu_items"
            style={{ fontSize: "1.6rem" }}
            onClick={handleClose}
          >
            Logout
          </MenuItem>
        </Menu>
      </div>
    </Section>
  );
};

export default StudentHeader;

const Section = styled.section`
  height: 7rem;
  background-color: #222;
  display: flex;
  justify-content: space-between;
  padding: 0 2rem;
  font-family: ${Constant.Fonts.primaryFont};
  align-items: center;

  .std_profile_container {
    h1 {
      display: flex;
      align-items: center;
      gap: 2rem;
      color: #e6e6e6;
      letter-spacing: 0.1rem;
      font-size: 1.6rem;
      svg {
        font-size: 3rem;
      }
    }
  }

  .std_action_container {
    .action_button {

    padding: 0;
    width: 0px;
      svg {
        font-size: 1.8rem;
        color: #fff;
      }
    }
  }

  @media only screen and (max-width : 768px){
  padding: 0 1rem;

  .std_profile_container {
    h1 {
      display: flex;
      align-items: center;
      gap: 2rem;
      color: #e6e6e6;
      letter-spacing: 0.1rem;
      font-size: 1.4rem;
      svg {
        font-size: 2rem;
      }
    }
  }
  }
`;
