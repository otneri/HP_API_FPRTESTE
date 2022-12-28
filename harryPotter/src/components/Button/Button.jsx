import { Buttonstld } from "./Button.std"
import Proptypes from "prop-types";

export const Button = ({children, handleClick}) => {
    return <Buttonstld onClick={handleClick}>{children}</Buttonstld>
}

Button.propTypes = {
    children: Proptypes.node,
    handleClick: Proptypes.func,
  };
  