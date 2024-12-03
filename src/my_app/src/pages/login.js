import React, { useState } from "react";
import { SESSION } from "../App.js"
// import LoginImage from 'https://t4.ftcdn.net/jpg/02/18/88/23/360_F_218882329_ZsfpJDtFWKvwnRewvzr80z551IrXvnTK.jpg'

function LoginPg() {
    function AlreadyLoggedIn(){
        window.alert("User is already logged in.")
        window.close()
    }
    const [value, setValue] = useState('');
    const [value2, setValue2] = useState('');

    // value and value2 are used to create separate springs
    // for username block and password block

    const handleChange = (event) => {
        setValue(event.target.value);
    }

    const handleChange2 = (event) => {
        setValue2(event.target.value);
    }

    async function loginButtonPressed(user,passw){
        if (SESSION.getLoggedIn()){
            AlreadyLoggedIn()
            window.close()
        }
        try{
            await SESSION.login(user,passw)
            window.close()
        } catch (error){
            window.alert("Login Unsuccessful")
        }
    }

    // function passWvisibility decides whether or not the
    // password is hidden when you click on the checkbox

    function passWvisibility() {
    var pw = document.getElementById("thepwInput");
    if (pw.type == "password") {
        pw.type = "text";
    }
    else {
        pw.type = "password";
    }
}



    return (
        <div className="loginbgimage">
            <div className="bx">
            <center><h1>Sign In</h1></center>
            <center>Username:</center>
            <center><input 
            type="text" value={value} onChange={handleChange} 
            className="login-textbxsizeusr"
            />
            </center>
            <br></br>

            <center>Password:</center>
            <center><input 
            type="password" value={value2} id="thepwInput" onChange={handleChange2} 
            className="login-textbxsizepw"
            
            />
            <input type="checkbox" onClick={passWvisibility}/>
            </center>
            <br></br>
            <center><button className="lgnbutton" onClick={async (event) => {await loginButtonPressed(value,value2)}}>Login </button></center>

            </div>
        </div>
        
    );
};


export default LoginPg;