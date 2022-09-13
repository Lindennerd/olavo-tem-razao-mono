export const typeDefs = /* GraphQL */ `
  type Conspiracies {
    who: [String]
    are: [String]
    workingWith: [String]
    todo: [String]
  }

  type Result {
    image: String
    text: String
  }

  type Query {
    conspiracies: Conspiracies
    random: Result
    manual(who: Int, are: Int, workingWith: Int, todo: Int): Result
  }
`;
