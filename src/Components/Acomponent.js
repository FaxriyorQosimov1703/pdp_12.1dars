import { useContext, useState } from "react";
import { MyValue } from "../App";
function Acomponent() {
  const myContext = useContext(MyValue);

  const [acount, setacount] = useState(myContext.counta)

  function acomponentClicked() {
   myContext.setCounta(p=>p+1)
  }

  function aremoveClicked() {
    myContext.setCounta(p=>p-1)
  }



  return (
    <div>
      <h1>Count: {myContext.counta}</h1>
      <button className="btn btn-dark mx-3" onClick={acomponentClicked}>
        +
      </button>
      <button className="btn btn-dark" onClick={aremoveClicked}>
        -
      </button>
    </div>
  );
}

export default Acomponent;
