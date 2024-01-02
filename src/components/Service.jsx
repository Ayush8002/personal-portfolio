import React from "react";
import styled from "styled-components";
import { HiOutlineLightBulb, HiOutlineSpeakerphone } from "react-icons/hi";
import { MdDeveloperMode } from "react-icons/md";
import "aos/dist/aos.css";
import Wrapper from "../Wrapper";

const ServiceWrapper = styled.section`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .container {
    margin:3rem 0 12rem 0;
    .main-content {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 7rem;
      .main-heading {
        display: flex;
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
      .para {
        font-size: 1.7rem;
        width: 56%;
        text-align: center;
      }
      .grid {
        column-gap: 4rem;
        padding: 1rem ;
        .col-1,
        .col-2,
        .col-3 {
          height: 32rem;
          width: 35rem;
          border-radius: 1rem;
          box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          &:hover {
            box-shadow: #dcdef2 0px 8px 24px;
            background: linear-gradient(white, white) padding-box,
              linear-gradient(to right, #0acffe, #495aff) border-box;
            border-top: 3.5px solid transparent;
            transform: translateY(-1rem);
          }
          .content {
            height: 100%;
            width: 80%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 2rem;
            cursor: pointer;
            transition: all 0.3s ease;
            .icon {
              font-size: 4.5rem;
            }
            h2 {
              font-size: 2.2rem;
            }
            p {
              font-size: 1.6rem;
              text-align: center;
            }
            &:hover {
              transform: translateY(-1rem);
            }
          }
        }
      }
    }
  }
`;

const Service = () => {
  return (
    <ServiceWrapper id="service">
      <Wrapper>
        <div className="container">
          <div className="main-content">
            <h2
              className="main-heading"
              data-aos="fade-up"
              data-aos-delay="500"
              data-aos-once="true"
            >
              Service
            </h2>
            <p
              className="para"
              data-aos="zoom-in-up"
              data-aos-delay="500"
              data-aos-once="true"
            >
              As a MERN stack developer, the services you provide can cover a wide range of activities related to building web applications using MongoDB, Express.js, React.js, and Node.js.
            </p>
            <div
              className="grid grid-three-column"
              data-aos="fade-up"
              data-aos-delay="800"
              data-aos-once="true"
            >
              <div className="col-1" data-aos="zoom-in-up" data-aos-once="true">
                <div className="content">
                  <HiOutlineLightBulb className="icon" />
                  <h2>UI/UX Design</h2>
                  <p>
                    Designing aesthetically pleasing and intuitive user interfaces.
                  </p>
                </div>
              </div>
              <div className="col-2" data-aos="zoom-in-up" data-aos-once="true">
                <div className="content">
                  <MdDeveloperMode className="icon" />
                  <h2>Web Development</h2>
                  <p>
                    Develop end-to-end web applications using the MERN stack.
                  </p>
                </div>
              </div>
              <div className="col-3" data-aos="zoom-in-up" data-aos-once="true">
                <div className="content">
                  <HiOutlineSpeakerphone className="icon" />
                  <h2>Marketing</h2>
                  <p>
                    Optimize websites to improve their visibility on search engines.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </ServiceWrapper>
  );
};

export default Service;
