import "./Barrel.css";
import { useEffect, useState } from "react";

function Barrel() {
  const [gasHeight, setGasHeight] = useState("33%");
  const [oilHeight, setOilHeight] = useState("33%");
  const [waterHeight, setWaterHeight] = useState("33%");

  useEffect(() => {
    // Пример изменения высоты полосок
    setTimeout(() => {
      setGasHeight("20%");
      setOilHeight("50%");
      setWaterHeight("30%");
    }, 1000);
  }, []);

  return (
    <div className="barrel">
      <div className="barrel__head">
        <div className="barrel__head_txt">УРОВЕНЬ РАЗДЕЛА ФАЗ, М</div>
      </div>

      <div className="barrel__body">
        <div className="barrel__img">
          <img
            className="barrel__img_svg"
            src="./barrel.svg"
            alt="barrel pic"
          />
          <div className="barrel__level">
            <div className="barrel__level_gas" style={{ height: gasHeight }}></div>
            <div className="barrel__level_oil" style={{ height: oilHeight }}></div>
            <div className="barrel__level_water" style={{ height: waterHeight }}></div>
          </div>
        </div>

        <div className="barrel__level_panel">
          <div className="barrel__level_num">
            <div className="barrel__level_text">8,34</div>
            <div className="barrel__level_text">8,05</div>
          </div>

          <div className="barrel__level_name">
            <div className="barrel__level_text1">Газ</div>
            <div className="barrel__level_text1">Нефть</div>
            <div className="barrel__level_text1">Вода</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Barrel;