import { useState } from "react";

const TextExpander = ({
  children,
  collapsedNumWords,
  expandButtonText,
  collapseButtonText,
  buttonColor,
  expanded,
  className,
  text,
}) => {
  const [isExpanded, setIsExpanded] = useState(expanded);

  const resumeText = (text) => {
    return `${text.slice(0, collapsedNumWords)}...`;
  };

  const handleToggleSentence = () => {
    setIsExpanded((s) => !s);
  };

  return (
    <div className={className}>
      {isExpanded ? text : resumeText(text)}{" "}
      <button
        style={{ color: `${buttonColor}` }}
        onClick={handleToggleSentence}
      >
        {isExpanded ? collapseButtonText : expandButtonText}
      </button>
    </div>
  );
};

export default TextExpander;
