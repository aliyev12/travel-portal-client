import { NextPage } from "next";
import HomePage from "../components/home/Home";

const Home: NextPage<{ userAgent: string }> = ({ userAgent }) => {
  return <HomePage />;
};

Home.getInitialProps = async ({ req }) => {
  const userAgent = req ? req.headers["user-agent"] || "" : navigator.userAgent;
  return { userAgent };
};

export default Home;
