import { start } from "./graphql/bootup";

const port = 8080;

(async () => {
  await start({ port });

  console.info(`GQL start at port ${port}`)
})();
