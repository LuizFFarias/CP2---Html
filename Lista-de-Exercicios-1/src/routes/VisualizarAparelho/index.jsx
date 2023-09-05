import { useParams, useNavigate } from "react-router-dom"
import {listaProdutos} from "../../components/listaProdutos"

export default function VisualizarAparelho(){
    const lista = listaProdutos
    const navegacao = useNavigate()
    const {id} = useParams()

    const proc = lista.filter(prod => prod.id == id)
    const aparelho = proc[0]

    const salvar = ()=>{
        alert(`Aparelho: ${aparelho.nome} editado com sucesso!`)
        return navegacao('/aparelhos')
    }
    
    return(

        <main>
            <h1>Visualizar Aparelhos</h1>
            <p>Visualizar os aparelhos: {aparelho.nome}</p>
            <button onClick={salvar}>Salvar</button>
        </main>
    )
}