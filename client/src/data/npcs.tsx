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
    {
    sectionName: "Description",
        sectionContent: 
        <>
        
        </>
      },
  ]
},

*/
