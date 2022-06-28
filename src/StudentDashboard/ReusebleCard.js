import React from "react";
import styled from "styled-components";
import { Constant } from "../constant";
import Button from "@mui/material/Button";

const ReusebleCard = ({ title, data, hText1, hText2, hText3}) => {
  return (
    <Card>
      <h1>{title}</h1>
      <div className="payment_wrapper">
        {data.length >= 1 ? (
          <table>
            <tr>
              <th>#</th>
              <th>{hText1}</th>
              <th>{hText2}</th>
              <th>{hText3}</th>
            </tr>
            {data?.map((elem, i) => (
              <tr key={i}>
                <td style={{paddingRight: '1rem'}}>1</td>
                <td>{elem.course}</td>
                <td>18 Month</td>
                <td>Rs 40,000.00</td>
              </tr>
            ))}
          </table>
        ) : (
          <div className="cer_down">
            <Button variant="contained" disabled>
              Download Certificate
            </Button>
            <p>Sorry Certificate is'nt yet Generated...!</p>
          </div>
        )}
      </div>
    </Card>
  );
};

export default ReusebleCard;

const Card = styled.div`
  font-family: ${Constant.Fonts.primaryFont};
  padding: 1rem;
  /* background-color: ${Constant.Colors.seconderyColor}; */
  background-color: #fff;
  border-radius: 0.8rem;
  border-left: 1rem solid ${Constant.Colors.seconderyColor};
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  height: 26rem;
  h1 {
    border-bottom: 0.1rem solid grey;
    padding-bottom: 0.7rem;
    /* color: ${Constant.Colors.seconderyColor}; */
    font-size: 1.6rem;
  }
  .payment_wrapper {
    padding: 1rem 0;
    height: 90%;
    overflow: hidden;

    table {
      width: 100%;
      font-size: 1.5rem;
      border-collapse: collapse;
      tr {
        &:nth-child(even) {
          background-color: #e6e6e6;
        }
        th {
          text-align: left;
          padding-bottom: 1rem;
          vertical-align: center;
        }
        td {
          height: 3rem;
          vertical-align: center;
        }
      }
    }

    .cer_down {
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      gap: 1rem;

      p {
        color: red;
      }
    }
  }

  @media only screen and (max-width: 425px) {
  .payment_wrapper {
    table {
      font-size: 1.2rem;
    }
  }
  }
`;
