import { useParams } from "react-router-dom";
import { npcs } from "../../data/npcs";

function Barony_NPC() {
  const { NPC: npcName } = useParams();

  const NPCInfo = npcs.find(
    (npc) => npc.id.toLowerCase() == npcName?.toLowerCase(),
  );

  if (!NPCInfo) {
    console.log(NPCInfo);
    return <h1>NPC not found</h1>;
  }

  return (
    <div className="baronyContainer">
      <div className="baronyHeader">
        <h1>{NPCInfo.id}</h1>
      </div>

      <div className="barony"></div>

      <div className="baronyGrid"></div>
    </div>
  );
}

export default Barony_NPC;
