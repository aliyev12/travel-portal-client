import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

interface Props {
  slug: string | string[];
}

const TOUR = gql`
  query TOUR($slug: String!) {
    getTour(slug: $slug) {
      name
    }
  }
`;

const Tour: React.FC<Props> = ({ slug }) => {
  const { loading, error, data } = useQuery(TOUR, { variables: { slug } });

  console.log("Toud data = ", data);

  if (loading) return <p>Loading ...</p>;

  return <div>hi there, this is a tour page</div>;
};

export default Tour;
