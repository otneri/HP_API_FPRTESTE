import hpLogo from '../../../assets/bpo 1.png'
import {HpLogostld, IconStld} from './hpLogo.stld'
import PropTypes from 'prop-types'

export const HpLogo = () => {
    return (
        <HpLogostld src={hpLogo}/>
    )
}

export const Imagem = ({children, onClick}) => {
    return (
        <IconStld src={children} onClick={onClick}/>
    )
}

Imagem.proptypes = {
    children: PropTypes.func,
    onClick: PropTypes.func,
}
