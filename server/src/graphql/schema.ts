export const typeDefs = `#graphql
  type User {
    id: ID!
    username: String!
    password: String!
  }

  type Query {
    users: [User]
  }

  type Mutation {
    addUser(username: String!, password: String!): User
    login(username: String!, password: String!): String
  }
`;


