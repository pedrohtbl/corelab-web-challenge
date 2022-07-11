import { Div } from "./style";
import {CustomButton} from "./style"
import { GrAdd } from "react-icons/gr"

interface IButton {
  onClick: () => void;
  text: string;
}

const Button = (props: IButton) => {
  return(
    <Div>
      <CustomButton onClick={props.onClick}><GrAdd/> {props.text}</CustomButton>
    </Div>
  )
};

export default Button;
