import { Navigate, Route, Routes } from "react-router-dom";
import { PersonagensCasa } from "../pages/casas/casas";
import { Home } from "../pages/home/home";
import { Personagens } from "../pages/personagens/personagens";

export const Rotas = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/persons" element={<Personagens />} />
      <Route path="/personsHome" element={<PersonagensCasa />} />
      <Route path="*" element={<Navigate to="/" replace={true} />} />
    </Routes>
  );
};
