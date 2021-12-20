import cors from "cors";
import express from "express";
import { ApolloServer } from "apollo-server-express";
import { createSchema } from "./schema/createSchema";

const start = async (opts: { port: number }): Promise<void> => {
  const app = express();

  app.use(cors());
  app.use(
    express.json({
      limit: "10mb",
    })
  );

  const server = new ApolloServer({
    schema: createSchema(),
    introspection: true,
  });

  await server.start();

  server.applyMiddleware({ app, path: "/graphql" });

  const { port } = opts;
  app.listen(port);
};

export { start };
