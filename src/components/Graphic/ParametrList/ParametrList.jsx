import "./ParametrList.css";
import ParametrBlock from "../ParametrBlock/ParametrBlock";
import ParametrItem from "../ParametrItem/parametrItem";

export default function ParametrList() {
    const data = [
      { name: "Уровень нефти (факт)", value: "8,23", unit: "м" },
      { name: "Уровень воды (факт)", value: "0336,383", unit: "тыс.нм^2/сут" },
      { name: "Расход воды", value: "000,0", unit: "%" },
      { name: "Наличие воды", value: "39,962", unit: "т" },
    ];

    return (
      <div className="parametr_list">
        <ParametrBlock name="Параметры нефти" />
        <ParametrItem
          name={data[0].name}
          value={data[0].value}
          unit={data[0].unit}
        />
        <ParametrItem
          name={data[1].name}
          value={data[1].value}
          unit={data[1].unit}
        />

        <ParametrBlock name="Параметры входного потока" />
        <ParametrItem
          name={data[2].name}
          value={data[2].value}
          unit={data[2].unit}
        />
        <ParametrItem
          name={data[3].name}
          value={data[3].value}
          unit={data[3].unit}
        />

        <ParametrBlock name="Параметры нефти" />
        <ParametrItem
          name={data[0].name}
          value={data[0].value}
          unit={data[0].unit}
        />
        <ParametrItem
          name={data[1].name}
          value={data[1].value}
          unit={data[1].unit}
        />

        <ParametrBlock name="Параметры входного потока" />
        <ParametrItem
          name={data[2].name}
          value={data[2].value}
          unit={data[2].unit}
        />
        <ParametrItem
          name={data[3].name}
          value={data[3].value}
          unit={data[3].unit}
        />

        <ParametrBlock name="Параметры нефти" />
        <ParametrItem
          name={data[0].name}
          value={data[0].value}
          unit={data[0].unit}
        />
        <ParametrItem
          name={data[1].name}
          value={data[1].value}
          unit={data[1].unit}
        />

        <ParametrBlock name="Параметры входного потока" />
        <ParametrItem
          name={data[2].name}
          value={data[2].value}
          unit={data[2].unit}
        />
        <ParametrItem
          name={data[3].name}
          value={data[3].value}
          unit={data[3].unit}
        />

        <ParametrBlock name="Параметры нефти" />
        <ParametrItem
          name={data[0].name}
          value={data[0].value}
          unit={data[0].unit}
        />
        <ParametrItem
          name={data[1].name}
          value={data[1].value}
          unit={data[1].unit}
        />

        <ParametrBlock name="Параметры входного потока" />
        <ParametrItem
          name={data[2].name}
          value={data[2].value}
          unit={data[2].unit}
        />
        <ParametrItem
          name={data[3].name}
          value={data[3].value}
          unit={data[3].unit}
        />
      </div>
    );
}