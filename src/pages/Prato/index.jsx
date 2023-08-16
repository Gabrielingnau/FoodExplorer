import { Container, Main } from "./style";
import { Ingrediente } from "../../componentes/Ingrediente";
import { ButtonText } from "../../componentes/ButtonText";
import { Button } from "../../componentes/Button";
import { Footer } from "../../componentes/Footer";
import { Header } from "../../componentes/Header";
import { PiReceipt, PiCaretLeft } from 'react-icons/pi';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import  image  from "../../assets/imageBig.png"; 
import { HeaderMobi } from "../../componentes/HeaderMobi";
import { useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from "react";
import { api } from "../../services/api";

export function Prato() {

  const navigate = useNavigate()

  const [data, setData] = useState(null)
  const [total, setTotal] = useState(1)

  const avatarURL =  data && `${api.defaults.baseURL}/files/${data.avatar}`
  
  const params = useParams()
  
  function addItem() {
    setTotal(prevState => prevState + 1)
  }
  
  function removeItem() {
    if(total >= 2){
      setTotal(prevState => prevState - 1)
    }
  }

  
  
  
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

  return (
        <Container>
          <Header/>
          <HeaderMobi/>
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
              <div className="butons">
              <ButtonText onClick={removeItem} icon={AiOutlineMinus}/>
                <h1>{total.toString().padStart(2, "0")}</h1>
                <ButtonText onClick={addItem} icon={AiOutlinePlus}/>
              </div>
              <div className="button">
                <Button icon={PiReceipt} title={`pedir ∙ R$${total * data.value}`}/>
              </div>
            </div>
            </div>
          </Main>
          }
          <Footer/>
        </Container>
    )
}