import React, { useState, useEffect } from "react";
import Dialog from "@mui/material/Dialog";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { RiCloseFill } from "react-icons/ri";
import { MdChevronLeft } from "react-icons/md";
import styled from "styled-components";
import { Constant } from "../../constant";
import ForgotPassword from "./ForgotPassword";
import Otp from "./Otp";
import UpdatePassword from "./UpdatePassword";
import LoginPage from "./LoginPage";

const Login = ({ dialogToggle, dialogToggleFunc }) => {
  const [loginPage, setLoginPage] = useState(true);
  const [forgotPassword, setForgotPassword] = useState(false);
  const [emailVerify, setEmailVerify] = useState(false);
  const [updataPassword, setUpdataPassword] = useState(false);
  const [backId, setBackId] = useState("");

  const showForgotDialog = () => {
    setLoginPage(false);
    setForgotPassword(true);
    setBackId('forgot_id')
  };

  const showOptDialog = () => {
    setForgotPassword(false);
    setEmailVerify(true);
    setBackId('otp_id')
  };

  const showUpdateDialog = () => {
    setEmailVerify(false);
    setUpdataPassword(true);
    setBackId('update_id')
  };

  const showLoginDialog = () => {
    setUpdataPassword(false);
    setLoginPage(true);
    setBackId('');
  }

  const DialogComponent = () => {
    if (loginPage) {
      return <LoginPage showForgotDialog={showForgotDialog} />;
    } else if (forgotPassword) {
      return <ForgotPassword showOptDialog={showOptDialog} />;
    } else if (emailVerify) {
      return <Otp showUpdateDialog={showUpdateDialog} />;
    } else if (updataPassword) {
      return <UpdatePassword showLoginDialog={showLoginDialog} />;
    }
  };

  const closeButtonAction = () => {
    dialogToggleFunc();
    setTimeout(() => {
      setLoginPage(true);
      setForgotPassword(false);
      setEmailVerify(false);
      setUpdataPassword(false);
    }, 200);
  };

  const DialogBackHandler = (e) => {
    if (e.target.id === "forgot_id") {
      setLoginPage(true);
      setForgotPassword(false);
      setBackId('')
    }else if (e.target.id === 'otp_id'){
      setEmailVerify(false);
      setForgotPassword(true);
      setBackId('forgot_id')
    }else if(e.target.id === 'update_id') {
      setEmailVerify(true);
      setUpdataPassword(false)
      setBackId('otp_id')
    }
  };

  return (
    <Dialog open={dialogToggle} style={{ zIndex: "96226565656565" }} fullWidth>
      <LoginCard>
        <form action="">
          {/* Dialog Header */}
          <div
            className={
              forgotPassword || emailVerify || updataPassword
                ? "closeDialog"
                : "forgotDialog"
            }
          >
            {loginPage ? (
              <RiCloseFill
                onClick={() => {
                  dialogToggleFunc();
                  closeButtonAction();
                }}
              />
            ) : (
              <>
                <MdChevronLeft onClick={(e) => DialogBackHandler(e)} id={backId} />
                <RiCloseFill onClick={closeButtonAction} />
              </>
            )}
          </div>

          {/* Dialog Body */}

          {DialogComponent()}
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
