var _bootup = require("./graphql/bootup");
const port = 8080;
(async ()=>{
    await (0, _bootup).start({
        port
    });
    console.info(`GQL start at port ${port}`);
})();
