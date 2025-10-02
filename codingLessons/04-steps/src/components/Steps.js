import { useState } from "react";
import Button from "./Button";
import StepMessage from "./StepMessage";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

const Steps = () => {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  const handlePrevious = () => {
    if (step > 1) setStep((s) => s - 1);
  };

  const handleNext = () => {
    if (step < 3) setStep((s) => s + 1);
  };

  const handleIsOpen = () => {
    setIsOpen((is) => !is);
  };

  return (
    <div>
      <button className="close" onClick={handleIsOpen}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>
          <StepMessage step={step}>{messages[step - 1]}</StepMessage>
          <div className="buttons">
            <div>
              <Button
                bgColor={"#7950f2"}
                textColor={"#FFF"}
                onClick={handlePrevious}
              >
                👈🏿 Previous{" "}
              </Button>
            </div>
            <div>
              <Button
                bgColor={"#7950f2"}
                textColor={"#FFF"}
                onClick={handleNext}
              >
                {" "}
                Next 👉🏿{" "}
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Steps;
