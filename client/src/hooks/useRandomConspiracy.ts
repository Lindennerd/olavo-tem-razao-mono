import { useQuery } from "@apollo/client";
import { QUERY_RANDOM_CONSPIRACY } from "../graphql";
import { Random } from "../types/meme";

export function useRandomConspiracy() {
  return useQuery<Random>(QUERY_RANDOM_CONSPIRACY);
}
