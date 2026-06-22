import BarbImage from "../assets/Barbarian_Human_Male.png";
import WarriorImage from "../assets/Human_Warrior_Male.webp";
import HealerImage from "../assets/Human_Healer_Male.webp";
import RogueImage from "../assets/Human_Rogue_Male.webp";
import WandererImage from "../assets/Human_Wanderer_Male.webp";
import ClericImage from "../assets/Human_Cleric_Male.webp";
import MerchantImage from "../assets/Human_Merchant_Male.webp";
import WizardImage from "../assets/Human_Wizard_Male.webp";
import ArcanistImage from "../assets/Human_Arcanist_Male.webp";
import JokerImage from "../assets/Human_Joker_Male.webp";
import SextonImage from "../assets/Human_Sexton_Male.webp";
import NinjaImage from "../assets/Human_Ninja_Male.webp";
import MonkImage from "../assets/Human_Monk_Male.webp";
import ConjurerImage from "../assets/Skeleton_Conjurer_Male.webp";
import AccursedImage from "../assets/Vampire_Accursed_Male.webp";
import MesmerImage from "../assets/Succubus_Mesmer_Female.webp";
import BrewerImage from "../assets/Goatman_Brewer_Male.webp";
import MechanistImage from "../assets/Automaton_Mechanist_Male.webp";
import PunisherImage from "../assets/Incubus_Punisher_Male.webp";
import ShamanImage from "../assets/Goblin_Shaman_Male.png";
import HunterImage from "../assets/Insectoid_Hunter_Male.webp";
import BardImage from "../assets/300px-Bard_Gnome.webp";
import SapperImage from "../assets/300px-Sapper_Gremlin.webp";
import ScionImage from "../assets/300px-Scion_Dryad.webp";
import HermitImage from "../assets/300px-Hermit_Myconid.webp";
import PaladinImage from "../assets/300px-Paladin_Salamander.webp";

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
    id: "Arcanist",
    description:
      "The Arcanist is a class in Barony that specializes in both Ranged and Magic. They start with multiple spells, magicstaffs, and a crossbow, allowing them to safely dispatch enemies at a range. However, due to their poor Constitution and lack of melee options, they can find themselves in trouble should an enemy find their way towards them.",

    information: [
      { key: "HP", value: "25", image: HealthImage },
      { key: "Survival", value: "✰✰✰" },
      { key: "MP", value: "40", image: MagickaImage },
      { key: "Complexity", value: "✰✰✰" },
    ],
    stats: [
      { key: "STR", value: "-1", image: StrengthImage },
      { key: "DEX", value: "1", image: DexterityImage },
      { key: "CON", value: "-1", image: ConstitutionImage },
      { key: "INT", value: "1", image: IntelligenceImage },
      { key: "PER", value: "1", image: PerceptionImage },
      { key: "CHR", value: "-1", image: CharismaImage },
    ],
    skills: [
      { key: "Leadership", value: "0", image: LeadershipImage },
      { key: "Stealth", value: "25", image: StealthImage },
      { key: "Trading", value: "0", image: TradingImage },
      { key: "Blocking", value: "0", image: BlockingImage },
      { key: "Lore", value: "0", image: LoreImage },
      { key: "Ranged", value: "25", image: RangedImage },
      { key: "Tinkering", value: "25", image: TinkeringImage },
      { key: "Unarmed", value: "0", image: UnarmedImage },
      { key: "Alchemy", value: "0", image: AlchemyImage },
      { key: "Swords", value: "0", image: SwordsImage },
      { key: "Sorcery", value: "30", image: SorceryImage },
      { key: "Polearms", value: "0", image: PolearmsImage },
      { key: "Mysticism", value: "0", image: MysticismImage },
      { key: "Axes", value: "0", image: AxesImage },
      { key: "Thauma", value: "0", image: ThaumaImage },
      { key: "Maces", value: "0", image: MacesImage },
    ],
    characterImageDescription: "A cunning spellcaster.",
    characterImage: ArcanistImage,

    classSections: [
      {
        sectionName: "Class Info",
        sectionContent: (
          <>
            <p>
              A cunning spellcaster. Less magically adept than the Wizard, but
              with more diverse talents and gear.
            </p>
            <p>
              Due to having mundane and magical ranged attacks at their
              disposal, successful Arcanists rely on mobility to keep threats at
              a distance.{" "}
            </p>
            <p>
              Adding special ammo or spells will allow the Arcanist to improve
              in power.{" "}
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
                  "Serviceable leather breastpiece",
                  "Serviceable leather boots",
                  "Worn apprentice's hood",
                  "Worn cloak",
                  "Worn crossbow",
                ],
              },
              {
                category: "Inventory",
                items: [
                  "x2 Brand-new scroll of charging",
                  "Bubbly potion of restore magic",
                  "Serviceable magicstaff of opening",
                  "Serviceable magicstaff of fire",
                  "Faded spellbook of forcebolt",
                  "x15 Serviceable quiver of fire ammo",
                ],
              },
              {
                category: "Spells",
                items: ["Windgate"],
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
            <p>Arcanist Strategy</p>
          </>
        ),
      },
    ],
  },

  {
    id: "Joker",
    description: "The Joker is a class in Barony.",

    information: [
      { key: "HP", value: "30", image: HealthImage },
      { key: "Survival", value: "✰" },
      { key: "MP", value: "30", image: MagickaImage },
      { key: "Complexity", value: "✰✰✰" },
    ],
    stats: [
      { key: "STR", value: "-1", image: StrengthImage },
      { key: "DEX", value: "0", image: DexterityImage },
      { key: "CON", value: "-1", image: ConstitutionImage },
      { key: "INT", value: "1", image: IntelligenceImage },
      { key: "PER", value: "0", image: PerceptionImage },
      { key: "CHR", value: "1", image: CharismaImage },
    ],
    skills: [
      { key: "Leadership", value: "20", image: LeadershipImage },
      { key: "Stealth", value: "10", image: StealthImage },
      { key: "Trading", value: "25", image: TradingImage },
      { key: "Blocking", value: "0", image: BlockingImage },
      { key: "Lore", value: "0", image: LoreImage },
      { key: "Ranged", value: "20", image: RangedImage },
      { key: "Tinkering", value: "25", image: TinkeringImage },
      { key: "Unarmed", value: "0", image: UnarmedImage },
      { key: "Alchemy", value: "10", image: AlchemyImage },
      { key: "Swords", value: "0", image: SwordsImage },
      { key: "Sorcery", value: "10", image: SorceryImage },
      { key: "Polearms", value: "0", image: PolearmsImage },
      { key: "Mysticism", value: "25", image: MysticismImage },
      { key: "Axes", value: "0", image: AxesImage },
      { key: "Thauma", value: "0", image: ThaumaImage },
      { key: "Maces", value: "0", image: MacesImage },
    ],
    characterImageDescription: "The wild card.",
    characterImage: JokerImage,

    classSections: [
      {
        sectionName: "Class Info",
        sectionContent: (
          <>
            <p>The wild card. </p>
            <p>
              Jokers come with very little equipment, but they have a few tricks
              up their sleeves, nonetheless.{" "}
            </p>
            <p>
              Jokers tend to gravitate toward magical trickery and commanding
              followers, but their chaotic nature results in a lack of
              focus.{" "}
            </p>
            <p>Best to improvise and stay flexible.</p>
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
                items: ["Serviceable jester hat (+1)"],
              },
              {
                category: "Inventory",
                items: [
                  "Excellent slingshot",
                  "Flawed ring of levitation",
                  "Faded spellbook of confuse",
                  "Excellent lockpick",
                  "Serviceable blindfold",
                  "Bubbly potion of polymorph",
                  "x8 Slightly-aged cream pie",
                  "x3 Brand-new scroll of teleportation",
                  "Brand-new scroll of food",
                  "Flawless Luckstone",
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
            <p>Joker Strategy</p>
          </>
        ),
      },
    ],
  },

  {
    id: "Sexton",
    description: "The Sexton is a class in Barony. ",

    information: [
      { key: "HP", value: "30", image: HealthImage },
      { key: "Survival", value: "✰✰✰" },
      { key: "MP", value: "35", image: MagickaImage },
      { key: "Complexity", value: "✰✰✰✰" },
    ],
    stats: [
      { key: "STR", value: "-1", image: StrengthImage },
      { key: "DEX", value: "1", image: DexterityImage },
      { key: "CON", value: "-1", image: ConstitutionImage },
      { key: "INT", value: "1", image: IntelligenceImage },
      { key: "PER", value: "0", image: PerceptionImage },
      { key: "CHR", value: "0", image: CharismaImage },
    ],
    skills: [
      { key: "Leadership", value: "0", image: LeadershipImage },
      { key: "Stealth", value: "40", image: StealthImage },
      { key: "Trading", value: "0", image: TradingImage },
      { key: "Blocking", value: "10", image: BlockingImage },
      { key: "Lore", value: "0", image: LoreImage },
      { key: "Ranged", value: "20", image: RangedImage },
      { key: "Tinkering", value: "0", image: TinkeringImage },
      { key: "Unarmed", value: "0", image: UnarmedImage },
      { key: "Alchemy", value: "20", image: AlchemyImage },
      { key: "Swords", value: "0", image: SwordsImage },
      { key: "Sorcery", value: "0", image: SorceryImage },
      { key: "Polearms", value: "0", image: PolearmsImage },
      { key: "Mysticism", value: "40", image: MysticismImage },
      { key: "Axes", value: "0", image: AxesImage },
      { key: "Thauma", value: "0", image: ThaumaImage },
      { key: "Maces", value: "10", image: MacesImage },
    ],
    characterImageDescription: "A temple officer.",
    characterImage: SextonImage,

    classSections: [
      {
        sectionName: "Class Info",
        sectionContent: (
          <>
            <p>
              A temple officer who serves unseen, using stealth and magic to
              slip their way through the dungeon with the air of a few rare
              tools.{" "}
            </p>
            <p>
              Sextons are fastidious planners, and their diverse talents bring
              success when they make time to approach each problem thoughtfully.
            </p>
            <p>Sextons who panic fail to use the tools at their disposal.</p>
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
                  "Serviceable fez",
                  "Worn leather breastpiece",
                  "Serviceable leather boots",
                  "Serviceable bronze mace ",
                  "2x Serviceable crystal shard",
                ],
              },
              {
                category: "Inventory",
                items: [
                  "3x Serviceable steel chakram",
                  "Faded spellbook of sleep",
                  "Faded spellbook of opening",
                  "Faded spellbook of locking",
                  "Slightly-aged bread",
                  "Slightly-aged tomalley",
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
            <p>Sexton Strategy</p>
          </>
        ),
      },
    ],
  },

  {
    id: "Ninja",
    description:
      "The Ninja is a class in Barony. They start with very high skills in Stealth and Swords. They also carry a variety of equipment to help them dispatch enemies before even being seen.",

    information: [
      { key: "HP", value: "35", image: HealthImage },
      { key: "Survival", value: "✰✰" },
      { key: "MP", value: "20", image: MagickaImage },
      { key: "Complexity", value: "✰✰" },
    ],
    stats: [
      { key: "STR", value: "0", image: StrengthImage },
      { key: "DEX", value: "2", image: DexterityImage },
      { key: "CON", value: "-1", image: ConstitutionImage },
      { key: "INT", value: "-2", image: IntelligenceImage },
      { key: "PER", value: "1", image: PerceptionImage },
      { key: "CHR", value: "0", image: CharismaImage },
    ],
    skills: [
      { key: "Leadership", value: "0", image: LeadershipImage },
      { key: "Stealth", value: "60", image: StealthImage },
      { key: "Trading", value: "0", image: TradingImage },
      { key: "Blocking", value: "0", image: BlockingImage },
      { key: "Lore", value: "0", image: LoreImage },
      { key: "Ranged", value: "40", image: RangedImage },
      { key: "Tinkering", value: "0", image: TinkeringImage },
      { key: "Unarmed", value: "0", image: UnarmedImage },
      { key: "Alchemy", value: "0", image: AlchemyImage },
      { key: "Swords", value: "60", image: SwordsImage },
      { key: "Sorcery", value: "0", image: SorceryImage },
      { key: "Polearms", value: "0", image: PolearmsImage },
      { key: "Mysticism", value: "0", image: MysticismImage },
      { key: "Axes", value: "0", image: AxesImage },
      { key: "Thauma", value: "0", image: ThaumaImage },
      { key: "Maces", value: "0", image: MacesImage },
    ],
    characterImageDescription: "A highly specialized assassin.",
    characterImage: NinjaImage,

    classSections: [
      {
        sectionName: "Class Info",
        sectionContent: (
          <>
            <p>
              A highly specialyzed assassin. They ambush foes with swords or
              ranged weapons, using a few other tricks to get out of bad
              situations.{" "}
            </p>
            <p>
              Ninjas do well to find backup blades. Their fragile sword is
              sharp, but a break at the wrong time can be fatal.{" "}
            </p>
            <p>
              To improve their chances, a Ninja must remain in control of how a
              fight begins.
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
                  "Decrepit crystal sword",
                  "Serviceable assassin's hood",
                  "Serviceable tunic",
                  "Serviceable leather boots of speed",
                  "Serviceable bandit mask",
                  "Excellent black cloak",
                ],
              },
              {
                category: "Inventory",
                items: [
                  "5x Worn iron dagger",
                  "x Serviceable beartrap",
                  "Bubbly potion of paralysis",
                  "Bubbly potion of invisibility",
                  "3x Marked scroll of teleportation",
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
            <p>Ninja Strategy</p>
          </>
        ),
      },
    ],
  },

  {
    id: "Monk",
    description:
      "The Monk is a class in Barony that specializes in Unarmed. Starting with high Unarmed, Blocking, and Constitution, it allows the Monk to excel in fights with only their fists. ",

    information: [
      { key: "HP", value: "40", image: HealthImage },
      { key: "Survival", value: "✰✰✰✰" },
      { key: "MP", value: "30", image: MagickaImage },
      { key: "Complexity", value: "✰" },
    ],
    stats: [
      { key: "STR", value: "1", image: StrengthImage },
      { key: "DEX", value: "0", image: DexterityImage },
      { key: "CON", value: "2", image: ConstitutionImage },
      { key: "INT", value: "0", image: IntelligenceImage },
      { key: "PER", value: "-1", image: PerceptionImage },
      { key: "CHR", value: "0", image: CharismaImage },
    ],
    skills: [
      { key: "Leadership", value: "10", image: LeadershipImage },
      { key: "Stealth", value: "0", image: StealthImage },
      { key: "Trading", value: "0", image: TradingImage },
      { key: "Blocking", value: "40", image: BlockingImage },
      { key: "Lore", value: "0", image: LoreImage },
      { key: "Ranged", value: "0", image: RangedImage },
      { key: "Tinkering", value: "0", image: TinkeringImage },
      { key: "Unarmed", value: "50", image: UnarmedImage },
      { key: "Alchemy", value: "20", image: AlchemyImage },
      { key: "Swords", value: "0", image: SwordsImage },
      { key: "Sorcery", value: "0", image: SorceryImage },
      { key: "Polearms", value: "0", image: PolearmsImage },
      { key: "Mysticism", value: "0", image: MysticismImage },
      { key: "Axes", value: "0", image: AxesImage },
      { key: "Thauma", value: "25", image: ThaumaImage },
      { key: "Maces", value: "0", image: MacesImage },
    ],
    characterImageDescription: "A disciplined and hardy martialist.",
    characterImage: MonkImage,

    classSections: [
      {
        sectionName: "Class Info",
        sectionContent: (
          <>
            <p>
              Disciplined and hardy. With little in the way of offensive
              training and material goods, Monks rely on their excellent
              fortitude and adaptability.{" "}
            </p>
            <p>
              The Monk is exceptional at blocking attacks, and is very slow to
              hunger.{" "}
            </p>
            <p>
              Approaching challenges patiently plays to the Monk's strengths.
              Keep a torch or shield at hand.{" "}
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
                  "Excellent tunic",
                  "Excellent brass knuckles",
                  "Flawed ring of slow digestion",
                ],
              },
              {
                category: "Inventory",
                items: ["Faded spellbook of light", "Worn torch"],
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
            <p>Monk Strategy</p>
          </>
        ),
      },
    ],
  },

  {
    id: "Conjurer",
    description:
      "The Conjurer is a class in Barony that was initially introduced in the Myths & Outcasts DLC. It is associated with the Skeleton race and comes with the unique Conjure Skeleton spell, allowing the user to raise an army to fight on their side. ",

    information: [
      { key: "HP", value: "30", image: HealthImage },
      { key: "Survival", value: "✰✰✰" },
      { key: "MP", value: "45", image: MagickaImage },
      { key: "Complexity", value: "✰✰✰" },
    ],
    stats: [
      { key: "STR", value: "0", image: StrengthImage },
      { key: "DEX", value: "-1", image: DexterityImage },
      { key: "CON", value: "2", image: ConstitutionImage },
      { key: "INT", value: "1", image: IntelligenceImage },
      { key: "PER", value: "-2", image: PerceptionImage },
      { key: "CHR", value: "0", image: CharismaImage },
    ],
    skills: [
      { key: "Leadership", value: "40", image: LeadershipImage },
      { key: "Stealth", value: "20", image: StealthImage },
      { key: "Trading", value: "0", image: TradingImage },
      { key: "Blocking", value: "0", image: BlockingImage },
      { key: "Lore", value: "0", image: LoreImage },
      { key: "Ranged", value: "20", image: RangedImage },
      { key: "Tinkering", value: "0", image: TinkeringImage },
      { key: "Unarmed", value: "0", image: UnarmedImage },
      { key: "Alchemy", value: "20", image: AlchemyImage },
      { key: "Swords", value: "0", image: SwordsImage },
      { key: "Sorcery", value: "0", image: SorceryImage },
      { key: "Polearms", value: "0", image: PolearmsImage },
      { key: "Mysticism", value: "40", image: MysticismImage },
      { key: "Axes", value: "0", image: AxesImage },
      { key: "Thauma", value: "15", image: ThaumaImage },
      { key: "Maces", value: "0", image: MacesImage },
    ],
    characterImageDescription: "A frail but adept magic user.",
    characterImage: ConjurerImage,

    classSections: [
      {
        sectionName: "Class Info",
        sectionContent: (
          <>
            <p>
              A frail but adept magic user, able to conjure allies with a
              reliable spell.
            </p>
            <p>
              Unavailable to any other class, the Conjure Skeleton spell
              provides a persistent companion, even if it is killed.
            </p>
            <p>
              Conjured allies grow in power, so long as they are permitted to
              kill foes and grow in experience. Nurture these allies to succeed.
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
                  "Excellent magicstaff of lightning",
                  "Excellent lantern",
                  "Serviceable apprentice's hood",
                  "Serviceable cloak",
                ],
              },
              {
                category: "Inventory",
                items: [
                  "Bubbly potion of restore magic",
                  "Torn spellbook of poison",
                ],
              },
              {
                category: "Spells",
                items: ["Conjure skeleton"],
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
              The Conjure Skeleton spell conjures 1 Knight (melee) Skeleton by
              default.{" "}
            </p>
            <ul>
              <li>
                Once the player's Mysticism skill reaches IV (Mysticism +
                Intelligence = 60), the spell summons an extra Sentinel (ranged)
                Skeleton.
              </li>
              <li>
                The conjured Skeletons' gears are upgraded every 5 levels. The
                last gear upgrade is gained upon them reaching level 30.
              </li>
              <li>
                Conjured skeletons keep their level inbetween deaths and
                resummons, but lose their EXP progress to the next level.
              </li>
            </ul>
            <p>Like any other followers, the Conjurer's summons: </p>
            <ul>
              <li>Will NOT get EXP when other players kill the enemies.</li>
              <li>
                Will get individual bonus EXP if dealing the killing blow.
              </li>
            </ul>
          </>
        ),
      },

      {
        sectionName: "Strategy",
        sectionContent: (
          <>
            <p>Conjurer Strategy</p>
          </>
        ),
      },
    ],
  },

  {
    id: "Accursed",
    description:
      "The Accursed is a class in Barony that was initially introduced in the Myths & Outcasts DLC. It is associated with the Vampire race and gains powerful stats bonuses, at the cost of losing hunger at a rapid rate.",

    information: [
      { key: "HP", value: "30", image: HealthImage },
      { key: "Survival", value: "✰" },
      { key: "MP", value: "40", image: MagickaImage },
      { key: "Complexity", value: "✰✰✰" },
    ],
    stats: [
      { key: "STR", value: "-2", image: StrengthImage },
      { key: "DEX", value: "-3", image: DexterityImage },
      { key: "CON", value: "-2", image: ConstitutionImage },
      { key: "INT", value: "5", image: IntelligenceImage },
      { key: "PER", value: "-1", image: PerceptionImage },
      { key: "CHR", value: "0", image: CharismaImage },
    ],
    skills: [
      { key: "Leadership", value: "0", image: LeadershipImage },
      { key: "Stealth", value: "40", image: StealthImage },
      { key: "Trading", value: "0", image: TradingImage },
      { key: "Blocking", value: "0", image: BlockingImage },
      { key: "Lore", value: "20", image: LoreImage },
      { key: "Ranged", value: "0", image: RangedImage },
      { key: "Tinkering", value: "0", image: TinkeringImage },
      { key: "Unarmed", value: "40", image: UnarmedImage },
      { key: "Alchemy", value: "0", image: AlchemyImage },
      { key: "Swords", value: "0", image: SwordsImage },
      { key: "Sorcery", value: "60", image: SorceryImage },
      { key: "Polearms", value: "0", image: PolearmsImage },
      { key: "Mysticism", value: "20", image: MysticismImage },
      { key: "Axes", value: "0", image: AxesImage },
      { key: "Thauma", value: "0", image: ThaumaImage },
      { key: "Maces", value: "0", image: MacesImage },
    ],
    characterImageDescription: "The insatiable fiend.",
    characterImage: AccursedImage,

    classSections: [
      {
        sectionName: "Class Info",
        sectionContent: (
          <>
            <p>
              The Accursed suffer from bestial hunger, but gain supernatural
              magic power and speed.{" "}
            </p>
            <p>
              An arcane library found deep within the dungeon may have a
              cure.{" "}
            </p>
            <p>
              While afflicted, the Accursed must move quickly to evade
              starvation. However powerful, those lacking expertise will
              fail.{" "}
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
                  "Excellent silver doublet",
                  "Serviceable suede gloves",
                  "Serviceable suede boots",
                ],
              },
              {
                category: "Inventory",
                items: [
                  "x2 Bubbly potion of restore magic",
                  "x3 Fresh vial of blood",
                  "Faded spellbook of invisibility",
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
              Chance for enemies to drop blood vials Vial Red Icon.png on death.
              Blood vials will only drop if at least one person on the team is a
              vampire or the accursed class.
            </p>
            <ul>
              <li>
                Entities without "blood" won't drop blood vials. That includes:
                Slimes, Skeletons, Crystal Golems, Shadows, Automatons, or
                Tinkering Creations.
              </li>
              <li>Blood vials can be consumed to feed.</li>
            </ul>

            <table>
              <tr>
                <th>Event</th>
                <td>Bleed Effect Left?</td>
                <td>Chance</td>
                <td>Note</td>
              </tr>
              <tr>
                <th>Backstab / Flanking kill</th>
                <td>N/A</td>
                <td>100%</td>
                <td>/</td>
              </tr>
              <tr>
                <th>Killing blow with Bloodletting</th>
                <td>N/A</td>
                <td>100%</td>
                <td>/</td>
              </tr>
              <tr>
                <td>Killing blow</td>
                <td>5+ seconds</td>
                <td>50%</td>
                <td>/</td>
              </tr>
              <tr>
                <td>Killing blow</td>
                <td>3-5 seconds</td>
                <td>25%</td>
                <td>/</td>
              </tr>
              <tr>
                <td>Killing blow</td>
                <td>0-3 seconds</td>
                <td>12.5%</td>
                <td>Not 0s</td>
              </tr>
              <tr>
                <td>Killing blow</td>
                <td>None</td>
                <td>10%</td>
                <td>/</td>
              </tr>
              <tr>
                <td>Vampiric Curse/Aura</td>
                <td>N/A</td>
                <td>20%</td>
                <td>Bonus vial</td>
              </tr>
            </table>

            <p>Starts with the Vampiric Curse:</p>
            <ul>
              <li>+3 Strength</li>
              <li>+3 Dexterity</li>
              <li>
                300% Hunger rate, losing 5 points every second. If hunger is
                disabled, afflicted player takes damage over time.
              </li>
              <li>
                The ring of slow digestion has no effect, but the Sweetgrass
                Sprig does work.
              </li>
              <li>Chance to cause Bleed status with Unarmed attacks.</li>
              <li>Chance to steal HP on Unarmed assassinations.</li>
            </ul>
            <p>
              The curse can be cured at the Mystic Library. If a player has
              selected the accursed class, it is guaranteed that a spellbook of
              Vampiric Aura will appear in a chest.
            </p>
            <p>
              This chest will have a particle effect emanating from it, being
              the same red particle effect that the Accursed is associated with.
            </p>
            <p>
              The Vampiric Aura will turn off the curse permanently by replacing
              it. The Aura effects are silimar but more extreme than the
              curse's:{" "}
            </p>
            <ul>
              <li>
                Percentage increase to Strength and Dexterity, instead of a flat
                value.
              </li>
              <li>600% Hunger rate.</li>
              <li>Lifesteal on hit instead of kill.</li>
              <li>HP regen is disabled.</li>
              <li>It costs 3 mana per second to maintain the Aura.</li>
              <li>Can be toggled on and off at will.</li>
            </ul>
          </>
        ),
      },

      {
        sectionName: "Strategy",
        sectionContent: (
          <>
            <p>Accursed Strategy</p>
          </>
        ),
      },
    ],
  },

  {
    id: "Mesmer",
    description:
      "The Mesmer is a class in Barony that was initially introduced in the Myths & Outcasts DLC. It is associated with the Succubus race and comes with the unique Charm Monster spell, allowing the user to recruit monsters without Charm Staff and before learning Dominate. ",

    information: [
      { key: "HP", value: "25", image: HealthImage },
      { key: "Survival", value: "✰✰✰" },
      { key: "MP", value: "40", image: MagickaImage },
      { key: "Complexity", value: "✰✰✰" },
    ],
    stats: [
      { key: "STR", value: "-2", image: StrengthImage },
      { key: "DEX", value: "-2", image: DexterityImage },
      { key: "CON", value: "-3", image: ConstitutionImage },
      { key: "INT", value: "2", image: IntelligenceImage },
      { key: "PER", value: "2", image: PerceptionImage },
      { key: "CHR", value: "4", image: CharismaImage },
    ],
    skills: [
      { key: "Leadership", value: "60", image: LeadershipImage },
      { key: "Stealth", value: "0", image: StealthImage },
      { key: "Trading", value: "0", image: TradingImage },
      { key: "Blocking", value: "0", image: BlockingImage },
      { key: "Lore", value: "0", image: LoreImage },
      { key: "Ranged", value: "0", image: RangedImage },
      { key: "Tinkering", value: "0", image: TinkeringImage },
      { key: "Unarmed", value: "0", image: UnarmedImage },
      { key: "Alchemy", value: "0", image: AlchemyImage },
      { key: "Swords", value: "0", image: SwordsImage },
      { key: "Sorcery", value: "25", image: SorceryImage },
      { key: "Polearms", value: "20", image: PolearmsImage },
      { key: "Mysticism", value: "60", image: MysticismImage },
      { key: "Axes", value: "0", image: AxesImage },
      { key: "Thauma", value: "0", image: ThaumaImage },
      { key: "Maces", value: "0", image: MacesImage },
    ],
    characterImageDescription: "A captivating temptress.",
    characterImage: MesmerImage,

    classSections: [
      {
        sectionName: "Class Info",
        sectionContent: (
          <>
            <p>
              The Mesmer uses the Charm spell and leadership ability to enlist
              powerful allies.{" "}
            </p>
            <p>
              Mermers may only Charm one at a time, so they should be strategic
              with recruiting.{" "}
            </p>
            <p>
              Charmed allies get stronger with experience; Nurturing them can be
              wise. The Charm spell is difficult to learn; Successful Mesmers
              must practice other kinds of magic.{" "}
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
                  "Excellent magicstaff of charm monster (+1)",
                  "Serviceable apprentice's hood",
                  "Serviceable silver cloak",
                  "Flawless ring of protection (+2)",
                ],
              },
              {
                category: "Inventory",
                items: [
                  "Serviceable magicstaff of cold",
                  "2x Bubbly potion of restore magic",
                  "3x Bubbly potion of confusion ",
                  "Torn spellbook of charm monster",
                ],
              },
              {
                category: "Spells",
                items: ["Compel"],
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
              The spellbook of charm monster and its Charm Monster spell are
              native to the Mesmer.
            </p>
            <ul>
              <li>
                The spell can only be learned when reaching Mysticism V (level
                80) skill tier.
              </li>
            </ul>
            <p>
              Much like the magicstaff of charm monster, the Charm Monster
              spells:{" "}
            </p>
            <ul>
              <li>
                Attempts to charm a monster into an ally (success varies with
                monster type).
              </li>
              <li>Inflicts Pacify if unable to charm.</li>
              <li>+30% success chance on drunk or confused monsters.</li>
              <li>+X% success chance, where X is your intelligence 2x.</li>
              <li>
                Additional chance based on your leadership skill and charisma
                stat.
              </li>
              <li>Can charm drunk or confused humans.</li>
              <li>Can only charm 1 entity at once.</li>
            </ul>
            <p>Like any other followers, the Mesmer's charmed monsters: </p>
            <ul>
              <li>Will NOT get EXP when other players kill the enemies.</li>
              <li>
                Will get individual bonus EXP if dealing the killing blow.
              </li>
            </ul>
          </>
        ),
      },

      {
        sectionName: "Strategy",
        sectionContent: (
          <>
            <p>Mesmer Strategy</p>
          </>
        ),
      },
    ],
  },

  {
    id: "Brewer",
    description:
      "The Brewer is a class in Barony that was initially introduced in the Myths & Outcasts DLC. It is associated with the Goatmen race.",

    information: [
      { key: "HP", value: "40", image: HealthImage },
      { key: "Survival", value: "✰✰" },
      { key: "MP", value: "20", image: MagickaImage },
      { key: "Complexity", value: "✰✰✰✰✰" },
    ],
    stats: [
      { key: "STR", value: "-2", image: StrengthImage },
      { key: "DEX", value: "1", image: DexterityImage },
      { key: "CON", value: "-2", image: ConstitutionImage },
      { key: "INT", value: "-2", image: IntelligenceImage },
      { key: "PER", value: "1", image: PerceptionImage },
      { key: "CHR", value: "1", image: CharismaImage },
    ],
    skills: [
      { key: "Leadership", value: "25", image: LeadershipImage },
      { key: "Stealth", value: "0", image: StealthImage },
      { key: "Trading", value: "10", image: TradingImage },
      { key: "Blocking", value: "0", image: BlockingImage },
      { key: "Lore", value: "10", image: LoreImage },
      { key: "Ranged", value: "0", image: RangedImage },
      { key: "Tinkering", value: "0", image: TinkeringImage },
      { key: "Unarmed", value: "25", image: UnarmedImage },
      { key: "Alchemy", value: "50", image: AlchemyImage },
      { key: "Swords", value: "0", image: SwordsImage },
      { key: "Sorcery", value: "0", image: SorceryImage },
      { key: "Polearms", value: "0", image: PolearmsImage },
      { key: "Mysticism", value: "0", image: MysticismImage },
      { key: "Axes", value: "10", image: AxesImage },
      { key: "Thauma", value: "0", image: ThaumaImage },
      { key: "Maces", value: "0", image: MacesImage },
    ],
    characterImageDescription: "A talented alchemist.",
    characterImage: BrewerImage,

    classSections: [
      {
        sectionName: "Class Info",
        sectionContent: (
          <>
            <p>
              A talented alchemist who is also comfortable with the
              relationships and bar-room brawls that a good brew will
              bring.{" "}
            </p>
            <p>
              Successful Brewers make it a priority to collect, brew, and
              duplicate potions to never run on short supply.{" "}
            </p>
            <p>
              A backpack full of bottles allows the Brewer to adapt with short
              notice.{" "}
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
                  "3x Serviceable empty bottle",
                  "Worn iron boots",
                  "Serviceable backpack",
                ],
              },
              {
                category: "Inventory",
                items: [
                  "Excellent iron axe",
                  "Torn copy of Bottle Book",
                  "Excellent alembic",
                  "Slightly-aged bread",
                  "2x Bubbly potion of firestorm",
                  "2x Bubbly potion of acid",
                  "3x Bubbly bottle of booze",
                  "2x Bubbly bottle of fruit juice ",
                  "Bubbly potion of polymorph ",
                  "2x Bubbly potion of blindness",
                  "Bubbly potion of speed",
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
              Brewer begins the game with an alembic, which is otherwise not
              guaranteed to obtain within a run. It allows early Alchemy.{" "}
            </p>
          </>
        ),
      },

      {
        sectionName: "Strategy",
        sectionContent: (
          <>
            <p>Brewer Strategy</p>
          </>
        ),
      },
    ],
  },

  {
    id: "Mechanist",
    description:
      "The Mechanist is a class in Barony that was initially introduced in the Legends & Pariahs DLC. It is associated with the Automaton race and excels in using the Tinkering Kit to turn useless items into scrap to create turrets, traps, and more. ",

    information: [
      { key: "HP", value: "25", image: HealthImage },
      { key: "Survival", value: "✰✰" },
      { key: "MP", value: "20", image: MagickaImage },
      { key: "Complexity", value: "✰✰✰✰✰" },
    ],
    stats: [
      { key: "STR", value: "-2", image: StrengthImage },
      { key: "DEX", value: "0", image: DexterityImage },
      { key: "CON", value: "-3", image: ConstitutionImage },
      { key: "INT", value: "1", image: IntelligenceImage },
      { key: "PER", value: "0", image: PerceptionImage },
      { key: "CHR", value: "0", image: CharismaImage },
    ],
    skills: [
      { key: "Leadership", value: "0", image: LeadershipImage },
      { key: "Stealth", value: "0", image: StealthImage },
      { key: "Trading", value: "10", image: TradingImage },
      { key: "Blocking", value: "0", image: BlockingImage },
      { key: "Lore", value: "0", image: LoreImage },
      { key: "Ranged", value: "10", image: RangedImage },
      { key: "Tinkering", value: "40", image: TinkeringImage },
      { key: "Unarmed", value: "0", image: UnarmedImage },
      { key: "Alchemy", value: "10", image: AlchemyImage },
      { key: "Swords", value: "0", image: SwordsImage },
      { key: "Sorcery", value: "0", image: SorceryImage },
      { key: "Polearms", value: "0", image: PolearmsImage },
      { key: "Mysticism", value: "0", image: MysticismImage },
      { key: "Axes", value: "0", image: AxesImage },
      { key: "Thauma", value: "0", image: ThaumaImage },
      { key: "Maces", value: "0", image: MacesImage },
    ],
    characterImageDescription: "A skilled craftsman.",
    characterImage: MechanistImage,

    classSections: [
      {
        sectionName: "Class Info",
        sectionContent: (
          <>
            <p>
              A skilled craftsman, the Mechanist uses a toolkit to make and
              maintain mechanical weapons, letting contraptions do the dirty
              work.
            </p>
            <p>
              Successful Mechanists use foresight to plan ahead and are prepared
              with the right tool for any problem.
            </p>
            <p>Those who rely on strength and speed may struggle. </p>
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
                  "Excellent crossbow ",
                  "Excellent leather apron",
                  "Excellent tinkering kit",
                ],
              },
              {
                category: "Inventory",
                items: [
                  "Excellent beartrap",
                  "Excellent sleep trap ",
                  "Excellent lockpick",
                  "Serviceable empty bottle",
                  "Simple dummybot",
                  "Simple sentry bot",
                  "Marked scroll of fire ",
                  "x8 Decrepit magic scrap",
                  "x16 Decrepit metal scrap",
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
              The Leather Apron is native to the mechanist, and gives the
              following buff:{" "}
            </p>
            <ul>
              <li>
                Burning Resistance: grants immunity to the burning effect and
                lava.
              </li>
            </ul>
          </>
        ),
      },

      {
        sectionName: "Strategy",
        sectionContent: (
          <>
            <p>Mechanist Strategy</p>
          </>
        ),
      },
    ],
  },

  {
    id: "Punisher",
    description:
      "The Punisher is a class in Barony that was introduced in the Legends & Pariahs DLC. It is associated with the Incubus race and comes with the exclusive Whip weapon, Executioner Hood, and Inner Demon spell. ",

    information: [
      { key: "HP", value: "30", image: HealthImage },
      { key: "Survival", value: "✰✰" },
      { key: "MP", value: "30", image: MagickaImage },
      { key: "Complexity", value: "✰✰✰✰" },
    ],
    stats: [
      { key: "STR", value: "-1", image: StrengthImage },
      { key: "DEX", value: "1", image: DexterityImage },
      { key: "CON", value: "-1", image: ConstitutionImage },
      { key: "INT", value: "-1", image: IntelligenceImage },
      { key: "PER", value: "0", image: PerceptionImage },
      { key: "CHR", value: "0", image: CharismaImage },
    ],
    skills: [
      { key: "Leadership", value: "0", image: LeadershipImage },
      { key: "Stealth", value: "0", image: StealthImage },
      { key: "Trading", value: "0", image: TradingImage },
      { key: "Blocking", value: "0", image: BlockingImage },
      { key: "Lore", value: "0", image: LoreImage },
      { key: "Ranged", value: "25", image: RangedImage },
      { key: "Tinkering", value: "0", image: TinkeringImage },
      { key: "Unarmed", value: "0", image: UnarmedImage },
      { key: "Alchemy", value: "0", image: AlchemyImage },
      { key: "Swords", value: "0", image: SwordsImage },
      { key: "Sorcery", value: "20", image: SorceryImage },
      { key: "Polearms", value: "0", image: PolearmsImage },
      { key: "Mysticism", value: "20", image: MysticismImage },
      { key: "Axes", value: "25", image: AxesImage },
      { key: "Thauma", value: "0", image: ThaumaImage },
      { key: "Maces", value: "0", image: MacesImage },
    ],
    characterImageDescription: "A harbinger of pain and suffering.",
    characterImage: PunisherImage,

    classSections: [
      {
        sectionName: "Class Info",
        sectionContent: (
          <>
            <p>
              The Punisher picks unfair fights, toying with foes using dark
              magic and a whip before making the execution, or releasing one's
              inner demons to do the job.{" "}
            </p>
            <p>
              Punishers are not durable and must maintain control in
              combat.{" "}
            </p>
            <p>
              Staying mobile is the key to exploiting their unique whip's longer
              attack range.
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
                items: ["Worn whip", "Serviceable executioner hood"],
              },
              {
                category: "Inventory",
                items: [
                  "Decrepit crystal axe",
                  "Rough ring of conflict",
                  "Fresh meat",
                ],
              },
              {
                category: "Spells",
                items: ["Teleport Other", "Inner Demon"],
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
            <p>The Whip weapon is native to the punisher: </p>
            <ul>
              <li>Unbreakable ranged weapon with slower attacks.</li>
              <li>+50% melee attack range.</li>
              <li>Scales with STR/2 + DEX/2.</li>
              <li>+100% disarm chance on immobile or disoriented foes</li>
              <li>+33% disarm chance on drunk or confused foes</li>
              <li>+100% bleed chance on disarming strikes</li>
              <li>+20% bleed chance on backstab strikes</li>
            </ul>
            <p>The Inner Demon spell is unique to the punisher: </p>
            <ul>
              <li>Exorcises an inner demon that inflicts provoke.</li>
              <li>Damage delt to the demon is returned to the attacker.</li>
              <li>Spell consumes health equal to 10% of caster's max HP.</li>
              <li>Demon's stats are based on caster's.</li>
              <li>Only useable on each enemy once.</li>
            </ul>
            <p>
              The Executioner Hood is native to the punisher, and gives the
              following buff:{" "}
            </p>
            <ul>
              <li>Grants MP regen when inflicting Bleed on foes.</li>
            </ul>
          </>
        ),
      },

      {
        sectionName: "Strategy",
        sectionContent: (
          <>
            <p>Punisher Strategy</p>
          </>
        ),
      },
    ],
  },

  {
    id: "Shaman",
    description:
      "The Shaman is a class in Barony that was initially introduced in the Legends & Pariahs DLC. It is associated with the Goblin race and possesses the unique ability to transform into different enemies in the dungeon, gaining their powers in the process. ",

    information: [
      { key: "HP", value: "35", image: HealthImage },
      { key: "Survival", value: "✰✰" },
      { key: "MP", value: "40", image: MagickaImage },
      { key: "Complexity", value: "✰✰✰✰" },
    ],
    stats: [
      { key: "STR", value: "-1", image: StrengthImage },
      { key: "DEX", value: "0", image: DexterityImage },
      { key: "CON", value: "0", image: ConstitutionImage },
      { key: "INT", value: "2", image: IntelligenceImage },
      { key: "PER", value: "1", image: PerceptionImage },
      { key: "CHR", value: "1", image: CharismaImage },
    ],
    skills: [
      { key: "Leadership", value: "0", image: LeadershipImage },
      { key: "Stealth", value: "10", image: StealthImage },
      { key: "Trading", value: "0", image: TradingImage },
      { key: "Blocking", value: "0", image: BlockingImage },
      { key: "Lore", value: "0", image: LoreImage },
      { key: "Ranged", value: "0", image: RangedImage },
      { key: "Tinkering", value: "0", image: TinkeringImage },
      { key: "Unarmed", value: "10", image: UnarmedImage },
      { key: "Alchemy", value: "10", image: AlchemyImage },
      { key: "Swords", value: "0", image: SwordsImage },
      { key: "Sorcery", value: "0", image: SorceryImage },
      { key: "Polearms", value: "0", image: PolearmsImage },
      { key: "Mysticism", value: "40", image: MysticismImage },
      { key: "Axes", value: "0", image: AxesImage },
      { key: "Thauma", value: "0", image: ThaumaImage },
      { key: "Maces", value: "0", image: MacesImage },
    ],
    characterImageDescription:
      "The Shaman is a class in Barony that was initially introduced in the Legends & Pariahs DLC. It is associated with the Goblin race and possesses the unique ability to transform into different enemies in the dungeon, gaining their powers in the process. ",
    characterImage: ShamanImage,

    classSections: [
      {
        sectionName: "Class Info",
        sectionContent: (
          <>
            <p>
              The Shaman is a mystic whose connection to nature spirits allows
              them to shapeshift into bestial forms.{" "}
            </p>
            <p>
              Each form's talents provide diverse advantages in the
              dungeon.{" "}
            </p>
            <p>
              While transformed, Shamans make different friends, and can
              tolerate different food. Being a beast will influence how the
              Shaman grows.{" "}
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
                  "Excellent magicstaff of poison ",
                  "Serviceable shaman mask",
                ],
              },
              {
                category: "Inventory",
                items: [
                  "Excellent Enchanted Feather ",
                  "Worn bronze sword",
                  "x3 Rough rock ",
                ],
              },
              {
                category: "Spells",
                items: ["Rat Form", "Arthropod Form", "Troll Form", "Imp Form"],
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
            <p>The shaman can Shapeshift into different forms: </p>
            <ul>
              <li>Rat form</li>
              <li>
                <ul>
                  <li>
                    x1.25 Dexterity, x1.25 Intelligence, and x1.25 Perception
                    multipliers.
                  </li>
                  <li>
                    Grants the spells: Detect Food, and Speed (at lvl. 3+).
                  </li>
                  <li>Can recruit Rats.</li>
                </ul>
              </li>

              <li>Arthropod (Spider) form (at lvl. 3+)</li>
              <li>
                <ul>
                  <li>
                    x1.25 Strength, x1.25 Constitution, and x1.33 Perception
                    multipliers.
                  </li>
                  <li>
                    Grants the spells: Spray Web, and Poison (at lvl. 6+).
                  </li>
                  <li>Charged attacks have 25% chance to poison the target.</li>
                  <li>Can recruit Arthropods, Scarabs and Scorpions.</li>
                </ul>
              </li>

              <li>Troll form (at lvl. 6+)</li>
              <li>
                <ul>
                  <li>
                    x1.33 Strength, x0.67 Dexterity, x1.33 Constitution
                    multipliers.
                  </li>
                  <li>
                    Grants the spells: Power Strike, Troll's Blood (at lvl.
                    12+), and Fear (at lvl. 15+).
                  </li>
                  <li>
                    Power Strike: Charge a melee strike dealing 4x ATK damage.
                    This attack can dig boulders and walls on impact.
                  </li>
                  <li>Can recruit Trolls. Gnomes are neutral.</li>
                </ul>
              </li>

              <li>Imp form (at lvl. 12+)</li>
              <li>
                <ul>
                  <li>x1.33 Intelligence, x1.25 Perception multipliers.</li>
                  <li>Has Levitation.</li>
                  <li>
                    Grants the spells: Lightning, Confuse, and Elemental Focus
                    (at lvl. 15+).
                  </li>
                  <li>
                    Can hold magicstaffs and use spellbooks to cast spells.
                  </li>
                  <li>Can recruit Imps.</li>
                </ul>
              </li>
            </ul>

            <p>While shapeshifted:</p>
            <ul>
              <li>
                The player can cast spells, but won't be able to use most items.
              </li>
              <li>
                The Revert Form spell is granted to remove any
                shapeshifted/polymorphed effect at will.
              </li>
              <li>
                Equipments do NOT provide armor, but their bonus effects stay.
              </li>
              <li>
                Leveling up will give different stat ups according to the form's
                stat weights.
              </li>
            </ul>
            <p>
              The Shaman Mask is native to the shaman, and gives the following
              buff:{" "}
            </p>
            <ul>
              <li>+1 MP regen while shapeshifted.</li>
            </ul>
          </>
        ),
      },

      {
        sectionName: "Strategy",
        sectionContent: (
          <>
            <p>Shaman Strategy.</p>
          </>
        ),
      },
    ],
  },

  {
    id: "Hunter",
    description:
      "The Hunter is a class in Barony that specializes in ranged and was introduced in the Legends & Pariahs DLC. It is associated with the Insectoid race and comes with a variety of ranged tools and the exclusive Boomerang weapon to keep the opponents at bay. ",

    information: [
      { key: "HP", value: "20", image: HealthImage },
      { key: "Survival", value: "✰✰" },
      { key: "MP", value: "20", image: MagickaImage },
      { key: "Complexity", value: "✰✰" },
    ],
    stats: [
      { key: "STR", value: "-3", image: StrengthImage },
      { key: "DEX", value: "1", image: DexterityImage },
      { key: "CON", value: "-1", image: ConstitutionImage },
      { key: "INT", value: "-3", image: IntelligenceImage },
      { key: "PER", value: "3", image: PerceptionImage },
      { key: "CHR", value: "0", image: CharismaImage },
    ],
    skills: [
      { key: "Leadership", value: "0", image: LeadershipImage },
      { key: "Stealth", value: "25", image: StealthImage },
      { key: "Trading", value: "0", image: TradingImage },
      { key: "Blocking", value: "0", image: BlockingImage },
      { key: "Lore", value: "20", image: LoreImage },
      { key: "Ranged", value: "50", image: RangedImage },
      { key: "Tinkering", value: "10", image: TinkeringImage },
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
    characterImageDescription: "An astute tracker.",
    characterImage: HunterImage,

    classSections: [
      {
        sectionName: "Class Info",
        sectionContent: (
          <>
            <p>
              Equipped to track and bring foes down from afar, the Hunter uses
              special arrows and a magic boomerang to ensure they never have to
              toe-to-toe.{" "}
            </p>
            <p>Hunters are frail and must avoid being backed into a corner. </p>
            <p>
              Staying hidden and using ammo wisely is the key to their survival.
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
                  "Excellent longbow",
                  "Excellent leather boots",
                  "Worn iron bracers",
                  "Flawed amulet of poison resistance",
                ],
              },
              {
                category: "Inventory",
                items: [
                  "Excellent blindfold of telepathy",
                  "Decrepit boomerang",
                  "x40 Serviceable quiver of silver ammo",
                  "x40 Serviceable quiver of swift ammo",
                  "x20 Serviceable quiver of hunting ammo",
                  "x2 Bubbly potion of speed",
                  "x2 Brand-new scroll of conjure arrow",
                  "Fresh meat",
                  "Fresh fish",
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
            <p>The Boomerang is native to the hunter: </p>
            <ul>
              <li>
                Unbreakable throw weapon that always comes back to the player.
              </li>
              <li>
                Changing floors while the boomerang is coming back is safe, the
                boomerang will return to the player's inventory.
              </li>
            </ul>
          </>
        ),
      },

      {
        sectionName: "Strategy",
        sectionContent: (
          <>
            <p>Hunter Strategy.</p>
          </>
        ),
      },
    ],
  },

  {
    id: "Bard",
    description:
      "The Bard is a class in Barony that was initially introduced in the Deserters & Disciples DLC. It is associated with the Gnome race. Bards play multiple instruments which apply extraordinary buffs to themselves and allies scaling with level. Their class-unique Rapier allows the Bard to implement a mix of offence and defense by combining parrying with Alter Instrument, preparing themselves for a variety of situations within the dungeon. ",

    information: [
      { key: "HP", value: "25", image: HealthImage },
      { key: "Survival", value: "✰✰✰" },
      { key: "MP", value: "35", image: MagickaImage },
      { key: "Complexity", value: "✰✰✰" },
    ],
    stats: [
      { key: "STR", value: "-2", image: StrengthImage },
      { key: "DEX", value: "1", image: DexterityImage },
      { key: "CON", value: "-2", image: ConstitutionImage },
      { key: "INT", value: "0", image: IntelligenceImage },
      { key: "PER", value: "0", image: PerceptionImage },
      { key: "CHR", value: "3", image: CharismaImage },
    ],
    skills: [
      { key: "Leadership", value: "15", image: LeadershipImage },
      { key: "Stealth", value: "15", image: StealthImage },
      { key: "Trading", value: "15", image: TradingImage },
      { key: "Blocking", value: "0", image: BlockingImage },
      { key: "Lore", value: "50", image: LoreImage },
      { key: "Ranged", value: "0", image: RangedImage },
      { key: "Tinkering", value: "0", image: TinkeringImage },
      { key: "Unarmed", value: "0", image: UnarmedImage },
      { key: "Alchemy", value: "0", image: AlchemyImage },
      { key: "Swords", value: "20", image: SwordsImage },
      { key: "Sorcery", value: "0", image: SorceryImage },
      { key: "Polearms", value: "0", image: PolearmsImage },
      { key: "Mysticism", value: "15", image: MysticismImage },
      { key: "Axes", value: "0", image: AxesImage },
      { key: "Thauma", value: "0", image: ThaumaImage },
      { key: "Maces", value: "0", image: MacesImage },
    ],
    characterImageDescription: "A boistrous adventurer.",
    characterImage: BardImage,

    classSections: [
      {
        sectionName: "Class Info",
        sectionContent: (
          <>
            <p>
              This boistrous adventurer may not look like much of a fighter,
              magician, or rogue, but a swift blade and sharp wit makes the Bard
              a very capable combatant.
            </p>
            <p>
              Bards will need to master parrying with their sword to survive in
              close quarters.
            </p>
            <p>
              The right song for the right situation can bring swift success to
              a Bard's party.
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
                  "Worn rapier",
                  "Excellent flute",
                  "Excellent plumed cap",
                  "Excellent bandit leather",
                  "Serviceable loafers",
                ],
              },
              {
                category: "Inventory",
                items: [
                  "Excellent lyre",
                  "Bubbly potion of restore magic",
                  "2x Fresh fish",
                ],
              },
              {
                category: "Spells",
                items: ["Alter Instrument"],
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
            <p>The Rapier weapon is unique to the bard: </p>
            <ul>
              <li>
                Can perform a riposte by pressing Defend while holding Attack.
                The riposte window is 700ms
              </li>
              <li>
                While riposting, offhand's shield's AC is ignored, but
                additional ACs are given instead, from the ATK stat and Sword
                skill
              </li>
              <li>Scales with 50% DEX instead of STR</li>
              <li>Higher critical damages</li>
            </ul>
            <p>
              The bard also starts with instruments: the Flute, the Lyre, as
              well as a spell to alter them:{" "}
            </p>
            <ul>
              <li>Playing an instrument can slowly train Lore</li>
              <li>
                Lore determines the buff duration, which in turn determines the
                mana economy of the spell
              </li>
              <li>
                Instruments' inspiration tier and stat bonuses are ultimately
                determined by Charisma
              </li>
              <li>
                Each instruments give different inspiration bonuses. The stats
                modified by Inspirations give better bonuses the longer time is
                spent playing
              </li>
            </ul>

            <table>
              <tr>
                <td>Instrument</td>
                <td>Charisma -7</td>
                <td>Charisma 8-19</td>
                <td>Charisma 20+</td>
              </tr>

              <tr>
                <td>Flute</td>
                <td>5 DEX</td>
                <td>6-8 DEX (+1 DEX per 3 CHR)</td>
                <td>9+ DEX (+1 DEX per 5 CHR)</td>
              </tr>

              <tr>
                <td>Lyre</td>
                <td>5 PER</td>
                <td>6-8 PER (+1 PER per 3 CHR)</td>
                <td>9+ PER (+1 PER per 5 CHR)</td>
              </tr>

              <tr>
                <td>Drum</td>
                <td>5 STR</td>
                <td>6-8 STR (+1 STR per 3 CHR)</td>
                <td>9+ STR (+1 STR per 5 CHR)</td>
              </tr>

              <tr>
                <td>Lute</td>
                <td>15% PWR</td>
                <td>18%-24% PWR (+3% PWR per 3 CHR)</td>
                <td>27%+ PWR (+3% PWR per 5 CHR)</td>
              </tr>

              <tr>
                <td>Horn</td>
                <td>5 CON</td>
                <td>6-8 CON (+1 CON per 3 CHR)</td>
                <td>9+ CON (+1 CON per 5 CHR)</td>
              </tr>
            </table>

            <table>
              <tr>
                <td>Instrument</td>
                <td>Charisma 4-</td>
                <td>Charisma 5-19</td>
                <td>Charisma 20-39</td>
                <td>Charisma 40+</td>
              </tr>

              <tr>
                <td>Flute</td>
                <td>20% Critical Charge Speed</td>
                <td>20% to 30% Critical Charge Speed </td>
                <td>20% to 40% Critical Charge Speed</td>
                <td>20% to 50% Critical Charge Speed </td>
              </tr>

              <tr>
                <td>Lyre</td>
                <td>20% Damage Resistance</td>
                <td>20% to 25% Damage Resistance </td>
                <td>20% to 30% Damage Resistance </td>
                <td>20% to 35% Damage Resistance </td>
              </tr>

              <tr>
                <td>Drum</td>
                <td>10% Melee Armor Pierce</td>
                <td>10% to 15% Melee Armor Pierce </td>
                <td>10% to 20% Melee Armor Pierce </td>
                <td>10% to 25% Melee Armor Pierce</td>
              </tr>

              <tr>
                <td>Lute</td>
                <td>10% Evasion</td>
                <td>10% to 12% Evasion </td>
                <td>10% to 15% Evasion </td>
                <td>10% to 18% Evasion </td>
              </tr>

              <tr>
                <td>Horn</td>
                <td>2 Retaliation Damage</td>
                <td>2 to 5 Retaliation Damage</td>
                <td>2 to 8 Retaliation Damage</td>
                <td>2 to 10 Retaliation Damage</td>
              </tr>
            </table>
          </>
        ),
      },

      {
        sectionName: "Strategy",
        sectionContent: (
          <>
            <p>Bard Strategy</p>
          </>
        ),
      },
    ],
  },

  {
    id: "Sapper",
    description:
      "The Sapper is a class in Barony that was initially introduced in the Deserters & Disciples DLC. It is associated with the Gremlin race.",

    information: [
      { key: "HP", value: "30", image: HealthImage },
      { key: "Survival", value: "✰✰✰✰" },
      { key: "MP", value: "25", image: MagickaImage },
      { key: "Complexity", value: "✰✰✰✰" },
    ],
    stats: [
      { key: "STR", value: "1", image: StrengthImage },
      { key: "DEX", value: "1", image: DexterityImage },
      { key: "CON", value: "-3", image: ConstitutionImage },
      { key: "INT", value: "-2", image: IntelligenceImage },
      { key: "PER", value: "0", image: PerceptionImage },
      { key: "CHR", value: "-3", image: CharismaImage },
    ],
    skills: [
      { key: "Leadership", value: "0", image: LeadershipImage },
      { key: "Stealth", value: "25", image: StealthImage },
      { key: "Trading", value: "0", image: TradingImage },
      { key: "Blocking", value: "0", image: BlockingImage },
      { key: "Lore", value: "0", image: LoreImage },
      { key: "Ranged", value: "15", image: RangedImage },
      { key: "Tinkering", value: "0", image: TinkeringImage },
      { key: "Unarmed", value: "0", image: UnarmedImage },
      { key: "Alchemy", value: "25", image: AlchemyImage },
      { key: "Swords", value: "15", image: SwordsImage },
      { key: "Sorcery", value: "0", image: SorceryImage },
      { key: "Polearms", value: "0", image: PolearmsImage },
      { key: "Mysticism", value: "0", image: MysticismImage },
      { key: "Axes", value: "0", image: AxesImage },
      { key: "Thauma", value: "0", image: ThaumaImage },
      { key: "Maces", value: "50", image: MacesImage },
    ],
    characterImageDescription: "A resourceful soldier.",
    characterImage: SapperImage,

    classSections: [
      {
        sectionName: "Class Info",
        sectionContent: (
          <>
            <p>
              A resourceful soldier, the Sapper has several tools that help
              destroy foes beyond the front lines.
            </p>
            <p>
              But lacking the defensive prowess of other fighters, they must
              take care not to be overwhelmed by close-quarters combat.
            </p>
            <p>
              Successful Sappers combine their tools to secure decisive victory.
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
                  "Serviceable steel flail",
                  "Excellent teal hood",
                  "Excellent shawl",
                  "Worn leather gloves",
                  "Worn cleats",
                  "Worn eyepatch",
                  "Flawless amulet of burning resistance",
                  "Excellent frypan",
                ],
              },
              {
                category: "Inventory",
                items: [
                  "3x Serviceable bolas",
                  "3x Serviceable towel",
                  "Mouldy meat",
                  "Mouldy bread",
                ],
              },
              {
                category: "Spells",
                items: ["Booby Trap"],
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
              Sapper begins the game with a frypan Frypan Icon.png, which is
              otherwise not guaranteed to obtain within a run. It allows early
              Cooking.
            </p>
            <p>
              The Booby Trap Booby Trap Icon.png spell is also unique to the
              Sapper.{" "}
            </p>
          </>
        ),
      },

      {
        sectionName: "Strategy",
        sectionContent: (
          <>
            <p>Sapper Strategy</p>
          </>
        ),
      },
    ],
  },

  {
    id: "Scion",
    description:
      "The Scion is a class in Barony that was initially introduced in the Deserters & Disciples DLC. It is associated with the Dryad race.",

    information: [
      { key: "HP", value: "20", image: HealthImage },
      { key: "Survival", value: "✰✰" },
      { key: "MP", value: "50", image: MagickaImage },
      { key: "Complexity", value: "✰✰✰✰✰" },
    ],
    stats: [
      { key: "STR", value: "-2", image: StrengthImage },
      { key: "DEX", value: "-2", image: DexterityImage },
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
      { key: "Sorcery", value: "40", image: SorceryImage },
      { key: "Polearms", value: "0", image: PolearmsImage },
      { key: "Mysticism", value: "40", image: MysticismImage },
      { key: "Axes", value: "0", image: AxesImage },
      { key: "Thauma", value: "40", image: ThaumaImage },
      { key: "Maces", value: "0", image: MacesImage },
    ],
    characterImageDescription: "A disciple of all magic.",
    characterImage: ScionImage,

    classSections: [
      {
        sectionName: "Class Info",
        sectionContent: (
          <>
            <p>
              Though very well trained in all known disciplines of magic, the
              Scion is ill-fit for physical battle.
            </p>
            <p>
              Nevertheless, the Scion has ways to keep enemies at bay while a
              spell does the work.
            </p>
            <p>
              A successful Scion is very capable in the learning of new spells
              on their quest.
            </p>
            <p>They should expect to adapt with that advantage.</p>
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
                  "Excellent archon scepter",
                  "Serviceable wizard robe",
                  "Worn quilted boots",
                  "Excellent icon of void rift",
                ],
              },
              {
                category: "Inventory",
                items: [
                  "2x Worn silver key",
                  "2x Plain potion of restore magic",
                  "Plain potion of healing",
                  "2x Slightly-aged bread (+1)",
                ],
              },
              {
                category: "Spells",
                items: ["Summon Earth Sprite", "Telekinesis", "Blessed Meals"],
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
              The archon scepter weapon and the icon of void rift are unique to
              the scion.
            </p>
            <p>
              The Summon Earth Sprite spell is also exclusive to the Scion:{" "}
            </p>
            <ul>
              <li>
                The Earth Sprite's level and stats scale with the caster's
                Mysticism PWR
              </li>
              <li>At base 100% PWR, the sprite is summoned at level 5</li>
              <li>
                It gains 1 level for every 10% extra PWR, up to level 20 once
                250% PWR is reached
              </li>
              <li>
                Thus, unlike other followers, the sprite does not gain EXP from
                killing enemies
              </li>
            </ul>
          </>
        ),
      },

      {
        sectionName: "Strategy",
        sectionContent: (
          <>
            <p>Scion Strategy</p>
          </>
        ),
      },
    ],
  },

  {
    id: "Hermit",
    description:
      "The Hermit is a class in Barony that was initially introduced in the Deserters & Disciples DLC. It is associated with the Myconid race. The Hermit uses a duck to distract enemies while defending themselves with Magicians' Bubble and Deep Shade all to to keep foes in line. Their spirit projection manifests a duck while putting their body to sleep, allowing them to perform the same actions as a player Ghost as long as the body is defended or hidden away. ",

    information: [
      { key: "HP", value: "30", image: HealthImage },
      { key: "Survival", value: "✰✰✰" },
      { key: "MP", value: "30", image: MagickaImage },
      { key: "Complexity", value: "✰✰✰" },
    ],
    stats: [
      { key: "STR", value: "-2", image: StrengthImage },
      { key: "DEX", value: "-2", image: DexterityImage },
      { key: "CON", value: "2", image: ConstitutionImage },
      { key: "INT", value: "1", image: IntelligenceImage },
      { key: "PER", value: "0", image: PerceptionImage },
      { key: "CHR", value: "1", image: CharismaImage },
    ],
    skills: [
      { key: "Leadership", value: "0", image: LeadershipImage },
      { key: "Stealth", value: "25", image: StealthImage },
      { key: "Trading", value: "0", image: TradingImage },
      { key: "Blocking", value: "0", image: BlockingImage },
      { key: "Lore", value: "0", image: LoreImage },
      { key: "Ranged", value: "0", image: RangedImage },
      { key: "Tinkering", value: "0", image: TinkeringImage },
      { key: "Unarmed", value: "0", image: UnarmedImage },
      { key: "Alchemy", value: "10", image: AlchemyImage },
      { key: "Swords", value: "0", image: SwordsImage },
      { key: "Sorcery", value: "15", image: SorceryImage },
      { key: "Polearms", value: "0", image: PolearmsImage },
      { key: "Mysticism", value: "40", image: MysticismImage },
      { key: "Axes", value: "0", image: AxesImage },
      { key: "Thauma", value: "0", image: ThaumaImage },
      { key: "Maces", value: "25", image: MacesImage },
    ],
    characterImageDescription: "A spiritual drifter.",
    characterImage: HermitImage,

    classSections: [
      {
        sectionName: "Class Info",
        sectionContent: (
          <>
            <p>
              Though not equipped with traditional battle gear, the Hermit
              survives by combining both magical and physical aptitude
            </p>
            <p>Though isolated, the Hermit is not alone. </p>
            <p>
              A loyal pet serves as an exceptional distractoin, and the
              unbreakable shillelagh is devastating against hindered foes.
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
                  "Worn shillelagh",
                  "Serviceable leather boots",
                  "Serviceable cloak of protection",
                  "Flawed amulet of olympic swimming",
                  "Excellent duck",
                ],
              },
              {
                category: "Inventory",
                items: [
                  "Worn pipe",
                  "Bubbly potion of restore magic",
                  "Bubbly potion of booze",
                  "3x Slightly-aged apple",
                  "Fresh meat",
                ],
              },
              {
                category: "Spells",
                items: ["Magicians' Bubble", "Project Spirit", "Deep Shade"],
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
            <p>The shillelagh weapon is unique to the hermit.</p>
            <p>
              The duck is unique to the hermit. It has 4 possible variants:{" "}
            </p>
            <ul>
              <li>Mallard</li>
              <li>Brown</li>
              <li>Grey</li>
              <li>White</li>
            </ul>
          </>
        ),
      },

      {
        sectionName: "Strategy",
        sectionContent: (
          <>
            <p>Hermit Strategy</p>
          </>
        ),
      },
    ],
  },

  {
    id: "Paladin",
    description:
      "The Paladin is a class in Barony that was initially introduced in the Deserters & Disciples DLC. It is associated with the Salamander race and comes with the Claymore and Symbol of Sanctuary, allowing a unique mix of parrying, sweeping critical hits, and temporary armor buffs for allies. They have access to the Spell of Divine Zeal, increasing their attack power against undead and demonic foes. ",

    information: [
      { key: "HP", value: "30", image: HealthImage },
      { key: "Survival", value: "✰✰✰✰" },
      { key: "MP", value: "25", image: MagickaImage },
      { key: "Complexity", value: "✰✰" },
    ],
    stats: [
      { key: "STR", value: "1", image: StrengthImage },
      { key: "DEX", value: "-1", image: DexterityImage },
      { key: "CON", value: "0", image: ConstitutionImage },
      { key: "INT", value: "1", image: IntelligenceImage },
      { key: "PER", value: "-1", image: PerceptionImage },
      { key: "CHR", value: "1", image: CharismaImage },
    ],
    skills: [
      { key: "Leadership", value: "10", image: LeadershipImage },
      { key: "Stealth", value: "0", image: StealthImage },
      { key: "Trading", value: "0", image: TradingImage },
      { key: "Blocking", value: "10", image: BlockingImage },
      { key: "Lore", value: "25", image: LoreImage },
      { key: "Ranged", value: "0", image: RangedImage },
      { key: "Tinkering", value: "0", image: TinkeringImage },
      { key: "Unarmed", value: "0", image: UnarmedImage },
      { key: "Alchemy", value: "0", image: AlchemyImage },
      { key: "Swords", value: "50", image: SwordsImage },
      { key: "Sorcery", value: "0", image: SorceryImage },
      { key: "Polearms", value: "0", image: PolearmsImage },
      { key: "Mysticism", value: "0", image: MysticismImage },
      { key: "Axes", value: "0", image: AxesImage },
      { key: "Thauma", value: "25", image: ThaumaImage },
      { key: "Maces", value: "0", image: MacesImage },
    ],
    characterImageDescription: "A holy soldier.",
    characterImage: PaladinImage,

    classSections: [
      {
        sectionName: "Class Info",
        sectionContent: (
          <>
            <p>
              Wielding a large blade and divine magic, the Paladin's solutions
              are simple and effective.{" "}
            </p>
            <p>
              While adept at dealing with martial challengers, a Paladin must
              rise to the occasion when honorable fights aren't on offer.
            </p>
            <p>
              Continued discipline with miraculous magics may improve
              adaptability.
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
                  "Serviceable claymore",
                  "Excellent chain coif",
                  "Excellent chain hauberk",
                  "Excellent symbol of sanctuary",
                ],
              },
              {
                category: "Inventory",
                items: [
                  "4x Bubbly potion of water (+4)",
                  "3x Slightly-aged bread",
                ],
              },
              {
                category: "Spells",
                items: ["Divine Zeal"],
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
            <p>The symbol of sanctuary is unique to the paladin. </p>
          </>
        ),
      },

      {
        sectionName: "Strategy",
        sectionContent: (
          <>
            <p>Paladin Strategy</p>
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
