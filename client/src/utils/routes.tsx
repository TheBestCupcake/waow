import { Route, Routes } from "react-router-dom";

import Anime from "../pages/Anime";
import VideoDisplay from "../pages/VideoDisplay";

import Games from "../pages/Games";
import Home from "../pages/Home";
import Barony_Home from "../pages/barony/Barony_Home";
import Barony_Races from "../pages/barony/Barony_Races";
import Barony_Classes from "../pages/barony/Barony_Classes";
import Barony_Class from "../pages/barony/Barony_Class";
import Barony_Race from "../pages/barony/Barony_Race";
import Barony_NPCs from "../pages/barony/Barony_NPCs";
import Barony_NPC from "../pages/barony/Barony_NPC";
import Barony_Stats from "../pages/barony/Barony_Stats";
import Barony_Skills from "../pages/barony/Barony_Skills";
import Barony_Skill from "../pages/barony/Barony_Skill";

let routeVariables = [
  { path: "/", name: "Home", component: <Home /> },

  { path: "/Anime", name: "Anime", component: <Anime /> },
  //Subpaths for Anime.
  { path: "/Anime/:name", name: ":name", component: <VideoDisplay /> },

  { path: "/Games", name: "Games", component: <Games /> },

  { path: "/Barony", name: "Barony", component: <Barony_Home /> },
  //Subpaths for Barony.
  {
    path: "/Barony/Races",
    name: "Barony Races",
    component: <Barony_Races />,
  },

  {
    path: "/Barony/Races/:race",
    name: ":race",
    component: <Barony_Race />,
  },

  {
    path: "/Barony/Classes",
    name: "Barony Classes",
    component: <Barony_Classes />,
  },

  {
    path: "/Barony/Classes/:class",
    name: ":class",
    component: <Barony_Class />,
  },

  {
    path: "/Barony/NPCs",
    name: "Barony NPCs",
    component: <Barony_NPCs />,
  },

  {
    path: "/Barony/NPCs/:NPC",
    name: ":NPC",
    component: <Barony_NPC />,
  },

  {
    path: "/Barony/Stats",
    name: "Barony Stats",
    component: <Barony_Stats />,
  },

  {
    path: "/Barony/Skills",
    name: "Barony Skills",
    component: <Barony_Skills />,
  },
  {
    path: "/Barony/Skills/:skill",
    name: ":skill",
    component: <Barony_Skill />,
  },
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
