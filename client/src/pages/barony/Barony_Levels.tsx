import { Link } from "react-router-dom";
import GridList from "../../components/GridList";

type NavItem = {
  label: string;
  to: string;
  img?: string;
};

function Barony_Levels() {
  const levels: NavItem[] = [
    {
      label: "Minehead",
      to: "/Barony/Levels/Minehead",
    },
    {
      label: "The Mines",
      to: "/Barony/Levels/The_Mines",
    },
    {
      label: "The Swamp",
      to: "/Barony/Levels/The_Swamp",
    },
    {
      label: "Sand Labyrinth",
      to: "/Barony/Levels/Sand_Labyrinth",
    },
    {
      label: "The Ruins",
      to: "/Barony/Levels/The_Ruins",
    },
    {
      label: "Hell",
      to: "/Barony/Levels/Hell",
    },
    {
      label: "Hamlet",
      to: "/Barony/Levels/Hamlet",
    },
    {
      label: "Crystal Caves",
      to: "/Barony/Levels/Crystal_Caves",
    },
    {
      label: "The Citadel",
      to: "/Barony/Levels/The_Citadel",
    },
  ];

  return (
    <div className="baronyContainer">
      <div className="barony">
        <h1>Dungeon Progression</h1>
        <p>This is a progression guide for dungeon levels 1-35. </p>
        <br></br>
        <p>
          The dungeon is divided into distinct sections, each with a unique
          floor plan spanning its levels. Each section also has its own unique
          collection of enemy types, traps, and secrets to explore. As the
          player progresses deeper into the dungeon, enemies grow stronger and
          greater in number. This incentivizes the player to fully explore each
          level, as the player will need any and every advantage they can get if
          they plan to survive.{" "}
        </p>
        <br></br>
        <p>
          The 5th level of each section is a transition floor; a "safe area"
          that always contains 2 chests, as well as a ladder leading to the 1st
          floor of the next section. These areas provide the player with a much
          needed rest point to regenerate HP and MP, and to plan their next
          steps accordingly. While no standard enemies spawn on transition
          floors, the 2 chests on transition floors can be Mimics.{" "}
        </p>
        <br></br>
        <p>
          While each section of the dungeon contains its own unique assortment
          of enemies, the following enemies can be spawned by player
          interactions regardless of section:{" "}
        </p>
        <ul>
          <li>
            Ghouls or rarely their unique variant Coral Grimes may spawn via
            gravestones. Ghoul spawns are replaced by Enslaved Ghouls by the
            Ruins
          </li>

          <li>
            Succubi or rarely their unique variant Lilith may spawn via
            fountains. In the Sand Labyrinth and Ruins, lesser Incubi have a
            chance to spawn as well. In the Caves and Citadel, only regular
            incubi spawn.
          </li>

          <li>Slimes (of assorted colors) may spawn via sinks.</li>

          <li>
            Humans (along with their many variants) can spawn on any dungeon
            level, in Minetown and Hamlet.
          </li>
        </ul>
      </div>

      <div className="baronyGrid">
        <h1>Levels</h1>

        <ul>
          <GridList
            items={levels}
            getKey={(level) => level.to}
            renderItem={(level) => (
              <Link className="gridLink" to={level.to}>
                <b>{level.label}</b>
              </Link>
            )}
          ></GridList>
        </ul>
      </div>
    </div>
  );
}

export default Barony_Levels;
