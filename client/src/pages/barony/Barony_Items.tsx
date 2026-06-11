import { Link } from "react-router-dom";
import GridList from "../../components/GridList";

import Weapons from "../../assets/Weapons_Icon.webp";
import Armor from "../../assets/Armor_Icon.webp";
import Rings from "../../assets/Rings_Icon.webp";
import Amulets from "../../assets/Amulets_Icon.webp";
import Spellbooks from "../../assets/Spellbooks_Icon.webp";
import Magic_Staffs from "../../assets/Magic_Staffs_Icon.webp";
import Scrolls from "../../assets/Scrolls_Icon.webp";
import Potions from "../../assets/Potions_Icon.webp";
import Books from "../../assets/Books_Icon.webp";
import Food from "../../assets/Food_Icon.webp";
import Equipment from "../../assets/Equipment_Icon.webp";
import Gems from "../../assets/Gems_Icon.webp";

type NavItem = {
  label: string;
  to: string;
  img?: string;
};

function Barony_Items() {
  const items: NavItem[] = [
    {
      label: "Weapons",
      to: "/Barony/Items/Weapons",
      img: Weapons,
    },
    {
      label: "Armor",
      to: "/Barony/Items/Armor",
      img: Armor,
    },
    {
      label: "Rings",
      to: "/Barony/Items/Rings",
      img: Rings,
    },
    {
      label: "Amulets",
      to: "/Barony/Items/Amulets",
      img: Amulets,
    },
    {
      label: "Spellbooks",
      to: "/Barony/Items/Spellbooks",
      img: Spellbooks,
    },
    {
      label: "Magic Staffs",
      to: "/Barony/Items/Magic_Staffs",
      img: Magic_Staffs,
    },
    {
      label: "Scrolls",
      to: "/Barony/Items/Scrolls",
      img: Scrolls,
    },
    {
      label: "Potions",
      to: "/Barony/Items/Potions",
      img: Potions,
    },
    {
      label: "Books",
      to: "/Barony/Items/Books",
      img: Books,
    },
    {
      label: "Food",
      to: "/Barony/Items/Food",
      img: Food,
    },
    {
      label: "Equipment",
      to: "/Barony/Items/Equipment",
      img: Equipment,
    },
    {
      label: "Gems",
      to: "/Barony/Items/Gems",
      img: Gems,
    },
  ];

  return (
    <div className="baronyContainer">
      <div className="barony">
        <h1>Items</h1>
        <p>
          Items in Barony have a variety of uses for the player, and can be
          looted from chests, dropped from breakable objects, found lying in the
          world, taken off slain foes, or purchased from Shopkeepers. Each class
          has a unique set of starting items.{" "}
        </p>
        <br></br>
        <p>
          Any item found in Barony, other than those your character starts with,
          torches taken from the walls or campfires, or most items bought in
          shops, will be unidentified. To identify an item and see its stats, it
          must be appraised.{" "}
        </p>
        <br></br>
        <p>
          Items will be blessed, uncursed, or cursed (denoted +1, 0, -1
          respectively) which determines the power of its stats. For most races,
          if the item is cursed, it cannot be removed by normal means once
          equipped. Succubus and Incubus are the opposite, in that they can
          remove cursed items but cannot remove blessed items. Automatons can
          remove any items regardless of its blessed or cursed status.{" "}
        </p>
        <br></br>
        <p>
          Items will also have a quality, which decreases over time. Frequent
          use of an item will eventually cause it to break, and become useless.
          You can strengthen the durability of your equipped items by using a
          scroll of repair or a tinkering kit with high enough tinkering skill.
          Having a high skill will increase an items durability, making it last
          longer.{" "}
        </p>
      </div>

      <div className="baronyGrid">
        <h1>Item Types</h1>
        <ul>
          <GridList
            items={items}
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

export default Barony_Items;
