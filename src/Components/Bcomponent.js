import { useContext, useState } from "react";
import { MyValue } from "../App";
function Bcomponent() {
  const myContext = useContext(MyValue);

  function bcomponentClicked() {
    myContext.setCountbbb(p=>p+1)
  }

  function bremoveClicked() {
    myContext.setCountbbb(p=>p+1)
  }
  return (
    <div>
      <h1>Count: {myContext.countbbb}</h1>
      <button className="btn btn-dark mx-3" onClick={bcomponentClicked}>
        +
      </button>
      <button className="btn btn-dark" onClick={bremoveClicked}>
        -
      </button>
    </div>
  );
}

export default Bcomponent;
