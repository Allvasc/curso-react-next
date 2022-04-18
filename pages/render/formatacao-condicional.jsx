import If from "../../components/If"

export default function condicional() {
    const numero = 4
    return (
        <div>
            <If teste={numero % 2 === 0}>
                <h1>O numero {numero} é Par</h1>
            </If>
            <If teste={numero % 2 === 1}>
                <h1>O numero {numero} é ímpar</h1>
            </If>
        </div>
    )
}