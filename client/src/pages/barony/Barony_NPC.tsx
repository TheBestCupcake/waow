import { Link } from "react-router-dom";

type NavItem = {
  label: string;
  to: string;
  img?: string;
};

function Barony_NPC() {
  return (
    <div className="baronyContainer">
      <div className="baronyHeader">
        <h1>NPC</h1>
      </div>

      <div className="barony"></div>

      <div className="baronyGrid"></div>
    </div>
  );
}

export default Barony_NPC;
