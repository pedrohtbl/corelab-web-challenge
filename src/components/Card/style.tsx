import styled from "styled-components";

export const CustomLi = styled.li`
  width: 300px;
  height: 250px;
  list-style: none;
  margin-bottom: 10px;
  padding-top: 15px;
  margin-right: 10px;
  background-color: ${({color}) => (
  color === "vermelho" && "#f69292 "  || 
  color === "preto" && "#363636" || 
  color === "cinza" && "#C0C0C0" || 
  color === "prata" && "#C0C0C0" || 
  color === "branco" && "	#F8F8FF" ||
  color === "amarelo" && "	#F0E68C" ||
  color === "verde" && "	#00FA9A" ||
  color === "azul" && "	#6495ED" ||
  color === "creme" && "	#F5F5DC" ||
  color === "bege" && "	#F5F5DC" 
  )};
  color:${({color}) => (color === "preto" && "#F8F8FF" )};
  

  p,h2{
    margin-left: 20px;
  }

  h2{
    margin-bottom: 10px;
  }

  p{
    margin-bottom: 5px;
  }

  p>span{
    font-weight: 600;
  }

  div{
    display: flex;
    justify-content: flex-end;
    width: 95%;
    height: 40px;
  }

  div>svg{
    width: 20px;
    height: 20px;
    margin-left: 15px;
    cursor: pointer;
  }

@media (min-width: 481px){
  width: 350px;
}

@media (min-width: 769px) {
  margin-bottom: 20px;
  margin-right: 20px;
}

`