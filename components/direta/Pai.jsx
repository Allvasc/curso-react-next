import Filho from "./Filho"

export default function Pai(props){
    return (
        <div>
            <Filho nome="Henrique" familia={props.familia} />
            <Filho nome="José" familia={props.familia} />
            <Filho nome="Sofia" familia={props.familia} /> 
            <Filho {...props}  nome="raimundo" /> 
        </div>
    )
}