import { useContext, useState } from "react";
import { MyValue } from "../App";
function Ccomponent() {
  const myContext = useContext(MyValue);


  function ccomponentClicked() {
    myContext.setCountc(p=>p+1)
  }

  function cremoveClicked() {
    myContext.setCountc(p=>p-1)
  }
  return (
    <div>
      <h1>Count: {myContext.countc}</h1>

      <button className="btn btn-dark mx-3" onClick={ccomponentClicked}>
        +
      </button>
      <button className="btn btn-dark" onClick={cremoveClicked}>
        -
      </button>
    </div>
  );
}

export default Ccomponent;
