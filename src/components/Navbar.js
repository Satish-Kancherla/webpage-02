import{NavLink}from "react-router-dom"

const Navbar = () => {
    return ( 
        <div className="con">
        <nav >
            <span>HYDERABAD</span>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/contacts">Contact Us</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/projects">Projects</NavLink>
            <NavLink to="/login"  style={{color: "yellow",paddingLeft:"70px"}}>Employee Login</NavLink>
        </nav>
        </div>
     );
}
 
export default Navbar;