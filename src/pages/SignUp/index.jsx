import { Container, Cadastrar } from "./style";
import logo from "../.././assets/logo.png";
import { Input } from "../../componentes/Input";
import { Label } from "../../componentes/Label";
import { Button } from "../../componentes/Button";
import { ButtonText } from "../../componentes/ButtonText";
import { Logo } from "../../componentes/Logo";
import { useNavigate, Link } from 'react-router-dom';
import { useState } from "react";
import { api } from "../../services/api";

export function SignUp() {

    const navigate = useNavigate()

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
      
      
  function handleBack() {
    navigate(-1);
  }

  function handleClick () {
    if(!name || !password || !email) {
      return alert("Preencha todos os campos!")
    }
    if(password.length < 6){
      return alert("A senha tem que ter no mínimo 6 caracteres")
    }
    api.post("/users", { name, email, password })
    .then(() => {
      alert("Usúario cadastrado com sucesso!")
      handleBack()
    })
    .catch((error) => {
      if(error.response){
        alert(error.response.data.message)
      }else{
        alert("Não foi possivel cadastrar")
      }
    })
  }


    return (
        <Container>
         <Logo img={logo}/>

          <Cadastrar>

             <div>
                <h1>Crie sua conta</h1>

             <Label id="name" title="Seu nome">
             <Input 
             id="name" 
             placeholder="Exemplo: Maria da Silva"
             onChange ={e => setName(e.target.value)}
             />
             </Label>

             <Label id="Email" title="Email">
             <Input 
             id="Email" 
             placeholder="Exemplo: exemplo@exemplo.com.br"
             onChange ={e => setEmail(e.target.value)}
             />
             </Label>

             <Label id="Senha" title="Senha">
             <Input 
             id="Senha" 
             placeholder="No mínimo 6 caracteres"
             type="password"
             onChange ={e => setPassword(e.target.value)}
             />
             </Label>

             <Button title="Criar conta" onClick={handleClick} />

             <ButtonText 
             onClick={handleBack}
             title="Já tenho uma conta"
             />

             </div>

          </Cadastrar>
        </Container>
    )
}