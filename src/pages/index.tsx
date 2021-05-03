import { ItemScreen } from "./ItemScreen";
import { Link } from "react-router-dom";
export const HomePage = () => {
  return (
    <div>
      <p>Home page</p>
      <Link to={'/item'}>go to item</Link>
    </div>
  )
}

export const routes = () => [
  {
    path: "/",
    exact: true,
    component: HomePage,
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
