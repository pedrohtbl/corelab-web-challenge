import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
 *{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: 0;
 }

 :root{
  --primary-color:#00ddff;
  --secundary-color:#d2f6fc; 
  --gray-1:#9a9898;
  --black-1:#000000;
  --red-1:#f69292;
 }

 #root{
  display: flex;
  flex-direction: column;
  min-height: 100vh;
 }

 button{
  cursor: pointer;
 }

`