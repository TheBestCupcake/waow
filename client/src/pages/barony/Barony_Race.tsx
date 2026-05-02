import { useParams } from "react-router-dom";

import { races } from "../../data/races";

function Barony_Race() {
  const { race: raceName } = useParams();

  const raceInfo = races.find(
    (ra) => ra.id.toLowerCase() == raceName?.toLowerCase(),
  );

  if (!raceInfo) {
    console.log(raceInfo);
    return <h1>Race not found</h1>;
  }

  return (
    <div className="baronyContainer">
      <div className="barony">
        <h1>{raceInfo.id}</h1>
      </div>

      <div className="baronyDescription">
        <h1>Description</h1>
        <p>{raceInfo.description}</p>
      </div>
    </div>
  );
}

export default Barony_Race;
