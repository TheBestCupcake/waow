import BarbImage from "../assets/Barbarian_Human_Male.png";
import WarriorImage from "../assets/Human_Warrior_Male.webp";
import HealerImage from "../assets/Human_Healer_Male.webp";
import RogueImage from "../assets/Human_Rogue_Male.webp";
import WandererImage from "../assets/Human_Wanderer_Male.webp";
import ClericImage from "../assets/Human_Cleric_Male.webp";
import MerchantImage from "../assets/Human_Merchant_Male.webp";
import WizardImage from "../assets/Human_Wizard_Male.webp";

import LeadershipImage from "../assets/Leadership_Icon.png";
import StealthImage from "../assets/Stealth_Icon.png";
import TradingImage from "../assets/Trading_Icon.png";
import BlockingImage from "../assets/Blocking_Icon.png";
import LoreImage from "../assets/Lore_Icon.png";
import RangedImage from "../assets/Ranged_Icon.png";
import TinkeringImage from "../assets/Tinkering_Icon.png";
import UnarmedImage from "../assets/Unarmed_Icon.png";
import AlchemyImage from "../assets/Alchemy_Icon.png";
import SwordsImage from "../assets/Swords_Icon.png";
import SorceryImage from "../assets/Sorcery_Icon.png";
import PolearmsImage from "../assets/Polearms_Icon.png";
import MysticismImage from "../assets/Mysticism_Icon.png";
import AxesImage from "../assets/Axes_Icon.png";
import ThaumaImage from "../assets/Thaumaturgy_Icon.png";
import MacesImage from "../assets/Maces_Icon.png";

import StrengthImage from "../assets/Strength_Icon.png";
import DexterityImage from "../assets/Dexterity_Icon.png";
import ConstitutionImage from "../assets/Constitution_Icon.png";
import IntelligenceImage from "../assets/Intelligence_Icon.png";
import PerceptionImage from "../assets/Perception_Icon.png";
import CharismaImage from "../assets/Charisma_Icon.png";

import HealthImage from "../assets/Health_Icon.png";
import MagickaImage from "../assets/Magicka_Icon.png";
import type { ReactNode } from "react";
import JsonArrayList from "../components/JsonArrayList";

export type Attribute = {
  key: string;
  value: string;
  image?: string;
};

export type ClassSection = {
  sectionName: string;
  sectionContent: ReactNode;
};

export type ClassData = {
  id: string;
  description: string;

  information: Attribute[];
  stats: Attribute[];
  skills: Attribute[];

  characterImageDescription: string;
  characterImage: string;

  classSections: ClassSection[];
};

