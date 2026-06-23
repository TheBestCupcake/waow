import type { ReactNode } from "react";
import HumanImage from "../assets/Barbarian_Human_Male.png";
import SkeletonImage from "../assets/Skeleton_Conjurer_Male.webp";
import VampireImage from "../assets/Vampire_Accursed_Male.webp";
import SuccubusImage from "../assets/Succubus_Mesmer_Female.webp";
import GoatmanImage from "../assets/Goatman_Brewer_Male.webp";
import AutomatonImage from "../assets/Automaton_Mechanist_Male.webp";
import IncubusImage from "../assets/Incubus_Punisher_Male.webp";
import GoblinImage from "../assets/Goblin_Shaman_Male.png";
import InsectoidImage from "../assets/Insectoid_Hunter_Male.webp";
import GnomeImage from "../assets/300px-Bard_Gnome.webp";
import GremlinImage from "../assets/300px-Sapper_Gremlin.webp";
import DryadImage from "../assets/300px-Scion_Dryad.webp";
import MyconidImage from "../assets/300px-Hermit_Myconid.webp";
import SalamanderImage from "../assets/300px-Paladin_Salamander.webp";

export type RaceFeatures = {
  category: string;
  items: string[];
};

export type RaceSection = {
  sectionName: string;
  sectionContent: ReactNode;
};

export type RaceData = {
  id: string;
  raceFeatures: RaceFeatures[];
  characterImageDescription: string;
  characterImage: string;

  raceSections: RaceSection[];
};

