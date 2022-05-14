import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import CalcFrame from "./components/CalcFrame";
import Button from "./components/Button";

function App() {
  const [x1, setx1] = useState("");
  const [x2, setx2] = useState("");
  const [op, setOp] = useState("");
  const [calcText, setCalcText] = useState("");
  const [first, setFirst] = useState(true);
  const calcClear = () => {
    setx1("");
    setx2("");
    setOp("");
    setFirst(true);
    setCalcText("");
  };
  const addVal = (e) => {
    if (first) {
      setCalcText("");
      setFirst(false);
    }
    if (String(x1).length >= 7 || String(x2).length >= 7) {
      setCalcText("size err");
      setx1("");
      setx2("");
      setOp("");
      setFirst(true);
      return;
    }
    op
      ? setx2((prevx2) => prevx2 + e.target.value)
      : setx1((prevx1) => prevx1 + e.target.value);
    setCalcText((prevText) => prevText + e.target.value);
  };
  const addOp = (e) => {
    setOp(e.target.value);
    setCalcText("");
  };
  const Res = () => {
    switch (op) {
      case "+":
        setCalcText(parseFloat(x1) + parseFloat(x2));
        setx1("");
        setx2("");
        setOp("");
        setFirst(true);
        break;
      case "-":
        setCalcText(parseFloat(x1) - parseFloat(x2));
        setx1("");
        setx2("");
        setOp("");
        setFirst(true);
        break;
      case "*":
        setCalcText(parseFloat(x1) * parseFloat(x2));
        setx1("");
        setx2("");
        setOp("");
        setFirst(true);
        break;
      case "/":
        if (x2 === 0) {
          setCalcText(":(");
          setx1("");
          setx2("");
          setOp("");
          setFirst(true);
          break;
        } else {
          setCalcText(parseFloat(x1) / x2);
          setx1("");
          setx2("");
          setOp("");
          setFirst(true);
          break;
        }
      default:
        setx1("");
        setx2("");
        setOp("");
        setFirst(true);
    }
  };
  return (
    <div className="App">
      <Header title="MyCalculator" />
      <div className="bounding-box">
        <div className="top-container">
          <Button
            text="C"
            value="C"
            onClick={calcClear}
            color="brown"
            className="c-btn"
          />
          <span className="box2">{calcText}</span>
        </div>
        <CalcFrame className="box2" addVal={addVal} addOp={addOp} Res={Res} />
      </div>
    </div>
  );
}

export default App;
