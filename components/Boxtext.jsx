import styles from '../pages/css/Boxtext.module.css'

export default function Boxtext(props) {
    return (
        <div className={styles.box}>
            <h1>{props.titulo}</h1>
            <p>{props.text1}</p>
            <p>{props.text2}</p>
            <p>{props.text3}</p>
            <p>{props.text4}</p>
        </div>
    )
}