import type { ReactNode } from "react";

import AlchemyRecipes from "../assets/Barony_Alchemy_Table.webp";

export type SkillSections = {
  sectionName: string;
  sectionContent: ReactNode[];
};

export type Skill = {
  id: string;
  skillSections: SkillSections[];
};

export const skills: Skill[] = [
  {
    id: "Lore",
    skillSections: [
      {
        sectionName: "Description",
        sectionContent: [
          <p>
            Used to measure your ability in appraising. With a higher lore skill
            you can identify items much more quickly, as well as identify harder
            items such as gemstones.
          </p>,
          <p>The primary stat of the Lore skill is Perception.</p>,
        ],
      },
      {
        sectionName: "Legendary Bonus",
        sectionContent: [
          <p>
            You are so well learned in inventory, you can instantly tell an
            items worth at a glance. You appraise all items 25% faster and
            reveal their gold value.
          </p>,
        ],
      },
      {
        sectionName: "Skill Bonus",
        sectionContent: [
          <p>Appraising items will continuously level the skill.</p>,
          <ul>
            <li>0 Skill - Fast up to 5G, Slow up to 30G</li>
            <li>5 Skill - Fast up to 15G, Slow up to 65G</li>
            <li>10 Skill - Fast up to 20G, Slow up to 100G</li>
            <li>15 Skill - Fast up to 35G, Slow up to 150G</li>
            <li>20 Skill - Fast up to 50G, Slow up to 200G</li>
            <li>25 Skill - Fast up to 70G, Slow up to 260G</li>
            <li>30 Skill - Fast up to 100G, Slow up to 320G</li>
            <li>35 Skill - Fast up to 150G, Slow up to 425G</li>
            <li>40 Skill - Fast up to 225G, Slow up to 1500G</li>
            <li>50 Skill - Fast up to 300G, Slow up to any gold value</li>
          </ul>,
        ],
      },
      {
        sectionName: "Advancement",
        sectionContent: [
          <p>
            After level 50, items must greater than 300G increase your lore
            skill. Appraisal speeds increase as you continue to grow beyond
            50.{" "}
          </p>,
        ],
      },
      {
        sectionName: "Appraisal",
        sectionContent: [
          <p>
            Items begin to be automatically appraised when picked up if
            perception and lore level is applicable, while switch to lower-time
            items when available. Manually appraising, by pressing 'x' (default
            key), will lock appraisal onto the desired item, white bordered
            progress will be shown instead of yellow.{" "}
          </p>,
          <p>
            Descending a dungeon floor advances the appraisal time of all
            inventory items held by 25-50% depending on your Lore skill
            level.{" "}
          </p>,
        ],
      },
      {
        sectionName: "Instruments",
        sectionContent: [
          <p>
            Playing an instrument can slowly train Lore, determining the buff
            duration, which in turn determines the mana economy of the
            spell.{" "}
          </p>,
          <p>
            Each instruments give different inspiration bonuses. The stats
            modified by Inspirations give better bonuses the longer time is
            spent playing instruments, their inspiration tier and stat bonuses
            are ultimately determined by Charisma.
          </p>,
        ],
      },
    ],
  },

  {
    id: "Leadership",
    skillSections: [
      {
        sectionName: "Description",
        sectionContent: [
          <p>
            Leadership Leadership Mini Icon.png in Barony is a skill and game
            mechanic that allows the character to recruit followers to help aide
            you throughout the dungeon.
          </p>,
          <p>The primary stat of the Leadership skill is Charisma.</p>,
        ],
      },
      {
        sectionName: "Legendary Bonus",
        sectionContent: [
          <p>
            You've become so friendly and charismatic you can recruit anyone
            (almost). You can recruit goblins, goatmen, and insectoids as
            followers.
          </p>,
        ],
      },
      {
        sectionName: "Skill Bonus",
        sectionContent: [
          <>
            <p>
              Gaining levels in the Leadership skill will improve your
              characters abilities in the following ways:
            </p>
            <ul>
              <li>Recruit more followers (8 at level 100)</li>
              <li>Boost DEX of followers (6 at level 100)</li>
              <li>Access to more Command options</li>
            </ul>
            <p>
              All players start with the ability to recruit a max of 4
              followers.
            </p>
            <p>
              With a Leadership skill above 60, players with racial allegiances
              that allow for it can recruit named NPCs to their side.
            </p>
          </>,
        ],
      },
      {
        sectionName: "Advancement",
        sectionContent: [
          <p>
            Leadership increases when your followers kill enemies or when you
            give them certain commands such as Rest.
          </p>,
        ],
      },
      {
        sectionName: "Equipment",
        sectionContent: [
          <>
            <p>Wearing the following equipment can affect leadership:</p>
            <ul>
              <li>
                Plumed Cap - +1 Charisma, +10 Leadership skill bonus, +10 per
                blessing (25 max)
              </li>
              <li>
                Laurels - +25% XP gain to lower LVL allies +25% per blessing
                (300% max), Followers: +2 Hit point regeneration while
                regenerating, +2 per blessing (12 max)
              </li>
              <li>
                Crown - +25% XP gain to lower LVL allies +25% per blessing (300%
                max), +20% Restore max hit points on LVL increase for self and
                followers, +10% per blessing (50% max)
              </li>
              <li>
                Turban - +25% XP gain to lower LVL allies +25% per blessing
                (300% max), Followers: +50% Trap Resistance, +25% per blessing
                (100% max)
              </li>
              <li>
                Crowned Helmet - Followers: +20% Damage resistance, +10% per
                blessing (50% max)
              </li>
            </ul>

            <p>
              {" "}
              It is possible o use the interact command to instruct followers to
              equip or change certain gear.
            </p>

            <table>
              <caption>Table represents items followers can equip:</caption>
              <tbody>
                <tr>
                  <th>Denizen</th>
                  <th>Weapon</th>
                  <th>Helmet</th>
                  <th>Armor</th>
                  <th>Cloak</th>
                  <th>Glove</th>
                  <th>Boot</th>
                  <th>Amulet</th>
                  <th>Ring</th>
                  <th>Off-hand</th>
                  <th>Other</th>
                </tr>
                <tr>
                  <td>
                    <p>Human</p>
                  </td>
                  <td>✅</td>
                  <td>✅</td>
                  <td>✅</td>
                  <td>✅</td>
                  <td>✅</td>
                  <td>✅</td>
                  <td>✅</td>
                  <td>✅</td>
                  <td>
                    Shields
                    <p>Quivers</p>
                    <p>Light-sources</p>
                  </td>
                  <td></td>
                </tr>
                <tr>
                  <td>
                    <p>Goblin</p>
                  </td>
                  <td>✅</td>
                  <td>✅</td>
                  <td>✅</td>
                  <td>✅</td>
                  <td>⛔</td>
                  <td>✅</td>
                  <td>✅</td>
                  <td>✅</td>
                  <td>
                    Shields
                    <p>Quivers</p>
                    <p>Light-sources</p>
                  </td>
                  <td></td>
                </tr>
                <tr>
                  <td>
                    <p>Gnome</p>
                  </td>
                  <td>✅</td>
                  <td>Felt hats</td>
                  <td>Blouses</td>
                  <td>✅</td>
                  <td>⛔</td>
                  <td>Loafers</td>
                  <td>✅</td>
                  <td>✅</td>
                  <td>
                    Shields
                    <p>Quivers</p>
                    <p>Light-sources</p>
                  </td>
                  <td></td>
                </tr>
                <tr>
                  <td>
                    <p>Insectoid</p>
                  </td>
                  <td>✅</td>
                  <td>Any except Hats/Hoods</td>
                  <td>✅</td>
                  <td>✅</td>
                  <td>⛔</td>
                  <td>✅</td>
                  <td>✅</td>
                  <td>✅</td>
                  <td>
                    Shields
                    <p>Quivers</p>
                    <p>Light-sources</p>
                  </td>
                  <td></td>
                </tr>
                <tr>
                  <td>
                    <p>Kobold</p>
                  </td>
                  <td>✅</td>
                  <td>Any except Hats/Hoods</td>
                  <td>✅</td>
                  <td>✅</td>
                  <td>⛔</td>
                  <td>✅</td>
                  <td>✅</td>
                  <td>✅</td>
                  <td>
                    Shields
                    <p>Quivers</p>
                    <p>Light-sources</p>
                  </td>
                  <td></td>
                </tr>
                <tr>
                  <td>
                    <p>Goatman</p>
                  </td>
                  <td>✅</td>
                  <td>⛔</td>
                  <td>✅</td>
                  <td>✅</td>
                  <td>⛔</td>
                  <td>✅</td>
                  <td>✅</td>
                  <td>✅</td>
                  <td>
                    Shields
                    <p>Quivers</p>
                    <p>Light-sources</p>
                  </td>
                  <td></td>
                </tr>
                <tr>
                  <td>
                    <p>Skeleton</p>
                  </td>
                  <td>✅</td>
                  <td>✅</td>
                  <td>✅</td>
                  <td>✅</td>
                  <td>⛔</td>
                  <td>✅</td>
                  <td>✅</td>
                  <td>✅</td>
                  <td>
                    Shields
                    <p>Quivers</p>
                    <p>Light-sources</p>
                  </td>
                  <td></td>
                </tr>
                <tr>
                  <td>
                    <p>Vampire</p>
                  </td>
                  <td>✅</td>
                  <td>⛔</td>
                  <td>Doublets</td>
                  <td>⛔</td>
                  <td>✅</td>
                  <td>✅</td>
                  <td>✅</td>
                  <td>✅</td>
                  <td>
                    Shields
                    <p>Quivers</p>
                  </td>
                  <td></td>
                </tr>
                <tr>
                  <td>
                    <p>Succubus</p>
                  </td>
                  <td>⛔</td>
                  <td>⛔</td>
                  <td>⛔</td>
                  <td>⛔</td>
                  <td>⛔</td>
                  <td>⛔</td>
                  <td>⛔</td>
                  <td>⛔</td>
                  <td>⛔</td>
                  <td>Roses*</td>
                </tr>
                <tr>
                  <td>
                    <p>Incubus</p>
                  </td>
                  <td>✅</td>
                  <td>⛔</td>
                  <td>✅</td>
                  <td>✅</td>
                  <td>⛔</td>
                  <td>✅</td>
                  <td>✅</td>
                  <td>✅</td>
                  <td>
                    Shields
                    <p>Quivers</p>
                    <p>Light-sources</p>
                  </td>
                  <td></td>
                </tr>
                <tr>
                  <td>
                    <p>Automaton</p>
                  </td>
                  <td>✅</td>
                  <td>Any except Hats/Hoods</td>
                  <td>✅</td>
                  <td>✅</td>
                  <td>⛔</td>
                  <td>✅</td>
                  <td>✅</td>
                  <td>✅</td>
                  <td>
                    Shields
                    <p>Quivers</p>
                    <p>Light-sources</p>
                  </td>
                  <td></td>
                </tr>
              </tbody>
            </table>
            <p>✅ = Can equip</p>
            <p>⛔ = Cannot equip</p>
            <p>Any other types of followers cannot equip any gear.</p>
            <p>
              No NPC can equip face gear, magical foci, instruments or spell
              books when instructed to interact.
            </p>
          </>,
        ],
      },
    ],
  },

  {
    id: "Trading",
    skillSections: [
      {
        sectionName: "Description",
        sectionContent: [
          <p>
            Trading in Barony is a skill improves a player's prices when trading
            with shopkeepers. Higher skill will also produce different dialogue
            from the shopkeeper compared to lower skill, with a more begrudging
            tone as the shopkeeper must provide fairer trades to an experienced
            player.
          </p>,
          <p>The primary stat of the Trading skill is Charisma.</p>,
        ],
      },
      {
        sectionName: "Legendary Bonus",
        sectionContent: [
          <p>
            You've become so charismatic, you can sell anything to anyone. You
            can buy/sell any item from shop, as if it were a general store.
          </p>,
        ],
      },
      {
        sectionName: "Skill Bonus",
        sectionContent: [
          <>
            <p>
              Each point of trading skill you have decreases item price by 2%,
              with zero trading skill items cost 300% of their original price.
            </p>
            <p>
              As you level up trading you can get access to 'private selection'
              of shops:
            </p>
            <ul>
              <li>The 1st item requires a sum of 0 trading and charisma</li>
              <li>The 2nd item requires a sum of 10 trading and charisma</li>
              <li>The 3rd item requires a sum of 20 trading and charisma</li>
              <li>The 4th item requires a sum of 30 trading and charisma</li>
            </ul>
          </>,
        ],
      },
      {
        sectionName: "Advancement",
        sectionContent: [
          <>
            <p>
              Trading skill has a chance to increase when the player purchases
              an item, based on the gold paid for the item. Items worth 1-9 gold
              have a 10% chance to increase trading skill. Items worth 10-100
              gold have a 10-100% chance to increase trading skill, scaling at a
              1:1 ratio with the gold cost. Purchasing an item worth 100 or more
              gold has a 100% chance to increase trading skill.
            </p>
            <p>
              Selling an item to a shopkeeper will never yield trading skill.
              Buying a sold item back from a shopkeeper will never yield trading
              skill.
            </p>
          </>,
        ],
      },

      {
        sectionName: "Mechanics",
        sectionContent: [
          <>
            <h2>Shopkeepers</h2>
            <p>
              Shopkeepers are typically friendly NPCs but are inherent hostility
              depending on the monster race chosen in character creation. This
              form of hostility can be remedied by wearing a monocle. It is of
              important note that shopkeepers can see through invisibility.
            </p>
            <p>
              Additionally, players may briefly trade with a hostile shopkeeper
              using the Confuse spell.
            </p>
            <p>
              Shopkeepers can spawn on most floors in enclosed rooms of up to
              two and have a set inventory depending on their shop type.
            </p>

            <h2>Wanted Status</h2>
            <p>
              Shopkeepers will become hostile when attacked, or when they spot a
              player with the Wanted! effect. This can be obtained by attacking
              a shopkeeper or wearing a bandit mask. This effect can only be
              removed by entering Hamlet, polymorphing, or using an amulet of
              sex change.
            </p>

            <h2>Equipment</h2>
            <p>
              Any item that boosts charisma is beneficial for the Trading skill.
              Some items have more special interaction to the trading skill
              which include:
            </p>
            <b>Monocle</b>
            <ul>
              <li>Merchant exclusive starting item</li>
              <li>+1 Perception</li>
              <li>
                Grants +200% Gem Appraisal speed, +200% per blessing (400% max)
              </li>
              <li>
                Marks you as an ally to shopkeepers when visibly worn. Effects
                such as invisibility will cause shopkeepers to become hostile if
                you are a monster race.
              </li>

              <b>Bandit Mask</b>
              <li>
                Grants the Wanted! status effect, marks you as an enemy to
                shopkeepers when visibly worn. If you attack a shopkeeper while
                wearing a bandit mask you will not gain the Wanted! status
                effect when you remove the mask. Effects such as invisibility
                will cause you to gain Wanted! as normal.
              </li>

              <b>Golden Mask</b>
              <ul>
                <li>+0 Armor Class</li>
                <li>
                  +50% Gold weight reduction, +50% per blessing (150% max)
                </li>
                <li>+10 Trading skill bonus, +10 per blessing (25 max)</li>
              </ul>
            </ul>
          </>,
        ],
      },
    ],
  },

  {
    id: "Stealth",
    skillSections: [
      {
        sectionName: "Description",
        sectionContent: [
          <p>
            Used to measure your ability in stealth. With a higher stealth skill
            you can sneak around in the darkness more easily, avoiding an
            enemy's detection as well as dealing more backstab damage.
          </p>,
          <p>The primary stat of the Stealth skill is Dexterity.</p>,
        ],
      },
      {
        sectionName: "Legendary Bonus",
        sectionContent: [
          <p>
            You have become so stealthy, you practically vanish from sight. You
            gain a invisibility while sneaking (blocking without an item)
            Backstab bonus damage is doubled.
          </p>,
        ],
      },
      {
        sectionName: "Skill Bonus",
        sectionContent: [
          <>
            <p>
              Gaining levels in Stealth will improve your character's abilities
              in the following ways:
            </p>
            <ul>
              <li>
                Reduces the radius at which the player can be detected by
                enemies
              </li>
              <li>Increases the attack damage bonus from sneak attacks</li>
              <li>
                Increases the distance that the character can see while sneaking
              </li>
            </ul>
          </>,
        ],
      },
      {
        sectionName: "Advancement",
        sectionContent: [
          <>
            <table>
              <caption>
                Stealth Skill levels are granted with a certain probability
                based on player actions as detailed in the table below.
              </caption>
              <tbody>
                <tr>
                  <th>Action</th>
                  <th>Chance</th>
                  <th>Notes</th>
                </tr>
                <tr>
                  <td>Being within an enemy's sight cone without being seen</td>
                  <td>
                    1% per monster tick while the monster is waiting, attacking,
                    or hunting.
                  </td>
                  <td>Monster ticks happen approximately twice per second.</td>
                </tr>
                <tr>
                  <td>Successfully backstabbing an enemy</td>
                  <td>25%</td>
                  <td></td>
                </tr>
                <tr>
                  <td>Hitting an enemy with bonus flanking damage</td>
                  <td>5%</td>
                  <td>
                    Attacks while flanking have a 50% chance to deal flanking
                    damage
                  </td>
                </tr>
              </tbody>
            </table>
          </>,
        ],
      },

      {
        sectionName: "Sneaking",
        sectionContent: [
          <>
            <p>
              While not having an offhand item equip and holding down 'space'
              (default key) on keyboard or 'left trigger' on controller, the
              character will sneak. This action slows the player's movement, but
              also increases their ability to see in the dungeon's darkness,
              scaling with Stealth level and Perception. When detected the
              character will no longer receive any stealth bonus.
            </p>

            <h2>Backstab</h2>
            <p>
              Attacking the backside of an unaware or sleeping enemy will do
              bonus damage.
            </p>
            <p>
              Wearing an Assassin's Hood will further boost your backstab
              damage.
            </p>

            <h2>Ranged</h2>
            <p>
              Ranged backstabs are only possible while wearing the Hood of
              Whispers.
            </p>

            <h2>Flank attacks</h2>
            <p>
              When enemies are engaged in combat, attacking them from behind may
              flank their defenses for bonus damage.
            </p>
          </>,
        ],
      },

      {
        sectionName: "Visibility",
        sectionContent: [
          <>
            <p>
              Every character has a visibility measurement whether they are
              sneaking or not. This measurement determines whether enemies can
              see the character under any circumstances, whether sneaking or
              fighting, whether in bright light or complete darkness. Visibility
              is measured in a radius around the character and is measured in
              game units which are divided by 16 and displayed to the player in
              terms of "tiles". One tile in this context is equal to a single
              map block. The player may never have a visibility radius that is
              smaller than 32 units, or two tiles. Whenever "Units" are
              mentioned in this section they refer to this measurement of 1/16
              of a tile.
            </p>
            <p>
              Visibility is increased based on the light level at the
              character's location. This is influenced by any light source in
              the dungeon, whether the light is carried by the character, is
              emanating from a nearby torch or spell, or caused by a nearby
              creature being on fire. A character's visibility cannot be
              increased beyond 255. The following table shows various light
              sources and their effect on starting visibility.
            </p>

            <table>
              <caption></caption>
              <tbody>
                <tr>
                  <th>Light source</th>
                  <th>
                    <b>Approximate base Visibility effect</b>
                  </th>
                </tr>
                <tr>
                  <td>Being in complete darkness</td>
                  <td></td>
                </tr>
                <tr>
                  <td>Wearing an eyepatch</td>
                  <td></td>
                </tr>
                <tr>
                  <td>Holding a torch</td>
                  <td>+7 tiles</td>
                </tr>
                <tr>
                  <td>Holding a lantern</td>
                  <td>+10 tiles</td>
                </tr>
                <tr>
                  <td>Holding a crystal Shard</td>
                  <td>+5 tiles</td>
                </tr>
                <tr>
                  <td>Being on fire</td>
                  <td>+5 tiles</td>
                </tr>
              </tbody>
            </table>

            <p>
              There are two modes of visibility used in the game - the
              visibility of the character when being observed by a specific
              entity, and the visibility of the character when not being
              observed.
            </p>
            <p>
              When being observed, the character's visibility radius is
              increased by four units for every point of perception the observer
              has. For example, if the observer has a perception score of 16,
              that would increase the character's visibility by 64 units, or
              four tiles. If the observer has a perception score of negative
              four, it would decrease the character's visibility by 16 units, or
              one tile.
            </p>
            <p>
              Whether being observed or not, the character's visibility is
              further reduced by 50% if they are sneaking. Finally, the
              character's visibility is reduced by a certain percentage
              depending on their stealth skill, down to the minimum of 32 units.
              The formula for that calculation could be described this way:
            </p>

            <b>
              VisAfterStealth = VisBeforeStealth x (1 - Stealth/100) + (32 x
              Stealth/100)
            </b>

            <p>
              This calculation is performed after everything else, so no matter
              what influences there are on your visibility, your stealth skill
              will always bring your visibility down to 32 units (two tiles) if
              your skill level is at 100. This includes visibility effects from
              sources of light, meaning you can conceal lanterns and torches
              with stealth skill. Notably, with 100 stealth, your visibility
              will always be at the minimum 32 units even without sneaking.
            </p>
          </>,
        ],
      },
    ],
  },

  {
    id: "Swords",
    skillSections: [
      {
        sectionName: "Description",
        sectionContent: [
          <p>
            Used to measure your ability with swords. With a higher sword skill
            you deal more damage, and a swords durability lasts much longer.
          </p>,
          <p>The primary stat of the Swords skill is Strength.</p>,
        ],
      },
      {
        sectionName: "Legendary Bonus",
        sectionContent: [
          <p>
            You've become such a heroic swordsman (woman?), none can match your
            swordplay! You gain +5 ATK and inflict 5s [bleeding] status on fully
            charged strike. (targets invulnerable to bleeding take +5 additional
            ATK)
          </p>,
        ],
      },
      {
        sectionName: "Skill Bonus",
        sectionContent: [],
      },
      {
        sectionName: "Advancement",
        sectionContent: [
          <>
            <p>Dealing damage with a sword, and getting kills with a sword.</p>
          </>,
        ],
      },
    ],
  },

  {
    id: "Axes",
    skillSections: [
      {
        sectionName: "Description",
        sectionContent: [
          <p>
            Used to measure your ability with axes. With a higher axe skill you
            deal more damage, and an axes durability lasts much longer.
          </p>,
          <p>The primary stat of the Axes skill is Strength.</p>,
        ],
      },
      {
        sectionName: "Legendary Bonus",
        sectionContent: [
          <p>
            You've become such a heroic hewer, none can evade your fury! You
            gain +10 ATK and inflict 3s [slow] status on fully charged strike.
          </p>,
        ],
      },
      {
        sectionName: "Skill Bonus",
        sectionContent: [],
      },
      {
        sectionName: "Advancement",
        sectionContent: [
          <>
            <p>Dealing damage with an axe, and getting kills with an axe.</p>
          </>,
        ],
      },
    ],
  },

  {
    id: "Axes",
    skillSections: [
      {
        sectionName: "Description",
        sectionContent: [
          <p>
            Used to measure your ability with axes. With a higher axe skill you
            deal more damage, and an axes durability lasts much longer.
          </p>,
          <p>The primary stat of the Axes skill is Strength.</p>,
        ],
      },
      {
        sectionName: "Legendary Bonus",
        sectionContent: [
          <p>
            You've become such a heroic hewer, none can evade your fury! You
            gain +10 ATK and inflict 3s [slow] status on fully charged strike.
          </p>,
        ],
      },
      {
        sectionName: "Skill Bonus",
        sectionContent: [],
      },
      {
        sectionName: "Advancement",
        sectionContent: [
          <>
            <p>Dealing damage with an axe, and getting kills with an axe.</p>
          </>,
        ],
      },
    ],
  },

  {
    id: "Maces",
    skillSections: [
      {
        sectionName: "Description",
        sectionContent: [
          <p>
            Used to measure your ability with maces. With a higher mace skill
            you deal more damage, and a maces durability lasts much longer.
          </p>,
          <p>The primary stat of the Maces skill is Strength.</p>,
        ],
      },
      {
        sectionName: "Legendary Bonus",
        sectionContent: [
          <p>
            You've become such a heroic brute, none can match your bludgeoning!
            You gain +5 ATK and 25% chance inflict 1.5s [paralyze] status on
            fully charged strike.
          </p>,
        ],
      },
      {
        sectionName: "Skill Bonus",
        sectionContent: [],
      },
      {
        sectionName: "Advancement",
        sectionContent: [
          <>
            <p>Dealing damage with a mace, and getting kills with a mace.</p>
          </>,
        ],
      },
    ],
  },

  {
    id: "Polearms",
    skillSections: [
      {
        sectionName: "Description",
        sectionContent: [
          <p>
            Used to measure your ability with polearms. With a higher polearm
            skill you deal more damage, and a polearms durability lasts much
            longer.
          </p>,
          <p>The primary stat of the Polearms skill is Strength.</p>,
        ],
      },
      {
        sectionName: "Legendary Bonus",
        sectionContent: [
          <p>
            You've become such a heroic polearmsmith, none can avoid being
            skewed! You gain +5 ATK and inflict [knockback] status on fully
            charged strike.
          </p>,
        ],
      },
      {
        sectionName: "Skill Bonus",
        sectionContent: [],
      },
      {
        sectionName: "Advancement",
        sectionContent: [
          <>
            <p>
              Dealing damage with a polearm, and getting kills with a polearm.
            </p>
          </>,
        ],
      },
    ],
  },

  {
    id: "Ranged",
    skillSections: [
      {
        sectionName: "Description",
        sectionContent: [
          <p>
            Used to measure your ability with ranged weapons, this includes:
            slings, bows, crossbows, and any item/weapon that can be thrown.
            (such as tomahawks) With a higher ranged skill you deal more damage
            and ranged weapons durability lasts much longer.
          </p>,
          <p>The primary stat of the Ranged skill is Dexterity.</p>,
        ],
      },
      {
        sectionName: "Legendary Bonus",
        sectionContent: [
          <p>
            You've become such a heroic sniper, you never miss your mark! Ranged
            weapons never degrade on use.
          </p>,
        ],
      },
      {
        sectionName: "Skill Bonus",
        sectionContent: [],
      },
      {
        sectionName: "Advancement",
        sectionContent: [
          <>
            <p>
              Dealing damage with a bow or throwing weapons, and getting kills
              with a bow or throwing weapons.
            </p>
          </>,
        ],
      },
    ],
  },

  {
    id: "Blocking",
    skillSections: [
      {
        sectionName: "Description",
        sectionContent: [
          <p>
            Used to measure your ability with shields. With a higher shield
            skill you absorb/block more damage, and a shields durability lasts
            much longer.{" "}
          </p>,
          <p>The primary stat of the Blocking skill is Constitution.</p>,
        ],
      },
      {
        sectionName: "Legendary Bonus",
        sectionContent: [
          <p>
            You've become such a heroic tank, you can take any punishment!
            Shields never degrade on hit.
          </p>,
        ],
      },
      {
        sectionName: "Skill Bonus",
        sectionContent: [],
      },
      {
        sectionName: "Advancement",
        sectionContent: [
          <>
            <p>
              Take or block damage while a shield is equipped (does not have to
              be held up)
            </p>
            ,
            <p>
              Blocking with a torch only levels the skill up to LVL 40. Past LVL
              40 a shield must be used.
            </p>
            <p>You may only level up the blocking skill once per enemy.</p>
          </>,
        ],
      },
    ],
  },

  {
    id: "Unarmed",
    skillSections: [
      {
        sectionName: "Description",
        sectionContent: [
          <p>Used to measure your ability fighting without any weapons.</p>,
          <p>The primary stat of the Unarmed skill is Strength.</p>,
        ],
      },
      {
        sectionName: "Legendary Bonus",
        sectionContent: [
          <p>
            You've become such a heroic drunken boxer, you can fell any foe with
            your fists alone. You gain +5 ATK and inflict [paralyze] status on
            fully charged stealth backstab strike.
          </p>,
        ],
      },
      {
        sectionName: "Skill Bonus",
        sectionContent: [],
      },
      {
        sectionName: "Advancement",
        sectionContent: [
          <>
            <p>Dealing damage with punches, and getting kills with punches.</p>,
          </>,
        ],
      },
    ],
  },

  {
    id: "Sorcery",
    skillSections: [
      {
        sectionName: "Description",
        sectionContent: [
          <p>
            Used to measure how well versed you are in the school of
            Sorcery{" "}
          </p>,
          <p>The primary stat of the Sorcery skill is Intelligence.</p>,
        ],
      },
      {
        sectionName: "Legendary Bonus",
        sectionContent: [
          <p>
            Sorcery spells have +40% INT stat power bonus and +100% DEX stat
            cast time reduction.
          </p>,
        ],
      },
      {
        sectionName: "Skill Bonus",
        sectionContent: [],
      },
      {
        sectionName: "Advancement",
        sectionContent: [
          <>
            <p>
              Casting spells (learned and from books), firing staves, learning
              new spells.
            </p>
            ,
            <p>
              A spell must be used for its intended effect in order to level up
              the skill. e.g. Fireball must cause damage to an enemy and the Dig
              spell must destroy a wall.
            </p>
            <p>
              Using higher tiered spells will give a boosted chance to level up,
              this is indicated with a ! next to the spell on your spell list.
            </p>
            ,
            <p>
              Checking the skill description will also list the spells which
              give a boosted chance.
            </p>
            ,
          </>,
        ],
      },
    ],
  },

  {
    id: "Mysticism",
    skillSections: [
      {
        sectionName: "Description",
        sectionContent: [
          <p>
            {" "}
            Used to measure how well versed you are in the school of
            Mysticism{" "}
          </p>,
          <p>
            The primary stat of the Mysticism skill is Intelligence. It has a
            secondary stat of Charisma.
          </p>,
        ],
      },
      {
        sectionName: "Legendary Bonus",
        sectionContent: [
          <p>
            Mysticism spells have +40% INT/CHR stat power bonus and +100% DEX
            stat cast time reduction.
          </p>,
        ],
      },
      {
        sectionName: "Skill Bonus",
        sectionContent: [],
      },
      {
        sectionName: "Advancement",
        sectionContent: [
          <>
            <p>
              Casting spells (learned and from books), firing staves, learning
              new spells.
            </p>
            ,
            <p>
              A spell must be used for its intended effect in order to level up
              the skill. e.g. Bloodletting must cause damage to an enemy and the
              Unlock spell must unlock a locked door or chest.
            </p>
            <p>
              Using higher tiered spells will give a boosted chance to level up,
              this is indicated with a ! next to the spell on your spell list.
            </p>
            ,
            <p>
              Checking the skill description will also list the spells which
              give a boosted chance.
            </p>
            ,
          </>,
        ],
      },
    ],
  },

  {
    id: "Thaumaturgy",
    skillSections: [
      {
        sectionName: "Description",
        sectionContent: [
          <p>
            {" "}
            Used to measure how well versed you are in the school of
            Thaumaturgy{" "}
          </p>,
          <p>
            The primary stat of the Thaumaturgy skill is Constitution. It has a
            secondary stat of Intelligence.
          </p>,
        ],
      },
      {
        sectionName: "Legendary Bonus",
        sectionContent: [
          <p>
            Thaumaturgy spells have +40% INT/CON stat power bonus and +100% DEX
            stat cast time reduction.
          </p>,
        ],
      },
      {
        sectionName: "Skill Bonus",
        sectionContent: [],
      },
      {
        sectionName: "Advancement",
        sectionContent: [
          <>
            <p>
              Casting spells (learned and from books), firing staves, learning
              new spells.
            </p>
            ,
            <p>
              A spell must be used for its intended effect in order to level up
              the skill. e.g. Healing must restore hit points and you must
              travel distance while the Light spell is being channeled.
            </p>
            <p>
              Using higher tiered spells will give a boosted chance to level up,
              this is indicated with a ! next to the spell on your spell list.
            </p>
            ,
            <p>
              Checking the skill description will also list the spells which
              give a boosted chance.
            </p>
            ,
          </>,
        ],
      },
    ],
  },

  {
    id: "Alchemy",
    skillSections: [
      {
        sectionName: "Description",
        sectionContent: [
          <p>
            Used to measure your ability in mixing potions, and brewing up new
            ones.
          </p>,
          <p>The primary stat of the Alchemy skill is Perception.</p>,
        ],
      },
      {
        sectionName: "Legendary Bonus",
        sectionContent: [
          <p>
            You've become so adept at mixing potions, your brews are known as
            magical! Brewed potions have +2 blessing. Alembics never degrade.
          </p>,
        ],
      },
      {
        sectionName: "Skill Bonus",
        sectionContent: [
          <>
            <p>
              Gaining levels in the alchemy skill will improve your characters
              abilities in the following ways:
            </p>
            <ul>
              <li>
                Improves the damaging alchemical effects of offensive potions
              </li>
              <li>Increases the flat impact damage of thrown potions</li>
              <li>
                Improves the chance of successfully duplicating a potion with
                water
              </li>
              <li>
                Improves the chances of salvaging an empty bottle when consuming
                potions
              </li>
              <li>
                Improves the chances of salvaging an empty bottle when brewing
              </li>
              <li>
                Provides a chance to learn the alchemical uses of potions you
                have not yet consumed
              </li>
            </ul>
          </>,
        ],
      },
      {
        sectionName: "Advancement",
        sectionContent: [
          <>
            <p>
              Alchemy Skill levels are granted with a certain probability based
              on player actions as detailed in the table below.
            </p>
            <table>
              <thead>
                <tr>
                  <th>Action</th>
                  <th>Chance</th>
                  <th>Notes</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Failing to Duplicate a potion</td>
                  <td>0%</td>
                  <td></td>
                </tr>
                <tr>
                  <td>Decanting potions together</td>
                  <td>0%</td>
                  <td></td>
                </tr>
                <tr>
                  <td>Brewing a potion of Sickness</td>
                  <td>5%</td>
                  <td></td>
                </tr>
                <tr>
                  <td>Duplicating a potion</td>
                  <td>5%</td>
                  <td></td>
                </tr>
                <tr>
                  <td>Drinking a potion</td>
                  <td>16.66%</td>
                  <td>If the potion's "Use" type is already known</td>
                </tr>
                <tr>
                  <td>Hitting a target with a potion</td>
                  <td>25%</td>
                  <td>Unless the target is immune to the effect</td>
                </tr>
                <tr>
                  <td>Brewing a Potion</td>
                  <td>50%</td>
                  <td>Not including sickness, decanting, or duplication.</td>
                </tr>
                <tr>
                  <td>Identifying the "Use" type of a potion</td>
                  <td>100%</td>
                  <td>See "Potion Uses"</td>
                </tr>
                <tr>
                  <td>Learning a new Recipe</td>
                  <td>100%</td>
                  <td>Not including Sickness or alchemical explosions.</td>
                </tr>
              </tbody>
              <tfoot></tfoot>
            </table>
          </>,
        ],
      },

      {
        sectionName: "Alembic",
        sectionContent: [
          <p>
            The Alembic is a utility item in Barony which allows the player to
            duplicate, brew and experiment with potions in order to create new
            kinds of potions that they would otherwise not have access to.
          </p>,
        ],
      },

      {
        sectionName: "Brewing",
        sectionContent: [
          <>
            <p>
              In order to brew with an Alembic, the player must interact with it
              in their inventory, selecting "Brew" (the default option). This
              will display the brewing interface through which all brewing
              occurs.
            </p>
            <p>
              The Brewing interface has three slots for potions. Two upper
              slots, which are for the input potions, and one lower slot, which
              will contain the output potion. Any potion may be placed in either
              of the two inputs interacting with them in the player's inventory
              while the brewing interface is open. The result of combining the
              two selected potions will be previewed in the output slot.
              Interacting with the output slot will produce the displayed
              result.
            </p>
            <p>
              Each time an alembic is used for brewing it has a 1/40 chance to
              degrade its condition. If acid is one of the ingredients, the
              chance is increased to 1/10. If the legendary brewing capstone has
              been achieved, the chance is reduced to zero.
            </p>

            <h2>Potion Uses (ingredients)</h2>
            <p>
              Ingredients for brewing are potions themselves, and each potion
              falls into one of three "use" categories: "Base potion",
              "Secondary potion", and "No unique use". The use type of each
              potion is visible only when an Alembic is open for brewing. Prior
              to the character learning a potion's use, a potion will be
              displayed in the inventory as [Unknown use].
            </p>
            <p>
              The character can learn the use type of a potion in one of several
              ways. The simplest method is to drink the potion, however if the
              potion is dangerous it may injure, inhibit, or even kill the
              player.
            </p>
            <p>
              The second method is to combine the potion with another potion in
              the alembic. If the combination produces a result that isn't an
              explosion or a potion of sickness, the use of one of the
              ingredients will be learned. If both of the ingredients have
              unknown uses, only the one on the left will be identified.
            </p>
            <p>
              The third way to learn the use of an ingredient is by leveling up
              the Alchemy skill. Every five levels the character has a chance to
              learn the use of a random alchemy ingredient, and the player is
              guaranteed to learn the use of certain ingredients at certain
              levels.
            </p>
            <p>
              If a potion has "No Unique Use" it is not part of any learnable
              recipe and will typically produce a potion of sickness when
              combined with other potions.
            </p>

            <table>
              <tbody>
                <tr>
                  <th>Alchemy Level</th>
                  <th>Potion Uses Learned</th>
                </tr>
                <tr>
                  <td>20</td>
                  <td>Juice, Booze</td>
                </tr>
                <tr>
                  <td>40</td>
                  <td>Acid</td>
                </tr>
                <tr>
                  <td>60</td>
                  <td>Invisibility, Polymorph</td>
                </tr>
                <tr>
                  <td>Every 5th Level</td>
                  <td>
                    A random potion, the selection of which depends on how far
                    along in the dungeon you are.
                    <p>
                      This will only occur if you did not already learn an
                      ingredient as part of leveling up.
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>

            <h2>Potion Recipes</h2>
            <p>
              A potion recipe is the known combination of any two potions and
              the expected result. Once a recipe has been learned, the 'Recipes'
              interface in the Alembic can be used to automatically populate the
              alembic with the requisite potions from the character's inventory.
              When two potions have been placed in the Alembic for brewing, if
              they correspond to a known recipe, the known result will be shown
              in the bottom chamber.
            </p>
            <p>
              To learn a recipe, a character must combine two different potions
              for the first time while brewing. Some recipes will not appear in
              the recipe interface, such as the recipe for a volatile explosion,
              or the recipe for a potion of sickness. Nevertheless, learning
              these combinations will allow the player to preview the result the
              next time those potions are placed in the alembic together.
            </p>
            <p>
              Most recipes involve combining a base potion with a secondary
              potion as depicted in the Table of Brewing Outputs, below. If a
              combination is not listed, or the combination is not discussed in
              "Exceptions" it will typically produce a potion of sickness.
            </p>

            <h2>Recipe Chart (labeled)</h2>
            <img src={AlchemyRecipes} />

            <h2>Additional Recipes</h2>
            <h3>Water (Duplication)</h3>
            <p>
              Potions may be duplicated by combining any potion with water other
              than Acid or Polymorph. Duplication is a chance based action that
              starts at 50% and increases by 10% for every 20 points of Alchemy
              skill. When duplication fails, the potion being duplicated will be
              turned into a bottle of water. In addition, there is a chance to
              retrieve an empty bottle from a failed duplication depending on
              alchemy skill, scaling from 50% at level 0 and 100% at level 100.
            </p>
            <h3>Decanting (Stacking)</h3>
            <p>
              Potions of the same type but different qualities or appearances
              may be stacked by decanting them together. In order to decant two
              potions, simply place two different qualities of the same potion
              in the inputs of the alembic. The result will match whichever type
              is in the left hand input of the Alembic interface. Unlike
              duplication, decanting has a 100% chance to succeed at all skill
              levels.
            </p>
            <h3>Other Brewing Interactions</h3>
            <p>
              Some potions have more complex or specific interactions. These are
              explained in detail below.
            </p>
            <h4>Acid</h4>
            <p>
              Acid is particularly volatile and while it produces some of the
              strongest offensive potions available, it degrades the alembic
              more quickly than standard brewing. Brewing with acid has a 1 in
              10 chance to degrade an Alembic, compared to the 1 in 40 chance of
              a normal brewing action. Furthermore, combining acid with an
              invalid ingredient, such as water or another "Base" use potion,
              will result in an alchemical explosion, which has a 100% chance to
              degrade the condition of your Alembic.
            </p>
            <h4>Potions of Polymorph</h4>
            <p>
              Potions of polymorph can be extremely valuable to a beginning
              alchemist because they are capable of transforming any potion
              (including water) into almost any other potion. The result will
              always be random, and the result will never be a firestorm,
              icestorm, thunderstorm, polymorph potion, or a bottle of water.
              Because they interact with water, potions of polymorph cannot be
              duplicated, however if one learns the recipe for a potion of
              polymorph, they can duplicate the requisite ingredients instead.
            </p>
            <h4>Unstable Potions and Potion of Strength</h4>
            <p>
              Unstable potions are potions created from mixing acid with the
              correct ingredients. There are three different types of unstable
              potion, Potion of Firestrorm, Icestorm, and Thunderstorm. Each
              potion explode into a spiral of magical bolts of related elemental
              typing when they land on a surface or creature. Firestorm will
              destroy a wall it comes in contact with, Icestorm inflicts slow,
              and Thunderstorm deals higher base damage.
            </p>
            <p>
              Given their overall power, these potions can only be found by
              using the Alembic to brew them, never being found in the open
              dungeon, sold by shopkeepers, or even from basic brewing with
              Potions of Polymorph.
            </p>
            <p>
              The Potion of Strength shares similar restrictions to the unstable
              potions, being generally hard to come across outside of alchemy
              and requiring some mixing in order to whip one up inside the
              dungeon. When consumed, it will allow the player to move faster
              and gain +5 Strength and the ability to push boulders at the cost
              of -5 Perception for the duration of the effect.
            </p>
            <h4>Potions of No Unique Use</h4>
            <p>
              Certain potions do not fall into either Base or Secondary
              category, effectively forming their own group of materials.
              Potions of Paralysis, Healing, Extra Healing, the Unstable Potions
              and Potion of Strength comprise this group, causing any potion
              they mix with to create a resulting potion of sickness.
            </p>
            <p>
              Rule-based bases such as water, polymorph and acid will still
              result in their typical behavior, creating duplicates, random
              potions and explosions respectively.
            </p>
          </>,
        ],
      },

      {
        sectionName: "Cooking",
        sectionContent: [
          <>
            <p>
              Cooking is a mechanic in Barony that allows players to consolidate
              different food types into rations using a frypan or cauldron.
              Cooking can also be used to create flavored rations - which grant
              helpful effects - and sludge balls, a type of harmful throwing
              weapon.{" "}
            </p>
            <p>
              Cooking has a chance to level up Alchemy. All cooking actions,
              regardless of skill level or output, have a 20% chance to level
              Alchemy. Creating a ration with less than 40 Alchemy skill has an
              additional 10% chance to level Alchemy.
            </p>

            <h2>Frypan</h2>
            <p>
              The frypan is a crafting item in Barony. It can be used to cook
              rations, flavor them, and craft sludge balls.
            </p>
            <p>
              Additionally, the frypan can be used in the offhand in order to
              block. It grants +2 AC while held.
            </p>
            <p>The frypan is unbreakable and has unlimited uses.</p>

            <h2>Mechanics</h2>
            <p>
              In order to cook with a frypan, the player must interact with it
              in their inventory and select "Cook." This will open the cooking
              interface, in which all cooking takes place. Alternatively, the
              player can open the interface by pressing the interact button
              while defending with the frypan.
            </p>
            <p>
              The cooking interface has three slots: two upper slots, which
              accept ingredients, and one lower slot, which will contain the
              output. Any valid ingredient may be placed in the input slots by
              interacting with them in the inventory while the cooking interface
              is open. The result of the selected ingredients is displayed in
              the output slot. Interacting with the output slot will produce the
              displayed result.
            </p>
            <p>
              The amount of rations obtained from cooking depends on the satiety
              of the ingredients. Players with high Alchemy skill or Perception
              may yield an additional ration.
            </p>
            <p>
              Tins provide three bonus rations when used as an ingredient. They
              can only be used as an ingredient if the player possesses a tin
              opener.
            </p>

            <h3>Fuel</h3>
            <p>
              Every cooking action from a frypan costs 4 torches, unless a
              campfire is nearby. Cooking at a cauldron is free.
            </p>

            <h3>Basic Recipes</h3>
            <table>
              <tr>
                <td>Result</td>
                <td>Ingredient 1</td>
                <td>Ingredient 2</td>
              </tr>

              <tr>
                <td>Slightly-Ages Rations (Perception + Alchemy = 0-79)</td>
                <td>Food</td>
                <td>Different Food</td>
              </tr>

              <tr>
                <td>
                  Fresh Rations (Perception + Alchemy = 80+ or wearing Chef Hat)
                </td>
                <td>Food</td>
                <td>Different Food</td>
              </tr>

              <tr>
                <td>4-16x Grease Balls*</td>
                <td>4x Ration</td>
                <td>Towel</td>
              </tr>

              <tr>
                <td>4x Slop Balls</td>
                <td>4x Ration</td>
                <td>Potion of water</td>
              </tr>
            </table>

            <p>* Greate ball quantity is based on the towel's condition</p>

            <h3>Flavored ration recipes</h3>
            <p>
              Rations can be combined with potions or other ingredients to
              flavor them. When eaten, flavored rations grant a food buff (based
              on their flavor) for +1 minute. This buff's duration stacks from
              eating multiple rations.
            </p>
            <p>When the player vomits, all food-related buffs are lost.</p>
            <p>
              Below is a list of currently known recipes. The efficiency of
              these recipes is influenced by Alchemy skill and Perception.
            </p>

            <table>
              <tr>
                <td>Result</td>
                <td>Ingredient 1</td>
                <td>Ingredient 2</td>
                <td>Effect</td>
              </tr>

              <tr>
                <td>1-6x Hearty Ration</td>
                <td>4x Ration</td>
                <td>Potion of booze / Healing / Strength</td>
                <td>+4 STR, +4 CON</td>
              </tr>

              <tr>
                <td>1-6x Sweet Ration</td>
                <td>4x Ration</td>
                <td>
                  Potion of fruit juice / Restore magic / Cure ailment / Speed
                </td>
                <td>+1 HP Regen, +1 MP Regen</td>
              </tr>

              <tr>
                <td>1-6x Bitter Ration</td>
                <td>4x Ration</td>
                <td>
                  Potion of sickness / Acid / Polymorph / Confusion / Dust ball
                </td>
                <td>+4 CON, +4 PER</td>
              </tr>

              <tr>
                <td>1-6x Sour Ration</td>
                <td>4x Ration</td>
                <td>
                  Potion of extra healing / Invisibility / Levitation /
                  Blindness
                </td>
                <td>+4 INT, +25% PWR</td>
              </tr>

              <tr>
                <td>1-6x Spicy Ration</td>
                <td>4x Ration</td>
                <td>
                  Potion of firestorm / Icestorm / Thunderstorm / Paralysis
                </td>
                <td>+4 STR, +4 DEX</td>
              </tr>

              <tr>
                <td>1-6x Herbal Ration</td>
                <td>4x Ration</td>
                <td>
                  Rose / Marigold / Sweetgrass Sprig / Infected branch bow
                </td>
                <td>+4 CHR, +20% Magic RES</td>
              </tr>
            </table>
          </>,
        ],
      },
    ],
  },

  {
    id: "Tinkering",
    skillSections: [
      {
        sectionName: "Description",
        sectionContent: [
          <p>
            Used to measure your skill in picking locks, disarming traps,
            repairing items, and salvaging scrap metal.
          </p>,
          <p>
            The primary stat of the Tinkering skill is Perception which has a
            number of effects on the character's tinkering abilities, and their
            abilities to command their creations.{" "}
          </p>,
        ],
      },
      {
        sectionName: "Legendary Bonus",
        sectionContent: [
          <p>
            An extra 100 gold or bonus item upon unlocking a chest. Also can
            repair any item via toolkit.
          </p>,
        ],
      },
      {
        sectionName: "Advancement",
        sectionContent: [
          <>
            <p>
              There are many events and activities that grant chances to
              increase tinkering skill. These chances are represented in the
              table below:
            </p>
            <table>
              <caption>Methods of gaining tinkering skill</caption>
              <thead>
                <tr>
                  <th>Event</th>
                  <th>Chance</th>
                  <th>Cap</th>
                  <th>Notes</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Enemy Triggers Bear Trap</td>
                  <td>10%</td>
                  <td>100</td>
                  <td></td>
                </tr>
                <tr>
                  <td>Enemy Killed by Magic Trap</td>
                  <td>20%</td>
                  <td>100</td>
                  <td></td>
                </tr>
                <tr>
                  <td>
                    Killed Enemy was investigating noisemaker (aware of player)
                  </td>
                  <td>20%</td>
                  <td>100</td>
                  <td></td>
                </tr>
                <tr>
                  <td>
                    Killed Enemy was investigating noisemaker (unaware of
                    player)
                  </td>
                  <td>47%</td>
                  <td>100</td>
                  <td>A 20% chance and a 33% chance, both can't succeed</td>
                </tr>
                <tr>
                  <td>Enemy Killed by Sentry</td>
                  <td>10%</td>
                  <td>100</td>
                  <td></td>
                </tr>
                <tr>
                  <td>Unlocking a chest</td>
                  <td>100%</td>
                  <td>60</td>
                  <td>Only once per naturally locked chest</td>
                </tr>
                <tr>
                  <td>Failing to unlock a chest</td>
                  <td>10%</td>
                  <td>60</td>
                  <td>Only on naturally locked chests</td>
                </tr>
                <tr>
                  <td>Unlocking a door</td>
                  <td>100%</td>
                  <td>40</td>
                  <td>Only once per naturally locked door</td>
                </tr>
                <tr>
                  <td>Failing to unlock a door</td>
                  <td>10%</td>
                  <td>40</td>
                  <td>Only on naturally locked doors</td>
                </tr>
                <tr>
                  <td>Unlocking a wall lock</td>
                  <td>100%</td>
                  <td>100?</td>
                  <td>Only once per wall lock</td>
                </tr>
                <tr>
                  <td>Failing to unlock a wall lock</td>
                  <td>10%?</td>
                  <td>100?</td>
                  <td></td>
                </tr>
                <tr>
                  <td>Sabotaging an Automaton (success)</td>
                  <td>33%</td>
                  <td>100</td>
                  <td></td>
                </tr>
                <tr>
                  <td>Sabotaging an Automaton (failure)</td>
                  <td>20%</td>
                  <td>100</td>
                  <td></td>
                </tr>
                <tr>
                  <td>Salvaging item worth 4+ Magic Scrap or 4+ Metal Scrap</td>
                  <td>50%</td>
                  <td>60</td>
                  <td>Eg: A vampire doublet, diamond, Heavy crossbow, etc.</td>
                </tr>
                <tr>
                  <td>Salvaging item worth 2+ Magic Scrap or 2+ Metal Scrap</td>
                  <td>20%</td>
                  <td>60</td>
                  <td>Eg: A steel axe, alembic, ring of conflict, etc.</td>
                </tr>
                <tr>
                  <td>Crafting item costing 5+ Magic Scrapor 5+ Metal Scrap</td>
                  <td>10%</td>
                  <td>100</td>
                  <td>Eg: A dummybot, Lantern, Bear Trap, etc.</td>
                </tr>
                <tr>
                  <td>Crafting item costing 3+ Magic Scrapor 3+ Metal Scrap</td>
                  <td>5%</td>
                  <td>100</td>
                  <td></td>
                </tr>
                <tr>
                  <td>
                    Crafting item costing 0-3 Magic Scrap or 0-3 Metal Scrap
                  </td>
                  <td>10%</td>
                  <td>20</td>
                  <td>Eg: A bottle, glasses, lockpick, etc.</td>
                </tr>
              </tbody>
              <tfoot></tfoot>
            </table>
          </>,
        ],
      },
      {
        sectionName: "Lockpicking",
        sectionContent: [
          <>
            <h2>Lockpicking</h2>
            <p>
              The lockpick is a versatile tool that allows a character to unlock
              doors and chests, disarm traps, and even sabotage enemy Automatons
              if the character has enough skill. Using a lockpick on an object
              has a variable chance to succeed, has a chance to degrade the
              condition of the lockpick, and has a chance to grant tinkering
              skill. Most activities will require multiple failed attempts
              before succeeding, and if the character's skill is low, they may
              require multiple lockpicks as well. The following table describes
              these chances for various activities:
            </p>
            <table>
              <thead>
                <tr>
                  <th>Activity</th>
                  <th>Required Skill</th>
                  <th>Success%</th>
                  <th>Degrade% (on fail)</th>
                  <th>Notes</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Unlock a door</td>
                  <td>0</td>
                  <td>[skill / 2]%</td>
                  <td>0% (20%)</td>
                  <td></td>
                </tr>
                <tr>
                  <td>Unlock a chest</td>
                  <td>0</td>
                  <td>[skill / 2]%</td>
                  <td>0% (20%)</td>
                  <td></td>
                </tr>
                <tr>
                  <td>Disarm a Trap</td>
                  <td>40</td>
                  <td>[skill]%</td>
                  <td>10% (25%)</td>
                  <td>Fires arrow on failure</td>
                </tr>
                <tr>
                  <td>Sabotage an Automaton</td>
                  <td>0 | 20 | 40 | 60</td>
                  <td>0 | 50 | 66 | 100%</td>
                  <td>50%</td>
                  <td></td>
                </tr>
                <tr>
                  <td>All Other</td>
                  <td>0</td>
                  <td>100%</td>
                  <td>0%</td>
                  <td></td>
                </tr>
              </tbody>
              <tfoot></tfoot>
            </table>

            <h3>Lock Health</h3>
            <p>
              In addition to having a flat random chance to be lockpicked,
              chests and doors have a special mechanic that causes the character
              to automatically succeed in after a certain amount of attempts.
              Depending on the character's tinkering skill, each lockpick
              attempt will do "damage" to the mechanism's lock "health". Once
              the total "damage" has reached 20 for doors, or 40 for chests, the
              lock will open. The "damage" a lockpick will do scales as
              described in the table below:
            </p>
            <table>
              <caption>
                Typical number of attempts and used lockpicks for a guaranteed
                unlock by skill
              </caption>
              <thead>
                <tr>
                  <th>Skill Level</th>
                  <th>Damage to Lock</th>
                  <th>Door Attempts needed (# lockpicks)</th>
                  <th>Chest Attempts needed (# lockpicks)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>0-19</td>
                  <td>3</td>
                  <td>7 (2)</td>
                  <td>14 (3)</td>
                </tr>
                <tr>
                  <td>20-59</td>
                  <td>4-5</td>
                  <td>4-5 (1)</td>
                  <td>8-10 (2)</td>
                </tr>
                <tr>
                  <td>60-99</td>
                  <td>6-11</td>
                  <td>2-4 (1)</td>
                  <td>4-7 (1-2)</td>
                </tr>
                <tr>
                  <td>100</td>
                  <td>8-17</td>
                  <td>2-3 (1)</td>
                  <td>3-5 (1)</td>
                </tr>
              </tbody>
              <tfoot></tfoot>
            </table>

            <h3>Sabotage</h3>
            <p>
              Sabotaging an Automaton with the lockpick may only be done from
              behind (180 degree cone). Attempts will yield one of two results:
              The automaton will either overload and explode into a shower of
              metal and magic scrap, or it will become enraged and attack the
              player.
            </p>

            <h3>Bombs</h3>
            <p>
              The target detection properties or functional mode of crafted
              bombs can be modified using the lockpick. For more information,
              see the section below.
            </p>

            <h3>Skeleton Key</h3>
            <p>
              The skeleton key is a rare item that can be found in the dungeons
              of Barony. It is functionally similar to a lockpick, however it
              has a 100% chance to succeed at unlocking chests, doors and wall
              locks but unlocking chests and wall locks for the first time will
              cause it to degrade. Its ability to disarm arrow traps is still
              governed by the same chances as a standard lockpick.
            </p>
            <p>
              The skeleton key cannot be used for other purposes like sabotaging
              Automatons or modifying the functionality of crafted traps.
            </p>
          </>,
        ],
      },

      {
        sectionName: "Tinkering Kit",
        sectionContent: [
          <>
            <p>
              The tinkering kit is a utility item that can be used in the
              character's inventory and wielded in their offhand. While in the
              inventory, the player may interact with the kit's context menu and
              select "Tinker" (the default option). While wielded in the
              off-hand, the player may hold down the shielding/sneak button and
              interact to scrap items under the cursor, or left click to open
              the tinkering menu.
            </p>
            <p>
              The tinkering kit crafting interface has three tabs: Crafting,
              Salvage, and Repair. Every use of the tinkering kit is associated
              with a 5% chance to degrade. On average, an Excellent tinkering
              kit should last about 100 uses. If your tinkering kit breaks, it
              can still be used to repair itself as long as you have enough
              scrap available.
            </p>

            <h3>Salvaging</h3>
            <p>
              Salvaging with a tinkering kit will destroy items in exchange for
              scrap, which is required for crafting. There are two ways to
              salvage an item. The first way is to open the tinkering kit in the
              inventory and select the "salvage" tab, then right click items to
              salvage them. The second way is to wield the tinkering kit in the
              off-hand of the character, and then interact with items in the
              world while holding sielding/sneak.
            </p>
            <p>
              There are two different types of scrap. Metal scrap is the most
              common type and can be salvaged from most armor, weapons, tools,
              and mechanisms. Magic scrap is the rarer of the two, and can be
              salvaged from most magical items. Magic scrap can also be salvaged
              from items that have been blessed or cursed.
            </p>

            <h3>Crafting</h3>
            <p>
              Crafting with a tinkering kit allows a character create useful
              items, or even allies. Every item that can be crafted has both
              skill and material requirements. The skill requirements depend on
              the character's tinkering skill plus their perception score. The
              following table lists which items become available at which levels
            </p>
            <table>
              <caption>
                Craftable items based on tinkering skill plus perception
                score{" "}
              </caption>

              <tr>
                <td>Crafting Output</td>
                <td>
                  <p>Scrap Costs</p>
                  <p>Metal : Magical</p>
                </td>
                <td>Tinkering skill + Perception</td>
                <td>Tinkering Skill Tier</td>
              </tr>

              <tr>
                <td>Beartrap</td>
                <td>12:0</td>
                <td>0</td>
                <td>Novice</td>
              </tr>

              <tr>
                <td>Empty Bottle</td>
                <td>2:2</td>
                <td>0</td>
                <td>Novice</td>
              </tr>

              <tr>
                <td>Glasses</td>
                <td>8:4</td>
                <td>0</td>
                <td>Novice</td>
              </tr>

              <tr>
                <td>Lockpick</td>
                <td>2:0</td>
                <td>0</td>
                <td>Novice</td>
              </tr>

              <tr>
                <td>Noisemaker</td>
                <td>8:1</td>
                <td>0</td>
                <td>Novice</td>
              </tr>

              <tr>
                <td>Dummybot</td>
                <td>8:4</td>
                <td>20</td>
                <td>Basic</td>
              </tr>

              <tr>
                <td>Gyrobot</td>
                <td>16:12</td>
                <td>20</td>
                <td>Basic</td>
              </tr>

              <tr>
                <td>Lantern</td>
                <td>8:4</td>
                <td>20</td>
                <td>Basic</td>
              </tr>

              <tr>
                <td>Freeze Trap</td>
                <td>8:12</td>
                <td>20</td>
                <td>Basic</td>
              </tr>

              <tr>
                <td>Sleep Trap</td>
                <td>4:8</td>
                <td>20</td>
                <td>Basic</td>
              </tr>

              <tr>
                <td>Flame Trap</td>
                <td>8:12</td>
                <td>40</td>
                <td>Skilled</td>
              </tr>

              <tr>
                <td>Teleportation Trap</td>
                <td>4:8</td>
                <td>40</td>
                <td>Skilled</td>
              </tr>

              <tr>
                <td>Sentrybot</td>
                <td>16:8</td>
                <td>40</td>
                <td>Skilled</td>
              </tr>

              <tr>
                <td>Spellbot</td>
                <td>8:16</td>
                <td>60</td>
                <td>Expert</td>
              </tr>

              <tr>
                <td>Tech Goggles</td>
                <td>10:40</td>
                <td>60</td>
                <td>Expert</td>
              </tr>

              <tr>
                <td>Backpack</td>
                <td>20:4</td>
                <td>80</td>
                <td>Master</td>
              </tr>
            </table>

            <h3>Robots</h3>
            <p>
              Robots are crafted companions such as the Sentrybot and Gyrobot.
              Tinkering skill determines what quality of robots can be crafted.
              The quality of a robot determines what commands can be issued and
              which functions are available, as well as influencing damage.
            </p>
            <table>
              <tbody>
                <tr>
                  <th>Robot type</th>
                  <th>Quality</th>
                  <th>Skill required</th>
                  <th>Level</th>
                  <th>Health</th>
                  <th>Armor Class</th>
                  <th>ATK</th>
                  <th>New Functions</th>
                  <th>Notes</th>
                </tr>
                <tr>
                  <td rowSpan={4}>Sentrybot</td>
                  <td>Simple</td>
                  <td>40</td>
                  <td>3</td>
                  <td>50</td>
                  <td>0</td>
                  <td>16</td>
                  <td>Hold Aim</td>
                  <td rowSpan={4}>Deals ranged damage</td>
                </tr>
                <tr>
                  <td>Complex</td>
                  <td>60</td>
                  <td>5</td>
                  <td>75</td>
                  <td>3</td>
                  <td>20</td>
                  <td>Look at(stops sentry from spinning 360)</td>
                </tr>
                <tr>
                  <td>Intricate</td>
                  <td>80</td>
                  <td>10</td>
                  <td>125</td>
                  <td>6</td>
                  <td>24</td>
                  <td>Attack</td>
                </tr>
                <tr>
                  <td>Artisan</td>
                  <td>100</td>
                  <td>15</td>
                  <td>150</td>
                  <td>9</td>
                  <td>28</td>
                  <td>None</td>
                </tr>
                <tr>
                  <td rowSpan={4}>Spellbot</td>
                  <td>Simple</td>
                  <td>60</td>
                  <td>3</td>
                  <td>50</td>
                  <td>0</td>
                  <td>15</td>
                  <td>Hold Aim</td>
                  <td rowSpan={4}>
                    Deals magic damage, quality jumps from complex to Artisan
                  </td>
                </tr>
                <tr>
                  <td>Complex</td>
                  <td>80</td>
                  <td>5</td>
                  <td>75</td>
                  <td>3</td>
                  <td>15</td>
                  <td>Look at(stops sentry from spinning 360)</td>
                </tr>
                <tr>
                  <td>Intricate</td>
                  <td>-</td>
                  <td>10</td>
                  <td>125</td>
                  <td>6</td>
                  <td>15</td>
                  <td>Attack</td>
                </tr>
                <tr>
                  <td>Artisan</td>
                  <td>100</td>
                  <td>15</td>
                  <td>150</td>
                  <td>9</td>
                  <td>30</td>
                  <td>Replaces forcebolt with magic missile</td>
                </tr>
                <tr>
                  <td rowSpan={4}>Dummybot</td>
                  <td>Simple</td>
                  <td>20</td>
                  <td>3</td>
                  <td>50</td>
                  <td>5</td>
                  <td rowSpan={8}>-</td>
                  <td rowSpan={4}>-</td>
                  <td rowSpan={4}>Can train weapon skill up to 20</td>
                </tr>
                <tr>
                  <td>Complex</td>
                  <td>40</td>
                  <td>5</td>
                  <td>100</td>
                  <td>8</td>
                </tr>
                <tr>
                  <td>Intricate</td>
                  <td>60</td>
                  <td>10</td>
                  <td>150</td>
                  <td>10</td>
                </tr>
                <tr>
                  <td>Artisan</td>
                  <td>80</td>
                  <td>15</td>
                  <td>200</td>
                  <td>15</td>
                </tr>
                <tr>
                  <td rowSpan={4}>Gyrobot</td>
                  <td>Simple</td>
                  <td>20</td>
                  <td>1</td>
                  <td>10</td>
                  <td>0</td>
                  <td>Can carry deployed turrets to next level</td>
                  <td rowSpan={4}>
                    Ignored by enemies, boulder can still kill them
                    <p>Can't set up beartraps</p>
                  </td>
                </tr>
                <tr>
                  <td>Complex</td>
                  <td>40</td>
                  <td>5</td>
                  <td>35</td>
                  <td>0</td>
                  <td>
                    Emits light,has a radar that can detect metal/magic
                    scrap,traps and exits
                  </td>
                </tr>
                <tr>
                  <td>Intricate</td>
                  <td>60</td>
                  <td>10</td>
                  <td>60</td>
                  <td>0</td>
                  <td>
                    Gains access to monster radar, can interact with levers +
                    pick up and set up traps
                  </td>
                </tr>
                <tr>
                  <td>Artisan</td>
                  <td>80</td>
                  <td>15</td>
                  <td>85</td>
                  <td>0</td>
                  <td>
                    Gains access to valuable radar, letting you detect high
                    value items
                  </td>
                </tr>
              </tbody>
            </table>

            <h3>Bombs</h3>
            <p>
              Traps, also referred to as Bombs or Charges, are a group of
              explosive items in Barony created through tinkering, used by the
              player by tossing them onto the ground or onto objects where they
              will arm and detonate when an enemy comes close.
            </p>
            <p>
              Traps can be tossed by the player and begin to arm themselves once
              they land on a surface. They also have the added bonus of latching
              onto walls or destructible objects such as furniture, doors or
              chests, making trap set-ups very flexible. Traps ignore other
              traps, so a player can stack many traps onto a single area for
              concentrated bursts of damage to whatever triggers the payload. It
              should be noted, however, that sometimes - cause unknown - not all
              the traps may trigger properly when all stacked in one place,
              leading to wasted traps. Players should take care as to their trap
              placement and if possible spread their traps out slightly to
              prevent this issue.
            </p>
            <p>
              Once an enemy is in close proximity, the trap will detonate,
              releasing its payload in a small area around itself. The effect of
              traps when detonating depends on the type of trap being activated,
              with some dealing damage directly to the target, while others
              inflict status effects which can subdue or deter enemies which set
              them off. Detonation preference can also be changed by using a
              Lockpick.
            </p>
            <h3>Trap Types</h3>
            <p>
              Currently there are four different types of traps that the player
              can craft in Barony, each with a different role as a trap. Some
              traps serve only to deal damage, while others simply disorient or
              impair enough for a player to safely dispatch the threat.
            </p>
            <p>
              Traps which damage entities that are caught in their blast have a
              base damage, as well as having their damage scale in proportion
              with the player’s Perception stat.
            </p>

            <table>
              <tr>
                <td>Trap Type</td>
                <td>Description</td>
              </tr>

              <tr>
                <td>Flame Trap</td>
                <td>
                  Deals 30 damage, increasing damage for every two points of
                  Perception the player has. Inflicts burning to those caught in
                  the blast.
                </td>
              </tr>

              <tr>
                <td>Freeze Trap</td>
                <td>
                  {" "}
                  Deals 25 damage, increasing damage for every four points of
                  Perception the player has. Inflicts slowing to those caught in
                  the blast.
                </td>
              </tr>

              <tr>
                <td>Sleep Trap</td>
                <td>Inflicts sleep to those caught in the blast.</td>
              </tr>

              <tr>
                <td>Teleportation Trap</td>
                <td>
                  Teleports those caught in the blast to a random part of the
                  current floor.
                </td>
              </tr>

              <tr>
                <td>Detonator</td>
                <td>
                  Trap component left behind after a trap has exploded.
                  Functionally inert, used for scraping in order to make more
                  items in tinkering.
                </td>
              </tr>
            </table>

            <h3>Repair</h3>
            <p>
              A character can repair most items with a tinkering kit if they
              have sufficient skill. For the most part, if a character can craft
              an item, they can also repair it. For items that can't be crafted,
              the requirements for repairing them are determined by their scrap
              value, and they must be either weapons or armor. Just like with
              crafting, the skill level for meeting these requirements is your
              tinkering skill plus your perception.
            </p>
          </>,
        ],
      },
    ],
  },
];

/*
{
    id: "",
    skillSections: [
      {
        sectionName: "Description",
        sectionContent: []
      },
      {
        sectionName: "Legendary Bonus",
        sectionContent: []
      },
      {
        sectionName: "Skill Bonus",
        sectionContent: []
      },
      {
        sectionName: "Advancement",
        sectionContent: []
      },

    ]
  },
*/
