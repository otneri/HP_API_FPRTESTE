import { Button } from "../../components/Button/Button"
import { Cornival, Escudo, Grifinoria, HpLogo, Linha, Lufalufa, Sonserina  } from "../../components/images/hpLogo/hpLogo"
import { Title } from "../../components/title/title"
import { Bar, HomeBackground, DivLogo, DivConteinerStld, DivEscudo, DivCasas} from "./home.stld"

export const Home = () => {
    return (
        <>
        <Bar/>
        <HomeBackground>
            <DivConteinerStld>
            <DivLogo>
                <HpLogo/>
            </DivLogo>
            <Button>Veja Todos os personagens</Button>            
            <DivEscudo>
                <Escudo/>
                <Title>Navegue pelas Casas</Title>
                <Linha/>
            </DivEscudo>
        <DivCasas>
            <Grifinoria/>
            <Sonserina/>
            <Lufalufa/>
            <Cornival/>
        </DivCasas>
           

            
            </DivConteinerStld>
        </HomeBackground>
        </>
    )
} 