import styled from "styled-components";

export const CustomForm = styled.form`
  height: 90%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 25px;
  padding-top: 20px;

  button{
    width: 40%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--primary-color);
    color: var(--black-1);
    height: 40px;
    border-radius: 20px;
    border: none;
    font-weight: 500;
    font-size: 18px;
    max-width: 515px;
    margin-top: 30px;
    align-self: flex-end;
    margin-right: 55px;
    min-height: 40px;
    margin-bottom: 20px;
  }
`