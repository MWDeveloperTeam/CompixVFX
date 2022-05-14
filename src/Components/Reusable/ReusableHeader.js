import React from 'react'
import styled from 'styled-components'
import { Constant } from '../../constant'

const ReusableHeader = ({hColor ,pColor, hText, pText }) => {
  return (
    <Section>
        <h1 style={{color: hColor}}>{hText}</h1>
        <p style={{color: pColor}}>
          {pText}
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

    @media only screen and (max-width: 1024px) {
      h1 {
        font-size: 5rem;

        ::before {
          content: "";
          width: 0.6rem;
          height: 5rem;
        }
      }
      p {
        font-size: 1.4rem;
        width: 60%;
      }
    }

    @media only screen and (max-width: 768px) {
    h1 {
        font-size: 3rem;

        ::before {
          content: "";
          width: 0.6rem;
          height: 5rem;
          left: 3rem;
        }
      }
      p {
        font-size: 1.4rem;
        width: 100%;
        line-height: 2.3rem;
      }
    }

    @media only screen and (max-width: 580px) {
      h1 {
        font-size: 2.5rem;
        ::before {
          height: 3.5rem;
          left: 3rem;
        }
      }
      p {
        font-size: 1.6rem;
      }
    }
`
