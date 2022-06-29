import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import styled from "styled-components";
import { Constant } from "../../constant";

const Otp = ({showUpdateDialog}) => {
  const labelStyle = {
    fontSize: 16,
    backgroundColor: "#fff",
  };
  return (
    <ForgotCard>
      <div className="login_header">
        <h1>Enter OTP</h1>
      </div>
      <div className="inputs_container">
        <div className="userEmail">
          <TextField
            label="Enter OTP"
            fullWidth
            InputLabelProps={{ style: { ...labelStyle } }}
            required
          />
        </div>
        <div className="login">
          <Button variant="contained" className="button" onClick={() => showUpdateDialog()}>
            Submit
          </Button>
        </div>
      </div>
    </ForgotCard>
  );
};

export default Otp;

const ForgotCard = styled.div`


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
  }
`;
