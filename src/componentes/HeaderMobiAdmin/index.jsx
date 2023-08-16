import { Container } from "./style";
import { PiReceipt } from 'react-icons/pi' 
import { Logo } from "../Logo";
import { ButtonText } from "../../componentes/ButtonText";
import Frame from "../../assets/Frame.svg";
import logo from "../../assets/logo.png";
import { Link } from 'react-router-dom';


export function HeaderMobiAdmin({icon: Icon, title}) {

    return (
        <Container>
          <Link to="/menuAdmin">
          <ButtonText>
            <img src={Frame} alt="" /> 
          </ButtonText>
          </Link>
          <Logo img={logo}>
           <p>adimin</p>
          </Logo>
        </Container>
    )
}