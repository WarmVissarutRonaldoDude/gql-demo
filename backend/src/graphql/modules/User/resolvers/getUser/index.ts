import { Context } from '@src/graphql/models/context';
import { GraphQLFieldResolver } from 'graphql';

export const getUserResolver: GraphQLFieldResolver<
  Record<string, unknown>,
  Context,
  {}
> = async (_, args, context) => {
  // example context has user token.

  // Mock data
  return {
    profile: {
      firstName: "John",
      lastName: "Snow",
      phone: {
        number: '299999999',
        countryCode: '+1'
      },
      email: 'snow@got.com',
    },
    // extra fields
    isTradie: true
  }
};
