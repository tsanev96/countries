import React from "react";
import { ThemeProvider } from "@material-ui/core";
import Header from "./components/header/header";
import { rootTheme } from "./styles/mui/rootTheme";
import CardBox from "./components/common/card";

const App = () => {
  return (
    <ThemeProvider theme={rootTheme}>
      <Header />
      <CardBox />
    </ThemeProvider>
  );
};

export default App;
