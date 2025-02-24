import "./ParametrList.css";
import ParametrBlock from "../ParametrBlock/ParametrBlock";
import ParametrItem from "../ParametrItem/parametrItem";

function ParametrList() {
    const data = [
      { name: "Параметр", value: "Величина", unit: "Ед. изм." },
      { name: "Уровень нефти (факт)", value: "8,34", unit: "м" },
      { name: "Уровень воды (факт)", value: "1446,484", unit: "тыс.нм^3/сут" },
      { name: "Расход воды", value: "100,0", unit: "%" },
      { name: "Наличие воды", value: "49,963", unit: "т" },
    ];

    return (
      <div className="parametr_list">
        <ParametrItem
          name={data[0].name}
          value={data[0].value}
          unit={data[0].unit}
          isHead="yes"
        />

        <ParametrBlock name="Параметры нефти" />
        <ParametrItem
          name={data[1].name}
          value={data[1].value}
          unit={data[1].unit}
        />
        <ParametrItem
          name={data[2].name}
          value={data[2].value}
          unit={data[2].unit}
        />

        <ParametrBlock name="Параметры входного потока" />
        <ParametrItem
          name={data[3].name}
          value={data[3].value}
          unit={data[3].unit}
        />
        <ParametrItem
          name={data[4].name}
          value={data[4].value}
          unit={data[4].unit}
        />

        <ParametrBlock name="Параметры нефти" />
        <ParametrItem
          name={data[1].name}
          value={data[1].value}
          unit={data[1].unit}
        />
        <ParametrItem
          name={data[2].name}
          value={data[2].value}
          unit={data[2].unit}
        />

        <ParametrBlock name="Параметры входного потока" />
        <ParametrItem
          name={data[3].name}
          value={data[3].value}
          unit={data[3].unit}
        />
        <ParametrItem
          name={data[4].name}
          value={data[4].value}
          unit={data[4].unit}
        />

        <ParametrBlock name="Параметры нефти" />
        <ParametrItem
          name={data[1].name}
          value={data[1].value}
          unit={data[1].unit}
        />
        <ParametrItem
          name={data[2].name}
          value={data[2].value}
          unit={data[2].unit}
        />

        <ParametrBlock name="Параметры входного потока" />
        <ParametrItem
          name={data[3].name}
          value={data[3].value}
          unit={data[3].unit}
        />
        <ParametrItem
          name={data[4].name}
          value={data[4].value}
          unit={data[4].unit}
        />

        <ParametrBlock name="Параметры нефти" />
        <ParametrItem
          name={data[1].name}
          value={data[1].value}
          unit={data[1].unit}
        />
        <ParametrItem
          name={data[2].name}
          value={data[2].value}
          unit={data[2].unit}
        />

        <ParametrBlock name="Параметры входного потока" />
        <ParametrItem
          name={data[3].name}
          value={data[3].value}
          unit={data[3].unit}
        />
        <ParametrItem
          name={data[4].name}
          value={data[4].value}
          unit={data[4].unit}
        />
      </div>
    );
}

export default ParametrList;