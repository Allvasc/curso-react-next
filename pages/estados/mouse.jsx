import { useState } from "react"

const estilo = {
    backgroundColor: "grey",
    color: "#fff",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column"
}

export default function mouse() {

    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    function quandoMover(ev) {
        setX(ev.pageX)
        setY(ev.pageY)
    }

    return (
        <div style={estilo} onMouseMove={quandoMover}>
            <span>Eixo X: {x}</span>
            <span>Eixo Y: {y}</span>
        </div>

    )
}