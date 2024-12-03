// import im1 from "../images/image1.svg"
import Navbar from "../components/Navbar/Navbar.js";
import { useState, useEffect, useRef } from "react";

function ReviewPg() {

    const [commentOpen, setCommentOpen] = useState(false);

    const toggleCommentbtn = () =>{
        setCommentOpen(!commentOpen)
    }

    // useEffect(() => {
    //     let handler = (e) => {

    //         }
            
    //     })

    let gg = [<br></br>, 
    <input type="comment" class="review-textbxsize"></input>];

    // const [commentOpen, setCommentOpen] = useState(false);

    // const toggleCommentbtn = () =>{
    //     setCommentOpen(!commentOpen)
    // }

    return (
        <div>
            <Navbar></Navbar>
            <div
            class="App-reviewbelowbar"
            >
            <br></br><center class="review-titlefontsz">Review Page!</center><br></br>
            <br></br>

            {/* <div> */}
                <div>
                <button
                // type="button" 
                
                class="review-textbxpos" onClick={toggleCommentbtn}
                // class={`review-textbxpos ${commentOpen ? 'open' : ''}`} onClick={toggleCommentbtn}
                // style={}
                // onclick="alert('Hello Reviewers')"
                >Create Remedy Comment
                </button>
                </div>
                
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <center>
                <div
                // class="review-bxfortext"
                class={`review-bxfortext ${commentOpen ? 'open' : ''}`}
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

                
                </center>
            {/* </div> */}

                {/* <div class="review-bxforbutton">
                <button>
                Submit
                </button>
                </div> */}

            </div> 
        </div>
    );
};
 
export default ReviewPg;