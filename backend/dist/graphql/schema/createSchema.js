Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.createSchema = void 0;
var _schema = require("@graphql-tools/schema");
var _typeDefs = _interopRequireDefault(require("./typeDefs"));
var _resolvers = _interopRequireDefault(require("./resolvers"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const createSchema = ()=>(0, _schema).makeExecutableSchema({
        typeDefs: _typeDefs.default,
        resolvers: _resolvers.default
    })
;
exports.createSchema = createSchema;