export const classes: ClassData[] = [
  {
    id: "Barbarian",
    description:
      "The Barbarian is a class in Barony that specializes in Axes. They forgo Constitution in favor of brute Strength.",

    information: [
      { key: "HP", value: "40", image: HealthImage },
      { key: "Survival", value: "✰✰✰" },
      { key: "MP", value: "20", image: MagickaImage },
      { key: "Complexity", value: "✰✰" },
    ],
    stats: [
      { key: "STR", value: "2", image: StrengthImage },
      { key: "DEX", value: "0", image: DexterityImage },
      { key: "CON", value: "1", image: ConstitutionImage },
      { key: "INT", value: "-2", image: IntelligenceImage },
      { key: "PER", value: "0", image: PerceptionImage },
      { key: "CHR", value: "-1", image: CharismaImage },
    ],
    skills: [
      { key: "Leadership", value: "0", image: LeadershipImage },
      { key: "Stealth", value: "0", image: StealthImage },
      { key: "Trading", value: "0", image: TradingImage },
      { key: "Blocking", value: "0", image: BlockingImage },
      { key: "Lore", value: "0", image: LoreImage },
      { key: "Ranged", value: "0", image: RangedImage },
      { key: "Tinkering", value: "0", image: TinkeringImage },
      { key: "Unarmed", value: "20", image: UnarmedImage },
      { key: "Alchemy", value: "10", image: AlchemyImage },
      { key: "Swords", value: "0", image: SwordsImage },
      { key: "Sorcery", value: "0", image: SorceryImage },
      { key: "Polearms", value: "0", image: PolearmsImage },
      { key: "Mysticism", value: "0", image: MysticismImage },
      { key: "Axes", value: "50", image: AxesImage },
      { key: "Thauma", value: "0", image: ThaumaImage },
      { key: "Maces", value: "25", image: MacesImage },
    ],
    characterImageDescription: "A Human Barbarian",
    characterImage: BarbImage,

    classSections: [
      {
        sectionName: "Class Info",
        sectionContent: (
          <>
            <p>
              A skilled combatant. What they lack in armor they make up for in
              strength and fighting prowess.{" "}
            </p>
            <p>
              Barbarians can quickly dispatch lesser foes before taking any hits
              by using the right weapon for the job.{" "}
            </p>
            <p>
              A surprise assault is the key to a swift victory. Staying
              light-footed will allow a Barbarian to avoid damage.{" "}
            </p>
          </>
        ),
      },

      {
        sectionName: "",
        sectionContent: (
          <JsonArrayList
            data={[
              {
                category: "Equipped",
                items: [
                  "Rough ring of might",
                  "Serviceable wooden shield",
                  "Worn leather helm",
                  "Serviceable iron Axe",
                ],
              },
              {
                category: "Inventory",
                items: [
                  "x2 Slightly-aged bread",
                  "Slightly-aged meat",
                  "Bubbly bottle of booeze",
                  "x2 Worn torch",
                  "x2 Decrepit bronze tomohawk",
                ],
              },
              {
                category: "Monster Races",
                items: [
                  "x2 Bubbly potion of polymorph",
                  "(Goatman Only) x3 Bubbly bottle of booze",
                ],
              },
            ]}
          />
        ),
      },

      {
        sectionName: "Strategy",
        sectionContent: (
          <>
            <p>Barbarian Strategy.</p>
          </>
        ),
      },
    ],
  },

  {
    id: "Warrior",
    description:
      "The Warrior is a class in Barony that specializes in Polearms. Starting with 8 Armor Class and high Leadership, the Warrior is a sturdy class with aptitude for recruiting Humans to fight for their side.",

    information: [
      { key: "HP", value: "30", image: HealthImage },
      { key: "Survival", value: "✰✰✰✰" },
      { key: "MP", value: "20", image: MagickaImage },
      { key: "Complexity", value: "✰" },
    ],
    stats: [
      { key: "STR", value: "1", image: StrengthImage },
      { key: "DEX", value: "1", image: DexterityImage },
      { key: "CON", value: "0", image: ConstitutionImage },
      { key: "INT", value: "-2", image: IntelligenceImage },
      { key: "PER", value: "-1", image: PerceptionImage },
      { key: "CHR", value: "1", image: CharismaImage },
    ],
    skills: [
      { key: "Leadership", value: "40", image: LeadershipImage },
      { key: "Stealth", value: "0", image: StealthImage },
      { key: "Trading", value: "0", image: TradingImage },
      { key: "Blocking", value: "25", image: BlockingImage },
      { key: "Lore", value: "0", image: LoreImage },
      { key: "Ranged", value: "25", image: RangedImage },
      { key: "Tinkering", value: "0", image: TinkeringImage },
      { key: "Unarmed", value: "10", image: UnarmedImage },
      { key: "Alchemy", value: "0", image: AlchemyImage },
      { key: "Swords", value: "25", image: SwordsImage },
      { key: "Sorcery", value: "0", image: SorceryImage },
      { key: "Polearms", value: "50", image: PolearmsImage },
      { key: "Mysticism", value: "0", image: MysticismImage },
      { key: "Axes", value: "0", image: AxesImage },
      { key: "Thauma", value: "0", image: ThaumaImage },
      { key: "Maces", value: "0", image: MacesImage },
    ],
    characterImageDescription: "The trained soldier.",
    characterImage: WarriorImage,

    classSections: [
      {
        sectionName: "Class Info",
        sectionContent: (
          <>
            <p>
              The trained soldier. They are heavily armored and make capable
              leaders.
            </p>
            <p>
              Warriors are well equipped for most fights, assuming they know how
              to block at the right times.
            </p>
            <p>
              But hubris is the downfall of many Warriors, whether waddling too
              slowly near traps, or allowing magic to strike through their
              armor.
            </p>
          </>
        ),
      },

      {
        sectionName: "",
        sectionContent: (
          <JsonArrayList
            data={[
              {
                category: "Equipped",
                items: [
                  "Serviceable bronze shield",
                  "Serviceable iron spear",
                  "Serviceable iron breastpiece",
                  "Worn leather helm",
                  "Worn leather boots",
                ],
              },
              {
                category: "Inventory",
                items: ["Slightly-aged bread", "Slightly-aged fish"],
              },
              {
                category: "Monster Races",
                items: [
                  "x2 Bubbly potion of polymorph",
                  "(Goatman Only) x3 Bubbly bottle of booze",
                ],
              },
            ]}
          />
        ),
      },

      {
        sectionName: "Strategy",
        sectionContent: (
          <>
            <p>Warrior Strategy.</p>
          </>
        ),
      },
    ],
  },

  {
    id: "Healer",
    description:
      "The Healer is a class in Barony that specializes in Polearms. Although a poor fighter, they come armed with Healing and Cure Ailment to ensure their allies stay alive.",

    information: [
      { key: "HP", value: "20", image: HealthImage },
      { key: "Survival", value: "✰✰✰✰" },
      { key: "MP", value: "40", image: MagickaImage },
      { key: "Complexity", value: "✰✰" },
    ],
    stats: [
      { key: "STR", value: "-1", image: StrengthImage },
      { key: "DEX", value: "-1", image: DexterityImage },
      { key: "CON", value: "2", image: ConstitutionImage },
      { key: "INT", value: "1", image: IntelligenceImage },
      { key: "PER", value: "0", image: PerceptionImage },
      { key: "CHR", value: "0", image: CharismaImage },
    ],
    skills: [
      { key: "Leadership", value: "0", image: LeadershipImage },
      { key: "Stealth", value: "0", image: StealthImage },
      { key: "Trading", value: "0", image: TradingImage },
      { key: "Blocking", value: "10", image: BlockingImage },
      { key: "Lore", value: "10", image: LoreImage },
      { key: "Ranged", value: "0", image: RangedImage },
      { key: "Tinkering", value: "0", image: TinkeringImage },
      { key: "Unarmed", value: "0", image: UnarmedImage },
      { key: "Alchemy", value: "30", image: AlchemyImage },
      { key: "Swords", value: "0", image: SwordsImage },
      { key: "Sorcery", value: "0", image: SorceryImage },
      { key: "Polearms", value: "25", image: PolearmsImage },
      { key: "Mysticism", value: "25", image: MysticismImage },
      { key: "Axes", value: "0", image: AxesImage },
      { key: "Thauma", value: "50", image: ThaumaImage },
      { key: "Maces", value: "0", image: MacesImage },
    ],
    characterImageDescription: "A talented physician.",
    characterImage: HealerImage,

    classSections: [
      {
        sectionName: "Class Info",
        sectionContent: (
          <>
            <p>
              A talented physician. Though they are poor fighters, they come
              stocked with medical supplies and other healing abilities.
            </p>
            <p>
              Compared to other magic users, the Healer is a more durable and
              well-rounded hero as they grow in experience.
            </p>
            <p>With care, they may become a very tough spellcaster.</p>
          </>
        ),
      },

      {
        sectionName: "",
        sectionContent: (
          <JsonArrayList
            data={[
              {
                category: "Equipped",
                items: [
                  "Serviceable phrygian hat",
                  "Serviceable cloak",
                  "Serviceable healer doublet",
                  "Serviceable quarter staff",
                ],
              },
              {
                category: "Inventory",
                items: [
                  "x3 Bubbly potion of extra healing",
                  "Fresh fish",
                  "Slightly-aged apple",
                  "Serviceable magicstaff of slow ",
                  "Serviceable towel",
                  "Brand-new spellbook of cure ailment",
                  "Brand-new spellbook of healing",
                ],
              },
              {
                category: "Monster Races",
                items: [
                  "x2 Bubbly potion of polymorph",
                  "(Goatman Only) x3 Bubbly bottle of booze",
                ],
              },
            ]}
          />
        ),
      },

      {
        sectionName: "Strategy",
        sectionContent: (
          <>
            <p>Healer Strategy.</p>
          </>
        ),
      },
    ],
  },

  {
    id: "Rogue",
    description:
      "The Rogue is a class in Barony with a specialty in stealth, ranged combat, and tinkering. They have basic training with swords and ranged weapons. A Rogue's exceptional dexterity allows them to use ranged weapons to great effect, bolstered by their ability to scavenge for arrows from traps using a lockpick. Because of their frailty, Rogues may struggle in traditional melee encounters. Their skill in stealth allows them to stay hidden and score powerful backstabs against unaware foes.",

    information: [
      { key: "HP", value: "25", image: HealthImage },
      { key: "Survival", value: "✰✰" },
      { key: "MP", value: "20", image: MagickaImage },
      { key: "Complexity", value: "✰✰✰" },
    ],
    stats: [
      { key: "STR", value: "-1", image: StrengthImage },
      { key: "DEX", value: "2", image: DexterityImage },
      { key: "CON", value: "0", image: ConstitutionImage },
      { key: "INT", value: "-1", image: IntelligenceImage },
      { key: "PER", value: "2", image: PerceptionImage },
      { key: "CHR", value: "-1", image: CharismaImage },
    ],
    skills: [
      { key: "Leadership", value: "0", image: LeadershipImage },
      { key: "Stealth", value: "50", image: StealthImage },
      { key: "Trading", value: "0", image: TradingImage },
      { key: "Blocking", value: "0", image: BlockingImage },
      { key: "Lore", value: "25", image: LoreImage },
      { key: "Ranged", value: "25", image: RangedImage },
      { key: "Tinkering", value: "40", image: TinkeringImage },
      { key: "Unarmed", value: "0", image: UnarmedImage },
      { key: "Alchemy", value: "20", image: AlchemyImage },
      { key: "Swords", value: "25", image: SwordsImage },
      { key: "Sorcery", value: "0", image: SorceryImage },
      { key: "Polearms", value: "0", image: PolearmsImage },
      { key: "Mysticism", value: "0", image: MysticismImage },
      { key: "Axes", value: "0", image: AxesImage },
      { key: "Thauma", value: "0", image: ThaumaImage },
      { key: "Maces", value: "0", image: MacesImage },
    ],
    characterImageDescription: "The professional hooligan.",
    characterImage: RogueImage,

    classSections: [
      {
        sectionName: "Class Info",
        sectionContent: (
          <>
            <p>
              The professional hooligan. Dexterous and skilled thieves, what
              they lack in power, they make up for in versatility.
            </p>
            <p>Even skilled Rogues succumb trying to live by the blade.</p>
            <p>
              Their deft hand can pick ammo from traps, and using stealth, a
              patient Rogue survives by picking off tough foes from afar, &
              practicing ambushes against soft foes.
            </p>
          </>
        ),
      },

      {
        sectionName: "",
        sectionContent: (
          <JsonArrayList
            data={[
              {
                category: "Equipped",
                items: [
                  "Excellent bronze sword",
                  "Serviceable leather gloves ",
                  "Worn hood of whispers",
                  "Worn leather breastpiece",
                  "Worn cloak",
                ],
              },
              {
                category: "Inventory",
                items: [
                  "x5 Bubbly potion of sickness",
                  "x3 Excellent lockpick",
                  "Excellent shortbow",
                  "Excellent noisemaker",
                  "Serviceable quiver of springshot ammo",
                ],
              },
              {
                category: "Monster Races",
                items: [
                  "x2 Bubbly potion of polymorph",
                  "(Goatman Only) x3 Bubbly bottle of booze",
                ],
              },
            ]}
          />
        ),
      },

      {
        sectionName: "Strategy",
        sectionContent: (
          <>
            <p>Rogue Strategy.</p>
          </>
        ),
      },
    ],
  },

  {
    id: "Wanderer",
    description:
      "The Wanderer is a class in Barony that excels at navigation. They have basic training with polearms and ranged weapons. Despite their humble combat ability, the Wanderer packs all the tools one could need to explore the dungeon swiftly and safely. They also come prepared with an abundance of high-quality food.",

    information: [
      { key: "HP", value: "40", image: HealthImage },
      { key: "Survival", value: "✰✰✰✰" },
      { key: "MP", value: "20", image: MagickaImage },
      { key: "Complexity", value: "✰" },
    ],
    stats: [
      { key: "STR", value: "0", image: StrengthImage },
      { key: "DEX", value: "1", image: DexterityImage },
      { key: "CON", value: "1", image: ConstitutionImage },
      { key: "INT", value: "-1", image: IntelligenceImage },
      { key: "PER", value: "1", image: PerceptionImage },
      { key: "CHR", value: "-1", image: CharismaImage },
    ],
    skills: [
      { key: "Leadership", value: "0", image: LeadershipImage },
      { key: "Stealth", value: "25", image: StealthImage },
      { key: "Trading", value: "25", image: TradingImage },
      { key: "Blocking", value: "0", image: BlockingImage },
      { key: "Lore", value: "0", image: LoreImage },
      { key: "Ranged", value: "25", image: RangedImage },
      { key: "Tinkering", value: "0", image: TinkeringImage },
      { key: "Unarmed", value: "10", image: UnarmedImage },
      { key: "Alchemy", value: "30", image: AlchemyImage },
      { key: "Swords", value: "0", image: SwordsImage },
      { key: "Sorcery", value: "0", image: SorceryImage },
      { key: "Polearms", value: "25", image: PolearmsImage },
      { key: "Mysticism", value: "0", image: MysticismImage },
      { key: "Axes", value: "0", image: AxesImage },
      { key: "Thauma", value: "0", image: ThaumaImage },
      { key: "Maces", value: "0", image: MacesImage },
    ],
    characterImageDescription: "The hardened traveler.",
    characterImage: WandererImage,

    classSections: [
      {
        sectionName: "Class Info",
        sectionContent: (
          <>
            <p>
              The hardened traveler. Low in armor and combat ability, but
              well-equipped to explore the dungeon.{" "}
            </p>
            <p>
              A Wanderer's ample food supply provides a patient start to their
              adventure, allowing them to play it safe.{" "}
            </p>
            <p>
              Their hardy nature transforms them into very durable fighters as
              their quest labors on.{" "}
            </p>
          </>
        ),
      },

      {
        sectionName: "",
        sectionContent: (
          <JsonArrayList
            data={[
              {
                category: "Equipped",
                items: [
                  "Serviceable cloak",
                  "Serviceable Hood of Whispers",
                  "Serviceable leather Boots",
                  "Flawed Ring of Warning",
                  "Worn quarter staff",
                ],
              },
              {
                category: "Inventory",
                items: [
                  "Fresh fish",
                  "x2 Slightly-aged bread",
                  "x2 Slightly-aged tin",
                  "Plain potion of cure aliment",
                  "Faded spellbook of detect food",
                  "Excellent slingshot",
                  "Excellent lantern",
                  "Serviceable tin opener",
                  "Serviceable towel",
                  "x6 Marked scroll of magic mapping",
                ],
              },
              {
                category: "Monster Races",
                items: [
                  "x2 Bubbly potion of polymorph",
                  "(Goatman Only) x3 Bubbly bottle of booze",
                ],
              },
            ]}
          />
        ),
      },

      {
        sectionName: "Strategy",
        sectionContent: (
          <>
            <p>Wanderer Strategy</p>
          </>
        ),
      },
    ],
  },

  {
    id: "Cleric",
    description:
      "The Cleric is a class in Barony that specializes in Maces. Armed with Troll's Blood and decent Constitution, Clerics excel at restoring health after a fight. ",

    information: [
      { key: "HP", value: "30", image: HealthImage },
      { key: "Survival", value: "✰✰✰" },
      { key: "MP", value: "30", image: MagickaImage },
      { key: "Complexity", value: "✰✰" },
    ],
    stats: [
      { key: "STR", value: "0", image: StrengthImage },
      { key: "DEX", value: "-1", image: DexterityImage },
      { key: "CON", value: "1", image: ConstitutionImage },
      { key: "INT", value: "0", image: IntelligenceImage },
      { key: "PER", value: "1", image: PerceptionImage },
      { key: "CHR", value: "0", image: CharismaImage },
    ],
    skills: [
      { key: "Leadership", value: "20", image: LeadershipImage },
      { key: "Stealth", value: "0", image: StealthImage },
      { key: "Trading", value: "0", image: TradingImage },
      { key: "Blocking", value: "10", image: BlockingImage },
      { key: "Lore", value: "0", image: LoreImage },
      { key: "Ranged", value: "0", image: RangedImage },
      { key: "Tinkering", value: "0", image: TinkeringImage },
      { key: "Unarmed", value: "0", image: UnarmedImage },
      { key: "Alchemy", value: "20", image: AlchemyImage },
      { key: "Swords", value: "0", image: SwordsImage },
      { key: "Sorcery", value: "0", image: SorceryImage },
      { key: "Polearms", value: "0", image: PolearmsImage },
      { key: "Mysticism", value: "0", image: MysticismImage },
      { key: "Axes", value: "0", image: AxesImage },
      { key: "Thauma", value: "40", image: ThaumaImage },
      { key: "Maces", value: "25", image: MacesImage },
    ],
    characterImageDescription: "A student of the church.",
    characterImage: ClericImage,

    classSections: [
      {
        sectionName: "Class Info",
        sectionContent: (
          <>
            <p>
              Students of the church. Fairly well equipped and able in many
              ways, they are well-rounded adventurers.
            </p>
            <p>
              While Clerics carry a spell they can't yet memorize, their
              training has prepared them to learn quickly.{" "}
            </p>
            <p>
              A wise Cleric makes use of magic when it is available without
              forsaking their martial training.{" "}
            </p>
          </>
        ),
      },

      {
        sectionName: "",
        sectionContent: (
          <JsonArrayList
            data={[
              {
                category: "Equipped",
                items: [
                  "Serviceable cloak",
                  "Worn iron bracers (+1)",
                  "Worn wooden shield",
                  "Worn leather breastpiece",
                  "Serviceable iron mace (+1)",
                ],
              },
              {
                category: "Inventory",
                items: [
                  "Slightly-aged bread",
                  "x3 Brand-new scroll of summon",
                  "x2 Bubbly potion of healing",
                  "Torn spellbook of troll's blood",
                ],
              },
              {
                category: "Monster Races",
                items: [
                  "x2 Bubbly potion of polymorph",
                  "(Goatman Only) x3 Bubbly bottle of booze",
                ],
              },
            ]}
          />
        ),
      },

      {
        sectionName: "Strategy",
        sectionContent: (
          <>
            <p>Cleric Strategy</p>
          </>
        ),
      },
    ],
  },

  {
    id: "Merchant",
    description:
      "Merchant is a class in Barony that specializes in Axes. Although lacking in combat power, their high levels in Trading and Appraisal allows the Merchant to easily identify items and trade with Shopkeepers to buy whatever they may need. ",

    information: [
      { key: "HP", value: "30", image: HealthImage },
      { key: "Survival", value: "✰✰✰" },
      { key: "MP", value: "20", image: MagickaImage },
      { key: "Complexity", value: "✰✰" },
    ],
    stats: [
      { key: "STR", value: "0", image: StrengthImage },
      { key: "DEX", value: "-1", image: DexterityImage },
      { key: "CON", value: "0", image: ConstitutionImage },
      { key: "INT", value: "0", image: IntelligenceImage },
      { key: "PER", value: "1", image: PerceptionImage },
      { key: "CHR", value: "1", image: CharismaImage },
    ],
    skills: [
      { key: "Leadership", value: "20", image: LeadershipImage },
      { key: "Stealth", value: "0", image: StealthImage },
      { key: "Trading", value: "50", image: TradingImage },
      { key: "Blocking", value: "0", image: BlockingImage },
      { key: "Lore", value: "50", image: LoreImage },
      { key: "Ranged", value: "0", image: RangedImage },
      { key: "Tinkering", value: "10", image: TinkeringImage },
      { key: "Unarmed", value: "0", image: UnarmedImage },
      { key: "Alchemy", value: "10", image: AlchemyImage },
      { key: "Swords", value: "0", image: SwordsImage },
      { key: "Sorcery", value: "0", image: SorceryImage },
      { key: "Polearms", value: "0", image: PolearmsImage },
      { key: "Mysticism", value: "0", image: MysticismImage },
      { key: "Axes", value: "25", image: AxesImage },
      { key: "Thauma", value: "0", image: ThaumaImage },
      { key: "Maces", value: "0", image: MacesImage },
    ],
    characterImageDescription: "A seasoned trader.",
    characterImage: MerchantImage,

    classSections: [
      {
        sectionName: "Class Info",
        sectionContent: (
          <>
            <p>A seasoned trader.</p>
            <p>
              They are skilled in the market and adept at identifying gems &
              foreign artifacts.{" "}
            </p>
            <p>
              While decently equipped, Merchant explorers will survive longer if
              they develop skills which keep foes at a distance, especially
              adopting followers and crafting skills to which they are naturally
              inclined.
            </p>
          </>
        ),
      },

      {
        sectionName: "",
        sectionContent: (
          <JsonArrayList
            data={[
              {
                category: "Equipped",
                items: [
                  "Excellent bronze axe",
                  "Excellent leather gloves",
                  "Serviceable phrygian hat",
                  "Serviceable monocle",
                  "Worn leather breastpiece",
                ],
              },
              {
                category: "Inventory",
                items: [
                  "x3 Brand-new scroll of remove curse",
                  "x2 Brand-new scroll of identify",
                  "x2 Fresh meat",
                  "Slightly-aged cheese",
                  "Serviceable pickaxe",
                ],
              },
              {
                category: "Monster Races",
                items: [
                  "x2 Bubbly potion of polymorph",
                  "(Goatman Only) x3 Bubbly bottle of booze",
                ],
              },
            ]}
          />
        ),
      },

      {
        sectionName: "Native Mechanics",
        sectionContent: (
          <>
            <p>
              The Monocle is native to the merchant, and gives the following
              buffs:{" "}
            </p>
            <ul>
              <li>
                Marks the player as an ally to shopkeepers when visibly worn,
                even as a monster race.
              </li>
              <li>200% Gem appraisal speed.</li>
            </ul>
          </>
        ),
      },

      {
        sectionName: "Strategy",
        sectionContent: (
          <>
            <p>Merchant Strategy</p>
          </>
        ),
      },
    ],
  },

  {
    id: "Wizard",
    description:
      "The Wizard is the premier magic class of Barony, starting with powerful spells capable of easily obliterating early foes as well as having the highest starting mana pool out of any vanilla class. Even with their high mana pool, once a Wizard runs out of mana they are left vulnerable due to their weak melee combat capabilities and frailty. To avoid such scenario, one must know when its necessary to use magic and when a good smack from a polearm is sufficient enough to finish a foe. Their weak Strength and Constitution growth makes them ill geared towards direct combat, but their high Intelligence, Perception and Charisma growth makes them a good magician and support class for the party.",

    information: [
      { key: "HP", value: "20", image: HealthImage },
      { key: "Survival", value: "✰✰" },
      { key: "MP", value: "50", image: MagickaImage },
      { key: "Complexity", value: "✰✰" },
    ],
    stats: [
      { key: "STR", value: "0", image: StrengthImage },
      { key: "DEX", value: "-1", image: DexterityImage },
      { key: "CON", value: "0", image: ConstitutionImage },
      { key: "INT", value: "3", image: IntelligenceImage },
      { key: "PER", value: "1", image: PerceptionImage },
      { key: "CHR", value: "-1", image: CharismaImage },
    ],
    skills: [
      { key: "Leadership", value: "0", image: LeadershipImage },
      { key: "Stealth", value: "0", image: StealthImage },
      { key: "Trading", value: "0", image: TradingImage },
      { key: "Blocking", value: "0", image: BlockingImage },
      { key: "Lore", value: "10", image: LoreImage },
      { key: "Ranged", value: "0", image: RangedImage },
      { key: "Tinkering", value: "0", image: TinkeringImage },
      { key: "Unarmed", value: "0", image: UnarmedImage },
      { key: "Alchemy", value: "10", image: AlchemyImage },
      { key: "Swords", value: "0", image: SwordsImage },
      { key: "Sorcery", value: "50", image: SorceryImage },
      { key: "Polearms", value: "25", image: PolearmsImage },
      { key: "Mysticism", value: "0", image: MysticismImage },
      { key: "Axes", value: "0", image: AxesImage },
      { key: "Thauma", value: "15", image: ThaumaImage },
      { key: "Maces", value: "0", image: MacesImage },
    ],
    characterImageDescription: "The wise magician.",
    characterImage: WizardImage,

    classSections: [
      {
        sectionName: "Class Info",
        sectionContent: (
          <>
            <p>
              The wise magician. Though frail, they are extremely well-versed in
              magic.{" "}
            </p>
            <p>
              Many young adventurers find early success with powerful spells.
              However, most mighty magic users cannot cast indefinitely.{" "}
            </p>
            <p>
              To succeed as a Wizard, one must learn when it is enough to finish
              foes off with a stiff whack from a polearm.
            </p>
          </>
        ),
      },

      {
        sectionName: "",
        sectionContent: (
          <JsonArrayList
            data={[
              {
                category: "Equipped",
                items: [
                  "Serviceable quarter staff",
                  "Serviceable wizard hat",
                  "Serviceable leather boots",
                  "Serviceable cloak of protection",
                  "Serviceable wizard doublet",
                  "Flawless amulet of magic reflection",
                ],
              },
              {
                category: "Inventory",
                items: [
                  "Excellent magicstaff of light",
                  "x2 Bubbly potion of restore magic",
                  "Marked spellbook of fireball",
                  "Marked spellbook of cold",
                  "Marked spellbook of light",
                ],
              },
              {
                category: "Monster Races",
                items: [
                  "x2 Bubbly potion of polymorph",
                  "(Goatman Only) x3 Bubbly bottle of booze",
                ],
              },
            ]}
          />
        ),
      },

      {
        sectionName: "Strategy",
        sectionContent: (
          <>
            <p>Wizard Strategy</p>
          </>
        ),
      },
    ],
  },

  {
    id: "",
    description: "",

    information: [
      { key: "HP", value: "", image: HealthImage },
      { key: "Survival", value: "✰✰" },
      { key: "MP", value: "", image: MagickaImage },
      { key: "Complexity", value: "✰✰✰" },
    ],
    stats: [
      { key: "STR", value: "", image: StrengthImage },
      { key: "DEX", value: "", image: DexterityImage },
      { key: "CON", value: "", image: ConstitutionImage },
      { key: "INT", value: "", image: IntelligenceImage },
      { key: "PER", value: "", image: PerceptionImage },
      { key: "CHR", value: "", image: CharismaImage },
    ],
    skills: [
      { key: "Leadership", value: "0", image: LeadershipImage },
      { key: "Stealth", value: "0", image: StealthImage },
      { key: "Trading", value: "0", image: TradingImage },
      { key: "Blocking", value: "0", image: BlockingImage },
      { key: "Lore", value: "0", image: LoreImage },
      { key: "Ranged", value: "0", image: RangedImage },
      { key: "Tinkering", value: "0", image: TinkeringImage },
      { key: "Unarmed", value: "0", image: UnarmedImage },
      { key: "Alchemy", value: "0", image: AlchemyImage },
      { key: "Swords", value: "0", image: SwordsImage },
      { key: "Sorcery", value: "0", image: SorceryImage },
      { key: "Polearms", value: "0", image: PolearmsImage },
      { key: "Mysticism", value: "0", image: MysticismImage },
      { key: "Axes", value: "0", image: AxesImage },
      { key: "Thauma", value: "0", image: ThaumaImage },
      { key: "Maces", value: "0", image: MacesImage },
    ],
    characterImageDescription: "",
    characterImage: RogueImage,

    classSections: [
      {
        sectionName: "Class Info",
        sectionContent: (
          <>
            <p></p>
            <p></p>
            <p></p>
          </>
        ),
      },

      {
        sectionName: "",
        sectionContent: (
          <JsonArrayList
            data={[
              {
                category: "Equipped",
                items: [""],
              },
              {
                category: "Inventory",
                items: [""],
              },
              {
                category: "Monster Races",
                items: [
                  "x2 Bubbly potion of polymorph",
                  "(Goatman Only) x3 Bubbly bottle of booze",
                ],
              },
            ]}
          />
        ),
      },

      {
        sectionName: "Strategy",
        sectionContent: (
          <>
            <p></p>
          </>
        ),
      },
    ],
  },
];

