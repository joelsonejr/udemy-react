import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";
import { skills } from "./data";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

const Avatar = () => {
  return (
    <img
      className="avatar"
      src="https://avatars.githubusercontent.com/u/53396470?v=4"
      alt="Joelson"
    />
  );
};

const Intro = () => {
  return (
    <div>
      <h1>Joelson Junior</h1>
      <p>
        Sou um profissional da área de TI, na qual atuo como desenvolvedor de
        software. Graças a minhas experiências passadas pude desenvolver
        competências que contribuem para minha área de atuação como por exemplo
        gestão de equipes, capacidade de solução de problemas, team building e
        capacidade de adaptação.
      </p>
    </div>
  );
};

const SkillList = () => {
  return (
    <div className="skill-list">
      {skills.map((skill) => (
        <Skill skillData={skill} />
      ))}
    </div>
  );
};

const Skill = ({ skillData }) => {
  let skillEmoji;

  switch (skillData.level) {
    case "beginner":
      skillEmoji = "👶";
      break;
    case "intermediate":
      skillEmoji = "👍";
      break;
    case "advanced":
      skillEmoji = "💪";
      break;
    default:
      break;
  }

  return (
    <div className="skill" style={{ backgroundColor: skillData.color }}>
      <span>{skillData.skill}</span>
      <span>{skillEmoji}</span>
    </div>
  );
};

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

export default App;
