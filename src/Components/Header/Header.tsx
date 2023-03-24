import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <nav>
            <div className="show" id="Hamburger"></div>
            <h2>audiophile</h2>
            <Link to="/">HOME</Link>
            <Link to="/Headphones">HEADPHONES</Link>
            <Link to="/Speakers">EARPHONES</Link>
            <Link to="/Earphones">SPEAKERS</Link>
            <Link to="/Checkout"><img></img></Link>
        </nav>
    )
}

export {Header}