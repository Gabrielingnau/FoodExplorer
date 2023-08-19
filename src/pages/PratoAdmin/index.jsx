import { Container, Main } from "./style";
import { Ingrediente } from "../../componentes/Ingrediente";
import { ButtonText } from "../../componentes/ButtonText";
import { Button } from "../../componentes/Button";
import { Footer } from "../../componentes/Footer";
import { HeaderAdmin } from "../../componentes/HeaderAdmin";
import { PiReceipt, PiCaretLeft } from 'react-icons/pi';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import  image  from "../../assets/imageBig.png"; 
import { HeaderMobiAdmin } from "../../componentes/HeaderMobiAdmin";
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useState, useEffect } from "react";
import { api } from "../../services/api";

export function PratoAdmin() {

  const navigate = useNavigate()
  
  const [data, setData] = useState(null)

  const avatarURL =  data && `${api.defaults.baseURL}/files/${data.avatar}`

  const params = useParams()

  useEffect(() => {
    async function fetcProducts () {
      const response = await api.get(`/products/${params.id}`)
      setData(response.data)
    }

    fetcProducts()
  }, [])
      
      
  function handleBack() {
    navigate(-1);
  }

  function handleAtualizarProducts () {
    navigate(`/atualizar/${params.id}`);
}

    return (
        <Container>
          <HeaderAdmin/>
          <HeaderMobiAdmin/>
          {data &&
          <Main>
            
            <div className="wraper">
              <ButtonText onClick={handleBack} icon={PiCaretLeft} title="Voltar"/>
              <img src={avatarURL} alt="Prato"/>
            </div>
            <div className="main-wraper">
            <div className="wrap">
            <div className="wrap">
              <h1>{data.title}</h1>
              <p>{data.description}</p>
            </div>
            {data.ingredients &&
            <div className="ingrediente">
              {
                data.ingredients.map(ingredient => (
                <Ingrediente key={String(ingredient.id)} title={ingredient.name}/>
                ))
              }
              
            </div>
            }
            </div>
            <div className="butons-wraper">
              <div className="button">
                
                <Button onClick={handleAtualizarProducts} title="Editar prato"/>
               
              </div>
            </div>
            </div>
          </Main>

          }
          <Footer/>
        </Container>
    )
}