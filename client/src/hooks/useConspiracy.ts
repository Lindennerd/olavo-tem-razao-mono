import { QUERY_MANUAL } from "./../graphql/index";
import { useQuery, useLazyQuery } from "@apollo/client";
import { QUERY_RANDOM_CONSPIRACY } from "../graphql";
import { Manual, Meme, Random } from "../types";

export interface ManualVariables {
  who: number;
  are: number;
  workingWith: number;
  todo: number;
}

export function useConspiracy() {
  return {
    random() {
      return useQuery<Meme>(QUERY_RANDOM_CONSPIRACY);
    },

    manual() {
      return useLazyQuery<Manual>(QUERY_MANUAL);
    },
  };
}
