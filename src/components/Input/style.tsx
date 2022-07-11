import styled from "styled-components";

export const CustomLabel = styled.label`
  width: 80%;
  height: 70px;
  min-height: 80px;
  background-color: transparent;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;

  p{
    font-weight: 700;
    font-size: 18px;
    height: 20px;
    margin-bottom: 2px;
  }

  span{
    color: var(--red-1);
  }
`
export const CustomInput = styled.input`
  width: 100%;
  min-height: 40px;
  border: 1px solid var(--black-1);
  border-radius: 30px;
  padding-left: 10px;
  
  &::placeholder{
    color: var(--gray-1);
  }
`