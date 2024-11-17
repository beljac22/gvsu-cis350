import React from "react"
import { useState, useEffect, useRef } from "react";
// import { Link, Element } from 'react-scroll';
// import logo from '../logo.svg';

function Navbar() {

    const [lgnimgOpen, setlgnimgOpen] = useState(false);

    const toggleLoginimg = () =>{
        setlgnimgOpen(!lgnimgOpen)

        if (!lgnimgOpen) {
            document.body.style.overflow = "hidden";
        }
        else {
            document.body.style.overflow = "auto";
        }
    }

    let loginmenuRef = useRef();

    useEffect(() => {
        let handler = (e) => {
         if (!loginmenuRef.current.contains(e.target)) {
            setlgnimgOpen(false);
            document.body.style.overflow = "auto";
         }

         if (loginmenuRef.current.contains(e.target)) {
            // setlgnimgOpen(false);
            document.body.style.overflow = "hidden";
         }
         
        }
        document.addEventListener("mousedown", handler);

        });


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

                {/* <li>
                <a
                 href="/instruction"
                 target="_blank"
                >
                 Instruction
                </a>
                </li> */}

                {/* <li>
                <a
                 href="/review"
                 target="_blank"
                >
                 Review
                </a>
                </li> */}

                {/* <li>
                <a
                 href="/randomtesting"
                 target="_blank"
                >
                 randomtesting
                </a>
                </li> */}

                <li>
                <a
                 href="/login"
                 target="_blank"
                >
                 Login
                </a>
                </li>

                <li>
                <div
                ref={loginmenuRef}
                >
                    <div>
                    <img 
                    src="https://png.pngtree.com/png-clipart/20200224/original/pngtree-avatar-icon-profile-icon-member-login-vector-isolated-png-image_5247852.jpg" 
                    class={`lgnimg ${lgnimgOpen ? 'open' : ''}`} onClick={toggleLoginimg}
                    />
                    {/* Hello */}
                    </div>

                    <div class={`dropdownlgnimgmenu ${lgnimgOpen ? 'open' : ''}`}>

                        {/* <Link> */}
                        {/* <text>
                        Hello
                        </text> */}
                        {/* Hello */}
                        {/* </Link> */}

                        <a 
                        href="https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_force_scrollbars"
                        target="_blank"
                        // class=""
                        >
                        Hello
                        </a>
                        <br></br>
                        
                        <a 
                        href="https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_force_scrollbars"
                        target="_blank"
                        // class=""
                        >
                        Hello
                        </a>

                    </div>
                    
                </div>
                </li>

            </ul>
        </div>
    )
}

export default Navbar