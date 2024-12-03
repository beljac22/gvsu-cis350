// import logo from './logo.svg';
import '../App.css';
import './Instruction.js';
// import './maincli.ts';

import Navbartesting from "../components/Navbar/Navbartesting.js";

function Randomtest() {

  let arr = []
  for (let i = 0; i < 500; i++) {
    arr.push("Hello my hearrrtt fuck you", <br/>, "You smell lovely", <br/>)
  }

  // if (arr.includes("fuck")) {

  // }

  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] == "string" && arr[i].includes("fuck")) {
      delete arr[i]
      if (typeof arr[i+1] != "function")
        delete arr[i+1]
    }
  }

  return (
    // <img src={logo} className="App-logo" alt="logo" />
    <div className="App">
      {/* <img src={logo} className="App-logo" alt="logo" /> */}
      <Navbartesting></Navbartesting>
      <header className="App-header">
        {/* <p>
          <a 
            // class="App-mimi"
            className="App-aboutlink"
            href="http://localhost:3000/about"
            target="_blank"
          >
            About Page
          </a>
        </p> */}
        <p class="sl">
          <br/>Edt <code>src/App.js</code> and save to reload.<br/>
        </p>
        {/* <img src={"https://www.gvsu.edu/cms4/asset/37377CEF-E490-F165-D56EDE6B86EB6815/140612_allendale612_17[1566507621].jpg"} class="imgg1" alt="first gv image" /> */}
        <p class="pl">
          {/* <br/> */}
          <a 
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React to save your life
          </a>
          <br/>
        </p>
        <a
          className="App-lili"
          href="https://lms.gvsu.edu/?new_loc=%2Fultra%2Fcourses%2F_450138_1%2Foutline"
          target="_blank"
        >
          Go to GV's blackboard or you're fired
        </a>

      <p
      className="App-tiolilo"
      >
      {arr} 
      Heyyy
      </p>
      
      
       
      </header>
    </div>
  );
}

export default Randomtest;