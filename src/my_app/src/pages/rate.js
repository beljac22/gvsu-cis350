import { useState } from "react";
import { Rate } from "antd"
import { Session } from "../session.ts";
// import { Remedy } from "../utils.ts";
// import { Link } from "react-router-dom";


function RatingPg() {

    const [currentrating, setcurrentRating] = useState(0)

    const [buttonclick, setbuttonClick] = useState(false);

    const toggleButton = () =>{
      setbuttonClick(!buttonclick)
    }

    // const avglist = [];
    const lenoflist = 0;
    var totalratingamt = 0;

    let Sesss = new Session()

    async function pressedRatingSubmitbutton() {

      let Uget
      let Pget
      let boolean
      let bathroomId

      // document.getElementsByTagName("a")[0].href = "/"
      // if (value.length >= 1 && (parseInt(value)) >= 1) {
      //   if (currentrating >= 0.5) {
      //     Uget = localStorage.getItem('username')
      //     Pget = localStorage.getItem('wervtnm')
      //     boolean = JSON.parse(localStorage.getItem('loginbool'))
      //     let bathroomId = parseInt(value)

        try {

          if (value.length >= 1 && ((parseInt(value)) >= 1 && (parseInt(value)) < 19)) {
            if (currentrating >= 0 && currentrating <= 5) {
              Uget = localStorage.getItem('username')
              Pget = localStorage.getItem('wervtnm')
              boolean = JSON.parse(localStorage.getItem('loginbool'))
              bathroomId = parseInt(value)
            }
            // if (currentrating = null) {
            //   throw "Invalid rating number"
            // }
          
          }

          if (value.length < 1) {
            throw "Did not input anything for bathroom number."
          } 
          if ((parseInt(value)) < 1 || (parseInt(value)) > 18) {
            throw "Bathroom number does not exist in system."
          }

          if (boolean == true) {
            if (Sesss.getLoggedIn() == true) {
              var newdata = currentrating;
              await Sesss.postRating(bathroomId, newdata)
              await Sesss.updateRemedies()
              window.history.back()
              return 
            }
            let loginn = await Sesss.login(Uget, Pget)
          }
          else {
            throw "You are not logged in."
          }

          var newdata = currentrating;
          await Sesss.postRating(bathroomId, newdata)
          await Sesss.updateRemedies()
          window.history.back()
          // document.getElementsByTagName("a")[0].href = "/"
          
        }
        catch (error) {
          window.alert(error + ' Or different error');
          
        }
        // }
      // }
    }

    const [value, setValue] = useState('');
    

    // value and value2 are used to create separate springs
    // for username block and password block

    const handleChange = (event) => {
        setValue(event.target.value);
    }

    return(
     <div class="App-ratepg_background">
     Which bathroom are you rating? (Input Bathroom # Below)
     <br></br>
     <br></br>
     Bathroom Number:&nbsp;
     <input
     className="login-textbxsizeusr"
     value={value}
     onChange={handleChange}
     >
     </input>
     <br></br>
     <br></br>
     {/* Men: <input type="checkbox"/>&ensp; | &ensp;Women: <input type="checkbox"/>
     <br></br>
     <br></br> */}
     Rate The Bathroom You Chose:
     <br></br>
     <br></br>
   
    
     <Rate allowHalf style={{backgroundColor: "whitesmoke", fontSize: 60, color: "black"}}
      onChange={ (value) => { setcurrentRating(value) } }
      value={currentrating}
     />
     {/* </div> */}
     <br></br>
     <br></br>
     {/* Current Rating: {currentrating}  */}
     {/* <br></br>
     <br></br> */}
     Ready to Submit Your Rating? Click here:&ensp; 
     <a>

     <button class="styleratingbutton" 
     onClick={async (e) => {await pressedRatingSubmitbutton()}}
    //  href={'/'}
    //  {raterate == currentrating}
     >
     Submit
     </button>
     </a>

     {/* show boolean value: {raterate} */}
     </div>
    );
    
};


export default RatingPg;