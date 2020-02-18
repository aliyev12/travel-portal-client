import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import PlaceIcon from "@material-ui/icons/Place";
import CalendarIcon from "@material-ui/icons/CalendarToday";
import FlagIcon from "@material-ui/icons/EmojiFlagsRounded";
import PeopleIcon from "@material-ui/icons/PeopleOutlineRounded";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import TourCard from "./TourCard";
import { colors } from "../utils/styles";
import formatMoney from "../utils/formatMoney";
import Rating from "@material-ui/lab/Rating";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

interface Props {
  date: string;
  place: string;
  stops: number;
  people: number;
  price: number;
  ratingsAverage: number;
  ratingsQuantity: number;
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    margin: "1rem 2rem"
  },
  root2: {
    display: "flex",
    flexDirection: "column",
    "& > * + *": {
      marginTop: theme.spacing(1)
    }
  },
  spotlightItem: {
    display: "flex"
  },
  icon: {
    marginRight: "1rem",
    "& svg": {
      width: "2rem",
      height: "2rem",
      color: colors.mainBlue
    }
  },
  text: {
    display: "flex",
    alignItems: "center",
    height: "2rem",
    fontSize: "1rem"
  },
  details: {
    margin: "2rem 0"
  },
  price: {
    fontSize: "1.6rem"
  },
  money: {
    fontWeight: "bold"
  },
  per: {},
  ratingContainer: {
    marginTop: "1rem"
  },
  ratingLegend: {
    display: "flex",
    flexDirection: "column",
    marginBottom: "1rem"
  },
  rating: {
    pointerEvents: "none"
  }
}));

const icons = {
  place: <PlaceIcon />,
  date: <CalendarIcon />,
  stops: <FlagIcon />,
  people: <PeopleIcon />
};

const SpotlightItem = ({ icon, text }) => {
  const classes = useStyles();

  return (
    <Grid
      key={1}
      item
      xs={6}
      /*md={6} lg={4}*/ className={classes.spotlightItem}
    >
      <div className={classes.icon}>{icon}</div>
      <div className={classes.text}>{text}</div>
    </Grid>
  );
};

const Spotlights: React.FC<Props> = ({
  date,
  place,
  stops,
  people,
  price,
  ratingsAverage,
  ratingsQuantity
}) => {
  const [value, setValue] = React.useState(2);
  const classes = useStyles();

  const infoContent = {
    place: {
      icon: <PlaceIcon />,
      text: place
    },
    date: {
      icon: <CalendarIcon />,
      text: date
    },
    stops: {
      icon: <FlagIcon />,
      text: `${stops} stop${stops === 1 ? "" : "s"}`
    },
    people: {
      icon: <PeopleIcon />,
      text: `${people} ${people === 1 ? "person" : "people"}`
    }
  };

  const spotLights = [
    <SpotlightItem {...infoContent.place} key="place" />,
    <SpotlightItem {...infoContent.date} key="date" />,
    <SpotlightItem {...infoContent.stops} key="stops" />,
    <SpotlightItem {...infoContent.people} key="people" />
  ];

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        {spotLights}
      </Grid>
      <div className={classes.details}>
        <div className={classes.price}>
          <span className={classes.money}>{formatMoney(price)}</span>
          <span className={classes.per}> per person</span>
        </div>
        <div className={classes.ratingContainer}>
          <Box component="fieldset" mb={3} borderColor="transparent">
            <Typography component="legend" className={classes.ratingLegend}>
              <div>
                Average rating: <strong>{ratingsAverage}</strong>
              </div>
              <div>
                Number of ratings: <strong>{ratingsQuantity}</strong>
              </div>
            </Typography>
            <Rating
              name="rating"
              defaultValue={ratingsAverage}
              precision={0.1}
              className={classes.rating}
            />
          </Box>
        </div>
      </div>
    </div>
  );
};

export default Spotlights;
