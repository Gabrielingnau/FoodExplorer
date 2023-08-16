import { Container } from "./style";
import logo from "../../assets/logo.png"
import { FiSearch, FiLogOut } from 'react-icons/fi';
import { PiReceipt } from 'react-icons/pi' 
import { Logo } from "../Logo";
import { InputHeader } from "../../componentes/InputHeader";
import { Button } from "../../componentes/Button";
import { ButtonText } from "../../componentes/ButtonText";
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from "../../hooks/auth";

export function HeaderAdmin({setSearch}) {

    const { signOut } = useAuth()

    return (
        <Container>

            <Logo  img={logo}>
              <p>adimin</p>
            </Logo>

            <InputHeader 
            onChange={e => setSearch(e.target.value)} 
            icon={FiSearch} type="text" 
            placeholder="Busque por pratos ou ingredientes"
            />

            <Link to="/New">
            <Button title="Novo prato"/>
            </Link>

            <ButtonText icon={FiLogOut} onClick={signOut}/>

        </Container>
    )
}