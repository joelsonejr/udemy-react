import { useState } from "react";
import "./styles.css";
import { DateTime } from "luxon";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const [steps, setSteps] = useState(1);

  const currentDate = DateTime.local().plus({ day: counter });

  const CounterField = ({ fieldName, fieldValue }) => {
    return (
      <div>
        <button onClick={handleRemoveCount}>-</button>
        <span style={{ fontSize: "30px" }}>
          {fieldName}: {fieldValue}
        </span>
        <button onClick={handleAddCount}>+</button>
      </div>
    );
  };

  const StepsField = ({ fieldName, fieldValue }) => {
    return (
      <div>
        <button onClick={handleRemoveSteps}>-</button>
        <span style={{ fontSize: "30px" }}>
          {fieldName}: {fieldValue}
        </span>
        <button onClick={handleAddSteps}>+</button>
      </div>
    );
  };

  const handleAddCount = () => {
    setCounter((c) => c + steps);
  };

  const handleRemoveCount = () => {
    setCounter((c) => c - steps);
  };

  const handleAddSteps = () => {
    setSteps((s) => s + 1);
  };

  const handleRemoveSteps = () => {
    if (steps > 1) {
      setSteps((s) => s - 1);
    }
  };

  const resetCounter = () => {
    setSteps(1);
    setCounter(0);
  };

  const DisplayDate = () => {
    return (
      <div>
        <span>
          {counter === 0 ? "Today" : `${counter} day(s) from today `} is{" "}
          {`${currentDate.toLocaleString({
            weekday: "short",
            month: "short",
            day: "2-digit",
            year: "numeric",
          })}`}
        </span>
      </div>
    );
  };

  return (
    <>
      <div className="counter">
        <StepsField fieldName="Steps" fieldValue={steps} />
        <CounterField fieldName="Count" fieldValue={counter} />
      </div>
      <div className="displayDate" style={{ marginTop: "30px" }}>
        <DisplayDate />
      </div>
      <div>
        <button className="resetButton" onClick={resetCounter}>
          Reset
        </button>
      </div>
    </>
  );
};

export default Counter;
