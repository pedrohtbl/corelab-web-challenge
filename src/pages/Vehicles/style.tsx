import styled from "styled-components";
import { AiOutlineArrowLeft } from "react-icons/ai"

export const CustomMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  min-height: 55vh;
  padding-top: 100px;

  >section{
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    max-width: 700px;
  }

  >section>svg{
    cursor: pointer;
    width: 25px;
    height: 25px;
  }
`

export const ArrowLeft = styled(AiOutlineArrowLeft)`
  width: 30px;
  height: 30px;
  position: relative;
  top: 20px;
  left: 20px;
  cursor: pointer;
`