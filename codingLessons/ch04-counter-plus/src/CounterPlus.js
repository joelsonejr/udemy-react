import { DateTime } from "luxon";
import "./styles.css";
import { useState } from "react";

const CounterPlus = () => {
  const [step, setStep] = useState(1);
  const [counter, setCounter] = useState(0);

  const currentDate = DateTime.local().plus({ day: counter });

  const handleAddCounter = () => {
    setCounter((c) => c + step);
  };

  const handleRemoveCounter = () => {
    setCounter((c) => c - step);
  };

  const handleReset = () => {
    setCounter(0);
    setStep(1);
  };

  const StepSlider = () => {
    return (
      <div className="slider">
        <input
          type="range"
          min="1"
          max="10"
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        />{" "}
        <span>Step: {step}</span>
      </div>
    );
  };

  const DayRange = () => {
    return (
      <div>
        <button onClick={handleRemoveCounter}>-</button>
        <input
          type="text"
          value={counter}
          onChange={(e) => setCounter(Number(e.target.value))}
        />
        <button onClick={handleAddCounter}>+</button>
      </div>
    );
  };

  const DateDisplay = () => {
    const formatedDate = currentDate.toLocaleString({
      weekday: "short",
      month: "short",
      day: "2-digit",
      year: "numeric",
    });

    const dateSentence = (counter) => {
      let sentence = "invalidData";

      switch (true) {
        case counter === 0:
          sentence = `Today is `;
          break;

        case counter === 1:
          sentence = `${counter} day from today is `;
          break;

        case counter > 1:
          sentence = `${counter} days from today is `;
          break;

        case counter === -1:
          sentence = `${Math.abs(counter)} day ago was `;
          break;

        case counter < -1:
          sentence = `${Math.abs(counter)} days ago was `;
          break;

        default:
          break;
      }

      return sentence;
    };

    return (
      <div className="display">
        <span>
          {`${dateSentence(counter)}`} {`${formatedDate}`}
        </span>
      </div>
    );
  };

  const ResetButton = () => {
    return (
      <div>
        <button className="resetButton" onClick={handleReset}>
          Reset
        </button>
      </div>
    );
  };

  return (
    <div className="counter">
      <StepSlider />
      <DayRange />
      <DateDisplay />
      {step !== 1 || counter !== 0 ? <ResetButton /> : null}
    </div>
  );
};

export default CounterPlus;
