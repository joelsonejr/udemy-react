import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

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
      <Skill skill="Ux" emoji="👶" color="blue" />
      <Skill skill="React" emoji="👶" color="orangered" />
      <Skill skill="C#" emoji="👶" color="purple" />
      <Skill skill="SQL" emoji="👶" color="gray" />
    </div>
  );
};

const Skill = (props) => {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
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
