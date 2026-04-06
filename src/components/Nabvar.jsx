import { NavLink } from "react-router";
import "../styles/Nabvar.css";

const Nabvar = () => {
    return (
        <nav >
            <NavLink to="/" className="nav-link link-logo">
                Dashboard
            </NavLink>
            <NavLink to="/contact" className="nav-link link">
                Contact
            </NavLink>
        </nav>
    )
}

export default Nabvar;