import { Container } from "./style";

export function Label({ children, id, title}) {

    return (
        <Container>
            <label htmlFor={id}>
                {title}
            </label>

            {children}
        </Container>
    )
}