import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { Constant } from "../../constant";
import ReusableHeader from "../Reusable/ReusableHeader";
import { GoLocation } from "react-icons/go";
import { BsTelephone } from "react-icons/bs";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import validator from "validator";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
  const [pending, setPending] = useState(false);
  const [formInuts, setFormInputs] = useState({
    fname: "",
    lname: "",
    email: "",
    subject: "",
  });
  const form = useRef();
  const Successnotify = () => toast.success("Message Successfully Send...");
  const Errornotify = () => toast.error("Something Wents Wrong...!");

  const valueHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormInputs({ ...formInuts, [name]: value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    const { fname, lname, email, subject } = formInuts;
    const fNameError = () => toast.error("Frist Name Field Is Empty...!");
    const fLameError = () => toast.error("Last Name Field Is Empty...!");
    const emailError = () => toast.error("Email Is not Valid...!");
    const subjectError = () => toast.error("Message Field Is Empty...!");

    if(validator.isEmpty(fname)) return fNameError()
    if(validator.isEmpty(lname)) return fLameError()
    if(!validator.isEmail(email)) return emailError()
    if(validator.isEmpty(subject)) return subjectError()
    setPending(true)

    emailjs
      .sendForm(
        "service_qfo4vsh",
        "template_xgesxhg",
        form.current,
        "sTf1dXb5XAKiVIPSa"
      )
      .then(
        (result) => {
          Successnotify();
          setPending(false) 
        },
        (error) => {
          Errornotify();
          setPending(false) 
        }
      )

    setFormInputs({ fname: "", lname: "", email: "", subject: "" });
  };

  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <Section id="contact" data-aos='fade-up'>
      <ReusableHeader
        hText="Contact Us"
        pText="We are always available, feel free to contact us."
        hColor={Constant.Colors.seconderyColor}
        pColor="#222"
      />
      <div style={{padding: '3rem 0'}}>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3306.184546926292!2d74.7920036152147!3d34.039136880609384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e18fb855d5e4d1%3A0x9e93cd29cbd41862!2sCompix%20-VFX%20%26%20Animation!5e0!3m2!1sen!2sin!4v1652765731969!5m2!1sen!2sin" style={{border: '0', width: '100%', height: '300px'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
      <div className="contact_container">
        <div className="contact_info_container">
          <h2>Contact Information</h2>
          <h3>COMPIX - VFX & ANIMATION</h3>
          <p className="address">
            <GoLocation /> Parraypora Srinagar J&K 190005
          </p>
          <p className="phone">
            <BsTelephone /> (0194) 355-1690, (+91) 700-668-6887
          </p>
        </div>

        <form
          className="contact_input_container"
          onSubmit={sendEmail}
          ref={form}
        >
          <div className="fname">
            <input
              type="text"
              name="fname"
              placeholder="First Name"
              value={formInuts.fname}
              onChange={valueHandler}
            />
          </div>
          <div className="lname">
            <input
              type="text"
              name="lname"
              placeholder="Last Name"
              value={formInuts.lname}
              onChange={valueHandler}
            />
          </div>
          <div className="email">
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={formInuts.email}
              onChange={valueHandler}
            />
          </div>
          <div className="subject">
            <textarea
              type="text"
              placeholder="Message"
              name="subject"
              value={formInuts.subject}
              onChange={valueHandler}
            />
          </div>
          <div className="button_div">
            <button>
              {pending ? "sending" : 'send'}
            </button>
          </div>
        </form>
      </div>
      <ToastContainer position="bottom-center" autoClose={1000}/>
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
        svg {
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
      .button_div {
        border: none;
        button {
          padding: 1.3rem 10rem;
          font-size: 1.8rem;
          text-transform: capitalize;
          border: none;
          background-color: ${Constant.Colors.primaryColor};
          color: #fff;
          border-radius: 0.4rem;
          transition: all ease 0.3s;
          cursor: pointer;
          &:hover,
          &:focus {
            background-color: ${Constant.Colors.primaryColorLight};
          }
        }
        .pending {
          background-color: red;
        }
      }
    }
  }

  @media only screen and (max-width: 995px) {
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

  @media only screen and (max-width: 768px) {
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

      .button_div {
        width: 100%;
        button {
          width: 100%;
        }
      }
    }
  }
`;
