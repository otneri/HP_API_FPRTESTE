import { Titlestld } from "./title.stld"
import PropTypes from 'prop-types'


export const Title = ({children}) => {
    return (
        <Titlestld>{children}</Titlestld>
    )
}

Title.propTypes =  {
    children: PropTypes.node,
}