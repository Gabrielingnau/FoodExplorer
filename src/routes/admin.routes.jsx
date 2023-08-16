import { Routes, Route  } from "react-router-dom"; 

import { HomeAdmin } from '../pages/HomeAdmin'
import { PratoAdmin } from '../pages/PratoAdmin'
import { New } from '../pages/New'
import { Atualizar } from '../pages/Atualizar'
import { MenuAdmin } from '../pages/MenuAdmin'


export function AdminRoutes(){
    return(
        <Routes>
            <Route path="/" element={<HomeAdmin />}/>
            <Route path="/new" element={<New />}/>
            <Route path="/atualizar/:id" element={<Atualizar />}/>
            <Route path="/pratoAdmin/:id" element={<PratoAdmin />}/>
            <Route path="/menuAdmin" element={<MenuAdmin />}/>
        </Routes>
    )

}
