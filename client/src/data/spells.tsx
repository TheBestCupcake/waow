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

import light from "../assets/light.png";
import minorheal from "../assets/minorheal.png";
import minorhealother from "../assets/minorhealother.png";
import bloodward from "../assets/bloodward.png";
import germinate from "../assets/dryadgerminate.png";
import dash from "../assets/dash.png";
import cureailment from "../assets/cureailment.png";
import guardbody from "../assets/guardbody.png";
import guardspirit from "../assets/guardspirit.png";
import detectenemy from "../assets/detectenemy.png";
import scryallies from "../assets/scryallies.png";
import donation from "../assets/donation.png";
import exorcise from "../assets/exorcise.png";
import holysigil from "../assets/holysigil.png";
import cleansefood from "../assets/cleansefood.png";
import breathefire from "../assets/breathefire.png";
import thorns from "../assets/thorns.png";
import healing from "../assets/healing.png";
import blessedmeals from "../assets/blessedmeals.png";
import nimbleness from "../assets/nimbleness.png";
import counsel from "../assets/counsel.png";
import divinezeal from "../assets/divinezeal.png";
import trollsblood from "../assets/trollsblood.png";
import speed from "../assets/speed.png";
import detectfood from "../assets/detectfood.png";
import identify from "../assets/identify.png";
import divineguard from "../assets/divineguard.png";
import pinpoint from "../assets/pinpoint.png";
import scrytraps from "../assets/scrytraps.png";
import greatermight from "../assets/greatermight.png";
import sturdiness from "../assets/sturdiness.png";
import flutter from "../assets/flutter.png";
import removecurse from "../assets/removecurse.png";
import magicmapping from "../assets/magicmapping.png";
import extrahealing from "../assets/extrahealing.png";
import scrytreasures from "../assets/scrytreasures.png";
import divinefortress from "../assets/divinefortress.png";
import holybeam from "../assets/holybeam.png";
import reflectmagic from "../assets/reflectmagic.png";
import powerstrike from "../assets/powerstrike.png";

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

    {
      sectionName: "Thaumaturgy Spells",
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
                  <img src={light} />
                  <p>
                    <i>Light</i>
                  </p>
                </td>
                <td>Sustained</td>
                <td>Summons a light to follow in front of the caster</td>
                <td>Monk and wizard have this spell book by default.</td>
                <td>
                  <b>-1 MP</b> to cast, <b>-1 MP</b> every 15.0 seconds to
                  sustain
                </td>
                <td>
                  <b>Thaumaturgy</b>
                  <br />
                  <b>I</b> <i>(None)</i>
                </td>
              </tr>
              <tr>
                <td>
                  <img src={minorheal} />
                  <i>Minor Heal</i>
                </td>
                <td>Self-Effect</td>
                <td>
                  +1 HP restore over time
                  <p>Effect ends if caster receives damage</p>
                </td>
                <td>-</td>
                <td>
                  <b>-8 MP</b>
                </td>
                <td>
                  <b>Thaumaturgy</b>
                  <br />
                  <b>I</b> <i>(None)</i>
                </td>
              </tr>
              <tr>
                <td>
                  <img src={minorhealother} />
                  <i>Minor Heal Other</i>
                </td>
                <td>Touch Target</td>
                <td>
                  +1 HP restore over time
                  <p>Effect ends if caster receives damage</p>
                </td>
                <td>-</td>
                <td>
                  <b>-8 MP</b>
                </td>
                <td>
                  <b>Thaumaturgy</b>
                  <br />
                  <b>I</b> <i>(None)</i>
                </td>
              </tr>
              <tr>
                <td>
                  <img src={bloodward} />
                  <i>Blood Ward</i>
                </td>
                <td>Sustained</td>
                <td>
                  Grants immunity to bleed and poison while sustained +35%
                  resistance against poisonous creatures
                </td>
                <td>-</td>
                <td>
                  <b>-5 MP</b> to cast, <b>-1 MP</b> every 5 seconds to sustain
                </td>
                <td>
                  <b>Thaumaturgy</b>
                  <br />
                  <b>I</b> <i>(None)</i>
                </td>
              </tr>
              <tr>
                <td>
                  <img src={germinate} />
                  <i>Dryad's Germinate</i>
                </td>
                <td>Ground Target</td>
                <td>
                  Plants a Shrub:
                  <p>+5 HP restore per pulse</p>
                  <p>Retaliates with thorns</p>
                  Drops forageables on expiry
                  <p>Consumes foliage to summon</p>
                </td>
                <td>Exclusive to dryad players</td>
                <td>
                  <b>-16 MP</b>
                  <p>1 tier of growth</p>
                </td>
                <td>
                  <b>Thaumaturgy</b>
                  <br />
                  <b>I</b> <i>(None)</i>
                </td>
              </tr>
              <tr>
                <td>
                  <img src={dash} />
                  <p>
                    <i>Dash</i>
                  </p>
                </td>
                <td>Self-Effect</td>
                <td>
                  Propels caster in current moving direction Breaks doors on
                  impact
                  <p>Casting while stationary performs a backwards leap</p>
                </td>
                <td>Insectoid players innately begin with this spell</td>
                <td>
                  <b>-5 MP</b>
                </td>
                <td>
                  <b>Thaumaturgy</b>
                  <br />
                  <b>I</b> <i>(None)</i>
                </td>
              </tr>
              <tr>
                <td>
                  <img src={cureailment} />
                  <p>
                    <i>Cure Ailment</i>
                  </p>
                </td>
                <td>Area</td>
                <td>
                  Cures negative status effects of caster and nearby allies
                </td>
                <td>A healer spell by default</td>
                <td>
                  <b>-10 MP</b>
                </td>
                <td>
                  <b>Thaumaturgy</b>
                  <br />
                  <b>II</b> <i>(Basic)</i>
                </td>
              </tr>
              <tr>
                <td>
                  <img src={guardbody} />
                  <i>Guard Body</i>
                </td>
                <td>Sustained</td>
                <td>
                  Increases AC for each Charge point +1 Charge restored each
                  sustain interval +5 maximum Charge
                  <p>Consumes Charges on being hit by physical attacks</p>
                </td>
                <td>-</td>
                <td>
                  <b>-5 MP</b> to cast, <b>-1 MP</b> every 10 seconds to sustain
                </td>
                <td>
                  <b>Thaumaturgy</b>
                  <br />
                  <b>II</b> <i>(Basic)</i>
                </td>
              </tr>
              <tr>
                <td>
                  <img src={guardspirit} />
                  <i>Guard Spirit</i>
                </td>
                <td>Sustained</td>
                <td>
                  Increases RES for each Charge point +1 Charge restored each
                  sustain interval +3 maximum Charge
                  <p>Consumes Charges on being hit by magical attacks</p>
                </td>
                <td>-</td>
                <td>
                  <b>-10 MP</b> to cast, <b>-1 MP</b> every 5 seconds to sustain
                </td>
                <td>
                  <b>Thaumaturgy</b>
                  <br />
                  <b>II</b> <i>(Basic)</i>
                </td>
              </tr>
              <tr>
                <td>
                  <img src={detectenemy} />
                  <i>Detect Enemy</i>
                </td>
                <td>Divine Target</td>
                <td>Divines the location of nearby enemy</td>
                <td>-</td>
                <td>
                  <b>-6 MP</b>
                </td>
                <td>
                  <b>Thaumaturgy</b>
                  <br />
                  <b>II</b> <i>(Basic)</i>
                </td>
              </tr>
              <tr>
                <td>
                  <img src={scryallies} />
                  <i>Scry Allies</i>
                </td>
                <td>Divine Target</td>
                <td>Reveals friendlies on the current dungeon floor</td>
                <td>-</td>
                <td>
                  <b>-8 MP</b>
                </td>
                <td>
                  <b>Thaumaturgy</b>
                  <br />
                  <b>II</b> <i>(Basic)</i>
                </td>
              </tr>
              <tr>
                <td>
                  <img src={donation} />
                  <i>Donation</i>
                </td>
                <td>Divine Target</td>
                <td>
                  Reveals a breakable on the current dungeon floor yielding
                  divine rewards
                  <p>Rewards increase with caster's spell power</p>
                </td>
                <td>-</td>
                <td>
                  <b>-20 MP</b>
                </td>
                <td>
                  <b>Thaumaturgy</b>
                  <br />
                  <b>II</b> <i>(Basic)</i>
                </td>
              </tr>
              <tr>
                <td>
                  <img src={exorcise} />
                  <i>Exorcise</i>
                </td>
                <td>Ground Target</td>
                <td>
                  Inflicts Turning to unholy enemies Effect power:
                  <p>At any PWR below 150%: Inflicts Fear</p>
                  <p>At 150% PWR:+ 30 Smite damage as well</p>
                  <p>At 200% PWR::Holy Fire as well</p>
                  <p>Effects of Turning vary based on power and enemy type</p>
                </td>
                <td>-</td>
                <td>
                  <b>-12 MP</b>
                </td>
                <td>
                  <b>Thaumaturgy</b>
                  <br />
                  <b>II</b> <i>(Basic)</i>
                </td>
              </tr>
              <tr>
                <td>
                  <img src={holysigil} />
                  <i>Holy Sigil</i>
                </td>
                <td>Ground Target</td>
                <td>
                  Applies to allies in an area:
                  <p>
                    +20% healing effects bonus; +10% more per tier; maxes out at
                    +50%
                  </p>
                  <p>
                    +20% damage dealt to enemies; +10% more per tier; maxes out
                    at +50%
                  </p>
                  tarts at Tier I, gets a new tier for each 50% PWR over 100%
                  PWR, maxes out at tier IV at 250% PWR
                </td>
                <td>-</td>
                <td>
                  <b>-14 MP</b>
                </td>
                <td>
                  <b>Thaumaturgy</b>
                  <br />
                  <b>II</b> <i>(Basic)</i>
                </td>
              </tr>
              <tr>
                <td>
                  <img src={cleansefood} />
                  <i>Cleanse Food</i>
                </td>
                <td>Self-Effect</td>
                <td>
                  Restores food to fresh quality and removes curses from it
                  <p>Requires multiple casts to fully cleanse</p>
                </td>
                <td>-</td>
                <td>
                  <b>-12 MP</b>
                </td>
                <td>
                  <b>Thaumaturgy</b>
                  <br />
                  <b>II</b> <i>(Basic)</i>
                </td>
              </tr>
              <tr>
                <td>
                  <img src={breathefire} />
                  <i>Breathe Fire</i>
                </td>
                <td>Projectile</td>
                <td>
                  Releases +5 projectiles:
                  <p>+3 magic damage</p>
                  <p>Inflicts burning</p>
                  <p>Gains mana by hitting enemy</p>
                  Decreases target resistances up to +2 instances from CHR at
                  base,adds +1 instance per 5 CHR;+3 instances if Salamander is
                  in radiant form; maxes out at +10 instances
                  <p>
                    Each stack makes target more vulnerable to damage;+ 10% per
                    stack vulnerability to damage if target has resistance to
                    given damage type;
                  </p>
                  <p>+2.5% per stack vulnerability to damage if not.</p>
                  <p>
                    Example: a monster is 10% resistant to unnarmed, 1st stack
                    will make it have neutral vulnerability and 2nd stack will
                    add only 2,5% more vulnerability due to its current
                    vulnerability being 0%
                  </p>
                  <p>Phases trough creatures</p>
                  <p>Short range spell</p>
                </td>
                <td>
                  Exclusive to salamander players
                  <p>
                    Cannot be obtained any other way Deals no friendly fire
                    damage
                  </p>
                </td>
                <td>
                  Starts at <b>-7 MP,</b>increases cost by <b>1</b> for each 50
                  max mana.
                  <p>Doubled cost when below 40% MP</p>
                </td>
                <td>
                  <b>Thaumaturgy</b>
                  <br />
                  <b>II</b> <i>(Basic)</i>
                </td>
              </tr>
              <tr>
                <td>
                  <img src={thorns} />
                  <i>Thorns</i>
                </td>
                <td>Sustained</td>
                <td>
                  Grants Retaliation
                  <p>+4 magic damage to melee attackers</p>
                  HP lost by attacks increases Retaliation up to +10 damage
                  <p>Expends MP when retaliating</p>
                </td>
                <td>Dryad players innately begin with this spell</td>
                <td>
                  <b>-5 MP</b> to cast, <b>-1 MP</b> every 6 seconds to sustain
                </td>
                <td>
                  <b>Thaumaturgy</b>
                  <br />
                  <b>II</b> <i>(Basic)</i>
                </td>
              </tr>
              <tr>
                <td>
                  <img src={healing} />
                  <p>
                    <i>Healing</i>
                  </p>
                </td>
                <td>Area</td>
                <td>
                  +10 HP restore
                  <p>Heals caster and nearby allies</p>
                </td>
                <td>A healer spell by default</td>
                <td>
                  <b>-10 MP</b>
                </td>
                <td>
                  <b>Thaumaturgy</b>
                  <br />
                  <b>III</b> <i>(Skilled)</i>
                </td>
              </tr>
              <tr>
                <td>
                  <img src={blessedmeals} />
                  <i>Blessed Meals</i>
                </td>
                <td>Area</td>
                <td>
                  Grants Blessed meals to caster and nearby allies Food eaten
                  grants Nourished restoring HP and MP for a duration
                  <p>Effect increases per piece of food consumed</p>
                </td>
                <td>A scion spell by default</td>
                <td>
                  <b>-10 MP</b>
                </td>
                <td>
                  <b>Thaumaturgy</b>
                  <br />
                  <b>III</b> <i>(Skilled)</i>
                </td>
              </tr>
              <tr>
                <td>
                  <img src={nimbleness} />
                  <i>Nimbleness</i>
                </td>
                <td>Self-Effect</td>
                <td>
                  Grants + DEX and 10 skill to Tinkering, Ranged, Swords and
                  Stealth; + DEX and 5 skill per new tier; Starts at Tier I,
                  gets a new tier for each 50% PWR over 100% PWR, maxes out at
                  tier IV at 250% PWR
                </td>
                <td>-</td>
                <td>
                  <b>-18 MP</b>
                </td>
                <td>
                  <b>Thaumaturgy</b>
                  <br />
                  <b>III</b> <i>(Skilled)</i>
                </td>
              </tr>
              <tr>
                <td>
                  <img src={counsel} />
                  <i>Counsel</i>
                </td>
                <td>Self-Effect</td>
                <td>
                  Grants + PWR and 10 skill to Sorcery and Mysticism;+ PWR and 5
                  skill per new tier; Starts at Tier I, gets a new tier for each
                  50% PWR over 100% PWR, maxes out at tier IV at 250% PWR
                </td>
                <td>-</td>
                <td>
                  <b>-18 MP</b>
                </td>
                <td>
                  <b>Thaumaturgy</b>
                  <br />
                  <b>III</b> <i>(Skilled)</i>
                </td>
              </tr>
              <tr>
                <td>
                  <img src={divinezeal} />
                  <i>Divine Zeal</i>
                </td>
                <td>Sustained</td>
                <td>+25% Melee damage to Smite weak enemies</td>
                <td>A paladin spell by default</td>
                <td>
                  <b>-8 MP</b> to cast, <b>-1 MP</b> every 5 seconds to sustain
                </td>
                <td>
                  <b>Thaumaturgy</b>
                  <br />
                  <b>III</b> <i>(Skilled)</i>
                </td>
              </tr>
              <tr>
                <td>
                  <img src={trollsblood} />
                  <p>
                    <i>Troll's Blood</i>
                  </p>
                </td>
                <td>Area</td>
                <td>
                  Grants boosted HP regeneration to caster and nearby allies
                </td>
                <td>A cleric spell by default</td>
                <td>
                  <b>-25 MP</b>
                </td>
                <td>
                  <b>Thaumaturgy</b>
                  <br />
                  <b>III</b> <i>(Skilled)</i>
                </td>
              </tr>
              <tr>
                <td>
                  <img src={speed} />
                  <p>
                    <i>Speed</i>
                  </p>
                </td>
                <td>Area</td>
                <td>Grants speed to caster and nearby allies</td>
                <td>A spell granted by rat form</td>
                <td>
                  <b>-11 MP</b>
                </td>
                <td>
                  <b>Thaumaturgy</b>
                  <br />
                  <b>III</b> <i>(Skilled)</i>
                </td>
              </tr>
              <tr>
                <td>
                  <img src={detectfood} />
                  <p>
                    <i>Detect Food</i>
                  </p>
                </td>
                <td>Self-Effect</td>
                <td>Reveals food sources on the current dungeon floor</td>
                <td>
                  A wanderer spell by default
                  <p>A spell granted by rat form</p>
                </td>
                <td>
                  <b>-14 MP</b>
                </td>
                <td>
                  <b>Thaumaturgy</b>
                  <br />
                  <b>III</b> <i>(Skilled)</i>
                </td>
              </tr>
              <tr>
                <td>
                  <img src={identify} />
                  <p>
                    <i>Identify</i>
                  </p>
                </td>
                <td>Self-Effect</td>
                <td>Identifies an item in the caster's inventory</td>
                <td>-</td>
                <td>
                  <b>-10 MP</b>
                </td>
                <td>
                  <b>Thaumaturgy</b>
                  <br />
                  <b>IV</b> <i>(Expert)</i>
                </td>
              </tr>
              <tr>
                <td>
                  <img src={divineguard} />
                  <i>Divine Guard</i>
                </td>
                <td>Sustained</td>
                <td>
                  Increases AC and RES for each Charge point +1 Charge restored
                  each sustain interval +5 maximum Charge
                  <p>Consumes Charges on being hit by any attack</p>
                </td>
                <td>-</td>
                <td>
                  <b>-20 MP</b> to cast, <b>-1 MP</b> every 10 seconds to
                  sustain
                </td>
                <td>
                  <b>Thaumaturgy</b>
                  <br />
                  <b>IV</b> <i>(Expert)</i>
                </td>
              </tr>
              <tr>
                <td>
                  <img src={pinpoint} />
                  <i>Pinpoint</i>
                </td>
                <td>Divine Target</td>
                <td>
                  Marks an enemy for Wrath on the current dungeon floor +20
                  Smite damage to target when next hit +50% Smite damage of
                  target's HP lost while triggering
                  <p>Smite damage increases based on damage dealt to trigger</p>
                </td>
                <td>-</td>
                <td>
                  <b>-10 MP</b>
                </td>
                <td>
                  <b>Thaumaturgy</b>
                  <br />
                  <b>IV</b> <i>(Expert)</i>
                </td>
              </tr>
              <tr>
                <td>
                  <img src={scrytraps} />
                  <i>Scry Traps</i>
                </td>
                <td>Divine Target</td>
                <td>Reveals nearby traps on the current dungeon floor</td>
                <td>-</td>
                <td>
                  <b>-12 MP</b>
                </td>
                <td>
                  <b>Thaumaturgy</b>
                  <br />
                  <b>IV</b> <i>(Expert)</i>
                </td>
              </tr>
              <tr>
                <td>
                  <img src={greatermight} />
                  <i>Greater Might</i>
                </td>
                <td>Self-Effect</td>
                <td>
                  Grants + STR, Push effect and 10 skill to Maces,Axes,Polearm;+
                  STR and 5 skill per new tier; Starts at Tier I, gets a new
                  tier for each 50% PWR over 100% PWR,maxes out at tier IV at
                  250% PWR
                </td>
                <td>-</td>
                <td>
                  <b>-30 MP</b>
                </td>
                <td>
                  <b>Thaumaturgy</b>
                  <br />
                  <b>IV</b> <i>(Expert)</i>
                </td>
              </tr>
              <tr>
                <td>
                  <img src={sturdiness} />
                  <i>Sturdiness</i>
                </td>
                <td>Self-Effect</td>
                <td>
                  Grants + CON, MAX HP, and 10 skill to Blocking;+ CON and 5
                  skill per new tier; Starts at Tier I, gets a new tier for each
                  50% PWR over 100% PWR,maxes out at tier IV at 250% PWR
                </td>
                <td>-</td>
                <td>
                  <b>-24 MP</b>
                </td>
                <td>
                  <b>Thaumaturgy</b>
                  <br />
                  <b>IV</b> <i>(Expert)</i>
                </td>
              </tr>
              <tr>
                <td>
                  <img src={flutter} />
                  <p>
                    <i>Flutter</i>
                  </p>
                </td>
                <td>Self-Effect</td>
                <td>Grants levitation for six seconds</td>
                <td>Insectoid players innately begin with this spell</td>
                <td>
                  <b>-10 MP</b>
                </td>
                <td>
                  <b>Thaumaturgy</b>
                  <br />
                  <b>IV</b> <i>(Expert)</i>
                </td>
              </tr>
              <tr>
                <td>
                  <img src={removecurse} />
                  <p>
                    <i>Remove Curse</i>
                  </p>
                </td>
                <td>Self-Effect</td>
                <td>
                  Removes a curse from a single item in the caster's inventory
                </td>
                <td>-</td>
                <td>
                  <b>-20 MP</b>
                </td>
                <td>
                  <b>Thaumaturgy</b>
                  <br />
                  <b>IV</b> <i>(Expert)</i>
                </td>
              </tr>
              <tr>
                <td>
                  <img src={magicmapping} />
                  <p>
                    <i>Magic Mapping</i>
                  </p>
                </td>
                <td>Self-Effect</td>
                <td>Reveals 8 tiles around the player. Scales with PWR</td>
                <td>-</td>
                <td>
                  <b>-40 MP</b>
                </td>
                <td>
                  <b>Thaumaturgy</b>
                  <br />
                  <b>IV</b> <i>(Expert)</i>
                </td>
              </tr>
              <tr>
                <td>
                  <img src={extrahealing} />
                  <p>
                    <i>Extra Healing</i>
                  </p>
                </td>
                <td>Area</td>
                <td>+40 HP restore to caster and nearby allies</td>
                <td>-</td>
                <td>
                  <b>-40 MP</b>
                </td>
                <td>
                  <b>Thaumaturgy</b>
                  <br />
                  <b>V</b> <i>(Master)</i>
                </td>
              </tr>
              <tr>
                <td>
                  <img src={scrytreasures} />
                  <i>Scry Treasures</i>
                </td>
                <td>Divine Target</td>
                <td>
                  Grants Treasure Sight
                  <p>
                    Reveals nearby gold,keys and treasures on the current
                    dungeon floor
                  </p>
                </td>
                <td>-</td>
                <td>
                  <b>-16 MP</b>
                </td>
                <td>
                  <b>Thaumaturgy</b>
                  <br />
                  <b>V</b> <i>(Master)</i>
                </td>
              </tr>
              <tr>
                <td>
                  <img src={divinefortress} />
                  <i>Divine Fortress</i>
                </td>
                <td>Ground Target</td>
                <td>
                  Applies to allies in an area:
                  <p>
                    +25% Damage Resistance;+15% more per tier;maxes out at +70%
                    Damage Resistance
                  </p>
                  Starts at Tier I, gets a new tier for each 50% PWR over 100%
                  PWR,maxes out at tier IV at 250% PWR
                </td>
                <td>-</td>
                <td>
                  <b>-25 MP</b>
                </td>
                <td>
                  <b>Thaumaturgy</b>
                  <br />
                  <b>V</b> <i>(Master)</i>
                </td>
              </tr>
              <tr>
                <td>
                  <img src={holybeam} />
                  <i>Holy Beam</i>
                </td>
                <td>Projectile</td>
                <td>
                  +25 Magic Damage
                  <p>+100% damage to Unholy enemies</p>
                  +20 health restored on allies
                  <p>Phases trough creatures</p>
                </td>
                <td>-</td>
                <td>
                  <b>-18 MP</b>
                </td>
                <td>
                  <b>Thaumaturgy</b>
                  <br />
                  <b>V</b> <i>(Master)</i>
                </td>
              </tr>
              <tr>
                <td>
                  <img src={reflectmagic} />
                  <p>
                    <i>Reflect Magic</i>
                  </p>
                </td>
                <td>Sustained</td>
                <td>
                  Grants magic reflection while sustained Reflecting spells
                  consumes additional mana
                </td>
                <td>-</td>
                <td>
                  <b>-10 MP</b> to cast, <b>-1 MP</b> every 6 seconds
                </td>
                <td>
                  <b>Thaumaturgy</b>
                  <br />
                  <b>V</b> <i>(Master)</i>
                </td>
              </tr>
              <tr>
                <td>
                  <img src={powerstrike} />
                  <p>
                    <i>Power Strike</i>
                  </p>
                </td>
                <td>Self-Effect</td>
                <td>
                  Charges a powerful melee strike that deals +400% attack Breaks
                  walls, boulders and doors on impact
                  <p>Slow casting time</p>
                </td>
                <td>
                  Used innately by crystal golems
                  <p>A spell granted by troll form</p>
                </td>
                <td>
                  <b>-23 MP</b>
                </td>
                <td>
                  <b>Thaumaturgy</b>
                  <br />
                  <b>V</b> <i>(Master)</i>
                </td>
              </tr>
            </tbody>
          </table>
        </>
      ),
    },
  ],
};
