function gerarLista(final = 10) {
    const lista = []
    for (let i = 1; i <= final; i++) {
        lista.push(<span>{i},</span>)
    }
    console.log(lista)
    return lista
}

export default function jsx3() {
    return (
        <div>
            {gerarLista()}
        </div>
    )
}