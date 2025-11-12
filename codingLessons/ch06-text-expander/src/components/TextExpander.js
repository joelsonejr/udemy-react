import { useState } from "react";

const TextExpander = ({
  collapsedNumWords = 10,
  expandButtonText = "Show more",
  collapseButtonText = "Show less",
  buttonColor = "#1e06d6ff",
  expanded = false,
  text = "no message defined",
  className,
}) => {
  const buttonStyle = {
    background: "none",
    border: "none",
    font: "inherit",
    cursor: "pointer",
    marginLeft: "6px",
    color: buttonColor,
  };

  const [isExpanded, setIsExpanded] = useState(expanded);

  const handleToggleSentence = () => {
    setIsExpanded((s) => !s);
  };

  const resumeText = (text) => {
    const resume =
      text.split(" ").slice(0, collapsedNumWords).join(" ") + "...";

    return resume;
  };

  const displayText = isExpanded ? text : resumeText(text);
  const buttonText = isExpanded ? collapseButtonText : expandButtonText;

  return (
    <div className={className}>
      <span>{displayText}</span>
      <button style={buttonStyle} onClick={handleToggleSentence}>
        {buttonText}
      </button>
    </div>
  );
};

export default TextExpander;
