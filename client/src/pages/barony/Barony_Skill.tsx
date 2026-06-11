import { useParams } from "react-router-dom";
import { skills } from "../../data/skills";

function Barony_Skill() {
  const { skill: skillName } = useParams();

  const skillInfo = skills.find(
    (sk) => sk.id.toLowerCase() == skillName?.toLowerCase(),
  );

  if (!skillInfo) {
    console.log(skillInfo);
    return <h1>Race not found</h1>;
  }

  return (
    <div className="barony">
      <h1 style={{ textAlign: "center" }}>{skillInfo.id}</h1>

      {skillInfo.skillSections.map((section) => (
        <>
          <h2>{section.sectionName}</h2>
          {section.sectionContent.map((content) => content)}
        </>
      ))}
    </div>
  );
}

export default Barony_Skill;
