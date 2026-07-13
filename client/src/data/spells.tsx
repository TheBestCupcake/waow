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

import confuse from "../assets/confuse.webp";
import maximise from "../assets/maximise.webp";
import projectspirit from "../assets/projectspirit.webp";
import spiritweapon from "../assets/spiritweapon.webp";
import ratform from "../assets/ratform.webp";
import slow from "../assets/slow.webp";
import poison from "../assets/poison.webp";
import revertform from "../assets/revertform.webp";
import sleep from "../assets/sleep.webp";
import minimise from "../assets/minimise.webp";
import defyflesh from "../assets/defyflesh.webp";
import envenomweapon from "../assets/envenomweapon.webp";
import spores from "../assets/spores.webp";
import seekally from "../assets/seekally.webp";
import cowardice from "../assets/cowardice.webp";
import reshapeweapon from "../assets/reshapeweapon.webp";
import alterinstrument from "../assets/alterinstrument.webp";
import alterarrow from "../assets/alterarrow.webp";
import leadbolt from "../assets/leadbolt.webp";
import arcanemark from "../assets/arcanemark.webp";
import locking from "../assets/locking.webp";
import opening from "../assets/opening.webp";
import greasespray from "../assets/greasespray.webp";
import weakness from "../assets/weakness.webp";
import incoherence from "../assets/incoherence.webp";
import deepshade from "../assets/deeshade.webp";
import overcharge from "../assets/overcharge.webp";
import forgekey from "../assets/forgekey.webp";
import forgejewel from "../assets/forgejewel.webp";
import bloodletting from "../assets/bloodletting.webp";
import arthropodform from "../assets/arthropodform.webp";
import conjureskeleton from "../assets/conjureskeleton.webp";
import summonearthsprite from "../assets/summonearthsprite.webp";
import fear from "../assets/fear.webp";
import numbingbolt from "../assets/numbingbolt.webp";
import compel from "../assets/compel.webp";
import psychicspear from "../assets/psychicspear.webp";
import curseflesh from "../assets/curseflesh.webp";
import metallugry from "../assets/metallurgy.webp";
import voidchest from "../assets/voidchest.webp";
import polymorph from "../assets/polymorph.webp";
import vampiricaura from "../assets/vampiricaura.webp";
import trollform from "../assets/trollform.webp";
import stoneblood from "../assets/stoneblood.webp";
import bloodwaves from "../assets/bloodwaves.webp";
import charmmonster from "../assets/charmmonsters.webp";
import innerdemon from "../assets/innerdemon.webp";
import impform from "../assets/impform.webp";
import dominate from "../assets/dominate.webp";

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
                  <p>
                    <i>Summon Fire Sprite</i>
                  </p>
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
                  <p>
                    <i>Ignite</i>
                  </p>
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
                  <p>
                    <i>Shatter Objects</i>
                  </p>
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
                  <p>
                    <i>Flame Cloak</i>
                  </p>
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
                  <p>
                    <i>Attract Items</i>
                  </p>
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
                  <p>
                    <i>Spin</i>
                  </p>
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
                  <p>
                    <i>Windgate</i>
                  </p>
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
                  <p>
                    <i>Disrupt Earth</i>
                  </p>
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
                  <p>
                    <i>Fire wall</i>
                  </p>
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
                  <p>
                    <i>Magicians' Bubble</i>
                  </p>
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
                  <p>
                    <i>Abundance</i>
                  </p>
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
                  <p>
                    <i>Kinetic defense</i>
                  </p>
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
                  <p>
                    <i>Telekinesis</i>
                  </p>
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
                  <p>
                    <i>Disarm</i>
                  </p>
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
                  <p>
                    <i>Deface</i>
                  </p>
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
                  <p>
                    <i>Booby Trap</i>
                  </p>
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
                  <p>
                    <i>Splinter Armor</i>
                  </p>
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
                  <p>
                    <i>Preserve</i>
                  </p>
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
                  <p>
                    <i>Null Area</i>
                  </p>
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
                  <p>
                    <i>Lift</i>
                  </p>
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
                  <p>
                    <i>Kinetic Field</i>
                  </p>
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
                  <p>
                    <i>Sabotage</i>
                  </p>
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
                  <p>
                    <i>Ice Wave</i>
                  </p>
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
                  <p>
                    <i>Lightning bolt</i>
                  </p>
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
                  <p>
                    <i>Meteor</i>
                  </p>
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
                  <p>
                    <i>Mist form</i>
                  </p>
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
                  <p>
                    <i>Absorb Magic</i>
                  </p>
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
                  <p>
                    <i>Portal</i>
                  </p>
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
                  <p>
                    <i>Minor Heal</i>
                  </p>
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
                  <p>
                    <i>Minor Heal Other</i>
                  </p>
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
                  <p>
                    <i>Blood Ward</i>
                  </p>
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
                  <p>
                    <i>Dryad's Germinate</i>
                  </p>
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
                  <p>
                    <i>Guard Body</i>
                  </p>
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
                  <p>
                    <i>Guard Spirit</i>
                  </p>
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
                  <p>
                    <i>Detect Enemy</i>
                  </p>
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
                  <p>
                    <i>Scry Allies</i>
                  </p>
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
                  <p>
                    <i>Donation</i>
                  </p>
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
                  <p>
                    <i>Exorcise</i>
                  </p>
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
                  <p>
                    <i>Holy Sigil</i>
                  </p>
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
                  <p>
                    <i>Cleanse Food</i>
                  </p>
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
                  <p>
                    <i>Breathe Fire</i>
                  </p>
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
                  <p>
                    <i>Thorns</i>
                  </p>
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
                  <p>
                    <i>Blessed Meals</i>
                  </p>
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
                  <p>
                    <i>Nimbleness</i>
                  </p>
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
                  <p>
                    <i>Counsel</i>
                  </p>
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
                  <p>
                    <i>Divine Zeal</i>
                  </p>
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
                  <p>
                    <i>Divine Guard</i>
                  </p>
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
                  <p>
                    <i>Pinpoint</i>
                  </p>
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
                  <p>
                    <i>Scry Traps</i>
                  </p>
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
                  <p>
                    <i>Greater Might</i>
                  </p>
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
                  <p>
                    <i>Sturdiness</i>
                  </p>
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
                  <p>
                    <i>Scry Treasures</i>
                  </p>
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
                  <p>
                    <i>Divine Fortress</i>
                  </p>
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
                  <p>
                    <i>Holy Beam</i>
                  </p>
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

    {
      sectionName: "Mysticism Spells",
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
                  <img src={confuse} />
                  <p>
                    <i>Confuse</i>
                  </p>
                </td>
                <td>Projectile</td>
                <td>
                  Inflicts confuse
                  <p>Confused enemies attack each other</p>
                  <p>
                    Confused shopkeepers are able to trade with monster players
                  </p>
                </td>
                <td>
                  A joker spell by default
                  <p>A spell granted by imp form</p>
                </td>
                <td>
                  <b>-16 MP</b>
                </td>
                <td>
                  <b>Mysticism</b>
                  <br />
                  <b>I</b> <i>(None)</i>
                </td>
              </tr>
              <tr>
                <td>
                  <img src={maximise} />
                  <p>
                    <i>maximise</i>
                  </p>
                </td>
                <td>Touch Target</td>
                <td>
                  Inflicts +1 Enhance; +1 more enhance per 25% PWR
                  <p>+STR + CON -DEX</p>
                  Enhanced targets provide more exp when killed, +2 exp or +10%
                  exp when killed per enhance stack,whichever is greater,
                  <p>maximum is +10 exp or +50% exp at +5 Enhance</p>
                  <p>Effects increase from repeated casts</p>
                </td>
                <td>
                  Can be used on other players or allies as well
                  <p>Cancels out Minimize</p>
                </td>
                <td>
                  <b>-5 MP</b>
                </td>
                <td>
                  <b>Mysticism</b>
                  <br />
                  <b>I</b> <i>(None)</i>
                </td>
              </tr>
              <tr>
                <td>
                  <img src={germinate} />
                  <p>
                    <i>Myconids Germinate</i>
                  </p>
                </td>
                <td>Ground Target</td>
                <td>
                  Plants a Mushroom:
                  <p>+5 magic damage</p>
                  <p>Inflicts poison and knockback</p>
                  Drops forageables on expiry
                  <p>Consumes foliage to summon</p>
                </td>
                <td>Exclusive to myconid players</td>
                <td>
                  <b>-10 MP</b>
                  <p>1 tier of growth</p>
                </td>
                <td>
                  <b>Mysticism</b>
                  <br />
                  <b>I</b> <i>(None)</i>
                </td>
              </tr>
              <tr>
                <td>
                  <img src={projectspirit} />
                  <p>
                    <i>Spell of Project Spirit</i>
                  </p>
                </td>
                <td>Self-Effect</td>
                <td>
                  Become a <i>Fowl Spirit</i> leaving your physical body behind
                  for a time
                  <p>Effect ends if body receives harm</p>
                  <p>Can interact with doors/levers and push items</p>
                  <p>Has the ability to quack to draw enemies attention</p>
                </td>
                <td>
                  Exclusive to hermit class
                  <p>Cannot be obtained by other means.</p>
                </td>
                <td>
                  <b>-5 MP</b>
                </td>
                <td>
                  <b>Mysticism</b>
                  <br />
                  <b>I</b> <i>(None)</i>
                </td>
              </tr>
              <tr>
                <td>
                  <img src={spiritweapon} />
                  <p>
                    <i>Spirit Weapon</i>
                  </p>
                </td>
                <td>Ground Target</td>
                <td>
                  Summons a Spirit Weapon to fight nearby for a time with 5 Str
                </td>
                <td>-</td>
                <td>
                  <b>-9 MP</b>
                </td>
                <td>
                  <b>Mysticism</b>
                  <br />
                  <b>I</b> <i>(None)</i>
                </td>
              </tr>
              <tr>
                <td>
                  <img src={ratform} />
                  <p>
                    <i>Rat Form</i>
                  </p>
                </td>
                <td>Self-Effect</td>
                <td>
                  Shapeshift temporarily into a different form Rat form grants
                  +DEX +INT +PER (Shaman only)Grants speed and detect food
                  spells
                </td>
                <td>A shaman spell by default</td>
                <td>
                  <b>-8 MP</b>
                </td>
                <td>
                  <b>Mysticism</b>
                  <br />
                  <b>I</b> <i>(None)</i>
                </td>
              </tr>
              <tr>
                <td>
                  <img src={slow} />
                  <p>
                    <i>Slow</i>
                  </p>
                </td>
                <td>Projectile</td>
                <td>Inflicts slow</td>
                <td>-</td>
                <td>
                  <b>-4 MP</b>
                </td>
                <td>
                  <b>Mysticism</b>
                  <br />
                  <b>I</b> <i>(None)</i>
                </td>
              </tr>
              <tr>
                <td>
                  <img src={poison} />
                  <p>
                    <i>Poison</i>
                  </p>
                </td>
                <td>Projectile</td>
                <td>
                  +10 Magic damage
                  <p>Inflicts poison</p>
                </td>
                <td>
                  A spell granted by arthropod (spider) form
                  <p>A Conjurer spell by default</p>
                </td>
                <td>
                  <b>-5 MP</b>
                </td>
                <td>
                  <b>Mysticism</b>
                  <br />
                  <b>I</b> <i>(None)</i>
                </td>
              </tr>
              <tr>
                <td>
                  <img src={revertform} />
                  <p>
                    <i>Revert Form</i>
                  </p>
                </td>
                <td>Self-Effect</td>
                <td>
                  Removes active shapeshift or polymorph effects
                  <p>Only removes one effect at a time</p>
                </td>
                <td>
                  A shaman spell by default
                  <p>
                    Can be obtained by reading a spellbook of rat form,
                    arthropod (spider) form, troll form or imp form, revert form
                    is granted in addition to the spell taught by the book.
                  </p>
                </td>
                <td>
                  <b>-5 MP</b>
                </td>
                <td>
                  <b>Mysticism</b>
                  <br />
                  <b>I</b> <i>(None)</i>
                </td>
              </tr>
              <tr>
                <td>
                  <img src={sleep} />
                  <p>
                    <i>Sleep</i>
                  </p>
                </td>
                <td>Projectile</td>
                <td>Inflicts sleep</td>
                <td>A sexton spell by default</td>
                <td>
                  <b>-4 MP</b>
                </td>
                <td>
                  <b>Mysticism</b>
                  <br />
                  <b>II</b> <i>(Basic)</i>
                </td>
              </tr>
              <tr>
                <td>
                  <img src={minimise} />
                  <p>
                    <i>Minimise</i>
                  </p>
                </td>
                <td>Touch Target</td>
                <td>
                  Inflicts +1 Diminish; +1 more Diminish per 25% PWR
                  <p>-STR - CON +DEX</p>
                  Diminished targets provide less exp when killed, -2 exp or
                  -10% exp when killed per diminish stack,whichever is
                  greater,maximum is -10 exp or -50% exp at +5 Diminish
                  <p>Effects increase from repeated casts</p>
                </td>
                <td>
                  Can be used on other players or allies as well
                  <p>Cancels out Maximize</p>
                </td>
                <td>
                  <b>-5 MP</b>
                </td>
                <td>
                  <b>Mysticism</b>
                  <br />
                  <b>II</b> <i>(Basic)</i>
                </td>
              </tr>
              <tr>
                <td>
                  <img src={defyflesh} />
                  <p>
                    <i>Defy Flesh</i>
                  </p>
                </td>
                <td>Projectile</td>
                <td>
                  Inflicts Torment
                  <p>Deals +5 Magic Damage as target is hit</p>
                  <p>Higher target HP increases quantity of damage instances</p>
                </td>
                <td>-</td>
                <td>
                  <b>-8 MP</b>
                </td>
                <td>
                  <b>Mysticism</b>
                  <br />
                  <b>II</b> <i>(Basic)</i>
                </td>
              </tr>
              <tr>
                <td>
                  <img src={envenomweapon} />
                  <p>
                    <i>Envenom Weapon</i>
                  </p>
                </td>
                <td>Sustained</td>
                <td>
                  Grants Physical Damage:50%
                  <p>+3 Damage</p>
                  <p>Inflicts Poison</p>
                </td>
                <td>-</td>
                <td>
                  <b>-5 MP</b> to cast, <b>-1 MP</b> every 5 seconds
                </td>
                <td>
                  <b>Mysticism</b>
                  <br />
                  <b>II</b> <i>(Basic)</i>
                </td>
              </tr>
              <tr>
                <td>
                  <img src={spores} />
                  <p>
                    <i>Spores</i>
                  </p>
                </td>
                <td>Sustained</td>
                <td>
                  Grants Spores
                  <p>Leaves behind Slow and Poison hazardous areas when hit</p>
                </td>
                <td>Myconid players innately begin with this spell</td>
                <td>
                  <b>-5 MP</b> to cast, <b>-1 MP</b> every 4 seconds
                </td>
                <td>
                  <b>Mysticism</b>
                  <br />
                  <b>II</b> <i>(Basic)</i>
                </td>
              </tr>
              <tr>
                <td>
                  <img src={seekally} />
                  <p>
                    <i>Seek Ally</i>
                  </p>
                </td>
                <td>Touch Target</td>
                <td>
                  Commands target to seek out an ally on the current dungeon
                  floor
                </td>
                <td>-</td>
                <td>
                  <b>-6 MP</b>
                </td>
                <td>
                  <b>Mysticism</b>
                  <br />
                  <b>II</b> <i>(Basic)</i>
                </td>
              </tr>
              <tr>
                <td>
                  <img src={cowardice} />
                  <p>
                    <i>Cowardice</i>
                  </p>
                </td>
                <td>Touch Target</td>
                <td>
                  Inflicts +3 Cowardice
                  <p>Forces retreat in combat</p>
                  <p>-STR - CON</p>
                </td>
                <td>
                  Can be used on other players or allies as well, even if its
                  detrimental
                </td>
                <td>
                  <b>-10 MP</b>
                </td>
                <td>
                  <b>Mysticism</b>
                  <br />
                  <b>II</b> <i>(Basic)</i>
                </td>
              </tr>
              <tr>
                <td>
                  <img src={reshapeweapon} />
                  <p>
                    <i>Reshape Weapon</i>
                  </p>
                </td>
                <td>Self-Effect</td>
                <td>
                  Transmutes basic weapons into different types
                  <p>
                    Gold cost reduces with power, 1% PWR is 4% of total gold
                    value reduction,
                  </p>
                  <p>Maxes out at 50% gold discount reachable at 113% PWR</p>
                </td>
                <td>Cannot reshape quarter staff</td>
                <td>
                  <b>-1 MP to cast</b>
                  <p>
                    Costs <b>10 MP</b> to reshape
                  </p>
                </td>
                <td>
                  <b>Mysticism</b>
                  <br />
                  <b>II</b> <i>(Basic)</i>
                </td>
              </tr>
              <tr>
                <td>
                  <img src={alterinstrument} />
                  <p>
                    <i>Alter Instrument</i>
                  </p>
                </td>
                <td>Self-Effect</td>
                <td>
                  Transmutes a musical instrument into another
                  <p>
                    Gold cost reduces with power, 1% PWR is 4 gold value
                    reduction,
                  </p>
                  <p>Maxes out at 50% gold discount reachable at 125% PWR</p>
                </td>
                <td>
                  Exclusive to the bard class
                  <p>Cannot be obtained by other means.</p>
                </td>
                <td>
                  <b>-1 MP to cast</b>
                  <p>
                    Costs <b>15 MP</b> to reshape
                  </p>
                </td>
                <td>
                  <b>Mysticism</b>
                  <br />
                  <b>II</b> <i>(Basic)</i>
                </td>
              </tr>
              <tr>
                <td>
                  <img src={alterarrow} />
                  <p>
                    <i>Alter Arrow</i>
                  </p>
                </td>
                <td>Self-Effect</td>
                <td>
                  Transmutes quivers and gems into other quivers
                  <p>
                    Gold cost reduces with power, 1% PWR is 4% of total gold
                    value reduction,
                  </p>
                  <p>
                    Maxes out at 50% gold discount reachable at 113% PWR; Gold
                    cost vary per quiver
                  </p>
                </td>
                <td>-</td>
                <td>
                  <b>-1 MP to cast</b>
                  <p>
                    Costs <b>5 MP</b> to reshape if ammo count is under 10,
                    raises price by <b>1 MP</b>
                    per 10 ammo;maxes out at <b>10 MP</b> cost
                  </p>
                </td>
                <td>
                  <b>Mysticism</b>
                  <br />
                  <b>II</b> <i>(Basic)</i>
                </td>
              </tr>
              <tr>
                <td>
                  <img src={leadbolt} />
                  <p>
                    <i>Lead Bolt</i>
                  </p>
                </td>
                <td>Projectile</td>
                <td>
                  +15 Damage
                  <p>Inflicts Knockback</p>
                  <p>
                    Gold cost reduces with power, 1% PWR is 1 gold value
                    reduction,
                  </p>
                  <p>
                    Maxes out at 50 gold value reduction reachable at 150% PWR
                  </p>
                </td>
                <td>-</td>
                <td>
                  <b>0 MP to cast</b>
                  <p>
                    <b>100 Gold to cast</b>
                  </p>
                </td>
                <td>
                  <b>Mysticism</b>
                  <br />
                  <b>II</b> <i>(Basic)</i>
                </td>
              </tr>
              <tr>
                <td>
                  <img src={arcanemark} />
                  <p>
                    <i>Arcane Mark</i>
                  </p>
                </td>
                <td>Projectile</td>
                <td>
                  Inflicts nullify and reveals a targets location on the map
                  Nullify removes damage type weaknesses and resistances from
                  the target
                  <br />
                  <p>
                    <i>Note: It gives the bosses 50% weakness instead of 0%</i>
                  </p>
                  <p>
                    Marked targets refocus teleportation spells around the
                    target
                  </p>
                  <p>-50% Cost for teleportation spells while active</p>
                  <p>
                    Casting teleportation moves the caster to the marked target
                  </p>
                  <p>
                    Casting teleport other moves marked target in front of
                    caster
                  </p>
                </td>
                <td>Incubus players innately begin with this spell</td>
                <td>
                  <b>-5 MP</b>
                </td>
                <td>
                  <b>Mysticism</b>
                  <br />
                  <b>II</b> <i>(Basic)</i>
                </td>
              </tr>
              <tr>
                <td>
                  <img src={locking} />
                  <p>
                    <i>Locking</i>
                  </p>
                </td>
                <td>Projectile</td>
                <td>Locks doors and containers</td>
                <td>A sexton spell by default</td>
                <td>
                  <b>-11 MP</b>
                </td>
                <td>
                  <b>Mysticism</b>
                  <br />
                  <b>II</b> <i>(Basic)</i>
                </td>
              </tr>
              <tr>
                <td>
                  <img src={opening} />
                  <p>
                    <i>Opening</i>
                  </p>
                </td>
                <td>Projectile</td>
                <td>Opens doors, gates and locked containers</td>
                <td>A sexton spell by default</td>
                <td>
                  <b>-6 MP</b>
                </td>
                <td>
                  <b>Mysticism</b>
                  <br />
                  <b>II</b> <i>(Basic)</i>
                </td>
              </tr>
              <tr>
                <td>
                  <img src={greasespray} />
                  <p>
                    <i>Grease Spray</i>
                  </p>
                </td>
                <td>Projectile</td>
                <td>
                  Inflicts Greasy on hit
                  <p>Covers ground in slippery and flammable grease</p>
                </td>
                <td>-</td>
                <td>
                  <b>-13 MP</b>
                </td>
                <td>
                  <b>Mysticism</b>
                  <br />
                  <b>III</b> <i>(Skilled)</i>
                </td>
              </tr>
              <tr>
                <td>
                  <img src={weakness} />
                  <p>
                    <i>Weakness</i>
                  </p>
                </td>
                <td>Projectile</td>
                <td>
                  Inflicts Weakness:
                  <p>
                    -20% Attack power; Every 25% PWR over 100 increase it by 10%
                  </p>
                  <p>Maximum is -80% Attack power at 250%PWR</p>
                </td>
                <td>-</td>
                <td>
                  <b>-15 MP</b>
                </td>
                <td>
                  <b>Mysticism</b>
                  <br />
                  <b>III</b> <i>(Skilled)</i>
                </td>
              </tr>
              <tr>
                <td>
                  <img src={incoherence} />
                  <p>
                    <i>Incoherence</i>
                  </p>
                </td>
                <td>Projectile</td>
                <td>
                  Inflicts Incoherence:
                  <p>
                    -20% Spell power; Every 25% PWR over 100 increase it by 10%
                  </p>
                  <p>Maximum is -80% Spell power at 250% PWR</p>
                </td>
                <td>-</td>
                <td>
                  <b>-15 MP</b>
                </td>
                <td>
                  <b>Mysticism</b>
                  <br />
                  <b>III</b> <i>(Skilled)</i>
                </td>
              </tr>
              <tr>
                <td>
                  <img src={deepshade} />
                  <p>
                    <i>Deep Shade</i>
                  </p>
                </td>
                <td>Sustained</td>
                <td>
                  Summons a Deep Shade to follow the caster
                  <p>Deep Shade reduces visibility to enemies</p>
                </td>
                <td>A hermit spell by default</td>
                <td>
                  <b>-4 MP</b> to cast, <b>-1 MP</b> every 10 seconds to sustain
                </td>
                <td>
                  <b>Mysticism</b>
                  <br />
                  <b>III</b> <i>(Skilled)</i>
                </td>
              </tr>
              <tr>
                <td>
                  <img src={overcharge} />
                  <p>
                    <i>Overcharge</i>
                  </p>
                </td>
                <td>Self-Effect</td>
                <td>
                  Grants +2 Overcharge for the next memorized spell
                  <p>
                    Increases Overcharge stacks by 1 for every 50% PWR over 100%
                    PWR; Maxes out at +5 Overcharge at 250% PWR
                  </p>
                  Reduces MP costs by half, allows HP to be expended when out of
                  MP and reduces recast time
                </td>
                <td>-</td>
                <td>
                  <b>-10 MP</b>
                </td>
                <td>
                  <b>Mysticism</b>
                  <br />
                  <b>III</b> <i>(Skilled)</i>
                </td>
              </tr>
              <tr>
                <td>
                  <img src={forgekey} />
                  <p>
                    <i>Forge Key</i>
                  </p>
                </td>
                <td>Self-Effect</td>
                <td>
                  Transmutes keys or gems into various keys
                  <p>
                    Gold cost reduces with power, 1% PWR is 4% of total gold
                    value reduction,
                  </p>
                  <p>Maxes out at 50% gold discount reachable at 113% PWR;</p>
                  <p>
                    Every 100 gold of a gem's value further reduces cost by
                    12.5;
                  </p>
                  <p>Forging Keys into next tier ones has price reduction</p>
                </td>
                <td>
                  Price reduction maxes out depending on key:
                  <p>
                    Iron key: Max price reduction is 75; achievable by forging
                    amethyst and further priced gems
                  </p>
                  <p>
                    Bronze key: Max price reduction is 112, achievable by
                    forging amber and further priced gems
                  </p>
                  <p>
                    Silver key: Max price reduction is 175, achievable by
                    forging emerald and further priced gems
                  </p>
                  <p>
                    Gold key: Max price reduction is 375, achievable only by
                    forging diamond
                  </p>
                </td>
                <td>
                  <b>-1 MP to cast</b>
                  <p>Different keys cost different amount of mana to forge:</p>
                  <p>
                    Iron:<b>10 MP</b>
                  </p>
                  <p>
                    Bronze:<b>20 MP</b>
                  </p>
                  <p>
                    Silver:<b>30 MP</b>
                  </p>
                  <p>
                    Gold:<b>50 MP</b>
                  </p>
                </td>
                <td>
                  <b>Mysticism</b>
                  <br />
                  <b>III</b> <i>(Skilled)</i>
                </td>
              </tr>
              <tr>
                <td>
                  <img src={forgejewel} />
                  <p>
                    <i>Forge Jewel</i>
                  </p>
                </td>
                <td>Self-Effect</td>
                <td>
                  Transmutes gems into Jewels
                  <p>
                    Value ranges for what the value of the gem will produce:
                  </p>
                  <p>From 0-200 gold: Cracked Jewels;</p>
                  <p>From 300-400 gold: Rough Jewels;</p>
                  <p>From 600-850 gold: Flawed Jewels;</p>
                  <p>From 1000-3000 gold: Flawless Jewels;</p>
                  <p>Transmutes Jewels into higher quality variants</p>
                  <p>
                    Gold cost reduces with power, 1% PWR is 2% of total gold
                    value reduction,
                  </p>
                  <p>Maxes out at 50% gold discount reachable at 150% PWR;</p>
                </td>
                <td>
                  Exclusive to gnome players
                  <p>Cannot be obtained by other means.</p>
                </td>
                <td>
                  <b>-1 MP to cast</b>
                  <p>Costs various amount of mana to forge:</p>
                  <p>
                    Cracked Jewels:<b>20 MP</b>
                  </p>
                  <p>
                    Rough Jewels:<b>25 MP</b>
                  </p>
                  <p>
                    Flawed Jewels:<b>30 MP</b>
                  </p>
                  <p>
                    Flawless Jewels:<b>40 MP</b>
                  </p>
                </td>
                <td>
                  <b>Mysticism</b>
                  <br />
                  <b>III</b> <i>(Skilled)</i>
                </td>
              </tr>
              <tr>
                <td>
                  <img src={bloodletting} />
                  <p>
                    <i>Bloodletting</i>
                  </p>
                </td>
                <td>Projectile</td>
                <td>
                  +18 Magic damage
                  <p>Inflicts bleed and slow</p>
                </td>
                <td>
                  Vampire players innately begin with this spell
                  <p>
                    Used innately by the succubus consorts, Vampires, Bram
                    Kindly, Baphomet, Orpheus and Erudyce
                  </p>
                </td>
                <td>
                  <b>-11 MP</b>
                </td>
                <td>
                  <b>Mysticism</b>
                  <br />
                  <b>III</b> <i>(Skilled)</i>
                </td>
              </tr>
              <tr>
                <td>
                  <img src={arthropodform} />
                  <p>
                    <i>Arthropod Form</i>
                  </p>
                </td>
                <td>Self-Effect</td>
                <td>
                  Shapeshift temporarily into a different form Arthropod
                  (spider) form grants +STR +CON +PER Grants poison and spray
                  web spells
                  <p>Charged attacks have 25% chance to poison the target</p>
                  <p>
                    Players in Arthropod (spider) form can recruit Arthropod,
                    scarabs and scorpions
                  </p>
                </td>
                <td>
                  A spell awarded to shaman players upon reaching level 3
                  <p>Dropped by Anansi and rarely found in the dungeon.</p>
                </td>
                <td>
                  <b>-16 MP</b>
                </td>
                <td>
                  <b>Mysticism</b>
                  <br />
                  <b>III</b> <i>(Skilled)</i>
                </td>
              </tr>
              <tr>
                <td>
                  <img src={conjureskeleton} />
                  <p>
                    <i>Conjure Skeleton</i>
                  </p>
                </td>
                <td>Self-Effect</td>
                <td>
                  Summons 2 skeleton ally(s)
                  <p>
                    Summoned ally's levels are kept between casts, improving
                    equipment every five levels (max at level 30)
                  </p>
                  <p>MP cost increases with summons level</p>
                  <p>
                    Expert (60) magic skill + intelligence stat creates an
                    additional summon
                  </p>
                  <p>
                    Summons have the relinquish soul command that destroys the
                    summon and restores MP to the caster
                  </p>
                </td>
                <td>
                  Exclusive to conjurer class
                  <p>Cannot be obtained any other way.</p>
                </td>
                <td>
                  <b>-17 MP</b>
                </td>
                <td>
                  <b>Mysticism</b>
                  <br />
                  <b>III</b> <i>(Skilled)</i>
                </td>
              </tr>
              <tr>
                <td>
                  <img src={summonearthsprite} />
                  <p>
                    <i>Summon Earth Sprite</i>
                  </p>
                </td>
                <td>Touch Target</td>
                <td>
                  Summons Earth Sprite
                  <p>
                    +5 Trap Damage when summoned; +1 Trap Damage per 10% PWR
                  </p>
                  Requires a ceiling to summonEarth Sprite LVL starts at 5; +1
                  LVL per 10% PWR
                  <p>Maxes out at LVL 20 at 250% PWR</p>
                </td>
                <td>Exclusive to the scion class</td>
                <td>
                  <b>-20 MP</b>
                </td>
                <td>
                  <b>Mysticism</b>
                  <br />
                  <b>III</b> <i>(Skilled)</i>
                </td>
              </tr>
              <tr>
                <td>
                  <img src={fear} />
                  <p>
                    <i>Fear</i>
                  </p>
                </td>
                <td>Area</td>
                <td>
                  Inflicts fear on nearby enemies
                  <p>
                    Enemies inflicted with fear are unable to attack and focus
                    their attention on the caster
                  </p>
                </td>
                <td>A spell granted by troll form</td>
                <td>
                  <b>-28 MP</b>
                </td>
                <td>
                  <b>Mysticism</b>
                  <br />
                  <b>IV</b> <i>(Expert)</i>
                </td>
              </tr>
              <tr>
                <td>
                  <img src={numbingbolt} />
                  <p>
                    <i>Numbing Bolt</i>
                  </p>
                </td>
                <td>Projectile</td>
                <td>
                  Inflicts Numb
                  <p>Prevents target from being alerted on next hit</p>
                </td>
                <td>-</td>
                <td>
                  <b>-13 MP</b>
                </td>
                <td>
                  <b>Mysticism</b>
                  <br />
                  <b>IV</b> <i>(Expert)</i>
                </td>
              </tr>
              <tr>
                <td>
                  <img src={compel} />
                  <p>
                    <i>Compel</i>
                  </p>
                </td>
                <td>Touch Target</td>
                <td>Compels non followers to obey one Command</td>
                <td>A mesmer spell by default</td>
                <td>
                  <b>-8 MP</b>
                </td>
                <td>
                  <b>Mysticism</b>
                  <br />
                  <b>IV</b> <i>(Expert)</i>
                </td>
              </tr>
              <tr>
                <td>
                  <img src={psychicspear} />
                  <p>
                    <i>Psychic Spear</i>
                  </p>
                </td>
                <td>Projectile</td>
                <td>
                  +20 Magic Damage+40 Magic Damage based on target's remaining
                  HP%
                  <p>
                    Targets above 50% of their maximum HP take additional damage
                  </p>
                </td>
                <td>-</td>
                <td>
                  <b>-12 MP</b>
                </td>
                <td>
                  <b>Mysticism</b>
                  <br />
                  <b>IV</b> <i>(Expert)</i>
                </td>
              </tr>
              <tr>
                <td>
                  <img src={curseflesh} />
                  <p>
                    <i>Curse Flesh</i>
                  </p>
                </td>
                <td>Touch Target</td>
                <td>
                  Inflicts Lesser Haunting Spawns a Revenant Skull follower when
                  target dies under the effectRevenant Skull LVL starts at 5;+1
                  LVL per 10% PWR
                  <p>Maxes out at LVL 20 at 250% PWR</p>
                </td>
                <td>Has no effect on Skeletons</td>
                <td>
                  <b>-16 MP</b>
                </td>
                <td>
                  <b>Mysticism</b>
                  <br />
                  <b>IV</b> <i>(Expert)</i>
                </td>
              </tr>
              <tr>
                <td>
                  <img src={metallugry} />
                  <p>
                    <i>Metallugry</i>
                  </p>
                </td>
                <td>Self-Effect</td>
                <td>
                  Transmutes metal items into gold
                  <p>75% of gold value is lost upon transmuting</p>
                  <p>
                    Amount of gold value transmuted increases with power, 1% PWR
                    is 1% of total gold value increase,
                  </p>
                  <p>
                    Maxes out at 100% gold value transmuted reachable at 175%
                    PWR
                  </p>
                </td>
                <td>
                  Gold value transmuted varies based on item Quality and
                  Beatitude
                </td>
                <td>
                  <b>-1 MP to cast</b>
                  <p>
                    Costs <b>10 MP</b> to transmute items into 200 gold or less
                  </p>
                  <p>Any gold amount transmuted over 200 gold costs</p>
                  <p>
                    additional <b>1 MP</b> for every 20 gold over 200
                  </p>
                </td>
                <td>
                  <b>Mysticism</b>
                  <br />
                  <b>IV</b> <i>(Expert)</i>
                </td>
              </tr>
              <tr>
                <td>
                  <img src={voidchest} />
                  <p>
                    <i>Void Chest</i>
                  </p>
                </td>
                <td>Touch Target</td>
                <td>
                  Grants Void Storage access within chests
                  <p>
                    Items within Void Storage persist throughout the dungeon
                  </p>
                </td>
                <td>
                  If a mimic is turned into a Void Chest, any items it steals
                  will be added into the Void Storage
                </td>
                <td>
                  <b>-14 MP</b>
                </td>
                <td>
                  <b>Mysticism</b>
                  <br />
                  <b>IV</b> <i>(Expert)</i>
                </td>
              </tr>
              <tr>
                <td>
                  <img src={polymorph} />
                  <p>
                    <i>Polymorph</i>
                  </p>
                </td>
                <td>Self-Effect</td>
                <td>
                  Polymorph temporarily into a random humanoid
                  <p>Non humans always polymorph into humans</p>
                  <p>
                    Polymorph effects dissipate upon entering or consuming water
                  </p>
                </td>
                <td>Succubus players innately begin with this spell</td>
                <td>
                  <b>-40 MP</b>
                </td>
                <td>
                  <b>Mysticism</b>
                  <br />
                  <b>IV</b> <i>(Expert)</i>
                </td>
              </tr>
              <tr>
                <td>
                  <img src={vampiricaura} />
                  <p>
                    <i>Vampiric Aura</i>
                  </p>
                </td>
                <td>Sustained</td>
                <td>
                  Grants unarmed attack lifesteal and bleed chance Increases
                  STR/DEX -100% HP regeneration
                  <p>Increases starvation rate while active</p>
                  <p>
                    Grants the ability to drink blood in addition to regular
                    food
                  </p>
                  <p>Blood is now dropped by certain enemies</p>
                </td>
                <td>
                  Guaranteed as a spellbook if playing as the Accursed class and
                  visiting The Mystic Library
                </td>
                <td>
                  <b>-5 MP</b> to cast, <b>-1 MP</b> every 0.33 seconds
                </td>
                <td>
                  <b>Mysticism</b>
                  <br />
                  <b>IV</b> <i>(Expert)</i>
                </td>
              </tr>
              <tr>
                <td>
                  <img src={trollform} />
                  <p>
                    <i>Troll Form</i>
                  </p>
                </td>
                <td>Self-Effect</td>
                <td>
                  Shapeshift temporarily into a different form Troll form grants
                  +STR +CON -DEX (Shaman only) Grants the Troll's Blood, Power
                  Strike and Fear spells
                  <p>
                    Players in Troll Form can recruit Trolls and become neutral
                    to Gnomes
                  </p>
                </td>
                <td>
                  A spell awarded to shaman players upon reaching level six
                  <p>Rarely found in the dungeon</p>
                </td>
                <td>
                  <b>-24 MP</b>
                </td>
                <td>
                  <b>Mysticism</b>
                  <br />
                  <b>IV</b> <i>(Expert)</i>
                </td>
              </tr>
              <tr>
                <td>
                  <img src={stoneblood} />
                  <p>
                    <i>Stoneblood</i>
                  </p>
                </td>
                <td>3x Projectile</td>
                <td>Inflicts paralysis</td>
                <td>Used innately by cockatrice enemies</td>
                <td>
                  <b>-21 MP</b>
                </td>
                <td>
                  <b>Mysticism</b>
                  <br />
                  <b>V</b> <i>(Master)</i>
                </td>
              </tr>
              <tr>
                <td>
                  <img src={bloodwaves} />
                  <p>
                    <i>Blood Waves</i>
                  </p>
                </td>
                <td>Projectile</td>
                <td>
                  +15 Magic Damage
                  <p>Extra +2 Magic Damage every INT point</p>
                  <p>Passes through creatures</p>{" "}
                  <p>Consumes 25% HP on cast;Cannot reduce below 10% HP</p>
                </td>
                <td>-</td>
                <td>
                  <b>-15 MP</b>
                </td>
                <td>
                  <b>Mysticism</b>
                  <br />
                  <b>V</b> <i>(Master)</i>
                </td>
              </tr>
              <tr>
                <td>
                  <img src={charmmonster} />
                  <p>
                    <i>Charm Monster</i>
                  </p>
                </td>
                <td>Projectile</td>
                <td>
                  Attempts to charm a monster into an ally Inflicts pacify if
                  unable to charm
                  <p>Success varies with monster type</p>
                  <p>You may only have one charmed monster at a time</p>
                  <p>+30% Chance on drunk or confused monsters</p>
                  <p>+X% Chance, where X is your intelligence 2x</p>
                  <p>
                    Additional chance based on your leadership skill and
                    charisma stat
                  </p>
                </td>
                <td>
                  A mesmer spell by default
                  <p>Used innately by succubus and incubus enemies</p>
                </td>
                <td>
                  <b>-50 MP</b>
                </td>
                <td>
                  <b>Mysticism</b>
                  <br />
                  <b>V</b> <i>(Master)</i>
                </td>
              </tr>
              <tr>
                <td>
                  <img src={innerdemon} />
                  <p>
                    <i>Inner Demon</i>
                  </p>
                </td>
                <td>Projectile</td>
                <td>
                  Exorcises an inner demon that provokes its victim
                  <p>Damage dealt to the demon is returned to the attacker</p>
                  <p>Spell consumes health equal to 10% of caster's max HP </p>
                  <p>Demon's stats are based on caster</p>
                  <p>Only works once per enemy</p>
                </td>
                <td>
                  A punisher spell by default
                  <p>
                    Only appears in high tier treasure vaults in the Citadel
                  </p>
                </td>
                <td>
                  <b>-25 MP</b>
                  <p>
                    <b>-10%</b> of caster's max HP
                  </p>
                </td>
                <td>
                  <b>Mysticism</b>
                  <br />
                  <b>V</b> <i>(Master)</i>
                </td>
              </tr>
              <tr>
                <td>
                  <img src={impform} />
                  <p>
                    <i>Imp Form</i>
                  </p>
                </td>
                <td>Self-Effect</td>
                <td>
                  Shapeshift temporarily into a different form Imp form grants
                  +PER +INT and levitation (Shaman only)Grants lightning,
                  confuse and elemental focus spells
                  <p>Players in imp form can recruit imps</p>
                </td>
                <td>
                  A spell awarded to shaman players upon reaching level twelve
                  <p>Rarely found in the dungeon</p>
                </td>
                <td>
                  <b>-32 MP</b>
                </td>
                <td>
                  <b>Mysticism</b>
                  <br />
                  <b>V</b> <i>(Master)</i>
                </td>
              </tr>
              <tr>
                <td>
                  <img src={dominate} />
                  <p>
                    <i>Dominate</i>
                  </p>
                </td>
                <td>Projectile</td>
                <td>
                  Forcefully converts an enemy into an ally
                  <p>
                    Dominated ally limit:1, every 67% PWR increase limit by 1,
                  </p>
                  Dominating monsters allows exceeding the Leadership skill ally
                  limit <p>Consumes HP to cast when MP is depleted </p>
                  <p>
                    HP cannot, however, be used for the base 21 cost of the
                    spell
                  </p>
                </td>
                <td>-</td>
                <td>
                  <b>
                    <i>-</i>21 MP
                  </b>{" "}
                  + the current health points of the target
                </td>
                <td>
                  <b>Mysticism</b>
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
