Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.start = void 0;
var _cors = _interopRequireDefault(require("cors"));
var _express = _interopRequireDefault(require("express"));
var _apolloServerExpress = require("apollo-server-express");
var _createSchema = require("./schema/createSchema");
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const start = async (opts)=>{
    const app = (0, _express).default();
    app.use((0, _cors).default());
    app.use(_express.default.json({
        limit: "10mb"
    }));
    const server = new _apolloServerExpress.ApolloServer({
        schema: (0, _createSchema).createSchema(),
        introspection: true
    });
    await server.start();
    server.applyMiddleware({
        app,
        path: "/graphql"
    });
    const { port  } = opts;
    app.listen(port);
};
exports.start = start;
