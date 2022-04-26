import { useState } from "react"
import NumeroDisplay from "../../components/NumeroDisplay"
import { mega } from "../../functions/mega"

export default function megaSena(){

    const [numeros, setNumeros] = useState(mega())

    function renderNumeros(){
        return numeros.map(
            numero => <NumeroDisplay key={numero} numero={numero} />)
    }
    return(
        <div style={{
            display: "flex",
            flexDirection: "column",
             justifyContent: "center",
             alignItems: "center"  
             }}>
            <h1>Mega Sena</h1>
            <div style={{
            display: "flex",
            flexDirection: "row",
             justifyContent: "center",
             alignItems: "center"  
             }}>
                {renderNumeros()}
            </div>
        </div>
    )
}