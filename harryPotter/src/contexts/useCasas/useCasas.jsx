import { useContext } from "react";
import { CasaContexto } from "./casaProvider";

export const useCasa = () => {
  const context = useContext(CasaContexto);
  return context;
};
