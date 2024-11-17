// import logo from './logo.svg';
import './App.css';
import './pages/Instruction.js';
import BlueConnect from "./images/blueconnectimg.png"
import MaryIdema from "./images/librarymainentrance.jpg"
import AuHall from "./images/AuSableHall.jpg"
import HnrsCollege from "./images/HonorsCollegeBding.jpg"
import KellykellyC from "./images/KellyScenter.jpg"
import LakeOntH from "./images/LakeOntoreoHall.jpg"
import RecC from "./images/RecCentergv.jpg"

import Navbar from "./components/Navbar/Navbar.js";
import Hambrger from './hbmenu&carrot/hamburgler.js';
import { Link, Element } from 'react-scroll';
import { useState, useEffect, useRef } from "react";
import CrrtM from './hbmenu&carrot/fltrbutton.js';
import FltrButton from './hbmenu&carrot/fltrbutton.js';
import { Session } from './session.ts';
// import React from "react";

function commentaftersubmitting() {
  
  const newcomnt = document.getElementById("newcomment-text").nodeValue;

  const reviewcmtbox = document.getElementById("revboxcontainer");

  const elementforcommnts = document.createElement("div");
  elementforcommnts.innerText = newcomnt;

  reviewcmtbox.appendChild(elementforcommnts);
  document.getElementById("newcomnt").nodeValue = "";

}

export const SESSION = new Session();
var my_rating = 5
try{
  await SESSION.postRating(1,my_rating)
  // rating was successful
} catch {
  // rating was not successful if this line is ran
}
try{
  await SESSION.updateRemedies() // updates SESSION to include updated remedy info
} catch {
  // request could not be sent for any reason
}
SESSION.getRemedies()[0].getComments()[0]. // this line gets all comments for the remedy at index zero
SESSION.getRemedies()[0].getBuildingName() == "Mackinaw"
SESSION.getRemedies()[0].getName()



