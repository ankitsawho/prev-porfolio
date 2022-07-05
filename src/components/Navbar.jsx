import React from 'react'
import Logo from './Logo'

function Navbar() {
    return (
        <div className="navbar-container">
            <div className='navbar'>
                <Logo />
                <div className="nav-options">
                    <div className="nav-option" onClick={() => document.getElementById('projects').scrollIntoView()}>Projects</div>
                    <div className="nav-option" onClick={() => document.getElementById('blog').scrollIntoView()}>Blog</div>
                    <div className="nav-option" onClick={() => document.getElementById('contact').scrollIntoView()}>Contact</div>
                </div>
            </div>
        </div>
    )
}

export default Navbar