import "./App.css";
import { useState } from 'react';

import BodyScheme from "./layout/Main/BodyScheme/BodyScheme";
import RightPanel from "./layout/Main/RightPanel/RightPanel";
import AlertList from "./components/Main/AlertList/AlertList";
import { Dialog } from '@headlessui/react';
import GraphicPage from './pages/GraphicPage/GraphicPage';


function App() {
    const [isOpen, setIsOpen] = useState(false);
    const [paramerts, setParamerts] = useState([]);
    const [selectedObjectId, setSelectedObjectId] = useState("");
    const [selectedObjectClass, setSelectedObjectClass] = useState("");

  return (
    <>
      <div className="app">
        <div className="main-page">
          <BodyScheme
            setIsOpen={setIsOpen}
            setParamerts={setParamerts}
            setSelectedObjectId={setSelectedObjectId}
            setSelectedObjectClass={setSelectedObjectClass}
          />
          <RightPanel>
            <AlertList />
          </RightPanel>

          <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
            <div className="bg">
              <Dialog.Panel>
                <div className="popup">
                  <Dialog.Title>
                    <div className="header">
                      {selectedObjectId}
                      <button onClick={() => setIsOpen(false)}>x</button>
                    </div>
                  </Dialog.Title>
                  <GraphicPage
                    paramerts={paramerts}
                    objectId={selectedObjectId}
                    objectClass={selectedObjectClass}
                  />
                </div>
              </Dialog.Panel>
            </div>
          </Dialog>
        </div>
      </div>
    </>
  );
}

export default App;