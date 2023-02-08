import './Navbar.sass'
import { Link } from 'react-router-dom';
import { CartWidget2 } from '../CartWidget2/CartWidget2';
import { useLoginContext } from '../context/LoginContext';

export const Navbar = () => {
// {bg = ""}
    const {user, logout} = useLoginContext()

    return (
        <header className='items-center bg-primary text-ramaWhite justify-around h-auto py-1'>
            <div className='flex flex-wrap justify-center lg:justify-between my-2'>
                <Link to="/" className='text-ramaBlack text-4xl font-extrabold lg:basis-9/10 px-4'>YeezyMarketX</Link>
                <nav className=' text-center px-6 lg:basis-1/10'>
                    <Link to="/what">What</Link>
                    <Link to="/we">We</Link>
                    <Link to="/do">Do</Link>
                    <span>|</span>
                    <Link to="/idealab">IdeaLab</Link>
                    <span>|</span>
                    <Link to="/Formulario">Form</Link>
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
