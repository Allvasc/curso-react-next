import Lista from "../../components/Lista"
import Item from "../../components/Item"
export default function ComponenteComFilho(props){
    return(
        <div>
            <Lista>
                <Item conteudo="item #1" />
                <Item conteudo="item #2" />
                <Item conteudo="item #3" />
            </Lista>
        </div>
    )
}