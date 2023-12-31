import styled from "styled-components";

export const Button2 = styled.button`
  width: 22rem;
  height: 5.6rem;
  background: linear-gradient(to right, #0acffe 0%, #495aff 100%);
  margin-top: 2rem;
  color: white;
  border: none;
  border-radius: 1rem;
  font-size: 2rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  -webkit-transition: all 0.3s ease 0s;
  -moz-transition: all 0.3s ease 0s;
  -o-transition: all 0.3s ease 0s;
  
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,
      rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
    transform: scale(1.1);
  }
`;
