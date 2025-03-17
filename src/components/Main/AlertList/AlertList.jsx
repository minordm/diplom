import "./AlertList.css";
import AlertItem from "../AlertItem/AlertItem";

export default function AlertList() {
  const data = [
    {
      name: "H-1",
      datatime: "12-02-2024 15:32",
      message:
        "Тревога: “Давление на приеме насоса Н-1 ниже предельного на 0,031 МПа. Обводненность нефти на СИКН 0,170%”" 
    },
    {
      name: "H-1",
      datatime: "12-02-2024 15:01",
      message:
        "Тревога: “Давление на приеме насоса Н-1 ниже предельного на 0,027 МПа. Обводненность нефти на СИКН 0,300%”" 
    },
    {
      name: "H-1",
      datatime: "12-02-2024 14:31",
      message:
        "Тревога: “Давление на приеме насоса Н-1 ниже предельного на 0,018 МПа. Обводненность нефти на СИКН 0,540%”" 
    },
    {
      name: "H-1",
      datatime: "12-02-2024 12:08",
      message:
        "Тревога: “Давление на приеме насоса Н-1 ниже предельного на 0,009 МПа. Обводненность нефти на СИКН 0,540%”" 
    },
  ];

  return (
    <div className="alert-list">
      <AlertItem
        name={data[0].name}
        datatime={data[0].datatime}
        message={data[0].message}
      />

      <AlertItem
        name={data[1].name}
        datatime={data[1].datatime}
        message={data[1].message}
      />

      <AlertItem
        name={data[2].name}
        datatime={data[2].datatime}
        message={data[2].message}
      />

      <AlertItem
        name={data[3].name}
        datatime={data[3].datatime}
        message={data[3].message}
      />

      <AlertItem
        name={data[0].name}
        datatime={data[0].datatime}
        message={data[0].message}
      />

      <AlertItem
        name={data[1].name}
        datatime={data[1].datatime}
        message={data[1].message}
      />

      <AlertItem
        name={data[2].name}
        datatime={data[2].datatime}
        message={data[2].message}
      />

      <AlertItem
        name={data[3].name}
        datatime={data[3].datatime}
        message={data[3].message}
      />
    </div>
  );
}