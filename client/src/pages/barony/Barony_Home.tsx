import GridTable from "../../components/GridTable";
import { Link } from "react-router-dom";

import ClassImage from "../../assets/Warrior_Icon.png";
import RaceImage from "../../assets/Race_Icons.png";
import ItemImage from "../../assets/Scroll_Icon.png";
import StatIcon from "../../assets/Perception_Icon.png";
import MonsterIcon from "../../assets/Skeleton_Male_Icon.png";
import LevelIcon from "../../assets/Magic_Mapping_Icon.png";
import SkillIcon from "../../assets/Stealth_Icon.png";

type NavItem = {
  label: string;
  to: string;
  img?: string;
};

function Barony_Home() {
  const items: NavItem[] = [
    {
      label: "Races",
      to: "/Barony/Races",
      img: RaceImage,
    },
    {
      label: "Classes",
      to: "/Barony/Classes",
      img: ClassImage,
    },
    { label: "Stats", to: "/Barony/Stats", img: StatIcon },
    {
      label: "Items",
      to: "/Barony/Items",
      img: ItemImage,
    },
    { label: "Monsters", to: "/Barony/Monsters", img: MonsterIcon },
    { label: "Levels", to: "/Barony/Levels", img: LevelIcon },

    { label: "Skills", to: "/Barony/Skills", img: SkillIcon },
  ];

  return (
    <div className="baronyContainer">
      <div className="baronyWelcome">
        <h1>Welcome to the Barony Wiki</h1>
      </div>

      <div className="barony">
        <h1>About Barony</h1>
        <p>
          Barony is the premier first-person roguelike with cooperative play!
          Adventure alone, or gather a party with iconic and unusual RPG classes
          to face off against the brutal dungeons. Test your resourcefulness,
          wits, and friendships, on your quest to lift the evil lich's
          curse!{" "}
        </p>
      </div>

      <div className="baronyGrid">
        <h1>Links</h1>
        <ul>
          <GridTable
            items={items}
            getKey={(item) => item.to}
            renderItem={(item) => (
              <Link className="gridLink" to={item.to}>
                <img src={item.img} loading="lazy" width={54} height={54} />
                <br></br>
                <b>{item.label}</b>
              </Link>
            )}
          ></GridTable>
        </ul>
      </div>

      <div className="baronyFooter">
        <h1>Footer</h1>
      </div>
    </div>
  );
}

export default Barony_Home;
