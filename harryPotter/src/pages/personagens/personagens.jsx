import { Atribute, DivAtributo, DivModal, GridPerson, Header, Logostld, Mainstld, PersonImg, PersonName, Persons, TextAtribute,ButtonModal, DivButton, DivVarinha } from "./personagens.stld"
import harry from '../../assets/logo1.png'
import { DivConteinerStld, DivEscudo, LinhaStld } from "../home/home.stld"
import linha from '../../assets/linha.png'
import escudo from '../../assets/escudo.png'
import { Title } from "../../components/title/title"
import Modal from 'react-modal'
import { useEffect, useState } from "react"
import {Link} from 'react-router-dom'
import axios from "axios"
import { GetAllChar } from "../../services/hpAPI"
import { Loading } from "../../components/Loading/loading"


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
    
  
    const [persons, setPersons] = useState([])

    // Preenchimento do Modal
    const [modalInfo, setModalInfo] = useState({});
    function HandleSelecionar(event, param) {
        setModalInfo(param);
        
    }

    // Abertura do modal
    const [isOpen, setIsOpen] = useState(false);
    function HandleModal() {
        setIsOpen(true);
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

  

    
    

    return (
        <>
       
          

            <Header>
              <Link to='/'> <Logostld src={harry} alt="harryPotter"/></Link>
            </Header>
            <Mainstld>
            <DivConteinerStld>
            

            <DivEscudo>
            <LinhaStld src={escudo} alt="escudo"/>
            <Title >PERSONAGENS</Title>
            <LinhaStld src={linha} alt="linha"/>
            </DivEscudo>

               

            <GridPerson>
                
                {          
                persons.length > 0 ?  (persons.map((pessoa, id) => (


                    <Persons key={id} >
                        <PersonImg src={pessoa.image} alt="personagem" />
                        <PersonName onClick={(event) => {HandleModal();HandleSelecionar(event, pessoa)}}>{pessoa.name}</PersonName>
                    </Persons>

                ))):(<Loading/>)
                
                }

                
                 
                
            </GridPerson>

            </DivConteinerStld>

            </Mainstld>

         
            <Modal
            isOpen={isOpen}    
            onRequestClose={()=>setIsOpen(false)}
            style={customStyles}
            contentLabel="Person Detail"
            >
                

            <DivButton>
            <ButtonModal onClick={()=>setIsOpen(false)}>x</ButtonModal>
            </DivButton>


            <DivModal >

            <PersonImg src={modalInfo?.image}/>

            <div>
                   <DivAtributo>
                    <TextAtribute>Nome:</TextAtribute>
                    <Atribute>{modalInfo?.name} </Atribute>
                    </DivAtributo>
                    <DivAtributo>
                    <TextAtribute>Casa:</TextAtribute>
                    <Atribute> {modalInfo?.house}</Atribute>
                    </DivAtributo>
                     <DivAtributo>
                    <TextAtribute>Espécie:</TextAtribute>
                    <Atribute>{modalInfo?.species}</Atribute>
                    </DivAtributo>
                    <DivAtributo>
                    <TextAtribute>Data de Nascimento:</TextAtribute>
                    <Atribute>{modalInfo?.dateOfBirth}</Atribute>
                    </DivAtributo>
                    <DivAtributo>
                    <TextAtribute>Gênero:</TextAtribute>
                    <Atribute> {modalInfo?.gender}</Atribute>
                    </DivAtributo>
                    <DivAtributo>
                    <TextAtribute>Patronus:</TextAtribute>
                    <Atribute> {modalInfo?.patronus}</Atribute>
                    </DivAtributo>
                     <DivAtributo>
                    <TextAtribute>Varinha</TextAtribute>
                    
                    </DivAtributo>   
                
                        <DivVarinha>
                        <TextAtribute>Madeira:</TextAtribute>
                        <Atribute> {modalInfo?.wand?.wood}</Atribute>
                        </DivVarinha>
                        <DivVarinha>
                        <TextAtribute>Core:</TextAtribute>
                        <Atribute> {modalInfo?.wand?.core}</Atribute>
                        </DivVarinha> 
                        <DivVarinha>
                        <TextAtribute>Comprimento:</TextAtribute>
                        <Atribute> {modalInfo?.wand?.length}</Atribute>
                        </DivVarinha>  

                    <DivAtributo>
                    <TextAtribute>Ancestral:</TextAtribute>
                    <Atribute> {modalInfo?.ancestry}</Atribute>
                    </DivAtributo>
                    <DivAtributo>
                    <TextAtribute>Ator:</TextAtribute>
                    <Atribute> {modalInfo?.actor}</Atribute>
                    </DivAtributo>    
                
            </div>


            </DivModal>


            )
            </Modal>
        
            

            
        </>
    )
}