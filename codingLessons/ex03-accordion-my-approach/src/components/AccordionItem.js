import "../style.css";

const AccordionItem = ({ num, title, text, clickHandler, isOpen }) => {
  return (
    <div
      className={`item ${isOpen === title ? "open" : ""}`}
      onClick={() => clickHandler(title)}
    >
      <p className="number">{num < 9 ? `0${num + 1}` : num + 1}</p>
      <p className="title">{title}</p>
      <p className="icon">{isOpen === title ? "-" : "+"}</p>
      {isOpen === title && <div className="content-box">{text}</div>}
    </div>
  );
};

export default AccordionItem;
