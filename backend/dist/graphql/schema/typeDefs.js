Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _schema = _interopRequireDefault(require("../modules/User/schema"));
var _graphqlTag = _interopRequireDefault(require("graphql-tag"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const baseSchema = _graphqlTag.default`
  type Query {
    _: String
  }

  type Mutation {
    _: String
  }
`;
var _default = [
    baseSchema,
    _schema.default
];
exports.default = _default;
