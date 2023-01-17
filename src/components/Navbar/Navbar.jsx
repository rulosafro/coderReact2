import './Navbar.sass'
import CustomizedBadges from "../CartWidget/CartWidget.jsx";
import { Link } from 'react-router-dom';
import { CartWidget2 } from '../CartWidget2/CartWidget2';

export const Navbar = () => {
// {bg = ""}
    return (
        <header className='.navBarRam'>
            <Link to="/" className='navBarRam__Logo'><h1 className='navBarRam__Logo'>RulosAfro Studio</h1></Link>
            <div></div>
            <div></div>
            <nav>
                <Link to="/coderReact/what">What</Link>
                <Link to="/we">We</Link>
                <Link to="/do">Do</Link>
                <Link to="/Formulario">Form</Link>
                <span>|</span>
                <Link to="/idealab">IdeaLab</Link>
                <span>|</span>
                <CartWidget2/>
            </nav>
        </header>
    )
}


{/* <CustomizedBadges/> */}