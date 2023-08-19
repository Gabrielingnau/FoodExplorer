import { Container } from "./style";
import { PiCaretLeft, PiCaretRight } from "react-icons/pi";
import { useRef } from "react"; 

export function Section({name, children}) {

    const carousel = useRef(null)

    const handleLeftClick = (e) =>{
        e.preventDefault()
        
        carousel.current.scrollLeft -= 2000 
    }

    const handleRightClick = (e) =>{
        e.preventDefault()
        
        carousel.current.scrollLeft += carousel.current.offsetWidth 
    }
    
    return (
        <Container>
            
           <div className="section">
            <span>{name}</span>
            <div className="buttons">

                 <div className="left" onClick={handleLeftClick}><PiCaretLeft/></div>
                 <div className="right" onClick={handleRightClick}><PiCaretRight /></div>

            </div>
            </div>
            <div className="wraperCarousel">
            <div className="carousel" ref={carousel}>
            {children}
            </div>
            </div>
        </Container>
    )
}