import React from 'react'
import styled from 'styled-components'

const WrapperStyle = styled.div`
padding:0 5rem;
`
const Wrapper = ({ children }) => {
    return (
        <WrapperStyle>
            {children}
        </WrapperStyle>
    ) 
}

export default Wrapper
