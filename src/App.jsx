// import "./App.css";
// import { useState } from 'react';
// import { Dialog } from '@headlessui/react';

// function App() {
//     const [isOpen, setIsOpen] = useState(false);

//   return (
//     <>
//       <div className="app">

//             <button onClick={() => setIsOpen(true)}>+</button>
//             <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
//                 <div className='bg'>
//                     <Dialog.Panel className='popup'>
//                         <Dialog.Title>наше окно</Dialog.Title>
//                         <div>text</div>
//                         <button onClick={() => setIsOpen(false)}>x</button>
//                     </Dialog.Panel>
//                 </div>
//             </Dialog>
//       </div>
//     </>
//   );
// }

// export default App;






// // import "./App.css";
// import { useState } from 'react';

// import Modal from './components/Modal/Modal';

// function App() {
//     const [modalActive, setModalActive] = useState(true);

//   return (
//     <>
//         <div className="app">
//             <main>
//                 <button onClick={() => setModalActive(true)}>+</button>
//                 <p>nksjndlfdsjknfjs</p>
//                 <p>nksjndlfdsjknfjs</p>
//                 <p>nksjndlfdsjknfjs</p>
//                 <p>nksjndlfdsjknfjs</p>
//                 <p>nksjndlfdsjknfjs</p>
//                 <p>nksjndlfdsjknfjs</p>
//                 <p>nksjndlfdsjknfjs</p>
//             </main>
//         </div>

//         <Modal active={modalActive} setActive={setModalActive} >
//             123
//         </Modal>
//     </>
//   );
// }

// export default App;







import "./App.css";
import { useState } from 'react';

import BodyScheme from "./layout/Main/BodyScheme/BodyScheme";
import RightPanel from "./layout/Main/RightPanel/RightPanel";
import Diagrama from "./components/Main/Diagrama/Diagrama";
import AlertList from "./components/Main/AlertList/AlertList";
import { Dialog } from '@headlessui/react';
import GraphicPage from './pages/GraphicPage/GraphicPage';


function App() {
    const [isOpen, setIsOpen] = useState(false);
    const [paramerts, setParamerts] = useState([]);

  return (
    <>
      <div className="app">
        <div className="main-page">
          <BodyScheme setIsOpen={setIsOpen} setParamerts={setParamerts} />
          <RightPanel>
            <AlertList />
          </RightPanel>

          <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
            <div className="bg">
              <Dialog.Panel>
                <div className="popup">
                  <GraphicPage paramerts={paramerts} />
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

// // import "./App.css";
// import { useState } from 'react';

// import BodyScheme from "./layout/Main/BodyScheme/BodyScheme";
// import RightPanel from "./layout/Main/RightPanel/RightPanel";
// import Diagrama from "./components/Main/Diagrama/Diagrama";
// import AlertList from "./components/Main/AlertList/AlertList";

// import Modal from './components/Modal/Modal';

// function App() {
//     const [modalActive, setModalActive] = useState(true);

//   return (
//     <>
//         <div className="app">
//              <div className='main-page'>
//                 <button onClick={() => setModalActive(true)}>+</button>
//                 <BodyScheme />
//                 <RightPanel>
//                 <Diagrama />
//                 <AlertList />
//                 </RightPanel>
//              </div>
//         </div>
//         <Modal active={modalActive} setActive={setModalActive} >
//             123
//         </Modal>
//     </>
//   );
// }

// export default App;
