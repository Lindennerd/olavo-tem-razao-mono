import express, { Request, Response } from "express";
import { graphqlHTTP, GraphQLParams } from "express-graphql";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { env } from "./env";
import { resolvers } from "./schema/resolvers";
import { typeDefs } from "./schema/type-defs";

const app = express();
app.use(express.json());

app.use(
  env.graphqlPath,
  graphqlHTTP({
    schema: makeExecutableSchema({
      typeDefs,
      resolvers,
    }),
    graphiql: true,
  })
);

export default app;
