import * as path from "path";
import { nexusPrismaPlugin } from "nexus-prisma";
import { objectType, queryType, makeSchema, mutationType } from "@nexus/schema";

const Query = queryType({
  definition(t) {
    t.crud.todos();
  },
});

const Mutation = mutationType({
  definition(t) {
    t.crud.createOneTodo();
    t.crud.updateOneTodo();
  },
});

const Todo = objectType({
  name: "Todo",
  definition(t) {
    t.model.id();
    t.model.title();
    t.model.done();
  },
});

const schema = makeSchema({
  types: [Query, Mutation, Todo],
  plugins: [nexusPrismaPlugin()],
  outputs: {
    schema: path.join(__dirname, "../generated/schema.graphql"),
    typegen: path.join(
      __dirname,
      "../../node_modules/@types/nexus-typegen/index.d.ts"
    ),
  },
  shouldGenerateArtifacts: !!process.env.GENERATE,
});

export default schema;
