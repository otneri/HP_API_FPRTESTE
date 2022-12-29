import { Atribute, DivAtributo, DivModal, GridPerson, Header, Logostld, Mainstld, PersonImg, PersonName, Persons, TextAtribute,ButtonModal, DivButton } from "./personagens.stld"
import harry from '../../assets/logo1.png'
import { DivConteinerStld, DivEscudo, LinhaStld } from "../home/home.stld"
import linha from '../../assets/linha.png'
import escudo from '../../assets/escudo.png'
import { Title } from "../../components/title/title"
import Modal from 'react-modal';
import { useState } from "react"

Modal.setAppElement('#root')
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#171717',
    
  },
  overlay: {
    background: "black",
    opacity: '95%'
  }
};


export const Personagens = () => {
    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
      setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
      }

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

                <PersonImg src={escudo}/>
                
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
                <Logostld src={harry} alt="harryPotter" />
            </Header>
            <Mainstld>
            <DivConteinerStld>
                <DivEscudo>
                    <LinhaStld src={escudo} alt="escudo"/>
                    <Title >PERSONAGENS</Title>
                    <LinhaStld src={linha} alt="linha"/>
                </DivEscudo>

            <GridPerson>
                <Persons>
                    <PersonImg src={escudo} alt="" />
                    <PersonName onClick={openModal}>Olá</PersonName>
                </Persons>

                
            </GridPerson>

            </DivConteinerStld>

            </Mainstld>
        </>
    )
}