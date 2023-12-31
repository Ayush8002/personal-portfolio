import React from "react";
import styled from "styled-components";
import { Button } from "../styles/Button";
import {
  GrFacebookOption,
  GrGooglePlus,
  GrGithub,
  GrLinkedinOption,
} from "react-icons/gr";
import { FaXTwitter } from "react-icons/fa6";
import { PiInstagramLogoBold } from "react-icons/pi";
import AOS from "aos";
import "aos/dist/aos.css";

const Wrapper = styled.section`
  height: 100vh;
  width: 100vw;
  background: url("HeroSectionimg.png");
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  
  
  .main-section {
    height: 100%;
    width: 62%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 5rem;

    .main-heading {
      color: white;
      font-weight: 500;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 0rem;
      line-height: 1.9;
      span {
        color: #2890d4;

        ${
          "" /* -webkit-text-stroke-width: 0.4px;
        -webkit-text-stroke-color: white; */
        }
        text-shadow: 2px 2px 8px #0d47a1;
      }

      p {
        font-size: 5rem;
      }
    }
    .para {
      color: white;
      font-size: 1.9rem;
      text-align: center;
      letter-spacing: 1px;
    }
    .icons {
      font-size: 2rem;
      display: flex;
      gap: 4rem;
      color: white;
      .icon {
        cursor: pointer;
        transition: all 0.3s ease;
        -webkit-transition: all 0.3s ease 0s;
        -moz-transition: all 0.3s ease 0s;
        -o-transition: all 0.3s ease 0s;
        &:hover {
          transform: scale(1.3);
          color: #2890d4;
          text-shadow: 2px 2px 8px #0d47a1;
        }
      }
    }
  }
  @media (max-width: ${({ theme }) => theme.media.tab}) {
    .main-section {
      .main-heading {
        font-size: 1rem;
        p {
          font-size: 4rem;
          line-height: 1.5;
        }
      }
      .para {
        font-size: 2rem;
      }
    }
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .main-section {
      .main-heading {
        font-size: 1rem;
        p {
          font-size: 3.5rem;
          line-height: 1.5;
        }
      }
      .para {
        font-size: 2rem;
      }
    }
  }
`;

const Hero = () => {
  AOS.init();
  return (
    <Wrapper id="hero">
      <div className="main-section">
        <div
          className="main-heading"
          data-aos="zoom-in-down"
          data-aos-duration="800"
          data-aos-offset="500"
        >
          <p>
            I'M Designer & <span>MERN </span>
            Stack
          </p>
          <p>Developer.</p>
        </div>
        <p className="para" data-aos="fade-up">
        Highly skilled MERN (MongoDB, Express.js, React.js, Node.js) stack developer with a passion for creating efficient, scalable, and robust web applications. With a strong foundation in full-stack development, I bring a unique blend of technical expertise and creative problem-solving.
        </p>
        <div className="icons" data-aos="fade-up">
          <GrFacebookOption className="icon" />
          <PiInstagramLogoBold  className="icon" />
          <FaXTwitter className="icon" />
          <GrGooglePlus className="icon" />
          <GrGithub className="icon" />
          <GrLinkedinOption className="icon" />
        </div>
        <Button data-aos="flip-up" data-aos-duration="800">
          Hire Me
        </Button>
      </div>
    </Wrapper>
  );
};

export default Hero;
