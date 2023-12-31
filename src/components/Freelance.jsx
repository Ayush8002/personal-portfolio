import React from "react";
import styled from "styled-components";
import { Button2 } from "../styles/Button2";
import Wrapper from "../Wrapper";

const FreelanceWrapper = styled.section`
  height: 17rem;
  background: url("img.avif");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width:100%;
  display:flex;
  justify-content:center;
  align-items:center;
    .container{
      width:100%;
      div{
      display:flex;
      justify-content:space-between;
      align-items:center;
      h1{
        font-size:2rem;
        color:white;
      }
      }
    }

    @media (max-width: ${({ theme }) => theme.media.tab}) {
    .container{
      div{
     h1{
        font-size:1.7rem;
        color:white;
      }
      }
    }
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .container{
      div{
     h1{
        font-size:1.6rem;
        color:white;
      }
      }
    }
  }
`;

const Freelance = () => {
  return (
    <FreelanceWrapper>
      <div className="container" data-aos="flip-up">
        <Wrapper>
          <h1>I'm Available for Freelance projects!</h1>
          <Button2>Hire me</Button2>
        </Wrapper>
      </div>
    </FreelanceWrapper>
  );
};

export default Freelance;
