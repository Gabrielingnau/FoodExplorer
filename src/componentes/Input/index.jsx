import { Container } from "./style"

export function Input({children, icon: Icon, ...rest}) {

    return (
        <Container>
          {Icon && <Icon size={20} />}
      <input {...rest}/>
        {children}
        </Container>
    )
}