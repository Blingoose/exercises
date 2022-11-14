import React, { useState, useEffect } from "react";
import Map from "./Map";
import Input from "./Input";
import "./Main.css";
import axios from "axios";

function Main() {
  const [arrOfObj, setArrOfObj] = useState(null);
  const [searchInput, setSearchInput] = useState("");

  const destructData = (arrOfObj) => {
    return arrOfObj.map((person) => {
      return {
        name: `${person.name.first} ${person.name.last}`,
        img: person.picture.large,
      };
    });
  };

  //   useEffect(() => {
  //     axios
  //       .get('https://randomuser.me/api/?results=10')
  //       .then(({ data }) => {
  //         setAvatarsArr(destructData(data.results));
  //       })
  //       .catch((e) => {
  //         console.log(e);
  //       });
  //   }, []);

  useEffect(() => {
    const fetchData = async (setArr, destruct) => {
      const { data } = await axios.get("https://randomuser.me/api/?results=10");
      setArr(destruct(data.results));
    };
    fetchData(setArrOfObj, destructData);
  }, []);

  const handleInput = (event) => {
    setSearchInput(event.target.value);
  };

  //   console.log(arrOfObj);
  return (
    <div>
      <div className="input">
        <Input onSearch={handleInput}></Input>
      </div>
      <div className="main-container">
        {arrOfObj && <Map personsArr={arrOfObj} inputValue={searchInput} />}
      </div>
    </div>
  );
}

export default Main;
