Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _resolver = _interopRequireDefault(require("../modules/User/resolver"));
var _lodash = require("lodash");
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const resolvers = (0, _lodash).merge(_resolver.default);
var _default = resolvers;
exports.default = _default;
