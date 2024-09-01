import "./App.css";

export default function App() {
  return (
    <div className="card">
      <Avatar origem="freeware.png" caption="Minha foto" />

      <div className="data">
        <Intro name="T'Challa" />
        <SkillList />
      </div>
    </div>
  );
}

const Avatar = (props) => {
  return <img className="avatar" src={props.origem} alt={props.caption} />;
};

const Intro = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries.
      </p>
    </div>
  );
};

const SkillList = () => {
  return (
    <div className="skill-list">
      <Skill skillName="JavaScript" emoji="👍🏿" color="red" />
      <Skill skillName="C#" emoji="👍🏿" color="orange" />
      <Skill skillName="React" emoji="👍🏿" color="yellow" />
      <Skill skillName="SQL" emoji="👍🏿" color="green" />
    </div>
  );
};

const Skill = (props) => {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.skillName}</span>
      <span>{props.emoji}</span>
    </div>
  );
};
