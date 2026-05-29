import { Link } from "react-router-dom";
import CategoryTable from "../../components/CategoryTable";

type TableData = {
  label: string;
  to: string;
  img?: string;
};
type TableRow = {
  rowHeader: string;
  rowData: TableData[];
};

function Barony_NPCs() {
  const tableData: TableRow[] = [
    {
      rowHeader: "Humanoids",
      rowData: [
        { label: "Human", to: "/Barony/NPCs/Human" },
        { label: "Goblin", to: "/Barony/NPCs/Goblin" },
        { label: "Gnome", to: "/Barony/NPCs/Gnome" },
        { label: "Gnome Thief", to: "/Barony/NPCs/GnomeThief" },
        { label: "Shopkeeper", to: "/Barony/NPCs/Shopkeeper" },
        { label: "Mysterious Merchant", to: "/Barony/NPCs/MysteriousMerchant" },
      ],
    },
    {
      rowHeader: "Beasts",
      rowData: [
        { label: "Rat", to: "/Barony/NPCs/Rat" },
        { label: "Spider", to: "/Barony/NPCs/Spider" },
        { label: "Troll", to: "/Barony/NPCs/Troll" },
        { label: "Bat", to: "/Barony/NPCs/Bat" },
        { label: "Scorpion", to: "/Barony/NPCs/Scorpion" },
        { label: "Scarab", to: "/Barony/NPCs/Scarab" },
        { label: "Cockatrice", to: "/Barony/NPCs/Cockatrice" },
        { label: "Minotaur", to: "/Barony/NPCs/Minotaur" },
      ],
    },
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

        <CategoryTable
          data={tableData}
          renderItem={(item) => (
            <Link className="gridLink" to={item.to}>
              <b>{item.label}</b>
            </Link>
          )}
        />

        <h2>Champions</h2>

        <h2>Bosses</h2>
      </div>
    </div>
  );
}

export default Barony_NPCs;
