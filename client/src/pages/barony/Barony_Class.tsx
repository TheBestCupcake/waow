import { useParams } from "react-router-dom";
import JsonList from "../../components/JsonList";

import { classes } from "../../data/classes";

function Barony_Class() {
  const { class: className } = useParams();

  const classInfo = classes.find(
    (cl) => cl.id.toLowerCase() == className?.toLowerCase(),
  );

  if (!classInfo) {
    return <h1>Class not found</h1>;
  }

  return (
    <div className="baronyContainer">
      <div className="barony">
        <h1>{classInfo.id}</h1>
        <p>{classInfo.description}</p>

        <div className="baronyImageContainer">
          <img src={classInfo.characterImage} />
        </div>

        <p>{classInfo.characterImageDescription}</p>

        <h2>Information</h2>
        <div className="baronyStatGrid">
          <ul>
            <JsonList data={classInfo.information}></JsonList>
          </ul>
        </div>

        <h2>Stats</h2>
        <div className="baronyStatGrid">
          <ul>
            <JsonList data={classInfo.stats}></JsonList>
          </ul>
        </div>

        <h2>Skills</h2>
        <div className="baronyStatGrid">
          <ul>
            <JsonList data={classInfo.skills}></JsonList>
          </ul>
        </div>
      </div>

      <div className="baronyDescription">
        <h1>Equipment</h1>

        {classInfo.classSections.map((section) => (
          <>
            {section.sectionName != "" && <h2>{section.sectionName}</h2>}

            {section.sectionContent}
          </>
        ))}
      </div>
    </div>
  );
}

export default Barony_Class;
