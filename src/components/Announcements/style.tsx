import styled from "styled-components";

export const CustomUl = styled.ul`
  width: 90%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin-bottom: 50px;
  margin-top: 30px;

@media (min-width: 481px){
  flex-direction: column;
  align-items: center;
}

@media (min-width: 769px) {
 width: 60%;
 flex-direction: row;
 justify-content: flex-start;
}

@media (min-width: 1025px) {
  
}

`

export const Div = styled.div`
  width: 60vw;
  display: flex;
  justify-content: flex-start;
`