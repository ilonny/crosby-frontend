export const HomePage = () => {
  return <p>Home page</p>
}

export const routes = () => [
  {
    path: "/",
    exact: true,
    component: HomePage,
  },
];
