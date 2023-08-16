
import { Container} from "./styles";
import { AiOutlinePlus, AiOutlineMinus, AiOutlineHeart } from 'react-icons/ai';

import { Button } from "../Button";
import  Dish  from "../../assets/Dish.png";
import { ButtonText } from "../ButtonText";
import { useNavigate, Link } from 'react-router-dom';
import { api } from "../../services/api";
import { useState } from "react";

export function Card({ data, ...rest }){

   const navigate = useNavigate();

   const [total, setTotal] = useState(1)

    const avatarURL = `${api.defaults.baseURL}/files/${data.avatar}`

    function addItem() {
        setTotal(prevState => prevState + 1)
    }

    function removeItem() {
        if(total >= 2){
            setTotal(prevState => prevState - 1)
        }
    }

    function handleProducts(id) {
        navigate(`/prato/${id}`);
    }

    function handleAtualizarProducts(id) {
        navigate(`/atualizar/${id}`);
    }

    return(
        <Container {...rest}>

           <ButtonText onClick={() => handleAtualizarProducts(data.id)} icon={AiOutlineHeart}/>

        <div className="item">
           <div className="image">
           <button onClick={() => handleProducts(data.id)} ><img src={avatarURL}/></button>
           </div>
           <div className="name"><button onClick={() => handleProducts(data.id)} > {data.title} {String(">")} </button></div>
           <div className="info"><p>{data.description}</p></div>
           <div className="price">
                <span>R$</span>
                <span>{data.value}</span>
           </div>
           <div className="request"> 
           
                <ButtonText onClick={removeItem} icon={AiOutlineMinus}/>
                <span>{total.toString().padStart(2, "0")}</span>
                <ButtonText onClick={addItem} icon={AiOutlinePlus}/>
                
                <Button title="Incluir"/>  
           </div>

        </div>
        

        </Container>
        
    )
}