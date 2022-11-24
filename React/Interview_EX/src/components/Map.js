import React, { useContext } from "react";
import { sendContext } from "../App";
import ListItem from "./ListItem/ListItem";

const Map = () => {
  const { itemData } = useContext(sendContext);
  //   console.log(itemData);

  return (
    <div>
      {itemData &&
        itemData.map((item, i) => (
          <ListItem key={i} itemData={item}></ListItem>
        ))}
    </div>
  );
};

export default Map;
