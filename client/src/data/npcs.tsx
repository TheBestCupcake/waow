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
