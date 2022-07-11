import { IInput } from "../../types/Input"
import { CustomInput, CustomLabel } from "./style"

const Input = ({label, errors, register, name, ...rest} : IInput) =>{
  return(
    <CustomLabel>
      <p>{label}</p>
      <CustomInput errors={!!errors} {...register(name)} {...rest}/>
      {!!errors && <span>{errors}</span>}
    </CustomLabel>
  )
}

export default Input