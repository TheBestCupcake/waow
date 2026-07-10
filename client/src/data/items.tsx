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
                  <td>
                    <a href="/wiki/Gems" title="Gems">
                      Gems
                    </a>
                  </td>
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
];
