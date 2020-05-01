import express from "express";
import { ApolloServer, gql } from "apollo-server-express";

const app = express();

const typeDefs = gql`
  type Query {
    hello: String
  }
`;

const resolvers = {
  Query: {
    hello: () => "Hello world!",
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
  playground: true,
});

server.applyMiddleware({ app, path: "*" });

export const config = {
  api: {
    bodyParser: false,
  },
};

export default app;
