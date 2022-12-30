import { Button } from "../../components/Button/Button";
import { Imagem, HpLogo } from "../../components/images/hpLogo/hpLogo";
import { Title } from "../../components/title/title";
import {
  Bar,
  HomeBackground,
  DivLogo,
  DivConteinerStld,
  DivEscudo,
  DivCasas,
  LinhaStld,
} from "./home.stld";
import linha from "../../assets/linha.png";
import escudo from "../../assets/escudo.png";
import grifinoria from "../../assets/grifinoria.png";
import sonserina from "../../assets/sonserina.png";
import lufalufa from "../../assets/lufa-lufa.png";
import cornival from "../../assets/corvinal.png";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { GetAllChar } from "../../services/hpAPI";
import { useCasa } from "../../contexts/useCasas/useCasas";

export const Home = () => {
  const [persons, setPersons] = useState([])
  const {casa, setCasa} = useCasa()
  



  useEffect(()=>{
    GetAllChar()
    .then((response) =>{
     setPersons(response.data)
    })
    .catch((error) => {
     console.log('ERRO: ', error);
    })
    
 }, [])

  const filtraPersonagensCasa = (house) => {
    
    const filtro = persons.filter(pessoa => pessoa.house === house)
    return console.log(filtro) ;
  } 
  
  return (
    <>
      <Bar />
      <HomeBackground>
        <DivConteinerStld>
          <DivLogo>
            <HpLogo />
            <Link to="/persons">
              <Button> Veja Todos os personagens</Button>
            </Link>
          </DivLogo>

          <DivEscudo>
            <LinhaStld src={escudo} />
            <Title>Navegue pelas Casas</Title>
            <LinhaStld src={linha} />
          </DivEscudo>
          <DivCasas>
            <Link to="/personsHome">
              <Imagem children={grifinoria}  onClick={() => setCasa("Gryffindor")}/>
            </Link>
            <Link to="/personsHome">
              <Imagem children={sonserina}  onClick={()=> setCasa("Slytherin")}/>
            </Link>
            <Link to="/personsHome">
              <Imagem children={lufalufa}  onClick={()=> setCasa("Hufflepuff")} />
            </Link>
            <Link to="/personsHome">
              <Imagem children={cornival}  onClick={()=> setCasa("Ravenclaw")} />
            </Link>
          </DivCasas>
        </DivConteinerStld>
      </HomeBackground>
    </>
  );
};
