import { useState } from "react";
import "./styles.css";
import { DateTime } from "luxon";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const [steps, setSteps] = useState(1);

  const currentDate = DateTime.local().plus({ day: counter });

  const CounterField = ({
    fieldName,
    fieldValue,
    addHandler,
    removeHandler,
  }) => {
    return (
      <div>
        <button onClick={removeHandler}>-</button>
        <span style={{ fontSize: "30px" }}>
          {fieldName}: {fieldValue}
        </span>
        <button onClick={addHandler}>+</button>
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
    const formatedDate = currentDate.toLocaleString({
      weekday: "short",
      month: "short",
      day: "2-digit",
      year: "numeric",
    });

    const dateSentence = (counter) => {
      let sentence = "noData";

      if (counter === 0) {
        sentence = `Today is `;
      }

      if (counter === 1) {
        sentence = `${counter} day from today is `;
      }

      if (counter > 1) {
        sentence = `${counter} days from today is `;
      }

      if (counter === -1) {
        sentence = `${counter} day ago was `;
      }

      if (counter < -1) {
        sentence = `${counter} days ago was `;
      }

      return sentence;
    };

    return (
      <div>
        <span>
          {`${dateSentence(counter)}`} {`${formatedDate}`}
        </span>
      </div>
    );
  };

  return (
    <>
      <div className="counter">
        <CounterField
          fieldName="Steps"
          fieldValue={steps}
          addHandler={handleAddSteps}
          removeHandler={handleRemoveSteps}
        />
        <CounterField
          fieldName="Count"
          fieldValue={counter}
          addHandler={handleAddCount}
          removeHandler={handleRemoveCount}
        />
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
