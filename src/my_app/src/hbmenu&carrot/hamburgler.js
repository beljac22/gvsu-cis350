import React, { useState, useEffect, useRef } from "react";
import { Link, Element } from 'react-scroll';

export default function Hambrger() {

    // const Bodystyle = document.body.style
    
    const [hamburgerOpen, setHamburgerOpen] = useState(false);

    const toggleHamburger = () =>{
        setHamburgerOpen(!hamburgerOpen)

        if (!hamburgerOpen) {
        document.body.style.overflow = "hidden";
        }
        else {
            document.body.style.overflow = "auto";
        }
    }

    let menuRef = useRef();

    useEffect(() => {
        let handler = (e) => {
         if (!menuRef.current.contains(e.target)) {
            setHamburgerOpen(false);
            document.body.style.overflow = "auto";
         }

         if (menuRef.current.contains(e.target)) {
            // setlgnimgOpen(false);
            document.body.style.overflow = "hidden";
         }
         
        }
        document.addEventListener("mousedown", handler);

        });

    
    const [carrotOpen, setcarrotOpen] = useState(false);

    const toggleCarrot = () =>{
        setcarrotOpen(!carrotOpen)
    }

    const [carrotOpen2, setcarrotOpen2] = useState(false);

    const toggleCarrot2 = () =>{
        setcarrotOpen2(!carrotOpen2)
    }

    const [carrotOpen3, setcarrotOpen3] = useState(false);

    const toggleCarrot3 = () =>{
        setcarrotOpen3(!carrotOpen3)
    }

    const [carrotOpen4, setcarrotOpen4] = useState(false);

    const toggleCarrot4 = () =>{
        setcarrotOpen4(!carrotOpen4)
    }

    const [carrotOpen5, setcarrotOpen5] = useState(false);

    const toggleCarrot5 = () =>{
        setcarrotOpen5(!carrotOpen5)
    }

    const [carrotOpen6, setcarrotOpen6] = useState(false);

    const toggleCarrot6 = () =>{
        setcarrotOpen6(!carrotOpen6)
    }

    const [carrotOpen7, setcarrotOpen7] = useState(false);

    const toggleCarrot7 = () =>{
        setcarrotOpen7(!carrotOpen7)
    }

    const [carrotOpen8, setcarrotOpen8] = useState(false);

    const toggleCarrot8 = () =>{
        setcarrotOpen8(!carrotOpen8)
    }

    const [carrotOpen9, setcarrotOpen9] = useState(false);

    const toggleCarrot9 = () =>{
        setcarrotOpen9(!carrotOpen9)
    }

    const [carrotOpen10, setcarrotOpen10] = useState(false);

    const toggleCarrot10 = () =>{
        setcarrotOpen10(!carrotOpen10)
    }

    const [carrotOpen11, setcarrotOpen11] = useState(false);

    const toggleCarrot11 = () =>{
        setcarrotOpen11(!carrotOpen11)
    }
    // });
    
    return(
       
        <div
        ref={menuRef}
        >
            {/* // <div class="hamburgermenu"> */}
            <div 
            class={`hamburgermenu ${hamburgerOpen ? 'open' : ''}`} onClick={toggleHamburger}
            // className="horizonbar"
            // className={`horizonbar ${hamburgerOpen ? 'open' : ''}`} onClick={toggleHamburger}
            >
            
                
                <span></span>
                <span></span>
                <span></span>
                {/* <div class={`horizonbar ${hamburgerOpen ? 'open' : ''}`} onClick={toggleHamburger}> */}
            
            </div>
            {/* <br></br> */}
                <div 
                className={`horizonbar ${hamburgerOpen ? 'open' : ''}`} 
                // ref={menuRef}
                // class="horizonbar" onClick={toggleHamburger}
                >
                <br></br>
                {/* <CrrtM></CrrtM> */}
                {/* <div class="ccoll"> */}
                    {/* <CrrtM></CrrtM> */}
                    
                    <div 
                    class={`carrotmenuUp ${carrotOpen ? 'open' : ''}`} onClick={toggleCarrot}
                    >
                    
                    <span></span>
                    <span></span>
    
                    </div>

                    <div class="lftali">
                    {/* <CrrtM></CrrtM> */}
                    <Link to="MacBuilding" class="linkforMac">
                    Mackinac Building
                    </Link>
                    </div>

                    <div
                    className={`carrotmenuinHbar ${carrotOpen ? 'open' : ''}`} 
                    // class="lftaliM"
                    >
                        <Link to="F1AWingMenMac" class="cursorforlinks">
                        1: Bathroom F1AWingMenMac
                        </Link>
                        <br></br>
                        <Link to="F1AWingWomenMac" class="cursorforlinks">
                        2: Bathroom F1AWingWomenMac
                        </Link>
                        <br></br>
                        <Link to="F2AWingMenMac" class="cursorforlinks">
                        3: Bathroom F2AWingMenMac
                        </Link>
                        <br></br>
                        <Link to="F2AWingWomenMac" class="cursorforlinks">
                        4 Bathroom F2AWingWomenMac
                        </Link>
                        <br></br>

                        <Link to="F1A-BWingMenMac" class="cursorforlinks">
                        5: Bathroom F1A-BWingMenMac
                        </Link>
                        <br></br>
                        <Link to="F1A-BWingWomenMac" class="cursorforlinks">
                        6: Bathroom F1A-BWingWomenMac
                        </Link>
                        <br></br>
                        <Link to="F1BWingMenMac" class="cursorforlinks">
                        7: Bathroom F1BWingMenMac
                        </Link>
                        <br></br>
                        <Link to="F1BWingWomenMac" class="cursorforlinks">
                        8: Bathroom F1BWingWomenMac
                        </Link>
                        <br></br>

                        <Link to="F2BWingMenMac" class="cursorforlinks">
                        9: Bathroom F2BWingMenMac
                        </Link>
                        <br></br>
                        <Link to="F2BWingWomenMac" class="cursorforlinks">
                        10: Bathroom F2BWingWomenMac
                        </Link>
                        <br></br>
                        <Link to="F2CWingMenMac" class="cursorforlinks">
                        11: Bathroom F2CWingMenMac
                        </Link>
                        <br></br>
                        <Link to="F2CWingWomenMac" class="cursorforlinks">
                        12: Bathroom F2CWingWomenMac
                        </Link>
                        <br></br>

                        <Link to="F1DWingMenMac" class="cursorforlinks">
                        13: Bathroom F1DWingMenMac
                        </Link>
                        <br></br>
                        <Link to="F1DWingWomenMac" class="cursorforlinks">
                        14: Bathroom F1DWingWomenMac
                        </Link>
                        <br></br>
                        <Link to="F2DWingMenMac" class="cursorforlinks">
                        15: Bathroom F2DWingMenMac
                        </Link>
                        <br></br>
                        <Link to="F2DWingWomenMac" class="cursorforlinks">
                        16: Bathroom F2DWingWomenMac
                        </Link>
                        <br></br>
                        <Link to="BasementMenMac" class="cursorforlinks">
                        17: Bathroom BasementMenMac
                        </Link>
                        <br></br>
                        <Link to="BasementWomenMac" class="cursorforlinks">
                        18: Bathroom BasementWomenMac
                        </Link>

                    </div>

                <div 
                class={`carrotmenuUp ${carrotOpen2 ? 'open' : ''}`} onClick={toggleCarrot2}
                >
                    
                <span></span>
                <span></span>
    
                </div>
                <div class="lftali">
                <Link to="KirkBuilding" class="cursorforlinks">
                Kirkhof Center
                </Link>
                </div>

                <div
                className={`carrotmenuinHbar ${carrotOpen2 ? 'open' : ''}`} 
                // class="lftaliM"
                >
                    <Link to="F1DineKirk" class="cursorforlinks">
                    Bathroom F1DineKirk
                    </Link>   
                </div>

                <div 
                class={`carrotmenuUp ${carrotOpen3 ? 'open' : ''}`} onClick={toggleCarrot3}
                >
                    
                <span></span>
                <span></span>
    
                </div>
                <div class="lftali">
                <Link to="BlueConnection" class="cursorforlinks">
                Blue Connection
                </Link>
                </div>

                <div
                className={`carrotmenuinHbar ${carrotOpen3 ? 'open' : ''}`} 
                // class="lftaliM"
                >
                    <Link to="NPod&Office" class="cursorforlinks">
                    Bathroom NPod&Office
                    </Link>  
                </div>

                <div 
                class={`carrotmenuUp ${carrotOpen4 ? 'open' : ''}`} onClick={toggleCarrot4}
                >
                    
                <span></span>
                <span></span>
    
                </div>
                <div class="lftali">
                <Link to="AuSable" class="cursorforlinks">
                Au Sable Hall
                </Link>
                </div>

                <div
                className={`carrotmenuinHbar ${carrotOpen4 ? 'open' : ''}`} 
                // class="lftaliM"
                >
                    <Link to="AS2U1" class="cursorforlinks">
                    Bathroom AS2U1
                    </Link>  
                </div>

                {/* <br></br> */}
                {/* <CrrtM></CrrtM> */}


                <div 
                class={`carrotmenuUp ${carrotOpen5 ? 'open' : ''}`} onClick={toggleCarrot5}
                >
                    
                <span></span>
                <span></span>
    
                </div>
                <div class="lftali">
                <Link to="KellySports" class="cursorforlinks">
                Kelly Sports Center
                </Link>
                </div>

                <div
                className={`carrotmenuinHbar ${carrotOpen5 ? 'open' : ''}`} 
                // class="lftaliM"
                >
                    <Link to="TopFKSC" class="cursorforlinks">
                    Bathroom TopFKSC
                    </Link> 
                </div>

                {/* <CrrtM></CrrtM> */}

                <div 
                class={`carrotmenuUp ${carrotOpen6 ? 'open' : ''}`} onClick={toggleCarrot6}
                >
                    
                <span></span>
                <span></span>
    
                </div>
                <div class="lftali">
                <Link to="MaryLib" class="cursorforlinks">
                Mary Idema Library
                </Link>
                </div>

                <div
                className={`carrotmenuinHbar ${carrotOpen6 ? 'open' : ''}`} 
                // class="lftaliM"
                >
                    <Link to="KnowMarkMain" class="cursorforlinks">
                    Bathroom KnowMarkMain
                    </Link>
                </div>


                <div 
                class={`carrotmenuUp ${carrotOpen7 ? 'open' : ''}`} onClick={toggleCarrot7}
                >
                    
                <span></span>
                <span></span>
    
                </div>
                <div class="lftali">
                <Link to="RecCenter" class="cursorforlinks">
                Rec Center
                </Link>
                </div>

                <div
                className={`carrotmenuinHbar ${carrotOpen7 ? 'open' : ''}`} 
                // class="lftaliM"
                >
                    <Link to="RecVMBase" class="cursorforlinks">
                    Bathroom RecVMBase
                    </Link>
                </div>


                <div 
                class={`carrotmenuUp ${carrotOpen8 ? 'open' : ''}`} onClick={toggleCarrot8}
                >
                    
                <span></span>
                <span></span>
    
                </div>
                <div class="lftali">
                <Link to="HonorsCollege" class="cursorforlinks">
                Honors College
                </Link>
                </div>

                <div
                className={`carrotmenuinHbar ${carrotOpen8 ? 'open' : ''}`} 
                // class="lftaliM"
                >
                    <Link to="HsCll1F" class="cursorforlinks">
                    Bathroom HsCll1F
                    </Link>
                </div>


                <div 
                class={`carrotmenuUp ${carrotOpen9 ? 'open' : ''}`} onClick={toggleCarrot9}
                >
                    
                <span></span>
                <span></span>
    
                </div>
                <div class="lftali">
                <Link to="LakeOnto" class="cursorforlinks">
                Lake Ontario Hall
                </Link>
                </div>

                <div
                className={`carrotmenuinHbar ${carrotOpen9 ? 'open' : ''}`} 
                // class="lftaliM"
                >
                    <Link to="LOHF1" class="cursorforlinks">
                    Bathroom LOHF1
                    </Link>
                </div>

                <elm class="lftali">
                <Link to="textblwpic" class="cursorforlinks">
                Text
                </Link>
                </elm>

                <br></br>
                <elm class="lftali">
                <Link to="textblwpic" class="cursorforlinks">
                Text
                </Link>
                </elm>

                <br></br>
                <elm class="lftali">
                <Link to="textblwpic" class="cursorforlinks">
                Text
                </Link>
                </elm>

                <br></br>
                <elm class="lftali">
                <Link to="textblwpic" class="cursorforlinks">
                Text
                </Link>
                </elm>

                <br></br>
                <elm class="lftali">
                <Link to="textblwpic" class="cursorforlinks">
                Text
                </Link>
                </elm>

                <br></br>
                <elm class="lftali">
                <Link to="textblwpic" class="cursorforlinks">
                Text
                </Link>
                </elm>

                <br></br>
                <elm class="lftali">
                <Link to="textblwpic" class="cursorforlinks">
                Text
                </Link>
                </elm>

                <br></br>
                <elm class="lftali">
                <Link to="textblwpic" class="cursorforlinks">
                Text
                </Link>
                </elm>
                
                </div>
        </div>
    );
};