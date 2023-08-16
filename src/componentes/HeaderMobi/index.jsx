import { Container } from "./style";
import { PiReceipt } from 'react-icons/pi' 
import { Logo } from "../Logo";
import { ButtonText } from "../../componentes/ButtonText";
import Frame from "../../assets/Frame.svg";
import logo from "../../assets/logo.png";
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from "../../hooks/auth";


export function HeaderMobi() {

    return (
        <Container>
          <ButtonText>
          <Link to="/menu">
            <img src={Frame} alt="" /> 
          </Link>
          </ButtonText>
          <Logo img={logo}/>
          <ButtonText icon={PiReceipt}/>
        </Container>
    )
}