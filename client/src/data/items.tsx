import type { ReactNode } from "react";

type TableData = {
  label: string;
  to: string;
  img?: string;
};
type TableRow = {
  rowHeader: string;
  rowData: TableData[];
};

export type ItemSections = {
  sectionName: string;
  sectionContent: ReactNode;
};

export type Item = {
  id: string;
  itemSections: ItemSections[];
};

export const items: Item[] = [
  {
    id: "Rings",
    itemSections: [
      {
        sectionName: "Description",
        sectionContent: [
          <p>
            Rings are a type of accessory the player can wear to enhance
            different stats or give particular effects depending on what ring is
            worn, only one ring can be worn at a time as well.{" "}
          </p>,
          <p>
            Blessed rings will boost the effects, the more blessings a ring has
            the higher the bonus to the stat, for example: a "Ring of Adornment
            blessed +2" will boost your CHR +3. All blessed rings also raise
            your AC by one for each level of blessing (Rings cannot be blessed
            by scrolls of enchant armor).{" "}
          </p>,
          <p>
            Rings also grant +1 damage in unarmed combat, and all rings weigh 3.
            All blessed rings also raise your Unarmed Mini Icon.png unarmed
            damage by one for each level of blessing.{" "}
          </p>,
          <p>
            Rings have 5 durability conditions. In descending order, they are:
            Flawless, Flawed, Rough, Cracked, and Broken. Rings cannot be
            degraded by any means except for the acid spray spell used by
            insectoids and grey slimes or a cursed scroll of repair. However,
            should they break, they cannot be repaired, as neither repair
            scrolls nor a tinkering kit will repair them.
          </p>,
        ],
      },
      {
        sectionName: "List of Rings",
        sectionContent: [],
      },
    ],
  },
];
