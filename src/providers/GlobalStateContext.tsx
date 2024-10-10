import React, { createContext, useState, ReactNode } from 'react';


const defaultTilts = {
  notify: "left",
  contextMenu: "left",
  textUi: "down",
  alertDialog: "down"
};

interface GlobalState {
  dragState: boolean;
  setDragState: (state: boolean) => void;
  color: string;
  setColor: (color: string) => void;
  isDragging: boolean;
  setIsDragging: (state: boolean) => void;
  showNotify: boolean;
  setShowNotify: (state: boolean) => void;
  tiltComponent: keyof typeof defaultTilts;
  setTiltComponent: (component: keyof typeof defaultTilts) => void;
  tiltPositions: typeof defaultTilts;
  setTiltPositions: (positions: typeof defaultTilts) => void;
}

const GlobalStateContext = createContext<GlobalState | undefined>(undefined);


const GlobalStateProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [dragState, setDragState] = useState<boolean>(false);
  const [color, setColor] = useState<string>("#63ffb4"); // Initialize color state
  const [isDragging, setIsDragging] = useState(false);
  const [showNotify, setShowNotify] = useState(false);

  const [tiltPositions, setTiltPositions] = useState(defaultTilts);
  const [tiltComponent, setTiltComponent] = useState<keyof typeof defaultTilts>("notify");

  return (
    <GlobalStateContext.Provider value={{ tiltComponent, setTiltComponent, tiltPositions, setTiltPositions, dragState, setDragState, color, setColor, isDragging, setIsDragging, showNotify, setShowNotify }}>
      {children}
    </GlobalStateContext.Provider>
  );
};

export { GlobalStateContext, GlobalStateProvider };