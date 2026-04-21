import GridTable from "../../components/GridTable";
import { Link } from "react-router-dom";

type NavItem = {
  label: string;
  to: string;
};

function Barony_Home() {
  const items: NavItem[] = [
    { label: "Races", to: "/Races" },
    { label: "Classes", to: "/Classes" },
    { label: "Stats", to: "/Stats" },
    { label: "Items", to: "/Items" },
    { label: "Monsters", to: "/Monsters" },
    { label: "Levels", to: "/Levels" },
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
