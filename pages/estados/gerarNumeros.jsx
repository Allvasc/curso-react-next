import { useState } from "react"

const estiloCase = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    height: "100vh",
    backgroundColor: "#fff"
}

const estiloNum = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row"
}

const estiloItem = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "0px 10px",
    backgroundColor: "#209869",
    height: "50px",
    width: "50px",
    color: "#fff",
    borderRadius: "50%",
    fontSize: "1.8em"
}

export default function gerarNumeros() {

    const [num, setNum] = useState("Clique para gerar sua sorte")
    const numeros = []

    function rando() {
        for (let i = 0; i < 6; i++) {
            let rando = Math.round(Math.random() * (1 - 60 + 1)) * -1
            numeros.push(<p key={i} style={estiloItem}>{rando}</p>)
        }
        return numeros
    }

    return (
        <div style={estiloCase}>
            <div style={estiloNum}>{num}</div>
            <button style={{ marginTop: "50px" }} onClick={() => setNum(rando())}>GERAR NUMEROS</button>
        </div>
    )
}