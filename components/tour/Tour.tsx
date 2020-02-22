import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import { TourFragment } from "../home/TourCards";
import { makeStyles } from "@material-ui/core/styles";
import Cover from "./Cover";
import QuickFacts from "./QuickFacts";
import TourGuides from "./TourGuides";
import About from "./About";
import Images from "./Images";
import Map from "./Map";
import Reviews from "./Reviews";
import Prompt from "./Prompt";

interface Props {
  slug: string | string[];
}

const TOUR = gql`
  query TOUR($slug: String!) {
    getTour(slug: $slug) {
      ...TourFragment
    }
  }
  ${TourFragment}
`;

const useStyles = makeStyles(theme => ({
  Tour: {},
  infoSection: {
    display: "flex",
    minHeight: "30rem"
  },
  factsAndGuides: {
    display: "flex",
    width: "50%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  }
}));

const Tour: React.FC<Props> = ({ slug }) => {
  const { loading, error, data } = useQuery(TOUR, { variables: { slug } });
  const classes = useStyles();
  console.log("Toud data = ", data);

  if (loading) return <p>Loading ...</p>;

  if (data && data.getTour) {
    const {
      name,
      price,
      createdAt,
      summary,
      guides,
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
    } = data.getTour;

    return (
      <main className={classes.Tour}>
        <Cover
          imageCover={imageCover}
          name={name}
          duration={duration}
          startLocation={startLocation}
        />
        <div className={classes.infoSection}>
          <div className={classes.factsAndGuides}>
            <QuickFacts
              startDates={startDates}
              difficulty={difficulty}
              people={maxGroupSize}
              rating={ratingsAverage}
            />
            <TourGuides guides={guides} />
          </div>
          <About name={name} description={description} />
        </div>
        <Images />
        <Map />
        <Reviews />
        <Prompt />
      </main>
    );
  }
};

export default Tour;
