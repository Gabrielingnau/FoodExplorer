import { Container } from "./style"

export function Button({onClick, icon: Icon, title}) {

    return (
        <Container>
      <button onClick={onClick}>
        {Icon && <Icon/>}
        {title}
      </button>
        </Container>
    )
}