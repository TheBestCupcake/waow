import type { ReactNode } from "react";

import GnomishMinesMap from "../assets/Gnomish Mines Map.webp";
import TempleMap from "../assets/Temple Map.webp";
import SokobanMap from "../assets/Sokoban Map.webp";
import MinotaurMazeMap from "../assets/Minotaur Maze Map.webp";
import SolvedMinotaurMazeMap from "../assets/Minotaur Maze Map Solved.webp";
import BaronLair from "../assets/BaronLair.webp";
import MoltenThrone from "../assets/MoltenThrone.webp";
import CockatriceLair from "../assets/CockatriceLair.webp";
import BramsCastleMap from "../assets/Brams Castle Map.png";
import { Link } from "react-router-dom";

export type LevelSection = {
  sectionName: string;
  sectionContent: ReactNode;
};

export type Level = {
  id: string;
  levelSections: LevelSection[];
};

export const levels: Level[] = [
  {
    id: "Minehead",
    levelSections: [
      {
        sectionName: "Level 0: Minehead",
        sectionContent: (
          <>
            <p>
              At the beginning of a run, the player and their party spawn
              outside the entrance to the dungeon, separated by a drawbridge. A
              lever on the right side of the dungeon exterior opens the front
              gate, allowing the player to proceed.{" "}
            </p>
            <p>
              A faded copy of My Journal sits on top of a table behind the spawn
              area. Written by an unknown adventurer, it describes the ruins of
              Hamlet and foreshadows the player's descent into The Mines.{" "}
            </p>
            <p>
              The Assist Shrine can be used if the player wants less of a
              challenge going forward, or to change their race and/or class for
              the next playthrough.{" "}
            </p>
            <p>
              No enemies spawn here, making it a safe area for the player to
              test their starting class.{" "}
            </p>
          </>
        ),
      },
    ],
  },

  {
    id: "The_Mines",
    levelSections: [
      {
        sectionName: "Level 1-5: The Mines",
        sectionContent: (
          <>
            <p>
              The Mines are a simple albeit dangerous section, as the player is
              often limited in their resources and stats. Patience and moving
              with intention go a long way in this section, as the player cannot
              survive more than a few hits at this stage in the game. Isolating,
              surprising, or ganging up on enemies will allow the player to
              quickly level up and gather gear necessary for survival.
            </p>
            <p>The following enemies can be found within The Mines:</p>
            <ul>
              <li>
                Skeletons (replaces troll and spider spawns on level 1).
                <br />
                Funny bones can rarely spawn in place of a skeleton.
              </li>

              <li>
                Rats.
                <br />
                Algernon can rarely spawn in place of a rat.
              </li>

              <li>
                Spiders (level 2 onward).
                <br />
                Shelob can rarely spawn in place of a spider.
              </li>

              <li>
                Trolls (level 2 onwards).
                <br />
                Thumpus can rarely spawn in place of a troll.
                <br />
                Gnomes spawn with Thumpus.
              </li>
            </ul>
          </>
        ),
      },

      {
        sectionName: "Traps",
        sectionContent: (
          <>
            <p>The following traps can be found throughout The Mines:</p>
            <ul>
              <li>Boulder Trap.</li>
              <li>Spike Trap</li>
            </ul>
          </>
        ),
      },

      {
        sectionName: "The Gnomish Mines",
        sectionContent: (
          <>
            <p>
              When entering the second floor, which always has a passage to the
              Gnomish Mines, the player will be notified immediately about "the
              sounds of picks striking rocks".
            </p>

            <p>
              An entrance to The Gnomish Mines will always generate on level 2,
              unless level generation fails. The entrance is locked behind two
              gates at the end of a walkway extending across a large pit. In
              order to reach the entrance, the player must activate the two
              switches on either side of the pit, which will open both doors,
              allowing the player to progress.
            </p>

            <p>
              The Gnomish Mines is a maze-like mine filled with Gnomes, Trolls,
              Gold and an artifact: the Sphinx's Casque.
            </p>
            <p>
              The layout of the mines is a fixed maze pattern, with many
              hallways and dead-ends that requires the player to traverse
              carefully in order to not come in contact with dangerous enemies.
              The player starts in the center of the maze, with one doorway at
              each of the four walls of the room, two fountains, and the exit
              ladder. Inside the maze, there are three key locations the player
              may wish to find:
            </p>
            <ul>
              <li>
                The lower right corner contains a room rife with Magic Pillar
                Traps, locked up behind several gates. Inside this room is the
                artifact Sphinx's Casque.
              </li>
              <li>
                There is a shop located at the top right corner. Inside the shop
                is a lever which opens the lower right room. The abundance of
                pickaxes dropped by gnomes means this lever is largely optional.
              </li>
              <li>
                Scattered throughout the maze are four chests with fixed
                locations.
              </li>

              <p>
                The Gnomish Mines' layout, with the Gold wall locations in
                yellow, and chests in red:
              </p>
              <img src={GnomishMinesMap} />

              <p>
                Inside the mines are many Gnomes and Trolls (or rarely Thumpus),
                both of which serve as the primary threats of the area. After
                entering, gnomes and trolls will eventually enter the room in
                the center of the maze, attacking the player on sight. There are
                two types of Gnomes: Digger Gnomes wield a pickaxe and cloak,
                and are typical melee attackers, while Caster Gnomes attack with
                magic bolts that deal significant damage and often kill players
                early in the game with one or two shots.
              </p>
              <p>
                The most common items found throughout the mine are gold piles,
                which are found at almost every dead end of the maze, each with
                varying gold yield. With some piles containing upwards of 100
                gold each, it is not uncommon to walk away with 3000+ gold from
                the mines when explored completely.
              </p>
            </ul>
          </>
        ),
      },

      {
        sectionName: "Minetown",
        sectionContent: (
          <>
            <p>
              An entrance to Minetown has a 50% chance to generate on level 3.
              The entrance Minetown is identical to the entrance to The Gnomish
              Mines. If Minetown spawns the player will be hear "the sound of
              bustling streets".
            </p>

            <p>
              Minetown is the remnants of old Hamlet's inhabitants, as well as
              four separate shops, allowing a human player to recruit many new
              party members and to purchase some items before tackling the
              Swamps and further dungeon locations. It is the only secret level
              not guaranteed to spawn, with only 50% chance.
            </p>
            <p>
              Minetown is a peaceful location, home to half a dozen Humans and
              four Shopkeepers who can sell any combination of items.
            </p>
            <p>
              The player starts in a long room which connects to the main square
              of Minetown, with one or two sinks at their disposal before
              entering the main area. Near the end of the square, opposite where
              the player enters it, the trapdoor to the dungeon is located.
            </p>
            <p>
              In a small room across from the exit, there is a lever inside.
              Flipping it will open a path to a previously closed off section of
              the town. Inside, there are several beds are, alongside a pathway
              to the right. Following this path and flipping one more switch
              will award the player a treasure chest, alongside two piles of
              gold.
            </p>
            <p>
              The bottom left hand corner of the map contains three chests,
              guarded by a boulder and a gate. If the player has any means of
              pushing or digging, they may bypass it to get to three chests at
              the end of the hallway. As usual, these chests can be Mimics.
            </p>
            <p>
              The bottom right corner contains the Minecraft pickaxe easter egg,
              potion of strength, campfire and a lever that opens the gate in
              the left corner of the map. The strength potion can also be used
              to help access these chests.
            </p>
            <p>A fountain is located in the center of the map.</p>
          </>
        ),
      },

      {
        sectionName: "First Underworld",
        sectionContent: (
          <>
            <p>
              A portal to the Underworld is located on floor 5 in the chest room
              opposite the exit ladder behind the wall with the skull on it. The
              distinct hum of the portal can be heard emanating from the wall.
            </p>
            <p>
              The Underworld is an intermediate location being made up of many
              small patches of land over a large pit that covers the whole map.
              Its layout is one of the most open in all the various dungeon
              layers, while also consisting mainly of bottomless pits.
            </p>
            <p>
              The player will always spawn in a medium-sized room, with a small
              ledge opening to the rest of the underworld. A chest will always
              be found at the left of the ledge, as well as a portal to the
              right, so that players without the ability to levitate can escape
              back to the dungeon proper.
            </p>
            <p>
              As most structures in the Underworld are surrounded by pits, most
              structures either consist of a large central structure or utilize
              several smaller structures in tandem to test the player's ability
              to levitate for long periods. Long flats of hallway or small
              square islands are very common, allowing players with temporary
              forms of levitation to make smaller jumps between each to get to
              their destination. On every item is an Obelisk. These objects,
              when interacted with, teleport players to another random island,
              allowing players without levitation to still proceed through the
              underworld.{" "}
            </p>

            <p>
              Ghouls (or rarely Coral Grimes), Enslaved Ghouls, Imps, Skeletons
              often wielding shortbows, crossbows and magicstaffs of cold (or
              rarely Funny Bones), Humans, Shadows (or rarely Baratheon), Slimes
              (blue or orange) can be found.
            </p>
            <p>
              Unique to most other dungeon layers, where the player will end up
              after passing through all the levels of the Underworld depends on
              where they had entered it. This makes it the only dungeon layer to
              both be accessible at different parts of a game, as well as the
              only one which delivers the player to different places depending
              on how it is accessed.
            </p>
            <p>
              If the player explores into the first underworld, they can find a
              ladder that will send them to the next floor. Here, there is no
              extra ladder, with the only exit being the portal near the
              starting point of the map. However, if the player does explore
              further on the second level, they can find Khryselakatos, a rare
              artifact weapon being held by a Shadow variant named Artemisia. A
              triple silver Vault also appear on this floor. Exiting via the
              portal now will send the player to the seventh floor, skipping
              floor six.
            </p>
          </>
        ),
      },
    ],
  },

  {
    id: "The_Swamp",
    levelSections: [
      {
        sectionName: "Levels 6-10: The Swamp",
        sectionContent: (
          <>
            <p>
              Compared to The Mines, The Swamp is much more open, with many
              spacious rectangular rooms. If the player has prepared themselves
              appropriately in The Mines this section can be cleared with ease.
              The Swamp introduces water, which can slow the player down and
              spawn Slimes. Merchant Shops are common, and can be found easily
              by looking for their distinctive library-esque interiors.
            </p>

            <p>
              The Green Mystic Orb can be found on floor 8. This orb is used
              later in the game when confronting Baron Herx, allowing the player
              to enhance their dexterity and perception, or exchanged to the
              Mysterious Merchant.
            </p>

            <p>The following enemies can be found in The Swamp:</p>
            <ul>
              <li>Blue Slimes.</li>
              <li>Green Slimes.</li>

              <li>
                Goblins.
                <br />
                Potato King can rarely spawn in place of a goblin.
                <br />
                Goblin Shaman appears only in a specific setpiece.
              </li>

              <li>
                Spiders.
                <br />
                Shelob can rarely spawn in place of a spider.
              </li>

              <li>
                Ghouls.
                <br />
                Coral Grimes can rarely spawn in place of a ghoul.
              </li>

              <li>
                Skeletons appear in setpieces and rarely in the open.
                <br />
                Funny bones can rarely spawn in place of a skeleton.
              </li>

              <li>
                Trolls appear very rarely in setpieces.
                <br />
                Thumpus can rarely spawn in place of a troll.
                <br />
                Gnomes spawn with Thumpus.
              </li>
            </ul>
          </>
        ),
      },

      {
        sectionName: "Traps",
        sectionContent: (
          <>
            <p>The following traps can be found throughout The Swamp:</p>
            <ul>
              <li>Boulder Trap.</li>
              <li>Spike Trap</li>
              <li>Arrow Trap</li>
            </ul>
          </>
        ),
      },

      {
        sectionName: "The Temple",
        sectionContent: (
          <>
            <p>
              An entrance to The Temple always appears on level 7 unless level
              generation fails. The secret entrance is guarded by a bottomless
              pit and a hallway of boulder traps.
            </p>
            <p>
              The Temple is an ancient temple, filled with boulder and arrow
              traps, Goblins (or rarely The Potato King), treasure, and over
              half a dozen Trolls (or rarely Thumpus). It can be recognized by
              the message "you hear the sound of mystic chanting in the
              distance".
            </p>
            <p>
              The Temple has multiple lethal traps and enemies that can swarm
              and dispatch the player if they are not ready to take on large
              threats such as Trolls already. For their troubles, savvy players
              are presented with many sources of good loot in this location,
              with no less than six treasure chests and many piles of gold to
              collect when exploring all the temple.
            </p>
            <p>
              The layout of the temple is very straight-forward, with a long
              bridge to gap over a large pit and where the player enters the
              level from. If needed, the player can choose to leave the level
              immediately, as the exit is located near where the player begins.
            </p>
            <p>
              When crossing over the bridge, the first room presents itself to
              have little use, with only six trolls locked behind gates. If you
              hear the jabbering of Gnomes, that means Thumpus has spawned. His
              party of gnomes will spawn outside of the cages. To the left and
              right are diverging paths, which lead to a room of treasure each
              and eventually to an artifact.
            </p>
            <p>
              The room to the left leads to a large room filled with boulder
              traps. The door to the next room is located to the right from
              where the player enters. The room itself is filled with many
              boulders, each being triggered once a player, enemy or item falls
              down onto one of the grey tiles below. Avoiding those tiles, a
              clear and safe pathway is possible to take, but less observant
              party members or newly released Trolls may trigger the traps. A
              locked gate is seen at the opposite side of the room. This will be
              opened after a set time; the same time that the trolls are
              released.
            </p>
            <p>
              Right from the starting room, this area contains six Goblins, all
              held behind more gates like those the Trolls were locked behind.
              The doorway leading further into the temple is located leftward
              from where the player enters the room from.
            </p>
            <p>
              If the player wants, they can proceed to the right side of the
              room to pass by the jailed goblins and access a room filled with
              three treasure chests, but stepping on the grey tiles will cause
              the locked goblins to become free. Checking each cell for what
              each set of goblins is equipped with will be an important asset,
              especially if releasing the goblins would release multiple Goblins
              with caster staffs.
            </p>
            <p>
              Once getting past either trap-filled room, the player is greeted
              with an intermediate room with a single troll locked behind a
              gate.
            </p>
            <ul>
              <li>
                From the boulder room, a door to the left presents a treasure
                room with three chests and two arrow traps. A doorway to the
                final room towards the right.
              </li>
              <li>
                From the Goblin Prison, there are two doorways to the left, one
                past the goblin-releasing pressure plates leading to some piles
                of gold, and the other leading to the final room.
              </li>
            </ul>
            <p>
              At the end of either path, the player is presented with pedestals
              holding the Infected Branch Bow and a silver key.
            </p>
            <p>
              Upon retrieving them, an invisible trap is triggered which frees
              the Troll locked within the room the player accessed. After a
              delay, all the Trolls in the main room are also freed, allowing
              them to wander around.
            </p>
            <p>
              A doorway opposite the entry to the boulder room leads to a lock
              upon which the Silver Key can be placed, allowing access to the
              bridge's western waterway, containing twelve piles of gold. A
              lever at the end of this waterway allows access to the eastern
              waterway entry.
            </p>
            <p>
              Pressing the button in the eastern waterway entry allows access to
              the rest of the eastern waterway, with twelve more piles of gold
              and four potions of strength upon a final pedestal. Entering the
              final room of the eastern waterway that contains the potion
              pedestal triggers a hidden trap, teleporting in three goblins in
              the exit portal room.
            </p>
            <p>
              An alternative pathway into the eastern and western waterways is
              available to players with levitation and an opening spell. The
              gates at the waterway entrances are sealed with magic, but the
              gates on either side of the bridge are not, allowing free access
              without the key.
            </p>

            <img src={TempleMap} />
          </>
        ),
      },

      {
        sectionName: "The Haunted Castle",
        sectionContent: (
          <>
            <p>
              An entrance to The Haunted Castle always appears on level 8 unless
              level generation fails. The secret entrance is guarded by a
              bottomless pit and a hallway of boulder traps, the same as the
              entrance to the temple.
            </p>

            <p>
              The Haunted Castle is a looming castle in the center of the map,
              with scattered items on the outer walls. More loot and an artifact
              lies inside the castle, but those willing to rob the castle will
              face radical consequences. There will be a new message in the chat
              log stating "You hear howling winds in the distance."
            </p>
            <p>
              The Haunted Castle is on the surface a very easy secret area,
              having a player begin with a fountain to use and at least a dozen
              or so items of varying quality and types scattered around a square
              track. The player starts in the bottom left corner of this track,
              with the portal to leave the area at the top center of this track.
              If the player needed to, they could take any items they found and
              leave just as soon as they arrived.
            </p>
            <p>
              On the north-eastern side of the track is a tower with a hatch
              leading up to another area. In this area you'll find a tin can
              opener, and a timed switch for a nearby gate, preventing access to
              a room containing a lock pick and four levitation potions, with a
              switch to keep the gate open. Alternatively, this area can be
              broken into with a combination of dig and levitation by digging
              into the tower past the Abyss.
            </p>
            <p>
              Behind the starting area are two wooden frames which can be
              destroyed via a lever in the north-western tower, or using a pick
              or dig spell. Within the area past the wooden frames are six
              Dummybots and two tin cans. These bots can be attacked even if
              friendly hits are off.
            </p>
            <p>
              The south-eastern corner of the map contains three locked treasure
              chests behind a waterfall.
            </p>
            <p>
              Finally, the castle, which is encompassed by the track, connecting
              via a drawbridge at the bottom center of the track. When the
              player approaches the closed gates of the castle, they open up and
              the player can enter.
            </p>
            <p>
              The castle interior is a small place, with access to a main hall
              and five rooms that shoot off of it. Illuminating the center hall
              is a fireplace, comprised of two campfires.
            </p>
            <p>
              In the room immediately to the left, you will find a small library
              with a chest, while to the right is a small room with a table and
              3 piles of gold. Further along to the eastern corridor, the
              right-most door is a room with 2 Sinks, while the left door
              contains the Oracle's Treads, a table and chair, as well as 2
              chests. In the western corridor, the left-most door leads to the
              prior library room, while the right door contains a medium pool of
              water and a chair. Finally, behind the fireplace are 6 piles of
              gold in a secret compartment.
            </p>
            <p>
              Once the player has collected any important items inside the
              castle, such as the Oracle's Treads or piles of gold, the haunted
              aspect of the castle will become apparent. The outer track will
              now be lined with numerous gravestones, each containing at least a
              single Enslaved Ghoul (or rarely even Coral Grimes) once the
              player attempts to leave the castle and head to the exit.
            </p>
            <p>
              Unlike normal gravestones, which require inspection by the player
              to disturb the dead, these are provoked by the player merely
              walking near them, causing the whole row of undead to rise. This
              is further compounded in difficulty by the random wandering of
              ghouls into new sections of track, which will also provoke that
              section's line of ghouls.
            </p>
          </>
        ),
      },
    ],
  },

  {
    id: "Sand_Labyrinth",
    levelSections: [
      {
        sectionName: "Levels 11-15: Sand Labyrinth",
        sectionContent: (
          <>
            <p>
              Levels 10-15 contain the Sand Labyrinth, filled to the brim with
              new traps and obstacles. The player is trapped in what looks like
              a Pharaoh's tomb of sorts, and has a maze-like layout every level.
            </p>
            <p>
              The Red Mystic Orb can be found on floor 13. This orb is used
              later in the game when confronting Baron Herx, allowing the player
              to enhance their strength and constitution, or exchanged to the
              Mysterious Merchant.
            </p>
            <p>Enemies found in the Sand Labyrinth:</p>
            <ul>
              <li>
                Scorpions.
                <br />
                Skrabblag can rarely spawn in place of a scorpion.
              </li>

              <li>Orange Slimes (from lava pits).</li>

              <li>
                Trolls.
                <br />
                Thumpus can rarely spawn in place of a troll.
                <br />
                Gnomes spawn with Thumpus.
              </li>

              <li>
                Goblins.
                <br />
                The Potato King can rarely spawn in place of a goblin.
              </li>
              <li>Lesser Insectoids.</li>
              <li>
                Scarabs.
                <br />
                Xyggi can rarely spawn in place of a scarab.
              </li>
            </ul>
            <p>
              Lava also makes a first appearance, spelling death for anyone
              foolish enough to walk over it. NPC shops can spawn in this area,
              though it is rare. The Labyrinth is usually well-lit and contains
              good equipment compared to previous levels.
            </p>
          </>
        ),
      },

      {
        sectionName: "Traps",
        sectionContent: (
          <>
            <p>
              The following traps can be found throughout The Sand Labyrinth:
            </p>
            <ul>
              <li>Boulder Trap.</li>
              <li>Spike Trap</li>
              <li>Arrow Trap</li>
            </ul>
          </>
        ),
      },

      {
        sectionName: "Sokoban",
        sectionContent: (
          <>
            <p>
              An entrance to Sokoban spawns on floor 11, hidden inside closed
              walls and surrounded by lava. A pickaxe, dig spell, staff of
              digging, firestorm potion, or Power Strike is needed to enter.
            </p>
            <p>
              Sokoban is an area where a game of Sokoban takes place. The player
              will see in the chat log "You hear the faint crash of rolling
              boulders.". The map is comparatively smaller than most other
              secret areas, with an external side-area where the player spawns
              and the exit portal at the opposite end of the hall. Connected at
              the center of the hallway, the arena of Sokoban is full of
              inconvenient walls placed around seventeen boulders.
            </p>
            <p>
              Here, the player must push all the boulders into pits found at the
              corners of the arena. Doing so with all seventeen boulders will
              spawn a message "The gods of Sokoban greatly reward your
              abilities!", providing the player with an artifact, the Djinni's
              Brace, on a podium at the back of the arena. On top of that, there
              is also a ton of gold piles lining the exterior hallway after
              completing the puzzle.
            </p>
            <p>
              Compared to the mortal danger most secret areas pose to the player
              in order to obtain their reward, Sokoban is very much a puzzle,
              requiring more wit on the player's surroundings than combat
              expertise. This is reflected in how there can be no enemies to
              fight in this area if the player plays Sokoban without breaking
              any boulders.
            </p>
            <p>
              If, however the player uses something like a Pickaxe to break one
              of the boulders, they will receive a message that "the gods of
              Sokoban are angry!", with a random Sand Labyrinth enemy spawned
              where the boulder was destroyed to attack the player. Provoking
              the gods can be repeated for each boulder.
            </p>
            <p>
              If the player completes the puzzle but had smashed one boulder,
              the normal victory text changes to "The gods of Sokoban were
              mildly entertained.", still spawning the artifact, but providing a
              few less gold piles at the exit.
            </p>
            <p>
              When the player breaks two or more boulders, the message changes
              again, now to "The gods of Sokoban were less than impressed.",
              causing the Djinni's Brace to not spawn at all. As more boulders
              are broken, the less gold is rewarded at the end of the puzzle.
            </p>

            <img src={SokobanMap} />
          </>
        ),
      },

      {
        sectionName: "The Minotaur Maze",
        sectionContent: (
          <>
            <p>
              An entrance to The Minotaur Maze spawns on floor 13, hidden inside
              closed walls and surrounded by lava. A pickaxe, dig spell, staff
              of digging, firestorm potion, or Power Strike is needed to enter.
            </p>
            <p>
              The Minotaur Maze is a maze the player will have to escape.
              Teleportation is disabled while inside of the maze. When entering
              the portal, the player is put at one end of a large maze with the
              goal of getting to the end, and possibly obtaining the powerful
              artifacts in the center, all while evading the pursuit of the
              titular Minotaur.
            </p>
            <p>
              As the name implies, the Minotaur Maze is laid out like a large
              maze-like structure, with walls that tend to be two tiles thick
              and having many branching pathways either to another part of the
              maze or to a dead end where the player can be pinned and attacked
              by the Minotaur. Outside of the player spawn room is a large
              corridor leading into the maze. Notably, a pedestal with the Gold
              Key is here. Picking up the key or crossing the bridge sections
              will cause the minotaur to spawn. You need the key to retrieve the
              artifact Gungnir in the center of the maze.
            </p>
            <p>
              Traversing through the maze may lead you to a large room in the
              center that is blocked off by gates and surrounded by pits on
              three sides. A player prepared with levitation and opening can
              bypass these gates, otherwise there is a lock near the entrance
              for you to place the key in. This will open all the gates, at
              which point you can enter, retrieve Gungnir, and leave.
            </p>
            <p>
              If worse comes to worst, fighting the Minotaur may be the only
              viable option left. The minotaur is extra powerful here. It gains
              four new status effects: Resist Magic, Troll's Blood, HP
              regeneration and the red mystic orb buff.
            </p>
            <p>
              Regardless if the player has disabled the Minotaur normally, the
              Minotaur Maze will always spawn the Minotaur to chase the player.
            </p>

            <img src={MinotaurMazeMap} />

            <p>
              Example path to both solve the maze and grab the weapon, while
              avoiding the Minotaur (with ~70%+ movement speed), without using
              shortcuts such as Dig or Levitation:
            </p>
            <img src={SolvedMinotaurMazeMap} />
          </>
        ),
      },
    ],
  },

  {
    id: "The_Ruins",
    levelSections: [
      {
        sectionName: "Levels 16-20: The Ruins",
        sectionContent: (
          <>
            <p>
              Levels 16-20 are the ruins of an ancient city, adding a new trap
              that spews magic in the four horizontal directions.
            </p>
            <p>
              The Blue Mystic Orb can be found on floor 18. This orb is used
              later in the game when confronting Baron Herx, allowing the player
              to enhance their intelligence and magic resistance, or exchanged
              to the Mysterious Merchant.
            </p>
            <p>The enemies found here are as follows:</p>
            <ul>
              <li>Gnomes.</li>
              <li>Gnome Thieves.</li>
              <li>Bugbears.</li>
              <li>
                Demons.
                <br />
                Deu De'Breau can rarely spawn in place of a demon.
              </li>
              <li>
                Goblins.
                <br />
                The Potato King can rarely spawn in place of a goblin.
              </li>
              <li>
                Skeletons appear in setpieces and rarely in the open.
                <br />
                Funny bones can rarely spawn in place of a skeleton.
              </li>
              <li>
                Young Vampires appear rarely.
                <br />
                Enslaved Ghouls spawn with young vampires.
              </li>
              <li>Spellsbots in setpieces.</li>
              <li>Sentrybots in setpieces.</li>
              <li>Automatons.</li>
            </ul>

            <p>
              The Ruins have the largest expanses in the game, often providing
              some of the clearest sight lines and seldom having layouts with
              less than two blocks of space in its corridors.
            </p>
          </>
        ),
      },

      {
        sectionName: "Traps",
        sectionContent: (
          <>
            <p>The following traps can be found throughout The Ruins:</p>
            <ul>
              <li>Boulder Trap.</li>
              <li>Spike Trap</li>
              <li>Arrow Trap</li>
              <li>Magic Pillar Trap</li>
            </ul>
          </>
        ),
      },

      {
        sectionName: "The Mystic Library",
        sectionContent: (
          <>
            <p>
              The portal to The Mystic Library can be found on Level 16 in small
              fortress-like structures, locked with gates and lava, while also
              requiring some form of levitation to access.
            </p>
            <p>
              The Mystic Library is a relatively peaceful location, filled to
              the brim with magical items like spellbooks, scrolls and Magic
              Staffs. When entering the floor, the chat log will display "You
              hear mystic droning in the distance.".
            </p>
            <p>
              As expected for a library, the Mystic Library is a quaint detour
              from the normal dungeon with many books to read and learn from. In
              this case, this secret area is overflowing with spellbooks and
              other rare magical items that would significantly assist any
              magic-using player's play-through.
            </p>
            <p>
              Wandering the hallways are several Humans, allowing any
              non-monster player to make some quick friends to fill their party
              and gain Leadership skill, or to take out for some good
              experience. These humans are typically much stronger than normal
              ones, sporting around 70 HP, and commonly wielding spellbooks, and
              wearing wizard hats and doublets.
            </p>
            <p>Off to the side of the library is a Silver Key.</p>
            <p>
              There are two hidden chests in the library, one behind the wall at
              the furthest end of the big room with the pits, and one over on
              the other side of one of the two pits.
            </p>
            <p>
              The Accursed class has a special interaction with the Mystic
              Library, which is otherwise absent from other classes. When
              entering, a treasure chest is chosen to spawn in with a spellbook
              of vampiric aura. With this, the player has the option to read the
              book and end the curse. For more information, see the{" "}
              <Link to="/Barony/Classes/Accursed">Accursed</Link>
              page.
            </p>
          </>
        ),
      },

      {
        sectionName: "Second Underworld",
        sectionContent: (
          <>
            <p>
              The portal to the Second Underworld can be found on Level 18 in
              small fortress-like structures, like the mystic library. This
              Underworld leads to Hell.
            </p>
            <p>
              On the second underworld, the player has the option to exit
              immediately through the portal near the starting point, sending
              them to floor nineteen. If they explore and find the ladder, then
              the portal will change, transporting the player instead to the
              twenty-first level of the dungeon, that being the first level of
              Hell.
            </p>
          </>
        ),
      },

      {
        sectionName: "Level 20: Lich's Bastion",
        sectionContent: (
          <>
            <p>
              It consists of a fight with Baron Herx. After the fight, the Baron
              will drop a magic sphere. By placing it onto the pedestal in the
              center of the room, you will open a portal to the town of Hamlet
              (level 25).
            </p>
            <img src={BaronLair} />
          </>
        ),
      },
    ],
  },

  {
    id: "Hell",
    levelSections: [
      {
        sectionName: "Levels 21-24: Hell",
        sectionContent: (
          <>
            <p>
              The Levels 21-24 are found after going through the second
              underworld on Dungeon level 18, covered in lava and filled with:
            </p>
            <ul>
              <li>Imps.</li>
              <li>
                Demons
                <br />
                Deu De'Breau can rarely replace any spawned demon.
              </li>
              <li>
                Shadows.
                <br />
                Baratheon can rarely replace any spawned shadow.
              </li>
              <li>Incubus.</li>
              <li>
                Succubus.
                <br />
                Lilith can rarely replace any spawned succubus.
              </li>
              <li>
                Lesser Goatmen.
                <br />
                Gharbad can rarely replace any spawned goatman.
              </li>
              <li>Automatons.</li>
            </ul>
            <p>
              Hell is often laid out with large rooms and small closed-in areas.
              Most notably, through the use of large pits and lava pools does
              most of Hell remain open for the player and the enemies that
              inhabit it. Unlike most other dungeon layers, Hell only has three
              floors, with the fourth being taken up by the battle with
              Baphomet.
            </p>
          </>
        ),
      },
      {
        sectionName: "Traps",
        sectionContent: (
          <>
            <p>The following traps can be found throughout Hell:</p>
            <ul>
              <li>Boulder Trap.</li>
              <li>Spike Trap</li>
              <li>Arrow Trap</li>
              <li>Summoning Trap</li>
            </ul>
          </>
        ),
      },
      {
        sectionName: "Level 24: The Molten Throne",
        sectionContent: (
          <>
            <p>
              It consists of a fight with the secret alternative boss Baphomet.
            </p>
            <img src={MoltenThrone} />
          </>
        ),
      },
    ],
  },

  {
    id: "Hamlet",
    levelSections: [
      {
        sectionName: "Level 25: Hamlet",
        sectionContent: (
          <>
            <p>
              After the fight with either the Baron or Baphomet, you will arrive
              in the town of Hamlet. This town consists of various merchants,
              chests, hirelings and the Magician's Guild, where you will find a
              portal to the Crystal Caves.
            </p>
            <p>
              Hamlet serves as a transition between the main dungeon and the
              battle between either Baron Herx or Baphomet, to The Caves where
              the player can then continue their adventure in confronting both
              Erudyce and Orpheus.
            </p>
            <p>
              It is one of the few named locations found in the game, often
              written about in Books and visited by the player once they had
              beaten Baron Herx himself. It is home to a dozen Humans, sporting
              several shops, buildings and a Magic Guild outpost. The humans
              found here are notably much more powerful, specifically the
              cleric, barbarian and magician. These, although humble in
              appearance sport heavily blessed weapons and armor, high health,
              along with amulets of magic reflection and boots of waterwalking.
            </p>
            <p>
              Depending on the race the player has chosen to play as, they are
              either greeted warmly as the hero of Hamlet, or have to sneak into
              the Inn for the night if they are playing as a monster race.
            </p>
            <p>
              Hamlet is small in its layout, with a main road connecting all the
              buildings and often an alleyway to their sides a tile wide
              Scattered throughout the city are items, chests and potential
              party members, allowing a player to restock on supplies after the
              battle against Baron Herx or Baphomet.
            </p>

            <h3>Buildings</h3>
            <table>
              <tbody>
                <tr>
                  <th>Building</th>
                  <th>Description</th>
                </tr>
                <tr>
                  <td>Inn</td>
                  <td>
                    Starting area for the player, a large Inn with a resting
                    area. Has a trapdoor which leads into the sewers beneath the
                    town.
                  </td>
                </tr>
                <tr>
                  <td>Blue brick building</td>
                  <td>
                    Houses an NPC named Mol Blinn and a chest. Can only be
                    accessed via opening and portal spells.
                  </td>
                </tr>
                <tr>
                  <td>Abandoned hovel</td>
                  <td>
                    A sealed room, containing two beds, a table, five potions of
                    Extra Healing, five potions of Restore Magic, and five
                    throwing weapons. Accessed by a trapdoor in the sewers.
                  </td>
                </tr>
                <tr>
                  <td>Washroom</td>
                  <td>
                    A little building with water flowing through it. Contains a
                    chest and a sink.
                  </td>
                </tr>
                <tr>
                  <td>Magician's Guild</td>
                  <td>
                    Contains several NPCs which provide exposition of Erudyce
                    and Orpheus leading up to the removal of Baron Herx. Plenty
                    of furniture inside. Contains five +2 potions of water and
                    five +1 potions of acid. At the end, contains the portal
                    leading to The Caves.
                  </td>
                </tr>
                <tr>
                  <td>Shops</td>
                  <td>See below.</td>
                </tr>
              </tbody>
            </table>

            <h3>Sewer System and Mysterious Merchant</h3>
            <p>
              If the player interacts with the trapdoor inside their room when
              they wake up, they are transported to an underground segment with
              water, gates and levers. Progressing through this section yields a
              few potions of Polymorph, as well as a direct path towards the
              portal leading to the Caves. A trapdoor in the sewers leads to a
              room containing five potions of restore magic and extra healing.
            </p>
            <p>
              At the end of the sewer system if found the Mysterious Merchant.
              He is unique from other merchants, donning glasses, a Healer's
              doublet, a cloak, and being notably peaceful to monster races.
            </p>
            <p>
              He exists to allow the player to trade in their unused Mystic Orbs
              in exchange for a rare item purchase. For more information, see
              the{" "}
              <Link to="/Barony/NPCs/Mysterious_Merchant">
                Mysterious Merchant
              </Link>{" "}
              page.
            </p>

            <h3>Shops</h3>
            <p>
              Throughout Hamlet, several shops are set up throughout the town.
              The types of shops available to the player are scripted so that
              there is a large and helpful variety of items for the player to
              access before heading off to the Caves. The names of those vending
              are randomized as usual.
            </p>
            <table>
              <tbody>
                <tr>
                  <th>Shop Type</th>
                  <th>Description</th>
                </tr>
                <tr>
                  <td>Delicatessen</td>
                  <td>Inside the Inn, where the player wakes up from.</td>
                </tr>
                <tr>
                  <td>Fine Staves</td>
                  <td>
                    Next door to the Water Building, connected to the Jewelry
                    Store.
                  </td>
                </tr>
                <tr>
                  <td>Jewelry Store</td>
                  <td>
                    Next door to the Magician's Guild Outpost, connected to the
                    Fine Staffs shop.
                  </td>
                </tr>
                <tr>
                  <td>Bookstore</td>
                  <td>Behind the Inn.</td>
                </tr>
                <tr>
                  <td>Arms and Armor</td>
                  <td>
                    Across from the Magician's Guild Outpost, with two
                    shopkeepers inside who both vend arms and armor.
                  </td>
                </tr>
                <tr>
                  <td>General Store</td>
                  <td>
                    Across from the Magician's Guild Outpost, has the Potion
                    Store in the backroom.
                  </td>
                </tr>
                <tr>
                  <td>Potion Store</td>
                  <td>
                    Across from the Magician's Guild Outpost, connected to the
                    General Store room.
                  </td>
                </tr>
              </tbody>
            </table>

            <h3>NPCs with notable gear</h3>
            <table>
              <tbody>
                <tr>
                  <td>The Barbarian</td>
                  <td>
                    <ul>
                      <li>Boots of water walking</li>
                      <li>Ring of might</li>
                      <li>Amulet of magic reflection</li>
                      <li>Heavily blessed equipment</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td>The Marksman</td>
                  <td>
                    <ul>
                      <li>Gloves of dexterity</li>
                      <li>Boots of speed</li>
                      <li>Amulet of poison resistance</li>
                      <li>Ring of magic resistance</li>
                      <li>Heavily blessed equipment</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td>The Cleric</td>
                  <td>
                    <ul>
                      <li>Shield of magic resistance</li>
                      <li>Gauntlets of might</li>
                      <li>Boots of water walking</li>
                      <li>Amulet of magic reflection</li>
                      <li>Ring of magic resistance</li>
                      <li>Potion of extra healing</li>
                      <li>Heavily blessed equipment</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td>The Magician</td>
                  <td>
                    <ul>
                      <li>Amulet of magic reflection</li>
                      <li>Ring of magic resistance </li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td>Evoker</td>
                  <td>
                    <ul>
                      <li>Cloak of magic reflection</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td>Foreign Hunter</td>
                  <td>
                    <ul>
                      <li>Crystal axe </li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td>Survivor</td>
                  <td>
                    <ul>
                      <li>Pickaxe</li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>

            <h3>History</h3>
            <p>
              Not much is known about Hamlet itself prior to the events of Herx,
              with a large majority of information presented through Book
              accounts, the intro sequence and word-of-mouth from citizens of
              Hamlet, all of which focus much more on the effects of Herx and
              the revenge he had brought to the town afterwards.
            </p>
            <p>
              Originally, Hamlet was a mining town under the rule of mayor Baron
              Herx, which was thriving financially but overworking its workers.
              As a result, the citizens of Hamlet would overthrow Herx into the
              mines they had dug out, and take back the city for a time.
            </p>
            <p>
              After converting to a lich, Herx reemerged some time later and
              killed the citizens of Hamlet, with only a few descendants being
              able to escape back into the mine and setting up a new town inside
              - what would be known as Minetown.
            </p>
          </>
        ),
      },
    ],
  },

  {
    id: "Crystal_Caves",
    levelSections: [
      {
        sectionName: "Levels 26-30: Crystal Caves",
        sectionContent: (
          <>
            <p>
              The Caves is the first dungeon layer found after defeating Baron
              Herx or Baphomet, where now the player is introduced to the new
              set of antagonists: Eurydice and Orpheus. Glimmering blue rocks,
              and shiny gemstone covered walls, the crystal caverns are a
              beautiful place to explore. The walls here are littered with
              Crystal Shards, instead of torches. A mixture of natural lava and
              waterfalls are found around the caves. Enemies here are much
              stronger, featuring:
            </p>
            <ul>
              <li>Insectoids.</li>
              <li>Kobolds.</li>
              <li>Incubus.</li>
              <li>Cockatrices.</li>
              <li>Crystal Golems.</li>
              <li>
                Scarabs.
                <br />
                Xyggi can rarely replace any spawned scarab.
              </li>
              <li>Automatons.</li>
            </ul>
            <p>
              There are more complex trap rooms and mini puzzles here, along
              with the Minotaur and things such as spike traps scaling and doing
              increased damage.
            </p>
            <p>
              The Caves themselves are quite varied, being more enclosed than
              The Mines with very tight pathways and seldom any large rooms to
              have good sightlines in.
            </p>
          </>
        ),
      },
      {
        sectionName: "Traps",
        sectionContent: (
          <>
            <p>
              The following traps can be found throughout The Crystal Caves:
            </p>
            <ul>
              <li>Arcane Boulder Trap.</li>
              <li>Spike Trap</li>
              <li>Ceiling Trap</li>
              <li>Magic Pillar Trap</li>
              <li>Summoning Trap</li>
            </ul>
          </>
        ),
      },
      {
        sectionName: "Cockatrice Lair",
        sectionContent: (
          <>
            <p>
              The entrance to the Cockatrices lair can be found on Level 28
              behind a timed gate puzzle and an Arcane Boulder Trap.
            </p>
            <p>
              The Cockatrice's Lair is a maze full of ladder systems, gate
              puzzles and plenty of Kobold Cultists, as well as the head
              attraction of the area, a battle head-on with an indominable
              Cockatrice.
            </p>
            <p>
              A message provided when entering reads: "The craftsmanship on the
              walls here is immaculate.", which signifies that the player cannot
              use a Pickaxe or cast spells of Dig to mine their way through wall
              blocks in this level, and attempts to do so will yield nothing but
              decreasing the quality of one's pickaxe and a message.
            </p>
            <p>
              Levitation in any form (spells, from items or from potions) will
              have the player automatically grounded again before they can cross
              any pits. Spells of Open have also shown to be futile, ending up
              not working when cast on things such as gates or even chests. As
              such, having a Key or a Lockpick will be the only ways to access
              these locked chests.
            </p>
            <p>
              Kobold Cultists readily populate the inside of the lair, being
              functionally similar to their normal counterparts, but show major
              distinctions:
            </p>
            <ul>
              <li>
                Most Kobold Cultists use either magic or crossbows at range to
                deal with enemies, with a distinct lack of a melee-type Kobold
                inside the lair.
              </li>
              <li>
                Magic casting Kobolds wield a crystal shard and wear a green
                cowl and cape, as well as casting offense spells at a distance
                rather than the spell of slow most Kobolds cast.
              </li>
            </ul>
            <p>
              The lair holds an artifact, the Dragon's Mail, inside one of its
              many rooms. It is found between the first puzzle using the
              floating crystal and the second one, behind a normal door inside a
              small room.
            </p>
            <p>
              The general layout of the lair is convoluted, often filled with
              closed gates which require either a lever or floating crystal to
              be toggled to allow passage. To further complicate things, this
              area presents a staggering six sets of ladder systems, which
              allows a player to travel from one predetermined point of the
              dungeon to another fixed point. Often these will lead to a small
              room which allows the player to flip a switch, but others can
              present a few new series of rooms, which can confuse the player.
            </p>
            <p>
              A unique type of puzzle demonstrated exclusively in the lair are
              ones which drop multiple arcane boulders along a path and open a
              gate near the end of said path. These "Boulder-Gate Time Puzzles"
              force the player to think and move quickly between safe areas from
              arcane boulder strikes to enter the gate at the end before it
              closes after a period of time.
            </p>
            <p>
              There are two variants found within the lair, one optional and
              simpler, with a second one required to access the Cockatrice and
              is far more complex, using several boulder traps at once with a
              longer time span for the player to get to the other end.
            </p>
            <p>
              The final area of the level, the arena is home to several Kobold
              Cultists, a Cockatrice, and a slew of magic traps either from the
              ceiling or from the walls. Combating in such conditions can be
              quite challenging, as not only do the spells hamper movement
              throughout the fight, but holes in the arena will frequently limit
              movement for the player, but not the Cockatrice itself.
            </p>

            <img src={CockatriceLair} />
          </>
        ),
      },
    ],
  },

  {
    id: "The_Citadel",
    levelSections: [
      {
        sectionName: "Levels 31-35: The Citadel",
        sectionContent: (
          <>
            <p>
              Levels 31 to 35 are the Citadel supposedly created by Orpheus and
              Erudyce. The enemies found here are:
            </p>
            <ul>
              <li>Vampires.</li>
              <li>Incubus.</li>
              <li>Cockatrices.</li>
              <li>Crystal Golems.</li>
              <li>
                Goatmen.
                <br />
                Gharbad can rarely replace any spawned goatman.
              </li>
              <li>Automatons.</li>
              <li>Dummybots.</li>
            </ul>
          </>
        ),
      },
      {
        sectionName: "Traps",
        sectionContent: (
          <>
            <p>The following traps can be found throughout The Citadel:</p>
            <ul>
              <li>Arcane Boulder Trap.</li>
              <li>Spike Trap</li>
              <li>Ceiling Trap</li>
              <li>Magic Pillar Trap</li>
              <li>Summoning Trap</li>
            </ul>
          </>
        ),
      },
      {
        sectionName: "Bram's Castle",
        sectionContent: (
          <>
            <p>
              The portal to Bram's Castle spawns on Level 33 in a turning
              crystal puzzle room bordered by a pit.
            </p>
            <p>
              While inaccessible by mundane means, this manor lies somewhere in
              the depths of the Citadel's machinery. It seems that immortals
              like their own spaces away from prying eyes. Bram's Castle is the
              castle full of powerful monsters, ladders to traverse to new
              rooms, and a battle with Bram Kindly for a powerful artifact, the
              Wraith's Gown.
            </p>
            <p>
              Bram's Castle is segmented into several "floors", traversed
              through accessing ladders near the end of the current floor to
              access the next. The walls in this area are also reinforced,
              similarly to those found inside the Cockatrice Lair.
            </p>
            <p>
              On the first floor, the player is greeted with several rooms off
              shooting a large main corridor, each filled with several monsters
              and Treasure Chests. There are three rooms in total, the two small
              rooms to the left each contain two Skeleton enemies, a treasure
              chest and a fountain. The large room to the right contains six
              Skeleton enemies (or rarely Funny Bones) and a Ghoul Chef, with a
              single treasure chest and two Sinks at the back. In the back of
              the main corridor is a ladder leading to the next floor.
            </p>
            <p>
              The second floor is much more compact compared to the first,
              designed similarly to the normal floors of the Citadel with a
              cramped corridor connecting to small rooms. Here, three small
              rooms each present a succubus consort, alongside either a treasure
              chest or two faucets and water inside the last room of the three.
              The opposite end of the hall connects twice to a large room
              housing four Enslaved Ghouls, as well as two treasure chests. At
              the end of the corridor is the ladder to the next floor.
            </p>
            <p>
              Compared to the previous floors, the third floor is frequently
              empty, often devoid of both monsters and treasure. After passing
              by two gates, the large room that comprises a majority of this
              floor is shown to be a small library, with several rows of
              bookshelves and the ladder to the next floor. While seemingly
              pointless, this floor is home to four shadows (or rarely
              Baratheon), who spawn inside the library and can then traverse the
              floors in order to fight the player.
            </p>
            <p>
              At the highest floor of the castle is Bram Kindly's personal room,
              which is larger than most other rooms of the castle, with areas of
              lava to accent it. It is here where the player will battle Bram,
              opening a portal near the back of the combat room once Bram is
              defeated.
            </p>
            <p>
              A lever is found near the back wall of the combat room, which
              opens up a secret treasury near the start of the top floor,
              containing two treasure chests.
            </p>

            <img src={BramsCastleMap} />
          </>
        ),
      },
      {
        sectionName: "Level 35: Sanctum",
        sectionContent: (
          <>
            <p>
              It consists of a fight with Orpheus and Erudyce, the final bosses
              of the game.
            </p>
          </>
        ),
      },
    ],
  },
];

/*
{
    id: "The_Mines",
    levelSections: [
      {
        sectionName: "",
        sectionContent: 
        <>
        
        </>
      },
    ]
  },
  */
