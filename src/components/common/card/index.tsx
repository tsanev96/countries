import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@material-ui/core";
import React, { FC } from "react";
import ParagraphDetails from "../paragraphDetails";
import useCardBoxStyles from "./styles";

const CardBox: FC = () => {
  const { root, media, details } = useCardBoxStyles();

  return (
    <Card className={root}>
      <CardActionArea>
        <CardMedia
          className={media}
          image="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Flag_of_Bulgaria.svg/1200px-Flag_of_Bulgaria.svg.png"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h6">
            Bulgaria
          </Typography>
          <Grid className={details} container direction="column">
            <ParagraphDetails title="Population" text="7 000 000" />
            <ParagraphDetails title="Region" text="Europe" />
            <ParagraphDetails title="Capital" text="Sofia" />
          </Grid>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CardBox;
