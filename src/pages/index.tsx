import { ItemScreen } from "./ItemScreen";
import { HomeScreen } from "./HomeScreen";
// import { Link } from "react-router-dom";

export const routes = () => [
  {
    path: "/",
    exact: true,
    component: HomeScreen,
  },
  {
    path: "/item",
    exact: true,
    component: ItemScreen,
  },
  // {
  //   component: HomePage,
  // },
];
