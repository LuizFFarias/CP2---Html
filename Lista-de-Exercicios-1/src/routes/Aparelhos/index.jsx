import {Link} from "react-router-dom"
import { listaProdutos } from "../../components/listaProdutos"

export default function Aparelhos(){
    return(
        <main>
            <h1>Aparelhos</h1>
            {listaProdutos.map(prod =>(
                <div key={prod.id}>
                    <Link to={`/aparelhos/visualizar/${prod.id}`}>
                        Visualizar o produto: {prod.nome}
                    </Link>

                </div>
            ))}
        </main>
    )
}