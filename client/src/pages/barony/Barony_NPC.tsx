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
        <h1>Description</h1>
        <p>{NPCInfo.description}</p>

        <h2>Spawn Locations</h2>
        <ul>
          {NPCInfo.spawnLocations.map((location) => (
            <li>
              <b>{location}</b>
            </li>
          ))}
        </ul>

        <h2> Behaviour</h2>
        <p>{NPCInfo.behavior}</p>

        <h2>Loot</h2>
        <p>{NPCInfo.loot}</p>

        <h2>Affinity</h2>
        <p>{NPCInfo.affinity}</p>
      </div>
    </div>
  );
}

export default Barony_NPC;
