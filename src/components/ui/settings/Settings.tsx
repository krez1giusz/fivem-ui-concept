import React, { useState, useEffect } from "react";
import "./Settings.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesLeft, faAnglesRight, faAnglesDown, faAnglesUp, faSquare } from "@fortawesome/free-solid-svg-icons";
import { retrieveContextData } from '../../../utils/globalFunctions';

const hexToRgb = (hex: string): string | null => {
  hex = hex.replace(/^#/, '');
  let bigint = parseInt(hex, 16);
  let r = (bigint >> 16) & 255;
  let g = (bigint >> 8) & 255;
  let b = bigint & 255;
  return `${r}, ${g}, ${b}`;
};

const Settings: React.FC = () => {
  const { dragState, setDragState, color, setColor, setShowNotify, tiltComponent, tiltPositions, setTiltPositions, setTiltComponent } = retrieveContextData();

  const handleColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newColor = event.target.value;
    setColor(newColor);
    document.documentElement.style.setProperty("--primary-color", newColor);
    const rgbColor = hexToRgb(newColor);
    if (rgbColor) {
      document.documentElement.style.setProperty("--primary-color-rgb", rgbColor);
    }
  };

  const getIconColor = (component: keyof typeof tiltPositions, direction: string) => {
    return tiltPositions[component] === direction ? 'var(--primary-color)' : '';
  };

  const handleNotifyClick = () => {
    setShowNotify(true);
    setTimeout(() => {
      setShowNotify(false);
    }, 5000);
  };

  const handleTiltElementChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedTilt = event.target.value as keyof typeof tiltPositions;
    setTiltComponent(selectedTilt);
  };

  const handleIconClick = (direction: string) => {
    const newPositions = { ...tiltPositions };
    newPositions[tiltComponent] = direction;
    setTiltPositions(newPositions);
  };

  return (
    <div className="settings">
      <span className="containerTitle">SETTINGS</span>
      <div className="setting">
        <input
          type="checkbox"
          checked={dragState}
          onChange={() => setDragState(!dragState)}
        />
        <span className={`optionTitle ${dragState ? "textShadow" : ""}`}>
          {dragState ? "DISABLE DRAGGING" : "ENABLE DRAGGING"}
        </span>
      </div>
      <div className="setting" id="chevrons">
        <input
          type="color"
          id="favcolor"
          name="favcolor"
          value={color}
          onChange={handleColorChange}
        />
        <span className="optionTitle">PRESIDING COLOUR</span>
      </div>
      <div className="setting" id="chevrons">
        <div className="chevronSteering">
          <div></div>
          <div className="icon-container" onClick={() => handleIconClick('up')}>
            <FontAwesomeIcon icon={faAnglesUp} className="hoverable-icon" style={{ color: getIconColor(tiltComponent, 'up') }} />
          </div>
          <div></div>
          <div className="icon-container" onClick={() => handleIconClick('left')}>
            <FontAwesomeIcon icon={faAnglesLeft} className="hoverable-icon" style={{ color: getIconColor(tiltComponent, 'left') }} />
          </div>
          <div className="icon-container" onClick={() => handleIconClick('base')}>
            <FontAwesomeIcon icon={faSquare} className="hoverable-icon" style={{ color: getIconColor(tiltComponent, 'base') }} />
          </div>
          <div className="icon-container" onClick={() => handleIconClick('right')}>
            <FontAwesomeIcon icon={faAnglesRight} className="hoverable-icon" style={{ color: getIconColor(tiltComponent, 'right') }} />
          </div>
          <div></div>
          <div className="icon-container" onClick={() => handleIconClick('down')}>
            <FontAwesomeIcon icon={faAnglesDown} className="hoverable-icon" style={{ color: getIconColor(tiltComponent, 'down') }} />
          </div>
          <div></div>
        </div>
        <div className="flexColumn">
          <span className="optionTitle">TILT DIRECTION</span>
          <select value={tiltComponent} onChange={handleTiltElementChange}>
            <option value="notify">Notify</option>
            <option value="contextMenu">Context Menu</option>
            <option value="textUi">Text UI</option>
            <option value="alertDialog">Alert Dialog</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export { Settings };