import { useState } from "react"

export default function somaNumero() {

    const [num, setNum] = useState(0)

    return (
        <div>
            <p>{num}</p>
            <button onClick={()=>setNum(num+100)}>Soma</button>
        </div>
    )
}