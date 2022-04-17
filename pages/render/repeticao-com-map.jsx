
export default function repeticaoMap() {

    let lista = [
        "joão",
        "Maria",
        "José",
        "Henrique",
        "mario",
        "luide",
    ]

    function renderizarLista() {
        return lista.map(function (nome, i) {
            return <li key={i}>{nome}</li>

        })
    }

    return (
        <ul>
            {renderizarLista()}
        </ul>
    )
}