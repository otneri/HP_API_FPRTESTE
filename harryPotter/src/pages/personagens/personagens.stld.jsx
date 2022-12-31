import styled from "styled-components";
import back from '../../assets/background1.png'


export const Header = styled.header`
    background-color:#A6955A ;
    display: flex;
    justify-content: center;

`

export const Logostld = styled.img`
    padding: 1em;
    cursor: pointer;
    
`
export const Mainstld = styled.main`
    background-image: url(${back});
    height: 100%;
    background-repeat: repeat;
`
export const GridPerson = styled.div`
    width: 100%;
    display: flex ;
    align-items: flex-end;
    justify-content: space-between;
    gap: 3em;
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
    width: 15em;
    height: 20em;
    @media only screen and (max-width: 350px) {
        width: 70% ;
        height: 70%;

    }
`

export const PersonName = styled.a`
    text-align: center;
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
    cursor: pointer;
`

export const DivButton = styled.div`
    display: flex;
    justify-content: flex-end;
`

export const DivVarinha = styled.div `
    margin-left: 1em;
    width: 100%;
`