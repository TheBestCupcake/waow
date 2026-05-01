import { useParams } from "react-router-dom";
import JsonArrayList from "../../components/JsonArrayList";
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

        <img src={classInfo.characterImage}></img>
        <p>A Human Barbarian</p>

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
        <p>{classInfo.classInfo}</p>

        <JsonArrayList data={classInfo.startingEquipment} />

        <h2>Strategy</h2>
        <p>Hi</p>
      </div>
    </div>
  );
}

export default Barony_Class;
