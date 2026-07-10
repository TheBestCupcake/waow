import type { ReactNode } from "react";
import forcebolt from "../assets/forcebolt.webp";
import firesprite from "../assets/summon_fire_sprite.webp";
import ignite from "../assets/Ignite.webp";
import shatterobjects from "../assets/Shatter_Object.webp";
import salvage from "../assets/salvage.webp";
import sprayacid from "../assets/spray_acid.webp";
import flamecloak from "../assets/flame_cloak.webp";
import attractitems from "../assets/attract_items.webp";
import spin from "../assets/spin.webp";
import windgate from "../assets/windgate.webp";
import disruptearth from "../assets/disrupt_earth.webp";
import lightning from "../assets/lightning.webp";
import sprayweb from "../assets/spray_web.webp";
import fireball from "../assets/fireball.webp";
import firewall from "../assets/fire_wall.webp";
import magiciansbubble from "../assets/magicians_bubble.webp";
import abundance from "../assets/abundance.webp";
import kineticdefence from "../assets/kinetic_defence.webp";
import telekinesis from "../assets/telekinesis.webp";
import disarm from "../assets/disarm.webp";
import deface from "../assets/deface.webp";
import boobytrap from "../assets/booby_trap.webp";
import splinterarmor from "../assets/splinter_armor.webp";
import dig from "../assets/dig.webp";
import invisible from "../assets/invisible.webp";
import teleportother from "../assets/teleport_other.webp";
import preserve from "../assets/preserve.webp";
import nullarea from "../assets/null_area.webp";
import lift from "../assets/lift.webp";
import kineticfield from "../assets/kinetic_field.webp";
import sabotage from "../assets/sabotage.webp";
import magicmissile from "../assets/magic_missile.webp";
import cold from "../assets/cold.webp";
import teleportation from "../assets/teleportation.webp";
import icewave from "../assets/ice_wave.webp";
import lightningbolt from "../assets/lightning_bolt.webp";
import meteor from "../assets/meteor.webp";
import mistform from "../assets/mist_form.webp";
import absorbmagic from "../assets/absorb_magic.webp";
import portal from "../assets/portal.webp";
import elementalfocus from "../assets/elemental_focus.webp";
import levitation from "../assets/levitation.webp";
import stealweapon from "../assets/steal_weapon.webp";

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
      sectionContent: (
        <>
          <p>
            Spells are a group of magical utilities found in Barony that the
            player and a select few enemies can use to combat enemies, assist
            themselves or even alter portions of the dungeons.
          </p>
          <p>
            While varying extensively in effect and use, spells are defined as
            any ability that consumes MP (Mana Points) and does so in exchange
            for a magical ability. Some spells consume mana a single time,
            releasing their magical effect once their mana cost has been met,
            while others cast a magic which lingers until the player runs out of
            MP or cancels the effect. There are many different spells found
            throughout Barony, but they can all be separated into one of four
            distinct spell archetypes:
          </p>
          <ul>
            <li>
              Area - Causes an effect that effects the nearby dungeon area
              and/or NPCs and other players
            </li>
            <li>
              Projectile - Causes an effect to targets hit by the projectile
            </li>
            <li>Sustained - Consumes mana for a continual effect</li>
            <li>
              Self-Effect - Causes an effect for the caster of the spell, often
              involving the map or the caster's inventory
            </li>
          </ul>
        </>
      ),
    },

    {
      sectionName: "Obtaining Spells",
      sectionContent: (
        <>
          <p>
            When entering a dungeon, the average class begins without any source
            of spells and cannot cast any kind of magic. In order to begin using
            spells, the player must find a spellbook and learn its spell to
            begin casting that spell. Certain classes do begin their adventure
            with one or more spellbooks, allowing them to begin casting those
            spells once they read the books that contain the spells. Other
            classes, as well as some monster races, also start the game with
            innate spells, skipping the need for their spellbooks.
          </p>
          <p>
            While reading from a spellbook is often sufficient to start using
            its spell, more complex spells require escalating skill barriers to
            be met in order to master those spells. Some like Light or Forcebolt
            require no prior skill training, while for example Dominate requires
            a large quantity of skill in Mysticism to learn. INT also
            contributes to the learning of spells, with each point equating to a
            point of Magic Skill.
          </p>
          <h3>Spellcasting Beginner</h3>
          <p>
            Spellcasting Beginner is a penalty applied to new adventurers who
            have insufficient skill level in the magical school. If this is
            applied, the character has a chance to "fizzle" their spell.
            Fizzling a spell will not only use up the mana and fail to produce a
            spell, but will also cause the character to lose a little bit of
            mana alongside the base cost of the spell.They will also have a
            chance for spells to cost additional mana when casted.
          </p>
          <h3>Magic Staffs</h3>
          <p>
            Magic Staffs are an alternative method of casting spells that allow
            players to cast without mana. They also are not based on the
            characters skill level, allowing for spells to be cast above the
            characters level with a given magical school and without fear of
            fizzling.
          </p>
          <p>
            A player can also equip spell books in their off hand and cast the
            spell within using the block/sneak key. Blessed spell books will
            yield strong and more potent outputs, so collecting high
            enchantments prove to be most useful.
          </p>
          <p>
            Using staffs still contributes to leveling up the magical school,
            albeit at a slower rate than casting a spell normally and risking
            degradation when used. This makes their utility finite, where a
            learnt spell can be cast as long as the player can spend the mana
            and had enough skill to learn the spell. There is also a distinct
            lack of spells, most notably aid-type spells, from the potential
            pool of staff types.
          </p>
        </>
      ),
    },

    {
      sectionName: "Table of Tiers",
      sectionContent: (
        <>
          <table>
            <caption></caption>
            <tbody>
              <tr>
                <th>Numerical Value</th>
                <th>Tier</th>
                <th>Numeral</th>
              </tr>
              <tr>
                <td>0-19</td>
                <td>None</td>
                <td>I</td>
              </tr>
              <tr>
                <td>20-39</td>
                <td>Basic</td>
                <td>II</td>
              </tr>
              <tr>
                <td>40-59</td>
                <td>Skilled</td>
                <td>III</td>
              </tr>
              <tr>
                <td>60-79</td>
                <td>Expert</td>
                <td>IV</td>
              </tr>
              <tr>
                <td>80-99</td>
                <td>Master</td>
                <td>V</td>
              </tr>
              <tr>
                <td>100</td>
                <td>Legendary</td>
                <td>VI</td>
              </tr>
            </tbody>
          </table>

          <h3>Spell Damage</h3>
          <p>
            All spells that have a numerical value in their effect (e.g. damage
            and healing spells) are affected by "PWR" All effects are thrown
            together; spellbook casting with a +1 spellbook of forcebolt, while
            having 10 intelligence and wearing a +1 Magnus's headdress deals 24
            damage.
          </p>
          <table>
            <tbody>
              <tr>
                <th>
                  <b>Stat</b>
                </th>
                <th>
                  <b>Effect</b>
                </th>
              </tr>
              <tr>
                <td>Intelligence</td>
                <td>+1 to pwr per point of intelligence you have</td>
              </tr>
              <tr>
                <td>PWR</td>
                <td>
                  Adds +X% effect to your numerical spells where X is your pwr
                </td>
              </tr>
              <tr>
                <td>Casting with a spellbook</td>
                <td>
                  Adds +X% effect to the spell cast with the spellbook where is
                  1/2 of your intelligence
                </td>
              </tr>
              <tr>
                <td>Casting with a blessed spellbook</td>
                <td>+25% Effect to the spell cast per blessing</td>
              </tr>
            </tbody>
          </table>
        </>
      ),
    },

    {
      sectionName: "Sorcery Spells",
      sectionContent: (
        <>
          <table>
            <tbody>
              <tr>
                <th>
                  <i>
                    <b>Spell</b>
                  </i>
                </th>
                <th>
                  <i>
                    <b>Spell Type</b>
                  </i>
                </th>
                <th>
                  <i>
                    <b>Description</b>
                  </i>
                </th>
                <th>
                  <i>
                    <b>Notes</b>
                  </i>
                </th>
                <th>
                  <i>
                    <b>Cost</b>
                  </i>
                </th>
                <th>
                  <i>
                    <b>School and Skill Tier</b>
                  </i>
                </th>
              </tr>
              <tr>
                <td>
                  <img src={forcebolt}></img>
                  <p>
                    <i>Force Bolt</i>
                  </p>
                </td>
                <td>Projectile</td>
                <td>+15 Magic damage</td>
                <td>An Arcanist spell by default</td>
                <td>
                  <b>-5 MP</b>
                </td>
                <td>
                  <b>Sorcery</b>
                  <br />
                  <b>I</b> <i>(None)</i>
                </td>
              </tr>
              <tr>
                <td>
                  <img src={firesprite} />
                  Summon Fire Sprite
                </td>
                <td>Ground Target</td>
                <td>
                  Summon Fire Sprite. Fire Sprite inflicts burning and is
                  impervious to attacks Fire Sprite LVL starts at 1;+1 LVL per
                  12.5% PWR
                  <p>Maxes out at LVL 10 at 213% PWR</p>
                </td>
                <td>
                  Enemies cannot target the fire sprite but any attacks done by
                  the fire sprite will be treated as done from the player.
                </td>
                <td>
                  <b>-6 MP</b>
                </td>
                <td>
                  <b>Sorcery</b>
                  <br />
                  <b>I</b> <i>(None)</i>
                </td>
              </tr>
              <tr>
                <td>
                  <img src={ignite} />
                  Ignite
                </td>
                <td>Area</td>
                <td>Inflicts burning to nearby creatures and objects</td>
                <td>
                  Cannot ignite Burn immune enemies like Slimes, Mimics,
                  Skeletons and Automatons
                </td>
                <td>
                  <b>-5 MP</b>
                </td>
                <td>
                  <b>Sorcery</b>
                  <br />
                  <b>I</b> <i>(None)</i>
                </td>
              </tr>
              <tr>
                <td>
                  <img src={shatterobjects} />
                  Shatter Objects
                </td>
                <td>Area</td>
                <td>+20 Magic damage to nearby objects</td>
                <td>-</td>
                <td>
                  <b>-5 MP</b>
                </td>
                <td>
                  <b>Sorcery</b>
                  <br />
                  <b>I</b> <i>(None)</i>
                </td>
              </tr>
              <tr>
                <td>
                  <img src={salvage} />
                  <p>
                    <i>Salvage</i>
                  </p>
                </td>
                <td>Area</td>
                <td>
                  {" "}
                  Transmutes nearby items into Metal Scrap or Magic Scrap
                </td>
                <td>
                  Works similar to the tinkering kit
                  <p>Automaton players innately begin with this spell</p>
                </td>
                <td>
                  <b>-8 MP</b>
                </td>
                <td>
                  <b>Sorcery</b>
                  <br />
                  <b>I</b> <i>(None)</i>
                </td>
              </tr>
              <tr>
                <td>
                  <img src={sprayacid} />
                  <p>
                    <i>Spray Acid</i>
                  </p>
                </td>
                <td>3x Projectile</td>
                <td>
                  {" "}
                  +12 Magic damage, inflicts poison
                  <p>Short range spell</p>
                  <p>+25% chance to degrade armor on hit</p>
                </td>
                <td>
                  Insectoid players innately begin with this spell
                  <p>Used innately by Insectoid enemies</p>
                </td>
                <td>
                  <b>-9 MP</b>
                </td>
                <td>
                  <b>Sorcery</b>
                  <br />
                  <b>II</b> <i>(Basic)</i>
                </td>
              </tr>
              <tr>
                <td>
                  <img src={flamecloak} />
                  <i>Flame Cloak</i>
                </td>
                <td>Sustained</td>
                <td>
                  Grants Flame Cloak
                  <p>
                    Flame Cloak gives immunity to burn damage, aligns near
                    flames and burns enemy attackers
                  </p>
                </td>
                <td>-</td>
                <td>
                  <b>-5 MP</b> to cast, <b>-1 MP</b> every 15 seconds to sustain
                </td>
                <td>
                  <b>Sorcery</b>
                  <br />
                  <b>II</b> <i>(Basic)</i>
                </td>
              </tr>
              <tr>
                <td>
                  <img src={attractitems} />
                  <i>Attract Items</i>
                </td>
                <td>Sustained</td>
                <td>Attracts nearby items</td>
                <td>-</td>
                <td>
                  <b>-12 MP</b> to cast, <b>-1 MP</b> every 8 seconds to sustain
                </td>
                <td>
                  <b>Sorcery</b>
                  <br />
                  <b>II</b> <i>(Basic)</i>
                </td>
              </tr>
              <tr>
                <td>
                  <img src={spin} />
                  <i>Spin</i>
                </td>
                <td>Projectile</td>
                <td>Spins the target to disorient briefly</td>
                <td>-</td>
                <td>
                  <b>-10 MP</b>
                </td>
                <td>
                  <b>Sorcery</b>
                  <br />
                  <b>II</b> <i>(Basic)</i>
                </td>
              </tr>
              <tr>
                <td>
                  <img src={windgate} />
                  <i>Windgate</i>
                </td>
                <td>Wall Target</td>
                <td>
                  Conjures a Windgate +5 damage to passing Ranged/Magic
                  projectilesWind distance: +2 tiles
                  <p>Creates gusts that push creatures and projectiles</p>
                </td>
                <td>An arcanist spell by default</td>
                <td>
                  <b>-7 MP</b>
                </td>
                <td>
                  <b>Sorcery</b>
                  <br />
                  <b>II</b> <i>(Basic)</i>
                </td>
              </tr>
              <tr>
                <td>
                  <img src={disruptearth} />
                  <i>Disrupt Earth</i>
                </td>
                <td>Ground Target</td>
                <td>
                  +5 Magic damage Inflicts knockbackLingering terrain lowers AC
                  and speed of targets
                </td>
                <td>-</td>
                <td>
                  <b>-8 MP</b>
                </td>
                <td>
                  <b>Sorcery</b>
                  <br />
                  <b>II</b> <i>(Basic)</i>
                </td>
              </tr>
              <tr>
                <td>
                  <img src={lightning} />
                  <p>
                    <i>Lightning</i>
                  </p>
                </td>
                <td>Projectile</td>
                <td>
                  {" "}
                  +15 Magic Damage
                  <p>Inflicts +1 Static</p>
                  +5 Magic damage for each Static up to +3 instances
                  <p>Damages doors and containers</p>
                </td>
                <td>
                  Used innately by Baron Herx
                  <p>A spell granted by imp form</p>
                  <p>Damages doors and containers</p>
                </td>
                <td>
                  <b>-8 MP</b>
                </td>
                <td>
                  <b>Sorcery</b>
                  <br />
                  <b>II</b> <i>(Basic)</i>
                </td>
              </tr>
              <tr>
                <td>
                  <img src={sprayweb} />
                  <p>
                    <i>Spray Web</i>
                  </p>
                </td>
                <td>3x Projectile</td>
                <td>
                  {" "}
                  Inflicts +1 webbed instance Webbed targets are slowed and
                  knocked back by melee strikes
                  <p>
                    Each instance increases effectiveness of slow, up to 3
                    instances
                  </p>
                  <p>Short range, wide radius spell</p>
                </td>
                <td>
                  A spell granted by arthropod form
                  <p>Used innately by arthropod enemies</p>
                </td>
                <td>
                  <b>-8 MP</b>
                </td>
                <td>
                  <b>Sorcery</b>
                  <br />
                  <b>II</b> <i>(Basic)</i>
                </td>
              </tr>
              <tr>
                <td>
                  <img src={fireball} />
                  <p>
                    <i>Fireball</i>
                  </p>
                </td>
                <td>Projectile</td>
                <td>
                  {" "}
                  +25 Magic damage, inflicts burning
                  <p>Damages doors and containers</p>
                </td>
                <td>
                  A wizard spell by default
                  <p>Used innately by Orpheus, imps, demons and Baphomet</p>
                  <p>Damages doors and containers</p>
                </td>
                <td>
                  <b>-7 MP</b>
                </td>
                <td>
                  <b>Sorcery</b>
                  <br />
                  <b>III</b> <i>(Skilled)</i>
                </td>
              </tr>
              <tr>
                <td>
                  <img src={firewall} />
                  <i>Fire wall</i>
                </td>
                <td>Ground Target</td>
                <td>
                  +9 Magic Damage, inflicts knockback and burningDamage
                  Instances: 3<p>Knockback Instances: 5</p>
                </td>
                <td>-</td>
                <td>
                  <b>-5 MP</b>
                </td>
                <td>
                  <b>Sorcery</b>
                  <br />
                  <b>III</b> <i>(Skilled)</i>
                </td>
              </tr>
              <tr>
                <td>
                  <img src={magiciansbubble} />
                  <i>Magicians' Bubble</i>
                </td>
                <td>Self-Effect</td>
                <td>
                  Applies +1 Invulnerability charge to melee/projectiles up to
                  +1 maximum
                  <p>
                    Maximum charges are increased for every 20 Sorcery + INT,
                    maxes out at +5 maximum
                  </p>
                  <p>Consumes charges on attack negation</p>
                </td>
                <td>A hermit spell by default</td>
                <td>
                  <b>-15 MP</b>
                </td>
                <td>
                  <b>Sorcery</b>
                  <br />
                  <b>III</b> <i>(Skilled)</i>
                </td>
              </tr>
              <tr>
                <td>
                  <img src={abundance} />
                  <i>Abundance</i>
                </td>
                <td>Sustained</td>
                <td>
                  +40% chance that Food does not deplete when eaten
                  <p>
                    Chance increases based on Sorcery PWR, maxes out at +80% at
                    Sorcery PWR 200%
                  </p>
                </td>
                <td>
                  Also affects consumable items for Automaton as well as Blood
                  vials for Vampire/Accursed
                </td>
                <td>
                  <b>-8 MP</b> to cast, <b>-1 MP</b> every 10 seconds to
                  sustain.
                  <p>
                    Expends <b>8</b> <b>MP</b> on effect success
                  </p>
                </td>
                <td>
                  <b>Sorcery</b>
                  <br />
                  <b>III</b> <i>(Skilled)</i>
                </td>
              </tr>
              <tr>
                <td>
                  <img src={kineticdefence} />
                  <i>Kinetic defense</i>
                </td>
                <td>Self-Effect</td>
                <td>Grants +5 AC to held Off-hand items</td>
                <td>-</td>
                <td>
                  <b>-15 MP</b>
                </td>
                <td>
                  <b>Sorcery</b>
                  <br />
                  <b>III</b> <i>(Skilled)</i>
                </td>
              </tr>
              <tr>
                <td>
                  <img src={telekinesis} />
                  <i>Telekinesis</i>
                </td>
                <td>Touch Target</td>
                <td>
                  Interacts with objects from a distance
                  <p>Pulls boulders</p>
                </td>
                <td>-</td>
                <td>
                  <b>-4 MP</b>
                </td>
                <td>
                  <b>Sorcery</b>
                  <br />
                  <b>III</b> <i>(Skilled)</i>
                </td>
              </tr>
              <tr>
                <td>
                  <img src={disarm} />
                  <i>Disarm</i>
                </td>
                <td>Touch Target</td>
                <td>
                  Disarms the target, making it drop its main hand held items
                </td>
                <td>-</td>
                <td>
                  <b>-10 MP</b>
                </td>
                <td>
                  <b>Sorcery</b>
                  <br />
                  <b>III</b> <i>(Skilled)</i>
                </td>
              </tr>
              <tr>
                <td>
                  <img src={deface} />
                  <i>Deface</i>
                </td>
                <td>Touch Target</td>
                <td>
                  Destroys targeted Sinks, Gravestones, Workbenches or Cauldrons
                </td>
                <td>Exclusive to gremlin players</td>
                <td>
                  <b>-10 MP</b>
                </td>
                <td>
                  <b>Sorcery</b>
                  <br />
                  <b>III</b> <i>(Skilled)</i>
                </td>
              </tr>
              <tr>
                <td>
                  <img src={boobytrap} />
                  <i>Booby Trap</i>
                </td>
                <td>Touch Target</td>
                <td>
                  +25 Magic Damage, inflicts Burning +100% Damage on Greasy
                  Affected targets
                  <p>
                    Targets a breakable to detonate and deal damage in an area.
                  </p>
                </td>
                <td>
                  A sapper spell by default
                  <p>Usable on mimics</p>
                </td>
                <td>
                  <b>-13 MP</b>
                </td>
                <td>
                  <b>Sorcery</b>
                  <br />
                  <b>III</b> <i>(Skilled)</i>
                </td>
              </tr>
              <tr>
                <td>
                  <img src={splinterarmor} />
                  <i>Splinter Armor</i>
                </td>
                <td>Touch Target</td>
                <td>
                  Degrades target's armor Deals +5 magic damage on degradeDeals
                  800% Damage to Construct creatures or if armor breaks
                </td>
                <td>-</td>
                <td>
                  <b>-15 MP</b>
                </td>
                <td>
                  <b>Sorcery</b>
                  <br />
                  <b>III</b> <i>(Skilled)</i>
                </td>
              </tr>
              <tr>
                <td>
                  <img src={dig} />
                  <p>
                    <i>Dig</i>
                  </p>
                </td>
                <td>Projectile</td>
                <td> Breaks walls and boulders</td>
                <td>-</td>
                <td>
                  <b>-21 MP</b>
                </td>
                <td>
                  <b>Sorcery</b>
                  <br />
                  <b>III</b> <i>(Skilled)</i>
                </td>
              </tr>
              <tr>
                <td>
                  <img src={invisible} />
                  <p>
                    <i>Invisible</i>
                  </p>
                </td>
                <td>Sustained</td>
                <td> Grants invisibility while sustained</td>
                <td>An accursed spell by default</td>
                <td>
                  <b>-1 MP</b> to cast, <b>-1 MP</b> every second to sustain
                </td>
                <td>
                  <b>Sorcery</b>
                  <br />
                  <b>III</b> <i>(Skilled)</i>
                </td>
              </tr>
              <tr>
                <td>
                  <img src={teleportother} />
                  <p>
                    <i>Teleport Other</i>
                  </p>
                </td>
                <td>Projectile</td>
                <td>
                  {" "}
                  Teleports a target toward the caster Inflicts disoriented
                  based on distance traveled
                  <p>Disoriented targets are unable move or attack until hit</p>
                </td>
                <td>A punisher spell by default</td>
                <td>
                  <b>-20 MP</b>
                </td>
                <td>
                  <b>Sorcery</b>
                  <br />
                  <b>III</b> <i>(Skilled)</i>
                </td>
              </tr>
              <tr>
                <td>
                  <img src={preserve} />
                  <i>Preserve</i>
                </td>
                <td>Sustained</td>
                <td>
                  {" "}
                  Prevents degradation of equipment
                  <p>Expends MP on preservation</p>
                </td>
                <td>-</td>
                <td>
                  <b>-16 MP</b> to cast, <b>-1 MP</b> every 6 seconds to sustain
                </td>
                <td>
                  <b>Sorcery</b>
                  <br />
                  <b>IV</b> <i>(Expert)</i>
                </td>
              </tr>
              <tr>
                <td>
                  <img src={nullarea} />
                  <i>Null Area</i>
                </td>
                <td>Ground Target</td>
                <td>
                  {" "}
                  Creates a Null Magic field
                  <p>Destroys magical projectiles within its area</p>
                </td>
                <td>-</td>
                <td>
                  <b>-25 MP</b>
                </td>
                <td>
                  <b>Sorcery</b>
                  <br />
                  <b>IV</b> <i>(Expert)</i>
                </td>
              </tr>
              <tr>
                <td>
                  <img src={lift} />
                  <i>Lift</i>
                </td>
                <td>Ground Target</td>
                <td>
                  {" "}
                  +10 Magic Damage
                  <p>Inflicts Rooted</p>
                  <p>Higher STR and CON of target increases landing damage</p>
                </td>
                <td>-</td>
                <td>
                  <b>-12 MP</b>
                </td>
                <td>
                  <b>Sorcery</b>
                  <br />
                  <b>IV</b> <i>(Expert)</i>
                </td>
              </tr>
              <tr>
                <td>
                  <img src={kineticfield} />
                  <i>Kinetic Field</i>
                </td>
                <td>Ground Target</td>
                <td>
                  {" "}
                  Places a Kinetic field
                  <p>
                    Grants dash when stepped on,destroying breakables on impact
                  </p>
                </td>
                <td>-</td>
                <td>
                  <b>-12 MP</b>
                </td>
                <td>
                  <b>Sorcery</b>
                  <br />
                  <b>IV</b> <i>(Expert)</i>
                </td>
              </tr>
              <tr>
                <td>
                  <img src={sabotage} />
                  <i>Sabotage</i>
                </td>
                <td>Touch Target</td>
                <td>
                  {" "}
                  +35 Magic damage to Construct creatures
                  <p>Dismantles traps</p>
                </td>
                <td>-</td>
                <td>
                  <b>-8 MP</b>
                </td>
                <td>
                  <b>Sorcery</b>
                  <br />
                  <b>IV</b> <i>(Expert)</i>
                </td>
              </tr>
              <tr>
                <td>
                  <img src={magicmissile} />
                  <p>
                    <i>Magic Missile</i>
                  </p>
                </td>
                <td>Projectile</td>
                <td>
                  {" "}
                  +30 Magic damage
                  <p>Damages doors and containers</p>
                </td>
                <td>
                  Used innately by Erudyce and shopkeepers
                  <p>Damages doors and containers</p>
                </td>
                <td>
                  <b>-10 MP</b>
                </td>
                <td>
                  <b>Sorcery</b>
                  <br />
                  <b>IV</b> <i>(Expert)</i>
                </td>
              </tr>
              <tr>
                <td>
                  <img src={cold} />
                  <p>
                    <i>Cold</i>
                  </p>
                </td>
                <td>Projectile</td>
                <td> +20 Magic damage, inflicts slow</td>
                <td>
                  A wizard spell by default
                  <p>Used innately by Erudyce and Xyggi</p>
                </td>
                <td>
                  <b>-6 MP</b>
                </td>
                <td>
                  <b>Sorcery</b>
                  <br />
                  <b>IV</b> <i>(Expert)</i>
                </td>
              </tr>
              <tr>
                <td>
                  <img src={teleportation} />
                  <p>
                    <i>Teleportation</i>
                  </p>
                </td>
                <td>Self-Effect</td>
                <td> Teleports the caster to a random location on the map</td>
                <td>
                  Succubus and Incubus players innately begin with this spell
                  <p>Innately used by succubus, incubus and shadow enemies</p>
                </td>
                <td>
                  <b>-20 MP</b>
                </td>
                <td>
                  <b>Sorcery</b>
                  <br />
                  <b>IV</b> <i>(Expert)</i>
                </td>
              </tr>
              <tr>
                <td>
                  <img src={icewave} />
                  <i>Ice Wave</i>
                </td>
                <td>Ground Target</td>
                <td>
                  {" "}
                  +15 Magic damage
                  <p>Spreads Ice Spines</p>
                  <p>Inflicts slow</p>
                  <p>Spines remain as a hazard for a time</p>
                </td>
                <td>-</td>
                <td>
                  <b>-25 MP</b>
                </td>
                <td>
                  <b>Sorcery</b>
                  <br />
                  <b>V</b> <i>(Master)</i>
                </td>
              </tr>
              <tr>
                <td>
                  <img src={lightningbolt} />
                  <i>Lightning bolt</i>
                </td>
                <td>Ground Target</td>
                <td>
                  {" "}
                  +40 Magic Damage
                  <p>Inflicts +1 Static</p>
                  +5 Magic damage for each Static up to +3 instances
                  <p>
                    Seeks nearby targets faster when targets are affected by
                    Static
                  </p>
                </td>
                <td>-</td>
                <td>
                  <b>-24 MP</b>
                </td>
                <td>
                  <b>Sorcery</b>
                  <br />
                  <b>V</b> <i>(Master)</i>
                </td>
              </tr>
              <tr>
                <td>
                  <img src={meteor} />
                  <i>Meteor</i>
                </td>
                <td>Ground Target</td>
                <td>
                  {" "}
                  +40 Magic Damage
                  <p>Falls from above</p>
                  <p>Inflicts burning</p>
                </td>
                <td>-</td>
                <td>
                  <b>-25 MP</b>
                </td>
                <td>
                  <b>Sorcery</b>
                  <br />
                  <b>V</b> <i>(Master)</i>
                </td>
              </tr>
              <tr>
                <td>
                  <img src={mistform} />
                  <i>Mist form</i>
                </td>
                <td>Sustained</td>
                <td>
                  {" "}
                  Grants +50% evasion chance
                  <p>Expends MP on effect success</p>
                </td>
                <td>-</td>
                <td>
                  <b>-20 MP</b> to cast, <b>-1 MP</b> every 6 seconds to sustain
                </td>
                <td>
                  <b>Sorcery</b>
                  <br />
                  <b>V</b> <i>(Master)</i>
                </td>
              </tr>
              <tr>
                <td>
                  <img src={absorbmagic} />
                  <i>Absorb Magic</i>
                </td>
                <td>Self-Effect</td>
                <td>
                  {" "}
                  Absorbs magic projectiles Improves magic damage of caster's
                  next spell based on Absorb charge total
                  <p>Effect is depleted when applying magic damage bonus</p>
                </td>
                <td>-</td>
                <td>
                  <b>-30 MP</b>
                </td>
                <td>
                  <b>Sorcery</b>
                  <br />
                  <b>V</b> <i>(Master)</i>
                </td>
              </tr>
              <tr>
                <td>
                  <img src={portal} />
                  <i>Portal</i>
                </td>
                <td>Wall Target</td>
                <td>
                  {" "}
                  Summons a portal
                  <p>Teleports users to the opposite side of the wall</p>
                </td>
                <td>-</td>
                <td>
                  <b>-20 MP</b>
                </td>
                <td>
                  <b>Sorcery</b>
                  <br />
                  <b>V</b> <i>(Master)</i>
                </td>
              </tr>
              <tr>
                <td>
                  <img src={elementalfocus} />
                  <p>
                    <i>Elemental Focus</i>
                  </p>
                </td>
                <td>Sustained</td>
                <td>
                  {" "}
                  Augments fireball, cold, lightning and magic missile spells
                  <p>
                    Reduces their range, adds a small AoE effect and increases
                    their damage
                  </p>
                </td>
                <td>A spell granted by imp form</td>
                <td>
                  <b>-25 MP</b> to cast, <b>-1 MP</b> every 0.24 seconds to
                  sustain
                </td>
                <td>
                  <b>Sorcery</b>
                  <br />
                  <b>V</b> <i>(Master)</i>
                </td>
              </tr>
              <tr>
                <td>
                  <img src={levitation} />
                  <p>
                    <i>Levitation</i>
                  </p>
                </td>
                <td>Sustained</td>
                <td> Grants levitation while sustained</td>
                <td>Vampire players innately begin with this spell</td>
                <td>
                  <b>-1 MP</b> to cast, <b>-1 MP</b> every 0.6 seconds to
                  sustain
                </td>
                <td>
                  <b>Sorcery</b>
                  <br />
                  <b>V</b> <i>(Master)</i>
                </td>
              </tr>
              <tr>
                <td>
                  <img src={stealweapon} />
                  <p>
                    <i>Steal Weapon</i>
                  </p>
                </td>
                <td>Projectile</td>
                <td>
                  {" "}
                  Steals held weapons
                  <p>Stolen weapons are placed in the caster's inventory</p>
                </td>
                <td>
                  Used innately by incubus enemies
                  <p>Never found as dungeon floor loot</p>
                  <p>
                    Only obtainable via causing an incubus that is casting the
                    steal weapon spell, to be reflected back at the incubus,
                    placing the spellbook of steal weapon in the player's
                    inventory
                  </p>
                </td>
                <td>
                  <b>-51 MP</b>
                </td>
                <td>
                  <b>Sorcery</b>
                  <br />
                  <b>VI</b> <i>(Legend)</i>
                </td>
              </tr>
            </tbody>
          </table>
        </>
      ),
    },
  ],
};
