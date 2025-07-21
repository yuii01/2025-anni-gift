import { Navlink } from 'react-router-dom'
import './Header.css'

export default function Header() {
    return (
        <header className="app-header">
        <h1 className="app-title">the hub</h1>
        <nav className="app-nav">
            <NavLink to="/" 
                     className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
                Home
            </NavLink>

            <NavLink to="/messages" 
                     className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
                Messages
            </NavLink>

            <NavLink to="/gallery" 
                     className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
                Gallery
            </NavLink>

        </nav>
        </header>

    )
}