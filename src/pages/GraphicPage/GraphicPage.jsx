import LeftPanel from "../../layout/Graphic/LeftPanel/LeftPanel";
import ParametrItem from "../../components/Graphic/ParametrItem/parametrItem";
import ParametrList from "../../components/Graphic/ParametrList/ParametrList";
import Barrel from "../../components/Graphic/Barrel/Barrel";
import Body from "../../layout/Graphic/Body/Body";
import { LineGraph } from "../../components/Graphic/Graphics/Line";
import AlertPanel from "../../components/Graphic/AlertPanel/AlertPanel";
import Header from '../../components/Graphic/Header/Header';
import './GraphicPage.css';


export default function GraphicPage({paramerts, objectClass, objectId}) {
  // paramId - класс
  // dataId - объект
  console.log("graphic", objectClass, objectId);

  return (
    <div className="page">
      {/* <div>{objectId}</div> */}
      {/* <Header /> */}

      <div className="graphic-page">
      {/* <div className="body"> */}
        <LeftPanel>
          <ParametrItem
            name="Параметр"
            value="Величина"
            unit="Ед. изм."
            isHead="yes"
          />
          {/* {console.log("Параметры", paramerts)} */}
          <ParametrList paramertData={paramerts} />
          <Barrel />
        </LeftPanel>
        <Body>
          <LineGraph />
          <AlertPanel />
        </Body>
      </div>
    </div>
  );
}