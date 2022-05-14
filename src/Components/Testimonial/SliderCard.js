import React from "react";
import styled from "styled-components";
import { Constant } from "../../constant";

const SliderCard = ({ username, qualification, Image, comment, name }) => {
  return (
    <Card>
      <div className="img_container">
        <div>
          <img src={Image} alt="userImage" />
        </div>
      </div>
      <div className="test_content_container">
        <p className={`${name}`}>{comment}</p>
        <h2>{username}</h2>
        <h3>{qualification}</h3>
      </div>
    </Card>
  );
};

export default SliderCard;

const Card = styled.section`
  height: 35rem;
  border-radius: 0.5rem;
  background-color: #f1f1f1;
  display: flex;
  margin: 0 1rem;
  .img_container {
    background-color: #f6f6f6;
    width: 30%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 0.5rem 0 0 0.5rem;
    > div {
      /* background-color: red; */
      width: 60%;
      img {
        width: 100%;
        border-radius: 50%;
        object-fit: cover;
        border: 0.5rem solid ${Constant.Colors.seconderyColor};
        box-shadow: rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px;
      }
    }
  }

  .test_content_container {
    width: 70%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 10rem;
    gap: 1.5rem;
    /* background-color: gray; */
    p {
      font-size: 1.6rem;
      text-align: center;
      line-height: 2.5rem;
      color: #444;

      &::before {
        margin-right: 1rem;
        content: "❝";
        display: inline-block;
        font-size: 2.2rem;
        color: ${Constant.Colors.seconderyColor};
      }
      &::after {
        content: " ❞";
        display: inline-block;
        font-size: 2rem;
        color: ${Constant.Colors.seconderyColor};
        margin-left: 1rem;
      }
    }
    h2 {
      font-size: 2.2rem;
      color: ${Constant.Colors.seconderyColor};
    }

    h3 {
      color: #222;
    }
  }

  @media only screen and (max-width: 1024px) {
    height: 30rem;

    .test_content_container {
      width: 70%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 4rem;
      gap: 0.8rem;
      /* background-color: gray; */
      p {
        font-size: 1.6rem;
        text-align: center;
        line-height: 2rem;
        color: #444;
      }
      .Arun {
        font-size: 1.4rem;
      }
    }
  }

  @media only screen and (max-width: 768px) {
    height: 30rem;
    flex-direction: column;
    .img_container {
      width: 100%;
      height: 40%;
      border-radius: 0.5rem 0.5rem 0 0;
      /* background-color: blue; */
      > div {
        /* background-color: red; */
        width: 10rem;
        height: 10rem;
      }
    }

    .test_content_container {
      width: 100%;
      height: 60%;
      padding: 4rem;
      gap: 0.5rem;
      /* background-color: gray; */
      p {
        font-size: 1.4rem;
        line-height: 1.9rem;
        color: #444;
      }
      h2 {
        font-size: 1.8rem;
      }

      h3 {
        color: #222;
      }
    }
  }

  @media only screen and (max-width: 600px) {
    height: 30rem;
    flex-direction: column;
    .img_container {
      width: 100%;
      height: 40%;
      /* background-color: blue; */
      > div {
        /* background-color: red; */
        width: 10rem;
        height: 10rem;
      }
    }

    .test_content_container {
      width: 100%;
      height: 60%;
      padding: 1rem;
      gap: 1rem;
      /* background-color: gray; */
      p {
        font-size: 1.6rem;
        line-height: 1.5rem;
        color: #444;
        overflow: auto;
        height: 10rem;
        /* background-color: gainsboro; */
        &::before {
          margin-right: 0;
          font-size: 1rem;
        }
        &::after {
          margin-left: 0;
          font-size: 1rem;
        }
      }
      h2 {
        font-size: 1.5rem;
      }

      h3 {
        color: #222;
        font-size: 1.2rem;
      }
    }
  }
`;
