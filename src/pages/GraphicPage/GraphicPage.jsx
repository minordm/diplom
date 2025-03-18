import LeftPanel from "../../layout/Graphic/LeftPanel/LeftPanel";
import ParametrItem from "../../components/Graphic/ParametrItem/parametrItem";
import ParametrList from "../../components/Graphic/ParametrList/ParametrList";
import Barrel from "../../components/Graphic/Barrel/Barrel";
import Body from "../../layout/Graphic/Body/Body";
import { LineGraph } from "../../components/Graphic/Graphics/Line";
import AlertPanel from "../../components/Graphic/AlertPanel/AlertPanel";
import { useNavigate } from "react-router-dom";

export default function GraphicPage() {

  return (
      <div className="graphic-page">
        <LeftPanel>
          <ParametrItem
            name="Параметр"
            value="Величина"
            unit="Ед. изм."
            isHead="yes"
          />
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
// import Modal from "../../components/Modal/Modal";
// import LeftPanel from "../../layout/Graphic/LeftPanel/LeftPanel";
// import ParametrItem from "../../components/Graphic/ParametrItem/parametrItem";
// import ParametrList from "../../components/Graphic/ParametrList/ParametrList";
// import Barrel from "../../components/Graphic/Barrel/Barrel";
// import Body from "../../layout/Graphic/Body/Body";
// import { LineGraph } from "../../components/Graphic/Graphics/Line";
// import AlertPanel from "../../components/Graphic/AlertPanel/AlertPanel";
// import { useNavigate } from "react-router-dom";

// export default function GraphicPage() {
//   const navigate = useNavigate();

//   const closeModal = () => navigate("/");

//   return (
//     <Modal onClose={closeModal}>
//       <div className="graphic-page">
//         <LeftPanel>
//           <ParametrItem
//             name="Параметр"
//             value="Величина"
//             unit="Ед. изм."
//             isHead="yes"
//           />
//           <ParametrList />
//           <Barrel />
//         </LeftPanel>
//         <Body>
//           <LineGraph />
//           <AlertPanel />
//         </Body>
//       </div>
//     </Modal>
//   );
// }
