const CalculatorReset = ({ onClick, showElement }) => {
  return <div>{showElement && <button onClick={onClick}>Reset</button>}</div>;
};

export default CalculatorReset;
