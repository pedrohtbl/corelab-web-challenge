import styled  from "styled-components";

export const Div = styled.div`
  width: 80%;
  margin-bottom: 30px;
  margin-top: 35px;
  display: flex;
  justify-content: center;

@media (min-width: 481px){

}

@media (min-width: 769px) {
 svg{
  display: none;
 }
}

@media (min-width: 1025px) {
  width: 60%;
}

`

export const CustomButton = styled.button`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 10%;
  background-color: var(--primary-color);
  color: var(--black-1);
  height: 40px;
  border-radius: 20px;
  border: none;
  font-weight: 500;
  font-size: 18px;
  max-width: 380px;

  svg{
    margin-right: 10%;
  }

  @media (min-width: 481px){
    width: 60%;
  }

  @media (min-width: 769px) {
    justify-content: center;
    padding-left: 0;
  }

  @media (min-width: 1025px) {
    width: 50%;
    
  }

`