import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import TourCard from "./TourCard";

const ALL_TOURS = gql`
  query ALL_TOURS {
    getAllTours {
      id
      name
      price
      rating
      ratingsAverage
      ratingsQuantity
      duration
      createdAt
      maxGroupSize
      summary
      imageCover
      difficulty
      startDates
      startLocation {
        description
        address
        coordinates
        type
      }
      locations {
        _id
        description
        day
        coordinates
        type
      }
    }
  }
`;

interface Props {}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  }
}));

const TourCards: React.FC<Props> = () => {
  const { loading, error, data } = useQuery(ALL_TOURS);
  const classes = useStyles();

  if (loading) return <p>Loading ...</p>;

  const { getAllTours } = data;

  return (
    <Grid container spacing={3}>
      {getAllTours &&
        getAllTours.length &&
        getAllTours.map(tour => {
          return <TourCard key={tour.id} {...tour} />;
        })}
    </Grid>
  );
};

export default TourCards;