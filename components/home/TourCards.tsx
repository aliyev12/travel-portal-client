import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import TourCard from "./TourCard";
import Loader from "../common/Loader";

export const TourFragment = gql`
  fragment TourFragment on Tour {
    id
    slug
    name
    price
    rating
    description
    ratingsAverage
    ratingsQuantity
    duration
    createdAt
    images
    maxGroupSize
    summary
    imageCover
    difficulty
    startDates
    guides {
      id
      role
      name
      email
      photo
      createdAt
      updatedAt
    }
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
`;

const ALL_TOURS = gql`
  query ALL_TOURS {
    getAllTours {
      ...TourFragment
    }
  }
  ${TourFragment}
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

  if (loading) return <Loader />;

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
