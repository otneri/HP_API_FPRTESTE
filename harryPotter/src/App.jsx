
import { BrowserRouter } from 'react-router-dom'
import { Global } from '../themes/GlobalStyle'
import { CasaProvider } from './contexts/useCasas/casaProvider'
import { PersonagensCasa } from './pages/casas/casas'
import { Home } from './pages/home/home'
import { Personagens } from './pages/personagens/personagens'
import { Rotas } from './routes/router'

function App() {
 
  return (
    <div className="App">
        <Global/>
        <CasaProvider>

          <BrowserRouter>
            <Rotas/>
          </BrowserRouter>

        </CasaProvider>
      

    </div>
  )
}

export default App
