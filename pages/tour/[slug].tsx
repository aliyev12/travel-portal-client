import React from "react";
import { NextPage } from "next";
import { useRouter } from "next/router";
import Tour from "../../components/tour/Tour";

interface Props {}

const TourPage: NextPage<Props> = () => {
  const router = useRouter();
  const { slug } = router.query;

  return <Tour slug={slug} />;
};

export default TourPage;
