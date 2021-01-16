import React, { FC } from "react";
import {
  AppBar,
  Button,
  Grid,
  IconButton,
  Toolbar,
  Typography,
} from "@material-ui/core";
import DarkModeIcon from "@material-ui/icons/Brightness4";
import useHeaderStyles from "./styles";

const Header: FC = () => {
  const { root, title } = useHeaderStyles();

  return (
    <div>
      <AppBar className={root} position="static">
        <Toolbar>
          <Grid container justify="space-between" alignItems="center">
            <Typography className={title} variant="h6">
              Where in the world?
            </Typography>
            <IconButton edge="start" color="inherit" aria-label="menu">
              <DarkModeIcon />
            </IconButton>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
