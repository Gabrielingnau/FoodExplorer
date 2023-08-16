import { Container } from "./style";

export function Logo({img, children}) {

    return (
        <Container>
            <div className="logo">
            <img src={img} alt="logo" />
            <p>food explorer</p>
            </div>
            <div>
            {children}
            </div>
        </Container>
    )
}