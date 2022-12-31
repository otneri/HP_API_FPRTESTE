
import { BrowserRouter } from 'react-router-dom'
import { Global } from '../themes/GlobalStyle'
import { CasaProvider } from './contexts/useCasas/casaProvider'
import { ModalProvider } from './contexts/useModal/modalProvider'
import { PersonagensCasa } from './pages/casas/casas'
import { Home } from './pages/home/home'
import { Personagens } from './pages/personagens/personagens'
import { Rotas } from './routes/router'

function App() {
 
  return (
    <div className="App">
        <Global/>
        <CasaProvider>
          <ModalProvider>
            <BrowserRouter>
              <Rotas/>
            </BrowserRouter>
          </ModalProvider>
        </CasaProvider>
      

    </div>
  )
}

export default App
