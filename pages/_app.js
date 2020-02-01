import React from "react";
import Layout from "../components/global/Layout";

export default ({ Component, pageProps }) => (
  <Layout>
    <Component {...pageProps} />
  </Layout>
);
