import { createContext, useState } from "react";
import PropTypes from "prop-types";
import {ModalPerson} from '../../components/modal/modal'

export const ModalContexto = createContext();

export const ModalProvider = ({ children }) => {
  
    const [modalIsOpen, setIsOpen] = useState(false);
    
    const handleModal = () => {
        setIsOpen(true);
      }
    
      
  return (
    <ModalContexto.Provider value={{handleModal}}>
      {children}
      {modalIsOpen && <ModalPerson/>}
    </ModalContexto.Provider>
  );
};

ModalProvider.propTypes = {
  children: PropTypes.node,
};