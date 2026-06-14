import type { ReactNode } from "react";

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
];
