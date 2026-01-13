import {NavLink} from "react-router-dom";

export function Header() {
    return (
        <header>
            <h1>Prague CZ</h1>
            <nav className="header-nav">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/favorites">Favorites</NavLink>
            </nav>
        </header>
    );
}
