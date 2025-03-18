import "./BodyScheme.css";
import { ReactSVG } from "react-svg";
import { useRef, useState } from "react";
import { TransformComponent, TransformWrapper } from "react-zoom-pan-pinch";

import paramertData from "../../../components/Graphic/ParametrList/ParamertData.json";
import valueData from "../../../components/Graphic/ParametrList/ValueData.json";

export default function BodyScheme({setIsOpen, setParamerts}) {
  const [count, setCount] = useState(0);
  const tranformRef = useRef(null);


  const handleClick = (event) => {
    if (event.target.tagName === "use") {
      const groupElement = event.target.closest("g");
      const paramId = groupElement?.getAttribute("id");
      const dataId = event.target.getAttribute("data-id");
      console.log("Нажат объект", groupElement, paramId, dataId);
      
      
      if (paramId && paramertData[paramId] && dataId && valueData[dataId]) {
        const params = paramertData[paramId];
        const values = valueData[dataId];

        console.log("данные", params, values);

        // Объединяем параметры с данными
        const combinedData = params.map((param) => {
          // Найти все записи по имени параметра (игнорируем регистр)
          const paramValues = values
            .filter(
              (item) => item.name.toLowerCase() === param.name.toLowerCase()
            )
            .sort((a, b) => new Date(b.time) - new Date(a.time)); // Сортируем по времени (новейшие сверху)

          // Получаем последнее значение (самое свежее)
          const latestValue =
            paramValues.length > 0 ? paramValues[0].value : "N/A";

          return {
            name: param.name,
            unit: param.unit,
            value: latestValue,
          };
        });

        console.log("Объединенные данные:", combinedData); // Логируем объединенные данные

        console.log("Полученные данные", combinedData);
        setParamerts(combinedData);
        setIsOpen(true);
      } else {
        console.warn("Параметры не найдены:", groupElement);
      }
    }
  };

  return (
    <div className="body-scheme">
      <button className="table_plus" onClick={() => setCount(count + 1)}>
        +
      </button>
      <div className="zoom-button">
        <button
          className="zoomIn-button"
          onClick={() => tranformRef.current?.zoomIn()}
        >
          +
        </button>
        <button
          className="zoomOut-button"
          onClick={() => tranformRef.current?.zoomOut()}
        >
          -
        </button>
        <button
          className="zoomReset-button"
          onClick={() => tranformRef.current?.resetTransform()}
        >
          Reset
        </button>
      </div>
      <TransformWrapper ref={tranformRef}>
        <TransformComponent
          wrapperStyle={{ width: "100%", height: "100%" }}
          contentStyle={{ width: "100%", height: "100%" }}
        >
          <ReactSVG
            src="./scheme2-01-1.svg"
            className="scheme1"
            onClick={handleClick} 
            beforeInjection={(svg) => {
              const textElement = svg.querySelector("#oilСonsumption");
              if (textElement) {
                textElement.textContent = count;
              }

              const useElements = svg.querySelectorAll("use");
              useElements.forEach((el) => {
                el.addEventListener("click", handleClick);
                el.style.cursor = "pointer";
              })
            }}
          />
        </TransformComponent>
      </TransformWrapper>
    </div>
  );
}
// import "./BodyScheme.css";
// import { ReactSVG } from "react-svg";
// import { useRef, useState } from "react";
// import { TransformComponent, TransformWrapper } from "react-zoom-pan-pinch";

// import paramertData from "../../../components/Graphic/ParametrList/ParamertData.json";

// export default function BodyScheme({setIsOpen, setParamerts}) {
//   const [count, setCount] = useState(0);
//   const tranformRef = useRef(null);

//   const handleClick = (event) => {
//     if (event.target.tagName === "use") {
      
//       const objectId = event.target.getAttribute("id");
//       console.log(objectId);


//       if (objectId && paramertData[objectId]) {
//         const params = paramertData[objectId];
//         console.log(params);

//         setParamerts(params);
//         // const {name, unit} = paramertData[objectId];
//         // setParamerts({name, unit});
//         setIsOpen(true);

