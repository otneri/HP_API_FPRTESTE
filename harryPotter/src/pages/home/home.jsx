import { Button } from "../../components/Button/Button";
import {
  Imagem,
  HpLogo
} from "../../components/images/hpLogo/hpLogo";
import { Title } from "../../components/title/title";
import {
  Bar,
  HomeBackground,
  DivLogo,
  DivConteinerStld,
  DivEscudo,
  DivCasas,
  LinhaStld,
} from "./home.stld";
import linha from '../../assets/linha.png'
import escudo from '../../assets/escudo.png'
import grifinoria from '../../assets/grifinoria.png'
import sonserina from '../../assets/sonserina.png'
import lufalufa from '../../assets/lufa-lufa.png'
import cornival from '../../assets/corvinal.png'


export const Home = () => {
  return (
    <>
      <Bar />
      <HomeBackground>
        <DivConteinerStld>
          <DivLogo>
            <HpLogo />
            <Button>Veja Todos os personagens</Button>
          </DivLogo>
            
          <DivEscudo>
            <LinhaStld src={escudo} />
            <Title>Navegue pelas Casas</Title>
            <LinhaStld src={linha} />
          </DivEscudo>
          <DivCasas>
            <Imagem children={grifinoria} />
            <Imagem children={sonserina} />
            <Imagem children={lufalufa} />
            <Imagem children={cornival} />
          </DivCasas>
        </DivConteinerStld>
      </HomeBackground>
    </>
  );
};
