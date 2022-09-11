import dotenv from "dotenv";
dotenv.config();

type Env = {
  PORT: number;
  graphqlPath: string;
};

export const env: Env = {
  PORT: Number(process.env.PORT || "3000"),
  graphqlPath: process.env.GRAPHQL_PATH || "/graphql",
};
