import './style.css'
import { useEffect, useState } from 'react'
import axios from 'axios'

function ListaAgendamento() {

    //Variáveis de estado
    const [agendamentos, setAgendamentos] = useState([])

    //UseEffect
    //O que está dentro o useEffect é executado no momento que o componente é renderizado em tela.
    useEffect(() => {
        console.log('Dentro do useEffect')

        //Vou fazer a requisição que puxa os dados da api.
        getAllAgendamentos()

    }, [])


    //Demais metodos
    async function getAllAgendamentos() {
        //fazer a requisição dos agendamentos
        const resposta = await axios.get('http://localhost:3000/agendamentos')
        console.log(resposta.data)
        setAgendamentos(resposta.data)
    }



    return (
        <div>
            <p> Componente ListaAgendamento </p>

            <table>
                <tr>
                    <th>Cliente</th>
                    <th>Descrição</th>
                    <th>Horário</th>
                </tr>

                {agendamentos.map(item =>
                    <tr>
                        <td> {item.cliente_id} </td>
                        <td> {item.descricao} </td>
                        <td> {item.horario} </td>
                    </tr>
                )}
            </table>

        </div>
    )
}

export default ListaAgendamento