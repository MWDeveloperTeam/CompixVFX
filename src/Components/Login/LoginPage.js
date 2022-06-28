import React, { useState } from "react";
import styled from "styled-components";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Constant } from "../../constant";
import { Link, useNavigate } from "react-router-dom";


const LoginPage = ({ showForgotDialog }) => {
  const [loginPage, setLoginPage] = useState("");
  const [userLoginData, setUserLoginData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate()

  const ChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserLoginData({ ...userLoginData, [name]: value });
  };

  const labelStyle = {
    fontSize: 16,
    backgroundColor: "#fff",
  };

  const SubmitHandle = () => {
    if (
      userLoginData.email === "sawarnabi2018@gmail.com" &&
      userLoginData.password === "Sawar@123"
    ) {
      navigate('/login')
    }else{
      alert('username password invalid')
    }
  };
  return (
    <Login>
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
            value={userLoginData.email}
            onChange={(e) => ChangeHandler(e)}
            name="email"
            autoComplete="off"
          />
        </div>
        <div className="password">
          <TextField
            label="Enter password"
            fullWidth
            type="password"
            InputLabelProps={{ style: { ...labelStyle } }}
            required
            value={userLoginData.password}
            onChange={(e) => ChangeHandler(e)}
            name="password"
          />
        </div>
        <div className="login">
            <Button variant="contained" className="button" onClick={SubmitHandle}>
              <Link to='/home'>Login</Link>
            </Button>
        </div>
        <p onClick={() => showForgotDialog()}>Forgot Password</p>
      </div>
    </Login>
  );
};

export default LoginPage;

const Login = styled.div`
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
