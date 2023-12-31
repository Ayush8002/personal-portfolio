import React, { useState } from "react";
import styled from "styled-components";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import Wrapper from "../Wrapper";

const NumberCounterWrapper = styled.section`
  height: 20rem;
  background: url("img.avif");
  width: 100%;
  background-position: center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  .container {
    color: black;
    display: flex;
    align-items: center;
    justify-content: center;
    grid-template-columns: repeat(4, 1fr);
    color: white;
    width: 100%;
    .content {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
      div {
        width: 25rem;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        align-items: center;
        justify-content: center;
        .counter-number {
          font-size: 3rem;
        }
        p {
          font-size: 2rem;
          font-weight: bold;
        }
      }
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    height: 20rem;
    width: 100%;

  .container {
    color: black;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    grid-template-columns: repeat(2, 1fr);
    color: white;
    .content {
    
      div {
       
        gap: 1rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        .counter-number {
          font-size: 2rem;
        }
        p {
          font-size: 1rem;
          font-weight: bold;
        }
      }
    }
  }}
 
`;

const NumberCounter = () => {
  const [counterOn, setCounterOn] = useState(false);
  return (
    <NumberCounterWrapper>
    <Wrapper>
        <div className="container grid grid-four-column">
          <ScrollTrigger onEnter={() => setCounterOn(true)} className="content"
          >
            <div>
              <h2 className="counter-number">
                {counterOn && (
                  <CountUp
                    start={0}
                    end={2000}
                    duration={5}
                    scrollSpyOnce={false}
                  />
                )}
                +
              </h2>
              <p>project completed</p>
            </div>
            <div>
              <h2 className="counter-number">
                {counterOn && (
                  <CountUp
                    start={0}
                    end={500}
                    duration={5}
                    scrollSpyOnce={false}
                  />
                )}
                +
              </h2>
              <p>happy clients</p>
            </div>
            <div>
              <h2 className="counter-number">
                {counterOn && (
                  <CountUp
                    start={0}
                    end={130}
                    duration={5}
                    scrollSpyOnce={false}
                  />
                )}
                +
              </h2>
              <p>projects</p>
            </div>
            <div>
              <h2 className="counter-number">
                {counterOn && (
                  <CountUp
                    start={0}
                    end={43}
                    duration={5}
                    scrollSpyOnce={false}
                  />
                )}
                +
              </h2>
              <p>users</p>
            </div>
          </ScrollTrigger>
        </div>
    </Wrapper>
      </NumberCounterWrapper>
  );
};

export default NumberCounter;
