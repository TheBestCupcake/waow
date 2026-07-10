import type { ReactNode } from "react";

export type SpellsSection = {
  sectionName: string;
  sectionContent: ReactNode;
};

export type Spells = {
  id: string;
  spellSections: SpellsSection[];
};

export const spells: Spells = {
  id: "Spells",
  spellSections: [
    {
      sectionName: "Description",
      sectionContent: <></>,
    },
  ],
};
