import { ReactNode } from "react"
import { CustomForm } from "./style"

interface IForm{
  children: ReactNode;
  handleSubmit: any;
  onSubmitFunction: any
}

const Form = ({children,handleSubmit, onSubmitFunction}:IForm) =>{
  return(
    <CustomForm onSubmit={handleSubmit(onSubmitFunction)}>
      {children}
    </CustomForm>
  )
}

export default Form