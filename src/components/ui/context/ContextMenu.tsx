import React, { useState, useEffect } from "react";
import { retrieveContextData, getTransformString } from '../../../utils/globalFunctions';
import "./ContextMenu.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as Icons from "@fortawesome/free-solid-svg-icons"; 
import Draggable from 'react-draggable';




interface ContextOption {
    title: string;
    description: string;
    icon?: string;
    options?: ContextOption[];
}

interface ContextMenuProps {
    options: ContextOption[];
}

const ContextMenu: React.FC<ContextMenuProps> = ({ options }) => {
    const { dragState, isDragging, setIsDragging, tiltPositions } = retrieveContextData();

    const [currentOptions, setCurrentOptions] = useState<ContextOption[]>(options);

    const [previousOptions, setPreviousOptions] = useState<ContextOption[][]>([]);

    const [transformString, setTransformString] = useState("rotate(0deg)");

    useEffect(() => {
        const val = tiltPositions['contextMenu'];
        setTransformString(getTransformString(val));
    }, [tiltPositions]);

    const handleOptionClick = (option: ContextOption) => {
        if (option.options) {
            setPreviousOptions([...previousOptions, currentOptions]);
            setCurrentOptions(option.options);
        }
    };

    const handleBackClick = () => {
        const lastOptions = previousOptions.pop();
        if (lastOptions) {
            setCurrentOptions(lastOptions);
            setPreviousOptions([...previousOptions]);
        }
    };

    const getIcon = (iconName: string) => {
        const icon = (Icons as { [key: string]: any })[iconName];
        return icon ? <FontAwesomeIcon icon={icon} /> : null;
    };

    return (
        <Draggable onStart={() => { setIsDragging(true) }} onStop={() => { setIsDragging(false) }} disabled={!dragState} bounds="parent">
            <div className="absoluteContainer">
                <div className="context" style ={{transform: transformString}}>
                    <span className="contextTitle">Context Title</span>
                    {previousOptions.length > 0 && (
                        <div className='contextOption' onClick={handleBackClick}>
                            <div className="contextOptionHeader">
                                <FontAwesomeIcon icon={Icons.faAnglesLeft} />
                                <span className="contextOptionTitle">Back</span>
                            </div>
                        </div>
                    )}
                    {currentOptions.map((option, index) => (
                        <div key={index} className='contextOption' onClick={() => handleOptionClick(option)}>
                            <div className="contextOptionHeader">
                                {option.icon && getIcon(option.icon)}
                                <span className="contextOptionTitle">{option.title}</span>
                            </div>
                            <span className="contextOptionDesc">{option.description}</span>
                        </div>
                    ))}
                </div>
            </div>
        </Draggable>
    );
}


export { ContextMenu };