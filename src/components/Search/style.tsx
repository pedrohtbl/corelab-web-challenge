import styled from "styled-components";

export const Div = styled.div`
  width: 80%;
  position: relative;
  max-width: 650px;

  >svg{
    cursor: pointer;
    position: absolute;
    top: 10px;
    left: 15px;
  }
`

export const CustomInput = styled.input`
  width: 100%;
  height: 40px;
  background-color: var(--secundary-color);
  border-radius: 20px;
  padding-left: 15%;
  border: none;
  color: var(--black-1);
  
  &::placeholder{
    color: var(--gray-1);
  }

  
`