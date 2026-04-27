import { useParams } from "react-router-dom";
import classData from "../../data/classes.json";
import JsonArrayList from "../../components/JsonArrayList";

function Barony_Class() {
  const { class: className } = useParams();

  const classInfo = classData.Classes.find(
    (cl) => cl.id.toLowerCase() == className?.toLowerCase(),
  );

  if (!classInfo) {
    return <h1>Class not found</h1>;
  }

  return (
    <div className="baronyContainer">
      <div className="barony">
        <h1>{classInfo.id}</h1>
        <p>{classInfo.Description}</p>
      </div>

      <div className="baronyDescription">
        <h1>Equipment</h1>
        <p>{classInfo.classInfo}</p>

        <JsonArrayList data={classInfo.startingEquipment} />
      </div>
    </div>
  );
}

export default Barony_Class;
