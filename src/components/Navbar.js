import{NavLink}from "react-router-dom";
import { useAuth } from "./Auth";

const Navbar = () => {
    const {user,logout} = useAuth();
    return ( 
        <div className="con">
        <nav >
            <span>HYDERABAD</span>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/contacts">Contact Us</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/projects">Projects</NavLink>
            {/* <NavLink to="/login"  style={{paddingLeft:"70px"}}>Employee Login</NavLink> */}
            {user ? (
                    <NavLink to="/login" style={{paddingLeft:"70px"}} onClick={logout}>Logout</NavLink>
            ) : (
                    <NavLink to="/login" style={{paddingLeft:"70px"}}>Employee Login</NavLink>
            )}
        </nav>
        </div>
     );
}
 
export default Navbar;