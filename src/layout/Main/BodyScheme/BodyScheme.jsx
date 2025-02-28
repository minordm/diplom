import "./BodyScheme.css";

// function BodyScheme() {
//   return (
//     <div className="body-scheme">
//     </div>
//   );
// }

// export default BodyScheme;

import { ReactSVG } from "react-svg";

function BodyScheme() {
  return (
    <div className="body-scheme">
      <ReactSVG src="./scheme2-01.svg" className='scheme1' />
      {/* <img src="./scheme.svg" alt="barrel pic" /> */}
    </div>
  );
}

export default BodyScheme;