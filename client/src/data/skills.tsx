import type { ReactNode } from "react";

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
