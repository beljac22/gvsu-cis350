import React from "react"
import logo from '../logo.svg';

function Navbartesting() {
    return (
        <div className="navbar">
            <img src={logo} className="App-logo" alt="logo" /> 
            {/* <div>
            <img src={logo} className="App-logo" alt="logo" /> 
            </div> */}
            <div className="lologo">
                Horacio's World
                {/* <img src={logo} className="App-logo" alt="logo" />  */}
            </div>
            <ul className="navbar-menu">
                <li>
                <a
                 href="/"
                 target="_blank"
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

            </ul>
        </div>
    )
}

export default Navbartesting
// import { Link } from "react-router-dom";

// function Navbar() {
//     return (
//         <div className="navbar">
//             <div className="navbar-logo">
//                 Horacio's World
//             </div>
//             <ul className="navbar-menu">
//                 <li><a href="/">Home</a></li>
//                 <li><Link to="/about">About</Link></li>
//             </ul>
//         </div>
//     )
// }

// export default Navbar