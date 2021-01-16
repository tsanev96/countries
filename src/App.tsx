import { ThemeProvider } from "@material-ui/core";
import React from "react";
import Header from "./components/header/header";
import { rootTheme } from "./styles/mui/rootTheme";

const App = () => {
  return (
    <ThemeProvider theme={rootTheme}>
      <Header />
    </ThemeProvider>
  );
};

export default App;
