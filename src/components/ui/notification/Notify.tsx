import React, {  useEffect, useState } from "react";
import "./Notify.css";
import Draggable from 'react-draggable';
import  InfoIcon  from '../../../img/InfoIcon'; 


import { retrieveContextData, getTransformString } from '../../../utils/globalFunctions';

interface NotifyProps {
    notiTitle: string;
    notiDesc: string;
}

const Notification: React.FC<NotifyProps> = ({ notiTitle, notiDesc }) => {
    const { dragState, color, isDragging, setIsDragging, tiltPositions } = retrieveContextData();

    const [transformString, setTransformString] = useState("rotate(0deg)");

    useEffect(() => {
        const val = tiltPositions['notify'];
        setTransformString(getTransformString(val));
    }, [tiltPositions]);
    
    return (
        <Draggable onStart={() => { setIsDragging(true) }} onStop={() => { setIsDragging(false) }} disabled={!dragState} bounds="parent">
                <div className = "notifyContainer">
                    <div style={{transform:transformString}} className={`notification ${isDragging ? 'no-transition' : ''}`}>
                        <span className="title">{notiTitle}</span>
                        <div className="infoBox">
                            <InfoIcon color={color} />
                            <span className="desc">
                                {notiDesc}
                            </span>
                        </div>
                    </div>
                </div>
        </Draggable>
    );
}

export { Notification };