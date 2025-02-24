import "./App.css";
import AlertPanel from './components/AlertPanel/AlertPanel';
import Barrel from './components/Barrel/Barrel';
import Graphics from './components/Graphics/Graphics';
import ParametrList from './components/ParametrList/ParametrList';
import Body from './layout/Body/Body';
import LeftPanel from './layout/LeftPanel/LeftPanel';


function App() {
  return (
    <div className='app'>
      <LeftPanel>
        <ParametrList />
        <Barrel />
      </LeftPanel>
      <Body>
        <Graphics />
        <AlertPanel />
      </Body>
    </div>
  );
}

export default App;
