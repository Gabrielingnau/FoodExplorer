import { Routes, Route  } from "react-router-dom"; 

import { Home } from '../pages/Home'
import { Prato } from '../pages/Prato'
import { Menu } from '../pages/Menu'

export function AppRoutes(){


    return(
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/Prato/:id" element={<Prato />}/>
            <Route path="/menu" element={<Menu />}/>

        </Routes>
    )

}