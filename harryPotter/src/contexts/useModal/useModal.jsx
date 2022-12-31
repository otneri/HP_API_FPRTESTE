import { useContext } from "react";
import { ModalContexto } from "./modalProvider";

export const useModal = () => {
  const context = useContext(ModalContexto);
  return context;
};
