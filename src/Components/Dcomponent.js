import { useContext } from "react";
import { MyValue } from "../App";
function Dcomponent() {
  const myContext = useContext(MyValue);


  function dcomponentClicked() {
    myContext.setCountd(p=>p+1)
  }

  function dremoveClicked() {
    myContext.setCountd(p=>p+1)

  }

  return (
    <div>
      <h1>Count: {myContext.countd}</h1>
      <button className="btn btn-dark mx-3" onClick={dcomponentClicked}>
        +
      </button>
      <button className="btn btn-dark" onClick={dremoveClicked}>
        -
      </button>
    </div>
  );
}

export default Dcomponent;
