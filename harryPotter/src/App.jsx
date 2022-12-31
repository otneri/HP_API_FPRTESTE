import { BrowserRouter } from "react-router-dom";
import { Global } from "../themes/GlobalStyle";
import { CasaProvider } from "./contexts/useCasas/casaProvider";
import { ModalProvider } from "./contexts/useModal/modalProvider";
import { Rotas } from "./routes/router";

function App() {
  return (
    <div className="App">
      <Global />
      <CasaProvider>
        <ModalProvider>
          <BrowserRouter>
            <Rotas />
          </BrowserRouter>
        </ModalProvider>
      </CasaProvider>
    </div>
  );
}

export default App;
