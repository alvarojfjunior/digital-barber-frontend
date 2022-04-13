import './style.css'
import { Link } from 'react-router-dom'


function Home() {
    return (
        <div>
            <p> Componente Home </p>
            <Link to="listagem-agendamentos"> Ir para a listagem de agendamentos </Link>
        </div>
    )
}

export default Home