/*
{
    id: "",
    description: "",

    information: [
      { key: "HP", value: "", image: HealthImage },
      { key: "Survival", value: "✰✰" },
      { key: "MP", value: "", image: MagickaImage },
      { key: "Complexity", value: "✰✰✰" },
    ],
    stats: [
      { key: "STR", value: "", image: StrengthImage },
      { key: "DEX", value: "", image: DexterityImage },
      { key: "CON", value: "", image: ConstitutionImage },
      { key: "INT", value: "", image: IntelligenceImage },
      { key: "PER", value: "", image: PerceptionImage },
      { key: "CHR", value: "", image: CharismaImage },
    ],
    skills: [
      { key: "Leadership", value: "0", image: LeadershipImage },
      { key: "Stealth", value: "0", image: StealthImage },
      { key: "Trading", value: "0", image: TradingImage },
      { key: "Blocking", value: "0", image: BlockingImage },
      { key: "Lore", value: "0", image: LoreImage },
      { key: "Ranged", value: "0", image: RangedImage },
      { key: "Tinkering", value: "0", image: TinkeringImage },
      { key: "Unarmed", value: "0", image: UnarmedImage },
      { key: "Alchemy", value: "0", image: AlchemyImage },
      { key: "Swords", value: "0", image: SwordsImage },
      { key: "Sorcery", value: "0", image: SorceryImage },
      { key: "Polearms", value: "0", image: PolearmsImage },
      { key: "Mysticism", value: "0", image: MysticismImage },
      { key: "Axes", value: "0", image: AxesImage },
      { key: "Thauma", value: "0", image: ThaumaImage },
      { key: "Maces", value: "0", image: MacesImage },
    ],
    characterImageDescription: "",
    characterImage: RogueImage,

    classSections: [
      {
        sectionName: "Class Info",
        sectionContent: (
          <>
            <p></p>
            <p></p>
            <p></p>
          </>
        ),
      },

      {
        sectionName: "",
        sectionContent: (
          <JsonArrayList
            data={[
              {
                category: "Equipped",
                items: [""],
              },
              {
                category: "Inventory",
                items: [""],
              },
              {
                category: "Monster Races",
                items: [
                  "x2 Bubbly potion of polymorph",
                  "(Goatman Only) x3 Bubbly bottle of booze",
                ],
              },
            ]}
          />
        ),
      },

      {
        sectionName: "Strategy",
        sectionContent: (
          <>
            <p></p>
          </>
        ),
      },
    ],
  },
  */
