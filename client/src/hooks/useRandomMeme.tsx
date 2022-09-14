import { useQuery } from "@apollo/client";
import { QUERY_RANDOM_CONSPIRACY } from "../graphql";
import { Meme } from "../types";

export function useRandomMeme() {
  return useQuery<Meme>(QUERY_RANDOM_CONSPIRACY);
}
