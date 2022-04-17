
export default function repeticao1() {

let lista = [
    "joão",
    "Maria",
    "José",
    "Henrique",
    "mario",
    "luide",
]

function renderizarLista(){
    let items = []
    for (let i = 0; i < lista.length; i++) {
        items.push(<li key={i}>{lista[i]}</li>)
    }
    return items
}


    return(
        <ul>
           {renderizarLista()}
        </ul>
    )
}