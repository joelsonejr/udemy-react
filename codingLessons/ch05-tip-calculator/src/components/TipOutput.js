const TipOutput = ({ billValue, tipValue }) => {
  const totalCost = billValue + tipValue;

  return (
    <div>
      <h3>{`You pay $ ${totalCost} ($${billValue} + $${tipValue} tip)`}</h3>
    </div>
  );
};

export default TipOutput;
