import React from "react";

export default function NavBar() {
    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <span>Elias</span>
            </div>
            <ul className="navbar-links">
                <li><a href="home">home</a></li>
                <li><a href="works">works</a></li>
                <li><a href="about-me">about-me</a></li>
                <li><a href="contacts">contacts</a></li>
            </ul>
        </nav>
    )
}