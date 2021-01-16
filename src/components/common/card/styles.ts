import { makeStyles } from "@material-ui/core";

const useCardBoxStyles = makeStyles(() => ({
  root: { width: 250, border: "1px solid #000" },
  media: { height: 140, objectFit: "contain" },
  details: { "&>*": { "&>span": { fontWeight: "bold" } } },
}));

export default useCardBoxStyles;
