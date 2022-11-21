//icon
import { FiAlignJustify, FiX } from 'react-icons/fi'

//hook
import { useNavBar } from './hook/useNavBar'

//css
import './css/NavBar.css'

import { Link } from 'react-router-dom'

export const NavBar = () => {
    const { active, rol, handleMenu, handleLogout } = useNavBar()

    return (
        <nav className='NavBar'>
            <div className="NavBar__Logo">
                <img src='https://firebasestorage.googleapis.com/v0/b/carrlitos-8c495.appspot.com/o/logo.png?alt=media&token=7457acd7-7779-41c6-b655-abd79df3df89' alt="image logo" />
            </div>
            <div className={`NavBar__enlaces ${active ? 'NavBar__enlaces--position' : ''}`}>
                <Link to={'/dashboard'}>citas</Link>
                {rol === 'admin' && <Link to={'/pending'}>pendientes</Link>}
                <Link to={'/Profile'}>perfil</Link>
                <button
                    onClick={handleLogout}
                    className='NavBar__logout'
                >
                    Cerrar sesión
                </button>
            </div>
            {
                active
                    ? <FiX className='NavBar__hamburger' onClick={handleMenu} />
                    : <FiAlignJustify onClick={handleMenu} className='NavBar__hamburger' />
            }
        </nav>
    )
}
