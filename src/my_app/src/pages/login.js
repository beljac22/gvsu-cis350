import React, { useState } from "react";
import { Session } from "../session.ts";
// import { SESSION } from "../App.js"
// import LoginImage from 'https://t4.ftcdn.net/jpg/02/18/88/23/360_F_218882329_ZsfpJDtFWKvwnRewvzr80z551IrXvnTK.jpg'



function LoginPg() {
    function AlreadyLoggedIn(){
        window.alert("User is already logged in.")
        
        // window.close()
    }
    const [value, setValue] = useState('');
    const [value2, setValue2] = useState('');
    const [value3, setValue3] = useState('');
    const [value4, setValue4] = useState('');
    const [value5, setValue5] = useState('');
    

    // value and value2 are used to create separate springs
    // for username block and password block

    const handleChange = (event) => {
        setValue(event.target.value);
    }

    const handleChange2 = (event) => {
        setValue2(event.target.value);
    }

    const handleChange3 = (event) => {
        setValue3(event.target.value);
    }

    const handleChange4 = (event) => {
        setValue4(event.target.value);
    }

    const handleChange5 = (event) => {
        setValue5(event.target.value);
    }


    const SESSION = new Session()

    async function createuserButtonPressed(createusername,createEmail,createpassw) {


        // const SESSION = new Session()

        // let stringtheEmail = JSON.parse(createEmail)

        try {
            await SESSION.createUser(createusername,createpassw,createEmail)
            window.alert('successfully created new user, now login')
        }
        catch(error) {
            
            window.alert(error + ' Or different error');
            
        }

    }

    // const SE = new Session()


    async function loginButtonPressed(user,passw){
        // if (SESSION.getLoggedIn()){
        //     AlreadyLoggedIn()
        //     // window.close()
        // }
        // const SESSION = new Session()

        // SESSION.getRemedies()[0].getAvgRating

        try{
            // localStorage.setItem('SESSION', JSON.stringify(SESSION))
            // let createuser = SESSION.createUser(user,passw)
            await SESSION.login(user,passw)

            

            // let obj = {umi: user, werv: passw}

            // let getUU = SESSION.getUser().getUsername()
            let getUU = localStorage.setItem('username', user)
            let storePW = localStorage.setItem('wervtnm', passw)

            let getEmail = SESSION.getUser().getEmail()
            let storeEmail = localStorage.setItem('EEE', getEmail)



            // let Pget = JSON.stringify(localStorage.getItem('wervtnm'))
            // let ppop = localStorage.getItem('wervtnm')
            // console.log(Pget)
            // console.log(ppop)


            let getUsr = SESSION.getLoggedIn()
            console.log(getUsr)

            let storelogbool = localStorage.setItem('loginbool', JSON.stringify(getUsr))
            // let getrem
            // getrem = SESSION.getRemedies()
            // console.log(getrem)

            // let avglist = localStorage.setItem('ratelist', '[]')
            let avglist = []
            let currremavg = 0
            let i;


            for (i = 0; i < SESSION.getRemedies().length; i++) {
                currremavg = SESSION.getRemedies()[i].getAvgRating()
                avglist.push(currremavg)
            }

            // let cola = localStorage.setItem('ratelist', JSON.stringify(avglist))


            window.alert("Successfully Logged In")
            
            window.close()
        } catch (error){
            window.alert(error)
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

    function newpassWvisibility() {
        var newpw = document.getElementById("createuserpwInput");
        if (newpw.type == "password") {
            newpw.type = "text";
        }
        else {
            newpw.type = "password";
        }
    }

    // let createlogn = await SESSION.createUser('Racioo', 'Lionhair11', 'carmeloboy1@gmail.com')



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

            {/* Create User Box below */}

            <br></br>
            <br></br>

            <div className="createuserbx">
            <center><h1>Create User</h1></center>
            <center>Username:</center>
            <center><input 
            type="text" value={value3} onChange={handleChange3} 
            className="login-textbxsizeusr"
            />
            </center>
            <br></br>

            <center>Email:</center>
            <center><input 
            type="text" value={value4} onChange={handleChange4} 
            className="login-textbxsizeusr"
            />
            </center>
            <br></br>

            <center>Password:</center>
            <center><input 
            type="password" value={value5} id="createuserpwInput" onChange={handleChange5} 
            className="login-textbxsizepw"
            
            />
            <input type="checkbox" onClick={newpassWvisibility}/>
            </center>
            <br></br>
            <center><button className="lgnbutton" onClick={async (event) => {await createuserButtonPressed(value3,value4,value5)}}>Create User </button></center>

            </div>



            </div>
        </div>
        
    );
};


export default LoginPg;