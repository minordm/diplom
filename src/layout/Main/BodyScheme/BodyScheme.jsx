import { useState, useRef } from 'react';
import "./BodyScheme.css";
import { ReactSVG } from "react-svg";
import { TransformComponent, TransformWrapper } from 'react-zoom-pan-pinch';

export default function BodyScheme() {
  const [count, setCount] = useState(0);
  const tranformRef = useRef(null);

  return (
    <div className="body-scheme">
      <button onClick={() => setCount(count + 1)}>+</button>
      <div className='zoom-button'>
        <button className='zoomIn-button' onClick={() => tranformRef.current?.zoomIn()} >+</button>
        <button className='zoomOut-button' onClick={() => tranformRef.current?.zoomOut()}>-</button>
        <button className='zoomReset-button' onClick={() => tranformRef.current?.resetTransform()}>Reset</button>
      </div>
      <TransformWrapper ref={tranformRef} >
        <TransformComponent>
          <ReactSVG
            src="./scheme2-01-1.svg"
            className="scheme1"
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
