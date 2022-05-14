import React from "react";
import styled from "styled-components";
import { Constant } from "../../constant";
import ReusableHeader from "../Reusable/ReusableHeader";
import {GoLocation} from "react-icons/go"
import {BsTelephone} from "react-icons/bs"
import { Colors } from "../../constant/Colors";

const Contact = () => {
  return (
    <Section id="contact">
      <ReusableHeader
        hText="Contact Us"
        pText="We are always available, feel free to contact us."
        hColor={Constant.Colors.seconderyColor}
        pColor="#222"
      />
      <div className="contact_container">
        <div className="contact_info_container">
          <h2>Contact Information</h2>
          <h3>COMPIX - VFX & ANIMATION</h3>
          <p className="address"><GoLocation/> Parraypora Srinagar J&K 190005</p>
          <p className="phone"><BsTelephone/> (0194) 355-1690, (+91) 700-668-6887</p>
        </div>
       
          <form className="contact_input_container">
            <div className="fname">
              <input type="text" name="fname" placeholder="First Name" />
            </div>
            <div className="lname">
              <input type="text" name="lname" placeholder="Last Name" />
            </div>
            <div className="email">
              <input type="text" name="email" placeholder="Email" />
            </div>
            <div className="subject">
              <textarea type="text" placeholder="Message" name="subject" />
            </div>
            <div className="button_div"><button>send</button></div>
          </form>
       
      </div>
    </Section>
  );
};

export default Contact;

const Section = styled.section`
  font-family: ${Constant.Fonts.primaryFont};
  padding: 7rem 10rem;
  height: auto;

  .contact_container {
    padding-top: 3rem;
    display: flex;
    gap: 2rem;

    .contact_info_container {
      width: 40%;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      h2 {
        font-size: 2.5rem;
        color: ${Constant.Colors.seconderyColor};
      }

      h3 {
        font-size: 1.6rem;
        color: #444;
      }

      .address,
      .phone {
        font-size: 1.6rem;
        display: flex;
        align-items: center;
        gap: 1rem;
        svg{
            color: ${Constant.Colors.seconderyColor};
        }
      }
    }

    .contact_input_container {
      width: 60%;
      display: grid;
      gap: 1rem;
      row-gap: 2.5rem;
      grid-template-columns: repeat(2, 1fr);
      grid-template-areas: "fname lname" "email email" "subject subject";
      /* grid-template-rows: repeat(3, 1fr); */

      div {
        display: flex;
        align-items: center;
        border: 1px solid #ccc;
        border-radius: 0.4rem;

        input {
          width: 100%;
          height: 5rem;
          border: none;
          border-radius: inherit;
          outline: none;
          padding: 1rem;
          font-size: 1.6rem;

          &:focus {
            border: 1px solid ${Constant.Colors.primaryColor};
            box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 2px 0px;
          }
        }
      }
      .email {
        grid-area: email;
      }

      .fname {
        grid-area: fname;
      }

      .lname {
        grid-area: lname;
      }

      .subject {
        grid-area: subject;
      }

      textarea {
        width: 100%;
        height: 15rem;
        outline: none;
        border: none;
        border-radius: inherit;
        padding: 1rem;
        font-size: 1.6rem;
        &:focus {
          border: 1px solid ${Constant.Colors.primaryColor};
          box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 2px 0px;
        }
      }
      .button_div{
          border: none;
          button{
              padding: 1.3rem 10rem;
              font-size: 1.8rem;
              text-transform: capitalize;
              border: none;
              background-color: ${Constant.Colors.primaryColor};
              color: #fff;
              border-radius: .4rem;
              transition: all ease .3s;
              cursor: pointer;
              &:hover, &:focus{
                background-color: ${Constant.Colors.primaryColorLight};
              }
          }
      }
    }
  }
  
  @media only screen and (max-width:995px) {
    
  .contact_container {
    

    .contact_input_container {
      width: 60%;
      display: grid;
      gap: 1rem;
      row-gap: 2.5rem;
      grid-template-columns: repeat(2, 1fr);
      grid-template-areas: "fname fname" "lname lname" "email email" "subject subject";
      /* grid-template-rows: repeat(3, 1fr); */
    }
  }
  }


  @media only screen and (max-width:768px) {
    padding: 2rem;
  .contact_container {
    flex-direction: column;
    gap: 5rem;
    .contact_info_container {
        width: 100%;
        gap: 1.5rem;
        
    }
    .contact_input_container {
      width: 100%;
      display: grid;
      gap: 1rem;
      row-gap: 2.5rem;
      grid-template-columns: repeat(2, 1fr);
      grid-template-areas: "fname fname" "lname lname" "email email" "subject subject";
      /* grid-template-rows: repeat(3, 1fr); */
    }
  }
  }
`;
