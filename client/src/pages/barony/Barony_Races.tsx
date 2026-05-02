import { Link } from "react-router-dom";
import GridTable from "../../components/GridTable";

type NavItem = {
  label: string;
  to: string;
  img?: string;
};

function Barony_Races() {
  const items: NavItem[] = [
    { label: "Human", to: "/Barony/Races/Human" },
    { label: "Skeleton", to: "/Barony/Races/Skeleton" },
    { label: "Vampire", to: "/Barony/Races/Vampire" },
    { label: "Succubus", to: "/Barony/Races/Succubus" },
    { label: "Goatman", to: "/Barony/Races/Goatman" },
    { label: "Automaton", to: "/Barony/Races/Automaton" },
    { label: "Incubus", to: "/Barony/Races/Incubus" },
    { label: "Goblin", to: "/Barony/Races/Goblin" },
    { label: "Insectoid", to: "/Barony/Races/Insectoid" },
    { label: "Gnome", to: "/Barony/Races/Gnome" },
    { label: "Gremlin", to: "/Barony/Races/Gremlin" },
    { label: "Dryad", to: "/Barony/Races/Dryad" },
    { label: "Myconid", to: "/Barony/Races/Myconid" },
    { label: "Salamander", to: "/Barony/Races/Salamander" },
  ];

  return (
    <div className="baronyContainer">
      <div className="baronyHeader">
        <h1>Races</h1>
      </div>

      <div className="barony">
        <h1>Description</h1>

        <p>
          Humans are the default race and the only playable option in the base
          game. The Myths and Outcasts, Legends and Pariahs, and Deserters and
          Disciples DLCs add additional non-human monster races. Each race has
          unique traits that affect gameplay, as well as how certain objects and
          NPCs interact with the player. Some races also have innate spells.
          When selecting a non-human race, players may choose to disable that
          race’s abilities, allowing them to use the race’s appearance while
          functionally playing as a human.{" "}
        </p>

        <br />

        <p>
          The Polymorph effect temporarily transforms the player into another
          race. Monster races will always polymorph into humans, allowing
          interaction with NPCs such as shopkeepers. The effect ends early if
          the player comes into contact with water or drinks water.
        </p>
      </div>

      <div className="baronyGrid">
        <h1>List of Races</h1>
        <ul>
          <GridTable
            items={items}
            getKey={(item) => item.to}
            renderItem={(item) => (
              <Link className="gridLink" to={item.to}>
                <b>{item.label}</b>
              </Link>
            )}
          ></GridTable>
        </ul>
      </div>
    </div>
  );
}

export default Barony_Races;
