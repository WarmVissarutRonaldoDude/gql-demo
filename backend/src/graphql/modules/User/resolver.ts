
import { getUserResolver } from './resolvers/getUser';
import { myUserResolver } from './resolvers/myUser';

const resolvers = {
  Query: {
    myUser: myUserResolver,
    getUser: getUserResolver
  },
  Mutation: {
    logIn: () => { throw new Error('Login Failed') }
  },
  User: {
    async __resolveType(user?: { isTradie: boolean }) {
      return user?.isTradie ? 'Tradie' : 'Customer';
    },
  },

  // what is missing !?
  Customer: {
    bookings: (): unknown[] => []
  },
  Tradie: {
    acceptedBookings: (): unknown[] => []
  }
};

export default resolvers;
