import React from 'react'
import FacebookLogo from '../images/icon-facebook.svg'
import TwitterLogo from '../images/icon-twitter.svg'
import PinterestLogo from '../images/icon-pinterest.svg'
import InstagramLogo from '../images/icon-instagram.svg'

function Footer() {
    return (
        <div>
            <footer>
                <div className="footer-div">
                    <div className="footer-logo">
                        <a href="#header">Shortly</a>
                    </div>
                    <div className="features">
                        <h4>Features</h4>
                        <a href="#link-session">Link Shortening</a>
                        <a href="#link-session">Branded Links</a>
                        <a href="#link-session">Analytics</a>
                    </div>
                    <div className="resources">
                        <h4>Resources</h4>
                        <a href="#header">Blog</a>
                        <a href="#header">Developers</a>
                        <a href="#header">Support</a>
                    </div>
                    <div className="company">
                        <h4>Company</h4>
                        <a href="#header">About</a>
                        <a href="#header">Our Team</a>
                        <a href="#header">Careers</a>
                        <a href="#header">Contact</a>
                    </div>
                    <div className="social-links">
                        <a href="https://facebook.com"><img src={FacebookLogo} alt="facebook logo" /></a>
                        <a href="https://twitter.com"><img src={TwitterLogo} alt="wwitter logo" /></a>
                        <a href="https://pinterest.com"><img src={PinterestLogo} alt="pinterest logo" /></a>
                        <a href="https://instagram.com"><img src={InstagramLogo} alt="instagram logo" /></a>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer
