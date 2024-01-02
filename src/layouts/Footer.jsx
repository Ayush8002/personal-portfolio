import React from "react";
import styled from "styled-components";
import Wrapper from "../Wrapper";

const FooterWrapper = styled.footer`
  height: 100%;
  width: 100%;
  margin-top:6rem;
  position:relative;
  .footer {
    height: 100%;
    width: 100%;
    background-color: #1b252e;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5rem;
    .col-1,
    .col-2,
    .col-3,
    .col-4 {
      color: white;
      
      .logo {
        font-size: 3rem;
        margin-top: 1rem;
      }
      .heading {
        font-size: 1.7rem;
        margin: 1.5rem 0;
        font-weight: 600;
      }
      p {
        font-size: 1.5rem;
        margin: 1rem 0;
      }
      .input {
        margin: 1rem 0;
        width: 20rem;
        height: 4rem;
        border: none;
        border-radius: 3rem;
        padding: 2rem;
        font-size: 1.3rem;
        transition: all 0.3s linear;
        &:focus {
          outline: none;
          box-shadow: none;
          border: none;
        }
      }
    }
  }
  .bottom-section {
    background-color: #121d21;
    height: 5rem;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 1.3rem;
  }
  .top-footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 7rem;
    height: 10rem;
    width: 100%;
    background-color: white;
    border-radius: 0.5rem;
    margin-top:2rem;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
      rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
      rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
    ${'' /* transform: translateY(5rem); */}
    h1 {
      font-size: 2.5rem;
    }
    .btn {
      width: 15rem;
      height: 4rem;
      color: white;
      font-size: 1.6rem;
      border: none;
      border-radius: 0.5rem;
      background: linear-gradient(to right, #0acffe 0%, #495aff 100%);
      transition:all 0.2s linear;
      &:hover{
        transform: scale(1.1);
      }
    }
  }
  @media (max-width: ${({ theme }) => theme.media.tab}) {
    .footer {
    height: 100%;
    width: 100%;
    background-color: #1b252e;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5rem;
    .col-1,
    .col-2,
    .col-3,
    .col-4 {
      color: white;
      
      .logo {
        font-size: 3rem;
        margin-top: 1rem;
      }
      .heading {
        font-size: 1.7rem;
        margin: 1.5rem 0;
        font-weight: 600;
      }
      p {
        font-size: 1rem;
        margin: 1rem 0;
      }
      .input {
        margin: 1rem 0;
        width: 12rem;
        height: 4rem;
        border: none;
        border-radius: 3rem;
        padding: 2rem;
        font-size: 1.3rem;
        transition: all 0.3s linear;
        &:focus {
          outline: none;
          box-shadow: none;
          border: none;
        }
      }
    }
  }
   .top-footer{
    padding: 0 4rem;
    h1 {
      font-size: 1.5rem;
    }
   }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .top-footer{
    padding: 0 4rem;
    h1 {
      font-size: 1.4rem;
    }
   }
  }
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <Wrapper>
        <div className="top-footer">
          <h1>Get ready to build project!</h1>
          <button className="btn">Hire me</button>
        </div>
      </Wrapper>
      <div className="footer">
        <div className="container">
          <div className="grid grid-four-column">
            <div className="col-1">
              <h1 className="logo">logo</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
                ipsa odio dolorem, alias laboriosam veritatis fugiat officia
                delectus officiis provident nesciunt obcaecati aut.
              </p>
            </div>
            <div className="col-2">
              <div>
                <h4 className="heading">Email</h4>
                <p>digitalayush5142@gmail.com</p>
              </div>
              <div>
                <h4 className="heading">Address</h4>
                <p>
                  643, Adarsh Nagar, Link Rd, Oshiwara, Jogeshwari(w)
                </p>
                <p>
                  Mumbai
                </p>
              </div>
            </div>
            <div className="col-3">
              <h4 className="heading">Phone</h4>
              <p>+91-8839081589</p>
              <p>+91-8839081589</p>
            </div>
            <div className="col-4">
              <h4 className="heading">Follow Us</h4>
              <p>+91-8839081589</p>
              <input
                placeholder="Type your Email here"
                className="input"
              ></input>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom-section">Copyright © 2023 Material UI SAS.</div>
    </FooterWrapper>
  );
};

export default Footer;
