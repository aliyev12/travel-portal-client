import { NextPage } from "next";
import HomePage from "../components/home/Home";

const Home: NextPage<{ userAgent: string; nodeEnv: string }> = ({
  userAgent,
  nodeEnv
}) => {
  return <HomePage nodeEnv={nodeEnv} />;
};

Home.getInitialProps = async ({ req }) => {
  // console.log("headers = ", req.headers);
  // console.log("req = ", req);
  // console.log("process.env = ", process.env);
  const nodeEnv = process.env.NODE_ENV;
  const userAgent = req ? req.headers["user-agent"] || "" : navigator.userAgent;
  return { userAgent, nodeEnv };
};

export default Home;
