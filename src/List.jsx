import React from "react";
import { data } from "./script/data";

const List = () => {
  return (
    <div>
      {data.map((item, index) => (
        <div key={index}>{item}</div>
      ))}
    </div>
  );
};

export default List;
