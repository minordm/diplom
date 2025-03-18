import "./BodyScheme.css";
import { ReactSVG } from "react-svg";
import { useRef, useState } from "react";
import { TransformComponent, TransformWrapper } from "react-zoom-pan-pinch";

function handleClick(event) {
  if (event.target.tagName === "use") {
    const url = event.target.getAttribute("data-url");
    if (url) {
      window.location.href = url; // Переход на другую страницу
    }
  }
}

export default function BodyScheme() {
  const [count, setCount] = useState(0);
  const tranformRef = useRef(null);

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
            }}
          />
        </TransformComponent>
      </TransformWrapper>
    </div>
  );
}
