import { Route, Routes } from "react-router-dom";

import Anime from "../pages/Anime";
import VideoDisplay from "../pages/VideoDisplay";

import Games from "../pages/Games";
import Home from "../pages/Home";
import Barony_Home from "../pages/barony/Barony_Home";

let routeVariables = [
  { path: "/", name: "Home", component: <Home /> },

  { path: "/Anime", name: "Anime", component: <Anime /> },
  //Subpaths for Anime.
  { path: "/Anime/:name", name: ":name", component: <VideoDisplay /> },

  { path: "/Games", name: "Games", component: <Games /> },

  { path: "/Barony", name: "Barony", component: <Barony_Home /> },
];

function RoutesProvider() {
  const routesObjects = routeVariables.map((variable) => (
    <Route
      key={variable.path}
      path={variable.path}
      element={variable.component}
    />
  ));

  return <Routes>{routesObjects}</Routes>;
}

export default RoutesProvider;
