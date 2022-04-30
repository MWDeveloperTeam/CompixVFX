import styled from "styled-components";
import { Constant } from "../../constant";

export const Section = styled.section`
  height: auto;
  padding: 7rem 10rem;
  font-family: ${Constant.Fonts.primaryFont};
  display: flex;
  flex-direction: column;
  gap: 5rem;
  .card_container {
    display: flex;
    gap: 2rem;
    justify-content: center;

    .card {
      width: 30rem;
      height: 36rem;
      /* background-color: red; */
      box-shadow: rgba(17, 17, 26, 0.05) 0px 1px 0px,
        rgba(17, 17, 26, 0.1) 0px 0px 8px;
      border-radius: 0.5rem;
      padding: 0.5rem;
      display: flex;
      flex-direction: column;
      gap: 1rem;
transition: ease-in-out .3s;
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
        gap: 4rem;

        svg {
            font-size: 2rem;
            cursor: pointer;
            color: ${Constant.Colors.seconderyColor};
            transition: ease-in-out .3s;

            :hover {
                color: ${Constant.Colors.primaryColor};
            }
        }
      }
    }
  }
`;
