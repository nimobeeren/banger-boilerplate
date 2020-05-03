import express from "express";
import { ApolloServer } from "apollo-server-express";
import schema from "../../graphql/schema";

const app = express();

const server = new ApolloServer({
  schema,
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
