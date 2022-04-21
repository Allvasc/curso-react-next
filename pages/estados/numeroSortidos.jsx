import { useState } from "react"

const estiloCase = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    height: "100vh",
    backgroundColor: "#fff",
    flexWrap: "wrap"
}

const estiloNum = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    flexWrap: "wrap"
}

const estiloItem = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "5px 10px",
    backgroundColor: "#209869",
    height: "50px",
    width: "50px",
    color: "#fff",
    borderRadius: "50%",
    fontSize: "1.8em"
}

export default function gerarNumeros() {

    const [num, setNum] = useState("Clique para gerar sua sorte")
    const [caixa, setCaixa] = useState("Insira aqui")


    const numeros = []

    function rando() {
        for (let i = 0; i < caixa; i++) {
            let rando = Math.round(Math.random() * (1 - 60 + 1)) * -1
            numeros.push(<p key={i} style={estiloItem}>{rando}</p>)
        }
        return numeros
    }


    return (
        <div style={estiloCase}>
            <div style={estiloNum}>{num}</div>
            <div style={{ marginTop: "50px" }}>
                <input placeholder="Insira a quantidade de numeros" type="text" onChange={(e) => setCaixa(e.target.value)} />
            </div>
            <button style={{ marginTop: "30px" }} onClick={() => setNum(rando())}>GERAR NUMEROS</button>
        </div>
    )
}