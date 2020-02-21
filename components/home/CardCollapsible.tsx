import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import CardContent from "@material-ui/core/CardContent";
import Collapse from "@material-ui/core/Collapse";
import Typography from "@material-ui/core/Typography";
import { colors } from "../utils/styles";

interface Props {
  expanded: boolean;
  description: string;
}

const useStyles = makeStyles(theme => ({
  // root: {
  //   maxWidth: 345
  // },
}));

const TourCard: React.FC<Props> = ({ expanded, description }) => {
  const classes = useStyles();

  return (
    <Collapse in={expanded} timeout="auto" unmountOnExit>
      <CardContent>
        <Typography paragraph>{description}</Typography>
      </CardContent>
    </Collapse>
  );
};

export default TourCard;
