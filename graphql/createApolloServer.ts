import { PrismaClient } from "@prisma/client";
import { ApolloServer } from "apollo-server-micro";
import schema from "./schema";

export default function createApolloServer() {
  const prisma = new PrismaClient();
  return new ApolloServer({
    schema,
    context: () => ({
      prisma,
    }),
  });
}
