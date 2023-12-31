import React from "react";
import styled from "styled-components";
import { Button2 } from "../styles/Button2";

const Wrapper = styled.section`
  .main-heading {
    display: flex;
    margin: 10rem 0 8rem 0;
    align-items: center;
    justify-content: center;
    font-size: 3rem;
    color: black;
    position: relative;

    &::after {
      content: "";
      position: absolute;
      background: linear-gradient(to right, #0acffe 0%, #495aff 100%);
      top: 4.8rem;
      width: 6rem;
      height: 5px;
      border-radius: 2rem;
    }
  }
  .container {
    margin-top: 6rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .contact-form {
      width:40%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      form {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 2rem;
        input {
          border-radius: 1rem;
          border: none;
          font-size: 1.8rem;
          background-color: #f3f3f3;
          width: 100%;
          padding: 1rem;
          height: 5rem;
          outline: none;
          border-left: 3px solid #9e9e9e;
          transition: all 0.4s ease-in-out;
      
          &:focus {
            border-left: 3px solid transparent;
            background: linear-gradient(#f3f3f3, #f3f3f3) padding-box,
              linear-gradient(to bottom, #0acffe, #495aff) border-box;
          }
        }
        textarea {
          width: 100%;
          padding: 1rem;
          border-radius: 1rem;
          border: none;
          font-size: 1.8rem;
          background-color: #f3f3f3;
          outline: none;
          border-left: 2.5px solid #9e9e9e;
          transition: all 0.4s ease-in-out;
          &:focus {
            border-left: 2.5px solid transparent;
            background: linear-gradient(#f3f3f3, #f3f3f3) padding-box,
              linear-gradient(to bottom, #0acffe, #495aff) border-box;
          }
        }
      }
    }
  }
  @media (max-width: ${({ theme }) => theme.media.tab}) {
    .container {
      .contact-form{
        width:90%;
      }
    }
  }
`;

const Contact = () => {
  return (
    <Wrapper>
      <div id="contact">
        <h2
          className="main-heading"
          data-aos="fade-up"
          data-aos-delay="400"
          data-aos-once="true"
        >
          Contact
        </h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3664.5648004761633!2d77.39526182548492!3d23.295257968608322!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c6863d792de81%3A0x94d9437f40363854!2sInsha%20Masjid!5e0!3m2!1sen!2sin!4v1680505438020!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ border: "0" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
        <div className="container">
          <div className="contact-form">
            <form action="#" method="POST">
              <input
                type="text"
                name="username"
                placeholder="username"
                autoComplete="off"
                required
              />
              <input
                type="email"
                name="username"
                placeholder="email"
                autoComplete="off"
                required
              />
              <textarea type="message" cols="30" rows="6" autoComplete="off" placeholder="message" />
            </form>
            <Button2>Submit</Button2>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Contact;
