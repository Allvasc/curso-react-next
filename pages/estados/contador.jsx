import { useState } from "react";

const estilo = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#729D85",
    height: "100vh",
    flexDirection: "column",
    color: "#fff",
    fontSize: "2em"
}

export default function contador() {

    const [cont, setCont] = useState()

    let adiciona = () => setCont(cont + 1)
    let remover = () => setCont(cont - 1)

    if(cont == 0){
        remover = () => setCont(0)
    }

    return (
        <div style={estilo}>
            <h1>{cont}</h1>
            <div>
                <button style={{fontSize: "20px", padding: "0px 10px", marginRight:"10px"}}
                 onClick={adiciona}>+1</button>

                <button style={{fontSize: "20px", padding: "0px 10px", marginLeft:"10px"}}
                 onClick={remover}>-1</button>
            </div>
        </div>
    )

}