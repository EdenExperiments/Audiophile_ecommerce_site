import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <div>
            <h2>audiophile</h2>
            <nav>
                <Link to="/">HOME</Link>
                <Link to="/Headphones">HEADPHONES</Link>
                <Link to="/Speakers">EARPHONES</Link>
                <Link to="/Earphones">SPEAKERS</Link>
            </nav>
            <p>
                Audiophile is an all in one stop to fulfill your audio needs. We're a small team of muisc lovers
                and sound specialists who are devoted to helping you get the most out of your personal audio.
                Come and visit our demo facility - we're open 7 days a week.
            </p>
            <p>Copyright 2023. All Rights Reserved</p>
            <li>
                <a href="/"><img /></a>
                <a href="/"><img /></a>
                <a href="/"><img /></a>
            </li>
        </div>
    )
}

export {Footer}