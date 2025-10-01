const TipOutput = ({ billValue, tipValue, showElement }) => {
  const tipAmount = Number(billValue) * (Number(tipValue) / 100);

  const totalCost = Number(billValue) + tipAmount;

  return (
    <div>
      {showElement && (
        <p
          style={{ fontWeight: "bold" }}
        >{`You pay $ ${totalCost} ($${billValue} + $${tipAmount} tip)`}</p>
      )}
    </div>
  );
};

export default TipOutput;
