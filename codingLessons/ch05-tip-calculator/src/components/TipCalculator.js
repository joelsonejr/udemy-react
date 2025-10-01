import CostInput from "./CostInput";
import ServiceEvaluator from "./ServiceEvaluator";
import CalculatorReset from "./CalculatorReset";
import TipOutput from "./TipOutput";
import { useState } from "react";

const TipCalculator = () => {
  const [billValue, setBillValue] = useState("");
  const [userRating, setUserRating] = useState("");
  const [friendRating, setFriendRating] = useState("");

  const handleUserRating = (value) => {
    setUserRating(value);
  };

  const handleFriendRating = (value) => {
    setFriendRating(value);
  };

  const tipTotal = (Number(userRating) + Number(friendRating)) / 2;

  const showElement = Number(billValue) !== 0;

  const resetValues = () => {
    setBillValue("0");
    setUserRating("0");
    setFriendRating("0");
  };

  return (
    <div className="App">
      <h1>Tip Calculator</h1>
      <CostInput inputValue={billValue} onValueChange={setBillValue} />
      <ServiceEvaluator tipValue={userRating} onTipChange={handleUserRating}>
        <span>How did you like the service?</span>
      </ServiceEvaluator>
      <ServiceEvaluator
        tipValue={friendRating}
        onTipChange={handleFriendRating}
      >
        <span>How did your friend like the service?</span>
      </ServiceEvaluator>
      <TipOutput
        billValue={billValue}
        tipValue={tipTotal}
        showElement={showElement}
      />
      <CalculatorReset onClick={resetValues} showElement={showElement} />
    </div>
  );
};

export default TipCalculator;
