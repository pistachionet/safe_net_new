import { NavLink } from "react-router-dom";
import '../assets/css/navbar.css';

export const Navbar = () => {
    return (
        <div className="Navbar">
            <div className="logo">
                <span style={{ fontWeight:700 }}>Safety</span>
                <span style={{ fontWeight:40 }}><i>Net</i></span>
            </div>
            <NavLink to={`loginreg`} className="right-navbar-item">Logout</NavLink>
        </div>
    )
}

export default Navbar