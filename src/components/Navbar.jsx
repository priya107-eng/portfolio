import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/logo.png'; // Adjust path if needed

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">  <img src={logo} alt="Logo" style={{ height: "35px", borderRadius: "50px" }} /> My Portfolio</div>
  
      <ul className="nav-links">
        <Link to="/profile" style={{ marginRight: "10px" }}>Profile</Link>
        
        <Link to="/" style={{ marginRight: "10px" }}>Projects</Link>
         <Link to="/pages/Education" style={{ marginRight: "10px" }}>Education</Link>
      
      
                    
        <Link to="/signup" style={{ marginRight: "10px" }}>Contact</Link>
        
        </ul>
        </nav>
  );
}

export default Navbar;
