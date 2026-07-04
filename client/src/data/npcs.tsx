import type { ReactNode } from "react";
import Human from "../assets/Human_Landguard_Male_Model.webp";
import Goblin from "../assets/Goblin.webp";
import Gnome from "../assets/Gnome.webp";
import GnomeThief from "../assets/Gnome_Thief.webp";
import Shopkeeper from "../assets/Shopkeeper.webp";
import MysteriousMerchant from "../assets/Mysterious_Merchant.webp";

import Rat from "../assets/Rat.webp";
import Spider from "../assets/Spider.webp";
import Troll from "../assets/Troll.webp";
import Bat from "../assets/Bat.webp";
import Scorpion from "../assets/Scorpion.webp";
import Scarab from "../assets/Scarab.webp";
import Cockatrice from "../assets/Cockatrice.webp";
import Minotaur from "../assets/Minotaur.webp";

import Insectoid from "../assets/Insectoid.webp";
import Bugbear from "../assets/Bugbear.webp";
import Kobold from "../assets/Kobold.webp";
import Goatman from "../assets/Goatman.webp";

import Skeleton from "../assets/Skeleton.webp";
import Ghoul from "../assets/Ghoul.webp";
import EnslavedGhoul from "../assets/Enslaved_Ghoul.webp";
import Vampire from "../assets/Vampire.webp";
import Shadow from "../assets/Shadow.webp";
import RevenantSkull from "../assets/Revenant_Skull_Ally_Icon.webp";

import Succubus from "../assets/Succubus.webp";
import SuccubusConsort from "../assets/Succubus_Consort.webp";
import Incubus from "../assets/Incubus.webp";
import Imp from "../assets/Imp.webp";
import Demon from "../assets/Demon.webp";

import Automaton from "../assets/Automaton.webp";
import CrystalGolem from "../assets/Crystal_Golem.webp";
import Sentrybot from "../assets/Sentrybot.webp";
import Spellbot from "../assets/Spellbot.webp";
import Dummybot from "../assets/Dummybot.webp";
import Mimic from "../assets/Mimic.webp";

import Slime from "../assets/Slime.webp";
import EarthSprite from "../assets/Earth_Sprite.webp";
import FireSprite from "../assets/Fire_Sprite_Ally_Icon.webp";

import PotatoKing from "../assets/The_Potato_King.webp";
import RobinHood from "../assets/Robin_Hood.webp";
import Merlin from "../assets/Merlin.webp";
import KingArthur from "../assets/King_Arthur.webp";
import RedRidingHood from "../assets/Red_Riding_Hood.webp";
import Kali from "../assets/Kali.webp";
import Anansi from "../assets/Anansi.webp";
import Vishpala from "../assets/Vishpala.webp";
import Othello from "../assets/Othello.webp";
import Oya from "../assets/Oya.webp";
import ConanTheBarbarian from "../assets/Conan.webp";
import ZAPBrigade from "../assets/ZAP_Brigade.webp";

import Algernon from "../assets/Algernon.webp";
import Shelob from "../assets/Shelob.webp";
import ThumpusTheTroll from "../assets/Thumpus.webp";
import Skrabblag from "../assets/Skrabblag.webp";
import Xyggi from "../assets/Xyggi.webp";

import Gharbad from "../assets/Gharbad.webp";

import FunnyBones from "../assets/Funny_Bones.webp";
import CoralGrimes from "../assets/Coral_Grimes.webp";
import BramKindly from "../assets/Bram_Kindly.webp";
import Artemisia from "../assets/Artemisia.webp";
import Baratheon from "../assets/Baratheon.webp";

import Lilith from "../assets/Lilith.webp";
import DeuDeBreau from "../assets/Deu_De'Breau.webp";

import BaronHerx from "../assets/Baron_Herx.webp";
import Baphomet from "../assets/Baphomet.webp";
import Erudyce from "../assets/Erudyce.webp";
import Orpheus from "../assets/Orpheus.webp";

export type Stat = {
  key: string;
  value: string;
  image?: string;
};

export type NPCSections = {
  sectionName: string;
  sectionContent: ReactNode;
};

export type NPCData = {
  id: string;
  image: string;
  levelDescription: string;
  stats: Stat[];
  hardcoreStats: Stat[];
  damageTypeEffectiveness: Stat[];
  abilities: string[];
  inventory: string[];

  descriptionSections: NPCSections[];
};

