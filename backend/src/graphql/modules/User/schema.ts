import gql from "graphql-tag";

const UserSchema = gql`
  extend type Query {
    myUser: User
    getUser(userId: ID!): User
  }

  extend type Mutation {
    logIn(credential: LoginCredential!): LoginResult!
  }

  input LoginCredential {
    userId: ID!
    password: String!
  }

  type LoginResult {
    token: String!
  }

  """
  number will not contain countryCode as prefix.
  """
  type Phone {
    number: String!
    countryCode: String!
  }

  type Profile {
    firstName: String!
    lastName: String!
    phone: Phone!
    phoneNumber: String! @deprecated(reason: "please use phone type instead")
    email: String!
  }

  interface User {
    profile: Profile!
  }

  type Customer implements User {
    profile: Profile!

    # TODO: move booking related to booking schema.
    bookings: [Booking!]! 
  }

  type Tradie implements User {
    profile: Profile!

    # NOTE: you might want different types for tradie jobs
    acceptedBookings: [Booking!]!
  }

  type Booking {
    id: ID!
    acceptedTradie: Tradie
    lead: Lead
  }

  type Lead {
    id: ID!
    category: Category!
  }

  enum Category {
    ELECTRIC
    PUMP
  }
`;

export default UserSchema;
