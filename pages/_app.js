import React from "react";
import App from "next/app";
import { ApolloProvider } from "@apollo/react-hooks";
import Layout from "../components/global/Layout";
import withData from "../components/utils/apollo-client";

class MyApp extends App {
  render() {
    const { Component, pageProps, apollo } = this.props;

    return (
      <ApolloProvider client={apollo}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ApolloProvider>
    );
  }
}

export default withData(MyApp);
