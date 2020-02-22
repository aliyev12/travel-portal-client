import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import TimeIcon from "@material-ui/icons/AccessTimeRounded";
import FitnessIcon from "@material-ui/icons/FitnessCenterRounded";
import PeopleIcon from "@material-ui/icons/PeopleOutlineRounded";
import StarIcon from "@material-ui/icons/StarBorderRounded";
import PlaceIcon from "@material-ui/icons/PlaceRounded";
import getHost from "../utils/getHost";
import { colors } from "../utils/styles";
import { parseRole, imgUrl } from "../utils/helpers";
import { StartLocation, closestTourDate } from "../home/TourCard";
import SectionTitle from "./SectionTitle";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";

export interface Props {
  name: string;
  description: string;
}

const useStyles = makeStyles(theme => ({
  About: {
    width: "50%",
    margin: "5rem 0",
    display: "flex",
    alignItems: "center"
  },
  factsContainer: {
    padding: "5rem 10rem"
  },
  desc: {
    lineHeight: "2",
    fontSize: "1.6rem"
  }
}));

const About: React.FC<Props> = ({ name, description }) => {
  const classes = useStyles();

  return (
    <div className={classes.About}>
      <div className={classes.factsContainer}>
        <SectionTitle title={`ABOUT ${name.toUpperCase()}`} />
        <Typography variant="body1" gutterBottom className={classes.desc}>
          {description}
        </Typography>
      </div>
    </div>
  );
};

export default About;
