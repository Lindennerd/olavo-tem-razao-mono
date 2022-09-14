import { useLazyQuery } from "@apollo/client";
import { QUERY_MANUAL } from "../graphql";
import { Manual } from "../types";

export function useManualMeme() {
  return useLazyQuery<Manual>(QUERY_MANUAL);
}
