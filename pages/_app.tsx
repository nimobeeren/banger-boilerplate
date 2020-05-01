import React from "react";
import App from "next/app";
import withApollo, { ApolloAppProps } from "../components/WithApollo";
import { ApolloProvider } from "react-apollo";

class MyApp extends App<ApolloAppProps> {
  render() {
    const { Component, pageProps, apolloClient } = this.props;

    return (
      <ApolloProvider client={apolloClient}>
        <Component {...pageProps} />
      </ApolloProvider>
    );
  }
}

// @ts-ignore
export default withApollo(MyApp);
