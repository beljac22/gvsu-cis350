import React, { useState, useEffect, useRef } from "react";

// export const [carrotOpen, setcarrotOpen] = useState(false);

// export const toggleCarrot = () =>{
//     setcarrotOpen(!carrotOpen)
// }


export default function FltrButton() {

    const [filtermenuOpen, setfiltermenuOpen] = useState(false);

    const toggleFilter = () =>{
      setfiltermenuOpen(!filtermenuOpen)
    }

    let menuRef = useRef();

    useEffect(() => {
        let handler = (e) => {
         if (!menuRef.current.contains(e.target)) {
            setfiltermenuOpen(false);
            
         }

        //  if (menuRef.current.contains(e.target)) {
        //     // setlgnimgOpen(false);
        //     document.body.style.overflow = "hidden";
        //  }
         
        }
        document.addEventListener("mousedown", handler);

        });

    return (
        <div
        ref={menuRef}
        class={`blk ${filtermenuOpen ? 'open' : ''}`}
        >
            <button 
            
            // class={`carrotmenuUp ${carrotOpen ? 'open' : ''}`} onClick={toggleCarrot}
            class={`filtercmt ${filtermenuOpen ? 'open' : ''}`} onClick={toggleFilter}
            >
            filter
            </button>
            <div 
            class={`filmenu ${filtermenuOpen ? 'open' : ''}`}
            // class="filmenu"
            >
            Accessbility <input type="checkbox"/>
            <br></br>
            Cleanliness <input type="checkbox"/>
            <br></br>
            Touch Free <input type="checkbox"/>
            <br></br>
            Men <input type="checkbox"/>
            <br></br>
            Women <input type="checkbox"/>
            <br></br>
            Unordered <input type="checkbox"/>
            <br></br>
            Oldest - Latest <input type="checkbox"/>
            </div>
            

            {/* <div
            // className={`carrotmenuinHbar ${carrotOpen ? 'open' : ''}`} 
            // // class="lftaliM"
            // >
            //     ss
            // </div> */}
        </div>



)}