export const npcs: NPCData[] = [
  {
    id: "Human",
    image: Human,
    levelDescription: "Level 3 Humanoid",
    stats: [
      { key: "HP", value: "30 - 50" },
      { key: "ATK", value: "7 - 14" },
      { key: "AC", value: "0 - 9" },
      { key: "ATK", value: "9 - 16" },
      { key: "SPD", value: "4 - 7" },
      { key: "PWR", value: "-" },
    ],
    hardcoreStats: [
      { key: "HP", value: "30 - 50" },
      { key: "ATK", value: "7 - 14" },
      { key: "AC", value: "0 - 9" },
      { key: "ATK", value: "9 - 16" },
      { key: "SPD", value: "4 - 7" },
      { key: "PWR", value: "-" },
    ],
    damageTypeEffectiveness: [
      { key: "Sword", value: "-" },
      { key: "Polearm", value: "-" },
      { key: "Mace", value: "-" },
      { key: "Axe", value: "-" },
      { key: "Unarmed", value: "-" },
      { key: "Ranged", value: "-" },
      { key: "Magic", value: "-" },
    ],
    abilities: ["-"],
    inventory: [
      "Melee and ranged weaponry",
      "Leather, Bronze, Iron, Steel armor",
    ],

    descriptionSections: [
      {
        sectionName: "Description",
        sectionContent: (
          <>
            <p>
              Humans can be found randomly wandering the dungeons either solo or
              in a party. A group of two to four humans can be summoned with a
              +1 scroll of summon. They will always fight hostile monsters until
              they reach low health, walking slowly backwards before retreating.
              They wear anything from worn to excellent gear and generally yield
              a good amount of experience for killing. They can also pick up
              loot from the floor.
            </p>
          </>
        ),
      },

      {
        sectionName: "Spawn Locations",
        sectionContent: (
          <>
            <ul>
              <li>
                <b>The Mines</b>
              </li>
              <li>
                <b>The Swamp</b>
              </li>
              <li>
                <b>The Sand Labyrinth</b>
              </li>
              <li>
                <b>The Ruins</b>
              </li>
              <li>
                <b>Hamlet</b>
              </li>
              <li>
                <b>The Crystal Caves</b>
              </li>
              <li>
                <b>The Citadel</b>
              </li>
            </ul>
          </>
        ),
      },

      {
        sectionName: "Behaviour",
        sectionContent: (
          <>
            <p>
              Humans use their equipment to attack the player. They have a large
              variance in AC level and damage dealt based on their carried
              equipment. Humans start backpedalling on low health.
            </p>
          </>
        ),
      },

      {
        sectionName: "Loot",
        sectionContent: (
          <>
            <p>
              Humans drop the equipment they wear as well as gold. Note: All
              gear dropped by humans is +0. Unless picked up off of the floor.
            </p>
          </>
        ),
      },

      {
        sectionName: "Affinity",
        sectionContent: (
          <>
            <p>
              Humans are friendly towards other humans, as well as automatons.
              If a player's race is human or automaton, then he or she will be
              able to recruit other humans and automatons as Followers.
              Additionally, if a player is playing as a succubus, they can
              recruit drunk or confused humans; and if a player is playing as a
              goatman they can recruit them while drunk. Humans are otherwise
              hostile to all other monster races.
            </p>
          </>
        ),
      },
    ],
  },

  {
    id: "Goblin",
    image: Human,
    levelDescription: "Level 3 Humanoid",
    stats: [
      { key: "HP", value: "30 - 50" },
      { key: "ATK", value: "7 - 14" },
      { key: "AC", value: "0 - 9" },
      { key: "ATK", value: "9 - 16" },
      { key: "SPD", value: "4 - 7" },
      { key: "PWR", value: "-" },
    ],
    hardcoreStats: [
      { key: "HP", value: "30 - 50" },
      { key: "ATK", value: "7 - 14" },
      { key: "AC", value: "0 - 9" },
      { key: "ATK", value: "9 - 16" },
      { key: "SPD", value: "4 - 7" },
      { key: "PWR", value: "-" },
    ],
    damageTypeEffectiveness: [
      { key: "Sword", value: "-" },
      { key: "Polearm", value: "-" },
      { key: "Mace", value: "-" },
      { key: "Axe", value: "-" },
      { key: "Unarmed", value: "-" },
      { key: "Ranged", value: "-" },
      { key: "Magic", value: "-" },
    ],
    abilities: [""],
    inventory: [""],

    descriptionSections: [],
  },
];

/* 

{
        sectionName: "description",
        sectionContent: 
        <>
        
        </>
      },

      */

/*

{
    id: "Human",
    image: Human,
    levelDescription: "Level 3 Humanoid",
    stats: [
      { key: "HP", value: "30 - 50" },
      { key: "ATK", value: "7 - 14" },
      { key: "AC", value: "0 - 9" },
      { key: "ATK", value: "9 - 16" },
      { key: "SPD", value: "4 - 7" },
      { key: "PWR", value: "-" },
    ],
    hardcoreStats: [
      { key: "HP", value: "30 - 50" },
      { key: "ATK", value: "7 - 14" },
      { key: "AC", value: "0 - 9" },
      { key: "ATK", value: "9 - 16" },
      { key: "SPD", value: "4 - 7" },
      { key: "PWR", value: "-" },
    ],
    damageTypeEffectiveness: [
      { key: "Sword", value: "-" },
      { key: "Polearm", value: "-" },
      { key: "Mace", value: "-" },
      { key: "Axe", value: "-" },
      { key: "Unarmed", value: "-" },
      { key: "Ranged", value: "-" },
      { key: "Magic", value: "-" },
    ],
    abilities: ["",],
    inventory: [
    "",
    ],

    descriptionSections: [

  ]
},

*/
