interface Env {
  API: string;
}

export const env: Env = {
  API: process.env.API || "http://localhost:5000/graphql",
};
