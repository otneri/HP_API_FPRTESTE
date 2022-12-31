import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const CasaContexto = createContext({
  casa: null,
  setCasa: () => {},
});

export const CasaProvider = ({ children }) => {
  const [casa, setCasa] = useState();

  return (
    <CasaContexto.Provider value={{ casa, setCasa }}>
      {children}
    </CasaContexto.Provider>
  );
};

CasaProvider.propTypes = {
  children: PropTypes.node,
};
