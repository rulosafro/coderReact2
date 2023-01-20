import './Navbar.sass'
import { Link } from 'react-router-dom';
import { CartWidget2 } from '../CartWidget2/CartWidget2';
import Button from '@mui/material/Button'
import { useLoginContext } from '../context/LoginContext';

export const Navbar = () => {
// {bg = ""}
    const {user, logout} = useLoginContext()

    return (
        <header className='flex flex-col'>
            <div className='flex flex-row justify-between space-x-80'>
                <Link to="/" className='navBarRam__Logo'><h1 className='navBarRam__Logo'>RulosAfro Studio</h1></Link>
                <div></div>
                <div></div>
                <nav>
                    <Link to="/what">What</Link>
                    <Link to="/we">We</Link>
                    <Link to="/do">Do</Link>
                    <Link to="/Formulario">Form</Link>
                    <span>|</span>
                    <Link to="/idealab">IdeaLab</Link>
                    <span>|</span>
                    <CartWidget2/>
                </nav>
            </div>
            <div className='flex justify-items-end space-x-80 mb-2 '>
                <p className='text-black'>Bienvenido: {user.email}</p>
                <button className='text-black rounded-full' onClick={logout}> Logout </button>
            </div>

        </header>
    )
}


{/* <CustomizedBadges/> */}