import React from "react";
import styled from "styled-components";
import { HiUserGroup } from "react-icons/hi";
import { Constant } from "../../constant/index";

const Dashboard = () => {

  return (
    <Section>
      <div className="dashboard_card_container">
        <div>
          <div className="icon">
            <HiUserGroup />
          </div>
          <div className="content">
            <h3>Total Students</h3>
            <h3>300</h3>
          </div>
        </div>
        <div>
          <div className="icon">
            <HiUserGroup />
          </div>
          <div className="content">
            <h3>Total Students</h3>
            <h3>300</h3>
          </div>
        </div>
        <div>
          <div className="icon">
            <HiUserGroup />
          </div>
          <div className="content">
            <h3>Total Students</h3>
            <h3>300</h3>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Dashboard;

const Section = styled.section`
  font-family: ${Constant.Fonts.primaryFont};
  .dashboard_card_container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    > div {
      background-color: ${Constant.AdminColors.seconderyColor};
      padding: 2rem 1rem;
      border-radius: 0.4rem;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      text-align: center;
      gap: 1rem;
      box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
        rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
      border-left: 0.8rem solid ${Constant.AdminColors.primaryColor};
      cursor: pointer;
      transition: ease-in-out 0.3s;

      &:hover {
        border-left: 0.8rem solid ${Constant.AdminColors.primaryColor};
        background-color: ${Constant.AdminColors.primaryColorDark};

        .icon {
          svg {
            color: ${Constant.AdminColors.seconderyColor};
          }
        }

        .content {
          h3 {
            color: ${Constant.AdminColors.seconderyColor};
          }
        }
      }

      .icon {
        svg {
          font-size: 5rem;
          color: ${Constant.AdminColors.primaryColor};
        }
      }

      .content {
        h3 {
          font-size: 1.8rem;
          color: ${Constant.AdminColors.lightColor};
          font-weight: 300;
          letter-spacing: 0.1rem;
        }
      }
    }
  }

  @media only screen and (max-width: 850px) {
    font-family: ${Constant.Fonts.primaryFont};
    .dashboard_card_container {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 2rem;
      > div {
        background-color: ${Constant.AdminColors.seconderyColor};
        padding: 2rem 1rem;
        border-radius: 0.4rem;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        text-align: center;
        gap: 1rem;
        box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
          rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
        border-left: 0.8rem solid ${Constant.AdminColors.primaryColor};
        cursor: pointer;
        transition: ease-in-out 0.3s;

        .icon {
          svg {
            font-size: 3.5rem;
            color: ${Constant.AdminColors.primaryColor};
          }
        }

        .content {
          h3 {
            font-size: 1.5rem;
            color: ${Constant.AdminColors.lightColor};
            font-weight: 300;
            letter-spacing: 0.1rem;
          }
        }
      }
    }
  }

  @media only screen and (max-width: 768px) {
    font-family: ${Constant.Fonts.primaryFont};
    .dashboard_card_container {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      gap: 2rem;
      > div {
        background-color: ${Constant.AdminColors.seconderyColor};
        padding: 2rem 1rem;
        border-radius: 0.4rem;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        text-align: center;
        gap: 1rem;
        box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
          rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
        border-left: 0.8rem solid ${Constant.AdminColors.primaryColor};
        cursor: pointer;
        transition: ease-in-out 0.3s;

        .icon {
          svg {
            font-size: 3.5rem;
            color: ${Constant.AdminColors.primaryColor};
          }
        }

        .content {
          h3 {
            font-size: 1.5rem;
            color: ${Constant.AdminColors.lightColor};
            font-weight: 300;
            letter-spacing: 0.1rem;
          }
        }
      }
    }
  }
`;
