import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import FitnessIcon from "@material-ui/icons/FitnessCenterRounded";
import Typography from "@material-ui/core/Typography";
import { colors } from "../utils/styles";

interface Props {
  difficulty: string;
  duration: number;
}

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    marginBottom: "1rem"
  },
  bells: {
    display: "flex",
    transform: "translateY(-2px)",
    "& svg": {
      color: colors.mainBlue,
      width: "1.5rem",
      height: "1.5rem"
    }
  },
  difficultyTitle: {
    textTransform: "uppercase",
    fontWeight: 700,
    marginRight: "1rem"
  }
}));

const Difficulty: React.FC<Props> = ({ difficulty, duration }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography component="legend" className={classes.difficultyTitle}>
        {difficulty === "medium" ? "medium-difficult" : difficulty} {duration}
        -day-trip
      </Typography>
      <div className={classes.bells}>
        {Array.from({
          length: difficulty === "easy" ? 1 : difficulty === "medium" ? 2 : 3
        }).map((_, i) => (
          <FitnessIcon fontSize="inherit" key={`bell-${i}`} />
        ))}
      </div>
    </div>
  );
};

export default Difficulty;
