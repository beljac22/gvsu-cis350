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
import { raterate } from './pages/rate.js';
import { Rate } from "antd"
import { Remedy } from './utils.ts';
// import CommentInputVal from './components/cmtvalue.js'


const SESSION = new Session();
// let oop = await SESSION
await SESSION.updateRemedies()

// SESSION.getRemedies()

// console.log(SESSION.getRemedies())

// const [value, setValue] = useState('');

function App() {

  
  // console.log(JSON.parse("value"))
  // let lllist = [value]

  // let o
  // let stringifyiteration
  // // let parseiteration
  // let stringifysetteriteration
  // let parsesetteriteration

  // for (o = 1; o < SESSION.getRemedies().length + 1; o++) {
  //   stringifyiteration = "value" + JSON.stringify(o)
  //   stringifysetteriteration = "setValue" + JSON.stringify(o)
  //   // parseiteration = parse(stringifyiteration)
  //   // console.log(parseiteration)
  //   // console.log(parseiteration)
  //   const [lllist[0], setlllist[0]] = useState('');
  // }
  


  const [value, setValue] = useState('');
  const [value2, setValue2] = useState('');
  const [value3, setValue3] = useState('');
  const [value4, setValue4] = useState('');
  const [value5, setValue5] = useState('');
  const [value6, setValue6] = useState('');
  const [value7, setValue7] = useState('');
  const [value8, setValue8] = useState('');
  const [value9, setValue9] = useState('');
  const [value10, setValue10] = useState('');
  const [value11, setValue11] = useState('');
  const [value12, setValue12] = useState('');
  const [value13, setValue13] = useState('');
  const [value14, setValue14] = useState('');
  const [value15, setValue15] = useState('');
  const [value16, setValue16] = useState('');
  const [value17, setValue17] = useState('');
  const [value18, setValue18] = useState('');

  const [listofcomments, setListofcomments] = useState([])
  // const inputRef = useRef(null);
  // const [commentId, setCommentId] = useState(0);

  const clicktopost = () => {
    setListofcomments((listofcomments) => [value, <br></br>, ...listofcomments])
  }

  // listofcomments.push("F you")

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
  const handleChange6 = (event) => {
    setValue6(event.target.value);
  }
  const handleChange7 = (event) => {
    setValue7(event.target.value);
  }
  const handleChange8 = (event) => {
    setValue8(event.target.value);
  }
  const handleChange9 = (event) => {
    setValue9(event.target.value);
  }
  const handleChange10 = (event) => {
    setValue10(event.target.value);
  }
  const handleChange11 = (event) => {
    setValue11(event.target.value);
  }
  const handleChange12 = (event) => {
    setValue12(event.target.value);
  }
  const handleChange13 = (event) => {
    setValue13(event.target.value);
  }
  const handleChange14 = (event) => {
    setValue14(event.target.value);
  }
  const handleChange15 = (event) => {
    setValue15(event.target.value);
  }
  const handleChange16 = (event) => {
    setValue16(event.target.value);
  }
  const handleChange17 = (event) => {
    setValue17(event.target.value);
  }
  const handleChange18 = (event) => {
    setValue18(event.target.value);
  }

 

  const [ratepgOpen3, setratepgOpen3] = useState(false);

    const toggleratebtn3 = () =>{
      setratepgOpen3(!ratepgOpen3)
    }

  var unk = []

  let y
  let j
  let cmtarr = []
  let testcomment
  let revealcomment
  let innerlist = []
  // let addtostring = ""

  for (y = 0; y < SESSION.getRemedies().length; y++) {
    testcomment = SESSION.getRemedies()[y]
    for (j = 0; j < testcomment.getComments().length; j++) {
      revealcomment = testcomment.getComments()[j].getText()
      innerlist.push(revealcomment)
      innerlist.push(<br></br>)
      innerlist.push(<br></br>)
      // addtostring += revealcomment + '\n'
      // cmtarr.push(revealcomment)
    }

    innerlist.reverse()
    
    cmtarr.push(innerlist)
    innerlist = []
    // addtostring = ""
  }

  console.log(cmtarr)
  console.log('hello\nworld')

  
  let avgr

  let i
  let arr = []

  for (i = 0; i < SESSION.getRemedies().length; i++) {
    if (SESSION.getRemedies()[i].getAvgRating() == null) {
      avgr = 0
      arr.push(avgr)
      unk[i] = "No Ratings Posted Yet"
    }
    else {
      avgr = SESSION.getRemedies()[i].getAvgRating()
      arr.push(avgr)
      unk[i] = ""
    }
  }






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

  const [commentOpen11, setCommentOpen11] = useState(false);

    const toggleCommentbtn11 = () =>{
      setCommentOpen11(!commentOpen11)
    }

  const [commentOpen12, setCommentOpen12] = useState(false);

    const toggleCommentbtn12 = () =>{
      setCommentOpen12(!commentOpen12)
    }

  const [commentOpen13, setCommentOpen13] = useState(false);

    const toggleCommentbtn13 = () =>{
      setCommentOpen13(!commentOpen13)
    }

  const [commentOpen14, setCommentOpen14] = useState(false);

    const toggleCommentbtn14 = () =>{
      setCommentOpen14(!commentOpen14)
    }

  const [commentOpen15, setCommentOpen15] = useState(false);

    const toggleCommentbtn15 = () =>{
      setCommentOpen15(!commentOpen15)
    }

    const [commentOpen16, setCommentOpen16] = useState(false);

    const toggleCommentbtn16 = () =>{
      setCommentOpen16(!commentOpen16)
    }

  const [commentOpen17, setCommentOpen17] = useState(false);

    const toggleCommentbtn17 = () =>{
      setCommentOpen17(!commentOpen17)
    }

  const [commentOpen18, setCommentOpen18] = useState(false);

    const toggleCommentbtn18 = () =>{
      setCommentOpen18(!commentOpen18)
    }



  async function submitCommentButtonPressed(commentId, commentstring) {


    // const SESSION = new Session()

    let getUU
    let storePW
    let getUboolean

    // let stringtheEmail = JSON.parse(createEmail)

    try {
        getUU = localStorage.getItem('username')
        storePW = localStorage.getItem('wervtnm')
        getUboolean = JSON.parse(localStorage.getItem('loginbool'))

        if (commentstring.length == 0) {
          throw "You're answer is blank, USE WORDS"
        }

        if (getUboolean == true) {
          if (SESSION.getLoggedIn() == true) {
            await SESSION.postComment(commentId, commentstring)
            await SESSION.updateRemedies()
            window.alert('comment successfully submitted, refresh page to view')
            return 
          }

          await SESSION.login(getUU, storePW)
        }
        else {
          throw "You are not logged in!" 
        }

        await SESSION.postComment(commentId, commentstring)
        await SESSION.updateRemedies()
        console.log(SESSION.getRemedies())
        window.alert('comment successfully submitted, refresh page to view')
    }
    catch(error) {
        
        window.alert(error + ' Or different error');
        
    }

}


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
      
      <Element name="F1AWingMenMac">
      <elm class="underlineBRname">
      <h3>1: Bathroom F1AWingMenMac</h3>
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
      Average Rating:
      <Rate allowHalf style={{backgroundColor: "whitesmoke", fontSize: 40, color: "black"}}
      disabled
      id='rrate'
      // value={SESSION.getRemedies()[0].getAvgRating()}
      // value={JSON.parse(localStorage.getItem('nearh'))}
      // value={parstars[0]}
      value={arr[0]}
      // count={0}
      />
      {unk[0]}
      {/* Average Rating: {raterate} */}
      <br></br>
      <br></br>
      <a href='/rate'>
      <button className="ratebutton">Rate Restroom</button> 
      </a>
      </div>
      </div>

      
      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <div class="revbox" id='revboxcontainer'>
        <div class="yyt">
          <div class="ctrrevtitle">
            <h3>F1AWingMenMac Comments</h3>
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
          {/* <CommentInputVal></CommentInputVal> */}

          <div class="arealeftofbutton">
          <button
          class="buttonedit"
          id='submitcomment'
          onClick={async (e) => {await submitCommentButtonPressed(1, value)}}
          >
          Submit
          </button>
          </div>
          {/* {listofcomments.map((text) => (
          {text}.toString()
          ))} */}
        </div>
        {/* <p> */}
        {cmtarr[0]} 
        {/* </p> */}
        
        {/* {testcomment} */}
        {/* {listofcomments.map((value) => (
          <div>{value}</div>

          // <br></br>
        ))} */}
        
         
      </div>


      <br></br>
      <br></br>




      {/* Area for A-Wing Women's Bathroom Review */}

      {/* <Element name="MacBuilding"> 
      <h1>Mackinac Building</h1>
      </Element> */}
      
      <Element name="F1AWingWomenMac">
      <elm class="underlineBRname">
      <h3>2: Bathroom F1AWingWomenMac</h3>
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
      Average Rating:
      <Rate allowHalf style={{backgroundColor: "whitesmoke", fontSize: 40, color: "black"}}
      disabled
      id='rrate'
      // value={SESSION.getRemedies()[0].getAvgRating()}
      // value={JSON.parse(localStorage.getItem('nearh'))}
      // value={parstars[0]}
      value={arr[1]}
      // count={0}
      />
      {unk[1]}
      {/* Average Rating: {raterate} */}
      <br></br>
      <br></br>
      <a href='/rate'>
      <button className="ratebutton">Rate Restroom</button> 
      </a>
      </div>
      </div>

      
      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <div class="revbox" id='revboxcontainer'>
        <div class="yyt">
          <div class="ctrrevtitle">
            <h3>F1AWingWomenMac Comments</h3>
          </div>
          <FltrButton></FltrButton>
          {/* <button
          class={`filtercmt ${filtermenuOpen ? 'open' : ''}`} onClick={toggleFilter}
          >
            filter
          </button> */}

          <div>
            <button class="stylecmtbutton" onClick={toggleCommentbtn2}
            // onChange={ (value) => { setCommentId(value) } }
            // value={commentId}
            >
            Create Comment
            </button>
          </div>
        </div>
        <div 
        // class="review-bxfortext"
        class={`review-bxfortext ${commentOpen2 ? 'open' : ''}`}
        >
          <textarea
          name="" id="newcomment-text" class="textinbx"
          value={value2} onChange={handleChange2}
          >
          </textarea>
          {/* <CommentInputVal></CommentInputVal> */}

          <div class="arealeftofbutton">
            
            {/* <blockforid 
            onChange={ (value) => { setCommentId(value) } }
            value={1}
            value={commentId} onChange={handleCommentIdChange}
            >
              {commentId} */}
              {/* {commentId = 1} */}
            {/* </blockforid> */}
          {/* <button class="buttonedit2">
            sub
          </button> */}
          <button
          class="buttonedit"
          id='submitcomment'
          onClick={async (e) => {await submitCommentButtonPressed(2, value2)}}
          >
          Submit
          </button>
          {/* ss */}
          </div>
          {/* {listofcomments.map((text) => (
          {text}.toString()
          ))} */}
        </div>
        {cmtarr[1]}
        {/* {listofcomments.map((value) => (
          <div>{value}</div>

          // <br></br>
        ))} */}
        
         
      </div>


      <br></br>
      <br></br>






      {/* Area for A-Wing Women's Bathroom Review */}

      {/* <Element name="MacBuilding"> 
      <h1>Mackinac Building</h1>
      </Element> */}
      
      <Element name="F2AWingMenMac">
      <elm class="underlineBRname">
      <h3>3: Bathroom F2AWingMenMac</h3>
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
      Average Rating:
      <Rate allowHalf style={{backgroundColor: "whitesmoke", fontSize: 40, color: "black"}}
      disabled
      id='rrate'
      // value={SESSION.getRemedies()[0].getAvgRating()}
      // value={JSON.parse(localStorage.getItem('nearh'))}
      // value={parstars[0]}
      value={arr[2]}
      // count={0}
      />
      {unk[2]}
      {/* Average Rating: {raterate} */}
      <br></br>
      <br></br>
      <a href='/rate'>
      <button className="ratebutton">Rate Restroom</button> 
      </a>
      </div>
      </div>

      
      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <div class="revbox" id='revboxcontainer'>
        <div class="yyt">
          <div class="ctrrevtitle">
            <h3>F2AWingMenMac Comments</h3>
          </div>
          <FltrButton></FltrButton>
          {/* <button
          class={`filtercmt ${filtermenuOpen ? 'open' : ''}`} onClick={toggleFilter}
          >
            filter
          </button> */}

          <div>
            <button class="stylecmtbutton" onClick={toggleCommentbtn3}
            // onChange={ (value) => { setCommentId(value) } }
            // value={commentId}
            >
            Create Comment
            </button>
          </div>
        </div>
        <div 
        // class="review-bxfortext"
        class={`review-bxfortext ${commentOpen3 ? 'open' : ''}`}
        >
          <textarea
          name="" id="newcomment-text" class="textinbx"
          value={value3} onChange={handleChange3}
          >
          </textarea>
          {/* <CommentInputVal></CommentInputVal> */}

          <div class="arealeftofbutton">
            
            {/* <blockforid 
            onChange={ (value) => { setCommentId(value) } }
            value={1}
            value={commentId} onChange={handleCommentIdChange}
            >
              {commentId} */}
              {/* {commentId = 1} */}
            {/* </blockforid> */}
          {/* <button class="buttonedit2">
            sub
          </button> */}
          <button
          class="buttonedit"
          id='submitcomment'
          onClick={async (e) => {await submitCommentButtonPressed(3, value3)}}
          >
          Submit
          </button>
          {/* ss */}
          </div>
          {/* {listofcomments.map((text) => (
          {text}.toString()
          ))} */}
        </div>
        {cmtarr[2]}
        {/* {listofcomments.map((value) => (
          <div>{value}</div>

          // <br></br>
        ))} */}
        
         
      </div>


      <br></br>
      <br></br>



      {/* Area for A-Wing Women's Bathroom Review */}

      {/* <Element name="MacBuilding"> 
      <h1>Mackinac Building</h1>
      </Element> */}
      
      <Element name="F2AWingWomenMac">
      <elm class="underlineBRname">
      <h3>4: Bathroom F2AWingWomenMac</h3>
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
      Average Rating:
      <Rate allowHalf style={{backgroundColor: "whitesmoke", fontSize: 40, color: "black"}}
      disabled
      id='rrate'
      // value={SESSION.getRemedies()[0].getAvgRating()}
      // value={JSON.parse(localStorage.getItem('nearh'))}
      // value={parstars[0]}
      value={arr[3]}
      // count={0}
      />
      {unk[3]}
      {/* Average Rating: {raterate} */}
      <br></br>
      <br></br>
      <a href='/rate'>
      <button className="ratebutton">Rate Restroom</button> 
      </a>
      </div>
      </div>

      
      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <div class="revbox" id='revboxcontainer'>
        <div class="yyt">
          <div class="ctrrevtitle">
            <h3>F2AWingWomenMac Comments</h3>
          </div>
          <FltrButton></FltrButton>
          {/* <button
          class={`filtercmt ${filtermenuOpen ? 'open' : ''}`} onClick={toggleFilter}
          >
            filter
          </button> */}

          <div>
            <button class="stylecmtbutton" onClick={toggleCommentbtn4}
            // onChange={ (value) => { setCommentId(value) } }
            // value={commentId}
            >
            Create Comment
            </button>
          </div>
        </div>
        <div 
        // class="review-bxfortext"
        class={`review-bxfortext ${commentOpen4 ? 'open' : ''}`}
        >
          <textarea
          name="" id="newcomment-text" class="textinbx"
          value={value4} onChange={handleChange4}
          >
          </textarea>
          {/* <CommentInputVal></CommentInputVal> */}

          <div class="arealeftofbutton">
            
            {/* <blockforid 
            onChange={ (value) => { setCommentId(value) } }
            value={1}
            value={commentId} onChange={handleCommentIdChange}
            >
              {commentId} */}
              {/* {commentId = 1} */}
            {/* </blockforid> */}
          {/* <button class="buttonedit2">
            sub
          </button> */}
          <button
          class="buttonedit"
          id='submitcomment'
          onClick={async (e) => {await submitCommentButtonPressed(4, value4)}}
          >
          Submit
          </button>
          {/* ss */}
          </div>
          {/* {listofcomments.map((text) => (
          {text}.toString()
          ))} */}
        </div>
        {cmtarr[3]}
        {/* {listofcomments.map((value) => (
          <div>{value}</div>

          // <br></br>
        ))} */}
        
         
      </div>


      <br></br>
      <br></br>



      {/* Area for A-Wing Women's Bathroom Review */}

      {/* <Element name="MacBuilding"> 
      <h1>Mackinac Building</h1>
      </Element> */}
      
      <Element name="F1A-BWingMenMac">
      <elm class="underlineBRname">
      <h3>5: Bathroom F1A-BWingMenMac</h3>
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
      Average Rating:
      <Rate allowHalf style={{backgroundColor: "whitesmoke", fontSize: 40, color: "black"}}
      disabled
      id='rrate'
      // value={SESSION.getRemedies()[0].getAvgRating()}
      // value={JSON.parse(localStorage.getItem('nearh'))}
      // value={parstars[0]}
      value={arr[4]}
      // count={0}
      />
      {unk[4]}
      {/* Average Rating: {raterate} */}
      <br></br>
      <br></br>
      <a href='/rate'>
      <button className="ratebutton">Rate Restroom</button> 
      </a>
      </div>
      </div>

      
      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <div class="revbox" id='revboxcontainer'>
        <div class="yyt">
          <div class="ctrrevtitle">
            <h3>F1A-BWingMenMac Comments</h3>
          </div>
          <FltrButton></FltrButton>
          {/* <button
          class={`filtercmt ${filtermenuOpen ? 'open' : ''}`} onClick={toggleFilter}
          >
            filter
          </button> */}

          <div>
            <button class="stylecmtbutton" onClick={toggleCommentbtn5}
            // onChange={ (value) => { setCommentId(value) } }
            // value={commentId}
            >
            Create Comment
            </button>
          </div>
        </div>
        <div 
        // class="review-bxfortext"
        class={`review-bxfortext ${commentOpen5 ? 'open' : ''}`}
        >
          <textarea
          name="" id="newcomment-text" class="textinbx"
          value={value5} onChange={handleChange5}
          >
          </textarea>
          {/* <CommentInputVal></CommentInputVal> */}

          <div class="arealeftofbutton">
            
            {/* <blockforid 
            onChange={ (value) => { setCommentId(value) } }
            value={1}
            value={commentId} onChange={handleCommentIdChange}
            >
              {commentId} */}
              {/* {commentId = 1} */}
            {/* </blockforid> */}
          {/* <button class="buttonedit2">
            sub
          </button> */}
          <button
          class="buttonedit"
          id='submitcomment'
          onClick={async (e) => {await submitCommentButtonPressed(5, value5)}}
          >
          Submit
          </button>
          {/* ss */}
          </div>
          {/* {listofcomments.map((text) => (
          {text}.toString()
          ))} */}
        </div>
        {cmtarr[4]}
        {/* {listofcomments.map((value) => (
          <div>{value}</div>

          // <br></br>
        ))} */}
        
         
      </div>


      <br></br>
      <br></br>



      {/* Area for A-Wing Women's Bathroom Review */}

      {/* <Element name="MacBuilding"> 
      <h1>Mackinac Building</h1>
      </Element> */}
      
      <Element name="F1A-BWingWomenMac">
      <elm class="underlineBRname">
      <h3>6: Bathroom F1A-BWingWomenMac</h3>
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
      Average Rating:
      <Rate allowHalf style={{backgroundColor: "whitesmoke", fontSize: 40, color: "black"}}
      disabled
      id='rrate'
      // value={SESSION.getRemedies()[0].getAvgRating()}
      // value={JSON.parse(localStorage.getItem('nearh'))}
      // value={parstars[0]}
      value={arr[5]}
      // count={0}
      />
      {unk[5]}
      {/* Average Rating: {raterate} */}
      <br></br>
      <br></br>
      <a href='/rate'>
      <button className="ratebutton">Rate Restroom</button> 
      </a>
      </div>
      </div>

      
      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <div class="revbox" id='revboxcontainer'>
        <div class="yyt">
          <div class="ctrrevtitle">
            <h3>F1A-BWingWomenMac Comments</h3>
          </div>
          <FltrButton></FltrButton>
          {/* <button
          class={`filtercmt ${filtermenuOpen ? 'open' : ''}`} onClick={toggleFilter}
          >
            filter
          </button> */}

          <div>
            <button class="stylecmtbutton" onClick={toggleCommentbtn6}
            // onChange={ (value) => { setCommentId(value) } }
            // value={commentId}
            >
            Create Comment
            </button>
          </div>
        </div>
        <div 
        // class="review-bxfortext"
        class={`review-bxfortext ${commentOpen6 ? 'open' : ''}`}
        >
          <textarea
          name="" id="newcomment-text" class="textinbx"
          value={value6} onChange={handleChange6}
          >
          </textarea>
          {/* <CommentInputVal></CommentInputVal> */}

          <div class="arealeftofbutton">
            
            {/* <blockforid 
            onChange={ (value) => { setCommentId(value) } }
            value={1}
            value={commentId} onChange={handleCommentIdChange}
            >
              {commentId} */}
              {/* {commentId = 1} */}
            {/* </blockforid> */}
          {/* <button class="buttonedit2">
            sub
          </button> */}
          <button
          class="buttonedit"
          id='submitcomment'
          onClick={async (e) => {await submitCommentButtonPressed(6, value6)}}
          >
          Submit
          </button>
          {/* ss */}
          </div>
          {/* {listofcomments.map((text) => (
          {text}.toString()
          ))} */}
        </div>
        {cmtarr[5]}
        {/* {listofcomments.map((value) => (
          <div>{value}</div>

          // <br></br>
        ))} */}
        
         
      </div>


      <br></br>
      <br></br>



      {/* Area for A-Wing Women's Bathroom Review */}

      {/* <Element name="MacBuilding"> 
      <h1>Mackinac Building</h1>
      </Element> */}
      
      <Element name="F1BWingMenMac">
      <elm class="underlineBRname">
      <h3>7: Bathroom F1BWingMenMac</h3>
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
      Average Rating:
      <Rate allowHalf style={{backgroundColor: "whitesmoke", fontSize: 40, color: "black"}}
      disabled
      id='rrate'
      // value={SESSION.getRemedies()[6].getAvgRating()}
      // value={JSON.parse(localStorage.getItem('nearh'))}
      // value={parstars[0]}
      value={arr[6]}
      // count={0}
      />
      {unk[6]}
      {/* Average Rating: {raterate} */}
      <br></br>
      <br></br>
      <a href='/rate'>
      <button className="ratebutton">Rate Restroom</button> 
      </a>
      </div>
      </div>

      
      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <div class="revbox" id='revboxcontainer'>
        <div class="yyt">
          <div class="ctrrevtitle">
            <h3>F1BWingMenMac Comments</h3>
          </div>
          <FltrButton></FltrButton>
          {/* <button
          class={`filtercmt ${filtermenuOpen ? 'open' : ''}`} onClick={toggleFilter}
          >
            filter
          </button> */}

          <div>
            <button class="stylecmtbutton" onClick={toggleCommentbtn7}
            // onChange={ (value) => { setCommentId(value) } }
            // value={commentId}
            >
            Create Comment
            </button>
          </div>
        </div>
        <div 
        // class="review-bxfortext"
        class={`review-bxfortext ${commentOpen7 ? 'open' : ''}`}
        >
          <textarea
          name="" id="newcomment-text" class="textinbx"
          value={value7} onChange={handleChange7}
          >
          </textarea>
          {/* <CommentInputVal></CommentInputVal> */}

          <div class="arealeftofbutton">
            
            {/* <blockforid 
            onChange={ (value) => { setCommentId(value) } }
            value={1}
            value={commentId} onChange={handleCommentIdChange}
            >
              {commentId} */}
              {/* {commentId = 1} */}
            {/* </blockforid> */}
          {/* <button class="buttonedit2">
            sub
          </button> */}
          <button
          class="buttonedit"
          id='submitcomment'
          onClick={async (e) => {await submitCommentButtonPressed(7, value7)}}
          >
          Submit
          </button>
          {/* ss */}
          </div>
          {/* {listofcomments.map((text) => (
          {text}.toString()
          ))} */}
        </div>
        {cmtarr[6]}
        {/* {listofcomments.map((value) => (
          <div>{value}</div>

          // <br></br>
        ))} */}
        
         
      </div>


      <br></br>
      <br></br>



      {/* Area for A-Wing Women's Bathroom Review */}

      {/* <Element name="MacBuilding"> 
      <h1>Mackinac Building</h1>
      </Element> */}
      
      <Element name="F1BWingWomenMac">
      <elm class="underlineBRname">
      <h3>8: Bathroom F1BWingWomenMac</h3>
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
      Average Rating:
      <Rate allowHalf style={{backgroundColor: "whitesmoke", fontSize: 40, color: "black"}}
      disabled
      id='rrate'
      // value={SESSION.getRemedies()[0].getAvgRating()}
      // value={JSON.parse(localStorage.getItem('nearh'))}
      // value={parstars[0]}
      value={arr[7]}
      // count={0}
      />
      {unk[7]}
      {/* Average Rating: {raterate} */}
      <br></br>
      <br></br>
      <a href='/rate'>
      <button className="ratebutton">Rate Restroom</button> 
      </a>
      </div>
      </div>

      
      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <div class="revbox" id='revboxcontainer'>
        <div class="yyt">
          <div class="ctrrevtitle">
            <h3>F1BWingWomenMac Comments</h3>
          </div>
          <FltrButton></FltrButton>
          {/* <button
          class={`filtercmt ${filtermenuOpen ? 'open' : ''}`} onClick={toggleFilter}
          >
            filter
          </button> */}

          <div>
            <button class="stylecmtbutton" onClick={toggleCommentbtn8}
            // onChange={ (value) => { setCommentId(value) } }
            // value={commentId}
            >
            Create Comment
            </button>
          </div>
        </div>
        <div 
        // class="review-bxfortext"
        class={`review-bxfortext ${commentOpen8 ? 'open' : ''}`}
        >
          <textarea
          name="" id="newcomment-text" class="textinbx"
          value={value8} onChange={handleChange8}
          >
          </textarea>
          {/* <CommentInputVal></CommentInputVal> */}

          <div class="arealeftofbutton">
            
            {/* <blockforid 
            onChange={ (value) => { setCommentId(value) } }
            value={1}
            value={commentId} onChange={handleCommentIdChange}
            >
              {commentId} */}
              {/* {commentId = 1} */}
            {/* </blockforid> */}
          {/* <button class="buttonedit2">
            sub
          </button> */}
          <button
          class="buttonedit"
          id='submitcomment'
          onClick={async (e) => {await submitCommentButtonPressed(8, value8)}}
          >
          Submit
          </button>
          {/* ss */}
          </div>
          {/* {listofcomments.map((text) => (
          {text}.toString()
          ))} */}
        </div>
        {cmtarr[7]}
        {/* {listofcomments.map((value) => (
          <div>{value}</div>

          // <br></br>
        ))} */}
        
         
      </div>


      <br></br>
      <br></br>



      {/* Area for A-Wing Women's Bathroom Review */}

      {/* <Element name="MacBuilding"> 
      <h1>Mackinac Building</h1>
      </Element> */}
      
      <Element name="F2BWingMenMac">
      <elm class="underlineBRname">
      <h3>9: Bathroom F2BWingMenMac</h3>
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
      Average Rating:
      <Rate allowHalf style={{backgroundColor: "whitesmoke", fontSize: 40, color: "black"}}
      disabled
      id='rrate'
      // value={SESSION.getRemedies()[0].getAvgRating()}
      // value={JSON.parse(localStorage.getItem('nearh'))}
      // value={parstars[0]}
      value={arr[8]}
      // count={0}
      />
      {unk[8]}
      {/* Average Rating: {raterate} */}
      <br></br>
      <br></br>
      <a href='/rate'>
      <button className="ratebutton">Rate Restroom</button> 
      </a>
      </div>
      </div>

      
      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <div class="revbox" id='revboxcontainer'>
        <div class="yyt">
          <div class="ctrrevtitle">
            <h3>F2BWingMenMac Comments</h3>
          </div>
          <FltrButton></FltrButton>
          {/* <button
          class={`filtercmt ${filtermenuOpen ? 'open' : ''}`} onClick={toggleFilter}
          >
            filter
          </button> */}

          <div>
            <button class="stylecmtbutton" onClick={toggleCommentbtn9}
            // onChange={ (value) => { setCommentId(value) } }
            // value={commentId}
            >
            Create Comment
            </button>
          </div>
        </div>
        <div 
        // class="review-bxfortext"
        class={`review-bxfortext ${commentOpen9 ? 'open' : ''}`}
        >
          <textarea
          name="" id="newcomment-text" class="textinbx"
          value={value9} onChange={handleChange9}
          >
          </textarea>
          {/* <CommentInputVal></CommentInputVal> */}

          <div class="arealeftofbutton">
            
            {/* <blockforid 
            onChange={ (value) => { setCommentId(value) } }
            value={1}
            value={commentId} onChange={handleCommentIdChange}
            >
              {commentId} */}
              {/* {commentId = 1} */}
            {/* </blockforid> */}
          {/* <button class="buttonedit2">
            sub
          </button> */}
          <button
          class="buttonedit"
          id='submitcomment'
          onClick={async (e) => {await submitCommentButtonPressed(9, value9)}}
          >
          Submit
          </button>
          {/* ss */}
          </div>
          {/* {listofcomments.map((text) => (
          {text}.toString()
          ))} */}
        </div>
        {cmtarr[8]}
        {/* {listofcomments.map((value) => (
          <div>{value}</div>

          // <br></br>
        ))} */}
        
         
      </div>


      <br></br>
      <br></br>


      {/* Area for A-Wing Women's Bathroom Review */}

      {/* <Element name="MacBuilding"> 
      <h1>Mackinac Building</h1>
      </Element> */}
      
      <Element name="F2BWingWomenMac">
      <elm class="underlineBRname">
      <h3>10: Bathroom F2BWingWomenMac</h3>
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
      Average Rating:
      <Rate allowHalf style={{backgroundColor: "whitesmoke", fontSize: 40, color: "black"}}
      disabled
      id='rrate'
      // value={SESSION.getRemedies()[0].getAvgRating()}
      // value={JSON.parse(localStorage.getItem('nearh'))}
      // value={parstars[0]}
      value={arr[9]}
      // count={0}
      />
      {unk[9]}
      {/* Average Rating: {raterate} */}
      <br></br>
      <br></br>
      <a href='/rate'>
      <button className="ratebutton">Rate Restroom</button> 
      </a>
      </div>
      </div>

      
      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <div class="revbox" id='revboxcontainer'>
        <div class="yyt">
          <div class="ctrrevtitle">
            <h3>F2BWingWomenMac Comments</h3>
          </div>
          <FltrButton></FltrButton>
          {/* <button
          class={`filtercmt ${filtermenuOpen ? 'open' : ''}`} onClick={toggleFilter}
          >
            filter
          </button> */}

          <div>
            <button class="stylecmtbutton" onClick={toggleCommentbtn10}
            // onChange={ (value) => { setCommentId(value) } }
            // value={commentId}
            >
            Create Comment
            </button>
          </div>
        </div>
        <div 
        // class="review-bxfortext"
        class={`review-bxfortext ${commentOpen10 ? 'open' : ''}`}
        >
          <textarea
          name="" id="newcomment-text" class="textinbx"
          value={value10} onChange={handleChange10}
          >
          </textarea>
          {/* <CommentInputVal></CommentInputVal> */}

          <div class="arealeftofbutton">
            
            {/* <blockforid 
            onChange={ (value) => { setCommentId(value) } }
            value={1}
            value={commentId} onChange={handleCommentIdChange}
            >
              {commentId} */}
              {/* {commentId = 1} */}
            {/* </blockforid> */}
          {/* <button class="buttonedit2">
            sub
          </button> */}
          <button
          class="buttonedit"
          id='submitcomment'
          onClick={async (e) => {await submitCommentButtonPressed(10, value10)}}
          >
          Submit
          </button>
          {/* ss */}
          </div>
          {/* {listofcomments.map((text) => (
          {text}.toString()
          ))} */}
        </div>
        {cmtarr[9]}
        {/* {listofcomments.map((value) => (
          <div>{value}</div>

          // <br></br>
        ))} */}
        
         
      </div>


      <br></br>
      <br></br>


      {/* Area for A-Wing Women's Bathroom Review */}

      {/* <Element name="MacBuilding"> 
      <h1>Mackinac Building</h1>
      </Element> */}
      
      <Element name="F2CWingMenMac">
      <elm class="underlineBRname">
      <h3>11: Bathroom F2CWingMenMac</h3>
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
      Average Rating:
      <Rate allowHalf style={{backgroundColor: "whitesmoke", fontSize: 40, color: "black"}}
      disabled
      id='rrate'
      // value={SESSION.getRemedies()[0].getAvgRating()}
      // value={JSON.parse(localStorage.getItem('nearh'))}
      // value={parstars[0]}
      value={arr[10]}
      // count={0}
      />
      {unk[10]}
      {/* Average Rating: {raterate} */}
      <br></br>
      <br></br>
      <a href='/rate'>
      <button className="ratebutton">Rate Restroom</button> 
      </a>
      </div>
      </div>

      
      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <div class="revbox" id='revboxcontainer'>
        <div class="yyt">
          <div class="ctrrevtitle">
            <h3>F2CWingMenMac Comments</h3>
          </div>
          <FltrButton></FltrButton>
          {/* <button
          class={`filtercmt ${filtermenuOpen ? 'open' : ''}`} onClick={toggleFilter}
          >
            filter
          </button> */}

          <div>
            <button class="stylecmtbutton" onClick={toggleCommentbtn11}
            // onChange={ (value) => { setCommentId(value) } }
            // value={commentId}
            >
            Create Comment
            </button>
          </div>
        </div>
        <div 
        // class="review-bxfortext"
        class={`review-bxfortext ${commentOpen11 ? 'open' : ''}`}
        >
          <textarea
          name="" id="newcomment-text" class="textinbx"
          value={value11} onChange={handleChange11}
          >
          </textarea>

          <div class="arealeftofbutton">
            
            {/* <blockforid 
            onChange={ (value) => { setCommentId(value) } }
            value={1}
            value={commentId} onChange={handleCommentIdChange}
            >
              {commentId} */}
              {/* {commentId = 1} */}
            {/* </blockforid> */}
          {/* <button class="buttonedit2">
            sub
          </button> */}
          <button
          class="buttonedit"
          id='submitcomment'
          onClick={async (e) => {await submitCommentButtonPressed(11, value11)}}
          >
          Submit
          </button>
          {/* ss */}
          </div>
          {/* {listofcomments.map((text) => (
          {text}.toString()
          ))} */}
        </div>
        {cmtarr[10]}
        {/* {listofcomments.map((value) => (
          <div>{value}</div>

          // <br></br>
        ))} */}
        
         
      </div>


      <br></br>
      <br></br>




      {/* Area for A-Wing Women's Bathroom Review */}

      {/* <Element name="MacBuilding"> 
      <h1>Mackinac Building</h1>
      </Element> */}
      
      <Element name="F2CWingWomenMac">
      <elm class="underlineBRname">
      <h3>12: Bathroom F2CWingWomenMac</h3>
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
      Average Rating:
      <Rate allowHalf style={{backgroundColor: "whitesmoke", fontSize: 40, color: "black"}}
      disabled
      id='rrate'
      // value={SESSION.getRemedies()[0].getAvgRating()}
      // value={JSON.parse(localStorage.getItem('nearh'))}
      // value={parstars[0]}
      value={arr[11]}
      // count={0}
      />
      {unk[11]}
      {/* Average Rating: {raterate} */}
      <br></br>
      <br></br>
      <a href='/rate'>
      <button className="ratebutton">Rate Restroom</button> 
      </a>
      </div>
      </div>

      
      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <div class="revbox" id='revboxcontainer'>
        <div class="yyt">
          <div class="ctrrevtitle">
            <h3>F2CWingWomenMac Comments</h3>
          </div>
          <FltrButton></FltrButton>
          {/* <button
          class={`filtercmt ${filtermenuOpen ? 'open' : ''}`} onClick={toggleFilter}
          >
            filter
          </button> */}

          <div>
            <button class="stylecmtbutton" onClick={toggleCommentbtn12}
            // onChange={ (value) => { setCommentId(value) } }
            // value={commentId}
            >
            Create Comment
            </button>
          </div>
        </div>
        <div 
        // class="review-bxfortext"
        class={`review-bxfortext ${commentOpen12 ? 'open' : ''}`}
        >
          <textarea
          name="" id="newcomment-text" class="textinbx"
          value={value12} onChange={handleChange12}
          >
          </textarea>

          <div class="arealeftofbutton">
            
            {/* <blockforid 
            onChange={ (value) => { setCommentId(value) } }
            value={1}
            value={commentId} onChange={handleCommentIdChange}
            >
              {commentId} */}
              {/* {commentId = 1} */}
            {/* </blockforid> */}
          {/* <button class="buttonedit2">
            sub
          </button> */}
          <button
          class="buttonedit"
          id='submitcomment'
          onClick={async (e) => {await submitCommentButtonPressed(12, value12)}}
          >
          Submit
          </button>
          {/* ss */}
          </div>
          {/* {listofcomments.map((text) => (
          {text}.toString()
          ))} */}
        </div>
        {cmtarr[11]}
        {/* {listofcomments.map((value) => (
          <div>{value}</div>

          // <br></br>
        ))} */}
        
         
      </div>


      <br></br>
      <br></br>


      {/* Area for A-Wing Women's Bathroom Review */}

      {/* <Element name="MacBuilding"> 
      <h1>Mackinac Building</h1>
      </Element> */}
      
      <Element name="F1DWingMenMac">
      <elm class="underlineBRname">
      <h3>13: Bathroom F1DWingMenMac</h3>
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
      Average Rating:
      <Rate allowHalf style={{backgroundColor: "whitesmoke", fontSize: 40, color: "black"}}
      disabled
      id='rrate'
      // value={SESSION.getRemedies()[0].getAvgRating()}
      // value={JSON.parse(localStorage.getItem('nearh'))}
      // value={parstars[0]}
      value={arr[12]}
      // count={0}
      />
      {unk[12]}
      {/* Average Rating: {raterate} */}
      <br></br>
      <br></br>
      <a href='/rate'>
      <button className="ratebutton">Rate Restroom</button> 
      </a>
      </div>
      </div>

      
      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <div class="revbox" id='revboxcontainer'>
        <div class="yyt">
          <div class="ctrrevtitle">
            <h3>F1DWingMenMac Comments</h3>
          </div>
          <FltrButton></FltrButton>
          {/* <button
          class={`filtercmt ${filtermenuOpen ? 'open' : ''}`} onClick={toggleFilter}
          >
            filter
          </button> */}

          <div>
            <button class="stylecmtbutton" onClick={toggleCommentbtn13}
            // onChange={ (value) => { setCommentId(value) } }
            // value={commentId}
            >
            Create Comment
            </button>
          </div>
        </div>
        <div 
        // class="review-bxfortext"
        class={`review-bxfortext ${commentOpen13 ? 'open' : ''}`}
        >
          <textarea
          name="" id="newcomment-text" class="textinbx"
          value={value13} onChange={handleChange13}
          >
          </textarea>

          <div class="arealeftofbutton">
            
            {/* <blockforid 
            onChange={ (value) => { setCommentId(value) } }
            value={1}
            value={commentId} onChange={handleCommentIdChange}
            >
              {commentId} */}
              {/* {commentId = 1} */}
            {/* </blockforid> */}
          {/* <button class="buttonedit2">
            sub
          </button> */}
          <button
          class="buttonedit"
          id='submitcomment'
          onClick={async (e) => {await submitCommentButtonPressed(13, value13)}}
          >
          Submit
          </button>
          {/* ss */}
          </div>
          {/* {listofcomments.map((text) => (
          {text}.toString()
          ))} */}
        </div>
        {cmtarr[12]}
        {/* {listofcomments.map((value) => (
          <div>{value}</div>

          // <br></br>
        ))} */}
        
         
      </div>


      <br></br>
      <br></br>


      {/* Area for A-Wing Women's Bathroom Review */}

      {/* <Element name="MacBuilding"> 
      <h1>Mackinac Building</h1>
      </Element> */}
      
      <Element name="F1DWingWomenMac">
      <elm class="underlineBRname">
      <h3>14: Bathroom F1DWingWomenMac</h3>
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
      Average Rating:
      <Rate allowHalf style={{backgroundColor: "whitesmoke", fontSize: 40, color: "black"}}
      disabled
      id='rrate'
      // value={SESSION.getRemedies()[0].getAvgRating()}
      // value={JSON.parse(localStorage.getItem('nearh'))}
      // value={parstars[0]}
      value={arr[13]}
      // count={0}
      />
      {unk[13]}
      {/* Average Rating: {raterate} */}
      <br></br>
      <br></br>
      <a href='/rate'>
      <button className="ratebutton">Rate Restroom</button> 
      </a>
      </div>
      </div>

      
      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <div class="revbox" id='revboxcontainer'>
        <div class="yyt">
          <div class="ctrrevtitle">
            <h3>F1DWingWomenMac Comments</h3>
          </div>
          <FltrButton></FltrButton>
          {/* <button
          class={`filtercmt ${filtermenuOpen ? 'open' : ''}`} onClick={toggleFilter}
          >
            filter
          </button> */}

          <div>
            <button class="stylecmtbutton" onClick={toggleCommentbtn14}
            // onChange={ (value) => { setCommentId(value) } }
            // value={commentId}
            >
            Create Comment
            </button>
          </div>
        </div>
        <div 
        // class="review-bxfortext"
        class={`review-bxfortext ${commentOpen14 ? 'open' : ''}`}
        >
          <textarea
          name="" id="newcomment-text" class="textinbx"
          value={value14} onChange={handleChange14}
          >
          </textarea>

          <div class="arealeftofbutton">
            
            {/* <blockforid 
            onChange={ (value) => { setCommentId(value) } }
            value={1}
            value={commentId} onChange={handleCommentIdChange}
            >
              {commentId} */}
              {/* {commentId = 1} */}
            {/* </blockforid> */}
          {/* <button class="buttonedit2">
            sub
          </button> */}
          <button
          class="buttonedit"
          id='submitcomment'
          onClick={async (e) => {await submitCommentButtonPressed(14, value14)}}
          >
          Submit
          </button>
          {/* ss */}
          </div>
          {/* {listofcomments.map((text) => (
          {text}.toString()
          ))} */}
        </div>
        {cmtarr[13]}
        {/* {listofcomments.map((value) => (
          <div>{value}</div>

          // <br></br>
        ))} */}
        
         
      </div>


      <br></br>
      <br></br>


      {/* Area for A-Wing Women's Bathroom Review */}

      {/* <Element name="MacBuilding"> 
      <h1>Mackinac Building</h1>
      </Element> */}
      
      <Element name="F2DWingMenMac">
      <elm class="underlineBRname">
      <h3>15: Bathroom F2DWingMenMac</h3>
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
      Average Rating:
      <Rate allowHalf style={{backgroundColor: "whitesmoke", fontSize: 40, color: "black"}}
      disabled
      id='rrate'
      // value={SESSION.getRemedies()[0].getAvgRating()}
      // value={JSON.parse(localStorage.getItem('nearh'))}
      // value={parstars[0]}
      value={arr[14]}
      // count={0}
      />
      {unk[14]}
      {/* Average Rating: {raterate} */}
      <br></br>
      <br></br>
      <a href='/rate'>
      <button className="ratebutton">Rate Restroom</button> 
      </a>
      </div>
      </div>

      
      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <div class="revbox" id='revboxcontainer'>
        <div class="yyt">
          <div class="ctrrevtitle">
            <h3>F2DWingMenMac Comments</h3>
          </div>
          <FltrButton></FltrButton>
          {/* <button
          class={`filtercmt ${filtermenuOpen ? 'open' : ''}`} onClick={toggleFilter}
          >
            filter
          </button> */}

          <div>
            <button class="stylecmtbutton" onClick={toggleCommentbtn15}
            // onChange={ (value) => { setCommentId(value) } }
            // value={commentId}
            >
            Create Comment
            </button>
          </div>
        </div>
        <div 
        // class="review-bxfortext"
        class={`review-bxfortext ${commentOpen15 ? 'open' : ''}`}
        >
          <textarea
          name="" id="newcomment-text" class="textinbx"
          value={value15} onChange={handleChange15}
          >
          </textarea>

          <div class="arealeftofbutton">
            
            {/* <blockforid 
            onChange={ (value) => { setCommentId(value) } }
            value={1}
            value={commentId} onChange={handleCommentIdChange}
            >
              {commentId} */}
              {/* {commentId = 1} */}
            {/* </blockforid> */}
          {/* <button class="buttonedit2">
            sub
          </button> */}
          <button
          class="buttonedit"
          id='submitcomment'
          onClick={async (e) => {await submitCommentButtonPressed(15, value15)}}
          >
          Submit
          </button>
          {/* ss */}
          </div>
          {/* {listofcomments.map((text) => (
          {text}.toString()
          ))} */}
        </div>
        {cmtarr[14]}
        {/* {listofcomments.map((value) => (
          <div>{value}</div>

          // <br></br>
        ))} */}
        
         
      </div>


      <br></br>
      <br></br>


      {/* Area for A-Wing Women's Bathroom Review */}

      {/* <Element name="MacBuilding"> 
      <h1>Mackinac Building</h1>
      </Element> */}
      
      <Element name="F2DWingWomenMac">
      <elm class="underlineBRname">
      <h3>16: Bathroom F2DWingWomenMac</h3>
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
      Average Rating:
      <Rate allowHalf style={{backgroundColor: "whitesmoke", fontSize: 40, color: "black"}}
      disabled
      id='rrate'
      // value={SESSION.getRemedies()[0].getAvgRating()}
      // value={JSON.parse(localStorage.getItem('nearh'))}
      // value={parstars[0]}
      value={arr[15]}
      // count={0}
      />
      {unk[15]}
      {/* Average Rating: {raterate} */}
      <br></br>
      <br></br>
      <a href='/rate'>
      <button className="ratebutton">Rate Restroom</button> 
      </a>
      </div>
      </div>

      
      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <div class="revbox" id='revboxcontainer'>
        <div class="yyt">
          <div class="ctrrevtitle">
            <h3>F2DWingWomenMac Comments</h3>
          </div>
          <FltrButton></FltrButton>
          {/* <button
          class={`filtercmt ${filtermenuOpen ? 'open' : ''}`} onClick={toggleFilter}
          >
            filter
          </button> */}

          <div>
            <button class="stylecmtbutton" onClick={toggleCommentbtn16}
            // onChange={ (value) => { setCommentId(value) } }
            // value={commentId}
            >
            Create Comment
            </button>
          </div>
        </div>
        <div 
        // class="review-bxfortext"
        class={`review-bxfortext ${commentOpen16 ? 'open' : ''}`}
        >
          <textarea
          name="" id="newcomment-text" class="textinbx"
          value={value16} onChange={handleChange16}
          >
          </textarea>

          <div class="arealeftofbutton">
            
            {/* <blockforid 
            onChange={ (value) => { setCommentId(value) } }
            value={1}
            value={commentId} onChange={handleCommentIdChange}
            >
              {commentId} */}
              {/* {commentId = 1} */}
            {/* </blockforid> */}
          {/* <button class="buttonedit2">
            sub
          </button> */}
          <button
          class="buttonedit"
          id='submitcomment'
          onClick={async (e) => {await submitCommentButtonPressed(16, value16)}}
          >
          Submit
          </button>
          {/* ss */}
          </div>
          {/* {listofcomments.map((text) => (
          {text}.toString()
          ))} */}
        </div>
        {cmtarr[15]}
        {/* {listofcomments.map((value) => (
          <div>{value}</div>

          // <br></br>
        ))} */}
        
         
      </div>


      <br></br>
      <br></br>




      {/* Area for A-Wing Women's Bathroom Review */}

      {/* <Element name="MacBuilding"> 
      <h1>Mackinac Building</h1>
      </Element> */}
      
      <Element name="BasementMenMac">
      <elm class="underlineBRname">
      <h3>17: Bathroom BasementMenMac</h3>
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
      Average Rating:
      <Rate allowHalf style={{backgroundColor: "whitesmoke", fontSize: 40, color: "black"}}
      disabled
      id='rrate'
      // value={SESSION.getRemedies()[0].getAvgRating()}
      // value={JSON.parse(localStorage.getItem('nearh'))}
      // value={parstars[0]}
      value={arr[16]}
      // count={0}
      />
      {unk[16]}
      {/* Average Rating: {raterate} */}
      <br></br>
      <br></br>
      <a href='/rate'>
      <button className="ratebutton">Rate Restroom</button> 
      </a>
      </div>
      </div>

      
      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <div class="revbox" id='revboxcontainer'>
        <div class="yyt">
          <div class="ctrrevtitle">
            <h3>BasementMenMac Comments</h3>
          </div>
          <FltrButton></FltrButton>
          {/* <button
          class={`filtercmt ${filtermenuOpen ? 'open' : ''}`} onClick={toggleFilter}
          >
            filter
          </button> */}

          <div>
            <button class="stylecmtbutton" onClick={toggleCommentbtn17}
            // onChange={ (value) => { setCommentId(value) } }
            // value={commentId}
            >
            Create Comment
            </button>
          </div>
        </div>
        <div 
        // class="review-bxfortext"
        class={`review-bxfortext ${commentOpen17 ? 'open' : ''}`}
        >
          <textarea
          name="" id="newcomment-text" class="textinbx"
          value={value17} onChange={handleChange17}
          >
          </textarea>

          <div class="arealeftofbutton">
            
            {/* <blockforid 
            onChange={ (value) => { setCommentId(value) } }
            value={1}
            value={commentId} onChange={handleCommentIdChange}
            >
              {commentId} */}
              {/* {commentId = 1} */}
            {/* </blockforid> */}
          {/* <button class="buttonedit2">
            sub
          </button> */}
          <button
          class="buttonedit"
          id='submitcomment'
          onClick={async (e) => {await submitCommentButtonPressed(17, value17)}}
          >
          Submit
          </button>
          {/* ss */}
          </div>
          {/* {listofcomments.map((text) => (
          {text}.toString()
          ))} */}
        </div>
        {cmtarr[16]}
        {/* {listofcomments.map((value) => (
          <div>{value}</div>

          // <br></br>
        ))} */}
        
         
      </div>


      <br></br>
      <br></br>



      {/* Area for A-Wing Women's Bathroom Review */}

      {/* <Element name="MacBuilding"> 
      <h1>Mackinac Building</h1>
      </Element> */}
      
      <Element name="BasementWomenMac">
      <elm class="underlineBRname">
      <h3>18: Bathroom BasementWomenMac</h3>
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
      Average Rating:
      <Rate allowHalf style={{backgroundColor: "whitesmoke", fontSize: 40, color: "black"}}
      disabled
      id='rrate'
      // value={SESSION.getRemedies()[0].getAvgRating()}
      // value={JSON.parse(localStorage.getItem('nearh'))}
      // value={parstars[0]}
      value={arr[17]}
      // count={0}
      />
      {unk[17]}
      {/* Average Rating: {raterate} */}
      <br></br>
      <br></br>
      <a href='/rate'>
      <button className="ratebutton">Rate Restroom</button> 
      </a>
      </div>
      </div>

      
      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <div class="revbox" id='revboxcontainer'>
        <div class="yyt">
          <div class="ctrrevtitle">
            <h3>BasementWomenMac Comments</h3>
          </div>
          <FltrButton></FltrButton>
          {/* <button
          class={`filtercmt ${filtermenuOpen ? 'open' : ''}`} onClick={toggleFilter}
          >
            filter
          </button> */}

          <div>
            <button class="stylecmtbutton" onClick={toggleCommentbtn18}
            // onChange={ (value) => { setCommentId(value) } }
            // value={commentId}
            >
            Create Comment
            </button>
          </div>
        </div>
        <div 
        // class="review-bxfortext"
        class={`review-bxfortext ${commentOpen18 ? 'open' : ''}`}
        >
          <textarea
          name="" id="newcomment-text" class="textinbx"
          value={value18} onChange={handleChange18}
          >
          </textarea>

          <div class="arealeftofbutton">
            
            {/* <blockforid 
            onChange={ (value) => { setCommentId(value) } }
            value={1}
            value={commentId} onChange={handleCommentIdChange}
            >
              {commentId} */}
              {/* {commentId = 1} */}
            {/* </blockforid> */}
          {/* <button class="buttonedit2">
            sub
          </button> */}
          <button
          class="buttonedit"
          id='submitcomment'
          onClick={async (e) => {await submitCommentButtonPressed(18, value18)}}
          >
          Submit
          </button>
          {/* ss */}
          </div>
          {/* {listofcomments.map((text) => (
          {text}.toString()
          ))} */}
        </div>
        {cmtarr[17]}
        {/* {listofcomments.map((value) => (
          <div>{value}</div>

          // <br></br>
        ))} */}
        
         
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
      <a href='/rate'>
      <button className="ratebutton">Rate Restroom</button> 
      </a>
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
            <button class="stylecmtbutton">Create Comment</button>
          </div>
        </div>
        <div 
        // class="review-bxfortext"
        // class={`review-bxfortext ${commentOpen2 ? 'open' : ''}`}
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
      <a href='/rate'>
      <button className="ratebutton">Rate Restroom</button> 
      </a>
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
            <button class="stylecmtbutton">Create Comment</button>
          </div>
        </div>
        <div 
        // class="review-bxfortext"
        // class={`review-bxfortext ${commentOpen3 ? 'open' : ''}`}
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
      <a href='/rate'>
      <button className="ratebutton">Rate Restroom</button> 
      </a>
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
            <button class="stylecmtbutton">Create Comment</button>
          </div>
        </div>
        <div 
        // class="review-bxfortext"
        // class={`review-bxfortext ${commentOpen4 ? 'open' : ''}`}
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
      <a href='/rate'>
      <button className="ratebutton">Rate Restroom</button> 
      </a>
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
            <button class="stylecmtbutton">Create Comment</button>
          </div>
        </div>
        <div 
        // class="review-bxfortext"
        // class={`review-bxfortext ${commentOpen5 ? 'open' : ''}`}
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
      <a href='/rate'>
      <button className="ratebutton">Rate Restroom</button> 
      </a>
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
            <button class="stylecmtbutton">Create Comment</button>
          </div>
        </div>
        <div 
        // class="review-bxfortext"
        // class={`review-bxfortext ${commentOpen6 ? 'open' : ''}`}
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
      <a href='/rate'>
      <button className="ratebutton">Rate Restroom</button> 
      </a>
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
            <button class="stylecmtbutton">Create Comment</button>
          </div>
        </div>
        <div 
        // class="review-bxfortext"
        // class={`review-bxfortext ${commentOpen7 ? 'open' : ''}`}
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
      <a href='/rate'>
      <button className="ratebutton">Rate Restroom</button> 
      </a>
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
            <button class="stylecmtbutton">Create Comment</button>
          </div>
        </div>
        <div 
        // class="review-bxfortext"
        // class={`review-bxfortext ${commentOpen8 ? 'open' : ''}`}
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
      <a href='/rate'>
      <button className="ratebutton">Rate Restroom</button> 
      </a>
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
            <button class="stylecmtbutton">Create Comment</button>
          </div>
        </div>
        <div 
        // class="review-bxfortext"
        // class={`review-bxfortext ${commentOpen9 ? 'open' : ''}`}
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

      </div>
    </div>
  );

  // var yy = document.getElementById("submitcomment");
  // yy.addEventListener("click", commentaftersubmitting);
  
}

// const Sesh = new Session();

export default App;

// export default SESSION;
