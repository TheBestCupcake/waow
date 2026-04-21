import GridTable from "../../components/GridTable";
import { Link } from "react-router-dom";

type NavItem = {
  label: string;
  to: string;
};

function Barony_Home() {
  const items: NavItem[] = [
    { label: "Races", to: "/Barony/Races" },
    { label: "Classes", to: "/Barony/Classes" },
    { label: "Stats", to: "/Barony/Stats" },
    { label: "Items", to: "/Barony/Items" },
    { label: "Monsters", to: "/Barony/Monsters" },
    { label: "Levels", to: "/Barony/Levels" },
  ];

  return (
    <div>
      <ul className="baronyGrid">
        <GridTable
          items={items}
          getKey={(item) => item.to}
          renderItem={(item) => <Link to={item.to}>{item.label}</Link>}
        ></GridTable>
      </ul>
    </div>
  );
}

export default Barony_Home;
