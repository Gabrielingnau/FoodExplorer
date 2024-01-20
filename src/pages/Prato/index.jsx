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
import { useAuth } from "../../hooks/auth";

export function Prato() {

  const navigate = useNavigate()
  const {  getProduct, product } = useAuth()

  const [data, setData] = useState(null)
  const [total, setTotal] = useState(1)

  const avatarURL =  data && `${api.defaults.baseURL}/files/${data.avatar}`
  
  const params = useParams()

  getProduct(params.id)
  
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


 const Value = String(product.value)
 const Total = String(total)

 const Value1 = Value.replace("00", "1")
 const y = Value.replace(",", ".")
 const Value2 = Value1.replace(",", ".")
 const Total1 = Total.replace(",", ".")

 const c = Total1 * y

 const result = Total1 * Value2
 const resultString = String(result)
 const resultStrin = String(c)
 const r = resultString.replace(resultStrin, "")
 const w = resultString.replace(r, ".00")
 
 const resultado = resultStrin.length < 4 ? w : resultStrin
 const resultado1 = resultado.replace(".", ",")
 

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
                <Button icon={PiReceipt} title={`incluir ∙ R$${resultado1}`}/>
              </div>
            </div>
            </div>
          </Main>
          }
          <Footer/>
        </Container>
    )
}