export default function Estilo(props) {

    const classeAplicada = props.numero <= 0 ? "azul" : "vermelho"

    return (
        //Aplicando estilos de acordo com o props de maneira condicional
        <div>
            <h1 style={{
                backgroundColor: props.numero <= 0 ? "#2D2" : "#D22",
                color: props.numero <= 0 ? "red" : "green"
            }}>
                Texto
            </h1>

            <h2 className={classeAplicada}>Texto 3</h2>
        </div> 
    )
}
