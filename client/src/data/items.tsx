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

  {
    id: "Weapons",
    itemSections: [
      {
        sectionName: "Description",
        sectionContent: (
          <>
            <p>
              Weapons are a class of items in Barony used to inflict harm on
              others. Most humanoid creatures wield weapons, and they will drop
              them upon death. Weapons can also be found inside of treasure
              chests, shops, and as floor loot.
            </p>
            <p>
              Each weapon type is tied to a specific weapon skill, with five
              skills for different melee weapons, and one skill for all ranged
              weapons. Using a weapon will gradually improve the player's
              proficiency with that weapon type, increasing damage inflicted and
              decreasing the chance for the weapon to degrade on use.
            </p>
            <p>
              It is important to appraise weapons before using them. If the
              player equips a cursed weapon, they will be unable to remove the
              weapon until it breaks, or until the curse is removed by a scroll,
              spell, or blessings. Blessed weapons will inflict more damage than
              unblessed ones.
            </p>
          </>
        ),
      },

      {
        sectionName: "Melee Weapons",
        sectionContent: (
          <>
            <p>
              Melee combat in Barony allows the player to attack enemies with
              either uncharged or charged attacks. Uncharged attacks are
              performed by simply pressing the attack button, immediately
              letting out an attack. Charged attacks are performed by holding
              the attack button then releasing it after the weapon starts
              shaking, increasing the damage per hit at the cost of damage per
              second. An attack performed before the weapon starts shaking will
              be uncharged, regardless of how long it's been charging. The
              player can not use their offhand item or cast spells while
              charging or swinging a melee weapon.
            </p>
            <p>
              Attacking enemies from behind may deal more damage depending on
              the context. When they do not currently see a target, a strike to
              the back deals bonus damage in the form of a backstab. When they
              are engaged in combat, attacking from behind may flank their
              defenses for bonus damage.
            </p>
            <p>Melee weapons scale directly with the strength attribute.</p>

            <table>
              <caption>Weapon class effects</caption>
              <tr>
                <td>Weapon</td>
                <td>Bonus Effect</td>
              </tr>

              <tr>
                <td>Polearm</td>
                <td>+33% minimum weapon damage</td>
              </tr>

              <tr>
                <td>Sword</td>
                <td>+10% Bleed chance</td>
              </tr>

              <tr>
                <td>Mace</td>
                <td>+10% chance to degrade armor</td>
              </tr>

              <tr>
                <td>Axe</td>
                <td>
                  <p>Inflicts +1 piercing damage on hit</p>
                  <p>Deals increased damage to wooden objects</p>
                </td>
              </tr>
            </table>

            <table>
              <thead>
                <tr>
                  <th>
                    <i>
                      <b>Name</b>
                    </i>
                  </th>
                  <th>
                    <i>
                      <b>Weight</b>
                    </i>
                    <i>
                      <b>Damage (at excellent quality)</b>
                    </i>
                  </th>
                  <th>
                    <i>
                      <b>Weapon Class/Skill</b>
                    </i>
                  </th>
                  <th>
                    <i>
                      <b>Additional Effect</b>
                    </i>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <i>Quarter Staff</i>
                  </td>
                  <td>30</td>
                  <td>12g</td>
                  <td>+5</td>
                  <td>Polearm</td>
                  <td>none</td>
                </tr>
                <tr>
                  <td>
                    <i>Bronze Sword</i>
                  </td>
                  <td>30</td>
                  <td>20g</td>
                  <td>+5</td>
                  <td>Sword</td>
                  <td>none</td>
                </tr>
                <tr>
                  <td>
                    <i>Bronze Mace</i>
                  </td>
                  <td>30</td>
                  <td>20g</td>
                  <td>+5</td>
                  <td>Mace</td>
                  <td>none</td>
                </tr>
                <tr>
                  <td>
                    <i>Bronze Axe</i>
                  </td>
                  <td>30</td>
                  <td>20g</td>
                  <td>+6</td>
                  <td>Axe</td>
                  <td>none</td>
                </tr>
                <tr>
                  <td>
                    <i>Iron Spear</i>
                  </td>
                  <td>30</td>
                  <td>45g</td>
                  <td>+6</td>
                  <td>Polearm</td>
                  <td>none</td>
                </tr>
                <tr>
                  <td>
                    <i>Iron Sword</i>
                  </td>
                  <td>30</td>
                  <td>45g</td>
                  <td>+6</td>
                  <td>Sword</td>
                  <td>none</td>
                </tr>
                <tr>
                  <td>
                    <i>Iron Mace</i>
                  </td>
                  <td>30</td>
                  <td>45g</td>
                  <td>+6</td>
                  <td>Mace</td>
                  <td>none</td>
                </tr>
                <tr>
                  <td>
                    <i>Iron Axe</i>
                  </td>
                  <td>30</td>
                  <td>45g</td>
                  <td>+7</td>
                  <td>Axe</td>
                  <td>none</td>
                </tr>
                <tr>
                  <td>
                    <i>Steel Halberd</i>
                  </td>
                  <td>40</td>
                  <td>120g</td>
                  <td>+7</td>
                  <td>Polearm</td>
                  <td>none</td>
                </tr>
                <tr>
                  <td>
                    <i>Steel Sword</i>
                  </td>
                  <td>40</td>
                  <td>120g</td>
                  <td>+7</td>
                  <td>Sword</td>
                  <td>none</td>
                </tr>
                <tr>
                  <td>
                    <i>Steel Mace</i>
                  </td>
                  <td>40</td>
                  <td>120g</td>
                  <td>+7</td>
                  <td>Mace</td>
                  <td>none</td>
                </tr>
                <tr>
                  <td>
                    <i>Steel Axe</i>
                  </td>
                  <td>40</td>
                  <td>120g</td>
                  <td>+8</td>
                  <td>Axe</td>
                  <td>none</td>
                </tr>
                <tr>
                  <td>
                    <i>Crystal Spear</i>
                  </td>
                  <td>40</td>
                  <td>700g</td>
                  <td>+11</td>
                  <td>Polearm</td>
                  <td>
                    Increased chance to train weapon skill
                    <br />
                    <p> Fragile: -25% durability</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <i>Crystal Sword</i>
                  </td>
                  <td>40</td>
                  <td>700g</td>
                  <td>+11</td>
                  <td>Sword</td>
                  <td>
                    Increased chance to train weapon skill
                    <br />
                    <p> Fragile: -25% durability</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <i>Crystal Mace</i>
                  </td>
                  <td>40</td>
                  <td>700g</td>
                  <td>+11</td>
                  <td>Mace</td>
                  <td>
                    Increased chance to train weapon skill
                    <br />
                    <p> Fragile: -25% durability</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <i>Crystal Axe</i>
                  </td>
                  <td>40</td>
                  <td>700g</td>
                  <td>+12</td>
                  <td>Axe</td>
                  <td>
                    Increased chance to train weapon skill
                    <br />
                    <p> Fragile: -25% durability</p>
                  </td>
                </tr>
              </tbody>
              <tfoot></tfoot>
            </table>

            <h3>Alternative Melee Weapons</h3>
            <p>
              These weapons function similarly to other weapons found in the
              dungeon but appear less frequently on the floor, as rewards, or in
              shops. Each weapons has some additional mechanics and durability
              that will cause them to break.
            </p>

            <table>
              <thead>
                <tr>
                  <th>
                    <i>
                      <b>Name</b>
                    </i>
                  </th>
                  <th>
                    <i>
                      <b>Weight</b>
                    </i>
                    <i>
                      <b>Damage (at excellent quality)</b>
                    </i>
                  </th>
                  <th>
                    <i>
                      <b>Weapon Class/Skill</b>
                    </i>
                  </th>
                  <th>
                    <i>
                      <b>Additional Effect</b>
                    </i>
                  </th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>Claymore</td>
                  <td>30</td>
                  <td>120g</td>
                  <td>+7</td>
                  <td>Sword</td>
                  <td>
                    Critical strikes perform a sweep attack, damaging multiple
                    enemies in an arc. <br />
                    Hold block while attacking to parry incoming melee attacks,
                    gaining AC from weapon ATK and Sword skill. <br />
                    Ignores shield held AC during parry.
                  </td>
                </tr>

                <tr>
                  <td>Steel Flail</td>
                  <td>60</td>
                  <td>180g</td>
                  <td>+7</td>
                  <td>Mace</td>
                  <td>
                    +50% melee attack range. <br />
                    -50% ATK. Penalty reduced based on Maces skill. <br />
                    Inflicts knockback at close range. <br />
                    Hold attack to continuously swing, hitting enemies around
                    you. <br />
                    Performs a critical strike after 7 swings.
                  </td>
                </tr>
              </tbody>
            </table>
          </>
        ),
      },

      {
        sectionName: "Ranged Weapons",
        sectionContent: (
          <>
            <p>
              In exchange for not being able to defend oneself effectively in
              melee combat, ranged weapons have the ability to launch
              projectiles a fair distance away, allowing the player deal with
              threats from a safe distance. The rate of fire and range of the
              projectile varies between each type of ranged weapon, allowing
              some to trade in safety distance for better damage output, and
              vice versa.
            </p>
            <p>
              Excluding the Slingshot, all ranged weapons can also utilize
              special arrows. When a quiver is held in the left hand, it applies
              its effects to the weapon in the right hand, usually by increasing
              the damage output or inflicting status effects on the target.
            </p>
            <p>
              Ranged weapons scale directly with the dexterity attribute. They
              also gain a +1% armor pierce chance for every point of perception
              you have.
            </p>

            <table>
              <thead>
                <tr>
                  <th>
                    <i>
                      <b>Name</b>
                    </i>
                  </th>
                  <th>
                    <i>
                      <b>Weight</b>
                    </i>
                  </th>
                  <th>
                    <i>
                      <b>Value</b>
                    </i>
                  </th>
                  <th>
                    <i>
                      <b>Damage (at excellent quality)</b>
                    </i>
                  </th>
                  <th>
                    <i>
                      <b>Range</b>
                    </i>
                  </th>
                  <th>
                    <i>
                      <b>Firing Speed</b>
                    </i>
                  </th>
                  <th>
                    <i>
                      <b>Bonus Effect</b>
                    </i>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <i>Slingshot</i>
                  </td>
                  <td>5</td>
                  <td>12g</td>
                  <td>+5</td>
                  <td>Short</td>
                  <td>~1/1 sec</td>
                  <td>none</td>
                </tr>
                <tr>
                  <td>
                    <i>Shortbow</i>
                  </td>
                  <td>20</td>
                  <td>40g</td>
                  <td>+7</td>
                  <td>Medium</td>
                  <td>~1/1.25 sec</td>
                  <td>none</td>
                </tr>
                <tr>
                  <td>
                    <i>Crossbow</i>
                  </td>
                  <td>30</td>
                  <td>150g</td>
                  <td>+8</td>
                  <td>Short</td>
                  <td>~1/0.8 sec</td>
                  <td>none</td>
                </tr>
                <tr>
                  <td>
                    <i>Infected Branch Bow</i>
                  </td>
                  <td>20</td>
                  <td>120g</td>
                  <td>+9</td>
                  <td>Long</td>
                  <td>~1/1.25 sec</td>
                  <td>
                    {" "}
                    25% Chance while firing to launch a seed leaving Spores that
                    inflict Poison and Slow
                    <p>Spores can skill up Mysticism</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <i>Compound Bow</i>
                  </td>
                  <td>20</td>
                  <td>800g</td>
                  <td>+10</td>
                  <td>Medium</td>
                  <td>~1/1 sec</td>
                  <td>none</td>
                </tr>
                <tr>
                  <td>
                    <i>Longbow</i>
                  </td>
                  <td>20</td>
                  <td>120g</td>
                  <td>+11</td>
                  <td>Long</td>
                  <td>~1/1.50 sec</td>
                  <td>none</td>
                </tr>
                <tr>
                  <td>
                    <i>Arbalest</i>
                  </td>
                  <td>100</td>
                  <td>200g</td>
                  <td>+15</td>
                  <td>Short</td>
                  <td>~1/2 sec</td>
                  <td>+50% Armor Pierce chance</td>
                </tr>
              </tbody>
              <tfoot></tfoot>
            </table>
          </>
        ),
      },

      {
        sectionName: "Throwing Weapons",
        sectionContent: (
          <>
            <p>
              In addition to ranged weapons, players may also attack from afar
              with throwing weapons. These items usually trade their quick fire
              rate, high damage output and durability for the need to retrieve
              them after use. Players can charge up the attack of these weapons
              in a similar manner to melee weapons, increasing the base damage,
              armor piercing, and range of the throwing weapon. Additionally,
              despite scaling with ranged skill, throwing weapons inflict
              typeless damage, not ranged damage. This makes them particularly
              effective against ranged-resistant enemies, such as Skeletons.
            </p>
            <p>
              Thrown ranged weapons scale with your dexterity score, divided by
              four.
            </p>

            <table>
              <thead>
                <tr>
                  <th>
                    <i>
                      <b>Name</b>
                    </i>
                  </th>
                  <th>
                    <i>
                      <b>Weight</b>
                    </i>
                  </th>
                  <th>
                    <i>
                      <b>Value</b>
                    </i>
                  </th>
                  <th>
                    <i>
                      <b>Damage (at excellent quality)</b>
                    </i>
                  </th>
                  <th>
                    <i>
                      <b>Bonus Effect</b>
                    </i>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Gems</td>
                  <td>var.</td>
                  <td>var.</td>
                  <td>+4</td>
                  <td>
                    {" "}
                    +50% Armor Pierce
                    <p>+50% chance to shatter on hit</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <i>Bolas</i>
                  </td>
                  <td>5</td>
                  <td>12g</td>
                  <td>+3</td>
                  <td>
                    Unbreakable
                    <p>
                      {" "}
                      Inflicts Rooted Effect duration increases with DEX/PER and
                      charge time
                    </p>
                    <p>
                      <i>Falls to the floor on Rooted expiry</i>
                    </p>
                    <p> +50% Armor Pierce</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <i>Bronze Tomahawk</i>
                  </td>
                  <td>5</td>
                  <td>12g</td>
                  <td>+6</td>
                  <td>
                    Unbreakable
                    <p> +50% Armor Pierce</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <i>Iron Dagger</i>
                  </td>
                  <td>5</td>
                  <td>25g</td>
                  <td>+8</td>
                  <td>
                    Unbreakable
                    <p> +50% Armor Pierce</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <i>Steel Chakram</i>
                  </td>
                  <td>5</td>
                  <td>80g</td>
                  <td>+10</td>
                  <td>
                    Unbreakable
                    <p> +50% Armor Pierce</p>
                    <p>
                      <i>Ricochets off walls</i>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <i>Crystal Shuriken</i>
                  </td>
                  <td>5</td>
                  <td>120g</td>
                  <td>+12</td>
                  <td>
                    Unbreakable
                    <p> +50% Armor Pierce</p>
                    <p>
                      <i>Ricochets off walls</i>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td>Slop Ball</td>
                  <td>2</td>
                  <td>0g</td>
                  <td>+3</td>
                  <td>
                    Inflicts Blindness
                    <br />
                    <i>Dissolves on landing</i>
                    <p>
                      <i>Travels past creatures</i>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td>Grease Ball</td>
                  <td>2</td>
                  <td>0g</td>
                  <td>+3</td>
                  <td>
                    Inflicts Greasy
                    <p>Leaves Slippery trails</p>
                    <p>Slippery terrain ignites near flames</p>
                    <p>
                      <i>Dissolves on landing</i>
                    </p>
                    <p>
                      <i>Travels past creatures</i>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td>Dust ball</td>
                  <td>2</td>
                  <td>0g</td>
                  <td>+3</td>
                  <td>
                    Inflicts Dusted on impact
                    <p>Dusted lowers Perception</p>
                    <p>Leaves Mycelium trails</p>
                    <p>Mycelium sprouts a damaging mushroom near enemies</p>
                    <p>
                      <i>Dissolves on landing</i>
                    </p>
                    <p>
                      <i>Travels past creatures</i>
                    </p>
                  </td>
                </tr>
              </tbody>
              <tfoot></tfoot>
            </table>
          </>
        ),
      },

      {
        sectionName: "Arrows & Quivers",
        sectionContent: (
          <>
            <table>
              <tbody>
                <tr>
                  <th>
                    <i>
                      <b>Name</b>
                    </i>
                  </th>
                  <th>
                    <i>
                      <b>Weight</b>
                    </i>{" "}
                  </th>
                  <th>
                    <i>
                      <b>Value</b>
                    </i>{" "}
                    <p>
                      <i>
                        <b>(Per Arrow)</b>
                      </i>
                    </p>
                  </th>
                  <th>
                    <i>
                      <b>Damage</b>
                    </i>
                  </th>
                  <th>
                    <i>
                      <b>Bonus Effects</b>
                    </i>
                  </th>
                </tr>
                <tr>
                  <td>
                    <i>Swift Ammo</i>
                  </td>
                  <td>1+(1 per 5 arrows after 5)</td>
                  <td>5g</td>
                  <td>-2</td>
                  <td>Reduces held weapon's reload time</td>
                </tr>
                <tr>
                  <td>
                    <i>Fire Ammo</i>
                  </td>
                  <td>1+(1 per 5 arrows after 5)</td>
                  <td>8g</td>
                  <td>+2</td>
                  <td>
                    Inflicts Burning status effect on hit enemies
                    <p>
                      <i>Illuminates arrows</i>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <i>Silver Ammo</i>
                  </td>
                  <td>1+(1 per 5 arrows after 5)</td>
                  <td>12g</td>
                  <td>+2</td>
                  <td>
                    Applies the smite damage modifier, dealing +50% damage
                    against demonic and undead enemies
                  </td>
                </tr>
                <tr>
                  <td>
                    <i>Springshot Ammo</i>
                  </td>
                  <td>1+(1 per 5 arrows after 5)</td>
                  <td>8g</td>
                  <td>+4</td>
                  <td>Applies knockback</td>
                </tr>
                <tr>
                  <td>
                    <i>Piercing Ammo</i>
                  </td>
                  <td>1+(1 per 5 arrows after 5)</td>
                  <td>10g</td>
                  <td>+4</td>
                  <td>Pierces enemy armor (50% AC)</td>
                </tr>
                <tr>
                  <td>
                    <i>Hunting Ammo</i>
                  </td>
                  <td>1+(1 per 5 arrows after 5)</td>
                  <td>15g</td>
                  <td>+4</td>
                  <td>
                    Applies the hunting damage modifier, dealing +50% damage
                    against large and small beasts
                    <p>
                      Inflicts slow
                      <br />
                      Inflicts poison
                    </p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <i>Crystal Ammo</i>
                  </td>
                  <td>1+(1 per 5 arrows after 5)</td>
                  <td>15g</td>
                  <td>+6</td>
                  <td>Inflicts high damage</td>
                </tr>
              </tbody>
            </table>
          </>
        ),
      },

      {
        sectionName: "Special Weapons",
        sectionContent: (
          <>
            <p>
              Special weapons possess unique abilities that set them apart from
              ordinary weapons. Some special weapons can be found rarely in the
              dungeon, and some are only available as a class's starting weapon.
            </p>
            <table>
              <tbody>
                <tr>
                  <th>
                    <i>
                      <b>Image</b>
                    </i>
                  </th>
                  <th>
                    <i>
                      <b>Name</b>
                    </i>
                  </th>
                  <th>
                    <i>
                      <b>Weight</b>
                    </i>
                  </th>
                  <th>
                    <i>
                      <b>Value</b>
                    </i>
                  </th>
                  <th>
                    <i>
                      <b>Damage (at excellent quality)</b>
                    </i>
                  </th>
                  <th>
                    <i>
                      <b>Weapon Class/Skill</b>
                    </i>
                  </th>
                  <th>
                    <i>
                      <b>Bonus Effects</b>
                    </i>
                  </th>
                </tr>
                <tr>
                  <td>
                    <i>Boomerang</i>
                  </td>
                  <td>10</td>
                  <td>50g</td>
                  <td>+6</td>
                  <td>Ranged</td>
                  <td>
                    Unbreakable
                    <p>+50% Armor Pierce</p>
                    <p>
                      <i>
                        Returns to the player a short time after hitting a
                        target.
                      </i>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <i>Whip</i>
                  </td>
                  <td>20</td>
                  <td>100g</td>
                  <td>+7</td>
                  <td>Ranged</td>
                  <td>
                    Unbreakable
                    <p>+50% melee attack range</p>
                    <p>Scales with STR/2 + DEX/2</p>
                    <p>Slower attacks</p>
                    <p>+100% disarm chance on immobile or disoriented foes</p>
                    <p>+33% disarm chance on drunk or confused foes</p>
                    <p>+50% bleed chance on backstab strikes</p>
                    <p>+20% bleed chance on flanking strikes</p>
                    <p>+100% bleed chance on disarming strikes</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <i>Rapier</i>
                  </td>
                  <td>30</td>
                  <td>350g</td>
                  <td>+8</td>
                  <td>Sword</td>
                  <td>
                    Unbreakable
                    <p> ATK scales with DEX instead of STR</p>
                    <p>Basic attacks receive 50% reduced scaling from</p>
                    <p>+25% Critical Damage</p>
                    <p>+8 Riposte Damage</p>
                    <p>
                      Hold block while attacking to Riposte incoming melee
                      attacks, gaining additional AC
                    </p>
                    <p>Ignores shield held AC during Riposte</p>
                    <p>+%AC from weapon ATK and Sword Skill</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <i>Shillelagh</i>
                  </td>
                  <td>30</td>
                  <td>120g</td>
                  <td>+6</td>
                  <td>Mace</td>
                  <td>
                    Unbreakable
                    <p> On striking debilitated foes:</p>
                    <p>
                      +50% bonus magic damage when affected by a single debuff
                    </p>
                    <p>+25% bonus magic damage per subsequent debuff</p>
                    <p>
                      Bonus magic damage is modified by 40-60%; this penalty is
                      reduced by 1% per 2 Mysticism skill
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
          </>
        ),
      },

      {
        sectionName: "Artifact Weapons",
        sectionContent: (
          <>
            <p>
              Every weapon type except Unarmed has at least one artifact weapon.
              These weapons may be found in poor condition, but their
              performance improves dramatically once they have been restored.
              Every weapon also has a legendary effect.
            </p>
            <table>
              <tbody>
                <tr>
                  <th>
                    <i>
                      <b>Name</b>
                    </i>
                  </th>
                  <th>
                    <i>
                      <b>Weight</b>
                    </i>
                  </th>
                  <th>
                    <i>
                      <b>Value</b>
                    </i>{" "}
                  </th>
                  <th>
                    <i>
                      <b>Damage (at excellent quality)</b>
                    </i>
                  </th>
                  <th>
                    <i>
                      <b>Weapon Class/Skill</b>
                    </i>
                  </th>
                  <th>
                    <i>
                      <b>Bonus Effects</b>
                    </i>
                  </th>
                </tr>
                <tr>
                  <td>
                    <i>Dyrnwyn</i>
                  </td>
                  <td>30</td>
                  <td>3000g</td>
                  <td>+10 (blessed +1)</td>
                  <td>Sword</td>
                  <td>
                    Unbreakable
                    <p>
                      0-100% chance (based on Swords skill) to inflict Burning
                      and Smite on-hit.
                    </p>
                    <p>
                      Smite inflicts +25-50% (based on Swords skill) increased
                      damage against unholy monsters.
                    </p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <i>Sharur</i>
                  </td>
                  <td>0</td>
                  <td>3000g</td>
                  <td>+10 (blessed +1)</td>
                  <td>Mace</td>
                  <td>
                    Unbreakable
                    <p>Speaks to the player in text chat. A lot.</p>
                    <p>
                      Increases mana regeneration while held. This effect scales
                      with Maces skill.
                    </p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <i>Gungnir</i>
                  </td>
                  <td>30</td>
                  <td>3000g</td>
                  <td>+10 (blessed +1)</td>
                  <td>Polearm</td>
                  <td>
                    Unbreakable
                    <p>Always rolls maximum damage allowed by Polearm skill.</p>
                    <p>
                      0-25% chance (based on Polearm skill) to pierce 50% AC.
                    </p>
                    <p>Never misses bats.</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <i>Parashu</i>
                  </td>
                  <td>30</td>
                  <td>3000g</td>
                  <td>+11 (blessed +1)</td>
                  <td>Axe</td>
                  <td>
                    Unbreakable
                    <p>
                      0-25% chance (based on Axes skill) to deal +50% damage and
                      inflict slow.
                    </p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <i>Khryselakatos</i>
                  </td>
                  <td>30</td>
                  <td>3000g</td>
                  <td>+10</td>
                  <td>
                    Ranged
                    <p>(Medium, ~1/1sec)</p>
                  </td>
                  <td>
                    Unbreakable
                    <p>
                      0-50% chance (based on Ranged skill) to apply random
                      quiver effect and conserve equipped quiver ammo.
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
          </>
        ),
      },
    ],
  },

  {
    id: "Armor",
    itemSections: [
      {
        sectionName: "Description",
        sectionContent: (
          <>
            <p>
              Armor can be found all throughout the game. Enemies might be seen
              wearing armor, and will drop the armor upon death. Armor can also
              be found inside of treasure chests, Shops, and laying around out
              in the open. Armor values are measured in Armor Class (AC).
            </p>
            <p>
              It is important to lore armors before using them, if the player
              equips a cursed piece of armor they will be unable to unequip the
              armor until it breaks, or is somehow uncursed. Blessed pieces of
              equipment with bonus properties, such as +1 speed, may also
              increase their bonus effect along with the AC. Furthermore, cursed
              objects with will work in reverse by affecting their AC and stats
              by the negative amount.
            </p>
          </>
        ),
      },

      {
        sectionName: "Mechanics",
        sectionContent: (
          <>
            <p>
              Armor class in Barony directly prevents damage from physical
              attacks. Every creature's base armor class is equal to its
              Constitution score. The base calculation for damage taken after AC
              is relatively simple:
            </p>
            <p>DamageTaken=MAX(0.75×Damage−AC,0)+0.25×Damage</p>
            <p>
              Where Damage is the raw attack power of the weapon. In the formula
              above, the numbers 0.75 and 0.25 represent the complimentary sides
              of Armor Effectiveness. The default Armor Effectiveness is 0.75,
              meaning that 75% of your damage will be reduced by the targets AC
              while 25% of it will not. Here is the same formula with 90% armor
              effectiveness:
            </p>
            <p>DamageTaken=MAX(0.9×Damage−AC,0)+0.1×Damage</p>

            <table>
              <caption>Examples of AC damage reduction</caption>
              <tbody>
                <tr>
                  <th>Armor Effectiveness</th>
                  <th>Damage</th>
                  <th>AC</th>
                  <th>Damage Taken</th>
                </tr>
                <tr>
                  <td>75%</td>
                  <td>5</td>
                  <td>10</td>
                  <td>1</td>
                </tr>
                <tr>
                  <td>75%</td>
                  <td>20</td>
                  <td>10</td>
                  <td>10</td>
                </tr>
                <tr>
                  <td>100%</td>
                  <td>20</td>
                  <td>10</td>
                  <td>10</td>
                </tr>
                <tr>
                  <td>100%</td>
                  <td>20</td>
                  <td>20</td>
                  <td>0</td>
                </tr>
              </tbody>
            </table>

            <p>
              AC and armor effectiveness can be modified in a number of ways as
              outlined in the table below:
            </p>
            <table>
              <caption>
                Various Effects on Armor Class and Armor Effectiveness
              </caption>
              <tbody>
                <tr>
                  <th>
                    <b>Factor</b>
                  </th>
                  <th>
                    <b>Influence</b>
                  </th>
                </tr>
                <tr>
                  <td>Blocking</td>
                  <td>Increases AC effectiveness to exactly 100%</td>
                </tr>
                <tr>
                  <td>Wearing Blessed equipment</td>
                  <td>Increases AC effectiveness by 2.5% per blessing</td>
                </tr>
                <tr>
                  <td>Piercing shots / ammo</td>
                  <td>Reduces AC by 50%</td>
                </tr>
                <tr>
                  <td>Only charging a thrown weapon to 1/15 power</td>
                  <td>Reduced damage by 1/2 of target AC</td>
                </tr>
                <tr>
                  <td>Charging a thrown weapon a lot</td>
                  <td>Reduces base AC by 0 - 75% based on charge level</td>
                </tr>
                <tr>
                  <td>Attacking with Gungnir</td>
                  <td>Up to 50% AC reduction depending on Polearm skill</td>
                </tr>
                <tr>
                  <td>Armor quality</td>
                  <td>
                    Excellent Armor provides the greatest AC, Decrepit armor
                    provides the least.
                  </td>
                </tr>
              </tbody>
            </table>

            <p>
              In this way blocking can totally mitigate physical damage if a
              character's AC is high enough, and if the player is wearing enough
              blessed armor (+10 total) they can totally mitigate all damage
              that is lower than their armor class. Note that for races like the
              Succubus blessings and curses both count positively.
            </p>
          </>
        ),
      },

      {
        sectionName: "Shield",
        sectionContent: (
          <>
            <table>
              <tbody>
                <tr>
                  <th>
                    <i>
                      <b>Name</b>
                    </i>
                  </th>
                  <th>
                    <i>
                      <b>Weight</b>
                    </i>
                  </th>
                  <th>
                    <i>
                      <b>Gold</b>
                    </i>
                  </th>
                  <th>
                    <i>
                      <b>Effect</b>
                    </i>
                  </th>
                </tr>
                <tr>
                  <td>
                    <i>Wooden Shield</i>
                  </td>
                  <td>30</td>
                  <td>18g</td>
                  <td>+1 Armor Class</td>
                </tr>
                <tr>
                  <td>
                    <i>Bronze Shield</i>
                  </td>
                  <td>40</td>
                  <td>30g</td>
                  <td>+2 Armor Class</td>
                </tr>
                <tr>
                  <td>
                    <i>Iron Shield</i>
                  </td>
                  <td>40</td>
                  <td>45g</td>
                  <td>+3 Armor Class</td>
                </tr>
                <tr>
                  <td>
                    <i>Steel Shield</i>
                  </td>
                  <td>50</td>
                  <td>150g</td>
                  <td>+4 Armor Class</td>
                </tr>
                <tr>
                  <td>
                    <i>Steel Shield of Magic Resistance</i>
                  </td>
                  <td>50</td>
                  <td>750g</td>
                  <td>
                    +4 Armor Class
                    <p>+30% Magical Resistance</p>
                    <p>
                      <i>Gain additional magical resistance while blocking</i>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <i>Crystal Shield</i>
                  </td>
                  <td>50</td>
                  <td>1000g</td>
                  <td>
                    +5 Armor Class
                    <p>Fragile: -25 Durability</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <i>Mirror Shield</i>
                  </td>
                  <td>40</td>
                  <td>750g</td>
                  <td>
                    +0 Armor Class
                    <p>
                      Fragile: Has a 100% chance to degrade when blocking any
                      non-magical attack
                    </p>
                    <p>
                      <i>Reflects all magical attacks while blocking</i>
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
          </>
        ),
      },

      {
        sectionName: "Hand-Gear",
        sectionContent: (
          <>
            <table>
              <tbody>
                <tr>
                  <th>
                    <i>
                      <b>Name</b>
                    </i>
                  </th>
                  <th>
                    <i>
                      <b>Weight</b>
                    </i>
                  </th>
                  <th>
                    <i>
                      <b>Gold</b>
                    </i>
                  </th>
                  <th>
                    <i>
                      <b>Effect</b>
                    </i>
                  </th>
                </tr>
                <tr>
                  <td>
                    <i>Suede Gloves</i>
                  </td>
                  <td>1</td>
                  <td>90g</td>
                  <td>+0 Armor Class</td>
                </tr>
                <tr>
                  <td>
                    <i>Leather Gloves</i>
                  </td>
                  <td>15</td>
                  <td>15g</td>
                  <td>+1 Armor Class</td>
                </tr>
                <tr>
                  <td>
                    <i>Leather Gloves of Dexterity</i>
                  </td>
                  <td>15</td>
                  <td>150g</td>
                  <td>
                    +1 Armor Class
                    <p>+1 Dexterity</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <i>Brass Knuckles</i>
                  </td>
                  <td>30</td>
                  <td>35g</td>
                  <td>
                    +1 Armor Class
                    <p>+1 Unarmed Attack</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <i>Iron Bracers</i>
                  </td>
                  <td>20</td>
                  <td>30g</td>
                  <td>+2 Armor Class</td>
                </tr>
                <tr>
                  <td>
                    <i>Bracers of Constitution</i>
                  </td>
                  <td>20</td>
                  <td>300g</td>
                  <td>
                    +2 Armor Class
                    <p>+1 Constitution</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <i>Iron Knuckles</i>
                  </td>
                  <td>40</td>
                  <td>100g</td>
                  <td>
                    +2 Armor Class
                    <p>+2 Unarmed Attack</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <i>Steel Gauntlets</i>
                  </td>
                  <td>30</td>
                  <td>100g</td>
                  <td>+3 Armor Class</td>
                </tr>
                <tr>
                  <td>
                    <i>Steel Gauntlets of Strength</i>
                  </td>
                  <td>30</td>
                  <td>500g</td>
                  <td>
                    +3 Armor Class
                    <p>+1 Strength</p>
                    <p>Grants push, allowing the player to push boulders</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <i>Spiked Gauntlets</i>
                  </td>
                  <td>60</td>
                  <td>250g</td>
                  <td>
                    +3 Armor Class
                    <p>+3 Unarmed Attack</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <i>Crystal Gauntlets</i>
                  </td>
                  <td>40</td>
                  <td>800g</td>
                  <td>
                    +4 Armor Class
                    <p>Fragile: -25 Durability</p>
                  </td>
                </tr>
              </tbody>
            </table>
          </>
        ),
      },

      {
        sectionName: "Foot-Gear",
        sectionContent: (
          <>
            <table>
              <tbody>
                <tr>
                  <th>
                    <i>
                      <b>Name</b>
                    </i>
                  </th>
                  <th>
                    <i>
                      <b>Weight</b>
                    </i>
                  </th>
                  <th>
                    <i>
                      <b>Gold</b>
                    </i>
                  </th>
                  <th>
                    <i>
                      <b>Effect</b>
                    </i>
                  </th>
                </tr>
                <tr>
                  <td>
                    <i>Loafers</i>
                  </td>
                  <td>1</td>
                  <td>45g</td>
                  <td>+0 Armor Class</td>
                </tr>
                <tr>
                  <td>
                    <i>Suede Boots</i>
                  </td>
                  <td>1</td>
                  <td>90g</td>
                  <td>+0 Armor Class</td>
                </tr>
                <tr>
                  <td>
                    <i>Leather Boots</i>
                  </td>
                  <td>30</td>
                  <td>15g</td>
                  <td>+1 Armor Class</td>
                </tr>
                <tr>
                  <td>
                    <i>Leather Boots of Speed</i>
                  </td>
                  <td>30</td>
                  <td>250g</td>
                  <td>
                    +1 Armor Class
                    <p>+1 Dexterity</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <i>Quilted Boots</i>
                  </td>
                  <td>30</td>
                  <td>15g</td>
                  <td>
                    +1 Armor Class
                    <p>
                      +10% Resistance to Polearm and Ranged Damage (25% max)
                    </p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <i>Cleats</i>
                  </td>
                  <td>30</td>
                  <td>15g</td>
                  <td>
                    +2 Armor Class
                    <p>
                      Grants stability, reducing the effects of knockback and
                      slippery terrain
                    </p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <i>Iron Boots</i>
                  </td>
                  <td>40</td>
                  <td>35g</td>
                  <td>+2 Armor Class</td>
                </tr>
                <tr>
                  <td>
                    <i>Iron Boots of Water Walking</i>
                  </td>
                  <td>40</td>
                  <td>500g</td>
                  <td>
                    +2 Armor Class
                    <p>
                      Grants waterwalking, allowing the wearer to safely walk
                      over pools of water and lava
                    </p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <i>Steel Boots</i>
                  </td>
                  <td>40</td>
                  <td>120g</td>
                  <td>+3 Armor Class</td>
                </tr>
                <tr>
                  <td>
                    <i>Steel Boots of Feather</i>
                  </td>
                  <td>-40</td>
                  <td>200g</td>
                  <td>
                    +3 Armor Class
                    <p>Lightweight, reduces player item weight</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <i>Steel Boots of Levitation</i>
                  </td>
                  <td>40</td>
                  <td>900g</td>
                  <td>
                    +3 Armor Class
                    <p>
                      Grants levitation, allowing the wearer to walk over water,
                      lava and pits
                    </p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <i>Crystal Boots</i>
                  </td>
                  <td>50</td>
                  <td>800g</td>
                  <td>
                    +4 Armor Class
                    <p>Fragile: -25 Durability</p>
                  </td>
                </tr>
              </tbody>
            </table>
          </>
        ),
      },

      {
        sectionName: "Head-Gear",
        sectionContent: (
          <>
            <table>
              <tbody>
                <tr>
                  <th>
                    <i>
                      <b>Name</b>
                    </i>
                  </th>
                  <th>
                    <i>
                      <b>Weight</b>
                    </i>
                  </th>
                  <th>
                    <i>
                      <b>Gold</b>
                    </i>
                  </th>
                  <th>
                    <i>
                      <b>Effect</b>
                    </i>
                  </th>
                </tr>
                <tr>
                  <td>
                    <i>Felt Hat</i>
                  </td>
                  <td>1</td>
                  <td>15g</td>
                  <td>+0 Armor Class</td>
                </tr>
                <tr>
                  <td>
                    <i>Fez</i>
                  </td>
                  <td>1</td>
                  <td>90g</td>
                  <td>+0 Armor Class</td>
                </tr>
                <tr>
                  <td>
                    <i>Phrygian Hat</i>
                  </td>
                  <td>5</td>
                  <td>10g</td>
                  <td>+0 Armor Class</td>
                </tr>
                <tr>
                  <td>
                    <i>Bandana</i>
                  </td>
                  <td>5</td>
                  <td>40g</td>
                  <td>
                    +0 Armor Class
                    <p>
                      +12.5% Strafe/backstep movement speed, +12.5% per blessing
                      (50% max)
                    </p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <i>Circlet of sorcery</i>
                  </td>
                  <td>5</td>
                  <td>160g</td>
                  <td>
                    +5% Spell power, +5% per blessing
                    <p>+5 Sorcery skill bonus, +5 per blessing (25 max)</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <i>Circlet of mysticism</i>
                  </td>
                  <td>5</td>
                  <td>160g</td>
                  <td>
                    +5% Spell power, +5% per blessing
                    <p>+5 Mysticism skill bonus, +5 per blessing (25 max)</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <i>Circlet of thaumaturgy</i>
                  </td>
                  <td>5</td>
                  <td>160g</td>
                  <td>
                    +5% Spell power, +5% per blessing
                    <p>+5 Thaumaturgy skill bonus, +5 per blessing (25 max)</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <i>Circlet of wisdom</i>
                  </td>
                  <td>5</td>
                  <td>450g</td>
                  <td>
                    +5% Spell power, +5% per blessing
                    <p>
                      Guarantees intelligence from leveling up, unaffected by
                      blessings
                    </p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <i>Silken bow</i>
                  </td>
                  <td>5</td>
                  <td>140g</td>
                  <td>
                    +1 Charisma
                    <p>Grants chance to pacify and evade melee attacks</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <i>Laurels</i>
                  </td>
                  <td>5</td>
                  <td>250g</td>
                  <td>
                    +25% XP gain to lower LVL allies +25% per blessing (300%
                    max)
                    <p>
                      Followers: +2 Hit point regeneration while regenerating,
                      +2 per blessing (no upper limit)
                    </p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <i>Hood</i>
                  </td>
                  <td>10</td>
                  <td>10g</td>
                  <td>+0 Armor Class</td>
                </tr>
                <tr>
                  <td>
                    <i>Executioner Hood</i>
                  </td>
                  <td>10</td>
                  <td>50g</td>
                  <td>
                    +0 Armor Class
                    <p>
                      Grants five seconds of MP regeneration while inflicting
                      bleed on foes
                    </p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <i>Chef's toque</i>
                  </td>
                  <td>10</td>
                  <td>60g</td>
                  <td>
                    +0 Armor Class
                    <p>+20% food satiation, +10% per blessing (70% max)</p>
                    <p>
                      +5% Chance to receive meat from defeated enemies, (only
                      applies to red-blooded creatures) +2.5% per blessing (10%
                      max)
                    </p>
                    <p>
                      <i>Guarantee Fresh-quality Rations while cooking.</i>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <i>Jester Hat</i>
                  </td>
                  <td>10</td>
                  <td>60g</td>
                  <td>
                    +0 Armor Class
                    <p>+1 Charisma</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <i>Wizard Hat</i>
                  </td>
                  <td>10</td>
                  <td>75g</td>
                  <td>
                    +0 Armor Class
                    <p>+1 Intelligence</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <i>Bycocket</i>
                  </td>
                  <td>10</td>
                  <td>140g</td>
                  <td>
                    +0 Dexterity
                    <p>+1 Ranged distance, +1 per blessing (3 max)</p>
                    <p>+10% Ranged draw speed, +10% per blessing (30% max)</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <i>Plumed cap</i>
                  </td>
                  <td>10</td>
                  <td>140g</td>
                  <td>
                    +1 Charisma
                    <p>+10 leadership skill bonus, +10 per blessing (25 max)</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <i>Apprentice's hood</i>
                  </td>
                  <td>10</td>
                  <td>180g</td>
                  <td>
                    +0 Armor Class
                    <p>
                      +30% Chance: +1 MP while regenerating, +10% chance per
                      blessing (50% max)
                    </p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <i>Assassin's hood</i>
                  </td>
                  <td>10</td>
                  <td>180g</td>
                  <td>
                    +0 Armor Class
                    <p>+4 Backstab damage, +2 per blessing (8 max)</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <i>Hood of whispers</i>
                  </td>
                  <td>10</td>
                  <td>180g</td>
                  <td>
                    +0 Armor Class
                    <p>+10 Stealth skill bonus, +10 per blessing (25 max)</p>
                    <p>+2 Ranged backstab damage (4 max)</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <i>Crown</i>
                  </td>
                  <td>10</td>
                  <td>250g</td>
                  <td>
                    +25% XP gain to lower LVL allies +25% per blessing (300%
                    max)
                    <p>
                      +20% Restore max hit point on LVL increase, for self and
                      followers, +10% per blessing (50% max)
                    </p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <i>Top Hat</i>
                  </td>
                  <td>15</td>
                  <td>180g</td>
                  <td>
                    +0 Armor Class
                    <p>+100% Boulder resistance</p>
                    <p>
                      <i>Breaks immediately from one boulder</i>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <i>Warm hat</i>
                  </td>
                  <td>25</td>
                  <td>100g</td>
                  <td>
                    +0 Armor Class
                    <p>+50% Cold resistance, +25% per blessing (100% max)</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <i>Turban</i>
                  </td>
                  <td>25</td>
                  <td>250g</td>
                  <td>
                    +25% XP gain to lower LVL allies +25% per blessing (300%
                    max)
                    <p>
                      Followers: +50% Trap Resistance, +25% per blessing (100%
                      max)
                    </p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <i>Magus' headdress</i>
                  </td>
                  <td>25</td>
                  <td>250g</td>
                  <td>
                    +0 Armor Class
                    <p>+10% Spell power, +5% per blessing</p>
                    <p>
                      +10% Additional spell power when casting Sorcery spells,
                      +5% per blessing
                    </p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <i>Priestly miter</i>
                  </td>
                  <td>25</td>
                  <td>250g</td>
                  <td>
                    +0 Armor Class
                    <p>+10% Spell power, +5% per blessing</p>
                    <p>
                      +10% Additional spell power when casting Thaumaturgy
                      spells, +5% per blessing
                    </p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <i>Crowned helmet</i>
                  </td>
                  <td>40</td>
                  <td>350g</td>
                  <td>
                    +0 Armor Class
                    <p>
                      Followers: +20% damage resistance, +10% per blessing (50%
                      max)
                    </p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <i>Bounty hunter's hat</i>
                  </td>
                  <td>15</td>
                  <td>160g</td>
                  <td>
                    +1 Armor Class
                    <p>+10 Ranged skill bonus, +10 per blessing (25 max)</p>
                    <p>
                      Marks +1 Bounty monster on entering dungeon floor, which
                      rewards bonus gold for killing the marked monster
                    </p>
                    <p>(Max is 2 bounty monsters per dungeon floor)</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <i>Leather Helm</i>
                  </td>
                  <td>25</td>
                  <td>15g</td>
                  <td>+1 Armor Class</td>
                </tr>
                <tr>
                  <td>
                    <i>Mining Helmet</i>
                  </td>
                  <td>40</td>
                  <td>80g</td>
                  <td>
                    +1 Armor Class
                    <p>
                      {" "}
                      +50% Boulder resistance, +25% per blessing (100% max)
                    </p>
                    <p>
                      <i>Each boulder degrades quality</i>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <i>Chain Coif</i>
                  </td>
                  <td>40</td>
                  <td>120g</td>
                  <td>
                    +1 Armor Class
                    <p>+10% Resistance to Sword and Axe Damage (25% max)</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <i>Iron Helm</i>
                  </td>
                  <td>40</td>
                  <td>30g</td>
                  <td>+2 Armor Class</td>
                </tr>
                <tr>
                  <td>
                    <i>Bunny hood</i>
                  </td>
                  <td>40</td>
                  <td>160g</td>
                  <td>
                    +2 Armor Class
                    <p>+0 Dexterity</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <i>Bear hood</i>
                  </td>
                  <td>40</td>
                  <td>160g</td>
                  <td>
                    +2 Armor Class
                    <p>+0 Constitution</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <i>Stag hood</i>
                  </td>
                  <td>40</td>
                  <td>160g</td>
                  <td>
                    +2 Armor Class
                    <p>+0 Perception</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <i>Wolf hood</i>
                  </td>
                  <td>40</td>
                  <td>160g</td>
                  <td>
                    +2 Armor Class
                    <p>+0 Strength</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <i>Steel Helm</i>
                  </td>
                  <td>40</td>
                  <td>120g</td>
                  <td>+3 Armor Class</td>
                </tr>
                <tr>
                  <td>
                    <i>Crystal Helm</i>
                  </td>
                  <td>50</td>
                  <td>800g</td>
                  <td>
                    +4 Armor Class
                    <p>Fragile: -25% durability</p>
                  </td>
                </tr>
              </tbody>
            </table>
          </>
        ),
      },

      {
        sectionName: "Body Armor",
        sectionContent: (
          <>
            <table>
              <tbody>
                <tr>
                  <th>
                    <i>
                      <b>Name</b>
                    </i>
                  </th>
                  <th>
                    <i>
                      <b>Weight</b>
                    </i>
                  </th>
                  <th>
                    <i>
                      <b>Gold</b>
                    </i>
                  </th>
                  <th>
                    <i>
                      <b>Effect</b>
                    </i>
                  </th>
                </tr>
                <tr>
                  <td>
                    <i>Tunic</i>
                  </td>
                  <td>1</td>
                  <td>15g</td>
                  <td>+0 Armor Class</td>
                </tr>
                <tr>
                  <td>
                    <i>Blouse</i>
                  </td>
                  <td>1</td>
                  <td>35g</td>
                  <td>+0 Armor Class</td>
                </tr>
                <tr>
                  <td>
                    <i>Healer Doublet</i>
                  </td>
                  <td>1</td>
                  <td>100g</td>
                  <td>
                    +0 Armor Class
                    <p>+1 Intelligence</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <i>Wizard Doublet</i>
                  </td>
                  <td>1</td>
                  <td>100g</td>
                  <td>
                    +0 Armor Class
                    <p>+1 Intelligence</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <i>Silver Doublet</i>
                  </td>
                  <td>1</td>
                  <td>150g</td>
                  <td>+0 Armor Class</td>
                </tr>
                <tr>
                  <td>
                    <i>Leather Apron</i>
                  </td>
                  <td>1</td>
                  <td>50g</td>
                  <td>
                    +1 Armor Class
                    <p>+2 Perception</p>
                    <p>Grants immunity to fire</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <i>Vampire Doublet</i>
                  </td>
                  <td>40</td>
                  <td>1600g</td>
                  <td>
                    +1 Armor Class
                    <p>+1 MP Regeneration</p>
                    <p>Disables Hit Point Regeneration</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <i>Shawl</i>
                  </td>
                  <td>50</td>
                  <td>85g</td>
                  <td>
                    +1 Armor Class
                    <p>+35% Touch Distance casting Touch spells (100% max)</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <i>Wizard Robe</i>
                  </td>
                  <td>50</td>
                  <td>120g</td>
                  <td>
                    +1 Armor Class
                    <p>
                      +20% Touch Distance/Cast Speed casting Sorcery spells (50%
                      max)
                    </p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <i>Cultist Robe</i>
                  </td>
                  <td>50</td>
                  <td>120g</td>
                  <td>
                    +1 Armor Class
                    <p>
                      +20% Touch Distance/Cast Speed casting Mysticism spells
                      (50% max)
                    </p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <i>Healer Robe</i>
                  </td>
                  <td>50</td>
                  <td>120g</td>
                  <td>
                    +1 Armor Class
                    <p>
                      +20% Touch Distance/Cast Speed casting Thaumaturgy spells
                      (50% max)
                    </p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <i>Monk Robe</i>
                  </td>
                  <td>50</td>
                  <td>120g</td>
                  <td>
                    +1 Armor Class
                    <p>
                      +20% Touch Distance/Cast Speed casting Thaumaturgy spells
                      (50% max)
                    </p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <i>Leather Breastpiece</i>
                  </td>
                  <td>100</td>
                  <td>35g</td>
                  <td>+2 Armor Class</td>
                </tr>
                <tr>
                  <td>
                    <i>Bandit Leather</i>
                  </td>
                  <td>125</td>
                  <td>75g</td>
                  <td>
                    +2 Armor Class
                    <p>+15% Magic Resistance, +5% Per Blessing (30% max)</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <i>Iron Pauldrons</i>
                  </td>
                  <td>50</td>
                  <td>175g</td>
                  <td>+2 Armor Class</td>
                </tr>
                <tr>
                  <td>
                    <i>Chain Hauberk</i>
                  </td>
                  <td>150</td>
                  <td>125g</td>
                  <td>
                    +2 Armor Class
                    <p>+20% Resistance to Sword and Axe Damage (35% max)</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <i>Iron Breastpiece</i>
                  </td>
                  <td>250</td>
                  <td>70g</td>
                  <td>+3 Armor Class</td>
                </tr>
                <tr>
                  <td>
                    <i>Steel Breastpiece</i>
                  </td>
                  <td>300</td>
                  <td>250g</td>
                  <td>+4 Armor Class</td>
                </tr>
                <tr>
                  <td>
                    <i>Crystal Breastpiece</i>
                  </td>
                  <td>225</td>
                  <td>1200g</td>
                  <td>
                    +5 Armor Class
                    <p>Fragile: -25% durability</p>
                  </td>
                </tr>
              </tbody>
            </table>
          </>
        ),
      },

      {
        sectionName: "Cloaks",
        sectionContent: (
          <>
            <table>
              <tbody>
                <tr>
                  <th>
                    <i>
                      <b>Name</b>
                    </i>
                  </th>
                  <th>
                    <i>
                      <b>Weight</b>
                    </i>
                  </th>
                  <th>
                    <i>
                      <b>Gold</b>
                    </i>
                  </th>
                  <th>
                    <i>
                      <b>Bonus Effect</b>
                    </i>
                  </th>
                </tr>
                <tr>
                  <td>
                    <i>Silver Cloak</i>
                  </td>
                  <td>1</td>
                  <td>100g</td>
                  <td>+0 Armor Class</td>
                </tr>
                <tr>
                  <td>
                    <i>Cloak</i>
                  </td>
                  <td>10</td>
                  <td>15g</td>
                  <td>+0 Armor Class</td>
                </tr>
                <tr>
                  <td>
                    <i>Black Cloak</i>
                  </td>
                  <td>10</td>
                  <td>20g</td>
                  <td>+0 Armor Class</td>
                </tr>
                <tr>
                  <td>
                    any Cloak
                    <p></p>
                  </td>
                  <td>
                    <i>Cloak of Magic Reflection</i>
                  </td>
                  <td>10</td>
                  <td>350g</td>
                  <td>
                    +0 Armor Class
                    <p>
                      Grants Magic Reflection, bouncing magical attacks of the
                      wearer
                    </p>
                  </td>
                </tr>
                <tr>
                  <td>
                    any Cloak
                    <p></p>
                  </td>
                  <td>
                    <i>Cloak of Invisibility</i>
                  </td>
                  <td>10</td>
                  <td>800g</td>
                  <td>
                    +0 Armor Class
                    <p>Grants the wearer invisibility</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    any Cloak
                    <p></p>
                  </td>
                  <td>
                    <i>Cloak of Protection</i>
                  </td>
                  <td>20</td>
                  <td>90g</td>
                  <td>+1 Armor Class</td>
                </tr>
                <tr>
                  <td>
                    <i>Backpack</i>
                  </td>
                  <td>20</td>
                  <td>450g</td>
                  <td>
                    +0 Armor Class
                    <p>Increases your inventory size by ten</p>
                    <p>
                      Removing the backpack will drop all items placed in the
                      bonus inventory slots
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
          </>
        ),
      },

      {
        sectionName: "Face-Gear",
        sectionContent: (
          <>
            <table>
              <caption></caption>
              <tbody>
                <tr>
                  <th>
                    <b>Image</b>
                  </th>
                  <th>
                    <b>Name</b>
                  </th>
                  <th>
                    <b>Weight</b>
                  </th>
                  <th>
                    <b>Gold</b>
                  </th>
                  <th>
                    <b>Effect</b>
                  </th>
                </tr>
                <tr>
                  <td>
                    <i>Blindfold</i>
                  </td>
                  <td>5</td>
                  <td>5g</td>
                  <td>
                    -10 Perception, +1 per blessing
                    <p>Applies blindness while worn</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <i>Blindfold of Free Action</i>
                  </td>
                  <td>5</td>
                  <td>150g</td>
                  <td>
                    +0 Perception
                    <p>Applies blindness while worn</p>
                    <p>Grants free action status effect while worn</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <i>Blindfold of Telepathy</i>
                  </td>
                  <td>5</td>
                  <td>250g</td>
                  <td>
                    +0 Perception
                    <p>Applies blindness while worn</p>
                    <p>Grants telepathy, showing enemies through walls</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <i>Sweetgrass Sprig</i>
                  </td>
                  <td>5</td>
                  <td>10g</td>
                  <td>
                    0.80x Hunger speed, +0.1 per blessing (0.50x max)
                    <p>
                      <i>Stacks with the Ring of Slow Digestion</i>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <i>Shaman Mask</i>
                  </td>
                  <td>5</td>
                  <td>20g</td>
                  <td>+1 MP regeneration while Shapeshifted</td>
                </tr>
                <tr>
                  <td>
                    <i>Eye Patch</i>
                  </td>
                  <td>5</td>
                  <td>30g</td>
                  <td>+2 Sneak Vision, +1 per blessing (4 max)</td>
                </tr>
                <tr>
                  <td>
                    <i>Bandit Mask</i>
                  </td>
                  <td>5</td>
                  <td>40g</td>
                  <td>
                    Grants the WANTED! status effect when VISIBLY worn (e.g.
                    while not invisible)
                    <p>
                      <i>
                        Allows for killing shops and not suffering consequences
                        after taking off the mask
                      </i>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <i>Rose</i>
                  </td>
                  <td>5</td>
                  <td>40g</td>
                  <td>
                    +1 Charisma
                    <p>Makes you Neutral to Incubi and Succubae</p>
                    <p>
                      <i>
                        While equipped: can be given to a succubus or incubus to
                        recruit
                      </i>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <i>Marigold</i>
                  </td>
                  <td>5</td>
                  <td>40g</td>
                  <td>
                    +5 HP Restore over 30s when eating food (+11 HP Restore max)
                    <p>
                      <i>No effect on sickness inducing food</i>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <i>Hazard Goggles</i>
                  </td>
                  <td>5</td>
                  <td>60g</td>
                  <td>
                    +0 Perception
                    <p>
                      Grants splash immunity to thrown potions and alchemical
                      explosions
                    </p>
                    <p>+10 alchemy skill bonus, +10 per blessing (25 max)</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <i>Pipe</i>
                  </td>
                  <td>5</td>
                  <td>60g</td>
                  <td>
                    <p>
                      While regenerating MP 25% chance to grant an extra MP
                      (+10% per blessing, up to 50%)
                    </p>
                    <p>
                      While regenerating HP 25% chance to NOT regenerate the HP
                      (+10% per blessing, up to 50%)
                    </p>
                    <p>
                      <i>
                        Deals damage to insectoids and players with 0% health
                        regeneration.
                      </i>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <i>Glasses</i>
                  </td>
                  <td>5</td>
                  <td>70g</td>
                  <td>+1 Perception</td>
                </tr>
                <tr>
                  <td>
                    <i>Mouth Knife</i>
                  </td>
                  <td>5</td>
                  <td>70g</td>
                  <td>+2 Retaliation damage, +2 per blessing (12 max)</td>
                </tr>
                <tr>
                  <td>
                    <i>Masquerade Mask</i>
                  </td>
                  <td>5</td>
                  <td>80g</td>
                  <td>
                    +1 Charisma
                    <p>Makes you neutral to incubi and succubi</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <i>Tech Goggles</i>
                  </td>
                  <td>5</td>
                  <td>100g</td>
                  <td>
                    +0 Perception
                    <p>
                      +50% Tinkering deploy speed, +50% per blessing (200% max)
                    </p>
                    <p>Grants immunity to Sentry Friendly Fire</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <i>Monocle</i>
                  </td>
                  <td>5</td>
                  <td>150g</td>
                  <td>
                    +1 Perception
                    <p>
                      Grants +200% Gem Appraisal speed +200% per blessing (400%
                      max)
                    </p>
                    <p>
                      Marks you as an ally to shopkeepers when VISIBLY worn
                      (e.g. while not invisible)
                    </p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <i>Plague Mask</i>
                  </td>
                  <td>5</td>
                  <td>200g</td>
                  <td>
                    +0 Armor Class
                    <p>
                      Grants nausea resistance, immunity to vomit inducing
                      effects (indigestion, hunting arrows, drunkenness)
                    </p>
                    <p>
                      <i>Makes you vomit once when unequipped</i>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <i>Phantom Mask</i>
                  </td>
                  <td>5</td>
                  <td>900g</td>
                  <td>
                    Afflicts Disoriented (will not notice you as quickly, or
                    turn around after the strike) after the first successful
                    Backstab on the enemy
                  </td>
                </tr>
                <tr>
                  <td>
                    <i>Spooky Mask</i>
                  </td>
                  <td>25</td>
                  <td>30g</td>
                  <td>
                    +0 Armor Class
                    <p>Makes you neutral to shadows and ghouls</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <i>Golden Mask</i>
                  </td>
                  <td>25</td>
                  <td>900g</td>
                  <td>
                    +0 Armor Class
                    <p>
                      +50% Gold weight reduction, +50% per blessing (150% max)
                    </p>
                    <p>+10 Trading skill bonus, +10 per blessing (25 max)</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <i>Steel Visor</i>
                  </td>
                  <td>5</td>
                  <td>80g</td>
                  <td>
                    +1 Armor Class
                    <p>+5 Melee Weapon Skill Bonus, +5 per blessing (25 max)</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <i>Crystal Visor</i>
                  </td>
                  <td>5</td>
                  <td>200g</td>
                  <td>
                    +2 Armor Class
                    <p>+5 Melee Weapon Skill Bonus, +5 per blessing (25 max)</p>
                  </td>
                </tr>
              </tbody>
            </table>
          </>
        ),
      },

      {
        sectionName: "Artifact Armor",
        sectionContent: (
          <>
            <p>
              Below is a list of the rare Artifact Armor of legend! Lost to the
              ages, each one possesses special magical properties. Artifacts are
              unbreakable and gain additional AC when repaired to Excellent
              quality.
            </p>
            <table>
              <tbody>
                <tr>
                  <th>
                    <i>
                      <b>Name</b>
                    </i>
                  </th>
                  <th>
                    <i>
                      <b>Slot</b>
                    </i>
                  </th>
                  <th>
                    <i>
                      <b>Weight</b>
                    </i>
                  </th>
                  <th>
                    <i>
                      <b>Gold</b>
                    </i>
                  </th>
                  <th>
                    <i>
                      <b>Bonus Effect</b>
                    </i>
                  </th>
                </tr>
                <tr>
                  <td>
                    <i>Djinni's Brace</i>
                  </td>
                  <td>Hand</td>
                  <td>80</td>
                  <td>3000g</td>
                  <td>
                    +4 Armor Class
                    <p>+30% Magical Resistance</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <i>Oracle's Treads</i>
                  </td>
                  <td>Foot</td>
                  <td>100</td>
                  <td>3000g</td>
                  <td>
                    +4 Armor Class
                    <p>
                      Grants Lesser Warning, displaying moving enemies as purple
                      dots on the map
                    </p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <i>Sphinx's Casque</i>
                  </td>
                  <td>Head</td>
                  <td>100</td>
                  <td>3000g</td>
                  <td>
                    +4 Armor Class
                    <p>+8 Intelligence</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <i>Dragon's Mail</i>
                  </td>
                  <td>Body</td>
                  <td>450</td>
                  <td>5000g</td>
                  <td>
                    +6 Armor Class
                    <p>+1 HP regeneration</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <i>Wraith's Gown</i>
                  </td>
                  <td>Back</td>
                  <td>60</td>
                  <td>3000g</td>
                  <td>
                    +0 Armor Class
                    <p>Grants Levitation</p>
                    <p>+1 MP regeneration</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <i>Valkyrie's Veil</i>
                  </td>
                  <td>Face</td>
                  <td>5</td>
                  <td>3000g</td>
                  <td>
                    +2 Armor Class
                    <p>
                      Grants +10 Melee Weapon skill bonus, +10 per blessing (25
                      max)
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
          </>
        ),
      },
    ],
  },

  {
    id: "Amulets",
    itemSections: [
      {
        sectionName: "Description",
        sectionContent: (
          <>
            <p>
              Amulets are wearable items that can give useful status effects to
              the player. Curse has unique interactions with some amulets (see
              table below).
            </p>
          </>
        ),
      },

      {
        sectionName: "List of Amulets",
        sectionContent: (
          <>
            <table>
              <thead>
                <tr>
                  <th>
                    <i>
                      <b>Amulet of</b>
                    </i>
                  </th>
                  <th>
                    <i>
                      <b>Description</b>
                    </i>
                  </th>
                  <th>
                    <i>
                      <b>Gold</b>
                    </i>
                  </th>
                  <th>
                    <i>
                      <b>Message on Equip</b>
                    </i>
                  </th>
                  <th>If Cursed</th>
                  <th>If Blessed</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <i>Burning Resistance</i>
                  </td>
                  <td>
                    Prevents the player from being burned, will also cure player
                    of burn if equipped while burned.
                    <p>
                      <i>Has 12.5% chance to degrade on proc</i>
                    </p>
                  </td>
                  <td>150</td>
                  <td>The amulet feels warm against your neck.</td>
                  <td>Same effect</td>
                  <td>Same effect</td>
                </tr>
                <tr>
                  <td>
                    <i>Life Saving</i>
                  </td>
                  <td>
                    Upon receiving mortal damage it will be destroyed, and
                    revive the player at 50 health.
                  </td>
                  <td>5000</td>
                  <td>
                    You feel a sense of great purpose when wearing the amulet.
                  </td>
                  <td>It does nothing</td>
                  <td>+50 additional health on revive per level of blessing</td>
                </tr>
                <tr>
                  <td>
                    <i>Magic Reflection</i>
                  </td>
                  <td>Reflects all spells shot at you away.</td>
                  <td>350</td>
                  <td>The amulet makes your whole body tingle slightly.</td>
                  <td>Same effect</td>
                  <td>Same effect</td>
                </tr>
                <tr>
                  <td>
                    <i>Olympic Swimming</i>
                  </td>
                  <td>Swim a lot faster.</td>
                  <td>100</td>
                  <td>
                    The air beyond the cord of the amulet smells crisp and
                    sweet.
                  </td>
                  <td>Same effect</td>
                  <td>Same effect</td>
                </tr>
                <tr>
                  <td>
                    <i>Poison Resistance</i>
                  </td>
                  <td>
                    Prevents the player from being poisoned, will also cure
                    player of poison if equipped while poisoned.
                    <p>
                      <i>Has 12.5% chance to degrade on proc</i>
                    </p>
                  </td>
                  <td>75</td>
                  <td>
                    The amulet feels cool and plesant against the veins of your
                    neck.
                  </td>
                  <td>Same effect</td>
                  <td>Same effect</td>
                </tr>
                <tr>
                  <td>
                    <i>Sex Change</i>
                  </td>
                  <td>
                    Changes the players sex from male to female or vice versa,
                    then destroys itself.
                    <p>
                      If the player were to have the 'Wanted!' Status effect,
                      using this amulet will remove the status.
                    </p>
                  </td>
                  <td>400</td>
                  <td>You feel rather masculine / feminine!</td>
                  <td>Nothing</td>
                  <td>Same effect</td>
                </tr>
                <tr>
                  <td>
                    <i>Strangulation</i>
                  </td>
                  <td>
                    Curses itself and strangles you to death. Restores mana at
                    the cost of health for{" "}
                    <a href="/wiki/Incubus_(Race)" title="Incubus (Race)">
                      Incubi
                    </a>{" "}
                    and{" "}
                    <a href="/wiki/Succubus_(Race)" title="Succubus (Race)">
                      Succubi
                    </a>
                    .
                  </td>
                  <td>75</td>
                  <td>The amulet suddenly constricts!</td>
                  <td>Same effect</td>
                  <td>Same effect</td>
                </tr>
              </tbody>
              <tfoot></tfoot>
            </table>
          </>
        ),
      },
    ],
  },

  {
    id: "Magic_Staffs",
    itemSections: [
      {
        sectionName: "Description",
        sectionContent: (
          <>
            <p>
              Magic Staffs are a set of magical tools that can be found through
              the dungeon of Barony, allowing its user to cast spells of varying
              types depending on the staff itself without any mana cost or prior
              magic skills.
            </p>
            <p>
              A staff functions similarly to any normal weapon or held item,
              able to be wielded by the player and placed in the hotbar for
              quick access. When held, the staff will fire its magic when
              pressing the attack button (Default Mouse 0). Attacking does not
              consume mana, as well as bypassing any low magical skill penalties
              prior to use, allowing a staff to rapidly fire high-damage spells
              that would otherwise be impossible without good magical skills.
            </p>
            <p>
              Spells casted from staffs can level up the respective magical
              school the spell belongs to, albeit at a slower rate than just
              casting the spell using mana(Light staff can only level up
              Thaumaturgy by 1 per cast, requiring recasting to spawn a new
              light ball after the previous one has leveled up Thaumaturgy, for
              example). Nevertheless, they can serve as good kickstarter to
              leveling a school of magic if no other spells are available for
              that . However, staffs have one critical weakness compared to
              direct magic: repeated use will degrade the staff until it can no
              longer be used.
            </p>

            <h3>Usage</h3>
            <p>
              When deciding what items to take and which to leave behind for new
              items, the proper staff can serve any player well in a pinch,
              allowing for superior magical output when combating high-threat
              enemies, or serving as a utility such as unlocking doors or
              digging through walls. Even when a user has already mastered magic
              and casting, having a damaging staff can help to conserve mana,
              rather than casting those same bolts directly.
            </p>
          </>
        ),
      },

      {
        sectionName: "List of Magic Staffs",
        sectionContent: (
          <>
            <table>
              <thead>
                <tr>
                  <th>
                    <i>
                      <b>Image</b>
                    </i>
                  </th>
                  <th>
                    <i>
                      <b>Name</b>
                    </i>
                  </th>
                  <th>
                    <i>
                      <b>Weight</b>
                    </i>
                  </th>
                  <th>
                    <i>
                      <b>Gold</b>
                    </i>
                  </th>
                  <th>
                    <i>
                      <b>Effect</b>
                    </i>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <i>Magicstaff of Light</i>
                  </td>
                  <td rowSpan={14}>30</td>
                  <td>70g</td>
                  <td>Summons Light to Follow the Caster</td>
                </tr>
                <tr>
                  <td>
                    <i>Magicstaff of Digging</i>
                  </td>
                  <td>300g</td>
                  <td>Destroys Boulders and Walls</td>
                </tr>
                <tr>
                  <td>
                    <i>Magicstaff of Opening</i>
                  </td>
                  <td>250g</td>
                  <td>Opens Doors, Gates and Locked Containers</td>
                </tr>
                <tr>
                  <td>
                    <i>Magicstaff of Locking</i>
                  </td>
                  <td>60g</td>
                  <td>Locks Doors and Chests</td>
                </tr>
                <tr>
                  <td>
                    <i>Magicstaff of Poison</i>
                  </td>
                  <td>150g</td>
                  <td>+10 Magic Damage, Inflicts Poison</td>
                </tr>
                <tr>
                  <td>
                    <i>Magicstaff of Magic Missile</i>
                  </td>
                  <td>450g</td>
                  <td>+30 Magic Damage</td>
                </tr>
                <tr>
                  <td>
                    <i>Magicstaff of Fireball</i>
                  </td>
                  <td>350g</td>
                  <td>+25 Magic Damage, Inflicts Burning</td>
                </tr>
                <tr>
                  <td>
                    <i>Magicstaff of Cold</i>
                  </td>
                  <td>200g</td>
                  <td>+20 Magic Damage, Inflicts Slow</td>
                </tr>
                <tr>
                  <td>
                    <i>Magicstaff of Lightning</i>
                  </td>
                  <td>300g</td>
                  <td>
                    +15 Magic Damage
                    <p>Inflicts +1 Static</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <i>Magicstaff of Slow</i>
                  </td>
                  <td>70g</td>
                  <td>Inflicts Slow</td>
                </tr>
                <tr>
                  <td>
                    <i>Magicstaff of Sleep</i>
                  </td>
                  <td>125g</td>
                  <td>Inflicts Sleep</td>
                </tr>
                <tr>
                  <td>
                    <i>Magicstaff of Stoneblood</i>
                  </td>
                  <td>600g</td>
                  <td>Inflicts Paralysis</td>
                </tr>
                <tr>
                  <td>
                    <i>Magicstaff of Bloodletting</i>
                  </td>
                  <td>750g</td>
                  <td>+18 Magic Damage, Inflict Bleed and Slow</td>
                </tr>
                <tr>
                  <td>
                    <i>Magicstaff of Charm Monster</i>
                  </td>
                  <td>750g</td>
                  <td>Attempts to charm a monster into an ally</td>
                </tr>
              </tbody>
              <tfoot></tfoot>
            </table>
          </>
        ),
      },
    ],
  },

  {
    id: "Scrolls",
    itemSections: [
      {
        sectionName: "Description",
        sectionContent: (
          <>
            <p>
              Scrolls are valuable items in Barony, found throughout the entire
              dungeon and having a very wide range of effects depending on their
              contents.
            </p>
            <p>
              Scrolls are lightweight and easy to appraise, being found as early
              as the Mines and up until the end of the game inside the Citadel.
              There are several notable locations for scrolls, such as in chests
              where multiple scrolls can be stored at a time, shopkeepers
              vending as a bookstore often sell several scrolls, and The Mystic
              Library is one of the largest and most consistent source of
              scrolls in the game.
            </p>
            <p>
              Each scroll has a corresponding type, functioning differently from
              other types in order to perform differing actions. Some scrolls
              are exceptionally powerful, being able to bolster artifact weapons
              and armor past their base stats, while other scrolls can be
              dangerous to read, or completely useless outside of reading off a
              mailed message. Blessed versions of scrolls will have extra
              benefits, while cursed scrolls may reverse the intended effects.
            </p>
            <h3>Naming System</h3>
            <p>
              At the beginning of each game, Scrolls are labeled in some unknown
              language, requiring the player to first identify the scroll to see
              its intended effects. This naming system is consistent within the
              player’s designated game seed, meaning one scroll of a certain
              name will always correspond to that scroll type. Once the player
              begins a new seed however, these names are once again randomized.
            </p>
            <p>
              This is especially helpful for use of the Enchanted Feather item,
              where the player inscribes this unknown language onto blank
              scrolls for that name’s intended effect.
            </p>
          </>
        ),
      },

      {
        sectionName: "List of Scrolls",
        sectionContent: (
          <>
            <table>
              <thead>
                <tr>
                  <th>
                    <i>
                      <b>Name</b>
                    </i>
                  </th>
                  <th>
                    <i>
                      <b>Weight</b>
                    </i>
                  </th>
                  <th>
                    <i>
                      <b>Gold</b>
                    </i>
                  </th>
                  <th>
                    <i>
                      <b>Effect</b>
                    </i>
                  </th>
                  <th>
                    <i>
                      <b>Effect if Blessed</b>
                    </i>
                  </th>
                  <th>
                    <i>
                      <b>Effect if Cursed</b>
                    </i>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Scroll of Food</td>
                  <td>2</td>
                  <td>100g</td>
                  <td>
                    Spawns five pieces of food at fresh quality. Includes Meat,
                    Cheese, Apple, Fish, and Bread.
                  </td>
                  <td>
                    All food spawned is blessed to the same level as the scroll.
                  </td>
                  <td>
                    All food spawned is cursed to the same level as the scroll.
                    -2 removes food.
                  </td>
                </tr>
                <tr>
                  <td>Scroll of Identity</td>
                  <td>2</td>
                  <td>35g</td>
                  <td>Identifies a chosen item in the reader's inventory.</td>
                  <td>Same effect.</td>
                  <td>Does not identify anything.</td>
                </tr>
                <tr>
                  <td>Scroll of Light</td>
                  <td>2</td>
                  <td>15g</td>
                  <td>Temporally casts a light around the reader.</td>
                  <td>Stronger, brighter, lasts longer.</td>
                  <td>
                    Emits ligt in the area which it was read in. Lightsource
                    will not change it's place.
                  </td>
                </tr>
                <tr>
                  <td>Scroll of Teleportation</td>
                  <td>2</td>
                  <td>30g</td>
                  <td>
                    Teleports the reader to a random location in the dungeon.
                  </td>
                  <td>Same effect.</td>
                  <td>
                    Has a small chance to disorient the reader, otherwise works
                    the same.
                  </td>
                </tr>
                <tr>
                  <td>Scroll of Fire</td>
                  <td>2</td>
                  <td>35g</td>
                  <td>Sets the area and the reader on fire.</td>
                  <td>Grants Flame Cloak to the reader for 30 seconds</td>
                  <td>Smokes and crumbles to ash.</td>
                </tr>
                <tr>
                  <td>Scroll of Enchant Armor</td>
                  <td>2</td>
                  <td>300g</td>
                  <td>
                    Blesses a selected piece of armor or spellbook in the
                    reader's inventory in exchange for gold.
                  </td>
                  <td>The blessing is twice as strong.</td>
                  <td>
                    Curses armor instead. If the armor is blessed, it will
                    invert the blessing.
                  </td>
                </tr>
                <tr>
                  <td>Scroll of Enchant Weapon</td>
                  <td>2</td>
                  <td>300g</td>
                  <td>
                    Blesses a selected weapon in the reader's inventory in
                    exchange for gold. Magicstaffs and pickaxes do count as
                    weapons.
                  </td>
                  <td>The blessing is twice as strong.</td>
                  <td>
                    Curses weapon instead. If the weapon is blessed, it will
                    invert the blessing.
                  </td>
                </tr>
                <tr>
                  <td>Scroll of Remove Curse</td>
                  <td>2</td>
                  <td>90g</td>
                  <td>Removes a curse from a single chosen item.</td>
                  <td>Same effect.</td>
                  <td>
                    Randomly curses an uncursed object in the reader's
                    inventory.
                  </td>
                </tr>
                <tr>
                  <td>Scroll of Repair</td>
                  <td>2</td>
                  <td>180g</td>
                  <td>
                    Repairs a piece of selected armor, equipment, or weapon up
                    to two levels of quality.
                  </td>
                  <td>Fully repairs applicable items.</td>
                  <td>
                    Randomly damages one of the player's equipped items. If none
                    are equipped, no effect.
                  </td>
                </tr>
                <tr>
                  <td>Scroll of Destroy Armor</td>
                  <td>2</td>
                  <td>50g</td>
                  <td>
                    Destroys a random piece of the reader's equipped armor,
                    useful for cursed armor.
                  </td>
                  <td>Same effect.</td>
                  <td>
                    Causes a random piece of armor to vibrate, with no effect.
                  </td>
                </tr>
                <tr>
                  <td>Scroll of Magic Mapping</td>
                  <td>2</td>
                  <td>60g</td>
                  <td>
                    Reveals some of the dungeon's map to the reader instantly.
                  </td>
                  <td>Same effect.</td>
                  <td>Erases the reader's current dungeon map progress.</td>
                </tr>
                <tr>
                  <td>Scroll of Summon</td>
                  <td>2</td>
                  <td>70g</td>
                  <td>Summons a random set of friendly critters.</td>
                  <td>
                    Summons higher level, stronger creatures. +1 Summons a group
                    of two to four humans and +2 summons 4 friendly demons or a
                    Zap Brigade.
                  </td>
                  <td>
                    Summons some evil, non-friendly, critters who will attack
                    the player. -2 has a chance to summon a demon, Minotaur,
                    troll or imp.
                  </td>
                </tr>
                <tr>
                  <td>Scroll of Conjure Arrow</td>
                  <td>5</td>
                  <td>90g</td>
                  <td>
                    Spawns a quiver +0 of random arrows, the quantity is also
                    random.
                  </td>
                  <td>
                    The spawned quiver will be higher quality, blessed and
                    contain more.
                  </td>
                  <td>
                    The spawned quiver will of lower quality, cursed and contain
                    less.
                  </td>
                </tr>
                <tr>
                  <td>Scroll of Charging</td>
                  <td>2</td>
                  <td>100g</td>
                  <td>
                    Recharges a magic staff, or an Enchanted Feather, increasing
                    their quality substantially or recharging the feather by
                    50%.
                  </td>
                  <td>Completely refills staffs or Feathers</td>
                  <td>
                    Destroys a random piece of equipment, similar to a scroll of
                    destroy armor.
                  </td>
                </tr>
                <tr>
                  <td>Blank Scroll</td>
                  <td>2</td>
                  <td>50g</td>
                  <td>
                    Piece of paper which is used with Enchanted Feather to
                    create other types of scrolls.
                  </td>
                  <td>
                    Will produce a blessed scroll when used with the enchanting
                    feature.
                  </td>
                  <td>
                    Will produce a cursed scroll when used with the enchanting
                    feature.
                  </td>
                </tr>
                <tr>
                  <td>Piece of Mail</td>
                  <td>1</td>
                  <td>10g</td>
                  <td>
                    Can be read to display a short text on the event log. Every
                    piece of mail has a single message which is randomly chosen.
                  </td>
                  <td>Same effect.</td>
                  <td>Same effect.</td>
                </tr>
              </tbody>
              <tfoot></tfoot>
            </table>
          </>
        ),
      },

      {
        sectionName: "Mail Messages",
        sectionContent: (
          <>
            <p>
              Each piece of mail selects one message for it to contain when
              read. Regardless of curse, blessing or the actual type of message,
              there is no effect on the player for doing so. Often these
              messages serve as Easter Eggs for the player to find, though a few
              are generic messages.
            </p>
            <table>
              <tbody>
                <tr>
                  <th>Message</th>
                  <th>Notes</th>
                </tr>
                <tr>
                  <td>This is a letter:</td>
                  <td>
                    <i>The opening message after reading the messages below.</i>
                  </td>
                </tr>
                <tr>
                  <td>
                    "This is Moe. I like you Maggie...
                    <p>so much that... I want to...</p>
                    <p>eat you... for dinner."</p>
                  </td>
                  <td>
                    Reference to a letter from the game "
                    <i>The Legend of Zelda: The Wind Waker</i>".
                  </td>
                </tr>
                <tr>
                  <td>
                    "Help me.
                    <p>I am waiting for you inside Lord Jabu Jabu's belly.</p>
                    <p>--Ruto.</p>
                    <p>PS: Don't tell my father!"</p>
                  </td>
                  <td>
                    Reference to a letter from the game "
                    <i>The Legend of Zelda: Ocarina of Time</i>".
                  </td>
                </tr>
                <tr>
                  <td>
                    "Double the amount of copper excavated from the mines.
                    <p>
                      The gnomes will pay extra for anything above above the
                      standard amount."
                    </p>
                  </td>
                  <td>
                    May be a message from Baron Herx. Has a typo of using
                    "above" twice.
                    <p>
                      Potential reference to a "Private letter" from the game
                      "Skyrim"
                    </p>
                  </td>
                </tr>
                <tr>
                  <td>
                    "Double, double toil and trouble;
                    <p>Fire burn, and cauldron bubble."</p>
                  </td>
                  <td>
                    Reference to William Shakespeare play "<i>Macbeth</i>".
                  </td>
                </tr>
                <tr>
                  <td>
                    "Our exploration of the Devil's Bastion has
                    <p>
                      failed after an extended encounter with the dungeon's
                      inhabitants."
                    </p>
                  </td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>"A horse, a horse! My kingdom for a horse!"</td>
                  <td>Reference to William Shakespeare play "Richard III"</td>
                </tr>
                <tr>
                  <td>
                    "It is tradition to speak with the royal 'we',
                    <p>
                      and to use THIS MUCH VOLUME WHEN ADDRESSING OUR
                      SUBJECTS!!!"
                    </p>
                  </td>
                  <td>
                    Reference to a quote from show "
                    <i>My Little Pony: Friendship is Magic</i>".
                  </td>
                </tr>
                <tr>
                  <td>"swim swim hungry"</td>
                  <td>
                    Reference to video game "
                    <i>Commander Keen: Secret of the Oracle</i>".
                  </td>
                </tr>
                <tr>
                  <td>
                    "Of all the words of mice and men,
                    <p>The saddest are,</p>
                    <p>'It might have been.'"</p>
                  </td>
                  <td>
                    Reference to Kurt Vonnegut novel "Cat's Cradle". Original
                    quote from a poem by John Greenleaf Whittier "
                    <i>Maud Muller</i>".
                  </td>
                </tr>
                <tr>
                  <td>"Please disregard the previous letter."</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>This is an old scrawled note:</td>
                  <td>The opening message after reading the messages below.</td>
                </tr>
                <tr>
                  <td>
                    "I lie here in the dark now,
                    <p>waiting for death."</p>
                  </td>
                  <td>
                    Possible reference to Joseph Conrad novella "
                    <i>Heart of Darkness</i>".
                  </td>
                </tr>
                <tr>
                  <td>"The Dopefish lives!"</td>
                  <td>
                    Reference to video game "
                    <i>Commander Keen: Secret of the Oracle</i>".
                  </td>
                </tr>
                <tr>
                  <td>
                    "Mee wurst troll evurr
                    <p>nobuddy pay brijj tole</p>
                    <p>me nott sceary enuf</p>
                    <p>mee gett drunc an kil sellf</p>
                    <p>troll droun"</p>
                  </td>
                  <td>
                    Reference to a letter from the game "
                    <i>The Elder Scrolls IV: Oblivion</i>".
                  </td>
                </tr>
                <tr>
                  <td>This is a scrawled note:</td>
                  <td>
                    <i>The opening message after reading the messages below.</i>
                  </td>
                </tr>
                <tr>
                  <td>
                    "These donuts are great! Jelly-filled are my favorite!
                    Nothing beats a jelly-filled donut."
                  </td>
                  <td>
                    Reference to the <i>Pokémon</i> anime.
                  </td>
                </tr>
                <tr>
                  <td>
                    "Hey, I know! I'll use my trusty frying
                    <p>pan... as a drying pan!"</p>
                  </td>
                  <td>
                    Reference to the <i>Pokémon</i> anime.
                  </td>
                </tr>
                <tr>
                  <td>This is a hand-written note:</td>
                  <td>The opening message after reading the messages below.</td>
                </tr>
                <tr>
                  <td>
                    "Ten paces northeast from the mizzenmast;
                    <p>27 steps down to the hold;</p>
                    <p>And five paces to the right;</p>
                    <p>And dig at spot marked 'X'"</p>
                  </td>
                  <td>
                    Reference to "<i>Mutiny on The Bunny</i>", a 1950 Looney
                    Tunes cartoon
                  </td>
                </tr>
                <tr>
                  <td>"Alright everybody, let's mosey!"</td>
                  <td>
                    Reference to video game "<i>Final Fantasy 7</i>".
                  </td>
                </tr>
                <tr>
                  <td>"There's daggers in men's smiles."</td>
                  <td>
                    Reference to William Shakespeare play "<i>Macbeth</i>".
                  </td>
                </tr>
                <tr>
                  <td>"It's a secret to everybody."</td>
                  <td>
                    Reference to "<i>The Legend of Zelda</i>".
                  </td>
                </tr>
                <tr>
                  <td>"BEHIND YOU!"</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>"They say life is wasted on the living."</td>
                  <td>Reference to "Hitch Hiker's Guide to the Galaxy"</td>
                </tr>
                <tr>
                  <td>This is just an advertisement:</td>
                  <td>The opening message after reading the message below.</td>
                </tr>
                <tr>
                  <td>
                    "%s's %s has
                    <p>the finest items in all the realm!"</p>
                  </td>
                  <td>
                    "%s" are placeholders, replaced in-game with a random
                    Shopkeeper name and vending option.
                  </td>
                </tr>
                <tr>
                  <td>This is a blood-stained note:</td>
                  <td>The opening message after reading the message below.</td>
                </tr>
                <tr>
                  <td>"Yes, Avatar, seek a way home!"</td>
                  <td>Reference to a quote from video game Ultima VIII</td>
                </tr>
                <tr>
                  <td>This letter is covered in crumbs:</td>
                  <td>The opening message after reading the message below.</td>
                </tr>
                <tr>
                  <td>"Boil 'em, mash 'em, stick 'em in a stew!"</td>
                  <td>
                    Reference to a quote from Samewise, a character from "
                    <i>Lord of the Rings</i>".
                  </td>
                </tr>
              </tbody>
            </table>
          </>
        ),
      },
    ],
  },

  {
    id: "Potions",
    itemSections: [
      {
        sectionName: "Description",
        sectionContent: (
          <>
            <p>
              Potions are a large group of consumable items found in Barony,
              each with a unique effect when consumed by the player or when
              thrown at an enemy or ally. They are also used as a primary
              component alongside an Alembic to perform alchemy.
            </p>
            <p>
              Potions begin as unidentified, often discernible from one another
              by both the color of the liquid held inside, as well as the shape
              of the potion bottle. There are eight different sprites used for
              potions, each with a unique color and bottle shape. A descriptor
              is also provided to each potion, though there is no effect to
              these descriptors other than aesthetics and their ability to stack
              with potions of differing shape/description.
            </p>
          </>
        ),
      },

      {
        sectionName: "Usage",
        sectionContent: (
          <>
            <p>
              As would be expected from consumables such as potions, the primary
              function of potions is to be used in order to benefit the player,
              either by healing damage that has been sustained, or adding a
              beneficial status effect for a limited time.
            </p>
            <p>
              To counteract blind drinking of potions to gain instant bonuses,
              several mundane and even hazardous potions are present which
              hamper the player if consumed directly. Coincidentally, the second
              major usage of potions is as a form of consumable, ranged damage,
              where hit enemies will suffer from similar effects of the potion
              as if they had drank from the potion themselves. This mechanic
              also extends to beneficial potions, which in turn allows for a
              ranged support item for allies.
            </p>
            <p>
              When thrown, ALL of the potion's effects are activated, positive
              and negative. All potions inflict six damage when thrown, one
              additional damage is added per blessing, one subtracted per curse.
            </p>
          </>
        ),
      },

      {
        sectionName: "List of Potions",
        sectionContent: (
          <>
            <table>
              <thead>
                <tr>
                  <th>
                    <i>
                      <b>Name</b>
                    </i>
                  </th>
                  <th>
                    <i>
                      <b>Weight</b>
                    </i>
                  </th>
                  <th>
                    <i>
                      <b>Gold</b>
                    </i>
                  </th>
                  <th>
                    <i>
                      <b>Effect</b>
                    </i>
                  </th>
                  <th>
                    <i>
                      <b>If Cursed</b>
                    </i>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <i>
                      <b>Bottle of Water</b>
                    </i>
                  </td>
                  <td>
                    <i>5</i>
                  </td>
                  <td>
                    <i>7g</i>
                  </td>
                  <td>
                    +1 Hp, +4 per the first blessing, +5 per each additional
                    blessing
                    <p>
                      +0 additional damage against undead enemies, +20 per
                      blessing
                    </p>
                  </td>
                  <td>
                    On consumption, curses a random uncursed item in the
                    inventory, prioritizing equipped items
                    <p>
                      Ring and Amulet equipment slots may never get chosen, but
                      Rings and Amulets in the inventory can be cursed
                    </p>
                    <p>
                      Reverses the amount of blessings on an item (Ex. a +5
                      weapon will become -5 after drinking Cursed Water)
                    </p>
                    <p>Cursed Water has no effect on already cursed items</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <i>
                      <b>Bottle of Booze</b>
                    </i>
                  </td>
                  <td>
                    <i>5</i>
                  </td>
                  <td>
                    <i>12g</i>
                  </td>
                  <td>
                    +5 Hp, +5 per blessing
                    <p>Inflicts drunk for 40-60 seconds</p>
                    <p>Restores a small amount of hunger</p>
                    <p>Cures hangovers</p>
                  </td>
                  <td>-5 Hp per curse</td>
                </tr>
                <tr>
                  <td>
                    <i>
                      <b>Bottle of Fruit Juice</b>
                    </i>
                  </td>
                  <td>
                    <i>5</i>
                  </td>
                  <td>
                    <i>18g</i>
                  </td>
                  <td>
                    +5 Hp, +5 per blessing
                    <p>Restores a small amount of hunger</p>
                  </td>
                  <td>Inflicts drunk</td>
                </tr>
                <tr>
                  <td>
                    <i>
                      <b>Potion of Invisibility</b>
                    </i>
                  </td>
                  <td>
                    <i>5</i>
                  </td>
                  <td>
                    <i>70g</i>
                  </td>
                  <td>Grants invisibility for 30-60 seconds</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>
                    <i>
                      <b>Potion of Acid</b>
                    </i>
                  </td>
                  <td>
                    <i>5</i>
                  </td>
                  <td>
                    <i>30g</i>
                  </td>
                  <td>+10 Potion damage, +5 per blessing</td>
                  <td>+5 Thrown damage per curse.</td>
                </tr>
                <tr>
                  <td>
                    <i>
                      <b>Potion of Sickness</b>
                    </i>
                  </td>
                  <td>
                    <i>5</i>
                  </td>
                  <td>
                    <i>6g</i>
                  </td>
                  <td>
                    +5 Potion damage, +5 per blessing
                    <p>Inflicts poinsoned</p>
                  </td>
                  <td>+5 Thrown damage per curse.</td>
                </tr>
                <tr>
                  <td>
                    <i>
                      <b>Potion of Confusion</b>
                    </i>
                  </td>
                  <td>
                    <i>5</i>
                  </td>
                  <td>
                    <i>50g</i>
                  </td>
                  <td>Inflicts confused</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>
                    <i>
                      <b>Potion of Healing</b>
                    </i>
                  </td>
                  <td>
                    <i>5</i>
                  </td>
                  <td>
                    <i>45g</i>
                  </td>
                  <td>
                    +11 Hp, +2 per blessing
                    <p>Gain additional Hp equal to your constitution 2x</p>
                  </td>
                  <td>Inflicts poisoned</td>
                </tr>
                <tr>
                  <td>
                    <i>
                      <b>Potion of Extra Healing</b>
                    </i>
                  </td>
                  <td>
                    <i>5</i>
                  </td>
                  <td>
                    <i>180g</i>
                  </td>
                  <td>
                    +95 Hp, +23 per blessing
                    <p>Gain additional Hp equal to your constitution 4x</p>
                  </td>
                  <td>Inflicts poisoned</td>
                </tr>
                <tr>
                  <td>
                    <i>
                      <b>Potion of Cure Ailment</b>
                    </i>
                  </td>
                  <td>
                    <i>5</i>
                  </td>
                  <td>
                    <i>40g</i>
                  </td>
                  <td>
                    Cures all negative status effects on the target
                    <p>
                      +0 Seconds of Hp/Mp regeneration, +4 seconds per blessing
                    </p>
                  </td>
                  <td>Inflicts poisoned</td>
                </tr>
                <tr>
                  <td>
                    <i>
                      <b>Potion of Blindness</b>
                    </i>
                  </td>
                  <td>
                    <i>5</i>
                  </td>
                  <td>
                    <i>25g</i>
                  </td>
                  <td>Inflicts blindness for 10-15 seconds</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>
                    <i>
                      <b>Potion of Restore Magic</b>
                    </i>
                  </td>
                  <td>
                    <i>5</i>
                  </td>
                  <td>
                    <i>42g</i>
                  </td>
                  <td>
                    +55 Mp
                    <p>Gain additional Mp equal to your int 2x</p>
                  </td>
                  <td>Inflicts slow</td>
                </tr>
                <tr>
                  <td>
                    <i>
                      <b>Potion of Levitation</b>
                    </i>
                  </td>
                  <td>
                    <i>5</i>
                  </td>
                  <td>
                    <i>120g</i>
                  </td>
                  <td>
                    Grants levitation for 30-60 seconds, +30 maximum/minimum per
                    blessing
                  </td>
                  <td>Inflicts slow</td>
                </tr>
                <tr>
                  <td>
                    <i>
                      <b>Potion of Speed</b>
                    </i>
                  </td>
                  <td>
                    <i>5</i>
                  </td>
                  <td>
                    <i>80g</i>
                  </td>
                  <td>Grants speed for 60 seconds, +60 per blessing</td>
                  <td>Inflicts slow</td>
                </tr>
                <tr>
                  <td>
                    <i>
                      <b>Potion of Paralysis</b>
                    </i>
                  </td>
                  <td>
                    <i>5</i>
                  </td>
                  <td>
                    <i>75g</i>
                  </td>
                  <td>Inflicts paralysis for 7-10 seconds</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>
                    <i>
                      <b>Potion of Polymorph</b>
                    </i>
                  </td>
                  <td>
                    <i>5</i>
                  </td>
                  <td>
                    <i>250g</i>
                  </td>
                  <td>
                    Grants polymorph
                    <p>
                      Duration: 4-6 minutes Polymorph effects dissipate if
                      either water is entered or drunk. Permanently effects NPCs
                    </p>
                  </td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>
                    <i>
                      <b>Potion of Firestorm</b>
                    </i>
                  </td>
                  <td>
                    <i>5</i>
                  </td>
                  <td>
                    <i>100g</i>
                  </td>
                  <td>
                    +10 Potion damage, +5 per blessing
                    <p>
                      Explodes into 3x Elemental Focus-enhanced fireball{" "}
                      <a href="/wiki/Spells" title="Spells">
                        spells
                      </a>
                    </p>
                    <p>Destroys hit walls</p>
                    <p>
                      Completely refills HT and Boiler for{" "}
                      <a href="/wiki/Automaton_(Race)" title="Automaton (Race)">
                        Automatons
                      </a>{" "}
                      when consumed
                    </p>
                  </td>
                  <td>+5 Damage per curse</td>
                </tr>
                <tr>
                  <td>
                    <i>
                      <b>Potion of Icestorm</b>
                    </i>
                  </td>
                  <td>
                    <i>5</i>
                  </td>
                  <td>
                    <i>100g</i>
                  </td>
                  <td>
                    +10 Potion damage, +5 per blessing
                    <p>Explodes into 3x Elemental Focus-enhanced cold spells</p>
                  </td>
                  <td>+5 Damager per curse</td>
                </tr>
                <tr>
                  <td>
                    <i>
                      <b>Potion of Thunderstorm</b>
                    </i>
                  </td>
                  <td>
                    <i>5</i>
                  </td>
                  <td>
                    <i>100g</i>
                  </td>
                  <td>
                    +10 Potion damage, +5 per blessing
                    <p>
                      Explodes into 3x Elemental Focus-enhanced lightning spells
                    </p>
                  </td>
                  <td>+5 Damage per curse</td>
                </tr>
                <tr>
                  <td>
                    <i>
                      <b>Potion of Strength</b>
                    </i>
                  </td>
                  <td>
                    <i>5</i>
                  </td>
                  <td>
                    <i>50g</i>
                  </td>
                  <td>
                    Applies strength (+9 strength, -5 perception) and push for
                    60 seconds, +60 seconds per blessing
                  </td>
                  <td>Inflicts blindness</td>
                </tr>
              </tbody>
              <tfoot></tfoot>
            </table>
          </>
        ),
      },
    ],
  },

  {
    id: "Books",
    itemSections: [
      {
        sectionName: "Description",
        sectionContent: (
          <>
            <p>
              Books are a large group of items in Barony, which allows the
              player to read a variety of texts which can provide tips, in-game
              lore about important characters, or just provide a short and fun
              distraction alongside the dungeon travelling. Cursed books (not to
              be confused with cursed spellbooks) have no negative effects.
            </p>
            <p>
              Throughout the dungeon, Books are found in a large slew of colors,
              with nine different possible models that are randomly assigned to
              each book upon spawning. There are currently 35 different books in
              the game. Every floor can spawn with books, and enemies such as
              Trolls can drop them on rare occasion when killed.
            </p>
            <p>
              In one sense, books are placed in the dungeon as a way to confuse
              players between normal books and the more lucrative Spellbooks
              which are found alongside normal books with no visible distinction
              until picked up. There are however several uses for normal books
              during a trip in the dungeon.
            </p>
            <p>
              Most books are written in a way to teach players about aspects of
              the game, often in a vague manner so that it doesn’t outright
              state information, but provides enough for players to attempt
              something themselves and learn first-hand. Others help to provide
              a better understanding of key characters in the story of Barony,
              such as the origins of Baron Herx’s powers and his relationship
              with Baphomet. If a book is neither for lore or information, it is
              often a side distraction that the player can read. There is also
              an achievement known as Well Read, which is gained by reading all
              the books in the game.
            </p>
            <p>
              For those well acquainted with the game, the information in these
              books are often redundant and often not worth the time spent
              opening the book itself up. However, picking up the book is often
              advisable, as it serves as a good object to gain Lore skill with.
              Due to the low gold value of normal books, it serves as a good
              intermediate option to identify if the player has only a few cheap
              food items to gain those first few lore points.
            </p>
            <h3>Automatons</h3>
            <p>
              Automaton players serve under a different set of rules regarding
              what they can use for food compared to other monster and human
              races. Non-magic Books are one of their primary sources of food,
              being able to consume a single book in order to fully restore
              their boiler meter. This makes books a far more valuable asset for
              Automatons, as it serves as one of the most effective food
              resources to come across.
            </p>
          </>
        ),
      },

      {
        sectionName: "List of Books",
        sectionContent: (
          <>
            <ul>
              <li>A Brief Survey of Goblins</li>
              <li>Assessing the ZAP Brigade</li>
              <li>Bottle Book</li>
              <li>Cave Beasts</li>
              <li>Character Attributes</li>
              <li>Citadel Servant FAQ</li>
              <li>Concerning the Undead</li>
              <li>Controlling Goblins</li>
              <li>Dethroning Herx</li>
              <li>How to be Strong</li>
              <li>Lost Journal</li>
              <li>Miner's Christmas</li>
              <li>Mining My Soul</li>
              <li>My Journal</li>
              <li>Newspaper Clipping</li>
              <li>On Giantism, Vol 1</li>
              <li>On Giantism, Vol 2</li>
              <li>Poem of the Mines</li>
              <li>Saviour Knight of the North</li>
              <li>Sightings of the Lich</li>
              <li>Surviving the Mines</li>
              <li>The Adventurer Who Went To Hell</li>
              <li>The Art of Mine Warfare</li>
              <li>The Campaign</li>
              <li>The Flying Minecart</li>
              <li>The History of Baron Herx</li>
              <li>The Lusty Goblin Maid</li>
              <li>The Meaning of the Labyrinth</li>
              <li>The Pirate King</li>
              <li>To Emily</li>
              <li>Winny's Report</li>
              <li>Worker's Journal, Entry 1</li>
              <li>Worker's Journal, Entry 2</li>
              <li>Worker's Journal, Entry 3</li>
              <li>Worker's Journal, Entry 4</li>
            </ul>
          </>
        ),
      },
    ],
  },
  {
    id: "Food",
    itemSections: [
      {
        sectionName: "Description",
        sectionContent: (
          <>
            <p>
              Food are a large group of consumable items found throughout
              Barony, serving to combat the player's insatiable hunger and
              provides a ticking clock for players who spend too much time
              examining the floors of the dungeon.
            </p>
            <p>
              Food can be found scattered across the dungeon or as loot from
              defeated enemies.
            </p>
          </>
        ),
      },

      {
        sectionName: "Mechanics",
        sectionContent: (
          <>
            <h3>Consuming Food</h3>
            <p>
              Like most items, right-clicking on food inside the inventory will
              show the option to eat that item. When in the hotbar, the item
              will be automatically selected and eaten by the player.
            </p>
            <p>
              The Tin Can is the exception to all of this, requiring a Tin
              Opener in order to access its contents, and a possible penalty for
              players in the form of grease that will cause them to fumble their
              weapons. Tins also have a random chance to provide supplemental
              health and mana regeneration. If the player has the tin opener,
              and maybe a Towel to wipe themselves with after, then they can
              consume the tin can safely. Alternatively, the Goatman allows
              players to eat the tin outright, with an immunity to grease.
            </p>
            <p>
              It should be noted that consuming too much food will force the
              player to vomit and reset their hunger to a normal value,
              effectively wasting food items in the process. Drinking cursed
              Bottles of Booze, or an excess of booze at one time will also
              result in vomiting, causing hunger to decrease and the player to
              become hungry.
            </p>

            <h3>Food Qualities</h3>
            <p>
              Like most other items in Barony, each food item will have an item
              quality associated with it when it is picked up, changing how the
              item acts in regards to edibility and how "safe" it is to be
              consumed. Stats such as constitution also play a role in how the
              player tolerates food quality.
            </p>
            <p>
              Cursed food appears to always result in puking, whereas blessed
              food provides the "Nourishment" buff for several seconds,
              increasing MP and HP regen. Nourishment is instantly removed if
              the player pukes for any reason.
            </p>
            <table>
              <tbody>
                <tr>
                  <th>
                    <i>
                      <b>Quality Title</b>
                    </i>
                  </th>
                  <th>
                    <i>
                      <b>Chance to Puke</b>
                    </i>
                  </th>
                </tr>
                <tr>
                  <td>
                    <i>Fresh</i>
                  </td>
                  <td>0%</td>
                </tr>
                <tr>
                  <td>
                    <i>Slightly Aged</i>
                  </td>
                  <td>4%</td>
                </tr>
                <tr>
                  <td>
                    <i>Aged</i>
                  </td>
                  <td>10%</td>
                </tr>
                <tr>
                  <td>
                    <i>Mouldy</i>
                  </td>
                  <td>25%</td>
                </tr>
                <tr>
                  <td>
                    <i>Rotten</i>
                  </td>
                  <td>100%</td>
                </tr>
              </tbody>
            </table>

            <h3>Disabling Hunger</h3>
            <p>
              Within the Options menu, the player can opt out of Hunger in favor
              of disabling natural health regeneration. Doing so, food sources
              will begin to heal for five health each, making them smaller scale
              Potions of Healing to an extent. Players can still vomit if hunger
              is off.
            </p>
          </>
        ),
      },

      {
        sectionName: "Types of Food",
        sectionContent: (
          <>
            <table>
              <thead>
                <tr>
                  <th>
                    <i>
                      <b>Food</b>
                    </i>
                  </th>
                  <th>
                    <i>
                      <b>Hunger Value</b>
                    </i>
                  </th>
                  <th>
                    <i>
                      <b>Weight</b>
                    </i>
                  </th>
                  <th>
                    <i>
                      <b>Gold Value</b>
                    </i>
                  </th>
                  <th>
                    <i>
                      <b>Vegetarian Conduct?</b>
                    </i>
                  </th>
                  <th>
                    <i>
                      <b>Notes</b>
                    </i>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Cheese</td>
                  <td>
                    <b>100</b>
                  </td>
                  <td>
                    <b>5</b>
                  </td>
                  <td>
                    <b>5g</b>
                  </td>
                  <td>
                    <b>Yes</b>
                  </td>
                  <td>
                    <b>-</b>
                  </td>
                </tr>
                <tr>
                  <td>Ration</td>
                  <td>
                    <b>200</b>
                  </td>
                  <td>
                    <b>2</b>
                  </td>
                  <td>
                    <b>4g</b>
                  </td>
                  <td>
                    <b>Yes</b>
                  </td>
                  <td>Gained by cooking. Flavors can be added to it.</td>
                </tr>
                <tr>
                  <td>Apple</td>
                  <td>
                    <b>200</b>
                  </td>
                  <td>
                    <b>5</b>
                  </td>
                  <td>
                    <b>5g</b>
                  </td>
                  <td>
                    <b>Yes</b>
                  </td>
                  <td>
                    <b>-</b>
                  </td>
                </tr>
                <tr>
                  <td>Creampie</td>
                  <td>
                    <b>200</b>
                  </td>
                  <td>
                    <b>10</b>
                  </td>
                  <td>
                    <b>10g</b>
                  </td>
                  <td>
                    <b>Yes</b>
                  </td>
                  <td>
                    Can also be wielded. Attacking with a pie in your main hand
                    causes you to throw it.Entities are inflicted with the messy
                    effect for a short period of time.
                  </td>
                </tr>
                <tr>
                  <td>Nut</td>
                  <td>
                    <b>200</b>
                  </td>
                  <td>
                    <b>2</b>
                  </td>
                  <td>
                    <b>0g</b>
                  </td>
                  <td>
                    <b>Yes</b>
                  </td>
                  <td>Gained from dryad's spell of Germinate</td>
                </tr>
                <tr>
                  <td>Mushroom Slice</td>
                  <td>
                    <b>200</b>
                  </td>
                  <td>
                    <b>2</b>
                  </td>
                  <td>
                    <b>0g</b>
                  </td>
                  <td>
                    <b>Yes</b>
                  </td>
                  <td>Gained from myconid's spell of Germinate</td>
                </tr>
                <tr>
                  <td>Tomalley</td>
                  <td>
                    <b>400</b>
                  </td>
                  <td>
                    <b>5</b>
                  </td>
                  <td>
                    <b>10g</b>
                  </td>
                  <td>
                    <b>Yes</b>
                  </td>
                  <td>
                    <b>-</b>
                  </td>
                </tr>
                <tr>
                  <td>Bread</td>
                  <td>
                    <b>400</b>
                  </td>
                  <td>
                    <b>10</b>
                  </td>
                  <td>
                    <b>30g</b>
                  </td>
                  <td>
                    <b>Yes</b>
                  </td>
                  <td>
                    <b>-</b>
                  </td>
                </tr>
                <tr>
                  <td>
                    <i>Blood Vial</i>
                  </td>
                  <td>
                    <b>10</b>
                    <br />—<br />
                    Vampire/Accursed:
                    <br />
                    <b>250</b>
                  </td>
                  <td>
                    <b>10</b>
                  </td>
                  <td>
                    <b>20g</b>
                  </td>
                  <td>
                    <b>No</b>
                  </td>
                  <td>
                    Unless you are playing as a Vampire or an Accursed, it will
                    instantly cause you to vomit.
                  </td>
                </tr>
                <tr>
                  <td>Fish</td>
                  <td>
                    <b>500</b>
                  </td>
                  <td>
                    <b>15</b>
                  </td>
                  <td>
                    <b>30g</b>
                  </td>
                  <td>
                    <b>No</b>
                  </td>
                  <td>Fish is the only item that spiders can interact with.</td>
                </tr>
                <tr>
                  <td>Meat</td>
                  <td>
                    <b>600</b>
                  </td>
                  <td>
                    <b>10</b>
                  </td>
                  <td>
                    <b>30g</b>
                  </td>
                  <td>
                    <b>No</b>
                  </td>
                  <td>
                    <b>-</b>
                  </td>
                </tr>
                <tr>
                  <td>Tin</td>
                  <td>
                    <b>600</b>
                  </td>
                  <td>
                    <b>20</b>
                  </td>
                  <td>
                    <b>40g</b>
                  </td>
                  <td>
                    <b>No</b>
                  </td>
                  <td>
                    Cannot be consumed without a tin opener. When consumed, it
                    may inflicts the greasy status effect.Can grant +2 HP and MP
                    Regen.
                  </td>
                </tr>
              </tbody>
              <tfoot></tfoot>
            </table>
          </>
        ),
      },
    ],
  },

  {
    id: "Equipment",
    itemSections: [
      {
        sectionName: "List of Equipment",
        sectionContent: (
          <>
            <table>
              <tbody>
                <tr>
                  <th>
                    <i>
                      <b>Name</b>
                    </i>
                  </th>
                  <th>
                    <i>
                      <b>Icon</b>
                    </i>
                  </th>
                  <th>
                    <i>
                      <b>Weight</b>
                    </i>
                  </th>
                  <th>
                    <i>
                      <b>Gold</b>
                    </i>
                  </th>
                  <th>
                    <i>
                      <b>Description</b>
                    </i>
                  </th>
                  <th>
                    <i>
                      <b>Equip Region</b>
                    </i>
                  </th>
                </tr>
                <tr>
                  <td>
                    <i>Pickaxe</i>
                  </td>
                  <td>
                    <b>30</b>
                  </td>
                  <td>
                    <b>120g</b>
                  </td>
                  <td>
                    +0 attack, +1 per blessing. Inflicts typeless damage.
                    <p>Destroys walls.</p>
                  </td>
                  <td>
                    <b>Main hand</b>
                  </td>
                </tr>
                <tr>
                  <td>
                    <i>Tin Opener</i>
                  </td>
                  <td>
                    <b>5</b>
                  </td>
                  <td>
                    <b>20g</b>
                  </td>
                  <td>Allows the player to consume tins of food.</td>
                  <td>
                    <b>None</b>
                  </td>
                </tr>
                <tr>
                  <td>
                    <i>Towel</i>
                  </td>
                  <td>
                    <b>5</b>
                  </td>
                  <td>
                    <b>10g</b>
                  </td>
                  <td>
                    Cures greasy, messy and bleed. Interacting with the item
                    will activate these effects.
                  </td>
                  <td>
                    <b>None</b>
                  </td>
                </tr>
                <tr>
                  <td>
                    <i>Mirror</i>
                  </td>
                  <td>
                    <b>10</b>
                  </td>
                  <td>
                    <b>15g</b>
                  </td>
                  <td>
                    Describes the player in the text log. Returns different
                    messages based on charisma, hunger, and status effects.
                    <p>
                      Blessed mirrors teleport the player to a random location
                      on the stage. Cursed mirrors shatter and inflict bleed on
                      the player.
                    </p>
                    <p>
                      <a href="/wiki/Vampire_(Race)" title="Vampire (Race)">
                        Vampire
                      </a>{" "}
                      players will see nothing when looking into a mirror.
                    </p>
                  </td>
                  <td>
                    <b>None</b>
                  </td>
                </tr>
                <tr>
                  <td>
                    <i>Lock Pick</i>
                  </td>
                  <td>
                    <b>5</b>
                  </td>
                  <td>
                    <b>5g</b>
                  </td>
                  <td>
                    Used to pick locks on doors,treasure chests and walls. Can
                    also be used to disarm{" "}
                    <a href="/wiki/Automaton" title="Automaton">
                      Automatons
                    </a>{" "}
                    and arrow traps on walls.
                    <p>
                      Allows the player to tune tinkered traps. See{" "}
                      <a href="/wiki/Tinkering" title="Tinkering">
                        Tinkering
                      </a>{" "}
                      for more details.
                    </p>
                  </td>
                  <td>
                    <b>Main hand</b>
                  </td>
                </tr>
                <tr>
                  <td>
                    <i>Skeleton Key</i>
                  </td>
                  <td>
                    <b>5</b>
                  </td>
                  <td>
                    <b>300g</b>
                  </td>
                  <td>
                    Used to lock or unlock any door or treasure chest, including
                    mimics. Can unlock some wall locks.
                    <p>
                      Can also be used to disarm arrow traps. Degrades on
                      unlocking chests and wall locks for the first time
                    </p>
                  </td>
                  <td>
                    <b>Main hand</b>
                  </td>
                </tr>
                <tr>
                  <td>
                    <i>Torch</i>
                  </td>
                  <td>
                    <b>10</b>
                  </td>
                  <td>
                    <b>5g</b>
                  </td>
                  <td>
                    Emits light.
                    <p>+0 AC, +1 per blessing</p>
                    <p>
                      Can be used to block. Only trains blocking skill up to 40.
                      Provides brighter light while defending.
                    </p>
                    <p>Burns out after 2.5 minutes.</p>
                  </td>
                  <td>
                    <b>Offhand</b>
                  </td>
                </tr>
                <tr>
                  <td>
                    <i>Lantern</i>
                  </td>
                  <td>
                    <b>20</b>
                  </td>
                  <td>
                    <b>35g</b>
                  </td>
                  <td>
                    Emits bright light.
                    <p>+0 AC, +1 per blessing</p>
                    <p>
                      Can be used to block. Only trains blocking skill up to 40.
                      Provides brighter light while defending.
                    </p>
                    <p>Loses condition every 3.5 minutes.</p>
                  </td>
                  <td>
                    <b>Offhand</b>
                  </td>
                </tr>
                <tr>
                  <td>
                    <i>Crystal Shard</i>
                  </td>
                  <td>
                    <b>10</b>
                  </td>
                  <td>
                    <b>15g</b>
                  </td>
                  <td>
                    <b></b> Emits dim light.
                    <p>+0 AC, +1 per blessing</p>
                    <p>
                      Fragile: has a 100% chance to degrade when blocking hits,
                      even with 100 blocking skill.
                    </p>
                    <p>
                      Can be used to block. Only trains blocking skill up to 40.
                      Provides brighter light while defending.
                    </p>
                    <p>Never burns out.</p>
                  </td>
                  <td>
                    <b>Offhand</b>
                  </td>
                </tr>
                <tr>
                  <td>
                    <i>Beartrap</i>
                  </td>
                  <td>
                    <b>30</b>
                  </td>
                  <td>
                    <b>50g</b>
                  </td>
                  <td>
                    A trap. Can be armed on the ground.
                    <p>
                      Inflicts damage based on condition and beatitude. +22
                      Damages on Excellent quality.
                      <br />
                      Inflicts bleed and paralysis.
                    </p>
                    <p>
                      Bear traps set by players cannot be activated by players
                      or allied NPCs. Anybody can fall into gnome thief traps
                      and other set bear traps found in the Ruins.
                    </p>
                    <p>
                      Has a chance to break when arming, based on condition.
                    </p>
                  </td>
                  <td>
                    <b>Main hand</b>
                  </td>
                </tr>
                <tr>
                  <td>
                    <i>Alembic</i>
                  </td>
                  <td>
                    <b>20</b>
                  </td>
                  <td>
                    <b>300g</b>
                  </td>
                  <td>
                    Allows the player to mix & brew potions. See Alchemy for
                    more information.
                  </td>
                  <td>
                    <b>None</b>
                  </td>
                </tr>
                <tr>
                  <td>
                    <i>Tinkering Kit</i>
                  </td>
                  <td>
                    <b>20</b>
                  </td>
                  <td>
                    <b>250g</b>
                  </td>
                  <td>
                    Can be used to salvage unused items for scrap, repair
                    equipment, and to create tinkered equipment. See Tinkering
                    Kit for more information.
                    <p>
                      Can be used to block. Only trains blocking skill up to 40.
                      Items picked up while blocking are salvaged automatically.
                    </p>
                  </td>
                  <td>
                    <b>Offhand</b>
                  </td>
                </tr>
                <tr>
                  <td>
                    <i>Frypan</i>
                  </td>
                  <td>
                    <b>50</b>
                  </td>
                  <td>
                    <b>250g</b>
                  </td>
                  <td>
                    Unbreakable
                    <p>
                      Can be used to cook. See Cooking for more information. Can
                      also be used to block.
                    </p>
                  </td>
                  <td>
                    <b>Offhand</b>
                  </td>
                </tr>
                <tr>
                  <td>
                    <i>Enchanted Feather</i>
                  </td>
                  <td>
                    <b>1</b>
                  </td>
                  <td>
                    <b>400g</b>
                  </td>
                  <td>
                    Used to inscribe labels onto blank scrolls. Can also repair
                    spellbooks.
                    <p>
                      These actions consume charge. Charge can be restored with
                      scrolls of charging. See Enchanted Feather for more
                      information.
                    </p>
                  </td>
                  <td>
                    <b>None</b>
                  </td>
                </tr>
                <tr>
                  <td>
                    <i>Flame Trap</i>
                  </td>
                  <td>
                    <b>2</b>
                  </td>
                  <td>
                    <b>30g</b>
                  </td>
                  <td>
                    A trap. Can be armed on walls, the ground, doors, and
                    chests.
                    <p>+30 magic damage, inflicts burning.</p>
                    <p>Add damage equal to 50% of your perception.</p>
                    <p>
                      Toggle trigger behavior (who it can hit) with a lockpick.
                    </p>
                  </td>
                  <td>
                    <b>Main hand</b>
                  </td>
                </tr>
                <tr>
                  <td>
                    <i>Freeze Trap</i>
                  </td>
                  <td>
                    <b>2</b>
                  </td>
                  <td>
                    <b>30g</b>
                  </td>
                  <td>
                    A trap. Can be armed on walls, the ground, doors, and
                    chests.
                    <p>+25 magic damage, inflicts slow.</p>
                    <p>Add damage equal to 25% of your perception.</p>
                    <p>
                      Toggle trigger behavior (who it can hit) with a lockpick.
                    </p>
                  </td>
                  <td>
                    <b>Main hand</b>
                  </td>
                </tr>
                <tr>
                  <td>
                    <i>Teleportation Trap</i>
                  </td>
                  <td>
                    <b>2</b>
                  </td>
                  <td>
                    <b>30g</b>
                  </td>
                  <td>
                    A trap. Can be armed on walls, the ground, doors, and
                    chests.
                    <p>Teleports a target to a random location on the stage.</p>
                    <p>
                      Toggle trigger behavior (who it can hit) with a lockpick.
                      If a specific option is chosen, creatures hit with
                      teleport traps will be teleported to this trap.
                    </p>
                  </td>
                  <td>
                    <b>Main hand</b>
                  </td>
                </tr>
                <tr>
                  <td>
                    <i>Sleep Trap</i>
                  </td>
                  <td>
                    <b>2</b>
                  </td>
                  <td>
                    <b>30g</b>
                  </td>
                  <td>
                    A trap. Can be armed on walls, the ground, doors, and
                    chests.
                    <p>Inflicts sleep on targets.</p>
                    <p>
                      Toggle trigger behavior (who it can hit) with a lockpick.
                    </p>
                  </td>
                  <td>
                    <b>Main hand</b>
                  </td>
                </tr>
                <tr>
                  <td>
                    <i>Broken Detonator</i>
                  </td>
                  <td>
                    <b>2</b>
                  </td>
                  <td>
                    <b>1g</b>
                  </td>
                  <td>
                    Useless. Drops after one of the four above traps is used.
                    Can be salvaged for a few scrap.
                  </td>
                  <td>
                    <b>None</b>
                  </td>
                </tr>
                <tr>
                  <td>
                    <i>Death Box</i>
                  </td>
                  <td>
                    <b>100</b>
                  </td>
                  <td>
                    <b>1g</b>
                  </td>
                  <td>
                    Dropped by players when they die, if the keep inventory rule
                    is not enabled.
                    <p>
                      Can be opened, and will deposit its contents into your
                      inventory.
                    </p>
                    <p>The white locker is used if colorblind mode is on.</p>
                  </td>
                  <td>
                    <b>None</b>
                  </td>
                </tr>
                <tr>
                  <td>
                    <i>Duck</i>
                  </td>
                  <td>
                    <b>5</b>
                  </td>
                  <td>
                    <b>0g</b>
                  </td>
                  <td>
                    Inflicts Distract briefly
                    <p>Prevents targets from being alerted on next hit.</p>
                    <p>Follows player and attracts enemies to its positon.</p>
                    <p>Can dive into water to collect fish.</p>
                  </td>
                  <td>
                    <b>Offhand</b>
                  </td>
                </tr>
                <tr>
                  <td>
                    <i>Key</i>
                  </td>
                  <td>
                    <b>5</b>
                  </td>
                  <td>
                    <b>0g</b>
                  </td>
                  <td>
                    Unlocks matching type wall locks.
                    <p>
                      Automatically consumed by interacting with the
                      corresponding wall lock type.
                    </p>
                  </td>
                  <td>
                    <b>None</b>
                  </td>
                </tr>
              </tbody>
            </table>
          </>
        ),
      },
    ],
  },
];
