import User from "@src/graphql/modules/User/schema";

import gql from "graphql-tag";

const baseSchema = gql`
  type Query {
    _: String
  }

  type Mutation {
    _: String
  }
`;

export default [baseSchema, User];
