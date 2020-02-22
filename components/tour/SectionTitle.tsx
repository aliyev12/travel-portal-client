import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import TimeIcon from "@material-ui/icons/AccessTimeRounded";
import PlaceIcon from "@material-ui/icons/PlaceRounded";
import getHost from "../utils/getHost";
import { colors } from "../utils/styles";
import { StartLocation } from "../home/TourCard";

interface Props {
  title: string;
}

const useStyles = makeStyles(theme => ({
  SectionTitle: {
    marginBottom: "3rem",
    textAlign: "center"
  }
}));

const SectionTitle: React.FC<Props> = ({ title }) => {
  const classes = useStyles();

  return (
    <Typography variant="h3" gutterBottom className={classes.SectionTitle}>
      {title}
    </Typography>
  );
};

export default SectionTitle;
