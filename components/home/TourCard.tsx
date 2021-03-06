import React from "react";
import Router from "next/router";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActionArea from "@material-ui/core/CardActionArea";
import moment from "moment";
import getHost from "../utils/getHost";
import Spotlights from "./Spotlights";
import { colors } from "../utils/styles";
import { imgUrl } from "../utils/helpers";
import CardCollapsible from "./CardCollapsible";
import Difficulty from "./Difficulty";
import Actions from "./Actions";
import Header from "./Header";
import closestDate from "./closestDate";

export const closestTourDate = dates =>
  moment(closestDate(dates)).format("MMMM YYYY");

export interface StartLocation {
  description: string;
  address: string;
  type: string;
  coordinates: [number];
}

export interface Location {
  _id: string;
  description: string;
  type: string;
  day: number;
  coordinates: [number];
}

interface Props {
  name: string;
  slug: string;
  price: number;
  createdAt: number;
  summary: string;
  imageCover: string;
  duration: number;
  difficulty: string;
  description: string;
  startDates: [string];
  startLocation: StartLocation;
  locations: [Location];
  maxGroupSize: number;
  rating: number;
  ratingsAverage: number;
  ratingsQuantity: number;
}

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: "100%",
    margin: "auto",
    [theme.breakpoints.up("md")]: {
      maxWidth: 345
    }
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  summary: {
    fontSize: "1rem",
    color: colors.mainBlack
  }
}));

const TourCard: React.FC<Props> = ({
  name,
  slug,
  price,
  createdAt,
  summary,
  imageCover,
  difficulty,
  duration,
  startDates,
  startLocation,
  description,
  locations,
  maxGroupSize,
  rating,
  ratingsQuantity,
  ratingsAverage
}) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const place =
    startLocation && startLocation.description ? startLocation.description : "";
  const stops = locations ? locations.length : 0;

  return (
    <Grid item xs={12} md={6} lg={4}>
      <Card className={classes.root}>
        <Header name={name} createdAt={createdAt} />
        <CardActionArea
          onClick={() => {
            Router.push("/tour/[slug]", `/tour/${slug}`);
          }}
        >
          <CardMedia
            className={classes.media}
            image={imgUrl("tours", imageCover)}
            title="Paella dish"
          />
          <CardContent>
            <Difficulty difficulty={difficulty} duration={duration} />
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              className={classes.summary}
            >
              {summary}
            </Typography>
          </CardContent>
        </CardActionArea>
        <Spotlights
          date={closestTourDate(startDates)}
          place={place}
          stops={stops}
          people={maxGroupSize}
          price={`${price}`.length < 5 ? price * 100 : price}
          ratingsAverage={ratingsAverage}
          ratingsQuantity={ratingsQuantity}
        />
        <Actions
          handleExpandClick={handleExpandClick}
          expanded={expanded}
          slug={slug}
        />
        <CardCollapsible expanded={expanded} description={description} />
      </Card>
    </Grid>
  );
};

export default TourCard;
