import React from 'react'
import styled from 'styled-components'
import Navbar from './Navbar'


const HeaderWrapper = styled.header`
    height:8rem;
    width:100%;
    background-color:black;
    opacity: 0.7;
    display: flex;
    align-items: center;
    justify-content:center;
    border-radius:1rem; 
    position:fixed;
    top:0;
    z-index:99;
 
`

const Header = () => {
    return (
        <HeaderWrapper>
            <Navbar />   
        </HeaderWrapper>
    )
}

export default Header
