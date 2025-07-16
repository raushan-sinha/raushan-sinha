import { useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    //todo: Nav Title -
    const navTitle = 'Raushan'

    //todo: Navbar Links -
    const navLinks = [
        { url: '/', title: 'Home' },
        { url: '/about', title: 'About' },
        { url: '/skills', title: 'Skills' },
        { url: '/projects', title: 'Projects' },
        { url: '/contact', title: 'Contact' }
    ];

    return (
        <>
            <header className="navbar">
                <div className="navbar-container">
                    <div className="navbar-title">{navTitle}</div>
                    {/* NavLinks */}
                    <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
                        {navLinks.map((link, idx) => (
                            <Link key={idx} to={link.url} onClick={() => setMenuOpen(false)}>{link.title}</Link>
                        ))}
                    </nav>
                    {/* Hamburger Icon */}
                    <div className={`hamburger ${menuOpen ? "toggle" : ""}`}
                    onClick={() => setMenuOpen(!menuOpen)}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </header>
        </>
    );
}

export default Navbar