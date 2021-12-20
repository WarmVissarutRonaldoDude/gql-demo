import { GraphQLSchema } from 'graphql';
import { makeExecutableSchema } from '@graphql-tools/schema';
import { Context } from '@src/graphql/models/context';
import typeDefs from './typeDefs';
import resolvers from './resolvers';

export const createSchema = (): GraphQLSchema => makeExecutableSchema<Context>({
  typeDefs,
  resolvers,
});
