import "./AlertList.css";
import AlertItem from "../AlertItem/AlertItem";
import alertData from "./AlertData.json";
import { format } from "date-fns";

const parsedData = alertData.map((data) => ({
  ...data,
  datatime: new Date(data.datatime),
}));

const formatDate = (date) => format(date, "dd-MM-yyyy HH:mm");

export default function AlertList() {
  return (
    <div className="alert-list">
      <AlertItem
        name={parsedData[0].name}
        datatime={formatDate(parsedData[0].datatime)}
        message={parsedData[0].message}
      />
    </div>
  );
}
