import { Container } from "./style";
import baner from "../../assets/baner.png"

export function Baner() {

    return (
        <Container>
          <div className="Baner-wrapper">
             <img src={baner} alt="frutas" />
             <div className="text-wrapper">
              <div className="text">
              <h1>Sabores inigualáveis</h1>
              <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
              </div>
             </div>
          </div>
        </Container>
    )
}