import AccordionItem from "./AccordionItem";

const Accordion = ({ data }) => {
  return (
    <div className="accordion">
      {data.map((d, i) => (
        <AccordionItem num={i} title={d.title} text={d.text} key={d.title} />
      ))}
    </div>
  );
};

export default Accordion;
