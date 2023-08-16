import { Container, Header, Main } from "./style";
import { Input } from "../../componentes/Input";
import { ButtonText } from "../../componentes/ButtonText";
import { Footer } from "../../componentes/Footer";
import { FiSearch } from 'react-icons/fi';
import { useNavigate, Link } from 'react-router-dom'
import close from "../../assets/Close.svg";
import { useAuth } from "../../hooks/auth";


export function MenuAdmin() {

  const { signOut } = useAuth()

  const navigate = useNavigate()

  function handleBack () {
    navigate(-1)
  }

    return (
        <Container>
          <Header>
            <div className="header">
              <button onClick={handleBack}>
                <img src={close} alt="x" />
              </button>
              <h1>Menu</h1>
            </div>
          </Header>
          <Main>
            <div className="main">
               <Input icon={FiSearch} placeholder="Busque por pratos ou ingredientes"/>
               <div className="button">
                  <Link to="/New">
               <ButtonText title="Novo prato"/>
                  </Link>
               </div>
               <div className="line"></div>
               <div className="button-2">
               <Link to="/">
               <ButtonText title="Sair" onClick={signOut}/>
                </Link>
               </div>
               <div className="line"></div>
            </div>
          </Main>
          <Footer/>
        </Container>
    )
}