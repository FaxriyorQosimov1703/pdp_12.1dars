import { useState, createContext } from "react";
import FirstComponent from "./Components/FistComponent";
import SecondComponent from "./Components/SecondComponent";
import "bootstrap/dist/css/bootstrap.min.css";

export const MyValue = createContext();
function App() {
  const [counta, setCounta] = useState(0);
  const [countbbb, setCountbbb] = useState(0);
  const [countc, setCountc] = useState(0);
  const [countd, setCountd] = useState(0);

  function onChangeCount() {
    setCounta((c) => c + 1);
    setCountbbb((c) => c + 1);
    setCountc((c) => c + 1);
    setCountd((c) => c + 1);
  }

  function onRenoveCount() {
    setCounta((c) => c - 1);
    setCountbbb((c) => c - 1);
    setCountc((c) => c - 1);
    setCountd((c) => c - 1);
  }
  return (

    <MyValue.Provider
      value={{
        counta: counta,
        countbbb: countbbb,
        countc: countc,
        countd: countd,
        setCounta: setCounta,
        setCountbbb: setCountbbb,
        setCountc: setCountc,
        setCountd: setCountd,
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-md-4 offset-4">
            <button className="btn btn-dark mx-3" onClick={onChangeCount}>
              +
            </button>
            <button className="btn btn-dark" onClick={onRenoveCount}>
              -
            </button>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <FirstComponent />
          </div>
          <div className="col-md-6">
            <SecondComponent />
          </div>
        </div>
      </div>
    </MyValue.Provider>
  );
}

export default App;
