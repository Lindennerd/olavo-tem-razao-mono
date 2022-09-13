import { gql } from "@apollo/client";

export const QUERY_RANDOM_CONSPIRACY = gql`
  query Random {
    random {
      image
    }
  }
`;

export const QUERY_PHRASES = gql`
  query GetConspiracies {
    conspiracies {
      who
      are
      workingWith
      todo
    }
  }
`;

export const QUERY_MANUAL = gql`
  query Manual($who: Int, $are: Int, $workingWith: Int, $todo: Int) {
    manual(who: $who, are: $are, workingWith: $workingWith, todo: $todo) {
      text
      image
    }
  }
`;
