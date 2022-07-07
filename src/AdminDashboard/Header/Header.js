import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import image from "../../Media/p1.jpg";
import styled from "styled-components";
import { FaUserCircle, FaUser } from "react-icons/fa";
import { BiLogInCircle } from "react-icons/bi";
import { IoIosMail } from "react-icons/io";
import { makeStyles } from "@mui/styles";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Popover from "@mui/material/Popover";
import { Constant } from "../../constant/index";
import { Box } from "@mui/system";
import { Store } from "../../StateStore";

const useStyles = makeStyles({
  menu: {
    "& ul": {
      backgroundColor: Constant.AdminColors.seconderyColorLight,
      boxShadow:
        "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
    },
  },
  messageMenu: {
    maxWidth: "270px",
    backgroundColor: Constant.AdminColors.seconderyColorLight,
    boxShadow:
      "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
    fontFamily: Constant.Fonts.primaryFont,
  },
  icon: {
    display: "flex",
    alignItems: "center",
    gap: "1rem",

    "& .faIcon": {
      color: Constant.AdminColors.seconderyColor,
      width: "3rem",
      aspectRatio: "1/1",
      backgroundColor: Constant.AdminColors.lightColor,
      borderRadius: "80%",
      display: "grid",
      placeItems: "center",
      fontSize: "1.6rem",
    },

    "& .userName": {
      color: Constant.AdminColors.primaryColor,
      fontWeight: "300",
    },
  },
  userMessageWrapper: {
    cursor: "pointer",
    // "&:hover": {
    //   backgroundColor: 'red'
    // }
  },
  userMessage: {
    fontSize: "1.2rem",
    paddingLeft: "4rem",
    textAlign: "justify",

    "& a": {
      color: Constant.AdminColors.primaryColorDark,
      float: "right",
      marginTop: ".5rem",
      "&:hover": {
        color: Constant.AdminColors.lightColor,
      },
    },
  },
});

const Header = () => {
  const { sideBarState, sideBarDispatch } = useContext(Store);
  // Logout
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  // Message

  const [messaeAnchorEl, setMessageAnchorEl] = useState(null);
  const Messageopen = Boolean(messaeAnchorEl);

  const MesshandleClick = (event) => {
    setMessageAnchorEl(event.currentTarget);
  };

  const MesshandleClose = () => {
    setMessageAnchorEl(null);
  };

  const Messageid = open ? "simple-popover" : undefined;

  const classes = useStyles();
  return (
    <AdminHeader width={!sideBarState ? "calc(100% - 25rem)" : "100%"}>

      <div className="header_ations_container">
        <div className="message">
          <IoIosMail onClick={MesshandleClick} />
          <Popover
            id={Messageid}
            open={Messageopen}
            anchorEl={messaeAnchorEl}
            onClose={MesshandleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
          >
            <Box sx={{ p: 2 }} className={classes.messageMenu}>
              <div
                style={{ marginBottom: "1rem" }}
                className={classes.userMessageWrapper}
              >
                <div className={classes.icon}>
                  <h3 className="faIcon">
                    <FaUser />
                  </h3>
                  <h3 className="userName">Sawar Nabi</h3>
                </div>
                <p className={classes.userMessage}>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Ipsum,
                  <Link to="#">More</Link>
                </p>
              </div>

              <div
                style={{ marginBottom: "1rem" }}
                className={classes.userMessageWrapper}
              >
                <div className={classes.icon}>
                  <h3 className="faIcon">
                    <FaUser />
                  </h3>
                  <h3 className="userName">Sawar Nabi</h3>
                </div>
                <p className={classes.userMessage}>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Ipsum,
                  <Link to="#">More</Link>
                </p>
              </div>

              <div
                style={{ marginBottom: "1rem" }}
                className={classes.userMessageWrapper}
              >
                <div className={classes.icon}>
                  <h3 className="faIcon">
                    <FaUser />
                  </h3>
                  <h3 className="userName">Sawar Nabi</h3>
                </div>
                <p className={classes.userMessage}>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Ipsum,
                  <Link to="#">More</Link>
                </p>
              </div>
            </Box>
          </Popover>
        </div>
        <div className="admin_name">
          <h2>Hi Sawar Nabi</h2>
        </div>
        <div className="logout">
          <figure onClick={handleClick}>
            <img src={image} alt="" />
          </figure>
        </div>
        <Menu
          className={classes.menu}
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
          style={{ marginTop: "3.5rem", marginLeft: "-.5rem" }}
        >
          <MenuItem
            className="menu_items"
            style={{ fontSize: "1.5rem" }}
            onClick={handleClose}
          >
            <FaUserCircle style={{ marginRight: "1.6rem" }} /> Account
          </MenuItem>
          <MenuItem
            className="menu_items"
            style={{ fontSize: "1.5rem" }}
            onClick={handleClose}
          >
            <BiLogInCircle style={{ marginRight: "1.6rem" }} /> Logout
          </MenuItem>
        </Menu>
      </div>
    </AdminHeader>
  );
};

export default Header;

const AdminHeader = styled.div`
  font-family: ${Constant.Fonts.primaryFont};
  padding: 2rem;
  width: ${(props) => props.width};
  height: 6rem;
  background-color: ${Constant.AdminColors.seconderyColor};
  position: fixed;
  right: 0;
  box-shadow: rgba(27, 31, 35, 0.04) 0px 1px 0px,
    rgba(255, 255, 255, 0.25) 0px 1px 0px inset;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  transition: width ease-in-out 0.3s;
  z-index: 1;

  /* Header Menu Container */
  .menu_container {
    svg {
      font-size: 2.5rem;
      color: ${Constant.AdminColors.lightColor};
      cursor: pointer;
      transition: color ease-in-out 0.3s;
      &:hover {
        color: ${Constant.AdminColors.primaryColor};
      }
    }
  }

  /* Header Action Container */

  .header_ations_container {
    display: flex;
    align-items: center;
    gap: 3rem;
    .message {
      svg {
        font-size: 2.5rem;
        color: ${Constant.AdminColors.lightColor};
        cursor: pointer;
      }
    }
  }

  .admin_name {
  }

  .logout {
    figure {
      width: 3.5rem;
      aspect-ratio: 1/1;
      background-color: ${Constant.AdminColors.lightColor};
      border-radius: 50%;
      overflow: hidden;
      cursor: pointer;
      img {
        width: 5rem;
        object-fit: contain;
      }
    }
  }

  .MuiMenu-paper {
    background-color: red;
  }

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;
