import React from 'react'
import Wrapper from '../Wrapper'
import styled from 'styled-components'

const ProjectWrapper = styled.section`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .container {
    margin:6rem 0 12rem 0;
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
      .para {
        font-size: 1.7rem;
        width: 66%;
        text-align: center;
      }
    }
  }
    .project-section{
      display:flex;
      justify-content:space-between;
      align-items:center;
      border-top: 1px solid black;
      border-bottom: 1px solid black;
      padding:4rem 0;
      transition: all 0.3s ease;
        -webkit-transition: all 0.3s ease 0s;
        -moz-transition: all 0.3s ease 0s;
        -o-transition: all 0.3s ease 0s;
      a{
        display:flex;
        justify-content:space-between;
        align-items:center;
        width:100%;
        color:black;
        transition: all 0.3s ease;
        -webkit-transition: all 0.3s ease 0s;
        -moz-transition: all 0.3s ease 0s;
        -o-transition: all 0.3s ease 0s;
           div{
             width:60%;
             float: right;
             transition: all 0.3s ease;
        -webkit-transition: all 0.3s ease 0s;
        -moz-transition: all 0.3s ease 0s;
        -o-transition: all 0.3s ease 0s;
               h1{
                font-size:1.4rem;
               }
               p{
                font-size:1.6rem;
               }
         }
         &:hover{
          display:flex;
        justify-content:space-between;
        align-items:center;
        width:100%;
           div{
             width:60%;
             float: right;
             transform: translateY(-30px);
               h1{
                font-size:1.4rem;
               }
               p{
                font-size:1.6rem;
               }
         }
      }
    }
    }
    @media (max-width: ${({ theme }) => theme.media.tab}) {
      .project-section{
      display:flex;
      justify-content:space-between;
      align-items:center;
      border-top: 1px solid black;
      border-bottom: 1px solid black;
      padding:4rem 0;
      transition: all 0.3s ease;
        -webkit-transition: all 0.3s ease 0s;
        -moz-transition: all 0.3s ease 0s;
        -o-transition: all 0.3s ease 0s;
      a{
        display:flex;
        justify-content:space-between;
        align-items:center;
        width:100%;
        color:black;
        transition: all 0.3s ease;
        -webkit-transition: all 0.3s ease 0s;
        -moz-transition: all 0.3s ease 0s;
        -o-transition: all 0.3s ease 0s;
           div{
             width:60%;
             float: right;
             transition: all 0.3s ease;
        -webkit-transition: all 0.3s ease 0s;
        -moz-transition: all 0.3s ease 0s;
        -o-transition: all 0.3s ease 0s;
               h1{
                font-size:1.4rem;
               }
               p{
                font-size:1.6rem;
               }
         }
         &:hover{
          display:flex;
        justify-content:space-between;
        align-items:center;
        width:100%;
           div{
             width:60%;
             float: right;
             transform: translateY(-30px);
             h1{
                font-size:1rem;
               }
               p{
                font-size:1.2rem;
               }
         }
      }
    }}
 
    }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .project-section{
      display:flex;
      justify-content:space-between;
      align-items:center;
      border-top: 1px solid black;
      border-bottom: 1px solid black;
      padding:4rem 0;
      transition: all 0.3s ease;
        -webkit-transition: all 0.3s ease 0s;
        -moz-transition: all 0.3s ease 0s;
        -o-transition: all 0.3s ease 0s;
      a{
        display:flex;
        justify-content:space-between;
        align-items:center;
        width:100%;
        color:black;
        transition: all 0.3s ease;
        -webkit-transition: all 0.3s ease 0s;
        -moz-transition: all 0.3s ease 0s;
        -o-transition: all 0.3s ease 0s;
           div{
             width:60%;
             float: right;
             transition: all 0.3s ease;
        -webkit-transition: all 0.3s ease 0s;
        -moz-transition: all 0.3s ease 0s;
        -o-transition: all 0.3s ease 0s;
               img{
                width:10rem;
                height:7rem;
               }
               h1{
                font-size:1rem;
               }
               p{
                font-size:1.2rem;
               }
         }
         &:hover{
          display:flex;
        justify-content:space-between;
        align-items:center;
        width:100%;
           div{
             width:60%;
             float: right;
             transform: translateY(-30px);
         }
      }
    }}
   
    
  }
  

`

const Projects = () => {
  return (
    <ProjectWrapper>
      <Wrapper>
        <div className="container">
          <div className="main-content">
            <h2
              className="main-heading"
              data-aos="fade-up"
              data-aos-delay="500"
              data-aos-once="true"
            >
              Projects
            </h2>
            <p
              className="para"
              data-aos="zoom-in-up"
              data-aos-delay="500"
              data-aos-once="true"
            >
              MERN (MongoDB, Express.js, React, Node.js) stack is a popular technology stack for building full-stack web applications. Here are some project ideas that you can consider for MERN stack development:
            </p>
          </div>
        </div>
        <div className='project-section'>
          <a href='https://globalbazzar-ecommerce.onrender.com' target="_blank">
            <div>
              <img src="website.png" alt="Girl in a jacket" width="200" height="150" />
            </div>
            <div>
              <h1>E-commerce website</h1>
              <p>Complete MERN stack dynamic website with protected-route,admin section,authentication ,bycrypt ,and many more. </p>
            </div>
          </a>
        </div>
      </Wrapper>
    </ProjectWrapper>
  )
}

export default Projects
