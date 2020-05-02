import express from "express";
import { ApolloServer } from "apollo-server-express";
import typeDefs from "../../graphql/schema";

const app = express();

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
