const Stats = ({ items }) => {
  if (!items.length) {
    return (
      <p className="stats">
        <em>Start adding some items to your packing list 🚀</em>
      </p>
    );
  }
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);

  const packingMessage = `🎒You have ${numItems} items on your list, and you already packed 
        ${numPacked} (${percentage}%)`;

  const doneMessage = "You got everything! Ready to go ✈️";

  return (
    <footer className="stats">
      <em>{percentage === 100 ? doneMessage : packingMessage}</em>
    </footer>
  );
};

export default Stats;
