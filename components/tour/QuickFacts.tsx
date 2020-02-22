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
import { StartLocation, closestTourDate } from "../home/TourCard";
import SectionTitle from "./SectionTitle";

interface Props {
  startDates: [string];
  difficulty: string;
  people: number;
  rating: number;
}

const useStyles = makeStyles(theme => ({
  QuickFacts: {
    margin: "5rem 0"
  },
  factsContainer: {},
  factItem: {
    display: "flex",
    alignItems: "center",
    marginBottom: "1.5rem",
    "&:last-child": {
      marginBottom: "0"
    }
  },
  icon: {
    marginRight: "1rem",
    "& svg": {
      color: colors.mainBlue,
      width: "2.5rem",
      height: "2.5rem"
    }
  },
  heading: {
    marginRight: "2rem",
    fontSize: "1.6rem",
    fontWeight: "bold"
  },
  info: {
    fontSize: "1.6rem",
    textTransform: "capitalize"
  }
}));

const QuickFacts: React.FC<Props> = ({
  startDates,
  difficulty,
  people,
  rating
}) => {
  const classes = useStyles();

  // const place =
  //   startLocation && startLocation.description ? startLocation.description : "";

  const factItems = (Icon, heading, info) => (
    <div className={classes.factItem}>
      <div className={classes.icon}>
        <Icon />
      </div>
      <div className={classes.heading}>{heading}</div>
      <div className={classes.info}>{info}</div>
    </div>
  );

  return (
    <div className={classes.QuickFacts}>
      <div className={classes.factsContainer}>
        <SectionTitle title="QUICK FACTS" />
        {factItems(TimeIcon, "NEXT DATE", closestTourDate(startDates))}
        {factItems(FitnessIcon, "DIFFICULTY", difficulty)}
        {factItems(
          PeopleIcon,
          "PARTICIPANTS",
          `${people} ${people === 1 ? "person" : "people"}`
        )}
        {factItems(StarIcon, "RATING", `${rating} / 5`)}
      </div>
    </div>
  );
};

export default QuickFacts;

/*
stopped at building fact items...

NEXT DATE
June 2021
DIFFICULTY
Medium
PARTICIPANTS
15 People
RATING
4.8 / 5
*/
