import styled from "styled-components";
import { Constant } from "../../constant";

export const Section = styled.section`
  height: auto;
  padding: 7rem 10rem;
  /* background-color: red; */
  font-family: ${Constant.Fonts.primaryFont};
  display: flex;
  flex-direction: column;
  gap: 5rem;
  .card_container {
    /* height: 30rem; */
    /* display: flex;
    gap: 2rem;
    justify-content: center; */
    /* background-color: maroon; */

    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;

    .card {
      /* width: 30rem; */
      height: 33rem;
      /* background-color: aqua; */
      box-shadow: rgba(17, 17, 26, 0.05) 0px 1px 0px,
        rgba(17, 17, 26, 0.1) 0px 0px 8px;
      border-radius: 0.5rem;
      padding: 0.5rem;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      transition: ease-in-out 0.3s;
      :hover {
        transform: translateY(-1rem);
      }
      .img_container {
        height: 60%;

        img {
          width: 100% !important;
        }
      }

      .label_container {
        height: 25%;
        background-color: ${Constant.Colors.seconderyColor};
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
        justify-content: center;
        text-align: center;
        padding: 0.4rem;
        h2 {
          text-transform: capitalize;
          color: #222;
          letter-spacing: 0.1rem;
        }
        p {
          font-size: 1.4rem;
          text-transform: capitalize;
          color: #222;
        }
      }

      .media_container {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 15%;
        gap: 2rem;
        span {
          cursor: pointer;
          display: grid;
          place-items: center;
          padding: 1rem;
          border-radius: 2rem;
          transition: ease-in-out 0.3s;
          :hover {
            background-color: ${Constant.Colors.primaryColor};
          }
          svg {
            font-size: 2rem;
            cursor: pointer;
            color: ${Constant.Colors.seconderyColor};
          }
        }
      }
    }
  }

  @media only screen and (max-width: 1200px) {
    padding: 7rem 10rem;
    gap: 5rem;
    .card_container {
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: 2;
      gap: 4rem;

      .card {
      }
      .img_container {
        img {
        }
      }
    }
  }

  @media only screen and (max-width: 768px) {
    padding: 2rem;
    gap: 5rem;
    .card_container {
      grid-template-columns: repeat(2, 1fr);
      gap: 3rem;

      .card {
      }
      .img_container {
        img {
        }
      }
    }
  }

  @media only screen and (max-width: 500px) {
    .card_container {
      grid-template-columns: repeat(1, 1fr);
      gap: 3rem;
    }
  }
`;
