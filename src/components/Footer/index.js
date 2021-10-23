import { FaInstagram, FaFacebookSquare, FaTwitter, FaLinkedinIn, FaPinterestP } from 'react-icons/fa';
import './index.css'

const Footer = () => {
    return(
        <div className="footer">
            <div className="footer-section">
                <div className="get-in-touch">
                    <h3 className="footer-heading">
                        Get in touch
                    </h3>
                    <p className="footer-description">
                        stay connected with us and <br/>
                        let's hear more stories abount scholarships <br/> and education
                    </p>
                    <input type="text" placeholder="E-mail" className="mail-input" />
                    <button type="submit" className="mail-btn">send</button>
                    <div className="icons">
                         <FaInstagram className="inst-icon" /> 
                         <FaFacebookSquare className="inst-icon" />
                         <FaTwitter className="inst-icon" />
                         <FaLinkedinIn className="inst-icon" />
                         <FaPinterestP className="inst-icon" />
                       

                    </div>
                </div>
                <div className="">
                <h3 className="footer-heading">
                        Home
                    </h3>
                    <ul className="footer-list">
                        
                        <li className="footer-list-items">About us</li>
                        <li className="footer-list-items">Carrier</li>
                        <li className="footer-list-items">We are hiring</li>
                        <li className="footer-list-items">Blog</li>
                    </ul>
                </div>
                <div className="">
                <h3 className="footer-heading">
                        Services
                    </h3>
                    <ul className="footer-list">
                        
                        <li className="footer-list-items">About us</li>
                        <li className="footer-list-items">Carrier</li>
                        <li className="footer-list-items">We are hiring</li>
                        <li className="footer-list-items">Blog</li>
                    </ul>
                </div>
                <div className="">
                <h3 className="footer-heading">
                        Explore
                    </h3>
                    <ul className="footer-list">
                        
                        <li className="footer-list-items">About us</li>
                        <li className="footer-list-items">Carrier</li>
                        <li className="footer-list-items">We are hiring</li>
                        <li className="footer-list-items">Blog</li>
                    </ul>
                </div>
                <div className="">
                <h3 className="footer-heading">
                        About Us
                    </h3>
                    <ul className="footer-list">
                        
                        <li className="footer-list-items">About us</li>
                        <li className="footer-list-items">Carrier</li>
                        <li className="footer-list-items">We are hiring</li>
                        <li className="footer-list-items">Blog</li>
                    </ul>
                </div>
                <div className="">
                <h3 className="footer-heading">
                        Contact
                    </h3>
                    <ul className="footer-list">
                        
                        <li className="footer-list-items">About us</li>
                        <li className="footer-list-items">Carrier</li>
                        <li className="footer-list-items">We are hiring</li>
                        <li className="footer-list-items">Blog</li>
                    </ul>
                </div>

            </div>
            <hr className="border-line"/>
            <p className="copyright"> © 2021 Aliff, inc | Terms | Policy</p>
        </div>
    )
}

export default Footer