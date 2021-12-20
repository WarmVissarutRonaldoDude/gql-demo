Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _getUser = require("./resolvers/getUser");
var _myUser = require("./resolvers/myUser");
const resolvers = {
    Query: {
        myUser: _myUser.myUserResolver,
        getUser: _getUser.getUserResolver
    },
    Mutation: {
        logIn: ()=>{
            throw new Error('Login Failed');
        }
    },
    User: {
        async __resolveType (user) {
            return (user == null ? void 0 : user.isTradie) ? 'Tradie' : 'Customer';
        }
    },
    // what is missing !?
    Customer: {
        bookings: ()=>[]
    },
    Tradie: {
        acceptedBookings: ()=>[]
    }
};
var _default = resolvers;
exports.default = _default;
