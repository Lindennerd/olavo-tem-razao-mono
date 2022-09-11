import express, { Request, Response } from "express";
import { graphqlHTTP, GraphQLParams } from "express-graphql";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { env } from "./env";
import { resolvers } from "./schema/resolvers";
import { typeDefs } from "./schema/type-defs";
import cors from "cors";
import morgan from "morgan";

const app = express();
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

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
