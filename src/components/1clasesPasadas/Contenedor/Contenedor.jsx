import './Contenedor.sass'
import { Button } from '@mui/material'

export const Contenedor = ({children}) => {

    return (
        <div className='contenedor'>
            {children}
            <Button variant="contained">Click me</Button>
        </div>
    )
}