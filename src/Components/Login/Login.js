import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { RiCloseFill } from "react-icons/ri";
import { MdChevronLeft } from "react-icons/md";
import styled from "styled-components";
import { Constant } from "../../constant";
import ForgotPassword from "./ForgotPassword";

const Login = ({ dialogToggle, dialogToggleFunc }) => {
  const [forgotPassword, setForgotPassword] = useState(false);
  const labelStyle = {
    fontSize: 16,
    backgroundColor: "#fff",
  };
  return (
    <Dialog open={dialogToggle} style={{ zIndex: "96226565656565" }} fullWidth>
      <LoginCard>
        <form action="">
          <div className={forgotPassword ? 'closeDialog' : 'forgotDialog'} >
            {!forgotPassword ? (
              <RiCloseFill
                onClick={() => {
                  dialogToggleFunc();
                  setForgotPassword(false);
                }}
              />
            ) : (
              <>
                <MdChevronLeft onClick={() => {
                    setForgotPassword(false);
                  }}/>
                <RiCloseFill
                  onClick={() => {
                    dialogToggleFunc();
                    setForgotPassword(false);
                  }}
                />
              </>
            )}
          </div>
          {!forgotPassword ? (
            <>
              <div className="login_header">
                <h1>Login</h1>
              </div>
              <div className="inputs_container">
                <div className="userEmail">
                  <TextField
                    label="Enter email"
                    fullWidth
                    InputLabelProps={{ style: { ...labelStyle } }}
                    required
                  />
                </div>
                <div className="password">
                  <TextField
                    label="Enter password"
                    fullWidth
                    type="password"
                    InputLabelProps={{ style: { ...labelStyle } }}
                  />
                </div>
                <div className="login">
                  <Button variant="contained" className="button">
                    Login
                  </Button>
                </div>
                <p onClick={() => setForgotPassword(true)}>Forgot Password</p>
              </div>
            </>
          ) : (
            <ForgotPassword />
          )}
        </form>
      </LoginCard>
    </Dialog>
  );
};

export default Login;

const LoginCard = styled.div`
  font-family: ${Constant.Fonts.primaryFont};
  width: 100%;
  height: auto;
  padding: 1rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  .closeDialog {
    padding: 1rem;
    display: flex;
    justify-content: space-between;

    svg {
      font-size: 3rem;
      color: ${Constant.Colors.seconderyColor};
      cursor: pointer;
    }
  }

  .forgotDialog {
    padding: 1rem;
    display: flex;
    justify-content: flex-end;

    svg {
      font-size: 3rem;
      color: ${Constant.Colors.seconderyColor};
      cursor: pointer;
    }
  }

  .login_header {
    display: flex;
    justify-content: center;
    padding: 0 0 1rem 0;

    h1 {
      font-size: 3rem;
      color: ${Constant.Colors.seconderyColor};
    }
  }

  .inputs_container {
    display: flex;
    flex-direction: column;
    gap: 3rem;
    padding-bottom: 2rem;
    /* text-align: center; */

    input {
      font-size: 16px;
    }

    .button {
      color: #fff;
      text-transform: capitalize;
      width: 40%;
      padding: 1rem;
      font-size: 1.6rem;
      background-color: ${Constant.Colors.primaryColor};
    }

    p {
      color: blue;
      cursor: pointer;
      /* text-align: center; */
      font-size: 16px;
      transition: ease-in-out 0.3s;

      &:hover,
      &:focus {
        color: red;
      }
    }
  }
`;
