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
            <h3>The Mines</h3>
            <h3>The Swamp</h3>
            <h3>The Sand Labyrinth</h3>
            <h3>The Ruins</h3>
            <h3>Hamlet</h3>
            <h3>The Crystal Caves</h3>
            <h3>The Citadel</h3>
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
    image: Goblin,
    levelDescription: "Level 6 Humanoid",
    stats: [
      { key: "HP", value: "60" },
      { key: "ATK", value: "13 - 19" },
      { key: "AC", value: "3 - 13" },
      { key: "ATK", value: "14 - 19" },
      { key: "SPD", value: "1" },
      { key: "PWR", value: "25" },
    ],
    hardcoreStats: [
      { key: "HP", value: "124 - 140" },
      { key: "ATK", value: "21 - 29" },
      { key: "AC", value: "4 - 14" },
      { key: "ATK", value: "18 - 25" },
      { key: "SPD", value: "2" },
      { key: "PWR", value: "25" },
    ],
    damageTypeEffectiveness: [
      { key: "Sword", value: "-10%" },
      { key: "Polearm", value: "+10%" },
      { key: "Mace", value: "-" },
      { key: "Axe", value: "+10%" },
      { key: "Unarmed", value: "-20%" },
      { key: "Ranged", value: "+10%" },
      { key: "Magic", value: "-" },
    ],
    abilities: ["-"],
    inventory: [
      "Bronze, Iron Maces / Axes",
      "Shortbows and Quivers",
      "Magicstaffs of Fire",
      "Cloaks of Magic Reflection",
      "Grass Sprigs",
      "Leather, Bronze Armor",
      "Cloaks",
      "Animal Hats",
      "Magus Headdresses",
    ],

    descriptionSections: [
      {
        sectionName: "description",
        sectionContent: (
          <>
            <p>
              About a foot shorter than the average human, Goblins appear
              primarily in the swamp stages. They can be wearing nearly any
              standard armor, or equip any weapon in the game. Goblins will pick
              up items dropped and equip them immediately. DO NOT allow them to
              walk over an offensive magic staff. If playing co-op, they can
              walk over your dead friends item pile and make for an interesting
              fight. Typically higher end HP and AC. They have extremely
              versatile weapon skills. Approach magical goblins with extreme
              caution. They often wear cloaks which can be of protection or
              magic reflection, they can pickup cloaks of invisibility!
            </p>
          </>
        ),
      },

      {
        sectionName: "Spawn Zones",
        sectionContent: (
          <>
            <h3>The Swamp</h3>
            <p>
              Goblins are the main enemy of this area and appear here in large
              numbers. Be wary when gold and equipment item are found on the
              ground, because Goblins will fight other dungeon enemies. Players
              will gain a descent amount of gold for traveling through this area
              and shops are common, making for extra loot. The many trees here
              make for useful cover when fighting ranged or staff Goblins.
            </p>

            <h3>The Temple</h3>
            <p>
              Upon entering The Swamp's first secret area, players will be
              greeted by a long bridge, bordered by pits on either side. Through
              the temples gates you will find numerous Trolls and goblins in
              cages, taking the right path will lead you to the goblin cages,
              passing further through the right entrance way will unleash the
              goblins; so be prepared, instead of releasing the goblins the left
              path will lead to the Green Mystic Orb, which will release the
              trolls from their cages. From the gate if you choose to instead go
              left, there will be many boulder traps on the ceiling.
            </p>

            <h3>The Sand Labyrinth</h3>
            <p>
              For whatever strange reason, there are still goblins who like to
              wander through this random maze players must venture through.
              There are not many and they will still fight other dungeon
              enemies, usually dying in the process.
            </p>

            <h3>The Ruins</h3>
            <p>Around 10% of monsters in the Ruins are Goblins.</p>
          </>
        ),
      },

      {
        sectionName: "Behaviour",
        sectionContent: (
          <>
            <p>
              Goblins use their equipment to attack the player. They have a
              large variance in AC level and damage dealt based on their carried
              equipment. Goblins start backpedalling on low health.
            </p>
          </>
        ),
      },

      {
        sectionName: "Loot",
        sectionContent: (
          <>
            <p>Goblins drop the equipment they wear as well as gold.</p>
          </>
        ),
      },

      {
        sectionName: "Variants",
        sectionContent: (
          <>
            <h3>The Potato King</h3>
            <p>
              Can spawn anywhere a regular goblin can. Stronger than a regular
              goblin and wields Sharur, the artifact mace, and a +3-5 jester
              hat. Spawns with a group of Goblins; unless spawned in The
              Temple.{" "}
            </p>

            <h3>The Goblin Shaman</h3>
            <p>
              Appears only in the swamps with a group of regular Goblins. Wears
              a cloak and amulet of magic reflection, a Magicstaff of Poison,
              and a Shaman Mask. Not recognized by the compendium, but is
              tougher than a standard Goblin. Its cloak and amulet are typically
              cursed; so think twice.
            </p>
          </>
        ),
      },

      {
        sectionName: "Affinity",
        sectionContent: (
          <>
            <p>
              Goblins are friendly towards other goblins as well as neutral
              towards Gremlin players. If a player's race is Goblin then he or
              she will be able to recruit other goblins as followers, as well as
              if a player has Legendary Leadership skill(Though sneaking is
              required) . This is demonstrated in the book, Controlling Goblins,
              where a human recruits goblins to join his raiding party by
              whispering to them from behind.
            </p>
          </>
        ),
      },
    ],
  },

  {
    id: "Gnome",
    image: Gnome,
    levelDescription: "Level 5 Humanoid",
    stats: [
      { key: "HP", value: "50" },
      { key: "ATK", value: "9 - 11" },
      { key: "AC", value: "4 - 7" },
      { key: "ATK", value: "-" },
      { key: "SPD", value: "0" },
      { key: "PWR", value: "25" },
    ],
    hardcoreStats: [
      { key: "HP", value: "98 - 110" },
      { key: "ATK", value: "13 - 16" },
      { key: "AC", value: "5 - 8" },
      { key: "ATK", value: "-" },
      { key: "SPD", value: "1" },
      { key: "PWR", value: "25" },
    ],
    damageTypeEffectiveness: [
      { key: "Sword", value: "-10%" },
      { key: "Polearm", value: "-10%" },
      { key: "Mace", value: "-" },
      { key: "Axe", value: "-" },
      { key: "Unarmed", value: "-" },
      { key: "Ranged", value: "+10%" },
      { key: "Magic", value: "+10%" },
    ],
    abilities: ["-"],
    inventory: [
      "Pickaxes",
      "Magicstaffs of Lightning",
      "Wooden Shields",
      "Cloaks",
      "Cloaks of Protection",
      "Fish",
      "Pipes",
      "Lanterns",
      "Gemstones",
      "Enchanted Feathers",
      "Blouses",
      "Felt Hats",
    ],

    descriptionSections: [
      {
        sectionName: "Description",
        sectionContent: (
          <>
            <p>
              Gnomes are low level Humanoids that wield Pickaxes and Magistaffs
              of Lightning. They drop a variety of useful items and gold.
            </p>
          </>
        ),
      },

      {
        sectionName: "Spawn Locations",
        sectionContent: (
          <>
            <h3>The Gnomish Mines</h3>
            <p>
              Gnomes are most commonly found in their own secret area The
              Gnomish Mines, the entrance to which is always found on floor 2.
              The amount of Gnomes and their starting locations are fixed and
              consistent throughout every run, but what they wield and the loot
              they drop changes based on map seed.
            </p>

            <h3>The Ruins</h3>
            <p>
              Gnomes are quite rare in The Ruins, usually being replaced by
              Gnome Thieves.
            </p>

            <h3>Thumpus the Troll</h3>
            <p>
              A couple of Gnomes commonly accompany Thumpus, a special variant
              Troll who has a chance to replace a regular Troll in any level
              where they spawn. The Gnomes follow Thumpus as their leader.
              Thumpus is the only way Gnomes can spawn outside of The Gnomish
              Mines and The Ruins.
            </p>
          </>
        ),
      },

      {
        sectionName: "Behaviour",
        sectionContent: (
          <>
            <p>
              Gnomes exclusively use their equipment to attack. While Pickaxe
              wielding Gnomes deal relatively low damage, their melee hits with
              the Pickaxe apply medium knockback. Gnomes with Magistaffs of
              Lightning are more dangerous, especially if they are encountered
              early such as in The Gnomish Mines. The player may then wear down
              the durability of their staves or otherwise disarm them by any
              means to lower the danger they pose. Gnomes make distinct sounds
              that the player can listen to and plan their ways accordingly.
              Gnomes do not have any other special abilities. Gnomes start
              backpedalling on low health.
            </p>
          </>
        ),
      },

      {
        sectionName: "Loot",
        sectionContent: (
          <>
            <p>
              Gnomes always drop Gold and equipment they wear (most notably
              Pickaxes and Mgistaffs of Lightning). They also rarely drop
              Gemstones, as well as having a 1% chance to drop an Enchanted
              Feather.
            </p>
          </>
        ),
      },

      {
        sectionName: "Affinity",
        sectionContent: (
          <>
            <p>
              Gnomes are friendly with Gnome Thieves, Trolls, Bugbears and
              Shopkeepers. They are hostile to all player races, but the player
              may become neutral to Gnomes with the usage of Troll Form. They
              will still however be unrecruitable.
            </p>
          </>
        ),
      },
    ],
  },

  {
    id: "Gnome_Thief",
    image: GnomeThief,
    levelDescription: "Level 10 Humanoid",
    stats: [
      { key: "HP", value: "80" },
      { key: "ATK", value: "13 - 17" },
      { key: "AC", value: "8 - 11" },
      { key: "ATK", value: "15 - 20" },
      { key: "SPD", value: "5" },
      { key: "PWR", value: "-" },
    ],
    hardcoreStats: [
      { key: "HP", value: "160 - 180" },
      { key: "ATK", value: "17 - 22" },
      { key: "AC", value: "9 - 12" },
      { key: "ATK", value: "19 - 26" },
      { key: "SPD", value: "6 - 7" },
      { key: "PWR", value: "-" },
    ],
    damageTypeEffectiveness: [
      { key: "Sword", value: "-10%" },
      { key: "Polearm", value: "-10%" },
      { key: "Mace", value: "-" },
      { key: "Axe", value: "-" },
      { key: "Unarmed", value: "-" },
      { key: "Ranged", value: "+10%" },
      { key: "Magic", value: "+10%" },
    ],
    abilities: ["Lay Trap"],
    inventory: [
      "Steel Swords / Maces",
      "Shortbows",
      "Crossbows",
      "Quivers of Swift and Springshot Arrows",
      "Bycockets (Thief Leader)",
      "Hoods",
      "Hoods of Whisper",
      "Assassin's Hoods",
      "Bandanas",
      "Pipes",
      "Bandit Masks",
      "Mouthknives",
      "Beartraps",
      "Tinkered Traps",
      "Enchanted Feathers",
    ],

    descriptionSections: [
      {
        sectionName: "Description",
        sectionContent: (
          <>
            <p>
              Gnome Thieves are Humanoid Denizens that roam the dungeon in
              raiding squads. They employ various tactics against their targets
              such as setting traps and using a mixture of ranged and melee
              weaponry.
            </p>
          </>
        ),
      },

      {
        sectionName: "Spawn Locations",
        sectionContent: (
          <>
            <h3>The Ruins</h3>
            <p>
              Gnome Thieves only spawn in The Ruins level of the game. Here they
              are plentiful in numbers however, making up the majority of the
              encounters the player will face in the level's floors.
            </p>
          </>
        ),
      },

      {
        sectionName: "Behaviour",
        sectionContent: (
          <>
            <p>
              The danger of Gnome Thieves lies in their strength in numbers;
              they always spawn in large groups and remain in them by moving as
              a unit. Gnome Thieves use their weapons to attack the player, but
              they also often drop either a Beartrap or a Tinkering Trap on
              death. They themselves are immune to their own traps. Every squad
              also has a Thief Leader who is followed by other thieves and is
              stronger than the rest of them. Killing the leader will inflict
              Fear on the rest of the squad, making it a potent strategy to
              target the leader first. Gnome Thieves start backpedalling on low
              health, which can prove troublesome should there be laid traps
              behind them.
            </p>
          </>
        ),
      },

      {
        sectionName: "Loot",
        sectionContent: (
          <>
            <p>
              Gnome Thieves drop an assortment of loot, most notably they can
              drop useful accessories such as Bandit Masks and PIpes, as well as
              strong headgear in the form of Hoods of Whispers, Assassin's Hoods
              and Bycockets. They are also a consistent source of Quivers of
              Swift and Springshot arrows. Lastly, they very rarely drop an
              Enchanted Feather.
            </p>
          </>
        ),
      },

      {
        sectionName: "Variants",
        sectionContent: (
          <>
            <h3>Thief Leader</h3>
            <p>
              The Thief Leader is the variant of the Gnome Thief that appears in
              every thief squad. He is visually distinguishable from the rest of
              them by his green garbs and a Bycocket on the head. Leaders always
              use ranged weaponry. The Bycockets they drop are powerful pieces
              of headgear for any adventurer that specializes in ranged combat.
            </p>
          </>
        ),
      },

      {
        sectionName: "Description",
        sectionContent: (
          <>
            <p>
              Gnome Thieves are friendly with Gnomes, Trolls, Bugbears and
              Shopkeepers. They are hostile to all player races, but the player
              may become neutral to Gnome Thieves with the usage of Troll Form.
              They will still however be unrecruitable.
            </p>
          </>
        ),
      },
    ],
  },

  {
    id: "Shopkeeper",
    image: Shopkeeper,
    levelDescription: "Level 10 Humanoid",
    stats: [
      { key: "HP", value: "300" },
      { key: "ATK", value: "-" },
      { key: "AC", value: "10" },
      { key: "ATK", value: "-" },
      { key: "SPD", value: "4" },
      { key: "PWR", value: "25" },
    ],
    hardcoreStats: [
      { key: "HP", value: "556 - 620" },
      { key: "ATK", value: "-" },
      { key: "AC", value: "12 - 13" },
      { key: "ATK", value: "-" },
      { key: "SPD", value: "5 - 6" },
      { key: "PWR", value: "25" },
    ],
    damageTypeEffectiveness: [
      { key: "Sword", value: "-50%" },
      { key: "Polearm", value: "-50%" },
      { key: "Mace", value: "-50%" },
      { key: "Axe", value: "-50%" },
      { key: "Unarmed", value: "-50%" },
      { key: "Ranged", value: "-50%" },
      { key: "Magic", value: "-50%" },
    ],
    abilities: ["Magic Missile", "Drain Soul", "Indominable", "Bloodletting"],
    inventory: ["Various Shop Stock"],

    descriptionSections: [
      {
        sectionName: "Description",
        sectionContent: (
          <>
            <p>
              Shopkeepers are NPCs in Barony who trade items with the player in
              exchange for gold. Shopkeepers cast powerful magic in self
              defense, and they are more resilient than most other characters.
              Shopkeepers hold a grudge against players who attack them in the
              form of the Wanted! Wanted Icon.png effect.
            </p>

            <p>
              Shopkeepers are typically friendly NPCs who provide human-friendly
              players a place to trade. Shopkeepers may show hostility to
              players who choose certain monster races in character creation,
              but polymorphing into a human or wearing a monocle will protect
              the player from a shopkeeper's prejudice. Additionally, players
              may briefly trade with a hostile shopkeeper using the Confuse
              spell.
            </p>
            <p>
              Shopkeeper are found inside of shops - large, generated structures
              that are often square or rectangular in shape. Each shop contains
              one or two shopkeepers at a time. Many shops also come include a
              treasure chest. Shopkeepers will not attack the player for
              stealing from chests.
            </p>
            <p>
              Each shopkeeper has a certain store type, which dictates the items
              the shop will buy and sell. General stores are unspecialized in
              this regard, and they will buy and sell most kinds of items.
              Players who achieve maximum Trading can sell most items to any
              shop.
            </p>
            <p>
              Each shop has a "private selection" of up to four items. These
              items are chosen from a pool based on the shop, and they are
              selected in a random order. With enough charisma and/or trading
              skill these items may be bought:
            </p>
            <ul>
              <li>The 1st item requires a sum of 0 trading and charisma</li>
              <li>The 2nd item requires a sum of 10 trading and charisma</li>
              <li>The 3rd item requires a sum of 20 trading and charisma</li>
              <li>The 4th item requires a sum of 30 trading and charisma</li>
            </ul>

            <p>
              It is not uncommon to find enemies lurking around in shops, as
              shopkeepers will ignore most of them, including Mimics and
              Minotaurs.
            </p>

            <h3>Trading Skill</h3>
            <p>
              The Trading skill improves a player's prices when trading with
              shopkeepers. Higher skill will also produce different dialogue
              from the shopkeeper compared to lower skill, with a more
              begrudging tone as the shopkeeper must provide fairer trades to an
              experienced player.
            </p>
            <p>
              Trading skill has a chance to increase when the player purchases
              an item, based on the gold paid for the item. Items worth 1-9 gold
              have a 10% chance to increase trading skill. Items worth 10-100
              gold have a 10-100% chance to increase trading skill, scaling at a
              1:1 ratio with the gold cost. Purchasing an item worth 100 or more
              gold has a 100% chance to increase trading skill.
            </p>
            <p>
              Selling an item to a shopkeeper will never yield trading skill.
              Buying a sold item back from a shopkeeper will never yield trading
              skill.
            </p>
            <p>
              Hamlet's shopkeepers can only level up 7 Trading skill per
              individual.
            </p>
          </>
        ),
      },

      {
        sectionName: "List of Store Types",
        sectionContent: (
          <>
            <table>
              <tr>
                <td>Store Type</td>
                <td>Sells & Buys</td>
                <td>Private Selection</td>
                <td>Count</td>
                <td>Spawn Chance</td>
              </tr>

              <tr>
                <td>Arms & Armor</td>
                <td>Armor and Weapons.</td>
                <td>
                  <p>Bottle of Booze</p>
                  <p>Potion of healing</p>
                  <p>Scroll of repair</p>
                  <p>Bread</p>
                </td>
                <td>
                  <p>2 to 12</p>
                  <p>1 to 4</p>
                  <p>1 to 2</p>
                  <p>1 to 4</p>
                </td>
                <td>
                  <p>100%</p>
                  <p>90%</p>
                  <p>75%</p>
                  <p>90%</p>
                </td>
              </tr>

              <tr>
                <td>Hat</td>
                <td>
                  <p>Sells various headwear.</p>
                  <p>Buys any variety of armor or cloak.</p>
                </td>
                <td>
                  <p>Potion of restore magic</p>
                  <p>Scroll of destroy armor</p>
                  <p>Potion of healing</p>
                  <p>Apple</p>
                </td>
                <td>
                  <p>1 to 4</p>
                  <p>1 to 4</p>
                  <p>1 to 2</p>
                  <p>2 to 6</p>
                </td>
                <td>
                  <p>90%</p>
                  <p>100%</p>
                  <p>90%</p>
                  <p>100%</p>
                </td>
              </tr>

              <tr>
                <td>Jewelry</td>
                <td>Amulets, rings, and gems.</td>
                <td>
                  <p>Scroll of identify</p>
                  <p>Potion of levitation</p>
                  <p>Scroll of remove curse</p>
                  <p>Tomalley</p>
                </td>
                <td>
                  <p>2 to 4</p>
                  <p>1 to 3</p>
                  <p>1 to 4</p>
                  <p>1 to 3</p>
                </td>
                <td>
                  <p>100%</p>
                  <p>75%</p>
                  <p>80%</p>
                  <p>80%</p>
                </td>
              </tr>

              <tr>
                <td>Books</td>
                <td>Books, spellbooks, and scrolls</td>
                <td>
                  <p>Potion of restore magic</p>
                  <p>Potion of paralysis</p>
                  <p>Cheese</p>
                  <p>Apple</p>
                </td>
                <td>
                  <p>2 to 4</p>
                  <p>1 to 4</p>
                  <p>2 to 6</p>
                  <p>4 to 12</p>
                </td>
                <td>
                  <p>100%</p>
                  <p>60%</p>
                  <p>90%</p>
                  <p>90%</p>
                </td>
              </tr>

              <tr>
                <td>Potions</td>
                <td>
                  Potions, empty bottles, alembics, and potion ingredients
                </td>
                <td>
                  <p>Scroll of remove curse</p>
                  <p>Bread</p>
                  <p>Balnk scroll</p>
                  <p>Fish</p>
                </td>
                <td>
                  <p>1 to 2</p>
                  <p>1 to 3</p>
                  <p>1 to 4</p>
                  <p>1 to 4</p>
                </td>
                <td>
                  <p>75%</p>
                  <p>90%</p>
                  <p>80%</p>
                  <p>80%</p>
                </td>
              </tr>

              <tr>
                <td>Staves</td>
                <td>Magic Staves and Source foci.</td>
                <td>
                  <p>Potion of restore magic</p>
                  <p>Scroll of charging</p>
                  <p>Potion of paralysis</p>
                  <p>Cream pie</p>
                </td>
                <td>
                  <p>2 to 4</p>
                  <p>1 to 2</p>
                  <p>1 to 2</p>
                  <p>2 to 6</p>
                </td>
                <td>
                  <p>100%</p>
                  <p>100%</p>
                  <p>50%</p>
                  <p>90%</p>
                </td>
              </tr>

              <tr>
                <td>Food</td>
                <td>Food items.</td>
                <td>
                  <p>Fruit juice</p>
                  <p>Bottle of booze</p>
                  <p>Potion of healing</p>
                  <p>Potion of cure ailment</p>
                </td>
                <td>
                  <p>2 to 6</p>
                  <p>2 to 6</p>
                  <p>1 to 4</p>
                  <p>1 to 3</p>
                </td>
                <td>
                  <p>100%</p>
                  <p>100%</p>
                  <p>85%</p>
                  <p>85%</p>
                </td>
              </tr>

              <tr>
                <td>Hardware</td>
                <td>Toos, utilities, and throwing weapons.</td>
                <td>
                  <p>Scroll of repair</p>
                  <p>Tin</p>
                  <p>Potion of speed</p>
                  <p>Potion of acid</p>
                </td>
                <td>
                  <p>1 to 3</p>
                  <p>1 to 4</p>
                  <p>1 to 3</p>
                  <p>1 to 5</p>
                </td>
                <td>
                  <p>75%</p>
                  <p>80%</p>
                  <p>75%</p>
                  <p>85%</p>
                </td>
              </tr>

              <tr>
                <td>Hunting</td>
                <td>
                  Arrows, bows, throwing weapons, and various melee weapons.
                </td>
                <td>
                  <p>Potion of invisibility</p>
                  <p>Beartrap</p>
                  <p>Bottle of water (+4)</p>
                  <p>Meat</p>
                </td>
                <td>
                  <p>1 to 5</p>
                  <p>1 to 3</p>
                  <p>2 to 6</p>
                  <p>1 to 4</p>
                </td>
                <td>
                  <p>90%</p>
                  <p>5-%</p>
                  <p>100%</p>
                  <p>90%</p>
                </td>
              </tr>

              <tr>
                <td>General</td>
                <td>Deals in any type of item.</td>
                <td>
                  <p>Potion of healing</p>
                  <p>Potion of restore magic</p>
                  <p>Tin</p>
                  <p>Blank scroll</p>
                </td>
                <td>
                  <p>2 to 6</p>
                  <p>2 to 6</p>
                  <p>1 to 4</p>
                  <p>1 to 3</p>
                </td>
                <td>
                  <p>100%</p>
                  <p>100%</p>
                  <p>100%</p>
                  <p>75%</p>
                </td>
              </tr>
            </table>
          </>
        ),
      },

      {
        sectionName: "Description",
        sectionContent: (
          <>
            <p>
              Shopkeepers will become hostile when attacked, or when they spot a
              player with the Wanted! effect. Shopkeepers will also show
              inherent hostility to certain players, depending on the monster
              race chosen in character creation. This form of hostility can be
              remedied by wearing a monocle. It is of important note that
              shopkeepers can see through invisibility.
            </p>
            <p>
              Once provoked, a shopkeeper will attack the player mercilessly,
              frequently casting Magic Missiles and chasing after the player at
              a moderate speed. They also sport an exorbitant health pool, high
              damage resistance, and immunity to many negative effects, such as
              paralysis.
            </p>
            <p>
              Like most other caster-type enemies, they are especially prone to
              being baited around an obstacle that they cannot fire through.
              Players may take advantage of a shopkeeper's tendency to back up
              while casting spells to land charged attacks before retreating.
              Shopkeepers will not make any effort to avoid traps the player
              sets for them.
            </p>
            <p>
              When defeated, a shopkeeper has 50% chance to drop each item in
              their main inventory. Stacks of items roll to drop each item in
              the stack. Quivers always drop their entire stack. Shopkeepers
              also drop gold, based on how much the player paid the shopkeeper
              before his death. A shop's private selection will not drop.
            </p>
            <p>
              Shopkeepers may be tricked into fighting each other if a player
              wears a ring of conflict, or carefully baits one shopkeeper to
              attack another. Shopkeepers make short work of one another, even
              in Hamlet.
            </p>
            <h3>Post-Dungeon Shopkeepers</h3>
            <p>
              To keep up with the player as they grow in power, Shopkeepers
              found after completing the main dungeon are significantly more
              powerful.
            </p>
            <p>
              In Hamlet, shopkeepers will cast Bloodletting or Drain Soul, which
              will heal them. Additionally, their health pools become so
              inflated that traditional attacks are rendered nearly useless
              against them. Lastly, shopkeepers in Hamlet rapidly regenerate
              health at all times. Shopkeepers in Hamlet serve as outliers to
              how shopkeepers scale through the rest of the game. Shopkeepers
              after Hamlet cast the same spells as the ones in Hamlet, but they
              possess far less health and regeneration.
            </p>
          </>
        ),
      },
    ],
  },

  {
    id: "Mysterious_Merchant",
    image: MysteriousMerchant,
    levelDescription: "Level ??? Humanoid",
    stats: [
      { key: "HP", value: "600" },
      { key: "ATK", value: "-" },
      { key: "AC", value: "20" },
      { key: "ATK", value: "-" },
      { key: "SPD", value: "4" },
      { key: "PWR", value: "25" },
    ],
    hardcoreStats: [
      { key: "HP", value: "1096 - 1220" },
      { key: "ATK", value: "-" },
      { key: "AC", value: "22 - 23" },
      { key: "ATK", value: "-" },
      { key: "SPD", value: "5 - 6" },
      { key: "PWR", value: "25" },
    ],
    damageTypeEffectiveness: [
      { key: "Sword", value: "-50%" },
      { key: "Polearm", value: "-50%" },
      { key: "Mace", value: "-50%" },
      { key: "Axe", value: "-50%" },
      { key: "Unarmed", value: "-50%" },
      { key: "Ranged", value: "-50%" },
      { key: "Magic", value: "-50%" },
    ],
    abilities: [
      "Magic Missile",
      "Drain Soul",
      "Indominable",
      "Bloodletting",
      "Teleportation",
    ],
    inventory: ["Various Shop Stock"],

    descriptionSections: [
      {
        sectionName: "Description",
        sectionContent: (
          <>
            <p>
              The Mysterious Merchant is a special merchant introduced in the
              Legends and Pariahs update, being found within the sewer system.
              He is unique from other merchants, donning glasses, a Healer 's
              doublet, a cloak, and being notably peaceful to monster races. He
              will say "Don't worry, I know who you are ____" The ____ being
              replaced by the player's name.
            </p>
            <p>He also does not care if a player has the WANTED! status.</p>
            <p>
              He exists to allow the player to trade in their unused Mystic Orbs
              in exchange for a rare item purchase. Each orb provides a unique
              and thematically appropriate set of items to choose from. Once the
              player has made their purchase for an orb type, they cannot
              purchase that weapon or any other items provided by that orb type.
            </p>
          </>
        ),
      },

      {
        sectionName: "Description",
        sectionContent: (
          <>
            <table>
              <tr>
                <td>Orb Color</td>
                <td>Purchase Options</td>
              </tr>

              <tr>
                <td>Red Orb</td>
                <td>
                  <p>Excellent +3 Crystal Sword</p>
                  <p>Excellent +3 Crystal Axe</p>
                  <p>Excellent +3 Crystal Spear</p>
                  <p>Excellent +3 Crystal Mace</p>
                  <p>Excellent Valkyrie's Veil</p>
                </td>
              </tr>

              <tr>
                <td>Green Orb</td>
                <td>
                  <p>Serviceable Khryselakatos</p>
                  <p>50x Hunting Arrows</p>
                  <p>50x Piercing Arrows</p>
                </td>
              </tr>

              <tr>
                <td>Blue Orb</td>
                <td>
                  <p>Serviceable Sharur</p>
                  <p>Excellent Enchanted Feather</p>
                </td>
              </tr>
            </table>

            <p>
              The Mysterious Merchant instantly teleports after reaching a
              certain amount of health. His spells also heal him upon dealing
              damage to the player, as well as having a strong passive health
              regeneration.
            </p>
            <p>
              However, using 28 Excellent Beartraps (56 on Hardcore), he can be
              killed, but he does not drop anything.
            </p>
          </>
        ),
      },
    ],
  },

  {
    id: "Rat",
    image: Rat,
    levelDescription: "Level 1 Beast",
    stats: [
      { key: "HP", value: "30" },
      { key: "ATK", value: "8" },
      { key: "AC", value: "1" },
      { key: "ATK", value: "-" },
      { key: "SPD", value: "2" },
      { key: "PWR", value: "-" },
    ],
    hardcoreStats: [
      { key: "HP", value: "62 - 70" },
      { key: "ATK", value: "12 - 13" },
      { key: "AC", value: "2" },
      { key: "ATK", value: "-" },
      { key: "SPD", value: "3" },
      { key: "PWR", value: "-" },
    ],
    damageTypeEffectiveness: [
      { key: "Sword", value: "+10%" },
      { key: "Polearm", value: "-10%" },
      { key: "Mace", value: "+10%" },
      { key: "Axe", value: "-10%" },
      { key: "Unarmed", value: "+30%" },
      { key: "Ranged", value: "+20%" },
      { key: "Magic", value: "-" },
    ],
    abilities: [""],
    inventory: ["Meat", "Cheese"],

    descriptionSections: [
      {
        sectionName: "Description",
        sectionContent: (
          <>
            <p>
              Rats are the weakest enemy in the game, boasting unimpressive
              stats across the board and no special abilities. They are common
              at the beginning of the adventurer's descent into the
              Dungeon.{" "}
            </p>
          </>
        ),
      },

      {
        sectionName: "Spawn Locations",
        sectionContent: (
          <>
            <h3>The Mines</h3>
            <p>
              The Mines are the only location in which rats spawn naturally.
              Here they are the most common enemy, along with Skeletons.
            </p>

            <h3>Scroll of Summon</h3>
            <p>
              Reading a +0 scroll of summon at any point in the dungeon has a
              chance to summon 1-3 Rats that will be follow the player as an
              ally.
            </p>
          </>
        ),
      },

      {
        sectionName: "Behaviour",
        sectionContent: (
          <>
            <p>
              Rats use their melee attacks to hurt the player. Their low stats
              make them trivial to deal with, although they are more dangerous
              in larger numbers. They are unable to open doors, unless the
              player has the Hardcore flag set on. Rats start backpedalling on
              low health.
            </p>
          </>
        ),
      },

      {
        sectionName: "Loot",
        sectionContent: (
          <>
            <p>
              A rat has a 25% chance to drop a food item. If a rat drops a food
              item, there is an equally likely chance for the item to be either
              Fresh Meat or Mouldy Cheese. As such, they are a good source of
              early game Food for the adventurer.
            </p>
          </>
        ),
      },

      {
        sectionName: "Variants",
        sectionContent: (
          <>
            <h3>Algernon</h3>
            <p>
              Algernon is rare variant of the Rat that has a 2% chance of
              replacing any regular Rat spawn. It is visually distinct from
              normal Rats by its white fur. Algernon is always accompanied by a
              group of Rats who follow him as their leader. Algernon drops Meat
              and an Emerald.
            </p>
          </>
        ),
      },

      {
        sectionName: "Affinity",
        sectionContent: (
          <>
            <p>
              Rats are hostile to all other Denizens. They frequently fight
              other inhabitants of The Mines. Rats are also always hostile to
              the player unless they are using the Rat Form spell, at which
              point the player can recruit other Rats.
            </p>
          </>
        ),
      },
    ],
  },

  {
    id: "Spider",
    image: Spider,
    levelDescription: "Level 5 Beast",
    stats: [
      { key: "HP", value: "50" },
      { key: "ATK", value: "11" },
      { key: "AC", value: "4" },
      { key: "ATK", value: "-" },
      { key: "SPD", value: "8" },
      { key: "PWR", value: "-" },
    ],
    hardcoreStats: [
      { key: "HP", value: "98 - 110" },
      { key: "ATK", value: "15 - 16" },
      { key: "AC", value: "5" },
      { key: "ATK", value: "-" },
      { key: "SPD", value: "10 - 11" },
      { key: "PWR", value: "-" },
    ],
    damageTypeEffectiveness: [
      { key: "Sword", value: "-" },
      { key: "Polearm", value: "+20%" },
      { key: "Mace", value: "+10%" },
      { key: "Axe", value: "-" },
      { key: "Unarmed", value: "+10%" },
      { key: "Ranged", value: "+10%" },
      { key: "Magic", value: "-" },
    ],
    abilities: ["Posioned Attacks", "Spray Web"],
    inventory: ["-"],

    descriptionSections: [
      {
        sectionName: "Description",
        sectionContent: (
          <>
            <p>
              Spiders, or Crabs with Arachnophobia Mode on, are low level Beasts
              that appear early into the adventurer's descent into the dungeon.
              Their most striking feature is their higher speed relative to
              other Denizens appearing that early. As the player progresses
              deeper, Spiders fall out in favor of other, stronger enemies.
            </p>
          </>
        ),
      },

      {
        sectionName: "Spawn Locations",
        sectionContent: (
          <>
            <h3>The Mines</h3>
            <p>
              Spiders already appear in the first level of the game. They spawn
              uncommonly. Spiders cannot spawn randomly on Floor 1 of the game;
              they only appear in certain setpieces, and they are always locked
              behind bars in all of them. Starting Floor 2, Spiders may spawn
              randomly as enemies.
            </p>

            <h3>The Swamp</h3>
            <p>
              Spiders spawn less frequently in The Swamp than they do in The
              Mines. The more open nature of this level, as well as the player's
              strength, makes Spiders less dangerous overall.
            </p>

            <h3>Sand Labyrinth</h3>
            <p>
              In Sand Labyrinth Spiders only spawn as a part of a setpiece
              inside a room initially blocked off by Web obstacles. This room
              will have a few Spiders inside of it.
            </p>
          </>
        ),
      },

      {
        sectionName: "Behaviour",
        sectionContent: (
          <>
            <p>
              Spiders primarily use their melee attacks to damage the player;
              these attacks have a chance to inflict Poison and display a
              corresponding message "The Spider injects venom into its bite!"
              The spell Blood Ward protects against this Poison, as well as
              reducing the Spider's direct damage. Occasionally, the Spider will
              break up its attack cycle to wind up a cast of Spray Web instead
              which slows the player down as well as making them take knockback
              from melee hits. Similarly to Ghouls, Spiders do not turn around
              while standing in spot. This can be taken advantage of for a
              stealth attack, but the player should keep in mind the Spider's
              increased field of vision. Spiders start backpedalling on low
              health, except they will always hunt down Webbed targets.
            </p>
          </>
        ),
      },

      {
        sectionName: "Loot",
        sectionContent: (
          <>
            <p>
              Spiders do not have any natural drops. They are however still
              eligiuble to drop Vials of Blood when a Vampire or Accursed player
              is in the party, or Meat when wearing a Chef's Toque.
            </p>
          </>
        ),
      },

      {
        sectionName: "Variants",
        sectionContent: (
          <>
            <h3>Shelob</h3>
            <p>
              Shelob is a rare monster variant that has a 2% chance to replace
              any given Spider spawn. She always spawns alongside a few Spiders
              that follow her as their leader. Her drops always include a
              Decrepit +1 Dyrnwyn and a -5 Ring of Invisibility. The player
              should keep in mind that Bubbles, the replacement for Shelob when
              Arachnophobia Mode is turned on, has no unique model, making it
              visually indistinguishable from regular Crabs.
            </p>
          </>
        ),
      },

      {
        sectionName: "Affinity",
        sectionContent: (
          <>
            <p>
              Spiders are neutral with Scarabs. They are always hostile to the
              player unless they use the Arthropod Form Spell, at which point
              they may be recruited.
            </p>
          </>
        ),
      },
    ],
  },

  {
    id: "Troll",
    image: Troll,
    levelDescription: "Level 12 Beast",
    stats: [
      { key: "HP", value: "100 - 120" },
      { key: "ATK", value: "23" },
      { key: "AC", value: "5" },
      { key: "ATK", value: "-" },
      { key: "SPD", value: "0" },
      { key: "PWR", value: "-" },
    ],
    hardcoreStats: [
      { key: "HP", value: "196 - 260" },
      { key: "ATK", value: "38 - 43" },
      { key: "AC", value: "6 - 7" },
      { key: "ATK", value: "-" },
      { key: "SPD", value: "1" },
      { key: "PWR", value: "-" },
    ],
    damageTypeEffectiveness: [
      { key: "Sword", value: "+10%" },
      { key: "Polearm", value: "-20%" },
      { key: "Mace", value: "-20%" },
      { key: "Axe", value: "+10%" },
      { key: "Unarmed", value: "-20%" },
      { key: "Ranged", value: "-10%" },
      { key: "Magic", value: "-" },
    ],
    abilities: ["-"],
    inventory: ["Miscellaneous dungeon floor loot", "Roses"],

    descriptionSections: [
      {
        sectionName: "Description",
        sectionContent: (
          <>
            <p>
              Trolls are bulky, slow Beasts that appear early on in the
              adventurer's journey. Their stats are overall higher than other
              enemies the player will encounter, with a notable exception to
              their Perception.
            </p>
          </>
        ),
      },

      {
        sectionName: "Spawn Locations",
        sectionContent: (
          <>
            <h3>The Mines</h3>
            <p>
              Trolls spawn infrequently in The Mines. Here they are the toughest
              regular enemy that spawns naturally. Trolls cannot spawn randomly
              on Floor 1 of the game; they only appear in certain setpieces, and
              they are always locked behind bars in all of them. Starting Floor
              2, Trolls may spawn randomly as enemies.
            </p>

            <h3>The Gnomish Mines</h3>
            <p>
              Trolls spawn alongside Gnomes in The Gnomish Mines. Troll spawns
              in the Gnomish Mines are always fixed; they always start in the
              same position and there is the same number of them each run, but
              their drops vary based on map seed.
            </p>

            <h3>The Swamp</h3>
            <p>Trolls spawn very rarely in the swamp.</p>

            <h3>The Temple</h3>
            <p>
              In the first secret level of The Swamp, a large number of Trolls
              will be locked behind bars initially. These bars automatically
              open upon grabbing the Silver Key or the Infected Branch Bow deep
              within the Temple.
            </p>

            <h3>The Sand Labyrinth</h3>
            <p>Trolls spawn uncommonly in The Sand Labyrinth.</p>

            <h3>The Ruins</h3>
            <p>
              There is a single setpiece in The Ruins that has Trolls locked in
              some sort of prison. Otherwise, Trolls do not naturally spawn on
              this level.
            </p>
          </>
        ),
      },

      {
        sectionName: "Behaviour",
        sectionContent: (
          <>
            <p>
              Trolls use their melee attacks to damage the player. They do not
              have any special abilities, but their damage is significant,
              especially early into the player's descent. Trolls have bad
              vision, making stealth tactics particularly effective against
              them. They are also quite slow. Sometimes, they may be found
              Sleeping. Trolls start backpedalling on low health.
            </p>
          </>
        ),
      },

      {
        sectionName: "Loot",
        sectionContent: (
          <>
            <p>
              Trolls have a 1/20 chance to drop a Rose of any condition with -1
              to +1 Enchantment. They also have a 1/3 chance to drop 1-3 random
              items based on the level curve, plus 10 floors; these items appear
              in any condition with -1 to +1 beatitude. In other words, Trolls
              drop the sort of items one could expect to find lying on the
              ground 10 floors deeper.
            </p>
          </>
        ),
      },

      {
        sectionName: "Variants",
        sectionContent: (
          <>
            <h3>Thumpus the Troll</h3>
            <p>
              Thumpus the Troll is a rare monster variant that has a 2% chance
              of replacing any spawned Troll. He is alwaus accompanied by a
              group of 3 Gnomes who follow him as their leader. Thumpus always
              drops 3-4 Roses on death as well as some Gold and the usual Troll
              loot.
            </p>
          </>
        ),
      },

      {
        sectionName: "Affinity",
        sectionContent: (
          <>
            <p>
              Trolls are neutral with Gnomes and Gnome Thieves. Trolls are
              currently the only monster in the game that is not neutral with
              itself - Trolls will attack each other. They are also neutral to
              the player should they play as the Gnome race, as well as being
              recruitable if the player uses the Troll Form spell.
            </p>
          </>
        ),
      },
    ],
  },

  {
    id: "Bat",
    image: Bat,
    levelDescription: "Level 1 Beast",
    stats: [
      { key: "HP", value: "10 - 40" },
      { key: "ATK", value: "8 - 13" },
      { key: "AC", value: "0" },
      { key: "ATK", value: "-" },
      { key: "SPD", value: "0 - 3" },
      { key: "PWR", value: "-" },
    ],
    hardcoreStats: [
      { key: "HP", value: "26 - 100" },
      { key: "ATK", value: "12 - 18" },
      { key: "AC", value: "1" },
      { key: "ATK", value: "-" },
      { key: "SPD", value: "1 - 4" },
      { key: "PWR", value: "-" },
    ],
    damageTypeEffectiveness: [
      { key: "Sword", value: "-" },
      { key: "Polearm", value: "-" },
      { key: "Mace", value: "-" },
      { key: "Axe", value: "-" },
      { key: "Unarmed", value: "-50%" },
      { key: "Ranged", value: "-" },
      { key: "Magic", value: "-" },
    ],
    abilities: ["Levitation", "Evasion", "Bleeding Attacks", "Indominable"],
    inventory: ["-"],

    descriptionSections: [
      {
        sectionName: "Description",
        sectionContent: (
          <>
            <p>
              Bats are evasive Beasts with low stats. They appear throughout the
              entire dungeon, scaling in stats the further the player descends.
            </p>
          </>
        ),
      },

      {
        sectionName: "Spawn Locations",
        sectionContent: (
          <>
            <h3>Ceilings</h3>
            <p>
              Bats are most commonly seen hanging from ceilings on non-secret
              floors. The player will know when Bats may spawn on the current
              floor if it is a dark floor - there will be no Torches on walls.
              They spawn this way in every level, except in Underworld and Hell.
              There are always at least 2 Bats hanging from the ceiling in one
              spot, but the number of them rises the deeper in the dungeon they
              are.
            </p>

            <h3>Breakable objects</h3>
            <p>
              Bats may also uncommonly be found inside breakable objects from
              which they will bust out should the player come close to them.
              They can spawn this way even in Underworld. The floor does not
              have to be a dark floor for Bats to spawn in this manner.
            </p>

            <h3>Bells</h3>
            <p>
              Bats have a 25% chance to spawn from any bell that does not
              contain an item when it is first pulled by the player. Similarly
              to other spawning methods, they will always appear in groups by
              this method. The floor does not have to be a dark floor for Bats
              to spawn in this manner.
            </p>
          </>
        ),
      },

      {
        sectionName: "Description",
        sectionContent: (
          <>
            <p>
              Bats will remain motionless until the player disturbs them by
              getting close or under them. They will chase the player and damage
              them with their bite which can also inflict Bleeding. After a Bat
              loses its attention on the player, it will roam shortly before
              situating itself on the ceiling again. Unless the ceiling is very
              low, Bats are not damageable while they are resting on it except
              with certain special means. The player thus usually has to awaken
              them in order to defeat them. Bats have a 60% base chance to evade
              melee attacks, but they cannot dodge magic or ranged attacks. The
              dodge chance is also reduced to a 40% if the player's hit is a
              flanking attack. Backstabs never miss Bats and neither does the
              legendary polearm Gungnir. Bats are immune to Charm / Pacify, as
              well as the Dominate spell. Their attack animation also has a
              longer windup than most other Denizens, so it is easy to react to
              it with a block or a parry. Bats start backpedalling on low
              health.
            </p>
          </>
        ),
      },

      {
        sectionName: "Loot",
        sectionContent: (
          <>
            <p>
              Bats do not have any natural drops. They are however still
              eligiuble to drop Vials of Blood when a Vampire or Accursed player
              is in the party, or Meat when wearing a Chef's Toque.
            </p>
          </>
        ),
      },

      {
        sectionName: "Affinity",
        sectionContent: (
          <>
            <p>
              Bats are neutral with Shadows. They are always hostile to the
              player.
            </p>
          </>
        ),
      },
    ],
  },

  {
    id: "Scorpion",
    image: Scorpion,
    levelDescription: "Level 7 Beast",
    stats: [
      { key: "HP", value: "70" },
      { key: "ATK", value: "21" },
      { key: "AC", value: "4" },
      { key: "ATK", value: "-" },
      { key: "SPD", value: "3" },
      { key: "PWR", value: "-" },
    ],
    hardcoreStats: [
      { key: "HP", value: "134 - 150" },
      { key: "ATK", value: "33 - 36" },
      { key: "AC", value: "5" },
      { key: "ATK", value: "-" },
      { key: "SPD", value: "4" },
      { key: "PWR", value: "-" },
    ],
    damageTypeEffectiveness: [
      { key: "Sword", value: "-10%" },
      { key: "Polearm", value: "+30%" },
      { key: "Mace", value: "+10%" },
      { key: "Axe", value: "-" },
      { key: "Unarmed", value: "+20%" },
      { key: "Ranged", value: "-" },
      { key: "Magic", value: "-" },
    ],
    abilities: ["Paralyzing Attacks"],
    inventory: ["-"],

    descriptionSections: [
      {
        sectionName: "Description",
        sectionContent: (
          <>
            <p>
              Scorpions are arthropod Beasts with fairly low stats but a
              dangerous paralyzing sting that proves troublesome for
              adventurers.
            </p>
          </>
        ),
      },

      {
        sectionName: "Spawn Locations",
        sectionContent: (
          <>
            <h3>Sand Labyrinth</h3>
            <p>
              Scorpions only naturally appear in the Sand Labyrinth level of the
              game. Here they are a common enemy alongside its arthropod allies
              Scarabs and Lesser Insectoids. They are often solitary, with the
              exception of appearance alongside Skrabblag.
            </p>
          </>
        ),
      },

      {
        sectionName: "Behaviour",
        sectionContent: (
          <>
            <p>
              Scorpions use their stings to hurt the player which has a chance
              to Paralyze them, making them particularly dangerous when cornered
              or in bigger groups as the effect's duration can be refreshed even
              while the player is still suffering from it. Scorpions are unable
              to inflict Paralysis through a fully blocked hit. Otherwise,
              keeping distance and avoiding hits is preferable when fighting
              them. The spell Blood Ward reduces damage from Scorpions, as they
              count as poisonous creatures.
            </p>
          </>
        ),
      },

      {
        sectionName: "Loot",
        sectionContent: (
          <>
            <p>
              Scorpions do not have any natural drops. They are however still
              eligiuble to drop Vials of Blood when a Vampire or Accursed player
              is in the party, or Meat when wearing a Chef's Toque.
            </p>
          </>
        ),
      },

      {
        sectionName: "Variants",
        sectionContent: (
          <>
            <h3>Skrabblag</h3>
            <p>
              Skrabblag is the special, tougher variant of Scorpions that has a
              2% chance to replace any given Scorpion spawn. It is always
              accompanied by a group of regular Scorpions. The player should be
              careful when engaging Skrabblag and its group, as they could be
              overwhelmed with Paralysis. Skrabblag drops a Ruby on defeat.
            </p>
          </>
        ),
      },

      {
        sectionName: "Affinity",
        sectionContent: (
          <>
            <p>
              Scorpions are neutral with Scarabs and Insectoids. The player can
              recruit Scorpions as a true Insectoid or with the usage of
              Arthropod Form.
            </p>
          </>
        ),
      },
    ],
  },

  {
    id: "Scarab",
    image: Scarab,
    levelDescription: "Level 10-15 Beasts",
    stats: [
      { key: "HP", value: "60" },
      { key: "ATK", value: "18" },
      { key: "AC", value: "2" },
      { key: "ATK", value: "-" },
      { key: "SPD", value: "12" },
      { key: "PWR", value: "-" },
    ],
    hardcoreStats: [
      { key: "HP", value: "124 - 140" },
      { key: "ATK", value: "30 - 33" },
      { key: "AC", value: "3" },
      { key: "ATK", value: "-" },
      { key: "SPD", value: "14 - 16" },
      { key: "PWR", value: "-" },
    ],
    damageTypeEffectiveness: [
      { key: "Sword", value: "+50%" },
      { key: "Polearm", value: "-30%" },
      { key: "Mace", value: "+10%" },
      { key: "Axe", value: "+40%" },
      { key: "Unarmed", value: "+40%" },
      { key: "Ranged", value: "+10%" },
      { key: "Magic", value: "-80%" },
    ],
    abilities: ["Weakness inflicting attacks"],
    inventory: ["Tomalleys", "Low value gemstones"],

    descriptionSections: [
      {
        sectionName: "Description",
        sectionContent: (
          <>
            <p>
              Scarabs are somewhat weak Beasts that have high Magic Resistance.
            </p>
          </>
        ),
      },

      {
        sectionName: "Spawn Locations",
        sectionContent: (
          <>
            <h3>The Sand Labyrinth</h3>
            <p>
              Scarabs first start appearing in Sand Labyrinth. Here they are a
              somewhat common enemy but also the weakest one. They can also
              break out from certain objects, like pots.
            </p>

            <h3>Crystal Caves</h3>
            <p>
              Scarabs only start naturally reappearing at the beginning of Act 2
              in Crystal Caves, where they are once again fairly common but
              still the weakest enemy in the level, despite scaling up somewhat.
              There also exists a trap setpiece which spawns a random amount of
              Scarabs once the player triggers it. They may also rarely come out
              from breakable objects.
            </p>
          </>
        ),
      },

      {
        sectionName: "Behaviour",
        sectionContent: (
          <>
            <p>
              Scarabs exclusively use their melee attacks to damage the player.
              Their attacks may inflict the Weakness status effect which reduces
              physical damage dealt by the afflicted. While this status effect
              is troublesome, the Scarab's low stats make them unthreatening
              enemies even while suffering from Weakness. Scarabs cannot inflict
              Weakness through a fully blocked hit. They pose a staggering 80%
              Resistance to magic, making its usage impractical. Scarabs start
              backpedalling on low health.
            </p>
          </>
        ),
      },

      {
        sectionName: "Loot",
        sectionContent: (
          <>
            <p>
              Scarabs commonly drop Tomalleys which provide serviceable hunger
              when consumed, but the variance in Quality of Tomalleys dropped by
              Scarabs means it is not an entirely reliable source of Food. They
              may also rarely drop low value Gemstones.
            </p>
          </>
        ),
      },

      {
        sectionName: "Variants",
        sectionContent: (
          <>
            <p>
              Xyggi is an elite variant that has a 2% chance of replacing any
              given Scarab spawn. He will always spawn with a group of regular
              Scarabs who follow him as their leader. Xyggi will use the Cold
              spell to fight the player and has innate Magic Reflection to
              stifle any attempts at magic usage. Xyggi always drops the coveted
              Enchanted Feather as well as regular Scarab drops.
            </p>
          </>
        ),
      },

      {
        sectionName: "Affinity",
        sectionContent: (
          <>
            <p>
              Scarabs are neutral with Scorpions, Insectoids and Spiders. They
              are recruitable and friendly to the player if they are a true
              Insectoid.
            </p>
          </>
        ),
      },
    ],
  },

  {
    id: "Cockatrice",
    image: Cockatrice,
    levelDescription: "Level 35 Beast",
    stats: [
      { key: "HP", value: "500 - 600" },
      { key: "ATK", value: "73 - 83" },
      { key: "AC", value: "20" },
      { key: "ATK", value: "-" },
      { key: "SPD", value: "8" },
      { key: "PWR", value: "-" },
    ],
    hardcoreStats: [
      { key: "HP", value: "916 - 1220" },
      { key: "ATK", value: "126 - 163" },
      { key: "AC", value: "23 - 25" },
      { key: "ATK", value: "-" },
      { key: "SPD", value: "10-11" },
      { key: "PWR", value: "-" },
    ],
    damageTypeEffectiveness: [
      { key: "Sword", value: "+60%" },
      { key: "Polearm", value: "+80%" },
      { key: "Mace", value: "+10%" },
      { key: "Axe", value: "+30%" },
      { key: "Unarmed", value: "-20%" },
      { key: "Ranged", value: "-50%" },
      { key: "Magic", value: "-50%" },
    ],
    abilities: ["Stoneblood", "Levitation", "Double Strike"],
    inventory: [
      "Enchanted Feathers",
      "Spellbook of Stoneblood",
      "Magistaffs of Stoneblood",
      "Gemstones",
      "Potions of Invisibility",
      "Potions of Paralysis",
      "Rocks",
    ],

    descriptionSections: [
      {
        sectionName: "Description",
        sectionContent: (
          <>
            <p>
              Cockatrices are the most formidable regularly spawning enemy in
              the game, boasting incredible stats across the board and dangerous
              special abilities to boot. They start appearing only after Act 1
              of the game is finished.
            </p>
          </>
        ),
      },

      {
        sectionName: "Spawn Locations",
        sectionContent: (
          <>
            <h3>Crystal Caves</h3>
            <p>
              Crystal Caves is the first level where the player may encounter
              Cockatrices. While they are rarer than other enemies, it should
              still be expected to encounter at least a few while venturing the
              floors.
            </p>

            <h3>The Citadel</h3>
            <p>
              Cockatrices also spawn in the final level of the game. The tight
              corridors and small rooms of this level can amplify the dangers
              Cockatrices threaten.
            </p>
          </>
        ),
      },

      {
        sectionName: "Behaviour",
        sectionContent: (
          <>
            <p>
              Cockatrices primarily use their strong melee attacks to damage the
              player, but they also occasionally break their attack cycles to
              use either Double Strike or cast Stoneblood, both of which should
              be avoided. It is generally ill advised to exchange blows with the
              Cockatrice, for their damage output is hard to outright nullify.
              Stone Blood's windup is fairly long and telegraphed, but it can
              spell death to the player should it land. Double Strike's windup
              is somewhat shorter, which should be taken into consideration
              during combat to differentiate between what the Cockatrice is
              doing. Cockatrices are immune to Paralysis, Sleep and Charm /
              Pacification, but they can be inflicted with Slow and Fear. Their
              Levitation allows them to chase the player even above liquids and
              bottomless pits.
            </p>
          </>
        ),
      },

      {
        sectionName: "Loot",
        sectionContent: (
          <>
            <p>
              Cockatrices drop an assortment of loot. Most notably, they drop
              the Spellbook of Stoneblood as well as Enchanted Feathers . They
              are also a consistent source of Potions of Invisibility which are
              particularly useful in brewing.
            </p>
          </>
        ),
      },

      {
        sectionName: "Variants",
        sectionContent: (
          <>
            <h3>Cockatrice (Lair)</h3>
            <p>
              The Cockatrice that appears at the end of the secret floor
              Cockatrice Lair is a unique variant of the regular Cockatrice.
              While visually and functionally identical to normal Cockatrices,
              the Lair Cockatrice has some different stats. More specifically,
              it is of a higher Level (50) and it has less Armor Class, while
              also being Indominable, unlike regular Cockatrices.
            </p>
          </>
        ),
      },

      {
        sectionName: "Affinity",
        sectionContent: (
          <>
            <p>
              Cockatrice are neutral to Insectoids, Incubi, Goatmen, Vampires,
              Shadows, Imps, Slimes, and Ghouls. They are always hostile to the
              player regardless of race.
            </p>
          </>
        ),
      },
    ],
  },

  {
    id: "Minotaur",
    image: Minotaur,
    levelDescription: "Level 20 Beast",
    stats: [
      { key: "HP", value: "400 (Act 1) 800 (Act 2)" },
      { key: "ATK", value: "43 (Act 1) 68 (Act 2)" },
      { key: "AC", value: "15 (Act 1) 20 (Act 2)" },
      { key: "ATK", value: "-" },
      { key: "SPD", value: "15 (Act 1) 20 (Act 2)" },
      { key: "PWR", value: "-" },
    ],
    hardcoreStats: [
      { key: "HP", value: "736 - 820 (Act 1) 1456 - 1620 (Act 2)" },
      { key: "ATK", value: "73 - 83 (Act 1) 117 - 133 (Act 2)" },
      { key: "AC", value: "17 - 19 (Act 1) 23 - 25 (Act 2))" },
      { key: "ATK", value: "-" },
      { key: "SPD", value: "17 - 19 (Act 1) 23 - 26 (Act 2)" },
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
    abilities: [
      "Levitation",
      "Destroy Obstacle",
      "Telepathy",
      "Indominable",
      "Resist Magic (Maze Only)",
      " Troll's Blood (Maze Only)",
      "HP Regeneration (Maze Only)",
      "Red Mystic Orb Buff (Maze Only)",
      "Vampiric Aura (Act 2)",
    ],
    inventory: ["High value gemstones"],

    descriptionSections: [
      {
        sectionName: "Description",
        sectionContent: (
          <>
            <p>
              A very powerful enemy, and the Baron's pet, the Minotaur will pulp
              any dungeon delvers foolish enough to ignore its master's
              warnings.
            </p>
            <p>
              It can show up multiple times in a playthrough, even if it's
              already been killed.
            </p>
            <p>
              The Minotaur will appear in the spawn room after 2:30 minutes, or
              3:30 minutes in the Mines, in the Sand Labyrinth, and after
              Hamlet, then instantly barrel towards the nearest player. On those
              floors, a Daedalus Shrine will be present to assist the player in
              escaping.
            </p>
            <p>
              The ZAP Brigade has 20% chance of appearing on a Minotaur floor,
              where they will wait to battle with it. The Minotaur will ignores
              them until it gets hit by one of their attacks. They have a good
              chance to defeat the Minotaur if they manage to take its aggro. As
              the Brigadiers are all human, they will attack monster races not
              friendly with them, like regular Humans.
            </p>
            <p>
              There is a 50% chance for the Minotaur to appear on the 2nd and
              3rd floors of each zone, and it will always spawn in the the
              Minotaur Maze. Two Minotaurs will also spawn after defeating
              Baphomet on the final floor of Hell.
            </p>
            <p>
              Upon its death, the Minotaur will drop an emerald, sapphire, ruby,
              or diamond of flawless quality.
            </p>
            <p>
              The Minotaur levitates and breaks walls, including the ceiling. It
              is immune to charm, paralysis and sleep.
            </p>
            <p>
              A slowing effect, like a Cold or Slow spell still works on the
              Minotaur.
            </p>

            <p>
              Inside its maze, the Minotaur gains multiple buffs (see "Maze
              only" abilities). Talking the Gungnir from its pedestal will
              remove most of these buffs. It also gives the minotaur Slow and
              Hungover. These effects are not permanent and will wear off quite
              quickly.
            </p>
            <p>
              Once its master Baron Herx dies (either directly, or by defeating
              Baphomet), the Minotaur becomes stronger (see "Act 2" stats).
            </p>
            <p>
              The Vampiric Aura from the Act 2 adds 5 non-reductible damages to
              the Minotaur's base attack.
            </p>
          </>
        ),
      },
    ],
  },

  {
    id: "Insectoid",
    image: Insectoid,
    levelDescription: "Level 25 Beastfolk",
    stats: [
      { key: "HP", value: "130 - 155" },
      { key: "ATK", value: "26 - 40" },
      { key: "AC", value: "15 - 24" },
      { key: "ATK", value: "33 - 40" },
      { key: "SPD", value: "9" },
      { key: "PWR", value: "30" },
    ],
    hardcoreStats: [
      { key: "HP", value: "242 - 315" },
      { key: "ATK", value: "41 - 65" },
      { key: "AC", value: "17 - 28" },
      { key: "ATK", value: "49 - 63" },
      { key: "SPD", value: "11 - 12" },
      { key: "PWR", value: "30" },
    ],
    damageTypeEffectiveness: [
      { key: "Sword", value: "-" },
      { key: "Polearm", value: "+30%" },
      { key: "Mace", value: "-30%" },
      { key: "Axe", value: "+30%" },
      { key: "Unarmed", value: "-20%" },
      { key: "Ranged", value: "+10%" },
      { key: "Magic", value: "-" },
    ],
    abilities: ["Spray Acid"],
    inventory: [
      "Iron / Steel / Crystal Boots",
      "Iron / Steel / Crystal Shields",
      "Steel / Crystal Swords ",
      "Steel / Crystal Polearms",
      "Shortbows / Longbows / Compound Bows",
      "Iron Daggers",
      "Spellbooks of Acid Spray",
      "Quivers of Hunting / Piercing Arrows",
    ],

    descriptionSections: [
      {
        sectionName: "Description",
        sectionContent: (
          <>
            <p>
              Insectoids are Beastfolk that primarily reside in Sand Labyrinth
              and Crystal Caves. They are similar to the Goblins the player
              comes into contact with prior, but with a few key differences in
              behaviour and generally better equipment.
            </p>
          </>
        ),
      },

      {
        sectionName: "Spawn locations",
        sectionContent: (
          <>
            <h3>Sand Labyrinth</h3>
            <p>
              Insectoids first start naturally appearing in Sand Labyrinth. Here
              they are labelled as "Lesser Insectoids", alluding to the fact
              they are weaker than their counterparts that appear on much later
              floors. They spawn decently commonly, but are almost never in big
              groups.
            </p>

            <h3>Crystal Caves</h3>
            <p>
              Regular Insectoids start appearing in Crystal Caves. Here they get
              better equipment than their lesser counterparts and also come in
              greater numbers.
            </p>
          </>
        ),
      },

      {
        sectionName: "Behaviour",
        sectionContent: (
          <>
            <p>
              Insectoids will primarily use their weapon to attack the player.
              Bow-wielding Insectoids have dangerous quivers that pierce armor
              or slow the player down, hence they should be avoided. Insectoids
              occasionally break their attack cycles to wind up an Iron Dagger
              throw or an Acid Spray spell, both of which are visually
              telegraphed in the same manner. The dagger throw can be caught
              mid-air with enough reflexes or outright dodged, while Acid Spray
              should generally be avoided due to its armor-melting properties.
              The spell Blood Ward reduces the direct damage from Insectoids, as
              well as the damage from their Hunting Arrows and Acid Spray spell.
              Insectoids start backpedalling on low health.
            </p>
          </>
        ),
      },

      {
        sectionName: "Loot",
        sectionContent: (
          <>
            <p>
              Insectoids drop the equipment they wear and use, as well as
              uncommonly dropping the Spellbook of Acid Spray.
            </p>
          </>
        ),
      },

      {
        sectionName: "Variants",
        sectionContent: (
          <>
            <h3>Tortured Insectoids</h3>
            <p>
              A setpiece in the Crystal Caves has 4 jailed Tortured Insectoids.
              They are functionally identical to regular Insectoids, except they
              initially have no equipment.
            </p>
          </>
        ),
      },

      {
        sectionName: "Affinity",
        sectionContent: (
          <>
            <p>
              Insectoids are friendly with Scarabs, Scorpions and Kobolds. The
              player may recruit Insectoids if they are playing as the Insectoid
              race.
            </p>
          </>
        ),
      },
    ],
  },

  {
    id: "Bugbear",
    image: Bugbear,
    levelDescription: "Level 14 Beastfolk",
    stats: [
      { key: "HP", value: "130 - 150" },
      { key: "ATK", value: "18 - 28" },
      { key: "AC", value: "8 - 15" },
      { key: "ATK", value: "15 - 22" },
      { key: "SPD", value: "3" },
      { key: "PWR", value: "-" },
    ],
    hardcoreStats: [
      { key: "HP", value: "242 - 310" },
      { key: "ATK", value: "30 - 43" },
      { key: "AC", value: "9 - 17" },
      { key: "ATK", value: "23 - 33" },
      { key: "SPD", value: "4" },
      { key: "PWR", value: "-" },
    ],
    damageTypeEffectiveness: [
      { key: "Sword", value: "+30%" },
      { key: "Polearm", value: "-30%" },
      { key: "Mace", value: "+20%" },
      { key: "Axe", value: "-20%" },
      { key: "Unarmed", value: "-30%" },
      { key: "Ranged", value: "-20%" },
      { key: "Magic", value: "-" },
    ],
    abilities: ["Strafing", "Shield Bash"],
    inventory: ["Steel Swords / Axes", "Arbalests", "Scutums"],

    descriptionSections: [
      {
        sectionName: "Description",
        sectionContent: (
          <>
            <p>
              Bugbears are tough Beastfolk that use heavy equipment in combat.
              They are as large as a Troll, but also faster, smarter and more
              perceptive.
            </p>
          </>
        ),
      },

      {
        sectionName: "Spawn Locations",
        sectionContent: (
          <>
            <h3>The Ruins</h3>
            <p>
              Bugbears only spawn in The Ruins level of the game towards the end
              of Act 1. Here they appear in frequent numbers, often in groups or
              pairs.
            </p>
          </>
        ),
      },

      {
        sectionName: "Behaviour",
        sectionContent: (
          <>
            <p>
              Bugbears use their weapons to attack the player. Arbalest wielding
              Bugbears will keep their distance and shoot the player. Often they
              also have Scutums equipped, a shield item unique to them. Scutum
              Bugbears will occassionally pull their guard up and strafe the
              player, at which point their defenses are nigh-impenetrable, even
              with magical attacks. They will also bash the player with their
              Scutum, dealing moderate damage and knocking back the player. It
              is best to disengage and wait for the Bugbear to lower their guard
              again. Bugbears are weak to Hunting Arrows. Bugbears start
              backpedalling on low health.
            </p>
          </>
        ),
      },

      {
        sectionName: "Loot",
        sectionContent: (
          <>
            <p>
              Bugbears are the most consistent source of the Arbalest, a
              powerful ranged weapon that eclipses all other options in damage,
              but is slower at firing.
            </p>
          </>
        ),
      },

      {
        sectionName: "Affinity",
        sectionContent: (
          <>
            <p>
              Bugbears are neutral with Gnomes and Gnome Thieves. Interestingly,
              they will still trigger the traps laid by Gnome Thieves. They are
              always hostile to the player.
            </p>
          </>
        ),
      },
    ],
  },

  {
    id: "Kobold",
    image: Kobold,
    levelDescription: "Level 15 Beastfolk",
    stats: [
      { key: "HP", value: "100 - 120" },
      { key: "ATK", value: "33 - 40" },
      { key: "AC", value: "3 - 11" },
      { key: "ATK", value: "33 - 41" },
      { key: "SPD", value: "5 - 10" },
      { key: "PWR", value: "-" },
    ],
    hardcoreStats: [
      { key: "HP", value: "196 - 260" },
      { key: "ATK", value: "52 - 70" },
      { key: "AC", value: "4 - 13" },
      { key: "ATK", value: "46 - 64" },
      { key: "SPD", value: "6 - 13" },
      { key: "PWR", value: "-" },
    ],
    damageTypeEffectiveness: [
      { key: "Sword", value: "-10%" },
      { key: "Polearm", value: "-10%" },
      { key: "Mace", value: "+20%" },
      { key: "Axe", value: "+20%" },
      { key: "Unarmed", value: "-20%" },
      { key: "Ranged", value: "+10%" },
      { key: "Magic", value: "-80%" },
    ],
    abilities: ["Slow"],
    inventory: [
      "Iron Axes",
      "Steel Swords",
      "Steel Halberds",
      "Shortbows / Crossbows",
      "Iron / Steel Shields",
      "Cloaks",
      "Crystal Shards",
      "Quivers of Fire / Springshot Arrows",
      "Enchanted Feathers",
      "Tin Openers",
      "Towels",
      "Lanterns",
    ],

    descriptionSections: [
      {
        sectionName: "Description",
        sectionContent: (
          <>
            <p>
              Kobolds are Beastfolk that appear exclusively in Crystal Caves
              level of the game. They are also the most common Denizen of the
              caves.
            </p>
          </>
        ),
      },

      {
        sectionName: "Spawn Locations",
        sectionContent: (
          <>
            <h3>Crystal Caves</h3>
            <p>
              Kobolds are very common in Crystal Caves. Sometimes they appear
              alone, but often they are part of setpieces where multiple Kobolds
              are grouped together.
            </p>
          </>
        ),
      },

      {
        sectionName: "Behaviour",
        sectionContent: (
          <>
            <p>
              Kobolds primarily use their equipment to attack the player.
              Kobolds wielding Crossbows are more dangerous than those wielding
              melee weapons, as they augment their shots with dangerous Quivers
              of Fire and Springshot arrows. Sometimes they break their attack
              cycles by casting a Slow spell. Kobolds are extremely resistant to
              magic, so its usage is ill-advised, unless the player has some
              means of bypassing resistances such as Arcane Mark or Breath Fire
              spells. Kobolds are weak to Hunting Arrows. Occasionally, Kobolds
              can be found Asleep on the floor. Kobolds start backpedalling on
              low health.
            </p>
          </>
        ),
      },

      {
        sectionName: "Loot",
        sectionContent: (
          <>
            <p>
              Kobolds drop the equipment they wear. Most notably, this makes
              them a good source of Quivers of Fire and Springshot Arrows. They
              also uncommonly drop Enchanted Feathers.
            </p>
          </>
        ),
      },

      {
        sectionName: "Variants",
        sectionContent: (
          <>
            <h3>Kobold Cultists</h3>
            <p>
              Kobold Cultists are a stronger variant of Kobolds that only appear
              in the secret level Cockatrice Lair. Every Kobold Cultist spawn
              location is fixed and consistent through all playthroughs. They
              are visually distinct from regular Kobolds by the Hoods on their
              heads or Magistaffs of Bloodletting in their hands. Along with
              regular Kobold's abilities, they can also cast Fireball, Cold,
              Stoneblood and Bloodletting spells. They drop their equipment,
              including the Hoods and Magistaffs of Bloodletting.
            </p>
          </>
        ),
      },

      {
        sectionName: "Affinity",
        sectionContent: (
          <>
            <p>
              Kobolds are neutral with Insectoids, Crystal Golems and Incubi.
              They are always hostile to the player.
            </p>
          </>
        ),
      },
    ],
  },

  {
    id: "Goatman",
    image: Goatman,
    levelDescription: "Level 25 Beastfolk",
    stats: [
      { key: "HP", value: "220 - 240" },
      { key: "ATK", value: "29 - 40" },
      { key: "AC", value: "9 - 18" },
      { key: "ATK", value: "-" },
      { key: "SPD", value: "8" },
      { key: "PWR", value: "25" },
    ],
    hardcoreStats: [
      { key: "HP", value: "412 - 500" },
      { key: "ATK", value: "48 - 65" },
      { key: "AC", value: "10 - 20" },
      { key: "ATK", value: "-" },
      { key: "SPD", value: "10 - 11" },
      { key: "PWR", value: "25" },
    ],
    damageTypeEffectiveness: [
      { key: "Sword", value: "-10%" },
      { key: "Polearm", value: "+10%" },
      { key: "Mace", value: "-" },
      { key: "Axe", value: "+10%" },
      { key: "Unarmed", value: "-" },
      { key: "Ranged", value: "+10%" },
      { key: "Magic", value: "+40%" },
    ],
    abilities: ["Forcebolt", "Fireball", "Cold", "Slow"],
    inventory: [
      "Leather / Steel Breastpieces",
      "Wizard Doublets",
      "Iron, Steel, Crystal Boots",
      "Hoods",
      "Wizard Hats",
      "Cloaks",
      "Mirror Shields",
      "Steel / Crystal Axes",
      "Steel / Crystal Maces",
      "Steel Chakrams",
      "Magistaffs of Slow",
      "Magistaffs of Fire",
      "Magistaffs of Cold",
      "Lanterns",
      "Crystal Shards",
      "Potions of Healing",
      "Bottles of Booze",
    ],

    descriptionSections: [
      {
        sectionName: "Description",
        sectionContent: (
          <>
            <p>
              Goatmen are tough Beastfolk with a variety of combat tactics. They
              are relegated for the later parts of the dungeon.
            </p>
          </>
        ),
      },

      {
        sectionName: "Spawn Locations",
        sectionContent: (
          <>
            <h3>Hell</h3>
            <p>
              The first location the player may encounter Goatmen is in the
              final level of the alternate path in Act 1, Hell. Here they spawn
              in frequent numbers, sometimes in groups. They may also spawn from
              hell circles on the ground. The Goatmen that spawn in this level
              are the Lesser Goatman variant that are identical to the regular
              variety in behaviour and equipment, but have less stats.
            </p>

            <h3>The Citadel</h3>
            <p>
              Goatmen also naturally spawn in the final level of the dungeon.
              Here they are fairly common, spawning about as frequently as the
              other monster types. Oftentimes they are also fixed spawns as
              parts of certain setpieces.
            </p>
          </>
        ),
      },

      {
        sectionName: "Behaviour",
        sectionContent: (
          <>
            <p>
              Goatmen have more complex behaviour than most other Denizens. They
              prefer using melee attacks to damage the player, but can also
              either throw their Steel Chakrams, use the Magistaffs they are
              holding or throw Bottles of Booze at the player. When throwing
              Booze, the Goatman itself will also get Drunk, boosting its melee
              damage output. Some Goatmen that prefer using Magic, recognisable
              by their Wizard Hats, will repeatedly cast a spell, either
              Forcebolt, Fireball, Cold or Slow. While they may exhibit more
              complicated behaviour, Goatmen are still some of the least
              dangerous enemies in the levels they appear in. They also have a
              significant weakness to Magic. Goatmen start backpedalling on low
              health. Goatmen are immune to the Greasy debuff.
            </p>
          </>
        ),
      },

      {
        sectionName: "Loot",
        sectionContent: (
          <>
            <p>
              Goatmen drop the equipment they wear. Their equipment is high
              tier, but nothing notable. The strongest items they often drop are
              the Potions of Healing which are always useful as a fast and
              reliable source of healing on any player character.
            </p>
          </>
        ),
      },

      {
        sectionName: "Variants",
        sectionContent: (
          <>
            <h3>Gharbad</h3>
            <p>
              Gharbad is an elite variant that has a 2% chance to replace any
              regular Goatman spawn. He behaves similarly to the regular variant
              but is stronger overall. Gharbad usually spawns with a group of
              Goatmen that follow him as their leader.
            </p>
          </>
        ),
      },

      {
        sectionName: "Affinity",
        sectionContent: (
          <>
            <p>
              Goatmen are neutral with all Demonics, Vampires, Shadows and
              Cockatrices. The palyer may recruit Goatmen if they are playing as
              a true Goatman.
            </p>
          </>
        ),
      },
    ],
  },

  {
    id: "Skeleton",
    image: Skeleton,
    levelDescription: "Level 2 Undead",
    stats: [
      { key: "HP", value: "40" },
      { key: "ATK", value: "8 - 12" },
      { key: "AC", value: "1 - 6" },
      { key: "ATK", value: "-" },
      { key: "SPD", value: "1" },
      { key: "PWR", value: "-" },
    ],
    hardcoreStats: [
      { key: "HP", value: "88 - 100" },
      { key: "ATK", value: "12 - 17" },
      { key: "AC", value: "2 - 7" },
      { key: "ATK", value: "-" },
      { key: "SPD", value: "2" },
      { key: "PWR", value: "-" },
    ],
    damageTypeEffectiveness: [
      { key: "Sword", value: "-50%" },
      { key: "Polearm", value: "+30%" },
      { key: "Mace", value: "+40%" },
      { key: "Axe", value: "-20%" },
      { key: "Unarmed", value: "+10%" },
      { key: "Ranged", value: "-50%" },
      { key: "Magic", value: "-20%" },
    ],
    abilities: ["-"],
    inventory: [
      "Bronze / Iron Swords",
      "Iron Spears",
      "Bronze / Iron Axes",
      "Shortbows / Crossbows",
      "Magistaffs of Cold",
      "Quivers of Swift / Springshot Arrows",
      "Bronze / Iron Shields",
      "Leather / Iron Helmets",
    ],

    descriptionSections: [
      {
        sectionName: "Description",
        sectionContent: (
          <>
            <p>
              Skeletons are the first Undead Denizens the player will encounter
              in the dungeon. Their gear is commonly cursed, so the player
              should beware not to carelessly equip loot dropped from Skeletons.
            </p>
          </>
        ),
      },

      {
        sectionName: "Spawn Locations",
        sectionContent: (
          <>
            <h3>The Mines</h3>
            <p>
              Skeletons immediately appear in the first level of the game and
              they are the most common enemy in it, alongside Rats. They
              sometimes spawn in setpieces - one of which is the rare setpiece
              where a Skeleton with ranged equipment will guard an area.
            </p>

            <h3>Underworld</h3>
            <p>
              Skeletons may randomly appear on this level, but they are also
              commonly part of trap rooms, where they can overwhelm the player
              with numbers. Here they often use ranged equipment, such as
              Crossbows and Magistaffs of Cold.
            </p>

            <h3>The Swamp</h3>
            <p>
              In The Swamp Skeletons exclusively spawn in setpieces - either
              trap rooms, or the ranged Skeleton setpiece.
            </p>

            <h3>The Ruins</h3>
            <p>
              Similarly to The Swamp, Skeletons only appear in setpieces on this
              level. By this point, they should be of no threat to the player.
            </p>
          </>
        ),
      },

      {
        sectionName: "Behaviour",
        sectionContent: (
          <>
            <p>
              Skeletons use their equipment to attack the player. They have no
              special abilities. Skeletons are extremely resistant to Swords and
              Ranged damage, so classes that rely on those may initially
              struggle with Skeletons. Conversely, they are very weak to Maces,
              which are always worthwhile picking up should the player find
              themselves struggling against Skeletons. They are immune to
              Burning and Bleeding. Skeletons are also weak to Blessed Water,
              which may be thrown to greatly damage them. Like all Undead, they
              are also weak to the Smite effect. Skeletons have a large variance
              in their AC levels, which may significantly affect the damage
              dealt to them, so the player should take note of what armor they
              see on the skeleton.
            </p>
          </>
        ),
      },

      {
        sectionName: "Loot",
        sectionContent: (
          <>
            <p>
              Skeletons only drop the equipment they wear. Their gear can never
              be blessed, and each item has a 50% chance to be cursed. As such,
              most of their gear may be too dangerous to use or outright
              useless, unless the player is an Incubus or a Succubus.
            </p>
          </>
        ),
      },

      {
        sectionName: "Variants",
        sectionContent: (
          <>
            <h3>Funny Bones</h3>
            <p>
              Funny Bones is the elite variant that has a 2% chance of replacing
              any given Skeleton spawn. He always drops a +1 Blessed Parashu, as
              well as his Cloak of Protection and Eyepatch.
            </p>

            <h3>Skeleton Knight, Sentinel and Mage</h3>
            <p>
              Skeleton Knights, Sentinels and Mages are unique Skeleton variants
              found only on the secret floor Bram's Castle. They are of higher
              level than regular Skeletons and carry better gear, such as steel
              equipment. Their equipment can also be blessed, unlike regular
              Skeletons.
            </p>
          </>
        ),
      },

      {
        sectionName: "Affinity",
        sectionContent: (
          <>
            <p>
              Skeletons are neutral with all Undead and Demonic Denizens. They
              are always hostile to the player.
            </p>
          </>
        ),
      },
    ],
  },

  {
    id: "Ghoul",
    image: Ghoul,
    levelDescription: "Level 7 Undead",
    stats: [
      { key: "HP", value: "90" },
      { key: "ATK", value: "16" },
      { key: "AC", value: "-1" },
      { key: "ATK", value: "-" },
      { key: "SPD", value: "0" },
      { key: "PWR", value: "-" },
    ],
    hardcoreStats: [
      { key: "HP", value: "170 - 190" },
      { key: "ATK", value: "24 - 26" },
      { key: "AC", value: "0" },
      { key: "ATK", value: "-" },
      { key: "SPD", value: "1" },
      { key: "PWR", value: "-" },
    ],
    damageTypeEffectiveness: [
      { key: "Sword", value: "-" },
      { key: "Polearm", value: "+10%" },
      { key: "Mace", value: "+20%" },
      { key: "Axe", value: "-20%" },
      { key: "Unarmed", value: "+10%" },
      { key: "Ranged", value: "-40%" },
      { key: "Magic", value: "-20%" },
    ],
    abilities: ["-"],
    inventory: [
      "Meat",
      "Pickaxes",
      "Towels",
      "Lockpics",
      "Beartraps",
      "Blindfolds",
      "Torches",
      "lanterns",
      "Blessed Water",
    ],

    descriptionSections: [
      {
        sectionName: "Description",
        sectionContent: (
          <>
            <p>
              Ghouls are somewhat common Undead Denizens that start appearing
              early in the player's adventure.
            </p>
          </>
        ),
      },

      {
        sectionName: "Spawn Locations",
        sectionContent: (
          <>
            <h3>Underworld</h3>
            <p>
              Depending on when the player descends into it, Underworld may be
              the first area the player encounters naturally spawning Ghouls.
              They spawn often, both randomly and in setpieces.
            </p>
            <h3>Swamp</h3>
            <p>
              Ghouls spawn uncommonly in The Swamp and may also appear in
              certain setpieces, most commonly trap rooms.
            </p>
            <h3>Sand Labyrinth</h3>
            <p>
              Ghouls become exceedingly rare in Sand Labyrinth. They sometimes
              spawn in certain maze layouts marked by a gravestone and a
              campfire, and may also come out from coffins.
            </p>
            <h3>Gravestones</h3>
            <p>
              Gravestones can be found almost anywhere in the dungeon and have a
              chance to summon a Ghoul when read. Large groups of gravestones in
              trap rooms will spawn a Ghoul from each one when walked nearby or
              otherwise triggered. From The Ruins onward, gravestones will
              instead summon Enslaved Ghouls.
            </p>
          </>
        ),
      },

      {
        sectionName: "Behaviour",
        sectionContent: (
          <>
            Ghouls use their melee attacks to damage the player and have no
            special abilities. They are slow and as such easy to kite for the
            player. Ghouls are weak to Blessed Water, which may be thrown to
            greatly damage them. Like all Undead, they are also weak to the
            Smite effect. Despite their relatively high ATK, they are overall
            not very dangerous monsters. While they are standing still, Ghouls
            do not turn around, allowing for easy backstabs.
          </>
        ),
      },

      {
        sectionName: "Loot",
        sectionContent: (
          <>
            <p>
              Ghouls drop a variety of loot, of which most common items are -1
              Cursed Mouldy Meat and +1 Blessed Water. While their Meat drops
              are useless in most scenarios, they are particularly great for
              Insectoid and Myconid players, who can ignore the downsides of bad
              food.
            </p>
          </>
        ),
      },

      {
        sectionName: "Description",
        sectionContent: (
          <>
            <h3>Coral Grimes</h3>
            <p>
              Coral Grimes is the elite variant that has a 2% chance to replace
              any Ghoul spawn. He is always accompanied by 3 Ghouls who follow
              him as their leader. He drops the Bounty Hunter Hat and a Ruby.
            </p>
            <h3>Ghoul Chef</h3>
            <p>
              This one-of-a-kind Ghoul resides in Bram's Castle. It is visually
              distinguishable by the Chef's Toque Hat Chef Icon.png on his head.
              The Ghoul Chef is the only natural source of Rotten food in the
              game.
            </p>
          </>
        ),
      },

      {
        sectionName: "Affinity",
        sectionContent: (
          <>
            <p>
              Ghouls are neutral with all Undead and Demonic Denizens. They are
              friendly and may be recruited by the player if they are a true
              Skeleton, and a player of any race can become neutral to Ghouls if
              they equip the Spooky Mask.
            </p>
          </>
        ),
      },
    ],
  },

  {
    id: "Enslaved_Ghoul",
    image: EnslavedGhoul,
    levelDescription: "Level 10 Undead",
    stats: [
      { key: "HP", value: "110" },
      { key: "ATK", value: "21" },
      { key: "AC", value: "-1" },
      { key: "ATK", value: "-" },
      { key: "SPD", value: "5" },
      { key: "PWR", value: "-" },
    ],
    hardcoreStats: [
      { key: "HP", value: "206 - 230" },
      { key: "ATK", value: "33 - 36" },
      { key: "AC", value: "0" },
      { key: "ATK", value: "-" },
      { key: "SPD", value: "6 - 7" },
      { key: "PWR", value: "-" },
    ],
    damageTypeEffectiveness: [
      { key: "Sword", value: "-" },
      { key: "Polearm", value: "+10%" },
      { key: "Mace", value: "+20%" },
      { key: "Axe", value: "-20%" },
      { key: "Unarmed", value: "+10%" },
      { key: "Ranged", value: "-40%" },
      { key: "Magic", value: "-20%" },
    ],
    abilities: ["Vampiric Aura"],
    inventory: [
      "Meat",
      "Pickaxes",
      "Towels",
      "Lockpics",
      "Beartraps",
      "Blindfolds",
      "Torches",
      "lanterns",
      "Blessed Water",
    ],

    descriptionSections: [
      {
        sectionName: "Description",
        sectionContent: (
          <>
            <p>
              Enslaved Ghouls are the stronger variant of the regular Ghoul,
              boasting better overall stats, most notably a significantly higher
              SPD. They generally appear in later floors and may sometimes have
              the Vampiric Aura buff.
            </p>
          </>
        ),
      },

      {
        sectionName: "Spawn Locations",
        sectionContent: (
          <>
            <h3>The Haunted Castle</h3>
            <p>
              Enslaved Ghouls spawn from every single Gravestone that appears
              after the player takes either the Gold or the Oracle's Treads
              inside the castle. The player should take great care not to be
              overwhelmed by the large number of Enslaved Ghouls on this secret
              floor.
            </p>

            <h3>The Ruins</h3>
            <p>
              The Ruins is the first level where Enslaved Ghouls start regularly
              replacing normal Ghoul spawns. There are a few setpieces with
              scattered Gravestones where Enslaved Ghouls may come from. The
              rare Young Vampire may also sometimes spawn, who will have a squad
              of Enslaved Ghouls following it as their leader.
            </p>

            <h3>Underworld</h3>
            <p>
              Enslaved Ghouls spawn somewhat frequently in the second
              Underworld. Trap room setpieces with Gravestones are also common
              in this level.
            </p>

            <h3>Bram's Castle</h3>
            <p>
              On the second floor past the Succubus Consorts, the last two doors
              lead to a room with five Enslaved Ghouls, all of which always have
              the Vampiric Aura buff.
            </p>

            <h3>Gravestones</h3>
            <p>
              Gravestones can be found almost anywhere in the dungeon and have a
              chance to summon an Enslaved Ghoul when read. Large groups of
              gravestones in trap rooms will spawn an Enslaved Ghoul from each
              one when walked nearby or otherwise triggered. Before The Ruins,
              gravestones will instead summon Ghouls.
            </p>
          </>
        ),
      },

      {
        sectionName: "Behaviour",
        sectionContent: (
          <>
            <p>
              Enslaved Ghouls use exclusively their melee attacks to damage the
              player. Enslaved Ghouls are weak to Blessed Water which may be
              thrown to damage them. Like all Undead, they are also weak to the
              Smite effect. Enslaved Ghouls are not very dangerous enemies,
              unless they are under the effect of the Vampiric Aura buff, which
              improves their SPD and ATK while also giving them special life
              draining capabilities on-hit, as well the ability to inflict Heavy
              Bleed. The Vampiric Aura buff gives the Enslaved Ghouls effective
              true damage - they will always deal a minimum of 5 damage through
              all AC. While they are standing still, Enslaved Ghouls do not turn
              around, allowing for easy backstabs.
            </p>
          </>
        ),
      },

      {
        sectionName: "Loot",
        sectionContent: (
          <>
            <p>
              Enslaved Ghouls drop a variety of loot, of which most common items
              are -1 Cursed Mouldy Meat and +1 Blessed Water. While their Meat
              drops are useless in most scenarios, they are particularly great
              for Insectoid and Myconid players, who can ignore the downsides of
              bad food.
            </p>
          </>
        ),
      },

      {
        sectionName: "Variants",
        sectionContent: (
          <>
            <h3>Coral Grimes</h3>
            <p>
              Coral Grimes is the elite variant that has a 2% chance to replace
              any Ghoul spawn. He is always accompanied by 3 Ghouls who follow
              him as their leader. He drops the Bounty Hunter Hat and a Ruby.
            </p>
            <h3>Ghoul Chef</h3>
            <p>
              This one-of-a-kind Ghoul resides in Bram's Castle. It is visually
              distinguishable by the Chef's Toque Hat Chef Icon.png on his head.
              The Ghoul Chef is the only natural source of Rotten food in the
              game.
            </p>
          </>
        ),
      },

      {
        sectionName: "Affinity",
        sectionContent: (
          <>
            <p>
              Enslaved Ghouls are neutral with all Undead and Demonic Denizens.
              They are friendly and may be recruited by the player if they are a
              true Skeleton, and a player of any race can become neutral to
              Enslaved Ghouls if they equip the Spooky Mask.
            </p>
          </>
        ),
      },
    ],
  },

  {
    id: "Vampire",
    image: Vampire,
    levelDescription: "Level 30 Undead",
    stats: [
      { key: "HP", value: "400" },
      { key: "ATK", value: "48 - 58" },
      { key: "AC", value: "0" },
      { key: "ATK", value: "-" },
      { key: "SPD", value: "8" },
      { key: "PWR", value: "30" },
    ],
    hardcoreStats: [
      { key: "HP", value: "736 - 820" },
      { key: "ATK", value: "82 - 108" },
      { key: "AC", value: "1" },
      { key: "ATK", value: "-" },
      { key: "SPD", value: "10 - 11" },
      { key: "PWR", value: "30" },
    ],
    damageTypeEffectiveness: [
      { key: "Sword", value: "-20%" },
      { key: "Polearm", value: "+10%" },
      { key: "Mace", value: "+20%" },
      { key: "Axe", value: "-20%" },
      { key: "Unarmed", value: "-" },
      { key: "Ranged", value: "-50%" },
      { key: "Magic", value: "-20%" },
    ],
    abilities: ["Drain Soul", "Vampiric Aura"],
    inventory: ["Magicstaffs of Bloodletting", "Vampire Doublet"],

    descriptionSections: [
      {
        sectionName: "Description",
        sectionContent: (
          <>
            <p>
              Vampires are a late game Undead enemy with impressive stats and a
              few special abilities. They only appear in Act 2 on the final
              level of the game.
            </p>
          </>
        ),
      },

      {
        sectionName: "Spawn Locations",
        sectionContent: (
          <>
            <h3>The Citadel</h3>
            <p>
              The Citadel is the only level in the game where Vampires naturally
              spawn. They appear alone and as frequently as most other enemies
              in that level.
            </p>
          </>
        ),
      },

      {
        sectionName: "Behaviour",
        sectionContent: (
          <>
            <p>
              Vampires primarily use their melee attacks to damage the player.
              Some of them might carry a Magistaff of Bloodletting, which they
              will then fire at the player. Otherwise, they go unarmed. Vampires
              will occasionally break their attack cycle to channel a spell,
              either Drain Soul or Vampiric Aura. Drain Soul replenishes their
              HP and also damages the player's own HP and MP, but it deals
              relatively low damage. Vampiric Aura is more dangerous, as it
              greatly improves their SPD and damage output. Vampires are thus
              best dealt with quickly, which may prove difficult due to their
              high HP and good resistances. They have no status immunities
              though, and are weak to Smite like all undead enemies.
            </p>
          </>
        ),
      },

      {
        sectionName: "Loot",
        sectionContent: (
          <>
            <p>
              Vampires only drop 2 items, both of which are quite strong for
              caster classes. Their unique drop is the Vampire Doublet, which
              provides bonus MP Regeneration at the cost of all HP regeneration.
            </p>
          </>
        ),
      },

      {
        sectionName: "Variants",
        sectionContent: (
          <>
            <h3>Young Vampire</h3>
            <p>
              Young Vampire is the only Vampire variant that may naturally spawn
              before Hamlet, appearing at a very rare rate naturally in Ruins or
              from broken coffins in the same level. They are weaker than
              standard Vampires, but unlike them often come accompanied by a
              group of up to 3 Enslaved Ghouls. They otherwise behave the same
              as regular Vampires and may even also drop the Vampire Doublet.
            </p>
            <h3>Bram Kindly</h3>
            <p>
              Bram Kindly is an elite variant of the Vampire that always spawns
              in Bram's Castle. He always wields a Magistaff of Bloodletting and
              wears the Wraith's Gown, both of which he will always drop on
              death. Bram Kindly has bonus Resistance to Magic.
            </p>
          </>
        ),
      },

      {
        sectionName: "Affinity",
        sectionContent: (
          <>
            <p>
              Vampires are neutral with Cockatrices, Goatmen, Crystal Golems,
              Automata, Slimes and all other Undeads and Demonics. The player
              may recruit Vampires if they are playing as the Vampire race.
            </p>
          </>
        ),
      },
    ],
  },

  {
    id: "Shadow",
    image: Shadow,
    levelDescription: "Level 25 Undead",
    stats: [
      { key: "HP", value: "170" },
      { key: "ATK", value: "28 - 33" },
      { key: "AC", value: "2 - 4" },
      { key: "ATK", value: "-" },
      { key: "SPD", value: "10 - 15" },
      { key: "PWR", value: "-" },
    ],
    hardcoreStats: [
      { key: "HP", value: "314 - 350" },
      { key: "ATK", value: "47 - 63" },
      { key: "AC", value: "3 - 5" },
      { key: "ATK", value: "-" },
      { key: "SPD", value: "12 - 19" },
      { key: "PWR", value: "-" },
    ],
    damageTypeEffectiveness: [
      { key: "Sword", value: "-50%" },
      { key: "Polearm", value: "-50%" },
      { key: "Mace", value: "-50%" },
      { key: "Axe", value: "-50%" },
      { key: "Unarmed", value: "-50%" },
      { key: "Ranged", value: "-50%" },
      { key: "Magic", value: "+100%" },
    ],
    abilities: ["Mimic Other", "Levitation", "Teleportation", "Indominable"],
    inventory: ["Spooky Masks"],

    descriptionSections: [
      {
        sectionName: "Description",
        sectionContent: (
          <>
            <p>
              Shadows are strong Undead that copy the player's equipment and
              spells to use against them. They are mostly found in the later
              parts of the dungeon, but may also be encountered earlier with
              unconventional means.
            </p>
          </>
        ),
      },

      {
        sectionName: "Spawn Locations",
        sectionContent: (
          <>
            <h3>Underworld</h3>
            <p>
              Underworld is the earliest location in the game where Shadows
              naturally spawn. They may prove especially dangerous depending on
              how early the player enters Underworld, and the level's terrain
              also provides an advantage to the Levitating Shadow.
            </p>
            <h3>Hell</h3>
            <p>
              Shadows may uncommonly appear in the alternate route's final level
              of Act 1. The generally open layouts may make Shadows troublesome
              in tandem with the other numerous enemies.
            </p>
            <h3>The Citadel</h3>
            <p>
              Shadows spawn in the final level of the game as well. At this
              point, Shadows are not the most dangerous enemy anymore.
            </p>
            <h3>Bram's Castle</h3>
            <p>
              There are 4 Shadows that always appear on the 2nd floor of Bram's
              Castle behind some bookshelf wall tiles. These spawns are always
              fixed and consistent throughout every run. If the player is fast
              enough, they may be able to avoid them entirely.
            </p>
            <h3>Defacing Graves</h3>
            <p>
              Using the true Gremlin's innate spell Deface on a Gravestone can
              spawn a Shadow ~13.5% of the time from the destroyed Gravestone.
              Depending on when the player does this, it can prove fatal to
              carelessly destroy graves.
            </p>
          </>
        ),
      },

      {
        sectionName: "Behaviour",
        sectionContent: (
          <>
            <p>
              Shadows will initially use their special ability Mimic Other when
              they spot their target, which will copy their weapon, shield and
              spells while also buffing the Shadow's STR and DEX if the target
              has more in any of those stats (20% of the stat difference is
              added each Mimic Other attempt). Stealth is not viable as Shadows
              sport some of the best vision of all enemies in the game, spotting
              targets from up to 48 tiles of distance away and ignoring
              Invisibility effects. The player will be notified of a Shadow's
              Mimic Other attempt by a loud sound cue and a message in the chat.
              Shadows may be hit freely hit during its usage of Mimic Other.
              Shortly after mimicking the player, Shadows will Teleport Teleport
              Icon.png somewhere near them and also become nigh invisible, only
              emitting black particle effects. The player can still hit them
              during this invisibility but that may prove difficult, compounded
              further by Shadow's high movement speed. Shadows will chase the
              player virtually endlessly and their Levitation makes disengaging
              difficult. They also copy the player's learned spells, but not all
              spells are eligible for Shadows to use. Currently, this list
              includes the following spells: Forcebolt, Spray Acid, Lightning,
              Fireball, Cold, Magic Missile, Confuse, Slow, Sleep, Bloodletting
              and Stone Blood. After a certain period, Shadows will recast Mimic
              Other, repeating all the behaviour that comes during and after its
              use. Shadows are difficult foes, but they are particularly
              vulnerable to Paralysis and Magic, so the player should make
              liberal use of them to defeat Shadows especially if they are
              fought earlier in the dungeon. Shadows are immune to Rooted,
              Disorientated, Charm / Pacification and Fear debuffs, as well as
              Cowardice and Compel Spells. Like all Undead, they are also weak
              to the Smite effect. Shadows may also Teleport while not fighting
              anything.
            </p>
          </>
        ),
      },

      {
        sectionName: "Loot",
        sectionContent: (
          <>
            <p>
              Shadows only drop Spooky Masks which are useful for providing
              neutrality to Shadows.
            </p>
          </>
        ),
      },

      {
        sectionName: "Variants",
        sectionContent: (
          <>
            <h3>Artemisia</h3>
            <p>
              Artemisia is a wholly unique variant of the Shadow that appears
              only on the 2nd floor of the first Underworld accessed from floor
              5's intermission stage. She wields and drops the magical bow
              Khryselakatos and is the earliest consistent source of the bow.
              Her behaviour is otherwise identical to regular Shadows, but she
              will use her bow to damage the player instead of mimicking the
              player's weapon.
            </p>
            <h3>Baratheon</h3>
            <p>
              Baratheon is an elite variant that has a 2% chance of replacing
              any Shadow spawn. They are functionally identical to regular
              Shadows with the only differences being Baratheon's visual
              distinction and his higher level. As a level 50-51 Undead,
              Baratheon gives the most EXP of all Denizens only tied with
              Orpheus and Erudyce.
            </p>
          </>
        ),
      },

      {
        sectionName: "Affinity",
        sectionContent: (
          <>
            <p>
              Shadows are neutral with all Denizens besides Humans. They are
              always hostile to the player, unless they are wearing the Spooky
              Mask.
            </p>
          </>
        ),
      },
    ],
  },

  {
    id: "Succubus",
    image: Succubus,
    levelDescription: "Level 10 Demonic",
    stats: [
      { key: "HP", value: "60" },
      { key: "ATK", value: "15" },
      { key: "AC", value: "3" },
      { key: "ATK", value: "-" },
      { key: "SPD", value: "3" },
      { key: "PWR", value: "-" },
    ],
    hardcoreStats: [
      { key: "HP", value: "124 - 140" },
      { key: "ATK", value: "23 - 25" },
      { key: "AC", value: "4" },
      { key: "ATK", value: "-" },
      { key: "SPD", value: "4" },
      { key: "PWR", value: "-" },
    ],
    damageTypeEffectiveness: [
      { key: "Sword", value: "+20%" },
      { key: "Polearm", value: "-10%" },
      { key: "Mace", value: "-" },
      { key: "Axe", value: "-" },
      { key: "Unarmed", value: "-" },
      { key: "Ranged", value: "-" },
      { key: "Magic", value: "-20%" },
    ],
    abilities: ["Charm Monster", "Teleportation"],
    inventory: ["Magicstaffs of Charm Monster", "Masquerade Masks"],

    descriptionSections: [
      {
        sectionName: "Description",
        sectionContent: (
          <>
            <p>
              Succubi are likely the first Demonic Denizen the player will
              encounter in their descent into the dungeon. Their sudden
              appearance may prove deadly for unprepared for adventurers.
            </p>
          </>
        ),
      },

      {
        sectionName: "Spawn Locations",
        sectionContent: (
          <>
            <h3>The Swamp</h3>
            <p>
              There is one particular setpiece that sometimes generates in this
              level which spawns multiple Succubi once the player properly
              enters it. The room is recognisable by a single Fountain in the
              middle that also always spawns a Succubus when drank from.
            </p>
            <h3>Hell</h3>
            <p>
              Hell is the only level in the game where Succubi naturally spawn
              at random on its floors.
            </p>
            <h3>Fountains</h3>
            <p>
              Fountains are the first possible way the player may encounter a
              Succubus. Each Fountain has a 10% chance to spawn a Succubus upon
              interaction. From floors 1-10, it will always be the Succubus that
              spawns from the Fountain; starting floor 11 and until floor 20
              (including Underworld), Succubus spawns only half the time, the
              other possibility being a Lesser Incubus. Starting floor 21,
              Succubi never spawn from Fountains.
            </p>
          </>
        ),
      },

      {
        sectionName: "Behaviour",
        sectionContent: (
          <>
            <p>
              Succubi primarily use melee attacks to harm the player. While
              fighting, the Succubus may channel the Charm Monster spell, which
              will Pacify the player, rendering them unable to do anything. As
              with most other spells, they are telegraphed by the casting
              animation and the Succubus backpedalling while using it, so the
              player should use this tell to dodge the spell. The chance of a
              Succubus casting Charm Monster rises the lower her health is, if
              the target is Confused or Drunk and if the distance between her
              and her target is small. Occasionally while attacking, the
              Succubus will steal any 1 armour piece from the player and
              Teleport away randomly. Because of its random nature, finding the
              Succubus and retrieving the stolen item may be troublesome. Since
              Succubi spawn from Fountains most of the time only as a result
              from the player's direct interaction with them, they can prepare
              accordingly for an encounter with the Succubus. The Fountain
              itself can be used to kite the Succubus around, as it is an
              unbreakable structure. Succubi are weak to Smite damage. Succubi
              start backpedalling on low health.
            </p>
          </>
        ),
      },

      {
        sectionName: "Loot",
        sectionContent: (
          <>
            <p>
              Succubi have a 10% chance to drop Magistaffs of Charm Monster or
              Masquerade Masks. Dropped Masquerade Masks will never be Blessed.
            </p>
          </>
        ),
      },

      {
        sectionName: "Variants",
        sectionContent: (
          <>
            <h3>Lilith</h3>
            <p>
              Lilith is an elite variant of the Succubus that has a 2% chance to
              replace any given Succubus spawn. She always comes accompanied by
              2 regular Succubi that follower her as their leader. She otherwise
              behaves identically to regular Succubi. Lilith wears a Rose that
              she drops on death, as well as having a 75% chance to drop an
              Excellent Magistaff of Charm Monster.
            </p>
          </>
        ),
      },

      {
        sectionName: "Affinity",
        sectionContent: (
          <>
            <p>
              Succubi are neutral with all other Demonics and Undeads. The
              player may recruit a Succubus if they are playing as the Succubus
              or Incubus races, as well as if they are wearing the Rose as any
              race.
            </p>
          </>
        ),
      },
    ],
  },

  {
    id: "Succubus_Consorts",
    image: SuccubusConsort,
    levelDescription: "Level 20 Demonic",
    stats: [
      { key: "HP", value: "130 - 170" },
      { key: "ATK", value: "23" },
      { key: "AC", value: "12" },
      { key: "ATK", value: "-" },
      { key: "SPD", value: "12" },
      { key: "PWR", value: "30" },
    ],
    hardcoreStats: [
      { key: "HP", value: "242 - 350" },
      { key: "ATK", value: "31 - 33" },
      { key: "AC", value: "13" },
      { key: "ATK", value: "-" },
      { key: "SPD", value: "14 - 16" },
      { key: "PWR", value: "30" },
    ],
    damageTypeEffectiveness: [
      { key: "Sword", value: "+20%" },
      { key: "Polearm", value: "-10%" },
      { key: "Mace", value: "-" },
      { key: "Axe", value: "-" },
      { key: "Unarmed", value: "-" },
      { key: "Ranged", value: "-" },
      { key: "Magic", value: "-20%" },
    ],
    abilities: ["Charm Monster", "Teleportation"],
    inventory: [
      "Magicstaffs of Charm Monster",
      "Masquerade Masks",
      "Spellbooks of Bloodletting",
    ],

    descriptionSections: [
      {
        sectionName: "Description",
        sectionContent: (
          <>
            <p>
              The Succubus Consorts are a special variant of the Succubus,
              boasting much better stats as well as a new spell to harm their
              opposition.
            </p>
          </>
        ),
      },

      {
        sectionName: "Spawn Locations",
        sectionContent: (
          <>
            <h3>Bram's Castle</h3>
            <p>
              Succubus Consorts only appear on the second floor of the secret
              stage Bram's Castle. There are always 3 of them, and they have
              unique names: Verona, Aleera and Marishka.
            </p>
          </>
        ),
      },

      {
        sectionName: "Behaviour",
        sectionContent: (
          <>
            <p>
              Succubus Consorts use their Bloodletting spell to damage the
              player. Unlike regular Succubi, they will not cast Charm Monster
              or Teleport. As such, their behaviour and by extent strategies
              against them are simpler to account for.
            </p>
          </>
        ),
      },

      {
        sectionName: "Loot",
        sectionContent: (
          <>
            <p>
              Succubus Consorts may drop the Spellbook of Bloodletting that they
              themselves use.
            </p>
          </>
        ),
      },

      {
        sectionName: "Affinity",
        sectionContent: (
          <>
            <p>
              Succubus Consorts are neutral with all other Demonics and Undeads.
              The player may recruit a Succubus Consort if they are playing as
              the Succubus or Incubus races, as well as if they are wearing the
              Rose as any race.
            </p>
          </>
        ),
      },
    ],
  },

  {
    id: "Incubus",
    image: Incubus,
    levelDescription: "Level 25 Demonic",
    stats: [
      { key: "HP", value: "280 - 305" },
      { key: "ATK", value: "28 - 44" },
      { key: "AC", value: "3 - 6" },
      { key: "ATK", value: "33 - 41" },
      { key: "SPD", value: "8" },
      { key: "PWR", value: "-" },
    ],
    hardcoreStats: [
      { key: "HP", value: "520 - 625" },
      { key: "ATK", value: "47 - 74" },
      { key: "AC", value: "4 - 8" },
      { key: "ATK", value: "46 - 64" },
      { key: "SPD", value: "10 - 11" },
      { key: "PWR", value: "-" },
    ],
    damageTypeEffectiveness: [
      { key: "Sword", value: "+20%" },
      { key: "Polearm", value: "-30%" },
      { key: "Mace", value: "-" },
      { key: "Axe", value: "-" },
      { key: "Unarmed", value: "-" },
      { key: "Ranged", value: "+30%" },
      { key: "Magic", value: "-20%" },
    ],
    abilities: ["Teleportation", "Steal Weapon"],
    inventory: [
      "Magicstaffs of Cold",
      "Crossbows",
      "Steel / Crystal Polearms",
      "Bottles of Booze",
      "Potions of Confusion",
      "Masquerade Mask",
      "Mirror Shield",
    ],

    descriptionSections: [
      {
        sectionName: "Description",
        sectionContent: (
          <>
            <p>
              The male counterpart of the Succubus, they are found and replace
              Succubi post hamlet.
            </p>
          </>
        ),
      },

      {
        sectionName: "Spawn Locations",
        sectionContent: (
          <>
            <h3>Hell</h3>
            <p>This is the earliest point the player can encounter Incubi.</p>

            <h3>Crystal Caves</h3>
            <p>
              Incubi are a fairly rare spawn in the Crytal caves. They always
              spawn alone.
            </p>

            <h3>The Citadel</h3>
            <p>
              Incubi are alot more common in the Citadel alongside Goatmen and
              Vampires.
            </p>

            <h3>Fountains</h3>
            <p>Incubi replace Succubi spawns in fountains post Hamlet.</p>
          </>
        ),
      },

      {
        sectionName: "Behaviour",
        sectionContent: (
          <>
            <p>
              Incubi will use their weapons / staffs to damage the player,
              teleporting around to confuse the player. They will also throw
              potions of confusion or bottles of booze at the player. Incubi
              have a unique spell Steal Weapon which they will use to take the
              players weapon and attack them with. The only way to obtain this
              spell is to reflect it back at them when they cast it on the
              player which will drop the spellbook.
            </p>
          </>
        ),
      },

      {
        sectionName: "Loot",
        sectionContent: (
          <>
            <p>
              Incubi will drop their used equipment as well as any equipment
              stolen from the player. They will also drop bottles of booze and
              potions of confusion.
            </p>
          </>
        ),
      },

      {
        sectionName: "Affinity",
        sectionContent: (
          <>
            <p>
              Incubi can be recruited to follow Succubus and Incubus players or
              be recruited by any race by using an equipped rose. They are
              neutral to Automaton players.
            </p>
          </>
        ),
      },
    ],
  },

  {
    id: "Imp",
    image: Imp,
    levelDescription: "Level 14 Demonic",
    stats: [
      { key: "HP", value: "80" },
      { key: "ATK", value: "29" },
      { key: "AC", value: "9" },
      { key: "ATK", value: "-" },
      { key: "SPD", value: "7" },
      { key: "PWR", value: "25" },
    ],
    hardcoreStats: [
      { key: "HP", value: "160 - 180" },
      { key: "ATK", value: "48 - 54" },
      { key: "AC", value: "10 - 11" },
      { key: "ATK", value: "-" },
      { key: "SPD", value: "8 - 9" },
      { key: "PWR", value: "25" },
    ],
    damageTypeEffectiveness: [
      { key: "Sword", value: "+10%" },
      { key: "Polearm", value: "-" },
      { key: "Mace", value: "-" },
      { key: "Axe", value: "-20%" },
      { key: "Unarmed", value: "-" },
      { key: "Ranged", value: "-" },
      { key: "Magic", value: "+20%" },
    ],
    abilities: ["Fireball", "Levitation"],
    inventory: ["Spellbook of FIreball"],

    descriptionSections: [
      {
        sectionName: "Description",
        sectionContent: (
          <>
            <p>
              Imps are mischievous Demonic creatures usually found later in the
              game towards the end of Act 1 and beginning of Act 2. They are
              premiere underlings of Baron Herx and Baphomet.
            </p>
          </>
        ),
      },

      {
        sectionName: "Spawn Locations",
        sectionContent: (
          <>
            <h3>Underworld</h3>
            <p>
              Underworld is the first location the player can reach where Imps
              naturally spawn. There are usually a couple Imp spawns per given
              Underworld floor and they are particularly troublesome in this
              level due to its layout giving the Levitating Imp an advantage.
            </p>
            <h3>The Ruins</h3>
            <p>
              Imps rarely spawn in The Ruins as parts of a setpiece where Imps
              are locked behind bars. The player has to willingly set them free
              and engage them. Otherwise, they do not spawn naturally in the
              level.
            </p>
            <h3>Hell</h3>
            <p>
              Along with other Demonics, Imps naturally spawn often in Hell
              level. This is the level where they are the most numerous in.
            </p>
            <h3>Lich's Bastion</h3>
            <p>
              Baron Herx periodically summons underlings in his fight and he can
              choose to spawn either Imps or Demons.
            </p>

            <h3>Molten Throne</h3>
            <p>
              Baphomet periodically summons underlings in his fight; he spawns
              many Imps, as well as Demons and Shadows.
            </p>

            <h3>Crystal Caves</h3>
            <p>
              Imps are part of a setpiece where a couple of them float over a
              pool of lava. Otherwise, they do not spawn naturally.
            </p>
          </>
        ),
      },

      {
        sectionName: "Behaviour",
        sectionContent: (
          <>
            <p>
              Imps exclusively cast the Fireball spell to damage the player. As
              such, any forms of Magic Resistance or Magic Reflection greatly
              improve the player's survivability against Imps. Sometimes, they
              can be found Asleep, allowing for an advantageous start. Imps are
              at their most difficult when the floor's layout makes reaching
              them impossible, which then necessitates a ranged source of damage
              or luring the Imp into closer range. Imps are weak to Hunting
              Arrows and Smite damage. They are immune to the Burning effect.
            </p>
          </>
        ),
      },

      {
        sectionName: "Loot",
        sectionContent: (
          <>
            <p>
              Imps commonly drop various Spellbooks on death. Currently, this
              only includes the Spells that were available before the 5.0
              Update: Instruments of Destruction Part 1; newly added Spellbooks
              cannot be dropped by Imps.
            </p>
          </>
        ),
      },

      {
        sectionName: "Affinity",
        sectionContent: (
          <>
            <p>
              Imps are neutral with all other Demonic and Undead denizens. They
              are always hostile to the player regardless of the race they play,
              unless they use the spell Imp Form, at which point the player can
              recruit other Imps.
            </p>
          </>
        ),
      },
    ],
  },

  {
    id: "Demon",
    image: Demon,
    levelDescription: "Level 20 Demonic",
    stats: [
      { key: "HP", value: "120" },
      { key: "ATK", value: "38" },
      { key: "AC", value: "10" },
      { key: "ATK", value: "-" },
      { key: "SPD", value: "10" },
      { key: "PWR", value: "25" },
    ],
    hardcoreStats: [
      { key: "HP", value: "232 - 260" },
      { key: "ATK", value: "65 - 73" },
      { key: "AC", value: "12 - 13" },
      { key: "ATK", value: "-" },
      { key: "SPD", value: "12 - 13" },
      { key: "PWR", value: "25" },
    ],
    damageTypeEffectiveness: [
      { key: "Sword", value: "-10%" },
      { key: "Polearm", value: "-20%" },
      { key: "Mace", value: "-20%" },
      { key: "Axe", value: "-" },
      { key: "Unarmed", value: "-20%" },
      { key: "Ranged", value: "-10%" },
      { key: "Magic", value: "+10%" },
    ],
    abilities: ["Fireball"],
    inventory: ["-"],

    descriptionSections: [
      {
        sectionName: "Description",
        sectionContent: (
          <>
            <p>
              Demons are a quintessential Demonic denizen usually found later in
              the game. They are premiere underlings of both Baron Herx and
              Baphomet.
            </p>
          </>
        ),
      },

      {
        sectionName: "Spawn Locations",
        sectionContent: (
          <>
            <h3>The Ruins</h3>
            <p>
              The Ruins are the first location where Demons may spawn naturally
              at random on the floor. They are quite rare and will usually be
              seen fighting with other Denizens of the floor. Sometimes, they
              are part of setpieces where they are jailed behind gates.
            </p>

            <h3>Underworld</h3>
            <p>
              Underworld has no naturally spawning Demons, but it may have
              demonic circles on the floor that, when stepped over, may spawn
              multiple Demons from it.
            </p>

            <h3>Hell</h3>
            <p>
              Along with other Demonics, Demons spawn very commonly in Hell.
              similar to Underworld, there are also demonic circles on the floor
              that may spawn multiple Demons when stepped on.
            </p>

            <h3>Lich's Bastion</h3>
            <p>
              Baron Herx periodically summons minions during his boss fight. He
              may choose to summon either a group of Demons or a group of Imps.
            </p>

            <h3>Molten Throne</h3>
            <p>
              Similar to Baron Herx, Baphomet also periodically summons minions,
              of which he may choose to summon Demons, Imps or Shadows. There
              are also numerous Demons on the escape path that opens after
              Baphomet's defeat.
            </p>

            <h3>-2 Scroll of Summon</h3>
            <p>
              A -2 Scroll of Summon has multiple potential spawns, of which it
              may choose to spawn a singular Demon. All cursed scroll summons
              are hostile to the player.
            </p>
          </>
        ),
      },

      {
        sectionName: "Behaviour",
        sectionContent: (
          <>
            <p>
              Demons will either only rush the player and hurt them with their
              melee attacks, or only repeatedly cast Fireball at them. The split
              between melee and Fireball Demons is an even 50/50, so the player
              may reasonably expect to encounter both types. Demons may prove
              especially tough for unprepared adventurers, as their stats are
              high, particularly in ATK and SPD, and Fireball is a dangerous
              spell. Demons take bonus damage from Hunting Arrows and are weak
              to Smite damage. They are immune to the Burning effect.
            </p>
          </>
        ),
      },

      {
        sectionName: "Loot",
        sectionContent: (
          <>
            <p>
              Demons do not have any natural drops. They are however still
              eligiuble to drop Vials of Blood when a Vampire or Accursed player
              is in the party, or Meat when wearing a Chef's Toque.
            </p>
          </>
        ),
      },

      {
        sectionName: "Variants",
        sectionContent: (
          <>
            <h3>Deu De'Breau</h3>
            <p>
              Deu De'Breau is an elite variant that has a 2% chance to replace
              any regular Demon spawn. He always comes accompanied by 3 Demons
              who follow him as their leader. Similarly to regular Demons, Deu
              De'Breau has a 50/50 chance split between being a melee or a
              Fireball variant. Aside from the visual difference and a higher
              LVL, Deu De'Breau has the same stats and behaves in the same
              manner as a regular Demon.
            </p>
          </>
        ),
      },

      {
        sectionName: "Affinity",
        sectionContent: (
          <>
            <p>
              Demons are neutral with all other Demonic and Undead denizens.
              They are always hostile to the player.
            </p>
          </>
        ),
      },
    ],
  },

  {
    id: "Automaton",
    image: Automaton,
    levelDescription: "Level 20 Construct",
    stats: [
      { key: "HP", value: "115 - 135" },
      { key: "ATK", value: "28" },
      { key: "AC", value: "8" },
      { key: "ATK", value: "-" },
      { key: "SPD", value: "5" },
      { key: "PWR", value: "-" },
    ],
    hardcoreStats: [
      { key: "HP", value: "211 - 275" },
      { key: "ATK", value: "47 - 53" },
      { key: "AC", value: "9 - 10" },
      { key: "ATK", value: "-" },
      { key: "SPD", value: "6 - 7" },
      { key: "PWR", value: "-" },
    ],
    damageTypeEffectiveness: [
      { key: "Sword", value: "-" },
      { key: "Polearm", value: "-" },
      { key: "Mace", value: "+40%" },
      { key: "Axe", value: "+30%" },
      { key: "Unarmed", value: "-20%" },
      { key: "Ranged", value: "-20%" },
      { key: "Magic", value: "+20%" },
    ],
    abilities: ["Salvage", "Self Destruct"],
    inventory: ["-"],

    descriptionSections: [
      {
        sectionName: "Description",
        sectionContent: (
          <>
            <p>
              Automatons are friendly to all player races and are significantly
              higher tier followers due to their higher health and base armor
              class. They can explode or break upon death. They are one of the
              most complex NPC's in the game.
            </p>
          </>
        ),
      },

      {
        sectionName: "Spawn Locations",
        sectionContent: (
          <>
            <h3>The Ruins</h3>
            <p>
              Automatons sparsely appear here, often picking up the numerous
              pieces of equipment dropped by gnome thieves. As such, they
              commonly may be found wielding weapons such as steel swords, maces
              and short bows. They will attempt to fight demons that uncommonly
              spawn here, and will usually die. They have limited interactions
              with most other NPCs.
            </p>

            <h3>The Caves</h3>
            <p>
              Automatons sparsely appear here, they have limited interactions
              with almost everybody here. They might pick up kobold drops, or
              items from your dead Hamlet followers.
            </p>

            <h3>The Citadel</h3>
            <p>
              Automatons sparsely appear here, they are neutral to any types of
              enemies that appear on these floors.
            </p>
          </>
        ),
      },

      {
        sectionName: "Behaviour",
        sectionContent: (
          <>
            <p>
              Automatons will attack using any equipment they have picked up off
              of the ground. When Automatons die they will explode after a short
              animation plays damaging anything close to them.
            </p>
            <p>
              A player can lockpick the back of an Automaton causing it to
              explode on a successful attempt. This gives tinkering XP.
            </p>
            <p>
              Automatons may "Recycle" any gear that they pick up but don't
              equip.
            </p>
          </>
        ),
      },

      {
        sectionName: "Loot",
        sectionContent: (
          <>
            <p>Automatons drop anything they have picked up.</p>
          </>
        ),
      },

      {
        sectionName: "Variants",
        sectionContent: (
          <>
            <h3>Corrupted Automaton</h3>
            <p>
              During the final boss fight, once one of the twins is defeated,
              the other has the ability to summon multiple corrupted automatons.
              These behave like normal, except they are always hostile to
              players. They do not drop anything when they are defeated. They
              have three variants:
            </p>
            <p>
              Archers - Spawn with steel boots of levitation, a short bow and a
              quiver of piercing ammo.
            </p>
            <p>
              Mages - Spawn with steel boots of levitation, a magicstaff of
              lightning and steel or crystal shield.
            </p>
            <p>
              Warriors - Spawn with steel boots of levitation, a crystal spear
              and steel or crystal shield.
            </p>
          </>
        ),
      },

      {
        sectionName: "Affinity",
        sectionContent: (
          <>
            <p>
              Automatons are neutral with all denizens excluding Demons. They
              are able to be recruited by any race of player.
            </p>
          </>
        ),
      },
    ],
  },

  {
    id: "Crystal_Golem",
    image: CrystalGolem,
    levelDescription: "Level 30 Construct",
    stats: [
      { key: "HP", value: "200 - 250" },
      { key: "ATK", value: "58 - 63" },
      { key: "AC", value: "25" },
      { key: "ATK", value: "-" },
      { key: "SPD", value: "2 - 4" },
      { key: "PWR", value: "-" },
    ],
    hardcoreStats: [
      { key: "HP", value: "376 - 510" },
      { key: "ATK", value: "100 - 123" },
      { key: "AC", value: "28 - 31" },
      { key: "ATK", value: "-" },
      { key: "SPD", value: "3 - 6" },
      { key: "PWR", value: "-" },
    ],
    damageTypeEffectiveness: [
      { key: "Sword", value: "-" },
      { key: "Polearm", value: "-20%" },
      { key: "Mace", value: "+50%" },
      { key: "Axe", value: "+30%" },
      { key: "Unarmed", value: "-40%" },
      { key: "Ranged", value: "-40%" },
      { key: "Magic", value: "-40%" },
    ],
    abilities: ["Power Strike"],
    inventory: ["Crystal Equipment", "Gemstones"],

    descriptionSections: [
      {
        sectionName: "Description",
        sectionContent: (
          <>
            <p>
              The Crystal Golem can be found wandering aimlessly around the
              Crystal Caves or The Citadel. Its fighting style consists or
              regular attacks mixed in with a power strike, which can deal
              devastating damage if the target doesn't get out of its way.
            </p>
          </>
        ),
      },

      {
        sectionName: "Spawn Locations",
        sectionContent: (
          <>
            <h3>Crystal Caves</h3>
            <p>
              Crystal Golems are among the toughest foes in the Crystal Caves
              alongside the Cockatrice. They spawn fairly regularly.
            </p>

            <h3>The Citadel</h3>
            <p>
              Crystal Golems are among the toughest foes in The Citadel
              alongside the Cockatrice. They spawn fairly regularly.
            </p>
          </>
        ),
      },

      {
        sectionName: "Behaviour",
        sectionContent: (
          <>
            <p>
              Crystal Golems can only attack the player with melee attacks. They
              will also use the spell Power Strike which will cause the Crystal
              Golem to raise its arms for a short period before delivering an
              enhanced melee attack which does a large amount of damage. The
              Crystal Golem is immobile during Power Strikes cast time so a
              player should try and move away if possible.
            </p>
          </>
        ),
      },

      {
        sectionName: "Loot",
        sectionContent: (
          <>
            <p>
              Crystal Golems will always drop a piece of Crystal equipment and
              have a chance to drop Gemstones.
            </p>
          </>
        ),
      },

      {
        sectionName: "Affinity",
        sectionContent: (
          <>
            <p>Crystal Golems are always hostile to the player.</p>
          </>
        ),
      },
    ],
  },

  {
    id: "Sentrybot",
    image: Sentrybot,
    levelDescription: "Level 3 - 15 Construct",
    stats: [
      { key: "HP", value: "50 - 150" },
      { key: "ATK", value: "-" },
      { key: "AC", value: "0 - 9" },
      { key: "ATK", value: "16 - 28" },
      { key: "SPD", value: "-" },
      { key: "PWR", value: "-" },
    ],
    hardcoreStats: [
      { key: "HP", value: "50 - 150" },
      { key: "ATK", value: "-" },
      { key: "AC", value: "0 - 9" },
      { key: "ATK", value: "16 - 28" },
      { key: "SPD", value: "-" },
      { key: "PWR", value: "-" },
    ],
    damageTypeEffectiveness: [
      { key: "Sword", value: "-" },
      { key: "Polearm", value: "-" },
      { key: "Mace", value: "-" },
      { key: "Axe", value: "-" },
      { key: "Unarmed", value: "-" },
      { key: "Ranged", value: "-50%" },
      { key: "Magic", value: "-50%" },
    ],
    abilities: ["-"],
    inventory: ["-"],

    descriptionSections: [
      {
        sectionName: "Description",
        sectionContent: (
          <>
            <p>
              Sentrybots are unable to be found naturally unlike their magical
              counterpart the Spellbot.
            </p>
          </>
        ),
      },

      {
        sectionName: "Loot",
        sectionContent: (
          <>
            <p>
              The Sentrybot will drop a destroyed version of itself when
              destroyed.
            </p>
          </>
        ),
      },
    ],
  },

  {
    id: "Spellbot",
    image: Spellbot,
    levelDescription: "Level 3 - 15 Construct",
    stats: [
      { key: "HP", value: "50 - 150" },
      { key: "ATK", value: "-" },
      { key: "AC", value: "0 - 9" },
      { key: "ATK", value: "-" },
      { key: "SPD", value: "-" },
      { key: "PWR", value: "25" },
    ],
    hardcoreStats: [
      { key: "HP", value: "50 - 150" },
      { key: "ATK", value: "-" },
      { key: "AC", value: "0 - 9" },
      { key: "ATK", value: "-" },
      { key: "SPD", value: "-" },
      { key: "PWR", value: "25" },
    ],
    damageTypeEffectiveness: [
      { key: "Sword", value: "-" },
      { key: "Polearm", value: "-" },
      { key: "Mace", value: "-" },
      { key: "Axe", value: "-" },
      { key: "Unarmed", value: "-" },
      { key: "Ranged", value: "-50%" },
      { key: "Magic", value: "-50%" },
    ],
    abilities: ["Forcebolt", "Magic Missile"],
    inventory: [""],

    descriptionSections: [
      {
        sectionName: "Description",
        sectionContent: (
          <>
            <p>
              The magical counterpart of the Sentrybot. They are usually only
              seen when crafted via a Tinkering box.
            </p>
          </>
        ),
      },

      {
        sectionName: "Spawn Locations",
        sectionContent: (
          <>
            <h3>The Ruins</h3>
            <p>
              There is a single setpiece which spawns a Spellbot surrounded by a
              pit and two gates. Otherwise it does not spawn naturally.
            </p>
          </>
        ),
      },

      {
        sectionName: "Behaviour",
        sectionContent: (
          <>
            <p>The Sentrybot will turn towards enemies and attack them.</p>
          </>
        ),
      },

      {
        sectionName: "Loot",
        sectionContent: (
          <>
            The Spellbot will drop a destroyed version of itself when destroyed.
          </>
        ),
      },

      {
        sectionName: "Affinity",
        sectionContent: (
          <>
            <p>The naturally spawned Spellbot is hostile to everyone.</p>
          </>
        ),
      },
    ],
  },

  {
    id: "Dummybot",
    image: Dummybot,
    levelDescription: "Level 3 - 15 Construct",
    stats: [
      { key: "HP", value: "50 - 200" },
      { key: "ATK", value: "-" },
      { key: "AC", value: "5 - 15" },
      { key: "ATK", value: "-" },
      { key: "SPD", value: "-" },
      { key: "PWR", value: "-" },
    ],
    hardcoreStats: [
      { key: "HP", value: "50 - 200" },
      { key: "ATK", value: "-" },
      { key: "AC", value: "5 - 15" },
      { key: "ATK", value: "-" },
      { key: "SPD", value: "-" },
      { key: "PWR", value: "-" },
    ],
    damageTypeEffectiveness: [
      { key: "Sword", value: "-" },
      { key: "Polearm", value: "-" },
      { key: "Mace", value: "-" },
      { key: "Axe", value: "-" },
      { key: "Unarmed", value: "-50%" },
      { key: "Ranged", value: "-50%" },
      { key: "Magic", value: "+20%" },
    ],
    abilities: ["Taunt"],
    inventory: [""],

    descriptionSections: [
      {
        sectionName: "Description",
        sectionContent: (
          <>
            <p>
              Beefy constructs usually constructed by tinkerers to protect their
              weaker Spellbot and Sentrybot allies.
            </p>
          </>
        ),
      },

      {
        sectionName: "Spawn Locations",
        sectionContent: (
          <>
            <h3>The Haunted Castle</h3>
            <p>
              Hidden behind a wall in the spawn room of the Haunted Castle six
              dummybots will spawn. This can be accessed with either a pickaxe
              or by activating a lever in the top left tower.
            </p>
          </>
        ),
      },

      {
        sectionName: "Loot",
        sectionContent: (
          <>
            <p>
              Dummybots will drop a destroyed version of itself when destroyed.
            </p>
          </>
        ),
      },
    ],
  },

  {
    id: "Mimic",
    image: Mimic,
    levelDescription: "Level 10 - 40 Construct",
    stats: [
      { key: "HP", value: "90 - 410" },
      { key: "ATK", value: "23 - 41" },
      { key: "AC", value: "3 - 24" },
      { key: "ATK", value: "-" },
      { key: "SPD", value: "0 - 6" },
      { key: "PWR", value: "-" },
    ],
    hardcoreStats: [
      { key: "HP", value: "170 - 830" },
      { key: "ATK", value: "38 - 76" },
      { key: "AC", value: "4 - 25" },
      { key: "ATK", value: "-" },
      { key: "SPD", value: "1 - 8" },
      { key: "PWR", value: "-" },
    ],
    damageTypeEffectiveness: [
      { key: "Sword", value: "-50%" },
      { key: "Polearm", value: "-50%" },
      { key: "Mace", value: "-50%" },
      { key: "Axe", value: "-" },
      { key: "Unarmed", value: "-50%" },
      { key: "Ranged", value: "-50%" },
      { key: "Magic", value: "+30%" },
    ],
    abilities: ["Devour Equipment", "Indominable"],
    inventory: ["Chest Contents", "Gold"],

    descriptionSections: [
      {
        sectionName: "Description",
        sectionContent: <></>,
      },

      {
        sectionName: "Spawn Locations",
        sectionContent: (
          <>
            <p>Any chest has a 5% chance to be a mimic.</p>
          </>
        ),
      },

      {
        sectionName: "Behaviour",
        sectionContent: (
          <>
            <p>
              Mimics will act like normal chests until a player tries to open
              the chest or attacks it with a container damaging spell such as
              fireball. The mimic may also be locked. If a mimic gets close
              enough to attack they have a chance to devour a players equipped
              items.
            </p>
            <p>
              The player may use the Locking spell on a mimic which will cause
              it to suffocate and die.
            </p>
          </>
        ),
      },

      {
        sectionName: "Loot",
        sectionContent: (
          <>
            <p>
              Mimics will drop gold and any items devoured as well as normal
              chest loot.
            </p>
          </>
        ),
      },

      {
        sectionName: "Affinity",
        sectionContent: (
          <>
            <p>
              Mimics are always hostile to players. They cannot be dominated.
            </p>
          </>
        ),
      },
    ],
  },

  {
    id: "Slime",
    image: Slime,
    levelDescription: "Level 4 - 22 Elemental",
    stats: [
      { key: "HP", value: "60 - 240" },
      { key: "ATK", value: "11 - 29" },
      { key: "AC", value: "3 - 21" },
      { key: "ATK", value: "-" },
      { key: "SPD", value: "0 - 4" },
      { key: "PWR", value: "6 - 12" },
    ],
    hardcoreStats: [
      { key: "HP", value: "124 - 500" },
      { key: "ATK", value: "15 - 54" },
      { key: "AC", value: "4 - 22" },
      { key: "ATK", value: "-" },
      { key: "SPD", value: "1 - 6" },
      { key: "PWR", value: "6 - 12" },
    ],
    damageTypeEffectiveness: [
      { key: "Sword", value: "+40%" },
      { key: "Polearm", value: "-30%" },
      { key: "Mace", value: "-50%" },
      { key: "Axe", value: "+30%" },
      { key: "Unarmed", value: "-50%" },
      { key: "Ranged", value: "-50%" },
      { key: "Magic", value: "+30%" },
    ],
    abilities: [
      "Waterwalking (Blue/Purple)",
      "Lavawalking (Orange)",
      "Spray Acid (Green)",
      "Spray Water (Blue)",
      "Spray Flames (Orange)",
      "Spray Tar (Purple)",
      "Spray Sludge (Silver)",
    ],
    inventory: ["-"],

    descriptionSections: [
      {
        sectionName: "Description",
        sectionContent: (
          <>
            <p>
              Found in a variety of colors, Slimes are mindless entities seeking
              endless consumption. They often find themselves sliding through
              pipes or waterways in search of organic matter to liquefy.
            </p>
            <p>
              Slimes can spawn when drinking/punching a faucet. They hit hard
              but move very slowly. Slimes are weak to magic and slashing
              weapons. They are also commonly found wandering around in the open
              in the Swamp, and can appear when walking near (or on) lava or
              water. They scale with the dungeon level, making them a threat at
              any point in the game. They also spawn in different colors, each
              with its own ability.
            </p>
            <p>
              A wandering slime will consume anything lying on the ground and
              will be lost forever. You can order an allied slime to eat an item
              lying on the floor, though it does nothing other than destroying
              the items and Foods.
            </p>
          </>
        ),
      },

      {
        sectionName: "Spawn Locations",
        sectionContent: (
          <>
            <p>
              Slimes can spawn at any body of liquid. They can also spawn when
              interacting with a faucet.
            </p>
          </>
        ),
      },

      {
        sectionName: "Behaviour",
        sectionContent: (
          <>
            <p>
              Slimes will walk towards the player and attempt to melee attack
              them. They will also stop and attempt to spray the player with
              liquid. The type of liquid sprayed is different for each color
              type.
            </p>
          </>
        ),
      },

      {
        sectionName: "Loot",
        sectionContent: (
          <>
            <p>Slimes have no drops.</p>
          </>
        ),
      },

      {
        sectionName: "Variants",
        sectionContent: (
          <>
            <h3>Green</h3>
            <p>
              The standard slime, spawns when interacting with faucets. It's
              spray type is Acid. It can also poison the player.
            </p>

            <h3>Blue</h3>
            <p>
              Spawns when the player swims in water. It's spray type is Water.
              This knocks back the player a great distance, puts out a player if
              they are on fire and also damages Vampires.
            </p>

            <h3>Orange</h3>
            <p>
              Spawns when the player walks near lava. It's spray type is Fire.
              This can quickly degrade cloaks and other accessories.
            </p>

            <h3>Purple</h3>
            <p>
              Spawns when the player swims in water or interacts with a faucet.
              It's spray type is Messy. This blinds the player.
            </p>

            <h3>Silver</h3>
            <p>
              Spawns when the player swims in water or interacts with a faucet.
              It's spray type is Grease. This degrades armor and causes enemies
              to drop their weapons when they attempt to use them.
            </p>
          </>
        ),
      },
      {
        sectionName: "Affinity",
        sectionContent: (
          <>
            <p>
              Slimes are always hostile to the player. They can be recuited with
              dominate or with a scroll or summoning.
            </p>
          </>
        ),
      },
    ],
  },

  {
    id: "Potato_King",
    image: PotatoKing,
    levelDescription: "Level 6 Humanoid",
    stats: [
      { key: "HP", value: "120" },
      { key: "ATK", value: "17" },
      { key: "AC", value: "3 - 13" },
      { key: "ATK", value: "-" },
      { key: "SPD", value: "1" },
      { key: "PWR", value: "-" },
    ],
    hardcoreStats: [
      { key: "HP", value: "232 - 260" },
      { key: "ATK", value: "29 - 32" },
      { key: "AC", value: "4 - 14" },
      { key: "ATK", value: "-" },
      { key: "SPD", value: "2" },
      { key: "PWR", value: "-" },
    ],
    damageTypeEffectiveness: [
      { key: "Sword", value: "-10%" },
      { key: "Polearm", value: "+10%" },
      { key: "Mace", value: "-" },
      { key: "Axe", value: "+10%" },
      { key: "Unarmed", value: "-20%" },
      { key: "Ranged", value: "+10%" },
      { key: "Magic", value: "-" },
    ],
    abilities: ["-"],
    inventory: [
      "Sharur",
      "Jester Hat",
      "Cloak of Magic Reflection",
      "Grass Springs",
      "Leather, Bronze Armor",
      "Cloaks",
    ],

    descriptionSections: [
      {
        sectionName: "Description",
        sectionContent: (
          <>
            <p>A stronger variant of the Goblin.</p>
          </>
        ),
      },

      {
        sectionName: "Spawn Locations",
        sectionContent: (
          <>
            <p>The Potato King has a 2% chance to replace any goblin spawn.</p>
          </>
        ),
      },

      {
        sectionName: "Behaviour",
        sectionContent: (
          <>
            <p>
              The Potato King behaves the same as a normal goblin except for
              having a handful of gobline followers.
            </p>
          </>
        ),
      },

      {
        sectionName: "Loot",
        sectionContent: (
          <>
            <p>
              The Potato King will drop his equipment when he is killed. Notable
              items are the Cloak of Magic Reflection, a +2 Jester Hat and a +1
              Decrepit Sharur.
            </p>
          </>
        ),
      },

      {
        sectionName: "Affinity",
        sectionContent: (
          <>
            <p>
              The Potato King has the same affinity as a normal goblin however
              requires a leadership score of 60 to be recruited.
            </p>
          </>
        ),
      },
    ],
  },

  {
    id: "Robin_Hood",
    image: RobinHood,
    levelDescription: "Level 5 Humanoid",
    stats: [
      { key: "HP", value: "70" },
      { key: "ATK", value: "7 - 14" },
      { key: "AC", value: "0 - 9" },
      { key: "ATK", value: "9 - 16" },
      { key: "SPD", value: "4 - 7" },
      { key: "PWR", value: "-" },
    ],
    hardcoreStats: [
      { key: "HP", value: "70" },
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
      "Shortbow (+1)",
      "Bycocket (+1)",
      "Cloak (+1)",
      "Leather Gloves (+1)",
      "Leather Boots (+1)",
    ],

    descriptionSections: [
      {
        sectionName: "Description",
        sectionContent: (
          <>
            <p>
              Robin Hood is a rare Human NPC that has a 4% chance to replace any
              spawned human. Like all rare NPCs, he will not drop his equipment
              when the "drop all" command is used, although they can be swapped
              with equipment on the ground.{" "}
            </p>
          </>
        ),
      },

      {
        sectionName: "Spawn Locations",
        sectionContent: (
          <>
            <p>Robin Hood has a 4% chance to replace any human spawn.</p>
          </>
        ),
      },

      {
        sectionName: "Behaviour",
        sectionContent: (
          <>
            <p>Robin Hood behaves the same as any other human.</p>
          </>
        ),
      },

      {
        sectionName: "Loot",
        sectionContent: (
          <>
            <p>
              Robin Hood will drop all carried equipment when killed. It will
              always be excellent quality.
            </p>
          </>
        ),
      },

      {
        sectionName: "Affinity",
        sectionContent: (
          <>
            <p>Robin Hood has the same affinity as a normal human.</p>
          </>
        ),
      },
    ],
  },

  {
    id: "Merlin",
    image: Merlin,
    levelDescription: "Level 10 Humanoid",
    stats: [
      { key: "HP", value: "60" },
      { key: "ATK", value: "7 - 14" },
      { key: "AC", value: "0 - 9" },
      { key: "ATK", value: "9 - 16" },
      { key: "SPD", value: "4 - 7" },
      { key: "PWR", value: "-" },
    ],
    hardcoreStats: [
      { key: "HP", value: "60" },
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
    inventory: [
      "Staff of Lightning (+2)",
      "Wizard Hat (+2)",
      "Pipe (+1)",
      "Cloak of Protection (+5)",
      "Amulet of Magic Reflection (+2)",
      "Leather Boots of Speed (+2)",
    ],

    descriptionSections: [
      {
        sectionName: "Description",
        sectionContent: (
          <>
            <p>
              Merlin is a rare Human NPC that has a 4% chance to replace any
              spawned human. Like all rare NPCs, he will not drop his equipment
              when the "drop all" command is used, although they can be swapped
              with equipment on the ground.{" "}
            </p>
          </>
        ),
      },

      {
        sectionName: "Spawn Locations",
        sectionContent: (
          <>
            <p>Merlin has a 4% chance to replace any human spawn.</p>
          </>
        ),
      },

      {
        sectionName: "Behaviour",
        sectionContent: (
          <>
            <p>Merlin behaves the same as any other human.</p>
          </>
        ),
      },

      {
        sectionName: "Loot",
        sectionContent: (
          <>
            <p>
              Merlin will drop all carried equipment when killed. It will always
              be excellent quality.
            </p>
          </>
        ),
      },

      {
        sectionName: "Affinity",
        sectionContent: (
          <>
            <p>Merlin has the same affinity as a normal human.</p>
          </>
        ),
      },
    ],
  },

  {
    id: "King_Arthur",
    image: KingArthur,
    levelDescription: "Level 10 Humanoid",
    stats: [
      { key: "HP", value: "100" },
      { key: "ATK", value: "7 - 14" },
      { key: "AC", value: "0 - 9" },
      { key: "ATK", value: "9 - 16" },
      { key: "SPD", value: "4 - 7" },
      { key: "PWR", value: "-" },
    ],
    hardcoreStats: [
      { key: "HP", value: "100" },
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
    inventory: [
      "Dyrnwyn (+1)",
      "Crowned Helmet (+1)",
      "Cloak of Magic Reflection (+2)",
      "Steel Shield of Magic Reflection (+1)",
      "Steel Breastpiece (+1)",
      "Steel Gauntlets (+1)",
      "Steel Boots (+1)",
    ],

    descriptionSections: [
      {
        sectionName: "Description",
        sectionContent: (
          <>
            <p>
              King Arthur is a rare Human NPC that has a 4% chance to replace
              any spawned human. Like all rare NPCs, he will not drop his
              equipment when the "drop all" command is used, although they can
              be swapped with equipment on the ground.{" "}
            </p>
          </>
        ),
      },

      {
        sectionName: "Spawn Locations",
        sectionContent: (
          <>
            <p>King Arthur has a 4% chance to replace any human spawn.</p>
          </>
        ),
      },

      {
        sectionName: "Behaviour",
        sectionContent: (
          <>
            <p>King Arthur behaves the same as any other human.</p>
          </>
        ),
      },

      {
        sectionName: "Loot",
        sectionContent: (
          <>
            <p>
              King Arthur will drop all carried equipment when killed. It will
              always be excellent quality.
            </p>
          </>
        ),
      },

      {
        sectionName: "Affinity",
        sectionContent: (
          <>
            <p>King Arthur has the same affinity as a normal human.</p>
          </>
        ),
      },
    ],
  },

  {
    id: "Red_Riding_Hood",
    image: RedRidingHood,
    levelDescription: "Level 1 Humanoid",
    stats: [
      { key: "HP", value: "10" },
      { key: "ATK", value: "7 - 14" },
      { key: "AC", value: "0 - 9" },
      { key: "ATK", value: "9 - 16" },
      { key: "SPD", value: "4 - 7" },
      { key: "PWR", value: "-" },
    ],
    hardcoreStats: [
      { key: "HP", value: "10" },
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
    inventory: [
      "Quaterstaff (+1)",
      "Red Hood (+1)",
      "Cloak (+1)",
      "Wolf Hood (+1)",
    ],

    descriptionSections: [
      {
        sectionName: "Description",
        sectionContent: (
          <>
            <p>
              Red Riding Hood is a rare Human NPC that has a 4% chance to
              replace any spawned human. Like all rare NPCs, she will not drop
              her equipment when the "drop all" command is used, although they
              can be swapped with equipment on the ground.{" "}
            </p>
          </>
        ),
      },

      {
        sectionName: "Spawn Locations",
        sectionContent: (
          <>
            <p>Red Riding Hood has a 4% chance to replace any human spawn.</p>
          </>
        ),
      },

      {
        sectionName: "Behaviour",
        sectionContent: (
          <>
            <p>Red Riding Hood behaves the same as any other human.</p>
          </>
        ),
      },

      {
        sectionName: "Loot",
        sectionContent: (
          <>
            <p>
              Red Riding Hood will drop all carried equipment when killed. It
              will always be excellent quality.
            </p>
          </>
        ),
      },

      {
        sectionName: "Affinity",
        sectionContent: (
          <>
            <p>Red Riding Hood has the same affinity as a normal human.</p>
          </>
        ),
      },
    ],
  },

  {
    id: "Kali",
    image: Kali,
    levelDescription: "Level 20 Humanoid",
    stats: [
      { key: "HP", value: "200" },
      { key: "ATK", value: "7 - 14" },
      { key: "AC", value: "0 - 9" },
      { key: "ATK", value: "9 - 16" },
      { key: "SPD", value: "4 - 7" },
      { key: "PWR", value: "-" },
    ],
    hardcoreStats: [
      { key: "HP", value: "200" },
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
    inventory: [
      "Circlet (+2)",
      "Cloak of Magic Reflection (+1)",
      "Leather Boots of Speed (+2)",
      "Spellbook of Fireball (+1)",
    ],

    descriptionSections: [
      {
        sectionName: "Description",
        sectionContent: (
          <>
            <p>
              Kali is a rare Human NPC that has a 4% chance to replace any
              spawned human. Like all rare NPCs, he will not drop his equipment
              when the "drop all" command is used, although they can be swapped
              with equipment on the ground.{" "}
            </p>
          </>
        ),
      },

      {
        sectionName: "Spawn Locations",
        sectionContent: (
          <>
            <p>Kali has a 4% chance to replace any human spawn.</p>
          </>
        ),
      },

      {
        sectionName: "Behaviour",
        sectionContent: (
          <>
            <p>Kali behaves the same as any other human.</p>
          </>
        ),
      },

      {
        sectionName: "Loot",
        sectionContent: (
          <>
            <p>
              Kali will drop all carried equipment when killed. It will always
              be excellent quality.
            </p>
          </>
        ),
      },

      {
        sectionName: "Affinity",
        sectionContent: (
          <>
            <p>Kali has the same affinity as a normal human.</p>
          </>
        ),
      },
    ],
  },

  {
    id: "Anansi",
    image: Anansi,
    levelDescription: "Level 20 Humanoid",
    stats: [
      { key: "HP", value: "100" },
      { key: "ATK", value: "7 - 14" },
      { key: "AC", value: "0 - 9" },
      { key: "ATK", value: "9 - 16" },
      { key: "SPD", value: "4 - 7" },
      { key: "PWR", value: "-" },
    ],
    hardcoreStats: [
      { key: "HP", value: "100" },
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
    inventory: [
      "Sharur (+1)",
      "Circlet of Wisdom (-1)",
      "Spellbook of Antrhopod Form",
    ],

    descriptionSections: [
      {
        sectionName: "Description",
        sectionContent: (
          <>
            <p>
              Anansi is a rare Human NPC that has a 4% chance to replace any
              spawned human. Like all rare NPCs, he will not drop his equipment
              when the "drop all" command is used, although they can be swapped
              with equipment on the ground.{" "}
            </p>
          </>
        ),
      },

      {
        sectionName: "Spawn Locations",
        sectionContent: (
          <>
            <p>
              Anansi has a 4% chance to replace any human spawn. He cannot
              however spawn in Hamlet.
            </p>
          </>
        ),
      },

      {
        sectionName: "Behaviour",
        sectionContent: (
          <>
            <p>Anansi behaves the same as any other human.</p>
          </>
        ),
      },

      {
        sectionName: "Loot",
        sectionContent: (
          <>
            <p>
              Anansi will drop all carried equipment when killed. It will always
              be excellent quality.
            </p>
          </>
        ),
      },

      {
        sectionName: "Affinity",
        sectionContent: (
          <>
            <p>Anansi has the same affinity as a normal human.</p>
          </>
        ),
      },
    ],
  },

  {
    id: "Vishpala",
    image: Vishpala,
    levelDescription: "Level 10 Humanoid",
    stats: [
      { key: "HP", value: "70" },
      { key: "ATK", value: "7 - 14" },
      { key: "AC", value: "0 - 9" },
      { key: "ATK", value: "9 - 16" },
      { key: "SPD", value: "4 - 7" },
      { key: "PWR", value: "-" },
    ],
    hardcoreStats: [
      { key: "HP", value: "70" },
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
    inventory: [
      "Gungnir (+1)",
      "Cloak",
      "Bronze Shield (+1)",
      "Iron Breastpiece",
      "Iron Boots",
    ],

    descriptionSections: [
      {
        sectionName: "Description",
        sectionContent: (
          <>
            <p>
              Vishpala is a rare Human NPC that has a 4% chance to replace any
              spawned human. Like all rare NPCs, he will not drop his equipment
              when the "drop all" command is used, although they can be swapped
              with equipment on the ground.{" "}
            </p>
          </>
        ),
      },

      {
        sectionName: "Spawn Locations",
        sectionContent: (
          <>
            <p>Vishpala has a 4% chance to replace any human spawn.</p>
          </>
        ),
      },

      {
        sectionName: "Behaviour",
        sectionContent: (
          <>
            <p>Vishpala behaves the same as any other human.</p>
          </>
        ),
      },

      {
        sectionName: "Loot",
        sectionContent: (
          <>
            <p>
              Vishpala will drop all carried equipment when killed. It will
              always be excellent quality.
            </p>
          </>
        ),
      },

      {
        sectionName: "Affinity",
        sectionContent: (
          <>
            <p>Vishpala has the same affinity as a normal human.</p>
          </>
        ),
      },
    ],
  },

  {
    id: "Othello",
    image: Othello,
    levelDescription: "Level 10 Humanoid",
    stats: [
      { key: "HP", value: "50" },
      { key: "ATK", value: "7 - 14" },
      { key: "AC", value: "0 - 9" },
      { key: "ATK", value: "9 - 16" },
      { key: "SPD", value: "4 - 7" },
      { key: "PWR", value: "-" },
    ],
    hardcoreStats: [
      { key: "HP", value: "50" },
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
    inventory: [
      "Steel Sword (+2)",
      "Turban",
      "Cloak",
      "Iron Breastpiece",
      "Iron Bracers",
    ],

    descriptionSections: [
      {
        sectionName: "Description",
        sectionContent: (
          <>
            <p>
              Othello is a rare Human NPC that has a 4% chance to replace any
              spawned human. Like all rare NPCs, he will not drop his equipment
              when the "drop all" command is used, although they can be swapped
              with equipment on the ground.{" "}
            </p>
          </>
        ),
      },

      {
        sectionName: "Spawn Locations",
        sectionContent: (
          <>
            <p>Othello has a 4% chance to replace any human spawn.</p>
          </>
        ),
      },

      {
        sectionName: "Behaviour",
        sectionContent: (
          <>
            <p>Othello behaves the same as any other human.</p>
          </>
        ),
      },

      {
        sectionName: "Loot",
        sectionContent: (
          <>
            <p>
              Othello will drop all carried equipment when killed. It will
              always be excellent quality.
            </p>
          </>
        ),
      },

      {
        sectionName: "Affinity",
        sectionContent: (
          <>
            <p>Othello has the same affinity as a normal human.</p>
          </>
        ),
      },
    ],
  },

  {
    id: "Oya",
    image: Oya,
    levelDescription: "Level 20 Humanoid",
    stats: [
      { key: "HP", value: "100" },
      { key: "ATK", value: "7 - 14" },
      { key: "AC", value: "0 - 9" },
      { key: "ATK", value: "9 - 16" },
      { key: "SPD", value: "4 - 7" },
      { key: "PWR", value: "-" },
    ],
    hardcoreStats: [
      { key: "HP", value: "100" },
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
    inventory: ["Hood (+3)", "Cloak of Protection (+4)"],

    descriptionSections: [
      {
        sectionName: "Description",
        sectionContent: (
          <>
            <p>
              Oya is a rare Human NPC that has a 4% chance to replace any
              spawned human. Like all rare NPCs, he will not drop his equipment
              when the "drop all" command is used, although they can be swapped
              with equipment on the ground.{" "}
            </p>
          </>
        ),
      },

      {
        sectionName: "Spawn Locations",
        sectionContent: (
          <>
            <p>Oya has a 4% chance to replace any human spawn.</p>
          </>
        ),
      },

      {
        sectionName: "Behaviour",
        sectionContent: (
          <>
            <p>Oya behaves the same as any other human.</p>
          </>
        ),
      },

      {
        sectionName: "Loot",
        sectionContent: (
          <>
            <p>
              Oya will drop all carried equipment when killed. It will always be
              excellent quality.
            </p>
          </>
        ),
      },

      {
        sectionName: "Affinity",
        sectionContent: (
          <>
            <p>Oya has the same affinity as a normal human.</p>
          </>
        ),
      },
    ],
  },

  {
    id: "Conan_the_Barbarian",
    image: ConanTheBarbarian,
    levelDescription: "Level 10 Humanoid",
    stats: [
      { key: "HP", value: "100" },
      { key: "ATK", value: "7 - 14" },
      { key: "AC", value: "0 - 9" },
      { key: "ATK", value: "9 - 16" },
      { key: "SPD", value: "4 - 7" },
      { key: "PWR", value: "-" },
    ],
    hardcoreStats: [
      { key: "HP", value: "100" },
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
    inventory: ["Steel Axe (+2)", "Crown (+1)", "Wooden Shield (+2)"],

    descriptionSections: [
      {
        sectionName: "Description",
        sectionContent: (
          <>
            <p>
              Conan the Barbarian is a rare Human NPC that has a 4% chance to
              replace any spawned human. Like all rare NPCs, he will not drop
              his equipment when the "drop all" command is used, although they
              can be swapped with equipment on the ground.{" "}
            </p>
          </>
        ),
      },

      {
        sectionName: "Spawn Locations",
        sectionContent: (
          <>
            <p>
              Conan the Barbarian has a 4% chance to replace any human spawn.
            </p>
          </>
        ),
      },

      {
        sectionName: "Behaviour",
        sectionContent: (
          <>
            <p>Conan the Barbarian behaves the same as any other human.</p>
          </>
        ),
      },

      {
        sectionName: "Loot",
        sectionContent: (
          <>
            <p>
              Conan the Barbarian will drop all carried equipment when killed.
              It will always be excellent quality.
            </p>
          </>
        ),
      },

      {
        sectionName: "Affinity",
        sectionContent: (
          <>
            <p>Conan the Barbarian has the same affinity as a normal human.</p>
          </>
        ),
      },
    ],
  },

  {
    id: "ZAP_Brigade",
    image: ZAPBrigade,
    levelDescription: "Level ??? Humanoid",
    stats: [
      { key: "HP", value: "105" },
      { key: "ATK", value: "7 - 14" },
      { key: "AC", value: "0 - 9" },
      { key: "ATK", value: "9 - 16" },
      { key: "SPD", value: "4 - 7" },
      { key: "PWR", value: "-" },
    ],
    hardcoreStats: [
      { key: "HP", value: "105" },
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
    inventory: [
      "Magicstaffs of Lightning",
      "Hoods",
      "Cloaks",
      "Cloaks of Protection",
      "Leather Breastpieces",
      "Leather Gloves",
      "Leather Boots",
      "Amulets of Magic Reflection",
    ],

    descriptionSections: [
      {
        sectionName: "Description",
        sectionContent: (
          <>
            <p>
              The ZAP Brigade are a number of heavily armed humans who have a
              chance to spawn on minotaur levels. (excluding the minotaur maze).
              They can spawn in groups of two to nine. They have a pretty good
              shot at killing the minotaur as long as they can get its
              attention. Like all humans, they are hostile to monster races but
              can be recruited to follow Human and Automaton players, leadership
              permitting.
            </p>
          </>
        ),
      },

      {
        sectionName: "Spawn Locations",
        sectionContent: (
          <>
            <p>
              The ZAP Brigade have a 20% chance to spawn on a minotaur floor.
              They may also be summoned via a +2 Scroll of Summon.
            </p>
          </>
        ),
      },

      {
        sectionName: "Behaviour",
        sectionContent: (
          <>
            <p>The ZAP Brigade behaves the same as any other human.</p>
          </>
        ),
      },

      {
        sectionName: "Loot",
        sectionContent: (
          <>
            <p>
              The ZAP Brigade will drop all carried equipment when killed. It
              will always be excellent quality.
            </p>
          </>
        ),
      },

      {
        sectionName: "Affinity",
        sectionContent: (
          <>
            <p>The ZAP Brigade has the same affinity as a normal human.</p>
          </>
        ),
      },
    ],
  },

  {
    id: "Algernon",
    image: Algernon,
    levelDescription: "Level 10 Beast",
    stats: [
      { key: "HP", value: "60" },
      { key: "ATK", value: "7" },
      { key: "AC", value: "2" },
      { key: "ATK", value: "-" },
      { key: "SPD", value: "20" },
      { key: "PWR", value: "-" },
    ],
    hardcoreStats: [
      { key: "HP", value: "124 - 140" },
      { key: "ATK", value: "11 - 12" },
      { key: "AC", value: "3" },
      { key: "ATK", value: "-" },
      { key: "SPD", value: "23 - 26" },
      { key: "PWR", value: "-" },
    ],
    damageTypeEffectiveness: [
      { key: "Sword", value: "+10%" },
      { key: "Polearm", value: "-10%" },
      { key: "Mace", value: "+10%" },
      { key: "Axe", value: "-10%" },
      { key: "Unarmed", value: "+30%" },
      { key: "Ranged", value: "+20%" },
      { key: "Magic", value: "-" },
    ],
    abilities: [""],
    inventory: ["Emeralds", "Cheese", "Meat"],

    descriptionSections: [
      {
        sectionName: "Description",
        sectionContent: (
          <>
            <p>
              White furred and possessing an Emerald for an eye, Algernon is a
              Champion enemy with 2% chance to replace any Rat.
            </p>
          </>
        ),
      },

      {
        sectionName: "Spawn Locations",
        sectionContent: (
          <>
            <p>Algernon has a 2% chance to replace any rat spawn.</p>
          </>
        ),
      },

      {
        sectionName: "Behaviour",
        sectionContent: (
          <>
            <p>
              Algernon behaves the same as any other rat. However he is faster
              and is able to open doors.
            </p>
          </>
        ),
      },

      {
        sectionName: "Loot",
        sectionContent: (
          <>
            <p>Algernon always drops an appraised Emerald and Fresh Meat.</p>
          </>
        ),
      },

      {
        sectionName: "Affinity",
        sectionContent: (
          <>
            <p>Algernon has the same affinity as a normal human.</p>
          </>
        ),
      },
    ],
  },

  {
    id: "Shelob",
    image: Shelob,
    levelDescription: "Level 15 Beast",
    stats: [
      { key: "HP", value: "150" },
      { key: "ATK", value: "18" },
      { key: "AC", value: "8" },
      { key: "ATK", value: "-" },
      { key: "SPD", value: "10" },
      { key: "PWR", value: "-" },
    ],
    hardcoreStats: [
      { key: "HP", value: "278 - 310" },
      { key: "ATK", value: "30 - 33" },
      { key: "AC", value: "9" },
      { key: "ATK", value: "-" },
      { key: "SPD", value: "12 - 13" },
      { key: "PWR", value: "-" },
    ],
    damageTypeEffectiveness: [
      { key: "Sword", value: "-" },
      { key: "Polearm", value: "+20%" },
      { key: "Mace", value: "+10%" },
      { key: "Axe", value: "-" },
      { key: "Unarmed", value: "+10%" },
      { key: "Ranged", value: "+10%" },
      { key: "Magic", value: "-" },
    ],
    abilities: ["Poisoned Attacks", "Spray Web"],
    inventory: ["Dyrnwyn (+1)", "Ring of Invisibility (-5)"],

    descriptionSections: [
      {
        sectionName: "Description",
        sectionContent: (
          <>
            <p>
              With distinctive red and black hues, Shelob is a Champion enemy
              with a 2% chance to replace any spider on the level(with some
              exceptions). She is followed by 3 spiders.
            </p>
          </>
        ),
      },

      {
        sectionName: "Spawn Locations",
        sectionContent: (
          <>
            <p>Shelob has a 2% chance to replace any spider spawn.</p>
          </>
        ),
      },

      {
        sectionName: "Behaviour",
        sectionContent: (
          <>
            <p>Shelob behaves the same as any other Spider.</p>
          </>
        ),
      },

      {
        sectionName: "Loot",
        sectionContent: (
          <>
            <p>
              Always drops a Drynwyn (+1) and a -5 Ring of Invisibility. Drynwyn
              durability depends on the floor the player encounters Shelob.
            </p>
          </>
        ),
      },

      {
        sectionName: "Affinity",
        sectionContent: (
          <>
            <p>Shelob has the same affinity as a normal spider.</p>
          </>
        ),
      },
    ],
  },

  {
    id: "Thumpus_The_Troll",
    image: ThumpusTheTroll,
    levelDescription: "Level 22 Beast",
    stats: [
      { key: "HP", value: "200 - 240" },
      { key: "ATK", value: "23" },
      { key: "AC", value: "5" },
      { key: "ATK", value: "-" },
      { key: "SPD", value: "0" },
      { key: "PWR", value: "-" },
    ],
    hardcoreStats: [
      { key: "HP", value: "376 - 500" },
      { key: "ATK", value: "38 - 43" },
      { key: "AC", value: "6 - 7" },
      { key: "ATK", value: "-" },
      { key: "SPD", value: "1" },
      { key: "PWR", value: "-" },
    ],
    damageTypeEffectiveness: [
      { key: "Sword", value: "+10%" },
      { key: "Polearm", value: "-20%" },
      { key: "Mace", value: "-20%" },
      { key: "Axe", value: "+10%" },
      { key: "Unarmed", value: "-20%" },
      { key: "Ranged", value: "-10%" },
      { key: "Magic", value: "-" },
    ],
    abilities: [""],
    inventory: ["Troll loot", "Roses"],

    descriptionSections: [
      {
        sectionName: "Description",
        sectionContent: (
          <>
            <p>
              A named variant of a Troll. He is followed by a group of 3 gnomes.
            </p>
          </>
        ),
      },

      {
        sectionName: "Spawn Locations",
        sectionContent: (
          <>
            <p>Thumpus has a 2% chance to replace any human spawn.</p>
          </>
        ),
      },

      {
        sectionName: "Behaviour",
        sectionContent: (
          <>
            <p>Thumpus behaves the same as any other Troll.</p>
          </>
        ),
      },

      {
        sectionName: "Loot",
        sectionContent: (
          <>
            <p>
              Thumpus drops the normal Troll loot pool but also drops a number
              of roses guarenteed.
            </p>
          </>
        ),
      },

      {
        sectionName: "Affinity",
        sectionContent: (
          <>
            <p>Thumpus has the same affinity as a normal Troll.</p>
          </>
        ),
      },
    ],
  },

  {
    id: "Skrabblag",
    image: Skrabblag,
    levelDescription: "Level 15 Beast",
    stats: [
      { key: "HP", value: "100" },
      { key: "ATK", value: "23" },
      { key: "AC", value: "6" },
      { key: "ATK", value: "-" },
      { key: "SPD", value: "5" },
      { key: "PWR", value: "-" },
    ],
    hardcoreStats: [
      { key: "HP", value: "196 - 220" },
      { key: "ATK", value: "38 - 43" },
      { key: "AC", value: "7" },
      { key: "ATK", value: "-" },
      { key: "SPD", value: "6 - 7" },
      { key: "PWR", value: "-" },
    ],
    damageTypeEffectiveness: [
      { key: "Sword", value: "-10%" },
      { key: "Polearm", value: "+30%" },
      { key: "Mace", value: "+10%" },
      { key: "Axe", value: "-" },
      { key: "Unarmed", value: "+20%" },
      { key: "Ranged", value: "-" },
      { key: "Magic", value: "-" },
    ],
    abilities: ["Paralyzing Attacks"],
    inventory: ["Rubies"],

    descriptionSections: [
      {
        sectionName: "Description",
        sectionContent: (
          <>
            <p>
              A named variant of Scorpions. He is followed by a large group of
              scorpions
            </p>
          </>
        ),
      },

      {
        sectionName: "Spawn Locations",
        sectionContent: (
          <>
            <p>Skrabblag has a 2% chance to replace any Scorpion spawn.</p>
          </>
        ),
      },

      {
        sectionName: "Behaviour",
        sectionContent: (
          <>
            <p>
              Skrabblag behaves the same as any other Scorpion. Because he is
              followed by a large number of scorpions be wary of being chain
              paralyzed.
            </p>
          </>
        ),
      },

      {
        sectionName: "Loot",
        sectionContent: (
          <>
            <p>Skrabblag drops rubies on death.</p>
          </>
        ),
      },

      {
        sectionName: "Affinity",
        sectionContent: (
          <>
            <p>Skrabblag has the same affinity as a normal Scorpion.</p>
          </>
        ),
      },
    ],
  },

  {
    id: "Xyggi",
    image: Xyggi,
    levelDescription: "Level 10 Beast",
    stats: [
      { key: "HP", value: "70" },
      { key: "ATK", value: "7" },
      { key: "AC", value: "2" },
      { key: "ATK", value: "-" },
      { key: "SPD", value: "20" },
      { key: "PWR", value: "20" },
    ],
    hardcoreStats: [
      { key: "HP", value: "134 - 150" },
      { key: "ATK", value: "11 - 12" },
      { key: "AC", value: "3" },
      { key: "ATK", value: "-" },
      { key: "SPD", value: "23 - 26" },
      { key: "PWR", value: "20" },
    ],
    damageTypeEffectiveness: [
      { key: "Sword", value: "+50%" },
      { key: "Polearm", value: "-30%" },
      { key: "Mace", value: "+10%" },
      { key: "Axe", value: "+40%" },
      { key: "Unarmed", value: "+40%" },
      { key: "Ranged", value: "+10%" },
      { key: "Magic", value: "-80%" },
    ],
    abilities: ["Cold", "Magic Reflection"],
    inventory: ["Enchanted Feathers", "Tomalleys", "Low Value Gemstones"],

    descriptionSections: [
      {
        sectionName: "Description",
        sectionContent: (
          <>
            <p>
              A named variant of Scarabs. He is followed by a group of scarabs.
            </p>
          </>
        ),
      },

      {
        sectionName: "Spawn Locations",
        sectionContent: (
          <>
            <p>Xyggi has a 2% chance to replace any scarab spawn.</p>
          </>
        ),
      },

      {
        sectionName: "Behaviour",
        sectionContent: (
          <>
            <p>
              Xyggi, contrary to other scarabs, casts the cold spell. He also
              has innate magic reflection.
            </p>
          </>
        ),
      },

      {
        sectionName: "Loot",
        sectionContent: (
          <>
            <p>
              Xyggi drops low value gemstones as well as an Enchanted Feather on
              death. Like other scarabs he also drops tomalleys.
            </p>
          </>
        ),
      },

      {
        sectionName: "Affinity",
        sectionContent: (
          <>
            <p>Xyggi has the same affinity as a normal scarab.</p>
          </>
        ),
      },
    ],
  },

  {
    id: "Gharbad",
    image: Gharbad,
    levelDescription: "Level 25 Beastfolk",
    stats: [
      { key: "HP", value: "295 - 315" },
      { key: "ATK", value: "39 - 50" },
      { key: "AC", value: "9 - 18" },
      { key: "ATK", value: "-" },
      { key: "SPD", value: "10" },
      { key: "PWR", value: "25" },
    ],
    hardcoreStats: [
      { key: "HP", value: "535 - 635" },
      { key: "ATK", value: "66 - 85" },
      { key: "AC", value: "10 - 20" },
      { key: "ATK", value: "-" },
      { key: "SPD", value: "12 - 13" },
      { key: "PWR", value: "25" },
    ],
    damageTypeEffectiveness: [
      { key: "Sword", value: "-10%" },
      { key: "Polearm", value: "+10%" },
      { key: "Mace", value: "-" },
      { key: "Axe", value: "+10%" },
      { key: "Unarmed", value: "-" },
      { key: "Ranged", value: "+10%" },
      { key: "Magic", value: "+40%" },
    ],
    abilities: ["-"],
    inventory: [
      "Iron, Steel, Crystal armor",
      "Steel, Crystal Axes / Maces",
      "Crystal Shurikens",
      "Steel Chakrams",
      "Potions of Healing",
      "Bottles of Booze",
    ],

    descriptionSections: [
      {
        sectionName: "Description",
        sectionContent: (
          <>
            <p>
              A named variant of Goatmen. He is always followed by a group of
              Goatmen.
            </p>
          </>
        ),
      },

      {
        sectionName: "Spawn Locations",
        sectionContent: (
          <>
            <p>Gharbad has a 2% chance to replace any goatman spawn.</p>
          </>
        ),
      },

      {
        sectionName: "Behaviour",
        sectionContent: (
          <>
            <p>Gharbad behaves the same as any other goatman.</p>
          </>
        ),
      },

      {
        sectionName: "Loot",
        sectionContent: (
          <>
            <p>Gharbad drops any worn equipment when killed.</p>
          </>
        ),
      },

      {
        sectionName: "Affinity",
        sectionContent: (
          <>
            <p>Gharbad has the same affinity as a normal goatman.</p>
          </>
        ),
      },
    ],
  },

  {
    id: "Funny_Bones",
    image: FunnyBones,
    levelDescription: "Level 2 Undead",
    stats: [
      { key: "HP", value: "100" },
      { key: "ATK", value: "14 - 17" },
      { key: "AC", value: "1 - 6" },
      { key: "ATK", value: "-" },
      { key: "SPD", value: "1" },
      { key: "PWR", value: "-" },
    ],
    hardcoreStats: [
      { key: "HP", value: "196 - 220" },
      { key: "ATK", value: "22 - 27" },
      { key: "AC", value: "2 - 7" },
      { key: "ATK", value: "-" },
      { key: "SPD", value: "2" },
      { key: "PWR", value: "-" },
    ],
    damageTypeEffectiveness: [
      { key: "Sword", value: "-50%" },
      { key: "Polearm", value: "+30%" },
      { key: "Mace", value: "+40%" },
      { key: "Axe", value: "-20%" },
      { key: "Unarmed", value: "+10%" },
      { key: "Ranged", value: "-50%" },
      { key: "Magic", value: "-20%" },
    ],
    abilities: ["-"],
    inventory: [
      "Parashu (+1)",
      "Cloak of Protection",
      "Eyepatch",
      "Leather, Wooden, Iron Shields / Helmets",
    ],

    descriptionSections: [
      {
        sectionName: "Description",
        sectionContent: (
          <>
            <p>A named variant of Skeletons.</p>
          </>
        ),
      },

      {
        sectionName: "Spawn Locations",
        sectionContent: (
          <>
            <p>Funny Bones has a 2% chance to replace any skeleton spawn.</p>
          </>
        ),
      },

      {
        sectionName: "Behaviour",
        sectionContent: (
          <>
            <p>Funny Bones behaves the same as any other skeleton.</p>
          </>
        ),
      },

      {
        sectionName: "Loot",
        sectionContent: (
          <>
            <p>
              Funny Bones drops the legendary axe Parashu (+1) alongside a Cloak
              of Protection and an Eyepatch.
            </p>
          </>
        ),
      },

      {
        sectionName: "Affinity",
        sectionContent: (
          <>
            <p>Funny Bones has the same affinity as a normal Skeleton.</p>
          </>
        ),
      },
    ],
  },

  {
    id: "Coral_Grimes",
    image: CoralGrimes,
    levelDescription: "Level 15 Undead",
    stats: [
      { key: "HP", value: "270" },
      { key: "ATK", value: "21" },
      { key: "AC", value: "-1" },
      { key: "ATK", value: "-" },
      { key: "SPD", value: "2" },
      { key: "PWR", value: "-" },
    ],
    hardcoreStats: [
      { key: "HP", value: "494 - 550" },
      { key: "ATK", value: "33 - 36" },
      { key: "AC", value: "0" },
      { key: "ATK", value: "-" },
      { key: "SPD", value: "3" },
      { key: "PWR", value: "-" },
    ],
    damageTypeEffectiveness: [
      { key: "Sword", value: "-" },
      { key: "Polearm", value: "+10%" },
      { key: "Mace", value: "+20%" },
      { key: "Axe", value: "-20%" },
      { key: "Unarmed", value: "+10%" },
      { key: "Ranged", value: "-40%" },
      { key: "Magic", value: "-20%" },
    ],
    abilities: ["-"],
    inventory: ["Bounty Hunter Hat", "Ruby", "Meat"],

    descriptionSections: [
      {
        sectionName: "Description",
        sectionContent: (
          <>
            <p>
              Coral Grimes is a variant of Ghouls. He is followed by a group of
              ghouls and enslaved ghouls.
            </p>
          </>
        ),
      },

      {
        sectionName: "Spawn Locations",
        sectionContent: (
          <>
            <p>
              Coral Grimes has a 2% chance to replace any Ghoul or Enslaved
              Ghoul spawn.
            </p>
          </>
        ),
      },

      {
        sectionName: "Behaviour",
        sectionContent: (
          <>
            <p>Coral Grimes behaves the same as any other Ghoul.</p>
          </>
        ),
      },

      {
        sectionName: "Loot",
        sectionContent: (
          <>
            <p>
              Coral Grimes drops a Bounty Hunters Hat and a ruby alongside
              normal ghoul drops.
            </p>
          </>
        ),
      },

      {
        sectionName: "Affinity",
        sectionContent: (
          <>
            <p>Coral Grimes has the same affinity as a normal ghoul.</p>
          </>
        ),
      },
    ],
  },

  {
    id: "Bram_Kindly",
    image: BramKindly,
    levelDescription: "Level 35 Undead",
    stats: [
      { key: "HP", value: "650" },
      { key: "ATK", value: "48 - 53" },
      { key: "AC", value: "10" },
      { key: "ATK", value: "-" },
      { key: "SPD", value: "10" },
      { key: "PWR", value: "30" },
    ],
    hardcoreStats: [
      { key: "HP", value: "1178 - 1310" },
      { key: "ATK", value: "82 - 103" },
      { key: "AC", value: "11" },
      { key: "ATK", value: "-" },
      { key: "SPD", value: "12 - 13" },
      { key: "PWR", value: "30" },
    ],
    damageTypeEffectiveness: [
      { key: "Sword", value: "-20%" },
      { key: "Polearm", value: "+10%" },
      { key: "Mace", value: "+20%" },
      { key: "Axe", value: "-20%" },
      { key: "Unarmed", value: "-" },
      { key: "Ranged", value: "-50%" },
      { key: "Magic", value: "-20%" },
    ],
    abilities: ["Drain Soul", "Vampiric Aura", "Indominable"],
    inventory: [
      "Wraith's Grown",
      "Magicstaffs of Bloodletting",
      "Vampire Doublet",
    ],

    descriptionSections: [
      {
        sectionName: "Description",
        sectionContent: (
          <>
            <p>
              The Lord of Bram's Castle. He sits in this throne room at the top
              of his castle with legions of undead and demons to fight through
              to reach him.
            </p>
          </>
        ),
      },

      {
        sectionName: "Spawn Locations",
        sectionContent: (
          <>
            <p>
              Bram Kindly spawns at the top of Bram's Castle and it is required
              to kill him in order to escape to the next floor.
            </p>
          </>
        ),
      },

      {
        sectionName: "Behaviour",
        sectionContent: (
          <>
            <p>Bram Kindly behaves the same as any other Vampire.</p>
          </>
        ),
      },

      {
        sectionName: "Loot",
        sectionContent: (
          <>
            <p>
              Bram Kindly drops the artifact cloak Wraith's Gown alongside a
              Vampire Doublet and a Magicstaff of Bloodletting.
            </p>
          </>
        ),
      },

      {
        sectionName: "Affinity",
        sectionContent: (
          <>
            <p>
              Bram Kindly is always hostile to the player and cannot be
              dominated.
            </p>
          </>
        ),
      },
    ],
  },

  {
    id: "Artemisia",
    image: Artemisia,
    levelDescription: "Level 25 Undead",
    stats: [
      { key: "HP", value: "170" },
      { key: "ATK", value: "-" },
      { key: "AC", value: "2 - 4" },
      { key: "ATK", value: "37 - 48" },
      { key: "SPD", value: "10 - 15" },
      { key: "PWR", value: "-" },
    ],
    hardcoreStats: [
      { key: "HP", value: "314 - 350" },
      { key: "ATK", value: "-" },
      { key: "AC", value: "3 - 5" },
      { key: "ATK", value: "57 - 82" },
      { key: "SPD", value: "12 - 19" },
      { key: "PWR", value: "-" },
    ],
    damageTypeEffectiveness: [
      { key: "Sword", value: "-50%" },
      { key: "Polearm", value: "-50%" },
      { key: "Mace", value: "-50%" },
      { key: "Axe", value: "-50%" },
      { key: "Unarmed", value: "-50%" },
      { key: "Ranged", value: "-50%" },
      { key: "Magic", value: "+100%" },
    ],
    abilities: ["Mimic Other", "Levitation", "Teleportation", "Indominable"],
    inventory: ["Khryselakatos", "Quivers of Silver Ammo", "Spooky Masks"],

    descriptionSections: [
      {
        sectionName: "Description",
        sectionContent: (
          <>
            <p>Legendary Variant of the Shadow.</p>
          </>
        ),
      },

      {
        sectionName: "Spawn Locations",
        sectionContent: (
          <>
            <p>
              Artemisia spawns in the first underworld accessable by breaking
              the wall in the second chest room on level 5.
            </p>
          </>
        ),
      },

      {
        sectionName: "Behaviour",
        sectionContent: (
          <>
            <p>Artemisia will fly around shooting arrows at the player.</p>
          </>
        ),
      },

      {
        sectionName: "Loot",
        sectionContent: (
          <>
            <p>
              Artemisia will drop normal shadow loot as well as the legendary
              bow Khryselakatos and Quivers of Silver Ammo.
            </p>
          </>
        ),
      },

      {
        sectionName: "Affinity",
        sectionContent: (
          <>
            <p>
              Artemisia has the same affinity as a normal Shadow. Spooky Masks
              however will not work on Artemisia.
            </p>
          </>
        ),
      },
    ],
  },

  {
    id: "Baratheon",
    image: Baratheon,
    levelDescription: "Level 50 Undead",
    stats: [
      { key: "HP", value: "170" },
      { key: "ATK", value: "28 - 33" },
      { key: "AC", value: "2 - 4" },
      { key: "ATK", value: "-" },
      { key: "SPD", value: "10 - 15" },
      { key: "PWR", value: "-" },
    ],
    hardcoreStats: [
      { key: "HP", value: "314 - 350" },
      { key: "ATK", value: "47 - 63" },
      { key: "AC", value: "3 - 5" },
      { key: "ATK", value: "-" },
      { key: "SPD", value: "12 - 19" },
      { key: "PWR", value: "-" },
    ],
    damageTypeEffectiveness: [
      { key: "Sword", value: "-50%" },
      { key: "Polearm", value: "-50%" },
      { key: "Mace", value: "-50%" },
      { key: "Axe", value: "-50%" },
      { key: "Unarmed", value: "-50%" },
      { key: "Ranged", value: "-50%" },
      { key: "Magic", value: "+100%" },
    ],
    abilities: ["Mimic Other", "Levitation", "Teleportation", "Indominable"],
    inventory: ["Spooky Masks", "Phantom Masks"],

    descriptionSections: [
      {
        sectionName: "Description",
        sectionContent: (
          <>
            <p>
              A variant of the Shadow. He is the highest level NPC in the
              dungeon besides the Twins and gives the second highest XP after
              them.
            </p>
          </>
        ),
      },

      {
        sectionName: "Spawn Locations",
        sectionContent: (
          <>
            <p>Baratheon has a 2% chance to replace any shadow spawn.</p>
          </>
        ),
      },

      {
        sectionName: "Behaviour",
        sectionContent: (
          <>
            <p>Baratheon behaves the same as any other shadow.</p>
          </>
        ),
      },

      {
        sectionName: "Loot",
        sectionContent: (
          <>
            <p>Baratheon drops normal shadow loot and phantom masks.</p>
          </>
        ),
      },

      {
        sectionName: "Affinity",
        sectionContent: (
          <>
            <p>Baratheon has the same affinity as a normal shadow.</p>
          </>
        ),
      },
    ],
  },

  {
    id: "Lilith",
    image: Lilith,
    levelDescription: "Level 10 Demonic",
    stats: [
      { key: "HP", value: "60" },
      { key: "ATK", value: "15" },
      { key: "AC", value: "3" },
      { key: "ATK", value: "-" },
      { key: "SPD", value: "10" },
      { key: "PWR", value: "-" },
    ],
    hardcoreStats: [
      { key: "HP", value: "124 - 140" },
      { key: "ATK", value: "23 - 25" },
      { key: "AC", value: "4" },
      { key: "ATK", value: "-" },
      { key: "SPD", value: "12 - 13" },
      { key: "PWR", value: "-" },
    ],
    damageTypeEffectiveness: [
      { key: "Sword", value: "+20%" },
      { key: "Polearm", value: "-10%" },
      { key: "Mace", value: "-" },
      { key: "Axe", value: "-" },
      { key: "Unarmed", value: "-" },
      { key: "Ranged", value: "-" },
      { key: "Magic", value: "-20%" },
    ],
    abilities: ["Charm Monster", "Teleportaiton"],
    inventory: ["Magicsstaffs of Charm Monster", "Roses"],

    descriptionSections: [
      {
        sectionName: "Description",
        sectionContent: (
          <>
            <p>A variant of Succubi. She is followed by a group of succubi.</p>
          </>
        ),
      },

      {
        sectionName: "Spawn Locations",
        sectionContent: (
          <>
            <p>Lilith has a 2% chance to replace any succubi spawn.</p>
          </>
        ),
      },

      {
        sectionName: "Behaviour",
        sectionContent: (
          <>
            <p>Lilith behaves the same as any other succubi.</p>
          </>
        ),
      },

      {
        sectionName: "Loot",
        sectionContent: (
          <>
            <p>
              Lilith drops magicstaffs of charm monster at a higher rate than
              normal succubi and roses.
            </p>
          </>
        ),
      },

      {
        sectionName: "Affinity",
        sectionContent: (
          <>
            <p>Lilith has the same affinity as a normal succubi.</p>
          </>
        ),
      },
    ],
  },

  {
    id: "Deu_De'Breau",
    image: DeuDeBreau,
    levelDescription: "Level 30 Demonic",
    stats: [
      { key: "HP", value: "120" },
      { key: "ATK", value: "38" },
      { key: "AC", value: "10" },
      { key: "ATK", value: "-" },
      { key: "SPD", value: "10" },
      { key: "PWR", value: "25" },
    ],
    hardcoreStats: [
      { key: "HP", value: "232 - 260" },
      { key: "ATK", value: "65 - 73" },
      { key: "AC", value: "12 - 13" },
      { key: "ATK", value: "-" },
      { key: "SPD", value: "12 - 13" },
      { key: "PWR", value: "25" },
    ],
    damageTypeEffectiveness: [
      { key: "Sword", value: "-10%" },
      { key: "Polearm", value: "-20%" },
      { key: "Mace", value: "-20%" },
      { key: "Axe", value: "-" },
      { key: "Unarmed", value: "-20%" },
      { key: "Ranged", value: "-10%" },
      { key: "Magic", value: "+10%" },
    ],
    abilities: ["Fireball"],
    inventory: ["-"],

    descriptionSections: [
      {
        sectionName: "Description",
        sectionContent: (
          <>
            <p>
              A variant of Demons. He is followed by a group of other demons.
            </p>
          </>
        ),
      },

      {
        sectionName: "Spawn Locations",
        sectionContent: (
          <>
            <p>Deu De'Breau has a 2% chance to replace any demon spawn.</p>
          </>
        ),
      },

      {
        sectionName: "Behaviour",
        sectionContent: (
          <>
            <p>Deu De'Breau behaves the same as any other demon.</p>
          </>
        ),
      },

      {
        sectionName: "Loot",
        sectionContent: (
          <>
            <p>
              Deu De'Breau drops nothing on death. He is still eligable for
              vampire/accursed blood vial drops and fresh meat from the Chefs
              Toque.
            </p>
          </>
        ),
      },

      {
        sectionName: "Affinity",
        sectionContent: (
          <>
            <p>Deu De'Breau has the same affinity as a normal demon.</p>
          </>
        ),
      },
    ],
  },

  {
    id: "Baron_Herx",
    image: BaronHerx,
    levelDescription: "Level 25 Undead",
    stats: [
      { key: "HP", value: "1250" },
      { key: "ATK", value: "-" },
      { key: "AC", value: "8" },
      { key: "ATK", value: "-" },
      { key: "SPD", value: "8" },
      { key: "PWR", value: "25" },
    ],
    hardcoreStats: [
      { key: "HP", value: "2258 - 2510" },
      { key: "ATK", value: "-" },
      { key: "AC", value: "9 - 10" },
      { key: "ATK", value: "-" },
      { key: "SPD", value: "10 - 11" },
      { key: "PWR", value: "25" },
    ],
    damageTypeEffectiveness: [
      { key: "Sword", value: "+150%" },
      { key: "Polearm", value: "+150%" },
      { key: "Mace", value: "+150%" },
      { key: "Axe", value: "+150%" },
      { key: "Unarmed", value: "+80%" },
      { key: "Ranged", value: "+30%" },
      { key: "Magic", value: "-" },
    ],
    abilities: [
      "Lightning Volley",
      "Conjure Hellspawn",
      "Command Darkness",
      "Levitation",
      "Indominable",
      "Dash",
    ],
    inventory: ["Purple Mystic Orb", "Gold"],

    descriptionSections: [
      {
        sectionName: "Description",
        sectionContent: (
          <>
            <p>
              Baron Herx is the primary antagonist of Barony, starting the story
              as a normal baron holding ownership over Hamlet, before evolving
              into a lich and wreaking havoc onto Hamlet, eventually spreading
              his demonic forces outwards and posing as a threat to the world
              that the player must defeat.
            </p>
            <p>
              In as early as the introduction, Baron Herx is shown to be a very
              greedy, power-hungry character driven by gold and profiteering off
              the lands of Hamlet. As a consequence of his obsession of mining,
              he ends up treating the citizens of Hamlet very poorly. Some books
              state that such poor treatment stemmed from the fact that Herx
              enjoyed how poorly he could treat those beneath him.
            </p>
            <p>
              After so much mistreatment, the townsfolk devise a plan to lock
              Baron Herx into the Mines with the promise of gold and leave him
              for dead, which ends up working. Through his sheer hatred to those
              that trapped him, Herx makes a pact with the devil Baphomet and
              becomes a powerful lich upon death. With his powers, he quickly
              summons many monsters to assault Hamlet in revenge for his
              imprisonment, eventually returning to the Ruins as a base of
              operations.
            </p>
            <p>
              When the player enters the story, Herx is able to enter their mind
              and communicate freely with them. Often these are musings about
              the progress of the player, either being mild surprise about
              passing through the first floors of the Mines or being very
              hostile when the player begins entering the Ruins.
            </p>
          </>
        ),
      },

      {
        sectionName: "Herx's Lair",
        sectionContent: (
          <>
            <p>
              Herx's Lair is the final level of the main dungeon in Barony,
              found on the twentieth floor of the dungeon. It is here where the
              player squares off against the main antagonist, Baron Herx, to
              protect the realm at large. The game will end here if the player
              checked the "Enable Classic Endings" game setting.
            </p>
            <p>
              Baron Herx's Lair is simple and straight to the point, the player
              enters from a vacant room and crosses over a long bridge over to a
              sizable arena where progressing inside will shut off the opening
              behind them and unleash Baron Herx, ready to blast the player with
              his magical attacks.
            </p>
            <p>
              Before entering the battle, the player has a second pathway open
              to them. This other path leads to a series of small rooms
              thematically resembling the Swamp, the Ruins, and the Sand
              Labyrinth from left to right, entering from the center Ruin-themed
              room. Each room has a pedestal for the player to place a Mystic
              Orb upon.
            </p>
            <p>
              Each orb fits onto a specific pedestal, corresponding to where the
              orb was originally found. Inserting an orb removes it from the
              player's inventory and they cannot retrieve it from that point
              forward. Doing so also grants the player several stat buffs
              related to the color of each orb. As these rooms are completely
              optional, they can be skipped if the player does not have any of
              the orbs, or would wish to use their orbs for trading with the
              Mysterious Merchant inside Hamlet.
            </p>
          </>
        ),
      },

      {
        sectionName: "Battle",
        sectionContent: (
          <>
            <p>
              Baron Herx primary form of attack is a stream of lightning spell
              blasts.
            </p>
            <p>Herx can summon demonic enemies such as Demons and Imps.</p>
            <p>
              Herx will slowly float towards the player for most of the fight,
              as well as being able to quickly fly away to another part of the
              arena when damaged.
            </p>
            <p>
              At half health, Herx will change the arena by removing most of the
              light, only leaving the center illuminated.
            </p>
            <p>
              After defeating Baron Herx, he drops a Purple Mystic Orb, and a
              pedestal rises out of the center of the arena. Inserting this orb
              will summon a portal, leading the player out of the dungeon and
              into a text scroll, leading into Hamlet and the story content
              added in the Blessed Addition.
            </p>
            <p>
              To prevent being softlocked the player may equip the Purple Mystic
              Orb regardless of if they can normally remove their main hand item
              e.g. Blessed Weapon as a Incubi/Sucubi or a Cursed Weapon as
              anyone else.
            </p>
          </>
        ),
      },
    ],
  },

  {
    id: "Baphomet",
    image: Baphomet,
    levelDescription: "Level 30 Demonic",
    stats: [
      { key: "HP", value: "1500" },
      { key: "ATK", value: "-" },
      { key: "AC", value: "10" },
      { key: "ATK", value: "-" },
      { key: "SPD", value: "-" },
      { key: "PWR", value: "25" },
    ],
    hardcoreStats: [
      { key: "HP", value: "2716 - 3020" },
      { key: "ATK", value: "-" },
      { key: "AC", value: "12 - 13" },
      { key: "ATK", value: "-" },
      { key: "SPD", value: "-" },
      { key: "PWR", value: "25" },
    ],
    damageTypeEffectiveness: [
      { key: "Sword", value: "+100%" },
      { key: "Polearm", value: "+100%" },
      { key: "Mace", value: "+100%" },
      { key: "Axe", value: "+100%" },
      { key: "Unarmed", value: "-" },
      { key: "Ranged", value: "-" },
      { key: "Magic", value: "-" },
    ],
    abilities: [
      "Fireball Spray",
      "Conjure Hellspawn",
      "Conjure SHadows",
      "Hail of Boulders",
      "Indominable",
      "Telepathy",
      "Laval Portal",
    ],
    inventory: ["-"],

    descriptionSections: [
      {
        sectionName: "Description",
        sectionContent: (
          <>
            <p>
              Baphomet is a secret boss in Barony, being fought after the player
              travels to Hell and progresses through three floors of demonic
              hellscape. It is located on the twenty-fourth floor of the
              dungeon, waiting inside a large arena to do battle with the
              player.
            </p>
            <p>
              Baphomet is hidden behind a portal inside the Ruins at the
              eighteenth floor, past the subsequent Underworld portion and past
              three floors of Hell proper. Given how the Underworld is
              generated, as well as the defensive design of the Ruins portal, a
              player must be well suited with some form of levitation to make
              their way to Hell.
            </p>
          </>
        ),
      },

      {
        sectionName: "Battle",
        sectionContent: (
          <>
            <p>
              Once entering the level, Baphomet will immediately begin the
              battle in the center of the arena, screeching out before starting
              the battle. While dueling with the player, Baphomet follows a
              three-phase cycle of attacks, where after completing one attack
              phase, Baphomet submerges into the lava and emerges in a new pool
              to start the next attack. There are special properties to the
              arena itself, such as preventing spells or pickaxes to break
              blocks, and disabling teleportation.
            </p>
            <p>
              <b>Fireball Spray</b> - The first attack after entering the fight,
              Baphomet rises from one of four lava pockets near the corners of
              the arena, followed by a dense spray of fireballs from its hands
              in a fanning motion. While this attack is very deadly at close
              range, the even spread of each fireball at longer ranges allows
              players to dodge by strafing in between fireballs. This attack can
              have several consecutive sprays of fireballs before Baphomet
              proceeds to the next attack.
            </p>
            <p>
              <b>Hail of Boulders</b> - Baphomet rises from one of four lava
              pockets inside the indentations on the outer walls of the arena.
              Here, it calls down three waves of boulders, one covering one half
              of the arena, the second for the other half, and the final wave
              spanning the whole arena. Some boulders are replaced by a
              lava-charred version, which rolls down the arena faster than the
              normal variant, exploding when destroyed similarly to a potion of
              firestorm, as well as ignoring lava pools. Each boulder has a
              one-tile spacing between each, allowing a player to sift past each
              wave. The third wave alternates its orientation from the previous
              waves, so that the tiles which were rolled down by the preceding
              waves of boulders are now safe to stand on, and vice versa for
              previous safe lanes. The lava pools also serve as minor protection
              against the normal boulders, as they will fall into the lava
              instead of rolling towards the player. Since this attack merely
              covers the solid land of the arena, levitating on the outside pits
              of the arena will keep the player safe. To prevent players from
              flying over to Baphomet and wailing on it while the attack runs
              for its full duration, Baphomet casts a protective barrier of
              rotating bloodletting bolts which will rapidly damage anything
              which comes into contact with it. Baphomet also casts out
              fireballs during this attack to further protect itself, as well as
              summoning Imps to the player's position if they are hovering
              outside of the arena's ground.
            </p>

            <p>
              <b>Conjure Hellspawn</b> - The final attack is when Baphomet rises
              from the center of the arena, soon after summoning several demonic
              enemies to the battlefield. A few enemies are immediately summoned
              at the beginning of the fight as well. This list includes Demons,
              Imps and Shadows, allowing the player to be attacked by more
              sources of ranged and melee attacks. The enemies themselves are
              much less dangerous than the devil itself, often only serving as
              distractions to the battle. They can however be used to
              accidentally absorb both of Baphomet's other attacks, so keeping
              them on the field as impromptu meat shields can be a viable
              option. After summoning enemies, Baphomet restarts its cycle,
              proceeding to the next fireball spray. Note: Levitating outside
              the area will cause Baphomet to summon a lot more.
            </p>

            <p>
              <b>Indominable</b> - Baphomet is not affected by knockback, sleep
              and paralysis.
            </p>
            <p>
              <b>Lava Portal</b> - Rather than actually moving around the arena,
              Baphomet will rise from one lava pool to another before activating
              attacks.
            </p>
          </>
        ),
      },

      {
        sectionName: "Aftermath",
        sectionContent: (
          <>
            <p>
              Once Baphomet sinks to its demise, the left wall of the arena
              breaks open and a bridge forms to reveal a path for the players to
              escape by. Simultaneously, two Minotaurs are summoned at the two
              corners opposite to the breach in the wall, now giving chase to
              the player. They can still be killed, but doing so without being
              properly equipped can end disastrously.
            </p>
            <p>
              The pathway outside of the arena is filled with plenty of random
              Hell enemies. While defeating them is not mandatory, their
              presence can impede the player in their flee from the minotaurs.
              At the end of the path, a portal allows the player to exit Hell,
              teleporting them to Hamlet after showing a short text scroll. The
              game will end here if the player checked the "Enable Classic
              Endings" game setting
            </p>
            <p>
              Those who have mapped the level through whichever means may notice
              a chamber in the bottom right of the map. This cannot be accessed
              via digging or teleportation. However, along the northern bridge,
              there is a small passageway across a gap. This leads to a portal
              that takes you to the aforementioned room, where there is an
              easter egg.
            </p>
          </>
        ),
      },
    ],
  },

  {
    id: "Erudyce",
    image: Erudyce,
    levelDescription: "Level 50 Undead",
    stats: [
      { key: "HP", value: "2000" },
      { key: "ATK", value: "-" },
      { key: "AC", value: "20" },
      { key: "ATK", value: "-" },
      { key: "SPD", value: "13" },
      { key: "PWR", value: "25" },
    ],
    hardcoreStats: [
      { key: "HP", value: "3616 - 4020" },
      { key: "ATK", value: "-" },
      { key: "AC", value: "23 - 25" },
      { key: "ATK", value: "-" },
      { key: "SPD", value: "15 - 17" },
      { key: "PWR", value: "25" },
    ],
    damageTypeEffectiveness: [
      { key: "Sword", value: "+50%" },
      { key: "Polearm", value: "+50%" },
      { key: "Mace", value: "+50%" },
      { key: "Axe", value: "+50%" },
      { key: "Unarmed", value: "+20%" },
      { key: "Ranged", value: "+50%" },
      { key: "Magic", value: "-50%" },
    ],
    abilities: [
      "Cold",
      "Levitation",
      "Telepathy",
      "Indominable",
      "Magic Missile Volley",
      "Blood Field",
      "Teleport",
      "Command Automaton",
    ],
    inventory: ["Magicstaff of Cold", "Magus Headdress"],

    descriptionSections: [
      {
        sectionName: "Description",
        sectionContent: (
          <>
            <p>
              Erudyce is one of the 2 final bosses on floor 35. She, along with
              her brother Orpheus, were the arch-wizards of the magician's
              guild.
            </p>
            <p>
              Orpheus and Erudyce are two central antagonists in Barony, serving
              as the reigning Archmagisters of the Magician's Guild, as well as
              being the two liches fought at the end of the game. Orpheus
              specializes in melee combat and fire magic, while Erudyce
              specializes in ranged combat and ice magic.
            </p>
            <p>
              The Archmagisters are a duo of two siblings Orpheus and Erudyce,
              both serving over the Magician's Guild from the beginning of the
              story, interacting with Baron Herx before he was trapped. During
              Herx's overthrow, the Archmagisters went into the Crystal Caves to
              begin their own plotting to gain power and overtake the realm.
            </p>
            <p>
              They are well revered by their guild-mates, due to their covert
              nature of their plans and the general good faith they had
              generated within the guild. During their time in the Caves, their
              work towards attaining more power resulted in the creation of
              increasingly powerful demonic creatures. The Magician's Guild had
              to seal away the caves in the meantime to protect Hamlet, unaware
              of what their leaders were doing.
            </p>
            <p>
              Only when the player defeats Baron Herx or Baphomet are they able
              to break that barrier and begin making their way towards Orpheus
              and Erudyce, where the true colors of the siblings begin to show.
            </p>

            <h3>Orpheus</h3>
            <p>
              Being the more assertive of the archmagisters, Orpheus is the
              "brawn" to his sister's "brains" in their operations, often
              described in a similar manner by Magician Guild members.
            </p>
            <p>
              Orpheus's chatter throughout the caves and the citadel are often
              marred by a blunt and often rude tone, frequently degrading the
              player to commoner, servant, or outright nothing when first
              entering the caves. He also shares similar sentiments towards the
              other guild members, since it was his idea to exclude other guild
              members from their plans.
            </p>

            <h3>Erudyce</h3>
            <p>
              Where Orpheus is the more brash and more open of the two siblings,
              Erudyce is very much a cunning and sly character in comparison.
              Like her brother, she sees most other living beings in both the
              guild and the player as beneath both her and her brother.
            </p>
            <p>
              Erudyce demonstrates some basic compassion and patience in her
              messages at times, giving the Kobolds some leeway when Orpheus
              challenges their deals in the Caves, as well as suggesting to
              introduce themselves to the player once the barrier is opened.
              However, the likelihood of these messages being hollow and
              centered only towards furthering her own causes are high given how
              her character develops after proceeding to the end of the Citadel.
            </p>
          </>
        ),
      },

      {
        sectionName: "The Sanctum",
        sectionContent: (
          <>
            <p>
              The Sanctum is the final level of the Citadel in Barony, found on
              the thirty-fifth floor of the dungeon where the player confronts
              both Orpheus and Erudyce to thwart their plans at conquering the
              realms with their demonic strength.
            </p>
            <p>
              It's a massive arena dotted with several pools of lava and water,
              with several pillars inside the arena to use as cover. The arena
              itself uses most of the Citadel theme, with a lot of emphasis on
              teals, blues and brass colors across the whole of the arena,
              topped with an open stormy sky above. The players begin the floor
              outside the main arena, on a long and narrow bridge leading to the
              battle proper.
            </p>
            <p>
              There are also two small off-shoots on both sides of the arena
              near where the battle commences, filled with bookcases and
              pistons. These areas are largely unimportant and used mostly for
              aesthetics. To prevent players from getting stuck once the walls
              of the arena shut these areas off, a portal can be found in each
              to teleport the player into the arena.
            </p>
            <p>
              The room itself is protected from pickaxes and spells of digging,
              as the walls are immaculate and perfectly resistant to breaking in
              order to prevent cheating by expanding the arena unnaturally or to
              accessing the end portal before the fight itself is over.
              Similarly, Teleportation of any kind is restricted for the same
              reasons.
            </p>
          </>
        ),
      },

      {
        sectionName: "Battle",
        sectionContent: (
          <>
            <p>
              Once the player enters far enough into the arena itself, the walls
              behind the player close off and the archmagisters Orpheus and
              Erudyce begin their attacks on the player.
            </p>
            <p>
              Like Baron Herx during his battle, both Orpheus and Erudyce float
              across the arena, ignoring the large pit in the center and the
              pools of lava and water. They will dash across the field when the
              player attempts to flee from them, often returning to a normal
              pace once they enter a suitable distance from the player. They can
              also use this dash to escape the player if they end up being
              attacked too quickly. Both liches are permanently protected by
              magic reflection of each other's attacks, with player-cast spells
              registering as normal.
            </p>
            <p>
              As their health depletes, both liches have the ability to teleport
              away from the player and begin to unleash a barrage of magic
              attacks from a set position in the arena. While attacking, the
              casting lich will be protected by a ring of bloodletting spells,
              dealing high amounts of damage if a player enters its
              circumference. Orpheus teleports randomly to one of the three lava
              pools on the outskirts of the arena, while Erudyce will always
              teleport to the center of the arena.
            </p>

            <h3>Orpheus</h3>
            <p>
              Orpheus attacks the player with his crystal sword for heavy damage
              with a chance to inflict bleed on the player, frequently swarming
              their target in close quarters combat and preferring to stay very
              close to the player when using dashes. When the player is close
              but out of melee range, he can cast some spells when chasing the
              player. Fireballs and bloodletting are the attacks of choice, also
              able to cast Vampiric Aura once Erudyce has been killed.
            </p>
            <p>
              He can charge up several attacks when close enough to the player,
              either unleashing a small rain of eight fireballs in a circle
              around his position, or a heavy cleave with his sword to deal high
              damage to his target.
            </p>
            <p>
              When in casting mode, Orpheus can fire off fireballs in several
              distinct styles. He can fire off a single fireball, a volley of
              two fireballs, three fireballs simultaneously with the additional
              fireballs angled away from the direct shot, and a rain of
              fireballs which land in a straight line towards the player. He can
              also fire off a single bolt of bloodletting, as well as ending the
              casting with a short ranged ring of falling fireballs. If Erudyce
              is dead, this ending can instead be a casting of Vampiric Aura to
              start melee combat with.
            </p>

            <h3>Erudyce</h3>
            <p>
              Erudyce attacks with her staff of cold, slowing down the player
              and chipping away at their health from a safe distance, making
              good use of her dashes to keep out of range of the player's melee
              for most of the fight.
            </p>
            <p>
              She also has an arsenal of spells that she can use to be a greater
              source of damage, using a three-bolt cluster of Magic Missile
              shots that she casts above her head. This attack is given a visual
              cue of large pink particles around her, able to hit the player
              with one or all of the bolts if they are close enough, but the
              downward trajectory effectively limits the attack's range. She can
              also cast Slow, and single bolts of Drain Soul to regain health.
            </p>
            <p>
              Like Orpheus, she can charge up an attack when the player is in
              close proximity, launching a ring of eight bolts of cold outwards.
              When Orpheus is gone, this attack is upgraded to use bolts of
              drain soul instead.
            </p>
            <p>
              When in casting mode, Erudyce begins casting a barrage of magic
              missiles towards the player. These attacks are best dodged at a
              distance, or by standing behind a pillar as cover, as the missiles
              are very accurate due to Erudyce's ability to mix bolts aimed
              directly at the player with bolts that aim where she expects the
              player to move.
            </p>

            <h3>After Defeating one Lich</h3>
            <p>
              Once the player defeats one of the two liches, the surviving lich
              will become enraged, saying a line of dialogue and continuing to
              battle the player. Some new spells open up to the surviving lich,
              allowing them to heal off damage with Vampiric Aura or Drain Soul
              for Orpheus and Erudyce respectively.
            </p>
            <p>
              Every time a lich teleports to begin firing off their spells, they
              can also summon several Corrupt Automatons to assist them in
              battling the player. These Automatons are initially hostile to the
              player, equipped with steel boots of levitation, a red cloak, and
              a weapon with appropriate offhand items to create three possible
              variants.
            </p>
            <ul>
              <li>
                A melee variant equipped with a crystal spear and a steel
                shield.
              </li>
              <li>
                A ranged variant equipped with a shortbow and piercing arrows.
              </li>
              <li>
                A magic variant equipped with a staff of lightning and a crystal
                shield.
              </li>
            </ul>
            <p>
              Each Automaton's weapons are prone to degrading, so an automaton
              with a staff will eventually be wielding only its shield. The
              items equipped by these Automatons will not drop upon their death.
            </p>

            <h3>Aftermath</h3>
            <p>
              Once both Orpheus and Erudyce are defeated, the back wall of the
              arena will be destroyed, revealing a portal for the player to walk
              through. Any remaining Corrupt Automatons will also be instantly
              destroyed. Interacting with the portal will congratulate the
              player with the ending of the game, saving their statistics and
              deleting their file.
            </p>
          </>
        ),
      },
    ],
  },
];

/* 

{
        sectionName: "Description",
        sectionContent: 
        <>
        
        </>
      },

      */

/*

{
    id: "",
    image: ,
    levelDescription: "Level ",
    stats: [
      { key: "HP", value: "-" },
      { key: "ATK", value: "-" },
      { key: "AC", value: "-" },
      { key: "ATK", value: "-" },
      { key: "SPD", value: "-" },
      { key: "PWR", value: "-" },
    ],
    hardcoreStats: [
      { key: "HP", value: "-" },
      { key: "ATK", value: "-" },
      { key: "AC", value: "-" },
      { key: "ATK", value: "-" },
      { key: "SPD", value: "-" },
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
    {
    sectionName: "Description",
        sectionContent: 
        <>
          <p>
            
          </p>
        </>
      },
  ]
},

*/
