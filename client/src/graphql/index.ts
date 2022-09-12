import { gql } from "@apollo/client";

export const QUERY_RANDOM_CONSPIRACY = gql`
  query {
    random {
      image
    }
  }
`;
