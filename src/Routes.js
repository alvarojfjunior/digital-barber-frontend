//importações
import { BrowserRouter, Routes as RRDRoutes, Route } from 'react-router-dom'

import Home from './components/Home'
import ListaAgendamentos from './components/ListaAgendamentos'
import NotFound from './components/NotFound'


function Routes() {
    return (
        <BrowserRouter>
            <RRDRoutes>
                <Route path='/' element={<Home />} />
                <Route path='/listagem-agendamentos' element={<ListaAgendamentos />} />
                <Route path="*" element={<NotFound />} />
            </RRDRoutes>
        </BrowserRouter>
    )
}


export default Routes