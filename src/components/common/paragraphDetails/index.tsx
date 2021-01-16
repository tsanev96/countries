import { Typography } from "@material-ui/core";
import React, { FC } from "react";
import useParapraphDetailsStyles from "./styles";

interface ParagraphDetailsProps {
  title: string;
  text: string;
}

const ParagraphDetails: FC<ParagraphDetailsProps> = ({ title, text }) => {
  const { root } = useParapraphDetailsStyles();
  return (
    // TODO - needs to be renamed
    <Typography className={root}>
      <Typography component="span">{title}:</Typography> {text}
    </Typography>
  );
};

export default ParagraphDetails;
