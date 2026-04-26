import { Link } from "react-router-dom";
import GridTable from "../../components/GridTable";

import BarbImage from "../../assets/Barbarian_Icon.png";
import WarriorImage from "../../assets/Warrior_Icon.png";
import HealerImage from "../../assets/Healer_Icon.png";
import RogueImage from "../../assets/Rogue_Icon.png";
import WandererImage from "../../assets/Wanderer_Icon.png";
import ClericImage from "../../assets/Cleric_Icon.png";
import MerchantImage from "../../assets/Merchant_Icon.png";
import WizardImage from "../../assets/Wizard_Icon.png";
import ArcanistImage from "../../assets/Arcanist_Icon.png";
import JokerImage from "../../assets/Joker_Icon.png";
import SextonImage from "../../assets/Sexton_Icon.png";
import NinjaImage from "../../assets/Ninja_Icon.png";
import MonkImage from "../../assets/Monk_Icon.png";
import ConjurerImage from "../../assets/Conjurer_Icon.png";
import AccursedImage from "../../assets/Accursed_Icon.png";
import MesmerImage from "../../assets/Mesmer_Icon.png";
import BrewerImage from "../../assets/Brewer_Icon.png";
import MechaImage from "../../assets/Mechanist_Icon.png";
import PunisherImage from "../../assets/Punisher_Icon.png";
import ShamanImage from "../../assets/Shaman_Icon.png";
import HunterImage from "../../assets/Hunter_Icon.png";
import BardImage from "../../assets/Bard_Icon.png";
import SapperImage from "../../assets/Sapper_Icon.png";
import ScionImage from "../../assets/Scion_Icon.png";
import HermitImage from "../../assets/Hermit_Icon.png";
import PaladinImage from "../../assets/Paladin_Icon.png";

type NavItem = {
  label: string;
  to: string;
  img?: string;
};

function Barony_Classes() {
  const items: NavItem[] = [
    { label: "Barbarian", to: "/Barony/Classes/Barbarian", img: BarbImage },
    { label: "Warrior", to: "/Barony/Classes/Warrior", img: WarriorImage },
    { label: "Healer", to: "/Barony/Classes/Healer", img: HealerImage },
    { label: "Rogue", to: "/Barony/Classes/Rogue", img: RogueImage },
    { label: "Wanderer", to: "/Barony/Classes/Wanderer", img: WandererImage },
    { label: "Cleric", to: "/Barony/Classes/Cleric", img: ClericImage },
    { label: "Merchant", to: "/Barony/Classes/Merchant", img: MerchantImage },
    { label: "Wizard", to: "/Barony/Classes/Wizard", img: WizardImage },
    { label: "Arcanist", to: "/Barony/Classes/Arcanist", img: ArcanistImage },
    { label: "Joker", to: "/Barony/Classes/Joker", img: JokerImage },
    { label: "Sexton", to: "/Barony/Classes/Sexton", img: SextonImage },
    { label: "Ninja", to: "/Barony/Classes/Ninja", img: NinjaImage },
    { label: "Monk", to: "/Barony/Classes/Monk", img: MonkImage },
    { label: "Conjurer", to: "/Barony/Classes/Conjurer", img: ConjurerImage },
    { label: "Accursed", to: "/Barony/Classes/Accursed", img: AccursedImage },
    { label: "Mesmer", to: "/Barony/Classes/Mesmer", img: MesmerImage },
    { label: "Brewer", to: "/Barony/Classes/Brewer", img: BrewerImage },
    { label: "Mechanist", to: "/Barony/Classes/Mechanist", img: MechaImage },
    { label: "Punisher", to: "/Barony/Classes/Punisher", img: PunisherImage },
    { label: "Shaman", to: "/Barony/Classes/Shaman", img: ShamanImage },
    { label: "Hunter", to: "/Barony/Classes/Hunter", img: HunterImage },
    { label: "Bard", to: "/Barony/Classes/Bard", img: BardImage },
    { label: "Sapper", to: "/Barony/Classes/Sapper", img: SapperImage },
    { label: "Scion", to: "/Barony/Classes/Scion", img: ScionImage },
    { label: "Hermit", to: "/Barony/Classes/Hermit", img: HermitImage },
    { label: "Paladin", to: "/Barony/Classes/Paladin", img: PaladinImage },
  ];

  return (
    <div className="baronyContainer">
      <div className="baronyHeader">
        <h1>Classes</h1>
      </div>

      <div className="barony">
        <h1>Description</h1>
        <p>
          There are 26 different class archetypes available in Barony, each of
          which are unique in their own ways. Each has preset Stats, Skills and
          inventory of Items to help their quest through the dungeon at the
          beginning of the game. A general difficulty rating is presented for
          each class in addition to a small blurb of flavor text that helps
          explain what the class is proficient at.
        </p>
      </div>

      <div className="baronyGrid">
        <h1>List of Classes</h1>
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
    </div>
  );
}

export default Barony_Classes;
