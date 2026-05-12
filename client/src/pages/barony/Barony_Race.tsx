import { useParams } from "react-router-dom";

import { races } from "../../data/races";
import JsonArrayList from "../../components/JsonArrayList";

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

        <div className="baronyImageContainer">
          <img src={raceInfo.characterImage} />
        </div>

        <p>{raceInfo.characterImageDescription}</p>

        <JsonArrayList data={raceInfo.features} />
      </div>

      <div className="baronyDescription">
        <h1>Description</h1>
        <p>{raceInfo.description}</p>

        <h2>{raceInfo.gimmickName}</h2>
        <p>{raceInfo.gimmick}</p>

        <h2>Social Standings</h2>
        <p>{raceInfo.standings}</p>
      </div>
    </div>
  );
}

export default Barony_Race;
