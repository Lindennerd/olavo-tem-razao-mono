import { Conspiracies } from "./../types/index";
import { QUERY_PHRASES } from "./../graphql/index";
import { useLazyQuery, useQuery } from "@apollo/client";

export function usePhrases() {
  return useQuery<Conspiracies>(QUERY_PHRASES);
}