function App() {

  // let arr = []
  // for (let i = 0; i < 5; i++) {
  //   arr.push("Hello GV Peeps", <br/>, "Enjoy your time here", <br/>)
  // }

  const [value, setValue] = useState('');
  const [listofcomments, setListofcomments] = useState([])
  // const inputRef = useRef(null);

  const clicktopost = () => {
    setListofcomments((listofcomments) => [value, <br></br>, ...listofcomments])
  }

  // listofcomments.push("F you")

  const handleChange = (event) => {
    setValue(event.target.value);
  }

  // useEffect(() => {

  // var yy = document.getElementById("submitcomment");

  // yy.addEventListener("click", function () {
    

  // const newcomnt = document.getElementById("newcomment-text").value;

  // const reviewcmtbox = document.getElementById("revboxcontainer");

  // const elementforcommnts = document.createElement("div");
  // elementforcommnts.innerText = newcomnt;

  // reviewcmtbox.appendChild(elementforcommnts);
  // document.getElementById("newcomnt").value = "";
  // });

  // });




  // var yy = document.getElementById("submitcomment");

  // yy.addEventListener("click", useEffect(() => {
    

  // const newcomnt = document.getElementById("newcomment-text").value;

  // const reviewcmtbox = document.getElementById("revboxcontainer");

  // const elementforcommnts = document.createElement("div");
  // elementforcommnts.innerText = newcomnt;

  // reviewcmtbox.appendChild(elementforcommnts);
  // document.getElementById("newcomnt").value = "";
  // }));

  const [filtermenuOpen, setfiltermenuOpen] = useState(false);

    const toggleFilter = () =>{
      setfiltermenuOpen(!filtermenuOpen)
    }
  
  // new Session().postComment(3, "This bathroom stinks");

  const [commentOpen, setCommentOpen] = useState(false);

    const toggleCommentbtn = () =>{
        setCommentOpen(!commentOpen)
    }

  const [commentOpen2, setCommentOpen2] = useState(false);

    const toggleCommentbtn2 = () =>{
        setCommentOpen2(!commentOpen2)
    }

  const [commentOpen3, setCommentOpen3] = useState(false);

    const toggleCommentbtn3 = () =>{
        setCommentOpen3(!commentOpen3)
    }

  const [commentOpen4, setCommentOpen4] = useState(false);

    const toggleCommentbtn4 = () =>{
        setCommentOpen4(!commentOpen4)
    }

  const [commentOpen5, setCommentOpen5] = useState(false);

    const toggleCommentbtn5 = () =>{
      setCommentOpen5(!commentOpen5)
    }

  const [commentOpen6, setCommentOpen6] = useState(false);

    const toggleCommentbtn6 = () =>{
      setCommentOpen6(!commentOpen6)
    }

  const [commentOpen7, setCommentOpen7] = useState(false);

    const toggleCommentbtn7 = () =>{
      setCommentOpen7(!commentOpen7)
    }

  const [commentOpen8, setCommentOpen8] = useState(false);

    const toggleCommentbtn8 = () =>{
      setCommentOpen8(!commentOpen8)
    }

  const [commentOpen9, setCommentOpen9] = useState(false);

    const toggleCommentbtn9 = () =>{
      setCommentOpen9(!commentOpen9)
    }

  const [commentOpen10, setCommentOpen10] = useState(false);

    const toggleCommentbtn10 = () =>{
      setCommentOpen10(!commentOpen10)
    }


  // var yy = document.getElementById("submitcomment");
  
  // yy.addEventListener("click", useEffect(() => {
    

  // const newcomnt = document.getElementById("newcomment-text").value;

  // const reviewcmtbox = document.getElementById("revboxcontainer");

  // const elementforcommnts = document.createElement("div");
  // elementforcommnts.innerText = newcomnt;

  // reviewcmtbox.appendChild(elementforcommnts);
  // document.getElementById("newcomnt").value = "";
  // }));


  return (
    // <img src={logo} className="App-logo" alt="logo" />
    <div>
    
      <Navbar></Navbar> 
      <div
      class="App-belowbar"
      >
      
      <Hambrger></Hambrger>
      {/* <br></br>
      <br></br>
      <CrrtM></CrrtM> */}
        
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

      <div class="revbox" id='revboxcontainer'>
        <div class="yyt">
          <div class="ctrrevtitle">
            <h3>F1B1Mac Comments</h3>
          </div>
          <FltrButton></FltrButton>
          {/* <button
          class={`filtercmt ${filtermenuOpen ? 'open' : ''}`} onClick={toggleFilter}
          >
            filter
          </button> */}

          <div>
            <button class="stylecmtbutton" onClick={toggleCommentbtn}>Create Comment</button>
          </div>
        </div>
        <div 
        // class="review-bxfortext"
        class={`review-bxfortext ${commentOpen ? 'open' : ''}`}
        >
          <textarea
          name="" id="newcomment-text" class="textinbx"
          value={value} onChange={handleChange}
          >
          </textarea>

          <div class="arealeftofbutton">
          <button
          class="buttonedit"
          id='submitcomment'
          onClick={clicktopost}
          >
          Submit
          </button>
          </div>
          {/* {listofcomments.map((text) => (
          {text}.toString()
          ))} */}
        </div>
        {listofcomments.map((value) => (
          <div>{value}</div>

          // <br></br>
        ))}
        
         
      </div>


      <br></br>
      <br></br>

      {/* Area for Second Bathroom Review */}

      <Element name="KirkBuilding"> {/* This element is used to reference the link that scrolls to that part of page */}
      <h1>Kirkhof Center</h1>
      </Element>
      
      <Element name="F1DineKirk">
      <elm class="underlineBRname">
      <h3>Bathroom F1DineKirk</h3>
      </elm>
      </Element>
      <br></br>
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

      <div class="revbox">
        <div class="yyt">
          <div class="ctrrevtitle">
            <h3>F1DineKirk Comments</h3>
          </div>
          <FltrButton></FltrButton>

          {/* <button
          class={`filtercmt ${filtermenuOpen ? 'open' : ''}`} onClick={toggleFilter}
          >
            filter
          </button> */}

          <div>
            <button class="stylecmtbutton" onClick={toggleCommentbtn2}>Create Comment</button>
          </div>
        </div>
        <div 
        // class="review-bxfortext"
        class={`review-bxfortext ${commentOpen2 ? 'open' : ''}`}
        >
          <textarea
          name="" id="" class="textinbx"
          >
          </textarea>

          <div class="arealeftofbutton">
          <button
          class="buttonedit"
          >
          Submit
          </button>
          </div>
        </div>

      {/* {listofcomments.map((value) => (
        <div>{value}</div>
          // <br></br>
      ))} */}

      Girl's Bathroom: This bathroom is not clean at all!
      <br></br>
      <br></br>
      Girl's Bathroom: This bathroom is not clean at all!
      <br></br>
      <br></br>
      Girl's Bathroom: This bathroom is not clean at all!
      <br></br>
      <br></br>
      Girl's Bathroom: This bathroom is not clean at all!
      <br></br>
      <br></br>
      Girl's Bathroom: This bathroom is not clean at all!
      <br></br>
      <br></br>
      Girl's Bathroom: This bathroom is not clean at all!
      <br></br>
      <br></br>
      Girl's Bathroom: This bathroom is not clean at all!
      <br></br>
      <br></br>
      Girl's Bathroom: This bathroom is not clean at all!
      <br></br>
      <br></br>
      Girl's Bathroom: This bathroom is not clean at all!
      <br></br>
      <br></br>
      Girl's Bathroom: This bathroom is not clean at all!
      <br></br>
      <br></br>
      Girl's Bathroom: This bathroom is not clean at all!
      <br></br>
      <br></br>
      Girl's Bathroom: This bathroom is not clean at all!
      <br></br>
      <br></br>
      Girl's Bathroom: This bathroom is not clean at all!
      <br></br>
      <br></br>
      Girl's Bathroom: This bathroom is not clean at all!
         
      </div>

      <br></br>
      <br></br>

      {/* Area for Third Bathroom Review */}

      <Element name="BlueConnection"> {/* This element is used to reference the link that scrolls to that part of page */}
      <h1>Blue Connection</h1>
      </Element>
      
      <Element name="NPod&Office">
      <elm class="underlineBRname">
      <h3>Bathroom NPod&Office</h3>
      </elm>
      </Element>
      <br></br>
      <div>
      <br></br>
      <img
      src={BlueConnect} class="imgg1" alt="2nd gv image" 
      />
      <div class="textnextimgg1">
      
      <br></br>
      <br></br>
      <br></br>

      Direction: Walk into left door and turn left to leave Office
      then turn right and you'll see bathrooms for both genders on your right
      near trash/recycle bins.
      <br></br>
      <br></br>
      Average Rating: 3.5 stars
      <br></br>
      <br></br>
      <button className="ratebutton">Rate Restroom</button>
      </div>
      </div>
      
      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <div class="revbox">
        <div class="yyt">
          <div class="ctrrevtitle">
            <h3>NPod&Office Comments</h3>
          </div>
          <FltrButton></FltrButton>

          {/* <button 
          class={`filtercmt ${filtermenuOpen ? 'open' : ''}`} onClick={toggleFilter}
          >
            filter
          </button> */}

          <div>
            <button class="stylecmtbutton" onClick={toggleCommentbtn3}>Create Comment</button>
          </div>
        </div>
        <div 
        // class="review-bxfortext"
        class={`review-bxfortext ${commentOpen3 ? 'open' : ''}`}
        >
          <textarea
          name="" id="" class="textinbx"
          >
          </textarea>

          <div class="arealeftofbutton">
          <button
          class="buttonedit"
          >
          Submit
          </button>
          </div>
        </div>
      Girl's Bathroom: This bathroom is not clean at all!
      <br></br>
      <br></br>
      Girl's Bathroom: This bathroom is not clean at all!
      <br></br>
      <br></br>
      Girl's Bathroom: This bathroom is not clean at all!
      <br></br>
      <br></br>
      Girl's Bathroom: This bathroom is not clean at all!
      <br></br>
      <br></br>
      Girl's Bathroom: This bathroom is not clean at all!
      <br></br>
      <br></br>
      Girl's Bathroom: This bathroom is not clean at all!
      <br></br>
      <br></br>
      Girl's Bathroom: This bathroom is not clean at all!
      <br></br>
      <br></br>
      Girl's Bathroom: This bathroom is not clean at all!
      <br></br>
      <br></br>
      Girl's Bathroom: This bathroom is not clean at all!
      <br></br>
      <br></br>
      Girl's Bathroom: This bathroom is not clean at all!
      <br></br>
      <br></br>
      Girl's Bathroom: This bathroom is not clean at all!
      <br></br>
      <br></br>
      Girl's Bathroom: This bathroom is not clean at all!
      <br></br>
      <br></br>
      Girl's Bathroom: This bathroom is not clean at all!
      <br></br>
      <br></br>
      Girl's Bathroom: This bathroom is not clean at all!
         
      </div>

      <br></br>
      <br></br>

      {/* Area for Fourth Bathroom Review */}

      <Element name="AuSable"> {/* This element is used to reference the link that scrolls to that part of page */}
      <h1>Au Sable Hall</h1>
      </Element>
      
      <Element name="AS2U1">
      <elm class="underlineBRname">
      <h3>Bathroom AS2U1</h3>
      </elm>
      </Element>
      <br></br>
      <div>
      <br></br>
      <img
      src={AuHall} class="imgg1" alt="2nd gv image" 
      />
      <div class="textnextimgg1">
      
      <br></br>
      <br></br>
      <br></br>

      Direction: Walk into entrance and walk up the stairs on your left.
      Then turn right and walk until you see a small open corner area on
      the left and you'll notice both for each gender.
      <br></br>
      <br></br>
      Average Rating: 3.9 stars
      <br></br>
      <br></br>
      <button className="ratebutton">Rate Restroom</button>
      </div>
      </div>
      
      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <div class="revbox">
        <div class="yyt">
          <div class="ctrrevtitle">
            <h3>AS2U1 Comments</h3>
          </div>
          <FltrButton></FltrButton>

          {/* <button
          class={`filtercmt ${filtermenuOpen ? 'open' : ''}`} onClick={toggleFilter}
          >
            filter
          </button> */}

          <div>
            <button class="stylecmtbutton" onClick={toggleCommentbtn4}>Create Comment</button>
          </div>
        </div>
        <div 
        // class="review-bxfortext"
        class={`review-bxfortext ${commentOpen4 ? 'open' : ''}`}
        >
          <textarea
          name="" id="" class="textinbx"
          >
          </textarea>

          <div class="arealeftofbutton">
          <button
          class="buttonedit"
          >
          Submit
          </button>
          </div>
        </div>
      Girl's Bathroom: This bathroom is not clean at all!
      <br></br>
      <br></br>
      Girl's Bathroom: This bathroom is not clean at all!
      <br></br>
      <br></br>
      Girl's Bathroom: This bathroom is not clean at all!
      <br></br>
      <br></br>
      Girl's Bathroom: This bathroom is not clean at all!
      <br></br>
      <br></br>
      Girl's Bathroom: This bathroom is not clean at all!
      <br></br>
      <br></br>
      Girl's Bathroom: This bathroom is not clean at all!
      <br></br>
      <br></br>
      Girl's Bathroom: This bathroom is not clean at all!
      <br></br>
      <br></br>
      Girl's Bathroom: This bathroom is not clean at all!
      <br></br>
      <br></br>
      Girl's Bathroom: This bathroom is not clean at all!
      <br></br>
      <br></br>
      Girl's Bathroom: This bathroom is not clean at all!
      <br></br>
      <br></br>
      Girl's Bathroom: This bathroom is not clean at all!
      <br></br>
      <br></br>
      Girl's Bathroom: This bathroom is not clean at all!
      <br></br>
      <br></br>
      Girl's Bathroom: This bathroom is not clean at all!
      <br></br>
      <br></br>
      Girl's Bathroom: This bathroom is not clean at all!
         
      </div>

      <br></br>
      <br></br>

      {/* Area for Fifth Bathroom Review */}

      <Element name="KellySports"> {/* This element is used to reference the link that scrolls to that part of page */}
      <h1>Kelly Sports Center</h1>
      </Element>
      
      <Element name="TopFKSC">
      <elm class="underlineBRname">
      <h3>Bathroom TopFKSC</h3>
      </elm>
      </Element>
      <br></br>
      <div>
      <br></br>
      <img
      src={KellykellyC} class="imgg1" alt="2nd gv image" 
      />
      <div class="textnextimgg1">
      
      <br></br>
      <br></br>
      <br></br>

      Direction: Go into the doors to the right and turn left into the hallway past the stairs.
      Then you'll notice the bathroom signs somewhere to the left for each gender.
      <br></br>
      <br></br>
      Average Rating: 4.5 stars
      <br></br>
      <br></br>
      <button className="ratebutton">Rate Restroom</button>
      </div>
      </div>
      
      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <div class="revbox">
        <div class="yyt">
          <div class="ctrrevtitle">
            <h3>TopFKSC Comments</h3>
          </div>
          <FltrButton></FltrButton>

          {/* <button 
          class={`filtercmt ${filtermenuOpen ? 'open' : ''}`} onClick={toggleFilter}
          >
            filter
          </button> */}

          <div>
            <button class="stylecmtbutton" onClick={toggleCommentbtn5}>Create Comment</button>
          </div>
        </div>
        <div 
        // class="review-bxfortext"
        class={`review-bxfortext ${commentOpen5 ? 'open' : ''}`}
        >
          <textarea
          name="" id="" class="textinbx"
          >
          </textarea>

          <div class="arealeftofbutton">
          <button
          class="buttonedit"
          >
          Submit
          </button>
          </div>
        </div>
      Girl's Bathroom: This bathroom is not clean at all!
      <br></br>
      <br></br>
      Girl's Bathroom: This bathroom is not clean at all!
      <br></br>
      <br></br>
      Girl's Bathroom: This bathroom is not clean at all!
      <br></br>
      <br></br>
      Girl's Bathroom: This bathroom is not clean at all!
      <br></br>
      <br></br>
      Girl's Bathroom: This bathroom is not clean at all!
      <br></br>
      <br></br>
      Girl's Bathroom: This bathroom is not clean at all!
      <br></br>
      <br></br>
      Girl's Bathroom: This bathroom is not clean at all!
      <br></br>
      <br></br>
      Girl's Bathroom: This bathroom is not clean at all!
      <br></br>
      <br></br>
      Girl's Bathroom: This bathroom is not clean at all!
      <br></br>
      <br></br>
      Girl's Bathroom: This bathroom is not clean at all!
      <br></br>
      <br></br>
      Girl's Bathroom: This bathroom is not clean at all!
      <br></br>
      <br></br>
      Girl's Bathroom: This bathroom is not clean at all!
      <br></br>
      <br></br>
      Girl's Bathroom: This bathroom is not clean at all!
      <br></br>
      <br></br>
      Girl's Bathroom: This bathroom is not clean at all!
         
      </div>

      <br></br>
      <br></br>

      {/* Area for Sixth Bathroom Review */}

      <Element name="MaryLib"> {/* This element is used to reference the link that scrolls to that part of page */}
      <h1>Mary Idema Library</h1>
      </Element>
      
      <Element name="KnowMarkMain">
      <elm class="underlineBRname">
      <h3>Bathroom KnowMarkMain</h3>
      </elm>
      </Element>
      <br></br>
      <div>
      <br></br>
      <img
      src={MaryIdema} class="imgg1" alt="2nd gv image" 
      />
      <div class="textnextimgg1">
      
      <br></br>
      <br></br>
      <br></br>

      Direction: Enter these doors and turn left.
      Then walk to the area on the right with windows
      and tables. From there walk straight until you
      see bathroom signs for both genders on the right side.
      <br></br>
      <br></br>
      Average Rating: 2 stars
      <br></br>
      <br></br>
      <button className="ratebutton">Rate Restroom</button>
      </div>
      </div>
      
      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <div class="revbox">
        <div class="yyt">
          <div class="ctrrevtitle">
            <h3>KnowMarkMain Comments</h3>
          </div>
          <FltrButton></FltrButton>

          {/* <button
          class={`filtercmt ${filtermenuOpen ? 'open' : ''}`} onClick={toggleFilter}
          >
            filter
          </button> */}

          <div>
            <button class="stylecmtbutton" onClick={toggleCommentbtn6}>Create Comment</button>
          </div>
        </div>
        <div 
        // class="review-bxfortext"
        class={`review-bxfortext ${commentOpen6 ? 'open' : ''}`}
        >
          <textarea
          name="" id="" class="textinbx"
          >
          </textarea>

          <div class="arealeftofbutton">
          <button
          class="buttonedit"
          >
          Submit
          </button>
          </div>
        </div>
      Girl's Bathroom: This bathroom is not clean at all!
      <br></br>
      <br></br>
      Girl's Bathroom: This bathroom is not clean at all!
      <br></br>
      <br></br>
      Girl's Bathroom: This bathroom is not clean at all!
      <br></br>
      <br></br>
      Girl's Bathroom: This bathroom is not clean at all!
      <br></br>
      <br></br>
      Girl's Bathroom: This bathroom is not clean at all!
      <br></br>
      <br></br>
      Girl's Bathroom: This bathroom is not clean at all!
      <br></br>
      <br></br>
      Girl's Bathroom: This bathroom is not clean at all!
      <br></br>
      <br></br>
      Girl's Bathroom: This bathroom is not clean at all!
      <br></br>
      <br></br>
      Girl's Bathroom: This bathroom is not clean at all!
      <br></br>
      <br></br>
      Girl's Bathroom: This bathroom is not clean at all!
      <br></br>
      <br></br>
      Girl's Bathroom: This bathroom is not clean at all!
      <br></br>
      <br></br>
      Girl's Bathroom: This bathroom is not clean at all!
      <br></br>
      <br></br>
      Girl's Bathroom: This bathroom is not clean at all!
      <br></br>
      <br></br>
      Girl's Bathroom: This bathroom is not clean at all!
         
      </div>

      <br></br>
      <br></br>

      {/* Area for 7th Bathroom Review */}

      <Element name="RecCenter"> {/* This element is used to reference the link that scrolls to that part of page */}
      <h1>Rec Center</h1>
      </Element>
      
      <Element name="RecVMBase">
      <elm class="underlineBRname">
      <h3>Bathroom RecVMBase</h3>
      </elm>
      </Element>
      <br></br>
      <div>
      <br></br>
      <img
      src={RecC} class="imgg1" alt="2nd gv image" 
      />
      <div class="textnextimgg1">
      
      <br></br>
      <br></br>
      <br></br>

      Direction: Enter the left doors and walk down the stairs straightfoward
      after checking in. Once downstairs, turn left walk straight to the drink
      vending machine. Then you'll see a Men's bathroom to the right of the 
      vending machine.
      <br></br>
      <br></br>
      Average Rating: 2 stars
      <br></br>
      <br></br>
      <button className="ratebutton">Rate Restroom</button>
      </div>
      </div>
      
      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <div class="revbox">
        <div class="yyt">
          <div class="ctrrevtitle">
            <h3>RecVMBase Comments</h3>
          </div>
          <FltrButton></FltrButton>

          {/* <button
          class={`filtercmt ${filtermenuOpen ? 'open' : ''}`} onClick={toggleFilter}
          >
            filter
          </button> */}

          <div>
            <button class="stylecmtbutton" onClick={toggleCommentbtn7}>Create Comment</button>
          </div>
        </div>
        <div 
        // class="review-bxfortext"
        class={`review-bxfortext ${commentOpen7 ? 'open' : ''}`}
        >
          <textarea
          name="" id="" class="textinbx"
          >
          </textarea>

          <div class="arealeftofbutton">
          <button
          class="buttonedit"
          >
          Submit
          </button>
          </div>
        </div>
      Girl's Bathroom: This bathroom is not clean at all!
      <br></br>
      <br></br>
      Girl's Bathroom: This bathroom is not clean at all!
      <br></br>
      <br></br>
      Girl's Bathroom: This bathroom is not clean at all!
      <br></br>
      <br></br>
      Girl's Bathroom: This bathroom is not clean at all!
      <br></br>
      <br></br>
      Girl's Bathroom: This bathroom is not clean at all!
      <br></br>
      <br></br>
      Girl's Bathroom: This bathroom is not clean at all!
      <br></br>
      <br></br>
      Girl's Bathroom: This bathroom is not clean at all!
      <br></br>
      <br></br>
      Girl's Bathroom: This bathroom is not clean at all!
      <br></br>
      <br></br>
      Girl's Bathroom: This bathroom is not clean at all!
      <br></br>
      <br></br>
      Girl's Bathroom: This bathroom is not clean at all!
      <br></br>
      <br></br>
      Girl's Bathroom: This bathroom is not clean at all!
      <br></br>
      <br></br>
      Girl's Bathroom: This bathroom is not clean at all!
      <br></br>
      <br></br>
      Girl's Bathroom: This bathroom is not clean at all!
      <br></br>
      <br></br>
      Girl's Bathroom: This bathroom is not clean at all!
         
      </div>

      <br></br>
      <br></br>

      {/* Area for 8th Bathroom Review */}

      <Element name="HonorsCollege"> {/* This element is used to reference the link that scrolls to that part of page */}
      <h1>Honors College</h1>
      </Element>
      
      <Element name="HsCll1F">
      <elm class="underlineBRname">
      <h3>Bathroom HsCll1F</h3>
      </elm>
      </Element>
      <br></br>
      <div>
      <br></br>
      <img
      src={HnrsCollege} class="imgg1" alt="2nd gv image" 
      />
      <div class="textnextimgg1">
      
      <br></br>
      <br></br>
      <br></br>

      Direction: Enter the building from here and walk straight until you see a hallway
      to your left and turn into it. Then walk straight until you see a Men's bathroom 
      on the left.
      <br></br>
      <br></br>
      Average Rating: 2 stars
      <br></br>
      <br></br>
      <button className="ratebutton">Rate Restroom</button>
      </div>
      </div>
      
      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <div class="revbox">
        <div class="yyt">
          <div class="ctrrevtitle">
            <h3>HsCll1F Comments</h3>
          </div>
          <FltrButton></FltrButton>

          {/* <button
          class={`filtercmt ${filtermenuOpen ? 'open' : ''}`} onClick={toggleFilter}
          >
            filter
          </button> */}

          <div>
            <button class="stylecmtbutton" onClick={toggleCommentbtn8}>Create Comment</button>
          </div>
        </div>
        <div 
        // class="review-bxfortext"
        class={`review-bxfortext ${commentOpen8 ? 'open' : ''}`}
        >
          <textarea
          name="" id="" class="textinbx"
          >
          </textarea>

          <div class="arealeftofbutton">
          <button
          class="buttonedit"
          >
          Submit
          </button>
          </div>
        </div>
      Girl's Bathroom: This bathroom is not clean at all!
      <br></br>
      <br></br>
      Girl's Bathroom: This bathroom is not clean at all!
      <br></br>
      <br></br>
      Girl's Bathroom: This bathroom is not clean at all!
      <br></br>
      <br></br>
      Girl's Bathroom: This bathroom is not clean at all!
      <br></br>
      <br></br>
      Girl's Bathroom: This bathroom is not clean at all!
      <br></br>
      <br></br>
      Girl's Bathroom: This bathroom is not clean at all!
      <br></br>
      <br></br>
      Girl's Bathroom: This bathroom is not clean at all!
      <br></br>
      <br></br>
      Girl's Bathroom: This bathroom is not clean at all!
      <br></br>
      <br></br>
      Girl's Bathroom: This bathroom is not clean at all!
      <br></br>
      <br></br>
      Girl's Bathroom: This bathroom is not clean at all!
      <br></br>
      <br></br>
      Girl's Bathroom: This bathroom is not clean at all!
      <br></br>
      <br></br>
      Girl's Bathroom: This bathroom is not clean at all!
      <br></br>
      <br></br>
      Girl's Bathroom: This bathroom is not clean at all!
      <br></br>
      <br></br>
      Girl's Bathroom: This bathroom is not clean at all!
         
      </div>

      <br></br>
      <br></br>

      {/* Area for 9th Bathroom Review */}

      <Element name="LakeOnto"> {/* This element is used to reference the link that scrolls to that part of page */}
      <h1>Lake Ontario Hall</h1>
      </Element>
      
      <Element name="LOHF1">
      <elm class="underlineBRname">
      <h3>Bathroom LOHF1</h3>
      </elm>
      </Element>
      <br></br>
      <div>
      <br></br>
      <img
      src={LakeOntH} class="imgg1" alt="2nd gv image" 
      />
      <div class="textnextimgg1">
      
      <br></br>
      <br></br>
      <br></br>

      Direction: Don't know where the bathrooms are located yet in this building.
      <br></br>
      <br></br>
      Average Rating: 2 stars
      <br></br>
      <br></br>
      <button className="ratebutton">Rate Restroom</button>
      </div>
      </div>
      
      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <div class="revbox">
        <div class="yyt">
          <div class="ctrrevtitle">
            <h3>LOHF1 Comments</h3>
          </div>
          <FltrButton></FltrButton>

          {/* <button
          class={`filtercmt ${filtermenuOpen ? 'open' : ''}`} onClick={toggleFilter}
          >
            filter
          </button> */}

          <div>
            <button class="stylecmtbutton" onClick={toggleCommentbtn9}>Create Comment</button>
          </div>
        </div>
        <div 
        // class="review-bxfortext"
        class={`review-bxfortext ${commentOpen9 ? 'open' : ''}`}
        >
          <textarea
          name="" id="" class="textinbx"
          >
          </textarea>

          <div class="arealeftofbutton">
          <button
          class="buttonedit"
          >
          Submit
          </button>
          </div>
        </div>
      Girl's Bathroom: This bathroom is not clean at all!
      <br></br>
      <br></br>
      Girl's Bathroom: This bathroom is not clean at all!
      <br></br>
      <br></br>
      Girl's Bathroom: This bathroom is not clean at all!
      <br></br>
      <br></br>
      Girl's Bathroom: This bathroom is not clean at all!
      <br></br>
      <br></br>
      Girl's Bathroom: This bathroom is not clean at all!
      <br></br>
      <br></br>
      Girl's Bathroom: This bathroom is not clean at all!
      <br></br>
      <br></br>
      Girl's Bathroom: This bathroom is not clean at all!
      <br></br>
      <br></br>
      Girl's Bathroom: This bathroom is not clean at all!
      <br></br>
      <br></br>
      Girl's Bathroom: This bathroom is not clean at all!
      <br></br>
      <br></br>
      Girl's Bathroom: This bathroom is not clean at all!
      <br></br>
      <br></br>
      Girl's Bathroom: This bathroom is not clean at all!
      <br></br>
      <br></br>
      Girl's Bathroom: This bathroom is not clean at all!
      <br></br>
      <br></br>
      Girl's Bathroom: This bathroom is not clean at all!
      <br></br>
      <br></br>
      Girl's Bathroom: This bathroom is not clean at all!
         
      </div>

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

  // var yy = document.getElementById("submitcomment");
  // yy.addEventListener("click", commentaftersubmitting);
  
}

export default App;
