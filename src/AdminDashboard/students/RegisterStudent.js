import React, { useState } from "react";
import {
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextareaAutosize,
  Button,
} from "@mui/material";
import styled from "styled-components";
import { Constant } from "../../constant/index";
import { makeStyles } from "@mui/styles";

const { primaryColor, seconderyColor, seconderyColorLight, mainColor } =
  Constant.AdminColors;

const useStyles = makeStyles({
  selectBox: {
    backgroundColor: "red",
    fontSize: "1.4rem",
  },
});
const RegisterStudent = () => {
  const classes = useStyles();
  const [profilePath, setProfilePath] = useState({});
  const [inputData, setInputData] = useState({
    fname: "",
    lname: "",
    mname: "",
    parentage: "",
    phone: "",
    dob: "",
    course: "",
    gender: "",
    qualification: "",
    address: "",
    email: "",
    password: "",
    cpassword: "",
  });

  const getFormValue = (e) => {
    const { name, value } = e.target;
    setInputData((pre) => {
      return { ...pre, [name]: value };
    });
  };
  const sendDataToDatabase = (e) => {
    e.preventDefault();
    console.log(inputData);
    setInputData({
      fname: "",
      lname: "",
      mname: "",
      parentage: "",
      phone: "",
      dob: "",
      course: "",
      gender: "",
      qualification: "",
      address: "",
      email: "",
      password: "",
      cpassword: "",
    });
  };
  return (
    <Section>
      <form method="post">
        <div className="inputFormWrapper">
          <TextField
            required
            id="outlined-required"
            label="First Name"
            name="fname"
            value={inputData.fname}
            onChange={getFormValue}
            autoComplete="off"
          />
          <TextField
            required
            id="outlined-required"
            label="Middle Name"
            name="mname"
            value={inputData.mname}
            onChange={getFormValue}
            autoComplete="off"
          />
          <TextField
            required
            id="outlined-required"
            label="Last Name"
            name="lname"
            value={inputData.lname}
            onChange={getFormValue}
            autoComplete="off"
          />
          <TextField
            required
            id="outlined-required"
            label="Parentage"
            name="parentage"
            value={inputData.parentage}
            onChange={getFormValue}
            autoComplete="off"
          />
          <TextField
            label="Phone number"
            type="number"
            name="phone"
            id="outlined-required"
            onChange={getFormValue}
            value={inputData.phone}
            autoComplete="off"
          />

          <TextField
            required
            id="outlined-required"
            // label="Date of birth"
            name="dob"
            type={"date"}
            value={inputData.dob}
            onChange={getFormValue}
            autoComplete="off"
          />
          <TextField
            required
            id="outlined-required"
            label="Course"
            name="course"
            value={inputData.course}
            onChange={getFormValue}
            autoComplete="off"
          />
          {/*  select */}
          <FormControl className="selectGender">
            <InputLabel id="gender">Select Gender</InputLabel>
            <Select
              labelId="gender"
              id="gender"
              value={inputData.gender}
              name="gender"
              onChange={getFormValue}
              required
            >
              <MenuItem value={"male"}>male</MenuItem>
              <MenuItem value={"female"}>female</MenuItem>
              <MenuItem value={"other"}>other</MenuItem>
            </Select>
          </FormControl>
          <TextField
            required
            id="outlined-required"
            label="Qualification"
            name="qualification"
            value={inputData.qualification}
            onChange={getFormValue}
            autoComplete="off"
          />
        </div>
        <div className="textFieldDiv">
          <TextareaAutosize
            aria-label="Address"
            placeholder="Address"
            autoComplete="off"
            minRows={5}
            required
            name="address"
            value={inputData.address}
            onChange={getFormValue}
          />
          <div className="inputFileWrapper">
            <label htmlFor="inputFile">upload your image here</label>
            <br />
            <TextField
              type="file"
              id="inputFile"
              name="profile"
              value={inputData.profile}
              onChange={(e) => setProfilePath(e.target.files[0])}
            />
          </div>
        </div>
        <div className="passwordDiv">
          <TextField
            required
            id="outlined-required"
            name="email"
            label="User email"
            value={inputData.email}
            onChange={getFormValue}
            autoComplete="off"
            type={"email"}
          />
          <TextField
            required
            id="outlined-required"
            name="password"
            label="Password"
            value={inputData.password}
            onChange={getFormValue}
            autoComplete="off"
          />
          <TextField
            required
            id="outlined-required"
            label="Confirm Password"
            name="cpassword"
            value={inputData.cpassword}
            onChange={getFormValue}
            autoComplete="off"
          />
        </div>
        <Button onClick={sendDataToDatabase} className="submit">
          register Student
        </Button>
      </form>
    </Section>
  );
};

export default RegisterStudent;

const Section = styled.section`
  padding: 3rem 2rem;
  background-color: ${seconderyColor};
  box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
  height: 80vh;
  form * {
    font-size: 1.4rem;
  }
  form {
    .inputFormWrapper {
      display: grid;
      justify-content: center;
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 2rem;
      div {
        label {
          line-height: 1em;
        }
        &:nth-child(5) {
          div {
            input {
              appearance: none;
            }
          }
        }
        &:nth-child(6) {
          div {
            input {
            }
          }
        }
      }
    }
    .textFieldDiv {
      padding: 2rem 0;
      display: flex;
      gap: 2.5rem;
      textarea {
        width: 90%;
        font-size: 1.6rem;
        padding: 1rem;
        flex: 1;
        border: 1px solid #cccccc;
        border-radius: 0.4rem;
      }
      .inputFileWrapper {
        border: 3px dashed #ccc;
        border-radius: 0.4rem;
        position: relative;
        isolation: isolate;
        flex-basis: 31%;
        label {
          color: ${primaryColor};
          width: 100%;
          height: 100%;
          font-size: 1.6rem;
          position: absolute;
          text-align: center;
          z-index: 2;
          display: grid;
          place-items: center;
          font-family: ${Constant.Fonts.primaryFont};
        }
        div {
          display: none;
          position: absolute;
        }
      }
    }
    .passwordDiv {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 2.5rem;
    }
    .submit {
      ${Constant.ButtonStyle}
      font-size: 1.6rem;
      color: #fff;
      background-color: ${primaryColor};
      margin-top: 2rem;
    }
  }
`;
