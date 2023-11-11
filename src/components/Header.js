import React, { useContext } from 'react'
import { mobileNav } from '../App'
import './AppStyle.css'
import { Link } from 'react-router-dom'
import Logo from '../images/logo.svg'

function Header() {

    let [isMobileNavOpen, setisMobileNavOpen] = useContext(mobileNav)
    function toggleMobileNav(e) {
        setisMobileNavOpen(!isMobileNavOpen)
    }
    return (
        <header className='header-section' id="header">
            <div className='navigation'>
                <Link to='/'><img src={Logo} alt='Website Logo'></img></Link>
                <nav className={`${"nav-menu"} ${isMobileNavOpen ? "activated" : ""}`}>
                    <ul>
                        <li><Link to='/'>Features</Link></li>
                        <li><Link to='/'>Pricing</Link></li>
                        <li><Link to='/'>Resources</Link></li>
                    </ul>
                    <div className='line1'></div>
                    <div className="login-signup-mobile">
                        <Link to='/'>Login</Link>
                        <Link to='/' className='active'>Signup</Link>
                    </div>
                </nav>
            </div>
            <div className='login-signup'>
                <Link to='/'>Login</Link>
                <Link to='/' className='active'>Signup</Link>
            </div>
            <div className="hamburger" onClick={toggleMobileNav}>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>
        </header>
    )
}

export default Header
