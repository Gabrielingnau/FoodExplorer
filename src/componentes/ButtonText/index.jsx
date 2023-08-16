import { Container } from "./style"

export function ButtonText({onClick, icon: Icon, title, children}) {

    return (
        <Container>
      <button onClick={onClick} className="buttonText">
        {Icon && <Icon/>}
        {title}
        {children}
      </button>
        </Container>
    )
}