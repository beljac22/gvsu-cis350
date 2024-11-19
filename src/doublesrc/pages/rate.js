import { useState, useEffect, useRef } from "react";
import { FaStar } from "react-icons/fa6";
import { Rate } from "antd"
import { Session } from "../session.ts";
// import { Remedy } from "../utils.ts";



function RatingPg() {

    const [currentrating, setcurrentRating] = useState(0)
    const [rateColor, setColor] = useState(null)

    return(
     <div class="App-ratepg_background">
     Which bathroom are you rating? (Women's or Men's)
     <br></br>
     <br></br>
     Men: <input type="checkbox"/>&ensp; | &ensp;Women: <input type="checkbox"/>
     <br></br>
     <br></br>
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
     Current Rating: {currentrating} 
     <br></br>
     <br></br>
     Ready to Submit Your Rating? Click here:&ensp; 
     <a href="/">
     <button class="styleratingbutton"
     Session
     >
     Submit
     </button>
     </a>

     </div>
    );
    
};

// const SESSION = new Session()
// var Rating = currentrating

export default RatingPg;