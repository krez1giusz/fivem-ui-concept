
import React, {useState, useEffect} from "react";
import "./AlertDialog.css";
import Draggable from "react-draggable";


import { retrieveContextData, getTransformString } from '../../../utils/globalFunctions';


const AlertDialog: React.FC = () => {
    
    const { dragState, setIsDragging, isDragging, tiltPositions } = retrieveContextData();

    const [transformString, setTransformString] = useState("rotate(0deg)");

    useEffect(() => {
        const val = tiltPositions['contextMenu'];
        setTransformString(getTransformString(val));
    }, [tiltPositions]);

    // dodac transform: transformString do diva z klasa alertDialog


    const handleButtonClick = (isOK: boolean) => {
        if(isOK){
            console.log("OK Button Clicked");
        } else {
            console.log("CANCEL Button Clicked");
        }
    }

    return (
        <div className = "alertOverlay">

            <Draggable onStart={() => { setIsDragging(true) }} onStop={() => { setIsDragging(false) }} disabled={!dragState} bounds="parent">

            <div className={`alertDialog ${isDragging ? 'no-transition' : ''}`}>
                
                    <span className ="alertTitle" >Alert Dialog TITLE</span>
                    
                    <span className = "alertDesc">Alert Dialog Description testt 1 2 3 </span>


                    <div className="flexRow">
                        <button  className ="alertBtn ok" onClick ={()=>{handleButtonClick(true)}}>OK</button>
                        <button className = "alertBtn no" onClick ={()=>{handleButtonClick(false)}}>CANCEL</button>

                    </div>

                


            </div>
            </Draggable>
        </div>

    )

}

export { AlertDialog }
