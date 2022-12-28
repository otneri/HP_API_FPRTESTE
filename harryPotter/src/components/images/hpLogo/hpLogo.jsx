import hpLogo from '../../../assets/bpo 1.png'
import linha from '../../../assets/linha.png'
import escudo from '../../../assets/escudo.png'
import grifinoria from '../../../assets/grifinoria.png'
import sonserina from '../../../assets/sonserina.png'
import lufalufa from '../../../assets/lufa-lufa.png'
import cornival from '../../../assets/corvinal.png'
import {HpLogostld} from './hpLogo.stld'


export const HpLogo = () => {
    return (
        <HpLogostld src={hpLogo}/>
    )
}

export const Linha = () => {
    return (
        <img src={linha}/>
    )
}

export const Escudo = () => {
    return (
        <img src={escudo}/>
    )
}

export const Grifinoria = () => {
    return (
        <HpLogostld src={grifinoria}/>
    )
}

export const Sonserina = () => {
    return (
        <HpLogostld src={sonserina}/>
    )
}

export const Lufalufa = () => {
    return (
        <HpLogostld src={lufalufa}/>
    )
}

export const Cornival = () => {
    return (
        <HpLogostld src={cornival}/>
    )
}

