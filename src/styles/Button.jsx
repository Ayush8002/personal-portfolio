import styled from "styled-components";

export const Button = styled.button`
  border: 2px solid white;
  border-radius: 60rem;
  font-size:2rem;
  width: 22rem;
  height: 5rem;
  background: rgba(0, 0, 0, 0);
  color: white;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;
  -webkit-transition: all 0.3s ease 0s;
  -moz-transition: all 0.3s ease 0s;
  -o-transition: all 0.3s ease 0s;
  &:hover {
    color: #2890d4;
    transform: scale(1.1);
    border: 2px solid #2890d4;
  }
`;
