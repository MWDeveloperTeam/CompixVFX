import styled from "styled-components";
import { Constant } from "../../constant";

export const Course = styled.section`
  padding: 7rem 10rem;
  font-family: ${Constant.Fonts.primaryFont};

  .content_container {
    display: flex;
    justify-content: space-between;
    height: 12rem;

    .button_container {
      height: 100%;
      display: flex;
      align-items: flex-end;
    }

  }

  .botton_course_slider_handle {
    display: flex;
    justify-content: center;
    padding-top: 1rem;
  }

  @media only screen and (max-width: 995px) {
    .content_container {
      .courses_title_container {
        h1 {
          font-size: 4rem;
        }
      }

    }
  }

  @media only screen and (max-width: 768px) {
    padding: 2rem;

    .content_container {
      .courses_title_container {
        width: 100%;
        gap: 1rem;
        h1 {
          font-size: 5rem;
          ::before {
            left: 2rem;
          }
        }

        p {

        }
      }
    }
  }

  @media only screen and (max-width: 570px) {
    .content_container {
      .courses_title_container {
        gap: 3rem;
        h1 {
          font-size: 3rem;
          ::before {
            height: 4rem;
          }
        }

        p {
          font-size: 1.9rem;
        }
      }

    }
  }
`;

export const Section = styled.div`
  /* width: 28rem; */
  height: 30rem;
  /* background-color: #cdcdcd; */
  border-radius: 0.5rem;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  font-family: ${Constant.Fonts.primaryFont};
  box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px,
    rgba(17, 17, 26, 0.05) 0px 8px 32px;
  .icon_container {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    i {
      color: ${Constant.Colors.seconderyColor};
      font-size: 6rem;
    }
  }

  .title_container {
    h1 {
      font-size: 2.5rem;
      color: #111;
      text-align: center;
      text-transform: capitalize;
    }
  }

  .label_container {
    text-align: center;
    p {
      font-size: 1.4rem;
      line-height: 2rem;
      color: #444;
      text-transform: capitalize;
    }
  }

  .button_container {
    button {
      padding: 1.2rem 2rem;
      border-radius: 0.4rem;
      border: none;
      background-color: ${Constant.Colors.seconderyColor};
      color: #111;
      font-size: 1.6rem;
      cursor: pointer;
      letter-spacing: 0.1rem;
      transition: ease-in-out 0.3s;
      text-transform: capitalize;
      :hover {
        background-color: ${Constant.Colors.primaryColor};
        color: #fff;
      }
    }
  }
`;
