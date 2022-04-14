export default function Titulo(props) {
//operador ternário substitui a necessidade de if else
    return props.pequeno ? (
        <>
            <p>{props.principal}</p>
            <p>{props.secundario}</p>
        </>
    ) : (
        <>
            <h1>{props.principal}</h1>
            <h2>{props.secundario}</h2>
        </>
    )
}