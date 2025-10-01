const CostInput = ({ inputValue, onValueChange }) => {
  return (
    <p>
      <span>How much was the bill?</span>
      <input
        type="number"
        placeholder=""
        value={inputValue}
        onChange={(e) => onValueChange(e.target.value)}
      />
    </p>
  );
};

export default CostInput;
