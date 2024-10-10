import { useContext } from 'react';
import { GlobalStateContext } from '../providers/GlobalStateContext'; // Adjust the import path as needed

export const retrieveContextData = () => {
    const context = useContext(GlobalStateContext);

    if (!context) {
        throw new Error("Notification must be used within a GlobalStateProvider");
    }

    return context;
};


export const getTransformString = (tiltPosition: string): string => {
    switch (tiltPosition) {
        case 'left':
            return "perspective(4000px) rotate3d(0, 1, 0, -20deg)";
        case 'right':
            return "perspective(4000px) rotate3d(0, 1, 0, 20deg)";
        case 'up':
            return "perspective(4000px) rotate3d(1, 0, 0, -20deg)";
        case 'down':
            return "perspective(4000px) rotate3d(1, 0, 0, 20deg)";
        default:
            return "perspective(4000px) rotate3d(0, 0, 0, 0deg)";
    }
};