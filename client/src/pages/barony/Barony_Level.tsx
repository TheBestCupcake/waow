import { useParams } from "react-router-dom";
import { levels } from "../../data/levels";

function Barony_Level() {
  const { level: levelName } = useParams();

  const levelInfo = levels.find(
    (le) => le.id.toLowerCase() == levelName?.toLowerCase(),
  );

  if (!levelInfo) {
    return <h1>Level not found</h1>;
  }

  return (
    <div className="baronyGrid">
      <h1>{levelInfo.id}</h1>

      {levelInfo.levelSections.map((section) => (
        <>
          <h2>{section.sectionName}</h2>
          {section.sectionContent}
        </>
      ))}
    </div>
  );
}

export default Barony_Level;
