import React from "react";
import styled from "styled-components";
import { Constant } from "../constant";
import Button from "@mui/material/Button";

const Payment = () => {
  return (
    <Card>
      <h1>Payments</h1>
      <div className="payment_wrapper">
        <table>
          <tr>
            <th>#</th>
            <th>Date</th>
            <th>Status</th>
            <th>Amount</th>
          </tr>
          <tr>
            <td>#</td>
            <td>Date</td>
            <td>Status</td>
            <td>Amount</td>
          </tr>
        </table>
        {/* <ol>
          <li>
            <span>14 April 2022</span> <span>Paid</span>{" "}
            <span>Rs 14000.00</span>
          </li>
          <li>
            <span>14 April 2022</span> <span>Paid</span>{" "}
            <span>Rs 14000.00</span>
          </li>
          <li>
            <span>14 April 2022</span> <span>Paid</span>{" "}
            <span>Rs 14000.00</span>
          </li>
          <li>
            <span>14 April 2022</span> <span>Paid</span>{" "}
            <span>Rs 14000.00</span>
          </li>
          <li>
            <span>14 April 2022</span> <span>Paid</span>{" "}
            <span>Rs 14000.00</span>
          </li>
          <li>
            <span>14 April 2022</span> <span>Paid</span>{" "}
            <span>Rs 14000.00</span>
          </li>
        </ol> */}
      </div>
      <div className="button">
        <Button className="more_button">
          More
        </Button>
      </div>
    </Card>
  );
};

export default Payment;

const Card = styled.div`
  font-family: ${Constant.Fonts.primaryFont};
  padding: 1rem;
  /* background-color: ${Constant.Colors.seconderyColor}; */
  background-color: #fff;
  border-radius: 0.8rem;
  border-left: 1rem solid ${Constant.Colors.seconderyColor};
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  h1 {
    border-bottom: 0.1rem solid grey;
    padding-bottom: 0.7rem;
    /* color: ${Constant.Colors.seconderyColor}; */
    font-size: 1.6rem;
  }
  .payment_wrapper {
    padding: 1rem 0;

    ol {
      font-size: 1.6rem;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      list-style: none;
      li {
        display: flex;
        justify-content: space-between;
        color: #222;
      }
    }
  }
  .button {
    display: flex;
    justify-content: flex-end;

    .more_button {
      font-size: 1.2rem;
      padding: 0.5rem 2rem;
    }
  }

  @media only screen and (max-width: 375px) {
    .payment_wrapper {
      ol {
        font-size: 1.4rem;
      }
    }
  }
`;
