import "./ParametrList.css";
import ParametrBlock from "../ParametrBlock/ParametrBlock";
import ParametrItem from "../ParametrItem/parametrItem";


export default function ParametrList({ paramertData }) {

  const data = Array.isArray(paramertData) ? paramertData : [];

  return (
    <div className="parametr_list">
      <ParametrBlock name="Параметры ёмкости" />

      {data.map((paramert, index) => (
        <ParametrItem
          key={index}
          name={paramert.name}
          value={paramert.value}
          unit={paramert.unit}
        />
      ))}
    </div>
  );
}
// import "./ParametrList.css";
// import ParametrBlock from "../ParametrBlock/ParametrBlock";
// import ParametrItem from "../ParametrItem/parametrItem";
// import GS from "./GS.json";

// const parametrData = GS.map((data) => ({
//   ...data
// }))



// export default function ParametrList() {

//     return (
//       <div className="parametr_list">
//         {/* {parametrData.map((el) => (
//           <ParametrItem 
//             name={el.name} 
//             value="0.150" 
//             unit={el.unit}
//           />
//         ))} */}
//         <ParametrBlock name="Параметры ёмкости" />
//         <ParametrItem 
//           name="Давление в ёмкости" 
//           value="0.150" 
//           unit="МПа" />

//         <ParametrItem 
//           name="Максимальное давление на входной гребенке" 
//           value="4414.8" 
//           unit="тыс.нм^3/сут" />

//         <ParametrItem 
//           name="Минимальное давление на входной гребенке" 
//           value="4414.8" 
//           unit="тыс.нм^3/сут" />

//         <ParametrItem 
//           name="Давление (факт)" 
//           value="0.082" 
//           unit="МПа" />

//         <ParametrItem 
//           name="Уровень жидкости (факт)" 
//           value="0" 
//           unit="м" />

//         <ParametrBlock name="Параметры входного потока" />
//         <ParametrItem 
//           name="Суммарный расход" 
//           value="0.0" 
//           unit="м^3/сут" />

//         <ParametrItem 
//           name="Расход нефти" 
//           value="0.0" 
//           unit="т/сут" />

//         <ParametrItem 
//           name="Расход воды" 
//           value="0.0" 
//           unit="м^3/сут" />

//         <ParametrItem 
//           name="Расход газа" 
//           value="0.811" 
//           unit="тыс.нм^3/сут" />

//         <ParametrItem 
//           name="Обводненность" 
//           value="0" 
//           unit="%" />

//         <ParametrItem 
//           name="Газовый фактор" 
//           value="0" 
//           unit="нм^3/м^3" />

//         <ParametrBlock name="Параметры выходного потока ГАЗ" />
//         <ParametrItem 
//           name="Суммарный расход" 
//           value="0.0"
//           unit="м^3/сут" />

//         <ParametrItem 
//           name="Расход нефти" 
//           value="0.0" 
//           unit="т/сут" />

//         <ParametrItem 
//           name="Расход воды" 
//           value="0.0" 
//           unit="м^3/сут" />

//         <ParametrItem 
//           name="Расход газа" 
//           value="0.811" 
//           unit="тыс.нм^3/сут" />

//         <ParametrItem 
//           name="Обводненность" 
//           value="0" 
//           unit="%" />

//         <ParametrItem 
//           name="Газовый фактор" 
//           value="0" 
//           unit="нм^3/м^3" />
//       </div>
//     );
// }