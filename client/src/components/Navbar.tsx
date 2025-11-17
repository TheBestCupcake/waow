import { Link } from "react-router-dom";
import Anime from "../pages/Anime";
import Games from "../pages/Games";
import Home from "../pages/Home";

let routeVariables = [
  { path: "/", name: "Home", component: <Home /> },
  { path: "/Anime", name: "Anime", component: <Anime /> },
  { path: "/Games", name: "Games", component: <Games /> },
];

function Navbar() {
  const browserRouterObjects = routeVariables.map((variable) => (
    <Link key={variable.path} to={variable.path} className="navButton">
      {variable.name}
    </Link>
  ));

  return (
    <>
      <nav className="navbar">
        Logo
        {browserRouterObjects}
      </nav>
    </>
  );
}

export default Navbar;
