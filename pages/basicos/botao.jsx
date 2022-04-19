function acao1() {
    console.log("acao1")
    return <p>olá</p>

}

function acao5(e){
    console.log(e)
}

export default function botao() {
    return (
        <div>
            <button onClick={acao1}>Cllick #01</button>

            <button onClick={() => {
                if (1 > 0) {
                    alert("Ação 2")
                }
            }}>Cllick #02</button>

            <button onClick={acao5}>Cllick #05</button>
            <div>
                <input type="text" onChange={e => console.log(e.target.value)}/>
            </div>
        </div>
    )
}