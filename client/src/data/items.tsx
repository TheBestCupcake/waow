import type { ReactNode } from "react";

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
        sectionContent: (
          <>
            <p>
              Rings are a type of accessory the player can wear to enhance
              different stats or give particular effects depending on what ring
              is worn, only one ring can be worn at a time as well.{" "}
            </p>
            <p>
              Blessed rings will boost the effects, the more blessings a ring
              has the higher the bonus to the stat, for example: a "Ring of
              Adornment blessed +2" will boost your CHR +3. All blessed rings
              also raise your AC by one for each level of blessing (Rings cannot
              be blessed by scrolls of enchant armor).{" "}
            </p>
            <p>
              Rings also grant +1 damage in unarmed combat, and all rings weigh
              3. All blessed rings also raise your Unarmed Mini Icon.png unarmed
              damage by one for each level of blessing.{" "}
            </p>
            <p>
              Rings have 5 durability conditions. In descending order, they are:
              Flawless, Flawed, Rough, Cracked, and Broken. Rings cannot be
              degraded by any means except for the acid spray spell used by
              insectoids and grey slimes or a cursed scroll of repair. However,
              should they break, they cannot be repaired, as neither repair
              scrolls nor a tinkering kit will repair them.
            </p>
          </>
        ),
      },
      {
        sectionName: "List of Rings",
        sectionContent: (
          <table>
            <tr>
              <th>Ring Of</th>
              <td>Description</td>
              <td>Gold</td>
              <td>Message Upon Equipping</td>
            </tr>
            <tr>
              <td>Adornment</td>
              <td>Increases charisma +1</td>
              <td>75g</td>
              <td>You feel confident about yourself.</td>
            </tr>

            <tr>
              <td>Constitution</td>
              <td> Increases constitution +1</td>
              <td>250g</td>
              <td>You feel tough.</td>
            </tr>

            <tr>
              <td>Conflict</td>
              <td>
                Grants conflict, causing all entities to attack the nearest
                entity.
                <p>
                  <i>This will turn shopkeepers and allies against you.</i>
                </p>
              </td>
              <td>400g</td>
              <td>You’re overwhelmed with a sense of paranoia.</td>
            </tr>

            <tr>
              <td>Invisibility</td>
              <td>Grants the wearer invisibility</td>
              <td>500g</td>
              <td>Your body vanishes before your eyes!</td>
            </tr>

            <tr>
              <td>Levitation</td>
              <td>
                Grants the wearer levitation
                <p>
                  <i>If removed over a pit, you will fall and die instantly.</i>
                </p>
              </td>
              <td>2000g</td>
              <td>You begin to float.</td>
            </tr>

            <tr>
              <td>Magic Resistance</td>
              <td>+30% Magical Resistance</td>
              <td>300g</td>
              <td>Your body suddenly feels fuzzy all over.</td>
            </tr>

            <tr>
              <td>Might</td>
              <td>
                Increases strength +1
                <p>
                  <i>
                    Grants the Push Effect, allowing the player to push boulders
                  </i>
                </p>
              </td>
              <td>150g</td>
              <td>You feel energy surge into your arms.</td>
            </tr>

            <tr>
              <td>Protection</td>
              <td>+1 Armor Class</td>
              <td>100g</td>
              <td>Your body suddenly feels scaly all over.</td>
            </tr>

            <tr>
              <td>Regeneration</td>
              <td>
                <p>+1 HP regeneration (+2 HP max if blessed)</p>
                <p>
                  <i>Still grants 400% regen if hunger is off.</i>
                </p>
              </td>
              <td>2500g</td>
              <td>Your skin starts to itch all over.</td>
            </tr>

            <tr>
              <td>Resolve</td>
              <td>+10 Max HP and MP, +10 per blessing (+30 HP and MP max)</td>
              <td>150g</td>
              <td>None</td>
            </tr>

            <tr>
              <td>Slow Digestion</td>
              <td>
                Grants slow digestion, slowing the time it takes for your
                character to get hungry, and starve.
                <p>
                  <i>If hunger is off, this item has no effect.</i>
                </p>
              </td>
              <td>600g</td>
              <td>You feel calm.</td>
            </tr>

            <tr>
              <td>Teleportation</td>
              <td>
                Randomly teleports the wearer to a random location, highly
                unpredictable.
              </td>
              <td>125g</td>
              <td>The ring yanks at your finger.</td>
            </tr>

            <tr>
              <td>Warning</td>
              <td>
                Grants Warning, showing locations of all creatures within a 11
                tiles radius on the mini map (+5 tile radius per blessing)
              </td>
              <td>450g</td>
              <td>You feel your awareness expanding around you.</td>
            </tr>
          </table>
        ),
      },
    ],
  },
];
