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
  const normalTableData: TableRow[] = [
    {
      rowHeader: "Humanoids",
      rowData: [
        { label: "Human", to: "/Barony/NPCs/Human" },
        { label: "Goblin", to: "/Barony/NPCs/Goblin" },
        { label: "Gnome", to: "/Barony/NPCs/Gnome" },
        { label: "Gnome Thief", to: "/Barony/NPCs/Gnome_Thief" },
        { label: "Shopkeeper", to: "/Barony/NPCs/Shopkeeper" },
        {
          label: "Mysterious Merchant",
          to: "/Barony/NPCs/Mysterious_Merchant",
        },
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
    {
      rowHeader: "Beastfolk",
      rowData: [
        { label: "Insectoid", to: "/Barony/NPCs/Insectoid" },
        { label: "Bugbear", to: "/Barony/NPCs/Bugbear" },
        { label: "Kobold", to: "/Barony/NPCs/Kobold" },
        { label: "Goatman", to: "/Barony/NPCs/Goatman" },
      ],
    },
    {
      rowHeader: "Undead",
      rowData: [
        { label: "Skeleton", to: "/Barony/NPCs/Skeleton" },
        { label: "Ghoul", to: "/Barony/NPCs/Ghoul" },
        { label: "Enslaved Ghoul", to: "/Barony/NPCs/Enslaved_Ghoul" },
        { label: "Vampire", to: "/Barony/NPCs/Vampire" },
        { label: "Shadow", to: "/Barony/NPCs/Shadow" },
        { label: "Revenant Skull", to: "/Barony/NPCs/Revenant_Skull" },
      ],
    },
    {
      rowHeader: "Demonics",
      rowData: [
        { label: "Succubus", to: "/Barony/NPCs/Succubus" },
        { label: "Succubus Consort", to: "/Barony/NPCs/Succubus_Consorts" },
        { label: "Incubus", to: "/Barony/NPCs/Incubus" },
        { label: "Imp", to: "/Barony/NPCs/Imp" },
        { label: "Demon", to: "/Barony/NPCs/Demon" },
      ],
    },
    {
      rowHeader: "Constructs",
      rowData: [
        { label: "Automaton", to: "/Barony/NPCs/Automaton" },
        { label: "Crystal Golem", to: "/Barony/NPCs/Crystal_Golem" },
        { label: "Sentrybot", to: "/Barony/NPCs/Sentrybot" },
        { label: "Spellbot", to: "/Barony/NPCs/Spellbot" },
        { label: "Dummybot", to: "/Barony/NPCs/Dummybot" },
        { label: "Mimic", to: "/Barony/NPCs/Mimic" },
      ],
    },
    {
      rowHeader: "Elementals",
      rowData: [
        { label: "Slime", to: "/Barony/NPCs/Slime" },
        { label: "Earth Sprite", to: "/Barony/NPCs/Earth_Sprite" },
        { label: "Fire Sprite", to: "/Barony/NPCs/Fire_Sprite" },
      ],
    },
  ];

  const championTableData: TableRow[] = [
    {
      rowHeader: "Humanoids",
      rowData: [
        { label: "Potato King", to: "/Barony/NPCs/Potato_King" },
        { label: "Robin Hood", to: "/Barony/NPCs/Robin_Hood" },
        { label: "Merlin", to: "/Barony/NPCs/Merlin" },
        { label: "King Arthur", to: "/Barony/NPCs/King_Arthur" },
        { label: "Red Riding Hood", to: "/Barony/NPCs/Red_Riding_Hood" },
        { label: "Kali", to: "/Barony/NPCs/Kali" },
        { label: "Anansi", to: "/Barony/NPCs/Anansi" },
        { label: "Vishpala", to: "/Barony/NPCs/Vishpala" },
        { label: "Othello", to: "/Barony/NPCs/Othello" },
        { label: "Oya", to: "/Barony/NPCs/Oya" },
        {
          label: "Conan the Barbarian",
          to: "/Barony/NPCs/Conan_the_Barbarian",
        },
        { label: "ZAP Brigade", to: "/Barony/NPCs/ZAP_Brigade" },
      ],
    },
    {
      rowHeader: "Beast",
      rowData: [
        { label: "Algernon", to: "/Barony/NPCs/Algernon" },
        { label: "Shelob", to: "/Barony/NPCs/Shelob" },
        { label: "Thumpus The Troll", to: "/Barony/NPCs/Thumpus_The_Troll" },
        { label: "Skrabblag", to: "/Barony/NPCs/Skrabblag" },
        { label: "Xyggi", to: "/Barony/NPCs/Xyggi" },
      ],
    },
    {
      rowHeader: "Beastfolk",
      rowData: [{ label: "Gharbad", to: "/Barony/NPCs/Gharbad" }],
    },
    {
      rowHeader: "Undead",
      rowData: [
        { label: "Funny Bones", to: "/Barony/NPCs/Funny_Bones" },
        { label: "Coral Grimes", to: "/Barony/NPCs/Coral_Grimes" },
        { label: "Bram Kindly", to: "/Barony/NPCs/Bram_Kindly" },
        { label: "Artemisia", to: "/Barony/NPCs/Artemisia" },
        { label: "Baratheon", to: "/Barony/NPCs/Baratheon" },
      ],
    },
    {
      rowHeader: "Demonic",
      rowData: [
        { label: "Lilith", to: "/Barony/NPCs/Lilith" },
        { label: "Deu De'Breau", to: "/Barony/NPCs/Deu_De'Breau" },
      ],
    },
  ];

  const bossTableData: TableRow[] = [
    {
      rowHeader: "Floor 20",
      rowData: [{ label: "Baron Herx", to: "Barony/NPCs/Baron_Herx" }],
    },
    {
      rowHeader: "Floor 25",
      rowData: [{ label: "Baphomet", to: "Barony/NPCs/Baphomet" }],
    },
    {
      rowHeader: "Floor 35",
      rowData: [
        { label: "Erudyce", to: "Barony/NPCs/Erudyce" },
        { label: "Orpheus", to: "Barony/NPCs/Orpheus" },
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
          data={normalTableData}
          renderItem={(item) => (
            <Link className="gridLink" to={item.to}>
              <b>{item.label}</b>
            </Link>
          )}
        />

        <h2>Champions</h2>
        <CategoryTable
          data={championTableData}
          renderItem={(item) => (
            <Link className="gridLink" to={item.to}>
              <b>{item.label}</b>
            </Link>
          )}
        />

        <h2>Bosses</h2>
        <CategoryTable
          data={bossTableData}
          renderItem={(item) => (
            <Link className="gridLink" to={item.to}>
              <b>{item.label}</b>
            </Link>
          )}
        />
      </div>
    </div>
  );
}

export default Barony_NPCs;
