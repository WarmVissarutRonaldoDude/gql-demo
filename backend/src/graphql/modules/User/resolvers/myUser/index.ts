import { Context } from "@src/graphql/models/context";
import { GraphQLFieldResolver } from "graphql";

export const myUserResolver: GraphQLFieldResolver<
  Record<string, unknown>,
  Context,
  {
    userId: string;
  }
> = async (_, args) => {
  const { userId } = args;

  // NOTE: this can call UserService which's in HTTP API or any API.
  // Mock data
  return {
    profile: {
      firstName: "Jinx",
      lastName: "Powpow",
      phone: {
        number: "21113333",
        countryCode: "+1",
      },
      email: 'powpow@arcane.com',
    },
  };
};
