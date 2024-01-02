import React from "react";
import styled from "styled-components";
import { ImLocation } from "react-icons/im";
import { BsCalendar2MonthFill } from "react-icons/bs";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { Button2 } from "../styles/Button2";
import "aos/dist/aos.css";
import Wrapper from "../Wrapper";

const AboutWrapper = styled.section`
  width: 100vw;
  height: 100%;
  diplay: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .container {
    diplay: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: white;
    margin-bottom: 11rem;
    color: white;
    .main-heading {
      display: flex;
      margin: 5rem 0 8rem 0;
      align-items: center;
      justify-content: center;
      font-size: 3rem;
      color: black;
      position: relative;
      height:10rem;

      &::after {
        content: "";
        position: absolute;
        background: linear-gradient(to right, #0acffe 0%, #495aff 100%);
        top: 7.8rem;
        width: 6rem;
        height: 5px;
        border-radius: 2rem;
      }
    }

    .m-grid {
      column-gap: 9rem;
      grid-template-columns: 0.5fr 1fr;
      color: black;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 1rem;
      margin-top: 5rem;

      .column-1 {
        width:60rem;
        .img {
          height: 52rem;
          width: 40rem;
        }
      }
      .column-2 {
        display: flex;
        flex-direction: column;
        gap: 2rem;

        .grid {
          column-gap: 2rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .name-heading {
          font-size: 2rem;
        }
        .name-para {
          font-size: 2.9rem;
          font-weight: 700;
          line-height: 1.4;
        }
        .para {
          font-size: 1.7rem;
          line-height: 1.7;
          letter-spacing: 1px;
        }
        .col-1 {
          width: 30rem;
          font-size: 1.7rem;
          column-gap: none;
          .location-div {
            display: flex;
            margin-top: 1.5rem;
            gap: 2rem;
            .m {
              width: 4rem;
              font-weight: 400;
            }
            .location {
              display: flex;
              gap: 1rem;
              span {
                font-weight: 600;
              }
            }
          }
        }
      }
    }
  }

  @media (max-width: ${({ theme }) => theme.media.tab}) {
    .container {
      .content {
        .m-grid {
          flex-direction: column;
        }
      }
    }
    .column-2 {
      width: 100%;
      .grid {
        grid-template-columns: 1fr;
      }
      .name-heading {
        margin-top: 3rem;
        font-size: 2rem;
      }
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .column-2 {
      width: 100%;
      .grid {
        grid-template-columns: 1fr;
        gap: 0;
      }
      .name-heading {
        margin-top: 3rem;
        font-size: 2rem;
      }
    }
    .content {
      .main {
        .column-2 {
          .grid {
            flex-direction: column;
            align-items:start;
          }
        }
      }
    }
  }
`;

const About = () => {
  return (
    <AboutWrapper id="about">
      <Wrapper>

        <div className="container">
          <div className="content">
            <h2
              className="main-heading"
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-once="true"
            >
              About
            </h2>
            <div className="m-grid grid-two-column main">
              <div
                className="column-1"
                data-aos="fade-right"
                data-aos-once="true"
              >
                <div className="img">
                  <img src="./About.png" alt="about img" className="img" />
                </div>
              </div>
              <div className="column-2">
                <p
                  className="name-heading"
                  data-aos="fade-left"
                  data-aos-delay="400"
                  data-aos-once="true"
                >
                  My Name is ayush sahu
                </p>
                <p
                  className="name-para"
                  data-aos="fade-left"
                  data-aos-delay="500"
                  data-aos-once="true"
                >
                  I'm Professional web Developer and Designer having 2 Years Of
                  Experience
                </p>
                <p
                  className="para"
                  data-aos="fade-left"
                  data-aos-delay="600"
                  data-aos-once="true"
                >
                  Full-Stack Proficiency Skilled in both frontend and backend development, I bring a holistic understanding to the MERN stack, ensuring cohesive and responsive applications.
                </p>
                <p
                  className="para"
                  data-aos="fade-left"
                  data-aos-delay="600"
                  data-aos-once="true"
                >
                  Eager to bring my technical skills and passion for innovation to a dynamic development team. Let's connect and discuss how my expertise aligns with your project needs.
                </p>
                <div
                  className="grid grid-two-column"
                  data-aos="flip-up"
                  data-aos-delay="700"
                  data-aos-once="true"
                >
                  <div className="col-1">
                    <div className="location-phone">
                      <div className="location-div">
                        <div className="location">
                          <ImLocation />
                          <span className="m">Location</span>
                        </div>
                        <span>:</span>
                        <span>4373 2 Center,CA</span>
                      </div>
                      <div className="location-div">
                        <div className="location">
                          <FaPhoneAlt />
                          <span className="m">Phone</span>
                        </div>
                        <span>:</span>
                        <span>+91-8839081589</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-1">
                    <div className="location-phone">
                      <div className="location-div">
                        <div className="location">
                          <BsCalendar2MonthFill />
                          <span className="m">Age</span>
                        </div>
                        <span>:</span>
                        <span>23</span>
                      </div>
                      <div className="location-div">
                        <div className="location">
                          <IoIosMail />
                          <span className="m">Gmail</span>
                        </div>
                        <span>:</span>
                        <span>digitalayush@gmail.com</span>
                      </div>
                    </div>
                  </div>
                </div>
                <hr />
                <Button2
                  className="btn"
                  data-aos="flip-left"
                  data-aos-easing="ease-out-cubic"
                  data-aos-delay="1100"
                  data-aos-once="true"
                >
                  Download Resume
                </Button2>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </AboutWrapper>
  );
};

export default About;
