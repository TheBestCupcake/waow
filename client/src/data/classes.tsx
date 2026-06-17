import BarbImage from "../assets/Barbarian_Human_Male.png";
import WarriorImage from "../assets/Human_Warrior_Male.webp";
import HealerImage from "../assets/Human_Healer_Male.webp";

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
];
