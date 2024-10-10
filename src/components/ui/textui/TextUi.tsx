import React, { useState, useContext, useEffect } from "react";
import "./TextUi.css";
import Draggable from "react-draggable";

import { retrieveContextData, getTransformString } from '../../../utils/globalFunctions';



const TextUi: React.FC = () => {

    const { dragState, setDragState, color, setColor, isDragging, setIsDragging, tiltPositions } = retrieveContextData();

    const [transformString, setTransformString] = useState("rotate(0deg)");

    useEffect(() => {
        const val = tiltPositions['textUi'];
        setTransformString(getTransformString(val));
    }, [tiltPositions]);


    return (
                <div>
                    <div style ={{transform: transformString}} className={`textui ${isDragging ? 'no-transition' : ''}`}>
                        <div className = "textBar">
                            Press Button
                        </div>
                        <div className="square">
                            <div className = "button">
                                <span style={{transform: "rotate(-45deg)"}}>E</span>
                            </div>
                        </div>
                    </div>
                </div>




    )
}

export { TextUi };