import { Link } from "react-router-dom";
import CategoryTable from "../../components/CategoryTable";

import Human_Icon from "../../../src/assets/Human_Landguard_Male_Icon.webp";
import Goblin_Icon from "../../../src/assets/Goblin_Male_Icon.webp";
import Gnome_Icon from "../../../src/assets/Gnome_Icon.webp";
import Shopkeeper_Icon from "../../../src/assets/Shopkeeper_Ally_Icon.webp";
import Mysterious_Merchant_Icon from "../../../src/assets/MysteriousMerchant_Ally_Icon.webp";
import Rat_Icon from "../../../src/assets/Rat_Icon.webp";
import Spider_Icon from "../../../src/assets/Spider_Icon.webp";
import Troll_Icon from "../../../src/assets/Troll_Icon.webp";
import Bat_Icon from "../../../src/assets/Bat_Ally_Icon.webp";
import Scorpion_Icon from "../../../src/assets/Scorpion_Icon.webp";
import Scarab_Icon from "../../../src/assets/Scarab_Icon.webp";
import Cockatrice_Icon from "../../../src/assets/Cockatrice_Icon.webp";
import Minotaur_Icon from "../../../src/assets/36px-Minotaur.webp";
import Insectoid_Icon from "../../../src/assets/Insectoid_Male_Icon.webp";
import Bugbear_Icon from "../../../src/assets/Bugbear_Icon.webp";
import Kobold_Icon from "../../../src/assets/Kobold_Icon.webp";
import Goatman_Icon from "../../../src/assets/Goatman_Male_Icon.webp";
import Skeleton_Icon from "../../../src/assets/Skeleton_Male_Icon.png";
import Ghoul_Icon from "../../../src/assets/Ghoul_Icon.webp";
import Vampire_Icon from "../../../src/assets/Vampire_Male_Icon.webp";
import Shadow_Icon from "../../../src/assets/Shadow_Ally_Icon.webp";
import Succubus_Icon from "../../../src/assets/Succubus_Icon.webp";
import Incubus_Icon from "../../../src/assets/Incubus_Icon.webp";
import Imp_Icon from "../../../src/assets/Imp_Icon.webp";
import Demon_Icon from "../../../src/assets/Demon_Icon.webp";
import Automaton_Icon from "../../../src/assets/Automaton_Male_Icon.webp";
import Crystal_Golem_Icon from "../../../src/assets/Crystal_Golem_Icon.webp";
import Sentrybot_Icon from "../../../src/assets/Sentrybot_Icon.webp";
import Spellbot_Icon from "../../../src/assets/Spellbot_Icon.webp";
import Dummybot_Icon from "../../../src/assets/Dummy_Bot_Icon.webp";
import Mimic_Icon from "../../../src/assets/24px-Mimic.webp";
import Slime_Icon from "../../../src/assets/Slime_Green_Icon.webp";

import Potato_King_Icon from "../../../src/assets/The_Potato_King_Icon.webp";
import Robin_Hood_Icon from "../../../src/assets/Robin_Hood_Icon.webp";
import Merlin_Icon from "../../../src/assets/Merlin_Icon.webp";
import King_Arthur_Icon from "../../../src/assets/King_Arthur_Icon.webp";
import Red_Riding_Hood_Icon from "../../../src/assets/Red_Riding_Hood_Icon.webp";
import Kali_Icon from "../../../src/assets/Kali_Icon.webp";
import Anansi_Icon from "../../../src/assets/Anansi_Icon.webp";
import Vishpala_Icon from "../../../src/assets/Vishpala_Icon.webp";
import Othello_Icon from "../../../src/assets/Othello_Icon.webp";
import Oya_Icon from "../../../src/assets/Oya_Icon.webp";
import Conan_the_Barbarian_Icon from "../../../src/assets/Conan_the_Barbarian_Icon.webp";
import ZAP_Brigade_Icon from "../../../src/assets/ZAP_Brigade_Icon.webp";
import Algernon_Icon from "../../../src/assets/Algernon_Icon.webp";
import Shelob_Icon from "../../../src/assets/Shelob_Icon.webp";
import Thumpus_The_Troll_Icon from "../../../src/assets/Thumpus_Icon.webp";
import Skrabblag_Icon from "../../../src/assets/Skrabblag_Icon.webp";
import Xyggi_Icon from "../../../src/assets/Xyggi_Icon.webp";
import Gharbad_Icon from "../../../src/assets/Gharbad_Icon.webp";
import Funny_Bones_Icon from "../../../src/assets/Funny_Bones_Icon.webp";
import Coral_Grimes_Icon from "../../../src/assets/Coral_Grimes_Icon.webp";
import Artemisia_Icon from "../../../src/assets/24px-Artemisia.webp";
import Baratheon_Icon from "../../../src/assets/24px-Baratheon.webp";
import Lilith_Icon from "../../../src/assets/Lilith_Icon.webp";
import Deu_Icon from "../../../src/assets/Deu_De'Breau_Icon.webp";

