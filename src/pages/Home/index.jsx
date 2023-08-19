import { Container, Main} from "./style";
import { Header } from "../../componentes/Header";
import { Baner } from "../../componentes/Baner";
import { HeaderMobi } from "../../componentes/HeaderMobi";
import { Section } from "../../componentes/Section";
import { Card } from "../../componentes/Card";
import { Footer } from "../../componentes/Footer";
import { useNavigate, Link } from 'react-router-dom'
import { useState, useEffect } from "react";
import { api } from "../../services/api";

export function Home() {

  const [search, setSearch] = useState("")
  const [products, setProducts] = useState([]) 

    useEffect(() => {
      async function fetcProducts() {
       const response = await api.get(`/products/?title=${search}`)
       setProducts(response.data)
      }
  
      fetcProducts()
    }, [search])

    return (
        <Container>
          <Header value={products.title} setSearch={setSearch}/>
          <HeaderMobi/>
          <Main>
          <Baner/>
          <div className="Cards">
            {products.filter(product => product.category == "Pratos").length > 0 &&
            <Section name="Refeições">
              {products.filter(product => product.category == "Pratos").map((item, index) => (
                <Card key={String(index)} data={item}/>
              ))
              }
            </Section>
            }
          </div>
          <div className="Cards">
              {products.filter(product => product.category == "Sobremesas").length > 0 &&
              <Section name="Sobremesas">
                {products.filter(products => products.category == "Sobremesas").map((item, index) => (
                    <Card key={String(index)} data={item}/>
                ))
                }
              </Section>}
          </div>

          <div className="Cards">
              {products.filter(product => product.category == "Bebidas").length > 0 &&
              <Section name="Bebidas">
                {products.filter(products => products.category == "Bebidas").map((item, index) => (
                    <Card key={String(index)} data={item}/>
                ))
                }
              </Section>}
          </div>
          </Main>
          <Footer/>          
        </Container>
    )
}