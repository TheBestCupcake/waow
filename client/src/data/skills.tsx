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
];
