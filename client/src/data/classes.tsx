import BarbImage from "../assets/Barbarian_Human_Male.png";

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

export type EquipmentCategory = {
  category: string;
  items: string[];
};

export type Information = {
  key: string;
  value: string;
  image?: string;
};

export type Stat = {
  key: string;
  value: string;
};

export type Skill = {
  key: string;
  value: string;
};

export type ClassData = {
  id: string;
  description: string;
  classInfo: string;
  startingEquipment: EquipmentCategory[];
  information: Information[];
  stats: Stat[];
  skills: Skill[];
  characterImage: string;
};

export const classes: ClassData[] = [
  {
    id: "Barbarian",
    description:
      "The Barbarian is a class in Barony that specializes in Axes. They forgo Constitution in favor of brute Strength.",
    classInfo:
      "A skilled combatant. What they lack in armor they make up for in strength and fighting prowess. Barbarians can quickly dispatch lesser foes before taking any hits by using the right weapon for the job. A surprise assault is the key to a swift victory. Staying light-footed will allow a Barbarian to avoid damage.",
    startingEquipment: [
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
    ],
    information: [
      { key: "HP", value: "40", image: HealthImage },
      { key: "Survival", value: "✰✰✰" },
      { key: "MP", value: "20", image: MagickaImage },
      { key: "Complexity", value: "✰✰" },
    ],
    stats: [
      { key: "STR", value: "2" },
      { key: "DEX", value: "0" },
      { key: "CON", value: "1" },
      { key: "INT", value: "-2" },
      { key: "PER", value: "0" },
      { key: "CHR", value: "-1" },
    ],
    skills: [
      { key: "Leadership", value: "0" },
      { key: "Stealth", value: "0" },
      { key: "Trading", value: "0" },
      { key: "Blocking", value: "0" },
      { key: "Lore", value: "0" },
      { key: "Ranged", value: "0" },
      { key: "Tinkering", value: "0" },
      { key: "Unarmed", value: "20" },
      { key: "Alchemy", value: "10" },
      { key: "Swords", value: "0" },
      { key: "Sorcery", value: "0" },
      { key: "Polearms", value: "0" },
      { key: "Mysticism", value: "0" },
      { key: "Axes", value: "50" },
      { key: "Thauma", value: "0" },
      { key: "Maces", value: "25" },
    ],
    characterImage: BarbImage,
  },
];
