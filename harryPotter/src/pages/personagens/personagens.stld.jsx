import styled from "styled-components";
import back from '../../assets/background1.png'


export const Header = styled.header`
    background-color:#A6955A ;
    display: flex;
    justify-content: center;

`

export const Logostld = styled.img`
    padding: 1em;
    
`
export const Mainstld = styled.main`
    background-image: url(${back});
    height: 100vh;
`
export const GridPerson = styled.div`
    width: 100%;
    display: flex ;
    align-items: center;
    justify-content: space-between;
    gap: 1em;
    flex-wrap: wrap;
`

export const Persons = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1em ;
`

export const PersonImg = styled.img`
    border-color: #A6955A;
    border-style: solid;
    padding: 1em;
`

export const PersonName = styled.a`
    font-size: x-large;
    cursor: pointer;
    color: #A6955A ;

    &:hover{
        text-decoration: underline;
    }

`
export const TextAtribute = styled.h2 `
    color: #A6955A;
    font-size: medium;

`

export const Atribute = styled.h2 `
    color: #D9D9D9;
    font-size: medium;
`

export const DivModal = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2em;
    margin: 2em;
`


export const DivAtributo = styled.div`
    display: flex;
    margin: .5em 0em ;
`

export const ButtonModal = styled.button `
    border-radius: 1.5em;
    padding: 0em .3em;
    border: none;
    color: #031C29;
    background-color: #A6955A;
`

export const DivButton = styled.div`
    display: flex;
    justify-content: flex-end;
`