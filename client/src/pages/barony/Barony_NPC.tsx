import { useParams } from "react-router-dom";
import { npcs } from "../../data/npcs";
import JsonList from "../../components/JsonList";

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

      <div className="barony">
        <h1>{NPCInfo.id}</h1>

        <div className="baronyImageContainer">
          <img src={NPCInfo.image} />
        </div>

        <p>{NPCInfo.levelDescription}</p>

        <h2>Stats</h2>
        <div className="baronyStatGrid">
          <ul>
            <JsonList data={NPCInfo.stats}></JsonList>
          </ul>
        </div>

        <h2>Stats (hardcore)</h2>
        <div className="baronyStatGrid">
          <ul>
            <JsonList data={NPCInfo.hardcoreStats}></JsonList>
          </ul>
        </div>

        <h2>Damage Type Effectiveness</h2>
        <div className="baronyStatGrid">
          <ul>
            <JsonList data={NPCInfo.damageTypeEffectiveness}></JsonList>
          </ul>
        </div>

        <h2>Abilities</h2>
        <ul>
          {NPCInfo.abilities.map((ability) => (
            <li>{ability}</li>
          ))}
        </ul>

        <h2>Inventory</h2>
        <ul>
          {NPCInfo.inventory.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
      </div>

      <div className="baronyGrid">
        {NPCInfo.descriptionSections.map((section) => (
          <>
            <h2>{section.sectionName}</h2>
            {section.sectionContent}
          </>
        ))}
      </div>
    </div>
  );
}

export default Barony_NPC;
