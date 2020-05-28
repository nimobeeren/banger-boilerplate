import { PrismaClient } from "@prisma/client";
import { ApolloServer } from "apollo-server-micro";
import schema from "../../graphql/schema";

const prisma = new PrismaClient();

const apolloServer = new ApolloServer({ schema, context: () => ({ prisma }) });

export const config = {
  api: {
    bodyParser: false,
  },
};

export default apolloServer.createHandler({ path: "/api/graphql" });
