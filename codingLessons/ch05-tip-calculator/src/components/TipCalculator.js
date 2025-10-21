import CostInput from "./CostInput";
import ServiceEvaluator from "./ServiceEvaluator";
import CalculatorReset from "./CalculatorReset";
import TipOutput from "./TipOutput";
import { useState } from "react";

const TipCalculator = () => {
  const [billValue, setBillValue] = useState("");
  const [userRating, setUserRating] = useState(0);
  const [friendRating, setFriendRating] = useState(0);

  const tipTotal = billValue * ((userRating + friendRating) / 2 / 100);

  const showElement = billValue > 0;

  const resetValues = () => {
    setBillValue("");
    setUserRating(0);
    setFriendRating(0);
  };

  return (
    <div className="App">
      <h1>Tip Calculator</h1>
      <CostInput inputValue={billValue} onSetBill={setBillValue} />
      <ServiceEvaluator tipValue={userRating} onSetValue={setUserRating}>
        <span>How did you like the service?</span>
      </ServiceEvaluator>
      <ServiceEvaluator tipValue={friendRating} onSetValue={setFriendRating}>
        <span>How did your friend like the service?</span>
      </ServiceEvaluator>
      {showElement && (
        <>
          <TipOutput billValue={billValue} tipValue={tipTotal} />
          <CalculatorReset onReset={resetValues} />
        </>
      )}
    </div>
  );
};

export default TipCalculator;
