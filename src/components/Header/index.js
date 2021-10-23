import {Link} from 'react-router-dom'
import logo from '../images/websitelogo.png'
import "./index.css"

const Header =() => {
    return (
        <nav className="nav-header">
          <div className="nav-content">
            <div className="img-nav">
              <Link to="/">
                <img
                  className="website-logo"
                  src={logo}
                  alt="website logo"
                />
              </Link>
            </div>
            <div>
    
            <ul className="nav-menu">
              <Link to="/" className="nav-link" >
                <li > Home</li>
              </Link>
              <Link to="/services" className="nav-link">
                <li > Services</li>
              </Link>
              <Link to="/explore" className="nav-link">
              <li > Explore</li>
              </Link>
              <Link to="/aboutus" className="nav-link">
              <li > About Us</li>
              </Link>
              <Link to="/contact" className="nav-link">
              <li > Contact</li>
              </Link>
            
            <li className="button-nav">
              <button
                type="button"
                className="signout-btn"
                
              >
                Sign up
              </button>
              </li>
              </ul>
            </div>
          </div>
        </nav>
      )
}

export default Header