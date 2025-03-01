import { useState } from 'react';
import "./BodyScheme.css";
import { ReactSVG } from "react-svg";

export default function BodyScheme() {
  const [count, setCount] = useState(0);

  return (
    <div className="body-scheme">
      <button onClick={() => setCount(count + 1)}>+</button>
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
    </div>
  );
}
