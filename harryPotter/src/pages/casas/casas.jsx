import {
  Atribute,
  DivAtributo,
  DivModal,
  GridPerson,
  Header,
  Logostld,
  Mainstld,
  PersonImg,
  PersonName,
  Persons,
  TextAtribute,
  ButtonModal,
  DivButton,
} from "../personagens/personagens.stld";
import harry from "../../assets/logo1.png";
import { DivConteinerStld, DivEscudo, LinhaStld } from "../home/home.stld";
import linha from "../../assets/linha.png";
import escudo from "../../assets/escudo.png";
import { Title } from "../../components/title/title";
import Modal from "react-modal";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { GetAllChar } from "../../services/hpAPI";
import { useCasa } from "../../contexts/useCasas/useCasas";
import { Loading } from "../../components/Loading/loading";

Modal.setAppElement("#root");
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#171717",
  },
  overlay: {
    background: "black",
    opacity: "95%",
  },
};

export const PersonagensCasa = () => {

const {casa} = useCasa()

console.log(casa);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [persons, setPersons] = useState([]);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  useEffect(()=>{
    GetAllChar()
    .then((response) =>{
     setPersons(response.data)
    })
    .catch((error) => {
     console.log('ERRO: ', error);
    })
    
 }, [])




    const casaFiltrada = persons?.filter(pessoa => pessoa?.house === casa)
    console.log(casaFiltrada);  



  return (
    <>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Person Detail"
      >
        <DivButton>
          <ButtonModal onClick={closeModal}>x</ButtonModal>
        </DivButton>
        <DivModal>
          <PersonImg src={escudo} />

          <div>
            <DivAtributo>
              <TextAtribute>Hello:</TextAtribute>
              <Atribute> Yess</Atribute>
            </DivAtributo>

            <DivAtributo>
              <TextAtribute>Hello:</TextAtribute>
              <Atribute> Yess</Atribute>
            </DivAtributo>

            <DivAtributo>
              <TextAtribute>Hello:</TextAtribute>
              <Atribute> Yess</Atribute>
            </DivAtributo>
          </div>
        </DivModal>
      </Modal>
      <Header>
        <Link to='/'><Logostld src={harry} alt="harryPotter" /></Link>
      </Header>
      <Mainstld>
        <DivConteinerStld>
          <DivEscudo>
            <LinhaStld src={escudo} alt="escudo" />
            <Title>{casa}</Title>
            <LinhaStld src={linha} alt="linha" />
          </DivEscudo>

          <GridPerson>
            {               
                casaFiltrada.length === 0? (<Loading/> ):
                
                casaFiltrada.map((pessoa, id) => (


                    <Persons key={id} >
                        <PersonImg src={pessoa.image} alt="personagem" />
                        <PersonName onClick={openModal}>{pessoa.name}</PersonName>
                    </Persons>

                ))}
          </GridPerson>
        </DivConteinerStld>
      </Mainstld>
    </>
  );
};
