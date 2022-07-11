import { ISelect } from "../../types/Input"
import { CustomLabel, CustomSelect } from "./style"

const Select = ({label, register, name,children} : ISelect) =>{
  return(
    <CustomLabel>
      <p>{label}</p>
      <CustomSelect {...register(name)}>
        {children}  
      </CustomSelect>
    </CustomLabel>
  )
}

export default Select