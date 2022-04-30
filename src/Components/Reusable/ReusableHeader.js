import React from 'react'
import styled from 'styled-components'
import { Constant } from '../../constant'

const ReusableHeader = ({hColor ,pColor }) => {
  return (
    <Section>
        <h1 style={{color: hColor}}>PLACEMENTS</h1>
        <p style={{color: pColor}}>
          We provide placements in start-ups as well as MNC's After every course
          we provide internship to get hands-on experience in the real world.
        </p>
      </Section>
  )
}

export default ReusableHeader;

const Section = styled.section`
h1 {
      font-size: 5rem;
      color: #fff;
      margin-left: 2rem;
      display: flex;
      align-items: center;

      ::before {
        content: "";
        width: 0.6rem;
        height: 5rem;
        background-color: ${Constant.Colors.seconderyColorLight};
        position: absolute;
        left: 10rem;
      }
    }

    p {
      color: #fff;
      font-size: 1.5rem;
      width: 60%;
      line-height: 2.2rem;
      margin-top: 2rem;
    }
`
