import { Normalize } from "styled-normalize";
import { Routes } from "./routes";
import { GlobalStyles } from "./global-styles";
const App = () => {
  return (
    <>
      <Normalize />
      <GlobalStyles />
      <Routes />
    </>
  );
}

export default App