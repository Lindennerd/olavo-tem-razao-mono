export const typeDefs = /* GraphQL */ `
  enum Gender {
    Male
    Female
  }

  type Who {
    text: String
    gender: Gender
    isPlural: Boolean
  }

  type WorkingWith {
    text: String
    gender: Gender
  }

  type Are {
    text: String
  }

  type Todo {
    text: String
  }

  type Conspiracies {
    who: [Who]
    are: [Are]
    WorkingWith: [WorkingWith]
    todo: [Todo]
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
