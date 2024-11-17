// import React from "react";
import Navbar from "../components/Navbar/Navbar.js";

function InstructionPg() {
    // const element = document.getElementById("ElementID")
    // let mb = "Mackinac Building";
    

    // if (mb) {
    //     element.style.fontSize = "30px";
    // }
    return (
        <div>
            <Navbar></Navbar>
            <div
            class="App-instcnbelowbar"
            >

            <div className="App-mbfontsize">
            <br></br><center>Mackinac Building</center><br></br>
            {/* <br></br> */}
            </div>

             {/* <br></br><center>Mackinac Building</center><br></br>
             <br></br> */}
             <center>
             <img 
            src={"https://www.gvsu.edu/cms4/asset/37377CEF-E490-F165-D56EDE6B86EB6815/140612_allendale612_17[1566507621].jpg"} class="imgg1" alt="first gv image" />
           
            <br></br>bathroom m1: From this entrance, walk left then turn right to the bathrooms near the stair.
            <br></br>
            <div className="App-kcfontsize">
            <br></br>Kirkhof Center<br></br>
            {/* <br></br> */}
            </div>
            <br></br><br></br>
            <img
            src={"https://live.staticflickr.com/3313/3292349353_1b926b0b96_b.jpg"} class="imgg1" alt="2nd gv image" />
            <br></br>
            bathroom kc1: From this entrance, walk straight until you can turn right to the stairs,
            <br></br>but before the stairs turn right again and you'll notice bathrooms.
            </center>
            </div>

        </div>
    );
};
 
export default InstructionPg;