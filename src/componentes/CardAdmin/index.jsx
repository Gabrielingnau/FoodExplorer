import { Container } from "./styles"
import { ButtonText } from "../ButtonText";
import { PiPencilSimpleLight } from 'react-icons/pi';
import { useNavigate, Link } from 'react-router-dom';
import { api } from "../../services/api";

export function CardAdmin({ data, ...rest }){

    const navigate = useNavigate();

    const avatarURL = `${api.defaults.baseURL}/files/${data.avatar}`

    function handleProducts(id) {
        navigate(`/pratoAdmin/${id}`);
    }

    function handleAtualizarProducts(id) {
        navigate(`/atualizar/${id}`);
    }

    return(
        <Container {...rest}>

           <ButtonText onClick={() => handleAtualizarProducts(data.id)} icon={PiPencilSimpleLight}/>

        <div className="item">
           <div className="image">
           <button onClick={() => handleProducts(data.id)} ><img src={avatarURL}/></button>
           </div>
           <div className="name"><button onClick={() => handleProducts(data.id)} >{data.title}{String(">")} </button></div>
           <div className="info"><p>{data.description}</p></div>
           <div className="price">
                <span>R$</span>
                <span>{data.value}</span>
           </div>
        </div>
        

        </Container>
    )
}