//       } else {
//         console.warn("Параметры не найдены:", objectId);
//       }
//     }
//   };

//   return (
//     <div className="body-scheme">
//       <button className="table_plus" onClick={() => setCount(count + 1)}>
//         +
//       </button>
//       <div className="zoom-button">
//         <button
//           className="zoomIn-button"
//           onClick={() => tranformRef.current?.zoomIn()}
//         >
//           +
//         </button>
//         <button
//           className="zoomOut-button"
//           onClick={() => tranformRef.current?.zoomOut()}
//         >
//           -
//         </button>
//         <button
//           className="zoomReset-button"
//           onClick={() => tranformRef.current?.resetTransform()}
//         >
//           Reset
//         </button>
//       </div>
//       <TransformWrapper ref={tranformRef}>
//         <TransformComponent
//           wrapperStyle={{ width: "100%", height: "100%" }}
//           contentStyle={{ width: "100%", height: "100%" }}
//         >
//           <ReactSVG
//             src="./scheme2-01-1.svg"
//             className="scheme1"
//             onClick={handleClick} 
//             beforeInjection={(svg) => {
//               const textElement = svg.querySelector("#oilСonsumption");
//               if (textElement) {
//                 textElement.textContent = count;
//               }

//               const useElements = svg.querySelectorAll("use");
//               useElements.forEach((el) => {
//                 el.addEventListener("click", handleClick);
//                 el.style.cursor = "pointer";
//               })
//             }}
//           />
//         </TransformComponent>
//       </TransformWrapper>
//     </div>
//   );
// }
// import "./BodyScheme.css";
// import { ReactSVG } from "react-svg";
// import { useRef, useState } from "react";
// import { TransformComponent, TransformWrapper } from "react-zoom-pan-pinch";

// // function handleClick(event) {
// //   if (event.target.tagName === "use") {
// //     const url = event.target.getAttribute("data-url");
// //     if (url) {
// //       window.location.href = url; // Переход на другую страницу
// //     }
// //   }
// // }


// export default function BodyScheme({setIsOpen}) {
//   const [count, setCount] = useState(0);
//   const tranformRef = useRef(null);

//   const handleClick = (event) => {
//     if (event.target.tagName === "use") {
//       setIsOpen(true);
//     }
//   };

//   return (
//     <div className="body-scheme">
//       <button className="table_plus" onClick={() => setCount(count + 1)}>
//         +
//       </button>
//       <div className="zoom-button">
//         <button
//           className="zoomIn-button"
//           onClick={() => tranformRef.current?.zoomIn()}
//         >
//           +
//         </button>
//         <button
//           className="zoomOut-button"
//           onClick={() => tranformRef.current?.zoomOut()}
//         >
//           -
//         </button>
//         <button
//           className="zoomReset-button"
//           onClick={() => tranformRef.current?.resetTransform()}
//         >
//           Reset
//         </button>
//       </div>
//       <TransformWrapper ref={tranformRef}>
//         <TransformComponent
//           wrapperStyle={{ width: "100%", height: "100%" }}
//           contentStyle={{ width: "100%", height: "100%" }}
//         >
//           {/* <ReactSVG
//             src="./scheme2-01-1.svg"
//             className="scheme1"
//             onClick={handleClick} 
//             beforeInjection={(svg) => {
//               const textElement = svg.querySelector("#oilСonsumption");
//               if (textElement) {
//                 textElement.textContent = count;
//               }
//             }}
//           /> */}
//           <ReactSVG
//             src="./scheme2-01-1.svg"
//             className="scheme1"
//             onClick={handleClick} 
//             beforeInjection={(svg) => {
//               const textElement = svg.querySelector("#oilСonsumption");
//               if (textElement) {
//                 textElement.textContent = count;
//               }

//               const useElements = svg.querySelectorAll("use");
//               useElements.forEach((el) => {
//                 el.addEventListener("click", handleClick);
//               })
//             }}
//           />
//         </TransformComponent>
//       </TransformWrapper>
//     </div>
//   );
// }
