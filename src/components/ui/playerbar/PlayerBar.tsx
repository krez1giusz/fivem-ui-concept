import React, { useState, useContext } from "react";
import "./PlayerBar.css";
import Draggable from "react-draggable";
import { GlobalStateContext } from "../../../providers/GlobalStateContext";


const retrieveContextData = () => {
    const context = useContext(GlobalStateContext);

    if (!context) {
      throw new Error("Notification must be used within a GlobalStateProvider");
    }
  

    return context
}

const PlayerBar: React.FC = () => {

    const { dragState, setDragState, color, setColor, isDragging, setIsDragging } = retrieveContextData();

    return (
        <Draggable onStart={() => {setIsDragging(true)}} onStop={() => {setIsDragging(false)}} disabled={!dragState} bounds= "parent">
                <div className={`playerBar ${isDragging ? 'no-transition' : ''}`}>

                </div>
        </Draggable>

    )
}

export { PlayerBar };