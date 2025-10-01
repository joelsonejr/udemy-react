import "./App.css";
import CostInput from "./components/CostInput";
import ServiceEvaluator from "./components/ServiceEvaluator";
import CalculatorReset from "./components/CalculatorReset";
import TipOutput from "./components/TipOutput";
import { useState } from "react";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [tipValue, setTipValue] = useState("");

  const handleTipChange = (value) => {
    const newTipValue = Number(tipValue) + Number(value) / 2;

    setTipValue(newTipValue);
  };

  const resetValues = () => {
    setInputValue("");
    setTipValue("");
  };

  return (
    <div className="App">
      <h1>Tip Calculator</h1>
      <CostInput inputValue={inputValue} onValueChange={setInputValue} />
      <ServiceEvaluator onTipChange={handleTipChange}>
        <span>How did you like the service?</span>
      </ServiceEvaluator>
      <ServiceEvaluator onTipChange={handleTipChange}>
        <span>How did your friend like the service?</span>
      </ServiceEvaluator>
      <TipOutput billValue={inputValue} tipValue={tipValue} />
      <CalculatorReset onClick={resetValues} />
    </div>
  );
}

export default App;
