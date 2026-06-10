import { Link } from "react-router-dom";
import GridList from "../../components/GridList";

import LeadershipImage from "../../assets/Leadership_Icon.png";
import StealthImage from "../../assets/Stealth_Icon.png";
import TradingImage from "../../assets/Trading_Icon.png";
import BlockingImage from "../../assets/Blocking_Icon.png";
import LoreImage from "../../assets/Lore_Icon.png";
import RangedImage from "../../assets/Ranged_Icon.png";
import TinkeringImage from "../../assets/Tinkering_Icon.png";
import UnarmedImage from "../../assets/Unarmed_Icon.png";
import AlchemyImage from "../../assets/Alchemy_Icon.png";
import SwordsImage from "../../assets/Swords_Icon.png";
import SorceryImage from "../../assets/Sorcery_Icon.png";
import PolearmsImage from "../../assets/Polearms_Icon.png";
import MysticismImage from "../../assets/Mysticism_Icon.png";
import AxesImage from "../../assets/Axes_Icon.png";
import ThaumaImage from "../../assets/Thaumaturgy_Icon.png";
import MacesImage from "../../assets/Maces_Icon.png";

type NavItem = {
  label: string;
  to: string;
  img?: string;
};

function Barony_Skills() {
  const generalSkills: NavItem[] = [
    {
      label: "Lore",
      to: "/Barony/Skills/Lore",
      img: LoreImage,
    },
    {
      label: "Leadership",
      to: "/Barony/Skills/Leadership",
      img: LeadershipImage,
    },
    {
      label: "Trading",
      to: "/Barony/Skills/Trading",
      img: TradingImage,
    },
    {
      label: "Stealth",
      to: "/Barony/Skills/Stealth",
      img: StealthImage,
    },
  ];

  const combatSkills: NavItem[] = [
    {
      label: "Swords",
      to: "/Barony/Skills/Swords",
      img: SwordsImage,
    },
    {
      label: "Axes",
      to: "/Barony/Skills/Axes",
      img: AxesImage,
    },
    {
      label: "Maces",
      to: "/Barony/Skills/Maces",
      img: MacesImage,
    },
    {
      label: "Polearms",
      to: "/Barony/Skills/Polearms",
      img: PolearmsImage,
    },
    {
      label: "Ranged",
      to: "/Barony/Skills/Ranged",
      img: RangedImage,
    },
    {
      label: "Blocking",
      to: "/Barony/Skills/Blocking",
      img: BlockingImage,
    },
    {
      label: "Unarmed",
      to: "/Barony/Skills/Unarmed",
      img: UnarmedImage,
    },
  ];

  const specialSkills: NavItem[] = [
    {
      label: "Sorcery",
      to: "/Barony/Skills/Sorcery",
      img: SorceryImage,
    },
    {
      label: "Mysticism",
      to: "/Barony/Skills/Mysticism",
      img: MysticismImage,
    },
    {
      label: "Thaumaturgy",
      to: "/Barony/Skills/Thaumaturgy",
      img: ThaumaImage,
    },
    {
      label: "Alchemy",
      to: "/Barony/Skills/Alchemy",
      img: AlchemyImage,
    },
    {
      label: "Tinkering",
      to: "/Barony/Skills/Tinkering",
      img: TinkeringImage,
    },
  ];
  return (
    <div className="baronyContainer">
      <div className="barony">
        <h1>Description</h1>
        <p>
          There are currently 16 separate sets of skills that can be mastered,
          each with one or more passive bonuses that gradually increase as the
          skill is leveled. For example, weapon skills make the character deal
          more damage with that weapon type, the Magic and Casting skills make a
          character more adept with casting spells, and the Lore skill lets the
          character appraise items more quickly.{" "}
        </p>
        <br />
        <p>
          Skills are measured from 0-100, and every 20 skill levels the skill
          goes up a tier. Depending on the skill, going up a tier may provide a
          large jump in bonuses. When a skill reaches the Legendary tier (level
          100), it unlocks the legendary bonus, which gives the character a
          powerful ability. Skill levels, and your current skill related bonuses
          can be seen by clicking on the skills button in the character
          sheet.{" "}
        </p>
        <br />
        <p>
          Skills have a chance to increase while performing actions related to
          the Skill. Certain skill bonuses are also affected by your Attribute
          scores, with one point in an Attribute score acting as one level in
          the associated Skill(s). For example, a character with 15 levels of
          Magic and 5 INT can learn new spells as if they were level 20 in
          Magic. This varies from skill to skill, but you can see which bonuses
          are affected by which attributes in the skills view of your character
          sheet.{" "}
        </p>
      </div>

      <div className="baronyGrid">
        <h1>Skills</h1>

        <h2>General Skills</h2>
        <ul>
          <GridList
            items={generalSkills}
            getKey={(item) => item.to}
            renderItem={(item) => (
              <Link className="gridLink" to={item.to}>
                <img src={item.img} loading="lazy" />
                <br></br>
                <b>{item.label}</b>
              </Link>
            )}
          ></GridList>
        </ul>

        <h2>Combat Skills</h2>
        <ul>
          <GridList
            items={combatSkills}
            getKey={(item) => item.to}
            renderItem={(item) => (
              <Link className="gridLink" to={item.to}>
                <img src={item.img} loading="lazy" />
                <br></br>
                <b>{item.label}</b>
              </Link>
            )}
          ></GridList>
        </ul>

        <h2>Special Skills</h2>
        <ul>
          <GridList
            items={specialSkills}
            getKey={(item) => item.to}
            renderItem={(item) => (
              <Link className="gridLink" to={item.to}>
                <img src={item.img} loading="lazy" />
                <br></br>
                <b>{item.label}</b>
              </Link>
            )}
          ></GridList>
        </ul>
      </div>
    </div>
  );
}

export default Barony_Skills;
