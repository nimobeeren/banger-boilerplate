import * as path from "path";
import { queryType, makeSchema } from "@nexus/schema";

const Query = queryType({
  definition(t) {
    t.string("hello", {
      resolve: () => "Hello world!",
    });
    t.string("foo", {
      resolve: () => "bar",
    });
  },
});

const schema = makeSchema({
  types: [Query],
  outputs: {
    schema: path.join(__dirname, "../generated/schema.graphql"),
  },
  shouldGenerateArtifacts: !!process.env.GENERATE,
});

export default schema;
