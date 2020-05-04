// TODO: connect prisma to graphql and remove this file
import { NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async (_: any, res: NextApiResponse) => {
  const hello = await prisma.hello.findMany();
  console.log({ hello });

  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(hello));
};
