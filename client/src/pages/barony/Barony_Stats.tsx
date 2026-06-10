import CategoryTable from "../../components/CategoryTable";

type TableData = {
  content: string[];
};

type TableRow = {
  rowHeader: string;
  rowData: TableData[];
};

function Barony_Stats() {
  const statsTableData: TableRow[] = [
    {
      rowHeader: "Name",
      rowData: [
        { content: ["Description from Character Attributes Book"] },
        { content: ["Relatred Skills"] },
        { content: ["Other Effects"] },
      ],
    },
    {
      rowHeader: "Strength (STR)",
      rowData: [
        {
          content: [
            "A scale to represent a person's might. Persons of higher strength hit harder and may carry more equipment without being fatigued.",
          ],
        },
        { content: ["Sword, Mace, Axe, Polearm, Unarmed"] },
        {
          content: [
            "Increases melee weapon damage by +5.5% per point of strength.",
            "Improves movement speed when carrying heavy weights.",
            "Grants +1 max HP per point gained.",
            "Slightly improves HP regeneration.",
          ],
        },
      ],
    },
    {
      rowHeader: "Dexterity (DEX)",
      rowData: [
        {
          content: [
            "A scale to represent a person's quickness. Persons of higher dexterity may both move quicker and be surer in their strikes, while also being more capable of dodging incoming hits.",
          ],
        },
        { content: ["Ranged, Stealth"] },
        {
          content: [
            "Increases ranged weapon damage by +5.5% per point of dexterity.",
            "Improves movement speed, especially when carrying little weight.",
            "Improves spell casting speed.",
            "Grants +2 max HP per point gained.",
            "Significantly improves HP regeneration.",
          ],
        },
      ],
    },
    {
      rowHeader: "Constitution (CON)",
      rowData: [
        {
          content: [
            "A scale to represent a person's fortitude. Persons of higher constitution endure pains and hardships better than those with the lesser, and may also be quicker to recover from ailments.",
          ],
        },
        { content: ["Blocking, Thaumaturgy"] },
        {
          content: [
            "Increases natural armor class by 1 per level.",
            "Reduces duration of debuffs from some sources.",
            "Improves the effect of healing potions by 2 per point of constitution.",
            "Improves the effect of extra healing potions by 4 per point of constitution.",
            "Increases Thaumaturgy spell power by 1% per point of constitution.",
            "Grants +2 max HP per point gained.",
          ],
        },
      ],
    },
    {
      rowHeader: "Intelligence (INT)",
      rowData: [
        {
          content: [
            "A scale to represent a person's wits. Persons of higher intelligence can deduce and execute our mystic and magical methods better than those with a lesser intelligence.",
          ],
        },
        { content: ["Sorcery, Mysticism, Thaumaturgy"] },
        {
          content: [
            "Increases Sorcery spell power by 2% per point of intelligence.",
            "Increases Mysticism/Thaumaturgy spell power by 1% per point of intelligence.",
            "Increases natural magic resistance by 1% per level.",
            "Improves the effectiveness of potions of restore magic by 2 per point of intelligence.",
            "This effect caps at 15 intelligence.",
            "Grants +2 max MP per point gained.",
          ],
        },
      ],
    },
    {
      rowHeader: "Perception (PER)",
      rowData: [
        {
          content: [
            "A scale to represent a person's senses. Persons of higher perception may pierce the night's shadows better than those with lesser perception.",
          ],
        },
        { content: ["Lore, Tinkering, Alchemy"] },
        {
          content: [
            "Each point of perception increases the chance to fire a piercing arrow by +1%.",
            "+1% pierce damage for every point of perception.",
            "Improves touch spell distance.",
            "Subtly improves vision in dark areas.",
            "Boosts Lore and Tinkering skill by 1 per point of perception. Improves explosive trap damage.",
            "Grants +2 max MP per point gained.",
            "Slightly improves MP regeneration.",
          ],
        },
      ],
    },
    {
      rowHeader: "Charisma (CHR)",
      rowData: [
        {
          content: [
            "A scale to represent a person's charm. Persons of higher charisma may have better luck in the coercion of others, particularly in trade and in the battlefield.",
          ],
        },
        { content: ["Leadership, Trading, Mysticism"] },
        {
          content: [
            "Improves HP/MP restore on level up and floor descent.",
            "Improves sell prices while trading.",
            "In conjunction with trading skill, allows the player to access a shop's private selection.",
            "Increases Mysticism spell power by 1% per point of charisma.",
            "Boosts Leadership skill by 1 per point of charisma.",
            "Improves success rate of Charm Monster spell.",
            "Grants +1 max MP per point gained.",
            "Significantly improves MP regeneration.",
          ],
        },
      ],
    },
  ];

  return (
    <div className="baronyContainer">
      <div className="baronyHeader">
        <h1>Stats</h1>
      </div>

      <div className="barony">
        <h1>Description</h1>
        <p>
          When compared to skills, Stats are much more generalized than the
          skills accumulated throughout the dungeon, allowing for general
          archetypes to be enhanced by the bonuses of stats, while a more
          specialized character can rely on the more potent benefits of skill
          mastery.{" "}
        </p>

        <h2>Gaining Stats</h2>
        <p>
          Whenever a character levels up, 3 ability scores are permanently
          increased. The allocation of those points is chosen in the following
          way:{" "}
        </p>
        <br />
        <p>The first point gets chosen randomly from all 6 stats. </p>
        <br />
        <p>
          The second point is chosen randomly but weighted with each classes
          stat weights. It cannot increase the same score as the first
          point.{" "}
        </p>
        <br />
        <p>
          The third point is chosen randomly in the same way as the second. It
          cannot increase any score that has already been increased so far.{" "}
        </p>
        <br />
        <p>
          The final point is a bonus point. If the character trained a skill
          that uses one of the three ability scores that were increased this
          level, they have a 1 in 5 chance of gaining an extra point in that
          ability score.{" "}
        </p>
      </div>

      <div className="baronyGrid">
        <h1>List of Stat Types</h1>
        <CategoryTable
          data={statsTableData}
          renderItem={(item) =>
            item.content.map((contentRow) => <p>{contentRow}</p>)
          }
        ></CategoryTable>
      </div>
    </div>
  );
}

export default Barony_Stats;
