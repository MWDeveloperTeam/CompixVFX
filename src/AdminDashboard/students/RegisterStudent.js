import React, { useState } from "react";
import {
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextareaAutosize,
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
            required
            id="outlined-required"
            label="Phone"
            name="phone"
            value={inputData.phone}
            onChange={getFormValue}
            autoComplete="off"
            type={"number"}
          />
          <TextField
            required
            id="outlined-required"
            label="Date of birth"
            name="dob"
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
          />
          <TextField type={"file"} />
        </div>
        <input type="submit" value="submit" onClick={sendDataToDatabase} />
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
      grid-gap: 2.5rem;
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
      }
    }
  }

  .textFieldDiv {
    padding: 3rem 0;
    display: flex;
    textarea {
      width: 90%;
      height: 20rem;
      font-size: 1.6rem;
      /* background-color: red; */
      flex: 1;
    }
    div {
      div {
        input {
          appearance: none;
          background-color: red;
        }
      }
    }
  }
`;
