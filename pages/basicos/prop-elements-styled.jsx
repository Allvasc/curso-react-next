import Boxtext from "../../components/Boxtext"
import styles from "../css/prop-elements-styled.module.css"

export default function usaBox() {
    return (
        <div className={styles.comportamento}>
            <Boxtext
                titulo="Card Pai"
                text1="Olá, me chamo Allison"
                text2="Tenho 33 Anos"
                text3="Gosto de programar"
                text4="Gosto de React"
            />

            <Boxtext
                titulo="Card Mãe"
                text1="Olá, me chamo Maria"
                text2="Tenho 40 Anos"
                text3="Gosto de cinema"
                text4="Gosto de Comida"
            />

            <Boxtext
                titulo="Card filho"
                text1="Olá, me chamo henrique"
                text2="Tenho 03 Anos"
                text3="Gosto de brincar"
                text4="Gosto de poppy playtime"
            />

        </div>
    )
}