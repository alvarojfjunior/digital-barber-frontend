import './style.css'
import { Link } from 'react-router-dom'


function NotFound() {
    return (
        <div>
            <h1> Esta página não existe </h1>
            <Link to="/"> Voltar para a Home </Link>
        </div>
    )
}

export default NotFound