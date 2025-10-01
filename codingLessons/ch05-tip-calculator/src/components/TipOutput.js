const TipOutput = ({ billValue, tipValue }) => {
  const totalCost = Number(billValue) + Number(tipValue);

  const isVisible = totalCost !== 0;

  return (
    <div>
      {
        <p
          style={{ fontWeight: "bold" }}
        >{`You pay $ ${totalCost} ($${billValue} + $${tipValue} tip)`}</p>
      }
    </div>
  );
};

export default TipOutput;
