import path from "path";
import { queryType, makeSchema } from "@nexus/schema";

const Query = queryType({
  definition(t) {
    t.string("hello", {
      resolve: () => "Hello world!",
    });
  },
});

const schema = makeSchema({
  types: [Query],
  outputs: {
    schema: path.join(__dirname, "./schema.generated.graphql"),
    typegen: path.join(__dirname, "./nexus-schema-types.generated.ts"),
  },
});

export default schema;
