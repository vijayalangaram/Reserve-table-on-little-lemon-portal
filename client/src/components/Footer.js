
import { Link } from 'react-router-dom';
export default function Footer() {
    return (
        <footer>
            <menu>
                <li className="img-footer">
                    <img src={require('../assets/footer-logo.png')} alt="Little Lemon logo"></img>
                </li>
                <li className="contact" >
                    <h1 className="footer-header">Navigation</h1>
                    <ul className="footer-links">
                        <Link to="/">Home</Link>
                        <Link to="/about">About</Link>
                        {/* <a href={require('../assets/menu.webp')} target="_blank" rel="noreferrer">Menu</a> */}
                        <Link to="/reservations">Reservations</Link>
                        <Link to="/order">Order</Link>
                        {/* <Link to="/login">Login</Link> */}
                    </ul>
                </li>

                <li>
                    <h1 className="footer-header">Contact</h1>
                    <ul className="footer-links">
                        <li>test project</li>
                        <li>India</li>
                        <br></br>
                        <a href="mailto: testproject.com" target="_blank" rel="noreferrer">testbooking.com</a>
                    </ul>
                </li>          
            </menu>
        </footer>
    );
}