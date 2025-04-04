import "./AlertList.css";
import AlertItem from "../AlertItem/AlertItem";
import alertData from "./AlertData.json";
import { format } from "date-fns";
import { useState } from 'react';

const parsedData = alertData.map((data) => ({
  ...data,
  datatime: new Date(data.datatime),
}));

const formatDate = (date) => format(date, "dd-MM-yyyy HH:mm");

const sortItems = (a, b) => {
  if (a.datatime < b.datatime) {
    return 1;
  } else {
    return -1;
  }
};

export default function AlertList() {
  // const [items, setItems] = useState(parsedData);

  // const addItems = item => {
  //   setItems(oldItems => [...oldItems, {
  //     name: item.name,
  //     datatime: item.datatime,
  //     message: item.message,
  //     id: Math.max(...oldItems.map(i => i.id)) + 1
  //   }])
  // }

  return (
    <div className="alert-list">
      {parsedData.sort(sortItems).map((el) => (
        <AlertItem
          name={el.name}
          datatime={formatDate(el.datatime)}
          message={el.message}
        />
      ))}
    </div>
  );
}
