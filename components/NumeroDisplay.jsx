export default function NumeroDisplay(props){
    return(
        <p style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "black",
            margin: "20px",
            height: "50px",
            width: "50px",
            color: "#fff",
            fontSize: "2em",
            borderRadius: "50%"
        }}>
            {props.numero}
        </p>
        )
}