import { useState } from "react";

export const Clicker = () => {
    const [counter, setCounter] = useState(1)
    const [show, setShow] = useState(true)
    console.log(show);

    // let counter = 0

    const restar = () => {
        if (counter > 0) {
            setCounter(counter - 1)
        }
        console.log(counter)
    }

    const sumar = () => {
        setCounter(counter + 1)
        console.log(counter)
    }

    const mostrar = () => {
        setShow (!show)
    }

    return (
        <div className="">
            <h2>Clicker</h2>
            <button className="" onClick={sumar}> Sumar</button>
            <button className="" onClick={restar}> Restar</button>
            <p>{counter}</p>
            <hr/>
            <button className="" onClick={mostrar}>
                {show? 'ocultar' : 'mostrar'}
            </button>
            {show && <p style={{fontSize: '60px'}}>🙄</p>}
        </div>
    )
}