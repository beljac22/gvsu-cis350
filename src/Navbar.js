import React from "react"
// import logo from '../logo.svg';

function Navbar() {
    return (
        <div className="navbar">
            <div className="lologo">
                Remedy
                {/* <img src={logo} className="App-logo" alt="logo" />  */}
            </div>
            <ul className="navbar-menu">
                <li>
                <a
                 href="/"
                 target="_blank" // blank target allows the link to load into a new tab
                >
                 Home
                </a>
                </li>

                <li>
                <a
                 href="/about"
                 target="_blank"
                >
                 About
                </a>
                </li>

                <li>
                <a
                 href="/instruction"
                 target="_blank"
                >
                 Instruction
                </a>
                </li>

                <li>
                <a
                 href="/review"
                 target="_blank"
                >
                 Review
                </a>
                </li>

                <li>
                <a
                 href="/randomtesting"
                 target="_blank"
                >
                 randomtesting
                </a>
                </li>

                <li>
                <a
                 href="/login"
                 target="_blank"
                >
                 Login
                </a>
                </li>

            </ul>
        </div>
    )
}

export default Navbar