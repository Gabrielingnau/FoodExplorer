import { Container } from "./style";

export function Ingrediente({title}) {

    return (
        <Container>
            <div className="ingrediente">
            <p>{title}</p>
            </div>
        </Container>
    )
}