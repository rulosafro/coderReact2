export const MiComponente = (props) => {
    const {titulo, tel } = props
    // console.log(props.titulo);
    return (
        <div> 
            <h2> {props.titulo}</h2>
            <h2> {props.tel}</h2>
            {/* <h2> {props.titulo}</h2> */}
            <p> Que pasa muchachada</p>
        </div>
    )
}