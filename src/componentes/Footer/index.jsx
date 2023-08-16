import { Container } from "./style";
import { Logo } from "../../componentes/Logo";
import logoCinza from "../../assets/logoCinza.png"

export function Footer() {

    return (
        <Container>
            <Logo img={logoCinza}/>
            <p>© 2023 - Todos os direitos reservados.</p>
        </Container>
    )
}