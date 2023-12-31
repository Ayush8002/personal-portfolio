import React from 'react'
import styled from 'styled-components'
import Navbar from './Navbar'


const HeaderWrapper = styled.header`
    height:8rem;
    background-color:black;
    opacity: 0.7;
    display: flex;
    align-items: center;
    justify-content:center;
    margin:1.2rem;
    border-radius:1rem; 
    position:fixed;
    top:0;
    right:0;
    left:0;
    z-index:999;
    overflow-x:hidden;

    

`

const Header = () => {
    return (
        <HeaderWrapper>
            <Navbar />   
        </HeaderWrapper>
    )
}

export default Header