export const races: RaceData[] = [
  {
    id: "Human",

    raceFeatures: [
      {
        category: "Traits",
        items: ["Welcomed by Shopkeepers", "Faster swimming (12.5%)"],
      },
      { category: "Resistances", items: ["None"] },
      { category: "Weaknesses", items: ["None"] },
      { category: "Friendly With", items: ["Humans", "Automatons"] },
    ],
    characterImageDescription: "A Human Barbarian",
    characterImage: HumanImage,

    raceSections: [
      {
        sectionName: "",
        sectionContent: (
          <>
            <p>
              Humans are the base character race in Barony, being the only
              option since the beginning of the game until the Myths and
              Outcasts DLC. They serve as the well-rounded basic ethnicity
              option, with no major gimmicks and serving very much as an even
              playing field compared to other race options.
            </p>
          </>
        ),
      },

      {
        sectionName: "Description",
        sectionContent: (
          <>
            <p>
              As the base race of the game, Humans work very well as a
              "jack-of-all-trades" race, where other races will specialize
              towards only one kind of playstyle. So while no particular
              playstyle is favored, none are inhibited by downsides. Unorthodox
              combinations of playstyles can be more easily achieved where other
              races may create complications.
            </p>
            <p>
              Humans are able to choose any class from the Character Creator
              phase, being able to bypass the restriction of needing that class'
              monster to complete the main game in order to be used for other
              races. This allows players to test out all the classes with a
              simpler race, so that intricacies can be worked out before
              combining a class' items and proficiencies with a monster race's
              major gimmicks.{" "}
            </p>
            <p>
              Unrelated to general gameplay, Humans are granted the largest
              range of customization for player models out of any other race,
              able to display 18 different human appearances for both male and
              female options, as well as having the option to play monster
              ethnicities without their stats and only as their aesthetic model,
              effectively playing as a human.{" "}
            </p>
          </>
        ),
      },

      {
        sectionName: "Social Standings",
        sectionContent: (
          <>
            <p>
              While not bolstered by any overt gimmicks or bonuses like other
              monster races, Humans find their strength in how well they can
              find new party members deep within the dungeon, as well as being
              able to partake in trading without being discriminated against.
              While finding humans are often rare to find in the dungeon at
              random, there are often scripted microstructures which feature a
              few guaranteed humans.{" "}
            </p>
            <p>
              Humans can be found throughout the dungeon, able to spawn in from
              the very beginning of the Mines to the end of the Caves. There is
              a notable lack of recruitable humans in the Citadel, so stocking
              up in the proceeding floors can be helpful.
            </p>
            <p>
              Not all humans are the same however, on rare occasions normal
              humans are replaced with a Named Human. These Named Humans are
              generally stronger than their generic counterparts, often equipped
              with rare artifacts, items with high levels of blessing, or the
              ability to cast spells. As a human, these NPCs make for fantastic
              party members, often able to hold their own much more effectively
              than a normal human can.
            </p>
            <p>
              Shopkeepers are also a great asset for humans to interact with,
              trading in their accumulated gold for items, and possibly even
              selling some less useful items to spend on a larger purchase.
              While monsters are able to use potions of polymorph to circumvent
              their own limitations here, they can only have so many potions to
              use at a time, where humans do not need to rely on such items to
              initiate trade.
            </p>
            <p>
              Notable locations for human recruitment include Minetown and
              Hamlet. Minetown presents a large population of humans to recruit,
              able to fill out several player's parties once they leave for the
              proceeding floors, with four merchants to browse and potentially
              trade with.
            </p>
            <p>
              Hamlet also has many humans to both talk to and to recruit, with
              eight predetermined stores to browse. Of the potential
              recruitment, the most notable candidates are with "The Heroes".
              This group of nameless NPCs referred only by their title are
              readily equipped with armor, weapons, and even accessories such as
              amulets or rings, making them a great pick-up for starting the
              Caves. At worst, they are great for tanking a lot of damage and if
              killed early on, the items they drop can be used for the player's
              use.
            </p>
          </>
        ),
      },
    ],
  },

  {
    id: "Skeleton",

    raceFeatures: [
      {
        category: "Traits",
        items: [
          "Does not Hunger or Starve",
          "HP and MP Regeneration reduced by 75%",
          "Self-Resurrects for 75 MP",
          "Immune to Burning",
          "Immune to Strangulation",
          "Immune to Bleed",
          "Swim speed reduced by 50%",
        ],
      },
      {
        category: "Resistances",
        items: ["Swords (50%)", "Ranged (50%)", "Axes (20%)", "Magic (20%)"],
      },
      {
        category: "Weaknesses",
        items: ["Maces (40%)", "Polearms (30%)", "Unarmed (10%)", "Smite"],
      },
      { category: "Friendly With", items: ["Ghouls", "Automatons"] },
    ],
    characterImageDescription:
      "A skeleton as its signature class, the Conjurer",
    characterImage: SkeletonImage,

    raceSections: [
      {
        sectionName: "",
        sectionContent: (
          <>
            <p>
              Skeletons are a monster race option in Barony, introduced in the
              Myths and Outcasts DLC alongside three other monster races. It
              serves as a very slow playing archetype, enabling the player to
              take their time on floors for maximum yield at the cost of
              effective HP and MP regeneration.{" "}
            </p>
          </>
        ),
      },

      {
        sectionName: "Description",
        sectionContent: (
          <>
            <p>
              Skeleton has potential for clearing out floors without the need to
              work around Hunger. This allows games to easily balloon in the
              time they take, as well as letting a player play without much
              urgency of being penalized by hunger if they are taking too long.
              However, the lack of food comes at a massive drawback of health
              and mana regeneration being quartered compared to normal races,
              making a skeleton's ability to take their time a complete
              necessity if the player is hit too much, as regenerating damage
              takes quite a while otherwise.{" "}
            </p>
            <p>
              Playing as a caster and a Skeleton may be challenging, given the
              reduced mana regen. However, playing towards classes with high
              levels of mana can serve a Skeleton really well, since if they
              have 75 mana and are killed, they are instead revived and have any
              remaining mana emptied. It allows items such as Potions of Restore
              Magic to function as makeshift amulets of Life Saving Lifesaving
              Icon.png. When playing as a Conjurer, if the Skeleton Ally is
              currently summoned, they will automatically be banished when the
              player dies returning some mana as normal, which can be used to
              potentially revive the player.{" "}
            </p>
            <p>
              When swimming in water, movement speed is further reduced for a
              skeleton, making any form of water walking Water Walking Icon.png
              a useful asset
            </p>
          </>
        ),
      },

      {
        sectionName: "Hunger",
        sectionContent: (
          <>
            <p>
              Unlike every other race in the game, Skeletons lack the need to
              consume any food throughout their exploration of the dungeon,
              remaining at a stable hunger level for a majority of the
              playthrough. Attempting to consume any food as a Skeleton merely
              drops the food item, unlocks a Steam achievement and displays a
              status message: "Skeletons have no use for food!". Oddly, They are
              allowed to drink liquids, so fruit juice and alcohol can help with
              their slow regeneration, as well as (non-blessed) water if really
              needed.{" "}
            </p>
            <p>
              Potions of Polymorph can let them experience food-related drain
              and consumption again, as well as gaining another Steam
              achievement.
            </p>
            <p>
              While polymorphed, Skeletons can receive debuffs from starving and
              overeating, just like other races. Should a Skeleton player revert
              form while hungry, weak, or starving, the debuff will be remain
              indefinitely. Overeating and having the Oversatiated! debuff will
              disappear upon reverting form.
            </p>
            <p>
              Since Skeletons cannot increase or decrease their hunger, this
              results in a permanent stat debuff. The only work-around to this
              is consuming a Potion of Polymorph to become human again. From
              there, the player can fix the debuff by consuming food as normal.
            </p>
            <p>
              *Confirmed only by forcibly reverting form via drinking bottled
              water. Unsure if having Oversatiated! while using the spell Revert
              Form or when the potion/spell naturally runs out will also
              automatically remove the Oversatitated! debuff. Previous
              information stated that Skeletons could increase their hunger via
              fruit juice and bottled water, often resulting in a fixed
              Oversatiated! debuff. However, this no longer appears to be the
              case. In a test game, consuming nearly a hundred potions of fruit
              juice and bottled water had zero effect on hunger levels and
              accompanying debuffs.
            </p>
            <p>
              When Hunger is disabled in game settings can actually eat to
              restore health.
            </p>
          </>
        ),
      },

      {
        sectionName: "Social Standings",
        sectionContent: (
          <>
            <p>
              In terms of whom they can affiliate with, Skeletons have limited
              access compared to some other races. They can align with
              Automatons like all other races, as well as Ghouls. This may seem
              limited, but works very well given the role of Ghouls and how they
              are spread throughout the dungeon.
            </p>
            <p>
              Gravestones can be commonly found in the Mines and Swamp, so
              interacting with it may disturb the undead and gain the player a
              new tanky ally early on. Alternatively, locations such as The
              Haunted Castle use Ghouls as its main threat, making a Skeleton's
              trip there an easy breeze and an excellent spot to pick up some
              strong allies in enslave ghouls. Even as far a Bram's Castle, the
              player can still make some friends with the Ghoul Chef, and second
              floor is full of enslaved ghouls only one floor away from the
              final boss fight.
            </p>
            <p>
              Since Skeletons are a monster race, they are targeted by both
              Humans and Shopkeepers, requiring a fight or a quick escape if
              they see the player.
            </p>
          </>
        ),
      },
    ],
  },

  {
    id: "Vampire",

    raceFeatures: [
      {
        category: "Innate Spells",
        items: ["Bloodletting", "Levitation"],
      },
      {
        category: "Traits",
        items: [
          "Uses HP when out of MP to sustain spells",
          "Can only sustain hunger with blood vials",
          "Kills may drop blood vials",
          "Bloodletting / Assassinate kills drop blood vials",
          "Immune to charm",
        ],
      },
      {
        category: "Resistances",
        items: ["Swords (20%)", "Ranged (50%)", "Axes (20%)", "Magic (20%)"],
      },
      {
        category: "Weaknesses",
        items: ["Maces (20%)", "Polearms (10%)", "Water", "Smite"],
      },
      { category: "Friendly With", items: ["Vampires", "Automaton"] },
    ],
    characterImageDescription:
      "A vampire as its signature class, the Accursed.",
    characterImage: VampireImage,

    raceSections: [
      {
        sectionName: "",
        sectionContent: (
          <>
            <p>
              Vampires are a character race in Barony, introduced in the Myths
              and Outcasts DLC. Vampires inherently possess bloodletting
              Bloodletting Icon.png, levitation Levitation Icon.png, and the
              ability to perform blood magic. Vampires may be hampered by their
              unique diet, as well as their aversion to bodies of water. Because
              they are undead, vampires are vulnerable to smite damage and holy
              water.{" "}
            </p>
            <p>
              Ordinary food is inedible to vampires, and will invariably cause
              sickness. Instead, vampires drink blood to survive.
            </p>
            <p>
              Water will sear the flesh of a vampire on contact for high damage.
              This includes contact through swimming, drinking, and thrown
              potions. Levitation allows vampires to avoid water hazards, which
              can be especially helpful in the Swamp.
            </p>
            <p>
              Vampires are capable of blood magic. When a vampire's mana has
              been depleted, they can draw from their health pool to cast spells
              instead.
            </p>
            <p>
              Unarmed attacks from vampires have a 10% chance to inflict
              bleeding on hit.
            </p>
          </>
        ),
      },

      {
        sectionName: "Hunger / Blood vials",
        sectionContent: (
          <>
            <p>
              Vampires must drink blood to sustain their hunger. Blood vials
              will only drop if at least one person on the team is a vampire or
              the accursed class.
            </p>
            <p>
              Entities without "blood" won't drop blood vials. This includes
              slimes, skeletons, crystal golems, shadows, automata, and
              tinkering creations.
            </p>

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

            <p>*Only one roll for a bonus vial can occur. </p>
            <p>
              While polymorphed into a human, vampires may consume food like
              normal, and will be sickened by any blood they consume.{" "}
            </p>
          </>
        ),
      },

      {
        sectionName: "Social Standings",
        sectionContent: (
          <>
            <p>
              Vampires are only friendly with other vampires and automata. As
              such, vampires will not have many allies available until the
              Citadel. Young vampires have a small chance to appear in the
              Ruins, and they may also be recruited by a vampire player.
            </p>
            <p>
              Because vampires are monsters, they are natural enemies to both
              humans and shopkeepers.
            </p>
          </>
        ),
      },
    ],
  },

  {
    id: "Succubus",

    raceFeatures: [
      {
        category: "Innate Spells",
        items: ["Teleport", "Polymorph"],
      },
      {
        category: "Traits",
        items: [
          "Cursed equipment can be removed; gives bonuses",
          "Blessed equipment is not removable; gives bonuses",
          "Can learn spells from cursed Spellbooks",
          "+MP from Strangulation",
          "Able to recruit Drunk Drunk Icon.png/ Confused Confuse Icon.png Humans",
        ],
      },
      { category: "Resistances", items: ["Magic (20%)", "Polearms (10%)"] },
      { category: "Weaknesses", items: ["Swords (20%)", "Smite"] },
      { category: "Friendly With", items: ["Succubi", "Incubi", "Automatons"] },
    ],
    characterImageDescription: "A succubus as its signature class, the Mesmer",
    characterImage: SuccubusImage,

    raceSections: [
      {
        sectionName: "",
        sectionContent: (
          <>
            <p>
              Succubus are a monster race option in Barony, introduced in the
              Myths and Outcasts DLC alongside three other monster races. They
              present a flipped view of the equipment system, using curses as
              blessings and vice versa, as well as having several unique spells
              that allow a Succubus to scatter on command or sift into the crowd
              if need be.
            </p>
          </>
        ),
      },

      {
        sectionName: "Description",
        sectionContent: (
          <>
            <p>
              Succubus has the major gimmick of inverting curses and blessings.
              When the player equips any weapon or equipment with that is
              cursed, the associated curse level has its penalties negated and
              instead grant bonus damage or AC, as well as being freely
              unequippable. Blessed items will still provide their bonuses, but
              cannot be removed once equipped (unless Polymorphed), like any
              normal race reacts with cursed items.
            </p>
            <p>
              As a result, most artifact weapons will become harder to handle
              since they are blessed by default. There is a way to curse items
              which have been blessed however, requiring either cursed bottles
              of water, or brewing up bottles of water with a cursed alembic.
            </p>
            <p>
              Starting a game with a Succubus also provides two innate spells
              for them to use: Teleport and Polymorph. Teleport is a very random
              movement option, with a high Mana cost and inconsistent
              performance by placing the player in any open space of the
              dungeon. Still, it is best used as a method to rapidly escape from
              danger's reach and survive another day, or for possibly accessing
              a blocked area. Polymorph allows the Succubus to be very
              flirtatious with Humans, as well as shuffle blessed gear at any
              time which would otherwise be stuck onto the player.
            </p>
          </>
        ),
      },

      {
        sectionName: "Social Standings",
        sectionContent: (
          <>
            <p>
              As a demonic creature, Succubus can recruit other Succubus and
              their male counterpart, the Incubus. Technically speaking, this
              allows a lucky player to have potential access to new party
              members throughout the dungeon, directly tied to the presence of
              Fountains in most dungeon levels and their low chance of spawning
              either Succubus or Incubi to recruit. Taking a trip to Hell can
              also help a Succubus form a party, as both Succubus and Incubi
              wander those portions of the dungeon naturally.
            </p>
            <p>
              Areas such as the Caves or the Citadel also show to have Incubi
              wandering the floors naturally. Plus, Bram's Castle is home to
              three powerful Succubus found inside the second floor of that
              area, whom cast bolts of bloodletting.
            </p>
            <p>
              Since Succubus are a monster race, they are naturally targeted by
              both Humans and Shopkeepers, requiring a fight or a quick escape
              if they see the player.
            </p>
            <p>
              If out of Polymorph form, cunning Succubus can use potions of
              Confusion or Bottles of Booze to inflict a human target, before
              sneaking up and converting them to their party. If the human sees
              the player as they approach, combat will ensue and only breaking
              line of sight will allow the Succubus to convert the human happily
              to their troupe.
            </p>
          </>
        ),
      },

      {
        sectionName: "Trivia",
        sectionContent: (
          <>
            <p>Succubus can only be selected as a female character.</p>
            <p>
              Attempting to toggle to Male will instead change to the Incubus
              race if the player also owns the Legends and Pariahs DLC.
            </p>
            <p>
              Attempting to toggle without the DLC will instead merely select
              the Human male.
            </p>
          </>
        ),
      },
    ],
  },

  {
    id: "Goatman",

    raceFeatures: [
      {
        category: "Traits",
        items: [
          "Afflicted with Alcoholism, causing Hangovers",
          "+STR/CON/Damage Resist/Free Action while Drunk",
          "Can recruit fellow Drunks",
          "Eats Tins without Opener",
          "Immune to Greasy effect",
          "May find bonus potions interacting with fountains",
        ],
      },
      { category: "Resistances", items: ["Swords (10%)"] },
      {
        category: "Weaknesses",
        items: ["Magic (40%)", "Polearms (10%)", "Axes (10%)", "Ranged (10%)"],
      },
      { category: "Friendly With", items: ["Goatmen", "Automatons"] },
    ],
    characterImageDescription: "A goatman as its signature class, the Brewer",
    characterImage: GoatmanImage,

    raceSections: [
      {
        sectionName: "",
        sectionContent: (
          <>
            <p>
              Goatmen are a monster race option in Barony, introduced in the
              Myths and Outcasts DLC alongside three other monster races.
              Afflicted with intermittent hangovers, they are granted a slew of
              various bonuses to allow for some unconventional modes of playing
              through the dungeon.
            </p>
          </>
        ),
      },

      {
        sectionName: "Description",
        sectionContent: (
          <>
            <p>
              As alcohol enthusiasts, Goatmen begin each game black out drunk
              for a few seconds before waking up in a hungry and hung-over
              state. Hangovers are the major gimmick and drawback of the class,
              pressuring the player to constantly consume more bottles of booze
              in order to remove negative status effects for a moderate period
              of time, also granting them a boost in strength, constitution,
              charisma, and armor class.
            </p>
            <p>
              While affected by the status effect "hangover", the player suffers
              -3 DEX, as well as having their crosshair sway side-to-side,
              similar to the effect that other races experience while under the
              "drunk" status effect. The hangover status effect can be cured by
              getting drunk or using spells or potions of Cure Ailment.
            </p>
            <p>
              While drunk, Goatmen gain a +4 STR, +4 CON, +4 CHR -2 DEX -8 INT
              or +/- 25%, whichever is more impactful, as well as additive -20%
              to all received damage and the free action status effect making
              them immune to sleep, slow and paralysis. Goatmen are immune to
              vomiting from booze, and for them the status effect lasts 150-210
              seconds compared to the normal duration of 40-60 seconds. The
              crosshair sway also gets removed while drunk for Goatmen contrary
              to what happens to other races.
            </p>
            <p>
              To fuel their functional alcoholism, Goatmen can yield an
              additional one to three potions from Fountains when they drink or
              collect water from them, the number and type randomly determined
              between 0 and 3.
            </p>
            <p>
              Being part goat, Goatmen can consume tin cans even without a tin
              opener. They are also immune to the greasy status effect, so
              Goatmen do not even require a towel to remove the status effect
              after consuming tin cans. This can be quite helpful since the
              consumption of Tin Cans would not require extra inventory space,
              either for a tin opener or a towel.
            </p>
          </>
        ),
      },

      {
        sectionName: "Social Standings",
        sectionContent: (
          <>
            <p>
              Goatmen NPCs are only found in Hell and in the Citadel. As such,
              Goatmen NPCs are difficult to ally with early on in the dungeon,
              but players may use Polymorph to temporarily become able to ally
              with Humans, a far more common type of NPC in the dungeon.
            </p>
            <p>
              However, Goatmen are functionally alcoholic party animals. While
              Humans will attack Goatmen on sight as they do any other monster
              race, they can be persuaded by throwing a bottle of booze at them
              while being drunk. After breaking the line of sight to dispel
              aggression, the Goatmen can now recruit drunk Humans after
              sneaking up behind them and interacting with them. Strangely, they
              can also recruit with drunk Goblins, Incubus, and Succubus,
              allowing for more (yet random) allies in the dungeon.
            </p>
            <p>
              Since Shopkeepers are deeply discriminatory against Goatmen, they
              will still consider Goatmen as enemies and attack on sight, even
              when under the influence of alcohol.
            </p>
          </>
        ),
      },
    ],
  },

  {
    id: "Automaton",

    raceFeatures: [
      {
        category: "Innate Spells",
        items: ["Salvage"],
      },
      {
        category: "Traits",
        items: [
          "Requires Heat (HT) to survive and cast spells",
          "Regen HT with a hot boiler fueled by gems and paper",
          "Can remove cursed items",
          "Immune to Burning",
          "Immune to Bleed",
          "+20 to Tinkering Repairs",
          "Welcomed by Shopkeepers",
        ],
      },
      { category: "Resistances", items: ["Ranged (20%)", "Unarmed (20%)"] },
      {
        category: "Weaknesses",
        items: ["Maces (40%)", "Axes (30%)", "Magic (20%)"],
      },
      { category: "Friendly With", items: ["Automatons", "Humans"] },
    ],
    characterImageDescription:
      "An Automaton as its signature class, the Mechanist",
    characterImage: AutomatonImage,

    raceSections: [
      {
        sectionName: "",
        sectionContent: (
          <>
            <p>
              Automatons are a monster race option in Barony, introduced in the
              Legends and Pariahs DLC alongside three other monster races. They
              use Heat instead of mana to cast spells, being intrinsically tied
              to their heavily modified hunger system to use certain items
              rather than actual food.{" "}
            </p>
          </>
        ),
      },

      {
        sectionName: "Description",
        sectionContent: (
          <>
            <p>
              Automatons follow a similar path to that of the Insectoid, where
              both their mana and hunger systems have been radically modified to
              allow for differing playstyles while complicating others that
              Humans would have no issues with. To keep themselves running, they
              feed items into their Boilers, which denies most normal forms of
              food in favor of a vastly different palette.
            </p>
          </>
        ),
      },

      {
        sectionName: "Heat and Fuel",
        sectionContent: (
          <>
            <p>
              Automatons do not use normal food items, but instead use
              alternative sources to fuel their boilers, which represent their
              food and hunger levels. Automatons have slightly different boiler
              levels than normal races have with hunger. Automatons reach
              "Critical" boiler status at 300 (being similar to "Starving") and
              reach "Superheated" boiler status at 1200, which grants unique
              bonuses.
            </p>
            <p>
              Automatons get some unique bonuses to their boiler (hunger)
              degradation when playing in a group. The 0.8x slower hunger (fuel)
              loss that applies during a three player game and the 0.67x slower
              hunger (fuel) loss that applies during a four player game are both
              doubled for an automaton. These bonuses stack with other effects
              that slow down a character's metabolism.
            </p>
            <p>
              Automatons have a value called Heat (HT) which is their equivalent
              of mana. An automaton with a well fueled boiler will gain HT,
              while an automaton with a critical or empty boiler will lose HT. A
              boiler below critical fuel level will cause Heat loss and stat
              penalties, however the character will not start taking damage from
              "hunger" until both their boiler and their HT bars are completely
              empty. In this way, an automaton can avoid death from starvation
              by using mana potions. The rapid heat loss due to an empty boiler
              makes this a very inefficient strategy.
            </p>
            <p>
              Automatons cannot vomit, akin to the Skeleton race, instead having
              a mode of over-saturation known as "super heated". In this state,
              an Automaton will generate Heat faster and keep the boiler on max
              for its duration until returning to normal values again.
            </p>
            <p>Items that can be consumed by Automatons include:</p>
            <ul>
              <li>Gemstones & Rocks </li>
              <li>Scrolls</li>
              <li>Non-magic Books</li>
              <li>Scrap Metal</li>
            </ul>
            <p>
              Certain items within the Automaton's diet have special properties.
              Consuming either form of scrap will never produce enough heat to
              reach superheat. Blessed gemstones and books will also provide
              instant boosts to the player's Heat alongside fueling the boiler.
              Separate from all other types of scrolls, Scrolls of Fire will
              instantly superheat the Automaton's boiler, effectively serving as
              a full meal. Other fire effects can also fuel an automaton's
              boiler, such as lava, however this may cause damage to the
              Automaton depending on the heat source and the character's
              resistances to fire. Notably, the Mechanist class begins the game
              with an apron that protects the character from the fire status
              effect.
            </p>
            <p>
              Because food and boiler levels operate within the same system, any
              transformation between an Automaton and any other form will
              preserve the boiler level as a food level, and vice versa.
            </p>
            <b>Heat / Mana regeneration</b>
            <p>
              Heat has a number of unique interactions with items and the
              environment. When consuming water, the boiler will rapidly lose
              fuel in exchange for rapidly increasing Heat levels via "steam".
              This allows automatons to replenish their HT quickly using water
              at the expense of fuel / food. Mana regeneration status effects
              will slow the loss of HT by half when an Automaton's fuel level
              reaches a critical level. Similarly, each source of mana
              regeneration will double the rate of heat gain when the boiler is
              above critical.
            </p>
            <p>
              The Automaton stands out from most other races in the way they
              regenerate mana. Instead of being based on the player's INT stat,
              it is based on a combination of the state of their boiler and
              their current Heat percentage. By default (yellow boiler icon), an
              Automaton will regenerate mana at a rate of 1 mana every 6.0
              seconds. When the player has enough fuel in their boiler to turn
              the icon blue, they will begin to regenerate mana at a rate of 1
              mana every 3.0 seconds. Additionally, if the player's Heat is
              below 50% of its maximum value, the mana regen rate for having a
              blue boiler increases to 1 mana every 1.5 seconds. When the
              player's Heat drops below 25% of its maximum value, they will
              suffer a penalty to their DEX regardless of the state of their
              boiler.
            </p>

            <table>
              <tr>Thing</tr>
              <tr>Heats boiuler by</tr>
              <tr>Up to</tr>
              <tr>Increases HT by</tr>
              <tr>Note</tr>

              <tr>Sink (Water)</tr>
              <tr>-200</tr>
              <tr>0</tr>
              <tr>2</tr>
              <tr>/</tr>

              <tr>Water Bottles</tr>
              <tr>-200</tr>
              <tr>0</tr>
              <tr>3</tr>
              <tr>HT increase is actually [2+d6]. If blessed add [1+d4].</tr>

              <tr>Swimming in water</tr>
              <tr>-25</tr>
              <tr>0</tr>
              <tr>-2</tr>
              <tr>Lose HT every 10 ticks. Lose boiler every 50 ticks.</tr>

              <tr>Usual food</tr>
              <tr>0</tr>
              <tr>0</tr>
              <tr>0</tr>
              <tr>/</tr>

              <tr>Worthless glass / Rocks</tr>
              <tr>50</tr>
              <tr>1500</tr>
              <tr>0</tr>
              <tr>/</tr>

              <tr>Metal Scrap</tr>
              <tr>50</tr>
              <tr>500</tr>
              <tr>0</tr>
              <tr>Actually up to 550, but stops feeding boiler past 500.</tr>

              <tr>Swimming in lava</tr>
              <tr>50</tr>
              <tr>1500</tr>
              <tr>2</tr>
              <tr>
                Gain HT and receive [1+d2] damage every 10 ticks. Gain boiler
                every 50 ticks.
              </tr>

              <tr>Magic Scrap</tr>
              <tr>100</tr>
              <tr>1100</tr>
              <tr>0</tr>
              <tr>
                Actually up to 1199, but stops feeding the boiler past 1100.
              </tr>

              <tr>Main / Blank Scrolls</tr>
              <tr>200</tr>
              <tr>1500</tr>
              <tr>0</tr>
              <tr>/</tr>

              <tr>Sink (Boiling water)</tr>
              <tr>200</tr>
              <tr>1500</tr>
              <tr>5</tr>
              <tr>HT increase is actually [4+d6].</tr>

              <tr>Non-magic Books</tr>
              <tr>400</tr>
              <tr>1500</tr>
              <tr>0</tr>
              <tr>/</tr>

              <tr>Any unspecified scroll</tr>
              <tr>600</tr>
              <tr>1500</tr>
              <tr>20</tr>
              <tr>/</tr>

              <tr>Enchant weapon/armor scrolls</tr>
              <tr>600</tr>
              <tr>1500</tr>
              <tr>40</tr>
              <tr>/</tr>

              <tr>Gems</tr>
              <tr>1000</tr>
              <tr>1500</tr>
              <tr>10</tr>
              <tr>/</tr>

              <tr>Fire scrolls</tr>
              <tr>1500</tr>
              <tr>1500</tr>
              <tr>9999</tr>
              <tr>
                Can be consumed or read. Not actually 9999, sets HT to max.
              </tr>

              <tr>Firestorm potions</tr>
              <tr>1500</tr>
              <tr>1500</tr>
              <tr>9999</tr>
              <tr>Not actually 9999, sets HT to max.</tr>
            </table>
          </>
        ),
      },
    ],
  },

  {
    id: "Salamander",

    raceFeatures: [
      {
        category: "Innate Spells",
        items: ["Breathe Fire"],
      },
      {
        category: "Traits",
        items: [
          "Uses Fervor (FR) to cast spells",
          "Regens up to 50% FR naturally",
          "Gaining XP increases FR",
          "Turns Radiant Form using Breathe Fire at 75%+ FR, form runs out at 60% FR",
          "Turns into Stone Form at 25%- FR",
          "Charisma buffs forms and FR gain",
          "+35% Hungrier",
          "Welcomed by Shopkeepers",
        ],
      },
      {
        category: "Resistances",
        items: ["Swords (20%)", "Unarmed (10%)", "Fire"],
      },
      { category: "Weaknesses", items: ["Polearms (20%)", "Ranged (10%)"] },
      {
        category: "Friendly With",
        items: ["Salamanders", "Automatons", "Humans (Neutral)"],
      },
    ],
    characterImageDescription:
      "A Salamander as its signature class, the Paladin",
    characterImage: SalamanderImage,

    raceSections: [
      {
        sectionName: "",
        sectionContent: (
          <>
            <p>
              Salamanders are a race option in Barony, introduced in the
              Deserters & Disciples DLC alongside four other races.{" "}
            </p>
          </>
        ),
      },

      {
        sectionName: "Description",
        sectionContent: (
          <>
            <p>
              Salamanders manage their unique resource called Fervor (FR) to
              transform into alternate forms that benefit them. Salamanders can
              also use their innate spell Breathe Fire to apply a stacking
              debuff to enemies (Divine Fire) that will make them more
              vulnerable to damage. Being at 25% or less on FR will transform
              Salamanders into Stone Form granting temporary invulnerability and
              extra AC at the cost of speed. At 75%+ FR casting Breathe Fire
              will transform Salamanders into Radiant Form, granting them spell
              PWR, free spells for a brief period, and Levitation at the cost of
              reduced CON. CHR will also buff your forms and FR gain. All this
              versatility however comes at the cost of being 35% hungrier.{" "}
            </p>
          </>
        ),
      },

      {
        sectionName: "Fervor",
        sectionContent: (
          <>
            <p>
              The Salamander Race has a unique resource called Fervor (FR)
              instead of MP. Salamanders can passively regenerate (RGN) FR up to
              50% of their maximum FR just like ordinary MP. Once FR is at least
              50% full, RGN will stop. Salamanders can also gain FR in a few
              different ways.
            </p>
            <ul>
              <li>
                Casting Breathe Fire on monsters. When a flame particle from
                fire breath hits an enemy, the Salamander responsible for the
                fire restores FR equal to 1 + (X / 4), where X is the number of
                divine fire stacks on the monster.
              </li>
              <li>
                Slaying monsters. When a Salamander gains EXP from a monster's
                death, they restore FR equal to 2% max FR + (CHR / 10) + enemy
                divine fire stacks. This restores a minimum of 1 FR.
              </li>
              <li>
                Skill Training. When a Salamander gains a skill point, they
                restore FR equal to 2% max FR + (CHR / 10). This restores a
                minimum of 1 FR.
              </li>
            </ul>

            <table>
              <tr>
                <td>Heart Status</td>
                <td>FR%</td>
                <td>Effect</td>
              </tr>

              <tr>
                <td>Radiant Heart</td>
                <td>75%+ FR</td>
                <td>
                  Gain Levitation, +25% Fire Resistance, +PWR/-CON from CHR
                  Drain 2% max FR every 3 seconds
                </td>
              </tr>

              <tr>
                <td>Normal Heart</td>
                <td>40-60% FR</td>
                <td>Dissipates, returning you to normal</td>
              </tr>

              <tr>
                <td>Stone Heart</td>
                <td>0-25%</td>
                <td>
                  Immune to Physical Damage, +STR/CON from CHR, -DEX from CHR
                </td>
              </tr>
            </table>
          </>
        ),
      },

      {
        sectionName: "Social Standings",
        sectionContent: (
          <>
            <p>Salamanders are friendly with other Salamanders. </p>
            <p>
              Salamanders are neutral towards humans, meaning they can trade
              with Shopkeepers and not be attacked on sight. Humans will behave
              neutrally towards Salamander players, meaning they cannot be
              recruited and will be disinterested when seeing the player.{" "}
            </p>
          </>
        ),
      },
    ],
  },
];

/*
{
    id: "",

    raceFeatures: [
      {
        category: "Traits",
        items: [""],
      },
      { category: "Resistances", items: [""] },
      { category: "Weaknesses", items: [""] },
      { category: "Friendly With", items: [""] },
    ],
    characterImageDescription: "",
    characterImage: HumanImage,

    raceSections: [
      {
        sectionName: "",
        sectionContent: (
          <>
            
          </>
        ),
      },

      {
        sectionName: "Description",
        sectionContent: (
          <>
            
          </>
        ),
      },

      
    ],
  },
*/
