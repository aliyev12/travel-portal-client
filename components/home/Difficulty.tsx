import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import FitnessIcon from "@material-ui/icons/FitnessCenterRounded";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Rating from "@material-ui/lab/Rating";
import { colors } from "../utils/styles";

interface Props {
  difficulty: string;
  duration: number;
}

const useStyles = makeStyles(theme => ({
  box: {
    marginBottom: "1rem"
  },
  difficultyTitle: {
    textTransform: "uppercase",
    fontWeight: 700,
    marginBottom: "1rem"
  }
}));

const StyledRating = withStyles({
  iconFilled: {
    color: colors.mainBlue
  },
  iconHover: {
    color: colors.mainBlue
  }
})(Rating);

const Difficulty: React.FC<Props> = ({ difficulty, duration }) => {
  const classes = useStyles();

  return (
    <Box
      className={classes.box}
      component="fieldset"
      mb={3}
      borderColor="transparent"
    >
      <Typography component="legend" className={classes.difficultyTitle}>
        {difficulty === "medium" ? "medium-difficult" : difficulty} {duration}
        -day-trip
      </Typography>
      <StyledRating
        name="Difficulty Level"
        precision={1}
        readOnly
        defaultValue={
          difficulty === "easy" ? 1 : difficulty === "medium" ? 2 : 3
        }
        max={3}
        icon={<FitnessIcon fontSize="inherit" />}
      />
    </Box>
  );
};

export default Difficulty;
