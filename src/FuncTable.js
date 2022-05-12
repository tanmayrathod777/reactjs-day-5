import React, { useState } from "react";
function TableFunction() {
  const [data, setData] = useState("");
  const [print, setPrint] = useState(false);
 const getData = (event) => {
    event.preventDefault();
    setData(event.target.value);
    setPrint(false);
    console.log(event.target.value);
  }
  return (
    <div>
      <h1>Your Good Name Is {print ? data : ""}</h1>
      <form>
        <lable>Name</lable>
        <input type="text" onChange={getData}></input>
        <button
          onClick={(event) => {
            event.preventDefault();
            setPrint(true);
          }}
        >
          Print Value
        </button>
      </form>
      <h1>{print}</h1>
    </div>
  );
}
export default TableFunction;