import Baron_Herx from "../../../src/assets/60px-Baron_Herx.webp";
import Baphomet_Icon from "../../../src/assets/60px-Baphomet.png";
import Erudyce_Icon from "../../../src/assets/60px-Erudyce.webp";
import Orpheus_Icon from "../../../src/assets/60px-Orpheus.webp";

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
        { label: "Human", to: "/Barony/NPCs/Human", img: Human_Icon },
        { label: "Goblin", to: "/Barony/NPCs/Goblin", img: Goblin_Icon },
        { label: "Gnome", to: "/Barony/NPCs/Gnome", img: Gnome_Icon },
        {
          label: "Gnome Thief",
          to: "/Barony/NPCs/Gnome_Thief",
          img: Gnome_Icon,
        },
        {
          label: "Shopkeeper",
          to: "/Barony/NPCs/Shopkeeper",
          img: Shopkeeper_Icon,
        },
        {
          label: "Mysterious Merchant",
          to: "/Barony/NPCs/Mysterious_Merchant",
          img: Mysterious_Merchant_Icon,
        },
      ],
    },
    {
      rowHeader: "Beasts",
      rowData: [
        { label: "Rat", to: "/Barony/NPCs/Rat", img: Rat_Icon },
        { label: "Spider", to: "/Barony/NPCs/Spider", img: Spider_Icon },
        { label: "Troll", to: "/Barony/NPCs/Troll", img: Troll_Icon },
        { label: "Bat", to: "/Barony/NPCs/Bat", img: Bat_Icon },
        { label: "Scorpion", to: "/Barony/NPCs/Scorpion", img: Scorpion_Icon },
        { label: "Scarab", to: "/Barony/NPCs/Scarab", img: Scarab_Icon },
        {
          label: "Cockatrice",
          to: "/Barony/NPCs/Cockatrice",
          img: Cockatrice_Icon,
        },
        { label: "Minotaur", to: "/Barony/NPCs/Minotaur", img: Minotaur_Icon },
      ],
    },
    {
      rowHeader: "Beastfolk",
      rowData: [
        {
          label: "Insectoid",
          to: "/Barony/NPCs/Insectoid",
          img: Insectoid_Icon,
        },
        { label: "Bugbear", to: "/Barony/NPCs/Bugbear", img: Bugbear_Icon },
        { label: "Kobold", to: "/Barony/NPCs/Kobold", img: Kobold_Icon },
        { label: "Goatman", to: "/Barony/NPCs/Goatman", img: Goatman_Icon },
      ],
    },
    {
      rowHeader: "Undead",
      rowData: [
        { label: "Skeleton", to: "/Barony/NPCs/Skeleton", img: Skeleton_Icon },
        { label: "Ghoul", to: "/Barony/NPCs/Ghoul", img: Ghoul_Icon },
        {
          label: "Enslaved Ghoul",
          to: "/Barony/NPCs/Enslaved_Ghoul",
          img: Ghoul_Icon,
        },
        { label: "Vampire", to: "/Barony/NPCs/Vampire", img: Vampire_Icon },
        { label: "Shadow", to: "/Barony/NPCs/Shadow", img: Shadow_Icon },
      ],
    },
    {
      rowHeader: "Demonics",
      rowData: [
        { label: "Succubus", to: "/Barony/NPCs/Succubus", img: Succubus_Icon },
        {
          label: "Succubus Consort",
          to: "/Barony/NPCs/Succubus_Consorts",
          img: Succubus_Icon,
        },
        { label: "Incubus", to: "/Barony/NPCs/Incubus", img: Incubus_Icon },
        { label: "Imp", to: "/Barony/NPCs/Imp", img: Imp_Icon },
        { label: "Demon", to: "/Barony/NPCs/Demon", img: Demon_Icon },
      ],
    },
    {
      rowHeader: "Constructs",
      rowData: [
        {
          label: "Automaton",
          to: "/Barony/NPCs/Automaton",
          img: Automaton_Icon,
        },
        {
          label: "Crystal Golem",
          to: "/Barony/NPCs/Crystal_Golem",
          img: Crystal_Golem_Icon,
        },
        {
          label: "Sentrybot",
          to: "/Barony/NPCs/Sentrybot",
          img: Sentrybot_Icon,
        },
        { label: "Spellbot", to: "/Barony/NPCs/Spellbot", img: Spellbot_Icon },
        { label: "Dummybot", to: "/Barony/NPCs/Dummybot", img: Dummybot_Icon },
        { label: "Mimic", to: "/Barony/NPCs/Mimic", img: Mimic_Icon },
      ],
    },
    {
      rowHeader: "Elementals",
      rowData: [{ label: "Slime", to: "/Barony/NPCs/Slime", img: Slime_Icon }],
    },
  ];

  const championTableData: TableRow[] = [
    {
      rowHeader: "Humanoids",
      rowData: [
        {
          label: "Potato King",
          to: "/Barony/NPCs/Potato_King",
          img: Potato_King_Icon,
        },
        {
          label: "Robin Hood",
          to: "/Barony/NPCs/Robin_Hood",
          img: Robin_Hood_Icon,
        },
        { label: "Merlin", to: "/Barony/NPCs/Merlin", img: Merlin_Icon },
        {
          label: "King Arthur",
          to: "/Barony/NPCs/King_Arthur",
          img: King_Arthur_Icon,
        },
        {
          label: "Red Riding Hood",
          to: "/Barony/NPCs/Red_Riding_Hood",
          img: Red_Riding_Hood_Icon,
        },
        { label: "Kali", to: "/Barony/NPCs/Kali", img: Kali_Icon },
        { label: "Anansi", to: "/Barony/NPCs/Anansi", img: Anansi_Icon },
        { label: "Vishpala", to: "/Barony/NPCs/Vishpala", img: Vishpala_Icon },
        { label: "Othello", to: "/Barony/NPCs/Othello", img: Othello_Icon },
        { label: "Oya", to: "/Barony/NPCs/Oya", img: Oya_Icon },
        {
          label: "Conan the Barbarian",
          to: "/Barony/NPCs/Conan_the_Barbarian",
          img: Conan_the_Barbarian_Icon,
        },
        {
          label: "ZAP Brigade",
          to: "/Barony/NPCs/ZAP_Brigade",
          img: ZAP_Brigade_Icon,
        },
      ],
    },
    {
      rowHeader: "Beast",
      rowData: [
        { label: "Algernon", to: "/Barony/NPCs/Algernon", img: Algernon_Icon },
        { label: "Shelob", to: "/Barony/NPCs/Shelob", img: Shelob_Icon },
        {
          label: "Thumpus The Troll",
          to: "/Barony/NPCs/Thumpus_The_Troll",
          img: Thumpus_The_Troll_Icon,
        },
        {
          label: "Skrabblag",
          to: "/Barony/NPCs/Skrabblag",
          img: Skrabblag_Icon,
        },
        { label: "Xyggi", to: "/Barony/NPCs/Xyggi", img: Xyggi_Icon },
      ],
    },
    {
      rowHeader: "Beastfolk",
      rowData: [
        { label: "Gharbad", to: "/Barony/NPCs/Gharbad", img: Gharbad_Icon },
      ],
    },
    {
      rowHeader: "Undead",
      rowData: [
        {
          label: "Funny Bones",
          to: "/Barony/NPCs/Funny_Bones",
          img: Funny_Bones_Icon,
        },
        {
          label: "Coral Grimes",
          to: "/Barony/NPCs/Coral_Grimes",
          img: Coral_Grimes_Icon,
        },
        {
          label: "Bram Kindly",
          to: "/Barony/NPCs/Bram_Kindly",
          img: Vampire_Icon,
        },
        {
          label: "Artemisia",
          to: "/Barony/NPCs/Artemisia",
          img: Artemisia_Icon,
        },
        {
          label: "Baratheon",
          to: "/Barony/NPCs/Baratheon",
          img: Baratheon_Icon,
        },
      ],
    },
    {
      rowHeader: "Demonic",
      rowData: [
        { label: "Lilith", to: "/Barony/NPCs/Lilith", img: Lilith_Icon },
        {
          label: "Deu De'Breau",
          to: "/Barony/NPCs/Deu_De'Breau",
          img: Deu_Icon,
        },
      ],
    },
  ];

  const bossTableData: TableRow[] = [
    {
      rowHeader: "Floor 20",
      rowData: [
        {
          label: "Baron Herx",
          to: "Barony/NPCs/Baron_Herx",
          img: Baron_Herx,
        },
      ],
    },
    {
      rowHeader: "Floor 25",
      rowData: [
        {
          label: "Baphomet",
          to: "Barony/NPCs/Baphomet",
          img: Baphomet_Icon,
        },
      ],
    },
    {
      rowHeader: "Floor 35",
      rowData: [
        {
          label: "Erudyce",
          to: "Barony/NPCs/Erudyce",
          img: Erudyce_Icon,
        },
        {
          label: "Orpheus",
          to: "Barony/NPCs/Orpheus",
          img: Orpheus_Icon,
        },
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
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <h2>Champions</h2>
        <p>
          Some denizens have miniboss variants, referred to as Champions, which
          typically feature improved stats, additional loot, and a unique
          appearance. Certain Champions may also spawn with a group of
          followers. Some variants are predetermined spawns and can only be
          encountered on specific dungeon floors.{" "}
        </p>

        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />

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
              <img src={item.img} loading="lazy" />
              <br></br>
              <b>{item.label}</b>
            </Link>
          )}
        />

        <h2>Champions</h2>
        <CategoryTable
          data={championTableData}
          renderItem={(item) => (
            <Link className="gridLink" to={item.to}>
              <img src={item.img} loading="lazy" />
              <br></br>
              <b>{item.label}</b>
            </Link>
          )}
        />

        <h2>Bosses</h2>
        <CategoryTable
          data={bossTableData}
          renderItem={(item) => (
            <Link className="gridLink" to={item.to}>
              <img src={item.img} loading="lazy" />
              <br></br>
              <b>{item.label}</b>
            </Link>
          )}
        />
      </div>
    </div>
  );
}

export default Barony_NPCs;
