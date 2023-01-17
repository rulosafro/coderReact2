// import { Button } from '@mui/material'
import './MyButton.sass'

export const MyButton = ({text, variant = 1}) => {

    return (
        <button className={`myButton variant-${variant}`}>
            {text}
        </button>
    )
}