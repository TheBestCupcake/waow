import { Link } from "react-router-dom";
import GridList from "../../components/GridList";

type NavItem = {
  label: string;
  to: string;
  img?: string;
};

function Barony_NPCs() {
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
        <h1>NPC</h1>
      </div>

      <div className="barony">
        <h1>NPCs</h1>

        <h2>Normal</h2>
        <p>
          Denizens are the various creatures that inhabit the world of Barony,
          many of which the player will encounter throughout their adventure.
          They may be hostile, neutral, or friendly toward the player, depending
          on the player’s race. If a denizen is on friendly terms, it may be
          possible to recruit them as a follower. Additional information about
          denizens, including lore and statistics, can also be found in-game via
          the Compendium.{" "}
        </p>

        <h2>Champions</h2>
        <p>
          Some denizens have miniboss variants, referred to as Champions, which
          typically feature improved stats, additional loot, and a unique
          appearance. Certain Champions may also spawn with a group of
          followers. Some variants are predetermined spawns and can only be
          encountered on specific dungeon floors.{" "}
        </p>

        <h2>Bosses</h2>
        <p>
          Bosses are exceptionally powerful enemies found on specific dungeon
          floors. Each functions as a final boss, and defeating one will trigger
          its corresponding ending.{" "}
        </p>
      </div>

      <div className="baronyGrid">
        <h1>List of NPCs</h1>

        <h2>Normal</h2>
        <ul>
          <GridList
            items={items}
            getKey={(item) => item.to}
            renderItem={(item) => (
              <Link className="gridLink" to={item.to}>
                <b>{item.label}</b>
              </Link>
            )}
          ></GridList>
        </ul>

        <h2>Champions</h2>
        <ul>
          <GridList
            items={items}
            getKey={(item) => item.to}
            renderItem={(item) => (
              <Link className="gridLink" to={item.to}>
                <b>{item.label}</b>
              </Link>
            )}
          ></GridList>
        </ul>

        <h2>Bosses</h2>
        <ul>
          <GridList
            items={items}
            getKey={(item) => item.to}
            renderItem={(item) => (
              <Link className="gridLink" to={item.to}>
                <b>{item.label}</b>
              </Link>
            )}
          ></GridList>
        </ul>
      </div>
    </div>
  );
}

export default Barony_NPCs;
