import "./App.css";
// import Barrel from './components/Graphic/Barrel/Barrel';
// import AlertList from './components/Main/AlertList/AlertList';
// import Diagrama from './components/Main/Diagrama/Diagrama';
import BodyScheme from './layout/Main/BodyScheme/BodyScheme';
// import RightPanel from './layout/Main/RightPanel/RightPanel';
// import AlertPanel from "./components/Graphic/AlertPanel/AlertPanel";
// import Barrel from "./components/Graphic/Barrel/Barrel";
// import { LineGraph } from "./components/Graphic/Graphics/Line";
// import ParametrList from "./components/Graphic/ParametrList/ParametrList";
// import Body from "./layout/Graphic/Body/Body";
// import LeftPanel from "./layout/Graphic/LeftPanel/LeftPanel";

function App() {
  return (
    <div className="app">
      {/* <LeftPanel>
        <ParametrList />
        <Barrel />
      </LeftPanel>
      <Body>
        <LineGraph />
        <AlertPanel />
      </Body> */}
      <div className='main-page'>
        {/* <BodyScheme />
        <RightPanel>
        <Diagrama />
        
        <AlertList />
        </RightPanel> */}
        <BodyScheme />
        {/* <Barrel /> */}
      </div>
    </div>
  );
}

export default App;
