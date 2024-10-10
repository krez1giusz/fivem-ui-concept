import React, { useState, useContext } from "react";
import "./App.css";
import { debugData } from "../utils/debugData";
import { fetchNui } from "../utils/fetchNui";
import { Notification } from "./ui/notification/Notify";
import { GlobalStateContext } from "../providers/GlobalStateContext";
import { Settings } from "./ui/settings/Settings";
import { PlayerBar } from "./ui/playerbar/PlayerBar";
import { TextUi } from "./ui/textui/TextUi";
import { ProgressBar } from "./ui/progressbars/standard/ProgressBar";
import { ContextMenu } from "./ui/context/ContextMenu";
import { AlertDialog } from "./ui/dialogs/AlertDialog";
import Draggable from 'react-draggable';


debugData([
  {
    action: "setVisible",
    data: true,
  },
]);

interface ReturnClientDataCompProps {
  data: unknown;
}

const ReturnClientDataComp: React.FC<ReturnClientDataCompProps> = ({
  data,
}) => (
  <>
    <h5>Returned Data:</h5>
    <pre>
      <code>{JSON.stringify(data, null)}</code>
    </pre>
  </>
);

interface ReturnData {
  x: number;
  y: number;
  z: number;
}



const App: React.FC = () => {
  const [clientData, setClientData] = useState<ReturnData | null>(null);
  const context = useContext(GlobalStateContext);

  const options = [
    { title: 'Option 1', description: 'Description for option 1', icon: 'faPalette' },
    { title: 'Option 2', description: 'Description for option 2', icon: 'faPalette' },
    { 
        title: 'Option 3',
        icon: 'faBars',
        description: 'Description for option 3',
        options: [
            { title: 'Sub Option 1', description: 'Description for sub option 1', icon: 'faPalette' },
            { 
                title: 'Sub Option 2',
                icon: 'faBars', 
                description: 'Description for sub option 2',
                options: [
                    { title: 'Sub Sub Option 1', description: 'Description for sub sub option 1', icon: 'faPalette' },
                    { 
                        title: 'Sub Sub Option 2', 
                        icon: 'faBars',
                        description: 'Description for sub sub option 2',
                        options: [
                            { title: 'Sub Sub Sub Option 1', description: 'Description for sub sub sub option 1', icon: 'faPalette' },
                            { 
                                title: 'Sub Sub Sub Option 2', 
                                icon: 'faBars',
                                description: 'Description for sub sub sub option 2',
                                options: [
                                    { title: 'Sub Sub Sub Sub Option 1', description: 'Description for sub sub sub sub option 1' },
                                    { title: 'Sub Sub Sub Sub Option 2', description: 'Description for sub sub sub sub option 2' },
                                ]
                            },
                        ]
                    },
                ]
            },
        ]
    },
];

  if (!context) {
    throw new Error("Notification must be used within a GlobalStateProvider");
  }

  const { dragState, setDragState, color, setColor,showNotify, setShowNotify } = context;

  const handleGetClientData = () => {
    fetchNui<ReturnData>("getClientData")
      .then((retData) => {
        console.log("Got return data from client scripts:");
        console.dir(retData);
        setClientData(retData);
      })
      .catch((e) => {
        console.error("Setting mock data due to error", e);
        setClientData({ x: 500, y: 300, z: 200 });
      });
  };

  return (
    <div className="main-window">

        {/* {showNotify && <Notification notiTitle="siemanko" notiDesc = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa" />} */}
        <AlertDialog/>
        <Notification notiTitle="Notify Title" notiDesc = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam" />
        <TextUi/>
        <ContextMenu options={options} />
        <ProgressBar/> 
        <Settings/>
        {/* <PlayerBar/> */}

    </div>



  );
};

export default App;
