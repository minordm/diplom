import "./App.css";
import AlertPanel from "./components/AlertPanel/AlertPanel";
import Barrel from "./components/Barrel/Barrel";
import { LineGraph } from "./components/Graphics/Line";
import ParametrList from "./components/ParametrList/ParametrList";
import Body from "./layout/Body/Body";
import LeftPanel from "./layout/LeftPanel/LeftPanel";

function App() {
  return (
    <div className="app">
      <LeftPanel>
        <ParametrList />
        <Barrel />
      </LeftPanel>
      <Body>
        <LineGraph />
        <AlertPanel />
      </Body>
    </div>
  );
}

export default App;
