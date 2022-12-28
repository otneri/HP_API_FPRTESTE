import styled from "styled-components";
import background from '../../assets/background.png'
import linha from '../../assets/linha.png'
// import grifinoria from '../../assets/grifinoria.png'
// import sonserina from '../../assets/sonserina.png'
// import lufalufa from '../../assets/lufa-lufa.png'
// import cornival from '../../assets/cornival.png'
import escudo from '../../assets/escudo.png'



export const Bar = styled.div`
    background-color: #A6955A;
    padding: 2em;

`
export const HomeBackground = styled.div`
    background-image: url(${background}) ;
    height: 100vh;
    width: 100%;
    background-repeat: no-repeat;
    background-size: cover;
`

export const DivLogo = styled.div`
    padding: 10em 0em;
    
`
export const DivEscudo = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 2em;
    
    
`
export const DivCasas = styled.div`
    display: flex;
    gap: 1em;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    
`
export const DivConteinerStld = styled.div `
    margin: 0em 5em;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
`

