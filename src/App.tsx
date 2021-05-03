import { Normalize } from "styled-normalize";
import { Routes } from "./routes";
import { GlobalStyles } from "./global-styles";
import { hot } from "react-hot-loader";
export const App = hot(module)(() => (
  <>
    <Normalize />
    <GlobalStyles />
    <Routes />
  </>
));

// const App = () => {
//   return (
//     <>
//       <Normalize />
//       <GlobalStyles />
//       <Routes />
//     </>
//   );
// }

// export default App