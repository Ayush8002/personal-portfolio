import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
import Wrapper from "../Wrapper";

const NavbarWrapper = styled.nav`
font-size:1.5rem;
width:100%;
.navbar{
 display:flex;
 align-items:center;
 justify-content:space-between;
 color:white;
 width:100%;
 .navbar-list{
    display:flex;
    gap:6rem;
 }
}

@media (max-width: ${({ theme }) => theme.media.tab}) {
    font-size:1.2rem;
    .navbar{

   .navbar-list{
    gap:4rem;
   }
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    font-size:1rem;
    .navbar{

   .navbar-list{
    gap:2.2rem;
   }
    }
  }

`;

const Navbar = ({ state }) => {
    const [isOpen, setOpen] = useState(false);

    return (
        <NavbarWrapper open={isOpen} state={state}>
            <Wrapper>
                <div className="navbar">
                    <h1 className="logo">logo</h1>
                    <ul className="navbar-list">
                        <li>
                            {" "}
                            <Link
                                activeClass="active"
                                to="hero"
                                spy={true}
                                smooth={true}
                                offset={-100}
                                duration={800}
                                onClick={() => setOpen(!isOpen)}
                                className="navbar-link"
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            {" "}
                            <Link
                                activeClass="active"
                                to="about"
                                spy={true}
                                smooth={true}
                                offset={-100}
                                duration={800}
                                onClick={() => setOpen(!isOpen)}
                                className="navbar-link"
                            >
                                About
                            </Link>
                        </li>
                        <li>
                            {" "}
                            <Link
                                activeClass="active"
                                to="service"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={800}
                                onClick={() => setOpen(!isOpen)}
                                className="navbar-link"
                            >
                                Service
                            </Link>
                        </li>
                        <li >
                            {" "}
                            <Link
                                activeClass="active"
                                to="contact"
                                spy={true}
                                smooth={true}
                                offset={-150}
                                duration={800}
                                onClick={() => setOpen(!isOpen)}
                                className="navbar-link"
                            >
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
            </Wrapper>
        </NavbarWrapper>
    );
};

export default Navbar;
