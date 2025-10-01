const CostInput = ({ inputValue, onSetBill }) => {
  return (
    <p>
      <label>How much was the bill?</label>
      <input
        type="text"
        placeholder="Bill value"
        value={inputValue}
        onChange={(e) => onSetBill(Number(e.target.value))}
      />
    </p>
  );
};

export default CostInput;
