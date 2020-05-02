import React from "react";
import App from "next/app";
import { ApolloProvider } from "react-apollo";
import withApollo, { ApolloAppProps } from "../components/WithApollo";

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
