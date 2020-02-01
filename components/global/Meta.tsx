import React from "react";
import Head from "next/head";

interface Props {}

const Meta: React.FC<Props> = () => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <link
        rel="shortcut icon"
        type="image/x-icon"
        href="/static/favicon.png"
      />
      <link rel="stylesheet" type="text/css" href="/static/nprogress.css" />
      <title>Travel Portal</title>
    </Head>
  );
};

export default Meta;
