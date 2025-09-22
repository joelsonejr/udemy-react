import { useState } from "react";
import "./styles.css";

const questions = [
  {
    id: 3457,
    question: "What language is React based on?",
    answer: "JavaScript",
  },
  {
    id: 7336,
    question: "What are the building blocks of React apps?",
    answer: "Components",
  },
  {
    id: 8832,
    question: "What's the name of the syntax we use to describe a UI in React?",
    answer: "JSX",
  },
  {
    id: 1297,
    question: "How to pass data from parent to child components?",
    answer: "Props",
  },
  {
    id: 9103,
    question: "How to give components memory?",
    answer: "useState hook",
  },
  {
    id: 2002,
    question:
      "What do we call an input element that is completely synchronised with state?",
    answer: "Controlled element",
  },
];

function App() {
  return (
    <div className="App">
      <FlashCards />
    </div>
  );
}

const FlashCards = () => {
  const [selectedId, setSelectedId] = useState(null);

  const handleClick = (id) => {
    if (id === selectedId) {
      setSelectedId(null);
      return;
    }

    setSelectedId(id);
  };

  const Card = ({ content }) => {
    return (
      <div
        key={content.id}
        className={content.id === selectedId ? "selected" : ""}
        onClick={() => handleClick(content.id)}
      >
        <p>{content.id === selectedId ? content.answer : content.question}</p>
      </div>
    );
  };

  return (
    <div className="flashcards">
      {questions.map((question) => (
        <Card content={question} key={question.id} />
      ))}
    </div>
  );
};

export default App;
