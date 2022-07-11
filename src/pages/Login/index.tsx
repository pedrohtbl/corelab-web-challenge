import { useState } from "react";
import { Redirect, useHistory } from "react-router-dom";
import api from "../../lib/api"
import { CustomMain, LoginButton } from "./style"

const Login = () =>{
  const history = useHistory()

  /* if(token){
    return <Redirect to={"/vehicles"}/>
  } */

  const login = () =>{
    api.post("/login",{
      email: "pedro@email.com",
      password: "pedro123"
    })
    .then((res) => {
      const {id} = res.data.token
      const{token} = res.data.token 

      sessionStorage.setItem("token", token)
      sessionStorage.setItem("id", id)
      
      history.push( "/vehicles")
    })
  }

  return(
    <CustomMain>
      <LoginButton onClick={login}>
        Login
      </LoginButton>
    </CustomMain>
  )
}

export default Login