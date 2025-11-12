import "./styles.css";
import TextData from "./data/TextContent";
import TextExpander from "./components/TextExpander";

const App = () => {
  return (
    <div>
      {TextData.map((data) => (
        <TextExpander
          collapsedNumWords={data.collapsedNumWords}
          expandButtonText={data.expandText}
          collapseButtonText={data.collapsedText}
          buttonColor={data.buttonColor}
          expanded={data.expanded}
          text={data.text}
        />
      ))}
    </div>
  );
};

export default App;
