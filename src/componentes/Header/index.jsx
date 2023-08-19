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

export function Header({value, setSearch}) {

    const { signOut } = useAuth()
    const navigate = useNavigate()

    async function sair () {
        await signOut()
        navigate("/")
    }

    return (
        <Container>
            <Logo img={logo}/>
            <InputHeader value={value}  onChange={e => setSearch(e.target.value)} icon={FiSearch} type="text" placeholder="Busque por pratos ou ingredientes"/>
            <Button 
             icon={PiReceipt} 
             title="Pedidos (0)"
             />
            <ButtonText icon={FiLogOut} onClick={sair}/>
        </Container>
    )
}