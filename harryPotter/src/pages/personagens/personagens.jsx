import { Atribute, DivAtributo, DivModal, GridPerson, Header, Logostld, Mainstld, PersonImg, PersonName, Persons, TextAtribute,ButtonModal, DivButton } from "./personagens.stld"
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
    const [modalIsOpen, setIsOpen] = useState(false);
    const [selectPerson, setSelectPerson] = useState([])
  
    const [persons, setPersons] = useState([])


    useEffect(()=>{
       GetAllChar()
       .then((response) =>{
        setPersons(response.data)
       })
       .catch((error) => {
        console.log('ERRO: ', error);
       })
       
    }, [])


    const filterPerson = (nome) => {
        const pessoaFiltrada = persons?.find(pessoa => pessoa?.name === nome)
        // setSelectPerson(pessoaFiltrada)
        console.log(pessoaFiltrada);
        return pessoaFiltrada 
    }
     filterPerson('Ron Weasley')


  

    
    function openModal() {
        setIsOpen(true);
        
      }
   
      function closeModal() {
        setIsOpen(false);
      }


     


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
                !persons? (<Loading/> ):
                
                persons.map((pessoa, id) => (


                    <Persons key={id} >
                        <PersonImg src={pessoa.image} alt="personagem" />
                        <PersonName onClick={openModal}>{pessoa.name}</PersonName>
                    </Persons>

                ))}

                

                
            </GridPerson>

            </DivConteinerStld>

            </Mainstld>

          
                <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Person Detail"
            >

            <DivButton>
            <ButtonModal onClick={closeModal}>x</ButtonModal>
            </DivButton>


            <DivModal >

            <PersonImg src={selectPerson?.image}/>

            <div>
                
                    {/* <DivAtributo>
                    <TextAtribute>Nome:</TextAtribute>
                    <Atribute>{selectPerson?.name} </Atribute>
                    </DivAtributo>


                    <DivAtributo>
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


            )
            </Modal>
        </>
    )
}