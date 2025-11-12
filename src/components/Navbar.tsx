import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
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
    <Link to={variable.path} className="navButton">
      {variable.name}
    </Link>
  ));

  const routesObjects = routeVariables.map((variable) => (
    <Route path={variable.path} element={variable.component} />
  ));

  return (
    <>
      <BrowserRouter>
        <nav className="navbar">
          Logo
          {browserRouterObjects}
        </nav>

        <Routes>{routesObjects}</Routes>
      </BrowserRouter>
    </>
  );
}

export default Navbar;
