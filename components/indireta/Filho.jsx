export default function Filho(props) {

    return (
        <div>
            <h1>Filho</h1>
            {/*Passando evento por paramentro para a função no componente pai*/}
            <button onClick={props.funcao}>Falar com o pai #1</button>

            {/*passando uma informação de forma indireta por uma função que foi passada de pai para filho e o filho chama essa função passando uma string por parametro para a função do componente pai*/}
            <button onClick={() => props.funcao("Passei no enem")}>Falar com o pai #2</button>
        </div>
    )
}