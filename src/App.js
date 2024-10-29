// import logo from './logo.svg';
import './App.css';
import './pages/Instruction.js';

import Navbar from "./components/Navbar/Navbar.js";
import Hambrger from './hbmenu/hamburgler.js';
import { Link, Element } from 'react-scroll';

function App() {

  // let arr = []
  // for (let i = 0; i < 50; i++) {
  //   arr.push("Hello GV Peeps", <br/>, "Enjoy your time here", <br/>)
  // }


  return (
    // <img src={logo} className="App-logo" alt="logo" />
    <div>
    
      <Navbar></Navbar> 
      <div
      class="App-belowbar"
      >
      
      <Hambrger></Hambrger>
        
      <br></br>
      Hello People! Welcome To The GV Bathroom Review Site. Happy Reviewing!
      <br></br>
      <br></br>

      {/* Area for First Bathroom Review */}

      <Element name="MacBuilding"> {/* This element is used to reference the link that scrolls to that part of page */}
      <h1>Mackinac Building</h1>
      </Element>
      
      <Element name="F1B1Mac">
      <elm class="underlineBRname">
      <h3>Bathroom F1B1Mac</h3>
      </elm>
      </Element>
      {/* <br></br> */}
      <div>
      <br></br>
      <img
      src={"https://www.gvsu.edu/cms4/asset/37377CEF-E490-F165-D56EDE6B86EB6815/140612_allendale612_17[1566507621].jpg"} class="imgg1" alt="first gv image" 
      // className="alignratingtext"
      />
      <div class="textnextimgg1">
      
      <br></br>
      <br></br>
      <br></br>

      Direction: Walk inside these doors, turn left and walk until you
      see stairs on the left and you'll bathrooms for both sexes to the
      right of the stairs.
      <br></br>
      <br></br>
      Average Rating: 4 stars
      <br></br>
      <br></br>
      <button className="ratebutton">Rate Restroom</button>
      </div>
      </div>


      <br></br>
      <br></br>
      <br></br>
      <br></br>

      {/* Area for Second Bathroom Review */}

      <Element name="KirkBuilding"> {/* This element is used to reference the link that scrolls to that part of page */}
      <h1>Kirkhof Center</h1>
      </Element>
      
      {/* <Element name="F1B1Mac"> */}
      <elm class="underlineBRname">
      <h3>Bathroom F1DineKirk</h3>
      </elm>
      {/* </Element> */}
      {/* <br></br> */}
      <div>
      <br></br>
      <img
      src={"https://live.staticflickr.com/3313/3292349353_1b926b0b96_b.jpg"} class="imgg1" alt="2nd gv image" 
      />
      <div class="textnextimgg1">
      
      <br></br>
      <br></br>
      <br></br>

      Direction: From entrance near Clock Tower, go inside and walk until you
      see stairs to the right and you'll bathrooms for both sexes to the
      right of the stairs.
      <br></br>
      <br></br>
      Average Rating: 3 stars
      <br></br>
      <br></br>
      <button className="ratebutton">Rate Restroom</button>
      </div>
      </div>
      
      <br></br>
      <br></br>
      <br></br>
      <br></br>








      {/* <Element name="textblwpic">
      {arr}
      </Element> UNCOMMENT THIS*/}
      {/* {arr} */}
      {/* <br></br> */}
      {/* <br></br> */}
      {/* <Element name="KirkBuilding"> This element is used to reference the link that scrolls to that part of page */}
      {/* <h1>Kirkhof Center</h1>
      </Element> */}
      {/* <img
      src={"https://live.staticflickr.com/3313/3292349353_1b926b0b96_b.jpg"} class="imgg1" alt="2nd gv image" 
      /> */}
      {/* <br></br> */}
      {/* {arr} loop of text to test scroll feature from the links in hamburger menu */}
      </div>
    </div>
  );
}

export default App;
