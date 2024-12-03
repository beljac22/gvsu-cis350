import React from "react"
import { useState, useEffect, useRef } from "react";

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


    

    let loginlink = "Sign In"
        
    let getUU
    let storePW
    let storeEmail
    let getUboolean
    let Confirmlogin = "Not Logged In"
    let Signout = ""
    let AccountInfo = ""
    let Loginpage = "Sign In"

    getUU = localStorage.getItem('username')
    storePW = localStorage.getItem('wervtnm')
    storeEmail = localStorage.getItem('EEE')
    getUboolean = JSON.parse(localStorage.getItem('loginbool'))


    if (getUboolean == true) {
        Confirmlogin = "Logged In"
        Loginpage = "Back to Login Page"
        Signout = "Sign Out"
        AccountInfo = ["Account Info ->",<br></br>,<br></br>,"Username: " + getUU,
        <br></br>,"Email: " + storeEmail]
    } 

    function SignOut() {

        if (Signout == "Sign Out") {
            localStorage.removeItem('username')
            localStorage.removeItem('wervtnm')
            localStorage.removeItem('loginbool')
            localStorage.removeItem('EEE')
            // window.location.reload()
        }

    }


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

                        <a
                        href="/login"
                        target="_blank"
                        onClick={toggleLoginimg}
                        >
                        {Loginpage}
                        </a>
                        <br></br>

                        <a 
                        // href="https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_force_scrollbars"
                        // target="_blank"
                        // class=""
                        >
                        {Confirmlogin}
                        </a>
                        <br></br>
                        
                        <a 
                        href="/"
                        onClick={(e) => {SignOut()}}
                        >
                        {Signout}
                        </a>

                        
                        <br></br>
                        <a // className="AccInfoFontsize"
                        >
                        {AccountInfo}
                        </a>

                    </div>
                    
                </div>
                </li>

            </ul>
        </div>
    )
}

export default Navbar