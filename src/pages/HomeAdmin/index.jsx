import { Container, Main} from "./style";
import { HeaderAdmin } from "../../componentes/HeaderAdmin";
import { Baner } from "../../componentes/Baner";
import { HeaderMobiAdmin } from "../../componentes/HeaderMobiAdmin";
import { Section } from "../../componentes/Section";
import { CardAdmin } from "../../componentes/CardAdmin";
import { Footer } from "../../componentes/Footer";
import { useNavigate, Link } from 'react-router-dom'
import { useState, useEffect } from "react";
import { api } from "../../services/api";

export function HomeAdmin() {

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
          <HeaderAdmin setSearch={setSearch}/>
          <HeaderMobiAdmin/>
          <Main>
          <Baner/>
          <div className="Cards">
            {products.filter(product => product.category == "Pratos").length > 0 &&
            <Section name="Refeições">
              {products.filter(product => product.category == "Pratos").map((item, index) => (
                <CardAdmin key={String(index)} data={item}/>
              ))
              }
            </Section>
            }
          </div>
          <div className="Cards">
              {products.filter(product => product.category == "Sobremesas").length > 0 &&
              <Section name="Sobremesas">
                {products.filter(products => products.category == "Sobremesas").map((item, index) => (
                    <CardAdmin key={String(index)} data={item}/>
                ))
                }
              </Section>}
          </div>

          <div className="Cards">
              {products.filter(product => product.category == "Bebidas").length > 0 &&
              <Section name="Bebidas">
                {products.filter(products => products.category == "Bebidas").map((item, index) => (
                    <CardAdmin key={String(index)} data={item}/>
                ))
                }
              </Section>}
          </div>
          </Main>
          <Footer/>          
        </Container>
    )
}