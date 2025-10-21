import { useState } from "react";
import AccordionItem from "./AccordionItem";

const Accordion = ({ data }) => {
  const [selectedItem, setSelectedItem] = useState("");

  const handleToggle = (title) => {
    if (selectedItem === `${title}`) {
      setSelectedItem("");
      return;
    }

    setSelectedItem(`${title}`);
  };

  return (
    <div className="accordion">
      {data.map((d, i) => (
        <AccordionItem
          num={i}
          title={d.title}
          text={d.text}
          clickHandler={handleToggle}
          isOpen={selectedItem}
          key={d.title}
        />
      ))}
    </div>
  );
};

export default Accordion;
