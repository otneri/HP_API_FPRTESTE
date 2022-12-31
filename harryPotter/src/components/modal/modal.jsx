import { useState } from 'react';
import Modal from 'react-modal'
import { useModal } from '../../contexts/useModal/useModal';
import PropTypes from 'prop-types'
import { Atribute, ButtonModal, DivAtributo, DivButton, DivModal, PersonImg, TextAtribute } from '../../pages/personagens/personagens.stld';


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

export const ModalPerson = ({selectPerson}) => {
    const {handleModal, modalIsOpen } = useModal()

    return (
    <Modal
    isOpen={handleModal}
    onRequestClose={modalIsOpen}
    style={customStyles}
    contentLabel="Person Detail"
  >
    <DivButton>
      <ButtonModal onClick={handleModal}>x</ButtonModal>
    </DivButton>
    <DivModal>
      <PersonImg src={selectPerson?.image} />

      <div>
         <DivAtributo>
                <TextAtribute>Nome:</TextAtribute>
                <Atribute>{selectPerson?.name} </Atribute>
                </DivAtributo>


               {/* <DivAtributo>
                <TextAtribute>Casa:</TextAtribute>
                <Atribute> {selectPerson?.house}</Atribute>
                </DivAtributo>
                <DivAtributo>
                <TextAtribute>Espécie:</TextAtribute>
                <Atribute>{selectPerson?.species}</Atribute>
                </DivAtributo>
                <DivAtributo>
                <TextAtribute>Data de Nascimento:</TextAtribute>
                <Atribute>{selectPerson?.birth}</Atribute>
                </DivAtributo>
                <DivAtributo>
                <TextAtribute>Gênero:</TextAtribute>
                <Atribute> {selectPerson?.gender}</Atribute>
                </DivAtributo>
                <DivAtributo>
                <TextAtribute>Patronus:</TextAtribute>
                <Atribute> {selectPerson?.patronus}</Atribute>
                </DivAtributo>
                <DivAtributo>
                <TextAtribute>Varinha:</TextAtribute>
                <Atribute> {selectPerson?.wand}</Atribute>
                </DivAtributo> 
            
                <DivAtributo>
                <TextAtribute>Madeira:</TextAtribute>
                <Atribute> {selectPerson?.wand?.wood}</Atribute>
                </DivAtributo>
                <DivAtributo>
                <TextAtribute>Core:</TextAtribute>
                <Atribute> {selectPerson?.wand?.core}</Atribute>
                </DivAtributo> 
                <DivAtributo>
                <TextAtribute>Comprimento:</TextAtribute>
                <Atribute> {selectPerson?.wand?.length}</Atribute>
                </DivAtributo> 


                <DivAtributo>
                <TextAtribute>Ancestral:</TextAtribute>
                <Atribute> {selectPerson?.ancestry}</Atribute>
                </DivAtributo>
                <DivAtributo>
                <TextAtribute>Ator:</TextAtribute>
                <Atribute> {selectPerson?.actor}</Atribute>
                </DivAtributo>  */}
      </div>
    </DivModal>
    
  </Modal>
  )}

  ModalPerson.propTypes = {
    selectPerson: PropTypes.object
  }