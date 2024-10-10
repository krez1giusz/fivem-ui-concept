import React, { useContext, useState, useEffect } from "react";
import "./ProgressBar.css";
import Draggable from "react-draggable";
import { retrieveContextData } from '../../../../utils/globalFunctions';

const ProgressBar: React.FC = () => {
    const { dragState, setDragState, color, setColor, isDragging, setIsDragging, tiltPositions } = retrieveContextData();

    const [barWidth, setBarWidth] = useState(0);
    const [progressTitle, setProgressTitle] = useState("PROGRESS TITLE");
   




    
    const handleButtonClick = (timeSpan: number, title: string) => {
        setBarWidth(0); 
        setProgressTitle(title);
        const increment = 100 / (timeSpan / 100); 
        let currentWidth = 0;

        const interval = setInterval(() => {
            currentWidth += increment;
            if (currentWidth >= 100) {
                setBarWidth(100); 
                clearInterval(interval);
                setTimeout(() => {setBarWidth(0);setProgressTitle("PROGRESS TITLE")}, 1000); 
            } else {
                setBarWidth(currentWidth);
            }
        }, 100); 
    };

    return (
        


        <div className = "progressContainer">
            <Draggable onStart={() => { setIsDragging(true) }} onStop={() => { setIsDragging(false) }} disabled={!dragState} bounds="parent">
                <div className="progressBar">
                    <span>{progressTitle}</span>
                    <div className="progressBarFill" style={{ width: `${barWidth}%` }}>
                    </div>
                </div>
            </Draggable>
        </div>
    );
}

export { ProgressBar }