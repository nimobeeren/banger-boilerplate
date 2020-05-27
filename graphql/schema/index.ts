import * as path from "path";
import { objectType, queryType, makeSchema } from "@nexus/schema";

const Query = queryType({
  definition(t) {
    t.list.field("users", {
      type: User,
      // TODO: get from db
      resolve: () => [{ id: 1, name: "John" }],
    });
    t.list.field("posts", {
      type: Post,
      // TODO: get from db
      resolve: () => [{ id: 100, title: "Top 7 Facts", authorId: 1 }],
    });
  },
});

const User = objectType({
  name: "User",
  definition(t) {
    t.id("id");
    t.string("name");
  },
});

const Post = objectType({
  name: "Post",
  definition(t) {
    t.id("id");
    t.string("title");
    t.id("authorId");
  },
});

const schema = makeSchema({
  types: [Query, User, Post],
  outputs: {
    schema: path.join(__dirname, "../generated/schema.graphql"),
  },
  shouldGenerateArtifacts: !!process.env.GENERATE,
});

export default schema;
