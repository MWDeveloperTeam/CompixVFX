import React from "react";
import styled from "styled-components";
import { HiUserGroup } from "react-icons/hi";
import { Constant } from "../../constant/index";
import { ResponsiveContainer, BarChart, Bar,CartesianGrid,XAxis, YAxis, Tooltip, Legend } from "recharts";
import { data } from "./ChartApi";

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
            <h3>170</h3>
          </div>
        </div>
        <div>
          <div className="icon">
            <HiUserGroup />
          </div>
          <div className="content">
            <h3>Total Courses</h3>
            <h3>17</h3>
          </div>
        </div>
        <div>
          <div className="icon">
            <HiUserGroup />
          </div>
          <div className="content">
            <h3>Certificate Issued</h3>
            <h3>70</h3>
          </div>
        </div>
      </div>
      <div className="chart_container">
        <ResponsiveContainer width="100%">
          <BarChart
            data={data}
            margin={{ top: 15, right: 10, left: -5, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="Name" /> 
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar type="monotone" dataKey="Duration" fill={Constant.AdminColors.primaryColor} />
            <Bar type="monotone" dataKey="Fee" fill={Constant.AdminColors.lightColor} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Section>
  );
};

export default Dashboard;

const Section = styled.section`
  font-family: ${Constant.Fonts.primaryFont};
  display: flex;
  flex-direction: column;
  gap: 2rem;
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

  .chart_container {
    width: 100%;
    height: 38rem;
    background-color: #fff;
    margin-bottom: 5rem;
    border-radius: 0.4rem;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
      rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
  }

  @media only screen and (max-width: 850px) {
    .dashboard_card_container {
      > div {
        .icon {
          svg {
            font-size: 3.5rem;
          }
        }

        .content {
          h3 {
            font-size: 1.5rem;
          }
        }
      }
    }
  }

  @media only screen and (max-width: 768px) {
    .dashboard_card_container {
      grid-template-columns: repeat(2, 1fr);
      > div {
        &:last-child {
          grid-row: 2 / 3;
          grid-column: 1 / -1;
        }
      }
    }
  }

  @media only screen and (max-width: 480px) {
    .dashboard_card_container {
      grid-template-columns: repeat(1, 1fr);
      > div {
      }
    }
  }
`;
