export const Usuario = ({nombre,curso, edad}) => {
    return(
        <div>
            <h2>Nombre: {nombre}</h2>
            <p>Cursando: <strong> {curso}</strong></p>
            <p>Edad: {edad}</p>
        </div>
    )
}

