import userResolver from '@src/graphql/modules/User/resolver';
import { merge } from 'lodash';

const resolvers = merge(userResolver);

export default resolvers;
