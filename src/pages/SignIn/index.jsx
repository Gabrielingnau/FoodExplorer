import { Container, Cadastrar } from "./style";
import logo from "../.././assets/logo.png";
import { Input } from "../../componentes/Input";
import { Label } from "../../componentes/Label";
import { Button } from "../../componentes/Button";
import { ButtonText } from "../../componentes/ButtonText";
import { Logo } from "../../componentes/Logo";
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from "../../hooks/auth"
import { useState } from "react";

export function SignIn() {

  const {signIn} = useAuth()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  function handleSignIn() {
    signIn({ email, password })
  }

    return (
        <Container>
          <Logo img={logo}/>

          <Cadastrar>

             <div>
                <h1>Crie sua conta</h1>

             <Label id="Email" title="Email">
             <Input 
             id="Email" 
             placeholder="Exemplo: exemplo@exemplo.com.br"
             onChange={e => setEmail(e.target.value)}
             />
             </Label>

             <Label id="Senha" title="Senha">
             <Input 
             id="Senha" 
             type="password" 
             placeholder="No mínimo 6 caracteres"
             onChange={e => setPassword(e.target.value)}
             />
             </Label>

             <Button 
             title="Entrar"
             onClick={handleSignIn}
             />

             <Link to="/signup">
             <ButtonText title="Criar uma conta"/>
             </Link>

             </div>

          </Cadastrar>
        </Container>
    )
}